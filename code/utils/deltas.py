def compute_delta_mtl_nyuv2(
    seg, depth, normal, seg_baseline, depth_baseline, normal_baseline
):
    seg_delta = (seg * 100 - seg_baseline) / seg_baseline
    depth_delta = (depth_baseline - depth) / depth_baseline
    normal_delta = (normal_baseline - normal) / normal_baseline
    delta_mtl = (seg_delta + depth_delta + normal_delta) / 3

    return seg_delta, depth_delta, normal_delta, delta_mtl


def compute_delta_mtl_cityscapes(seg, depth, seg_baseline, depth_baseline):
    seg_delta = (seg * 100 - seg_baseline) / seg_baseline
    depth_delta = (depth_baseline - depth) / depth_baseline
    delta_mtl = (seg_delta + depth_delta) / 2

    return seg_delta, depth_delta, delta_mtl
