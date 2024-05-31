if __name__ == "__main__":
    import os
    import torch
    import torch.optim as optim
    from utils import *
    from models.cityscapes_segnet_mtl import SegNet_MTL
    from models.cityscapes_segnet_jtr import SegNet_JTR
    from datasets.cityscapes import Cityscapes_MTL
    from torch.utils.data import DataLoader
    from tqdm import tqdm

    parser = get_base_arg_parser("JTR Cityscapes onelabel", {"batch_size": 16})
    parser.add_argument(
        "--seg-baseline", required=True, type=float, help="Seg. Baseline"
    )
    parser.add_argument(
        "--depth-baseline", required=True, type=float, help="Depth Baseline"
    )
    args = parser.parse_args()
    num_classes = 7
    channel_dims = [num_classes, 1]

    torch.manual_seed(args.seed)
    torch.cuda.manual_seed(args.seed)

    logger = get_logger_cityscapes()
    mkdir_recursive(args.out_dir)
    model = SegNet_MTL().cuda()
    jtr = SegNet_JTR(channel_dims).cuda()

    params = list(model.parameters()) + list(jtr.parameters())
    optimizer = optim.Adam(params, lr=1e-4)
    scheduler = optim.lr_scheduler.StepLR(
        optimizer, step_size=args.step_size, gamma=0.5
    )

    label_weights = (
        torch.load(os.path.join(args.label_dir, f"onelabel.pth"))[
            "labels_weights"
        ]
        .float()
        .cuda()
    )
    cityscapes_train_set = Cityscapes_MTL(
        root=args.data_dir,
        train=True,
    )
    cityscapes_train_loader = DataLoader(
        cityscapes_train_set,
        batch_size=args.batch_size,
        shuffle=True,
        num_workers=args.num_workers,
    )
    cityscapes_test_set = Cityscapes_MTL(
        root=args.data_dir,
        train=False,
    )
    cityscapes_test_loader = DataLoader(
        cityscapes_test_set,
        batch_size=args.batch_size,
        shuffle=False,
        num_workers=args.num_workers,
    )

    best_delta_mtl = float("-inf")
    for epoch in range(args.num_epochs):
        bar = tqdm(cityscapes_train_loader)
        model.train()
        jtr.train()
        for batch_idx, (
            train_idx,
            train_input_0,
            train_seg_0,
            train_depth_0,
            train_input_1,
            train_seg_1,
            train_depth_1,
            train_input_2,
            train_seg_2,
            train_depth_2,
        ) in enumerate(bar):
            bar.set_description(f"Epoch {epoch}")
            (
                train_input_0,
                train_seg_0,
                train_depth_0,
                train_input_1,
                train_seg_1,
                train_depth_1,
                train_input_2,
                train_seg_2,
                train_depth_2,
            ) = (
                train_input_0.cuda(),
                train_seg_0.type(torch.LongTensor).cuda(),
                train_depth_0.cuda(),
                train_input_1.cuda(),
                train_seg_1.type(torch.LongTensor).cuda(),
                train_depth_1.cuda(),
                train_input_2.cuda(),
                train_seg_2.type(torch.LongTensor).cuda(),
                train_depth_2.cuda(),
            )
            train_data_cat = torch.cat(
                (train_input_0, train_input_1, train_input_2), dim=0
            )
            train_pred_cat, _ = model(train_data_cat)
            train_pred_0, train_pred_1, train_pred_2 = torch.split(
                torch.cat(train_pred_cat, dim=1), train_idx.size(0), dim=0
            )

            loss = torch.tensor(0.0, requires_grad=True).cuda()

            for ind in range(train_idx.size(0)):
                w = label_weights[train_idx[ind].item()].clone().float().cuda()
                labeled_tasks = torch.nonzero(w).squeeze(1).tolist()
                train_pred_seg_0, train_pred_depth_0 = torch.split(
                    train_pred_0[ind].unsqueeze(0), channel_dims, dim=1
                )
                train_pred_seg_1, train_pred_depth_1 = torch.split(
                    train_pred_1[ind].unsqueeze(0), channel_dims, dim=1
                )
                train_pred_seg_2, train_pred_depth_2 = torch.split(
                    train_pred_2[ind].unsqueeze(0), channel_dims, dim=1
                )
                train_losses = model.compute_losses(
                    train_pred_seg_0,
                    train_pred_depth_0,
                    train_seg_0[ind].unsqueeze(0),
                    train_depth_0[ind].unsqueeze(0),
                )
                L_sl = sum([train_losses[i] for i in labeled_tasks]) / train_idx.size(0)

                L_dist, L_recon = jtr.compute_losses(
                    (
                        train_pred_seg_1,
                        train_pred_depth_1,
                        train_seg_1[ind].unsqueeze(0),
                        train_depth_1[ind].unsqueeze(0),
                    ),
                    (
                        train_pred_seg_2,
                        train_pred_depth_2,
                        train_seg_2[ind].unsqueeze(0),
                        train_depth_2[ind].unsqueeze(0),
                    ),
                    labeled_tasks,
                    num_classes,
                    args.recon_weight,
                )

                L_jtr = (
                    args.dist_mtl_weight * L_dist + args.recon_weight * L_recon
                ) / train_idx.size(0)

                loss += L_sl + L_jtr

            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

        model.eval()
        conf_matrix = ConfMatrix(num_classes)
        depth_meter = DepthMeter()
        with torch.no_grad():
            for (
                test_input,
                test_seg,
                test_depth,
            ) in cityscapes_test_loader:
                test_input, test_seg, test_depth = (
                    test_input.cuda(),
                    test_seg.type(torch.LongTensor).cuda(),
                    test_depth.cuda(),
                )
                test_pred, _ = model(test_input)
                test_pred_seg, test_pred_depth = test_pred
                conf_matrix.update(
                    test_pred_seg.argmax(1).flatten(), test_seg.flatten()
                )
                depth_meter.update(test_pred_depth, test_depth)
        v_miou, v_acc = conf_matrix.get_metrics()
        v_depth_scores = depth_meter.get_score()
        v_l1, v_rel = v_depth_scores["l1"], v_depth_scores["rmse"]
        delta_seg, delta_depth, delta_mtl = compute_delta_mtl_cityscapes(
            v_miou,
            v_l1,
            args.seg_baseline,
            args.depth_baseline,
        )
        is_best = delta_mtl > best_delta_mtl
        best_delta_mtl = max(delta_mtl, best_delta_mtl)
        info = [
            v_miou,
            v_acc,
            v_l1,
            v_rel,
            delta_seg,
            delta_depth,
            delta_mtl,
            best_delta_mtl,
        ]
        write_logger(logger, epoch, info, args.out_dir, "logs.csv")
        save_checkpoint(
            args.out_dir,
            {
                "epoch": epoch,
                "model_state_dict": model.state_dict(),
                "optimizer": optimizer.state_dict(),
                "scheduler": scheduler.state_dict(),
            },
            is_best,
        )
        scheduler.step()
