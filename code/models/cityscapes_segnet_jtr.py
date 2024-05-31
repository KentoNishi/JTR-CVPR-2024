import torch
import torch.nn as nn
import torch.nn.functional as F
import copy
from utils.process import (
    preprocess_depth_gt,
    preprocess_seg_gt,
    preprocess_seg_pred,
    get_jtr_mask_intersection_cityscapes,
    preprocess_depth_pred,
    get_recon_loss_depth,
    get_recon_loss_seg,
)


class SegNet_JTR(nn.Module):
    def __init__(self, channel_dims):
        super(SegNet_JTR, self).__init__()

        self.channel_dims = channel_dims
        self.num_tasks = len(self.channel_dims)
        in_channels = sum(channel_dims)

        # initialise network parameters
        filter = [64, 128, 256, 512, 512]

        # define encoder decoder layers
        self.encoder_block = nn.ModuleList([self.conv_layer([in_channels, filter[0]])])
        self.decoder_block = nn.ModuleList([self.conv_layer([filter[0], filter[0]])])
        for i in range(4):
            self.encoder_block.append(self.conv_layer([filter[i], filter[i + 1]]))
            self.decoder_block.append(self.conv_layer([filter[i + 1], filter[i]]))

        # define convolution layer
        self.conv_block_enc = nn.ModuleList([self.conv_layer([filter[0], filter[0]])])
        self.conv_block_dec = nn.ModuleList([self.conv_layer([filter[0], filter[0]])])
        for i in range(4):
            if i == 0:
                self.conv_block_enc.append(
                    self.conv_layer([filter[i + 1], filter[i + 1]])
                )
                self.conv_block_dec.append(self.conv_layer([filter[i], filter[i]]))
            else:
                self.conv_block_enc.append(
                    nn.Sequential(
                        self.conv_layer([filter[i + 1], filter[i + 1]]),
                        self.conv_layer([filter[i + 1], filter[i + 1]]),
                    )
                )
                self.conv_block_dec.append(
                    nn.Sequential(
                        self.conv_layer([filter[i], filter[i]]),
                        self.conv_layer([filter[i], filter[i]]),
                    )
                )

        # define task specific layers
        self.pred_layer = nn.Sequential(
            nn.Conv2d(
                in_channels=filter[0], out_channels=filter[0], kernel_size=3, padding=1
            ),
            nn.Conv2d(
                in_channels=filter[0],
                out_channels=in_channels,
                kernel_size=1,
                padding=0,
            ),
        )

        # define pooling and unpooling functions
        self.down_sampling = nn.MaxPool2d(kernel_size=2, stride=2, return_indices=True)
        self.up_sampling = nn.MaxUnpool2d(kernel_size=2, stride=2)

        self.batchnorm = nn.BatchNorm2d(num_features=in_channels)

        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.xavier_normal_(m.weight)
                if m.bias is not None:
                    nn.init.constant_(m.bias, 0)
            elif isinstance(m, nn.BatchNorm2d):
                nn.init.constant_(m.weight, 1)
                nn.init.constant_(m.bias, 0)
            elif isinstance(m, nn.Linear):
                nn.init.xavier_normal_(m.weight)
                nn.init.constant_(m.bias, 0)

    # define convolutional block
    def conv_layer(self, channel):
        conv_block = nn.Sequential(
            nn.Conv2d(
                in_channels=channel[0],
                out_channels=channel[1],
                kernel_size=3,
                padding=1,
            ),
            nn.BatchNorm2d(num_features=channel[1]),
            nn.ReLU(inplace=True),
        )
        return conv_block

    def forward(self, x, return_feat_only=False):
        g_encoder, g_decoder, g_maxpool, g_upsampl, indices = (
            [0] * 5 for _ in range(5)
        )
        for i in range(5):
            g_encoder[i], g_decoder[-i - 1] = ([0] * 2 for _ in range(2))

        # global shared encoder-decoder network
        for i in range(5):
            if i == 0:
                g_encoder[i][0] = self.encoder_block[i](x)
                g_encoder[i][1] = self.conv_block_enc[i](g_encoder[i][0])
                g_maxpool[i], indices[i] = self.down_sampling(g_encoder[i][1])
            else:
                g_encoder[i][0] = self.encoder_block[i](g_maxpool[i - 1])
                g_encoder[i][1] = self.conv_block_enc[i](g_encoder[i][0])
                g_maxpool[i], indices[i] = self.down_sampling(g_encoder[i][1])
        feat = [g_maxpool[i]]
        if return_feat_only:
            return feat[0]
        # feat = [g_maxpool]
        for i in range(5):
            if i == 0:
                g_upsampl[i] = self.up_sampling(g_maxpool[-1], indices[-i - 1])
                g_decoder[i][0] = self.decoder_block[-i - 1](g_upsampl[i])
                g_decoder[i][1] = self.conv_block_dec[-i - 1](g_decoder[i][0])
            else:
                g_upsampl[i] = self.up_sampling(g_decoder[i - 1][-1], indices[-i - 1])
                g_decoder[i][0] = self.decoder_block[-i - 1](g_upsampl[i])
                g_decoder[i][1] = self.conv_block_dec[-i - 1](g_decoder[i][0])

        feat.append(g_decoder[i][1])
        # feat.append(g_decoder)

        # define task prediction layers
        t_pred = self.pred_layer(g_decoder[i][1])

        return feat[0], t_pred

    def compute_losses(
        self,
        items_1,
        items_2,
        labeled_tasks,
        num_classes,
        recon_dist_weight,
    ):
        [
            train_pred_seg_1,
            train_pred_depth_1,
            train_seg_1,
            train_depth_1,
        ] = [
            items_1[i].detach() if i in labeled_tasks else items_1[i]
            for i in range(2 * 2)
        ]
        [
            train_pred_seg_2,
            train_pred_depth_2,
            train_seg_2,
            train_depth_2,
        ] = [
            items_2[i].detach() if i in labeled_tasks else items_2[i]
            for i in range(2 * 2)
        ]

        mask_1 = get_jtr_mask_intersection_cityscapes(
            train_seg_1, train_depth_1, labeled_tasks
        )
        mask_2 = get_jtr_mask_intersection_cityscapes(
            train_seg_2, train_depth_2, labeled_tasks
        )

        Y_hat_1 = torch.cat(
            [
                preprocess_seg_pred(train_pred_seg_1, mask_1, hard=True),
                preprocess_depth_pred(train_pred_depth_1, mask_1),
            ],
            dim=1,
        )
        Y_1 = torch.cat(
            [
                (
                    preprocess_seg_gt(train_seg_1, num_classes)
                    if 0 in labeled_tasks
                    else preprocess_seg_pred(train_pred_seg_1, mask_1, hard=True)
                ),
                (
                    preprocess_depth_gt(train_depth_1)
                    if 1 in labeled_tasks
                    else preprocess_depth_pred(train_pred_depth_1, mask_1)
                ),
            ],
            dim=1,
        )
        Y_hat_2 = torch.cat(
            [
                preprocess_seg_pred(train_pred_seg_2, mask_2),
                preprocess_depth_pred(train_pred_depth_2, mask_2),
            ],
            dim=1,
        )
        Y_2 = torch.cat(
            [
                (
                    preprocess_seg_gt(train_seg_2, num_classes)
                    if 0 in labeled_tasks
                    else preprocess_seg_pred(train_pred_seg_2, mask_2, hard=True)
                ),
                (
                    preprocess_depth_gt(train_depth_2)
                    if 1 in labeled_tasks
                    else preprocess_depth_pred(train_pred_depth_2, mask_2)
                ),
            ],
            dim=1,
        )

        copied = copy.deepcopy(self)

        feat_Y_1 = copied(Y_1, return_feat_only=True)
        feat_Y_hat_1 = copied(Y_hat_1, return_feat_only=True)
        feat_Y_2, recon_Y_2 = self(Y_2.detach())
        feat_Y_hat_2, recon_Y_hat_2 = self(Y_hat_2.detach())
        recon_Y_2_seg, recon_Y_2_depth = torch.split(
            recon_Y_2, self.channel_dims, dim=1
        )
        recon_Y_hat_2_seg, recon_Y_hat_2_depth = torch.split(
            recon_Y_hat_2, self.channel_dims, dim=1
        )

        L_dist = (
            1 - F.cosine_similarity(feat_Y_1, feat_Y_hat_1, dim=1, eps=1e-12).mean()
        ) + recon_dist_weight * (
            1 - F.cosine_similarity(feat_Y_2, feat_Y_hat_2, dim=1, eps=1e-12).mean()
        )
        L_recon = (
            get_recon_loss_seg(
                recon_Y_2_seg,
                (
                    preprocess_seg_gt(train_seg_2, num_classes)
                    if 0 in labeled_tasks
                    else preprocess_seg_pred(train_pred_seg_2, mask_2, hard=True)
                ),
                mask_2,
            )
            + get_recon_loss_depth(
                recon_Y_2_depth,
                (train_depth_2 if 1 in labeled_tasks else train_pred_depth_2),
                mask_2,
            )
            + get_recon_loss_seg(
                recon_Y_hat_2_seg,
                preprocess_seg_pred(train_pred_seg_2, mask_2, hard=True),
                mask_2,
            )
            + get_recon_loss_depth(
                recon_Y_hat_2_depth,
                preprocess_depth_pred(train_pred_depth_2, mask_2),
                mask_2,
            )
        )

        return L_dist, L_recon
