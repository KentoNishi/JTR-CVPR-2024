from torch.utils.data.dataset import Dataset

import os
import torch
import fnmatch
import numpy as np
import random
import torch.nn.functional as F
from .randaugment import ImgAugment


class RandomScaleCrop(object):
    """
    Credit to Jialong Wu from https://github.com/lorenmt/mtan/issues/34.
    """

    def __init__(self, scale=[1.0, 1.2, 1.5]):
        self.scale = scale

    def __call__(self, img, label, depth):
        height, width = img.shape[-2:]
        sc = self.scale[random.randint(0, len(self.scale) - 1)]
        h, w = int(height / sc), int(width / sc)
        i = random.randint(0, height - h)
        j = random.randint(0, width - w)
        # pdb.set_trace()
        img_ = F.interpolate(
            img[None, :, i : i + h, j : j + w],
            size=(height, width),
            mode="bilinear",
            align_corners=True,
        ).squeeze(0)
        label_ = (
            F.interpolate(
                label[None, None, i : i + h, j : j + w],
                size=(height, width),
                mode="nearest",
            )
            .squeeze(0)
            .squeeze(0)
        )
        depth_ = F.interpolate(
            depth[None, :, i : i + h, j : j + w], size=(height, width), mode="nearest"
        ).squeeze(0)
        _sc = sc
        _h, _w, _i, _j = h, w, i, j

        return (
            img_,
            label_,
            depth_ / sc,
            torch.tensor([_sc, _h, _w, _i, _j, height, width]),
        )


class Cityscapes_MTL(Dataset):
    """
    This file is directly modified from https://pytorch.org/docs/stable/torchvision/datasets.html
    """

    def __init__(
        self,
        root,
        train=True,
    ):
        self.train = train
        self.root = os.path.expanduser(root)
        self.augmenter = ImgAugment(
            num_ops=2, magnitude=6, num_magnitude_bins=31, magnitude_sampling=True
        )

        # R\read the data file
        if train:
            self.data_path = root + "/train"
        else:
            self.data_path = root + "/val"

        # calculate data length
        self.data_len = len(
            fnmatch.filter(os.listdir(self.data_path + "/image"), "*.npy")
        )

    def __getitem__(self, index):
        # get image name from the pandas df
        image = torch.from_numpy(
            np.moveaxis(
                np.load(self.data_path + "/image/{:d}.npy".format(index)), -1, 0
            )
        )
        semantic = torch.from_numpy(
            np.load(self.data_path + "/label_7/{:d}.npy".format(index))
        )
        depth = torch.from_numpy(
            np.moveaxis(
                np.load(self.data_path + "/depth/{:d}.npy".format(index)), -1, 0
            )
        )

        if self.train:
            if torch.rand(1) < 0.5:
                image_0 = torch.flip(image, dims=[2])
                semantic_0 = torch.flip(semantic, dims=[1])
                depth_0 = torch.flip(depth, dims=[2])
            else:            
                image_0, semantic_0, depth_0 = image, semantic, depth
            image_0, semantic_0, depth_0, _ = RandomScaleCrop()(
                image_0, semantic_0, depth_0
            )
            if torch.rand(1) < 0.5:
                image_1 = torch.flip(image_0, dims=[2])
                semantic_1 = torch.flip(semantic_0, dims=[1])
                depth_1 = torch.flip(depth_0, dims=[2])
            else:
                image_1, semantic_1, depth_1 = image_0, semantic_0, depth_0
            image_1, semantic_1, depth_1, _ = RandomScaleCrop()(
                image_1, semantic_1, depth_1
            )
            if torch.rand(1) < 0.5:
                image_2 = torch.flip(image_0, dims=[2])
                semantic_2 = torch.flip(semantic_0, dims=[1])
                depth_2 = torch.flip(depth_0, dims=[2])
            else:
                image_2, semantic_2, depth_2 = image_0, semantic_0, depth_0
            image_2, semantic_2, depth_2, _ = RandomScaleCrop()(
                image_0, semantic_0, depth_0
            )

            image_0 = self.augmenter(image_0)
            image_1 = self.augmenter(image_1)
            image_2 = self.augmenter(image_2)

            return (
                index,
                image_0.type(torch.FloatTensor),
                semantic_0.type(torch.FloatTensor),
                depth_0.type(torch.FloatTensor),
                image_1.type(torch.FloatTensor),
                semantic_1.type(torch.FloatTensor),
                depth_1.type(torch.FloatTensor),
                image_2.type(torch.FloatTensor),
                semantic_2.type(torch.FloatTensor),
                depth_2.type(torch.FloatTensor),
            )
        else:
            return (
                image.type(torch.FloatTensor),
                semantic.type(torch.FloatTensor),
                depth.type(torch.FloatTensor),
            )

    def __len__(self):
        return self.data_len
