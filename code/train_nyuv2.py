if __name__ == "__main__":
    import os
    import torch
    import torch.optim as optim
    from utils import *
    from models.nyuv2_segnet_mtl import SegNet_MTL
    from models.nyuv2_segnet_jtr import SegNet_JTR
    from datasets.nyuv2 import NYUv2_MTL
    from torch.utils.data import DataLoader
    from tqdm import tqdm

    parser = get_base_arg_parser("JTR NYUv2 onelabel/randomlabels", {"batch_size": 4})

    parser.add_argument(
        "--ssl-type",
        required=True,
        type=str,
        help="type of ssl",
    )
    parser.add_argument(
        "--seg-baseline", required=True, type=float, help="Seg. Baseline"
    )
    parser.add_argument(
        "--depth-baseline", required=True, type=float, help="Depth Baseline"
    )
    parser.add_argument(
        "--norm-baseline", required=True, type=float, help="Norm. Baseline"
    )
    args = parser.parse_args()
    num_classes = 13
    channel_dims = [num_classes, 1, 3]

    torch.manual_seed(args.seed)
    torch.cuda.manual_seed(args.seed)

    logger = get_logger_nyuv2()
    mkdir_recursive(args.out_dir)
    model = SegNet_MTL().cuda()
    jtr = SegNet_JTR(channel_dims).cuda()

    params = list(model.parameters()) + list(jtr.parameters())
    optimizer = optim.Adam(params, lr=1e-4)
    scheduler = optim.lr_scheduler.StepLR(
        optimizer, step_size=args.step_size, gamma=0.5
    )

    label_weights = (
        torch.load(os.path.join(args.label_dir, f"{args.ssl_type}.pth"))[
            "labels_weights"
        ]
        .float()
        .cuda()
    )
    nyuv2_train_set = NYUv2_MTL(
        root=args.data_dir,
        train=True,
    )
    nyuv2_train_loader = DataLoader(
        nyuv2_train_set,
        batch_size=args.batch_size,
        shuffle=True,
        num_workers=args.num_workers,
    )
    nyuv2_test_set = NYUv2_MTL(
        root=args.data_dir,
        train=False,
    )
    nyuv2_test_loader = DataLoader(
        nyuv2_test_set,
        batch_size=args.batch_size,
        shuffle=False,
        num_workers=args.num_workers,
    )

    best_delta_mtl = float("-inf")
    for epoch in range(args.num_epochs):
        bar = tqdm(nyuv2_train_loader)
        model.train()
        jtr.train()
        for batch_idx, (
            train_idx,
            train_input_0,
            train_seg_0,
            train_depth_0,
            train_normal_0,
            train_input_1,
            train_seg_1,
            train_depth_1,
            train_normal_1,
            train_input_2,
            train_seg_2,
            train_depth_2,
            train_normal_2,
        ) in enumerate(bar):
            bar.set_description(f"Epoch {epoch}")
            (
                train_input_0,
                train_seg_0,
                train_depth_0,
                train_normal_0,
                train_input_1,
                train_seg_1,
                train_depth_1,
                train_normal_1,
                train_input_2,
                train_seg_2,
                train_depth_2,
                train_normal_2,
            ) = (
                train_input_0.cuda(),
                train_seg_0.type(torch.LongTensor).cuda(),
                train_depth_0.cuda(),
                train_normal_0.cuda(),
                train_input_1.cuda(),
                train_seg_1.type(torch.LongTensor).cuda(),
                train_depth_1.cuda(),
                train_normal_1.cuda(),
                train_input_2.cuda(),
                train_seg_2.type(torch.LongTensor).cuda(),
                train_depth_2.cuda(),
                train_normal_2.cuda(),
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
                train_pred_seg_0, train_pred_depth_0, train_pred_normal_0 = torch.split(
                    train_pred_0[ind].unsqueeze(0), channel_dims, dim=1
                )
                train_pred_seg_1, train_pred_depth_1, train_pred_normal_1 = torch.split(
                    train_pred_1[ind].unsqueeze(0), channel_dims, dim=1
                )
                train_pred_seg_2, train_pred_depth_2, train_pred_normal_2 = torch.split(
                    train_pred_2[ind].unsqueeze(0), channel_dims, dim=1
                )
                train_losses = model.compute_losses(
                    train_pred_seg_0,
                    train_pred_depth_0,
                    train_pred_normal_0,
                    train_seg_0[ind].unsqueeze(0),
                    train_depth_0[ind].unsqueeze(0),
                    train_normal_0[ind].unsqueeze(0),
                )
                L_sl = sum([train_losses[i] for i in labeled_tasks]) / train_idx.size(0)

                L_dist, L_recon = jtr.compute_losses(
                    (
                        train_pred_seg_1,
                        train_pred_depth_1,
                        train_pred_normal_1,
                        train_seg_1[ind].unsqueeze(0),
                        train_depth_1[ind].unsqueeze(0),
                        train_normal_1[ind].unsqueeze(0),
                    ),
                    (
                        train_pred_seg_2,
                        train_pred_depth_2,
                        train_pred_normal_2,
                        train_seg_2[ind].unsqueeze(0),
                        train_depth_2[ind].unsqueeze(0),
                        train_normal_2[ind].unsqueeze(0),
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
        normal_meter = NormalsMeter()
        with torch.no_grad():
            for (
                test_input,
                test_seg,
                test_depth,
                test_normal,
            ) in nyuv2_test_loader:
                test_input, test_seg, test_depth, test_normal = (
                    test_input.cuda(),
                    test_seg.type(torch.LongTensor).cuda(),
                    test_depth.cuda(),
                    test_normal.cuda(),
                )
                test_pred, _ = model(test_input)
                test_pred_seg, test_pred_depth, test_pred_normal = test_pred
                conf_matrix.update(
                    test_pred_seg.argmax(1).flatten(), test_seg.flatten()
                )
                depth_meter.update(test_pred_depth, test_depth)
                normal_meter.update(test_pred_normal, test_normal)
        v_miou, v_acc = conf_matrix.get_metrics()
        v_depth_scores = depth_meter.get_score()
        v_l1, v_rel = v_depth_scores["l1"], v_depth_scores["rmse"]
        v_normal_scores = normal_meter.get_score()
        v_mean, v_med, v_11_25, v_22_5, v_30 = (
            v_normal_scores["mean"],
            v_normal_scores["rmse"],
            v_normal_scores["11.25"],
            v_normal_scores["22.5"],
            v_normal_scores["30"],
        )
        delta_seg, delta_depth, delta_norm, delta_mtl = compute_delta_mtl_nyuv2(
            v_miou,
            v_l1,
            v_mean,
            args.seg_baseline,
            args.depth_baseline,
            args.norm_baseline,
        )
        is_best = delta_mtl > best_delta_mtl
        best_delta_mtl = max(delta_mtl, best_delta_mtl)
        info = [
            v_miou,
            v_acc,
            v_l1,
            v_rel,
            v_mean,
            v_med,
            v_11_25,
            v_22_5,
            v_30,
            delta_seg,
            delta_depth,
            delta_norm,
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
