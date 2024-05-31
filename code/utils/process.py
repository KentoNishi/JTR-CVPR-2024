import torch
import torch.nn.functional as F
from .gumbel import gumbel_softmax

_avg = 2.3618
_std = 1.5876

d = torch.distributions.normal.Normal(_avg, _std)


def _transform(x):
    return d.cdf(x)


def _gumbel(pred):
    return gumbel_softmax(pred, dim=1, tau=1, hard=True)


def preprocess_seg_pred(pred, mask, hard=False):
    return (_gumbel(pred) if hard else F.softmax(pred, dim=1)) * mask


def preprocess_depth_pred(pred, mask):
    return _transform(pred * mask)


def preprocess_normal_pred(pred, mask):
    return (pred * mask + 1.0) / 2.0


def get_mask_seg_gt(y):
    return (y != -1).type(torch.LongTensor).cuda().unsqueeze(0).detach()


def get_mask_depth_gt(y):
    return (
        (torch.sum(y, dim=1) != 0).type(torch.LongTensor).cuda().unsqueeze(1).detach()
    )


def get_mask_normal_gt(y):
    return (
        (torch.sum(y, dim=1) != 0).type(torch.LongTensor).cuda().unsqueeze(1).detach()
    )


def get_jtr_mask_intersection_nyuv2(seg_gt, depth_gt, normal_gt, labeled_tasks):
    mask = torch.ones_like(seg_gt.unsqueeze(0))
    if 0 in labeled_tasks:
        mask *= get_mask_seg_gt(seg_gt)
    if 1 in labeled_tasks:
        mask *= get_mask_depth_gt(depth_gt)
    if 2 in labeled_tasks:
        mask *= get_mask_normal_gt(normal_gt)
    return mask.detach()

def get_jtr_mask_intersection_cityscapes(seg_gt, depth_gt, labeled_tasks):
    mask = torch.ones_like(seg_gt.unsqueeze(0))
    if 0 in labeled_tasks:
        mask *= get_mask_seg_gt(seg_gt)
    if 1 in labeled_tasks:
        mask *= get_mask_depth_gt(depth_gt)
    return mask.detach()

def preprocess_seg_gt(y, num_classes):
    y = y.unsqueeze(0)
    binary_mask = (y == -1).type(torch.FloatTensor).cuda()
    y_1 = y.float() * (1 - binary_mask)
    y_2 = torch.zeros(y.size(0), num_classes, y.size(2), y.size(3)).scatter_(
        1, y_1.type(torch.LongTensor), 1
    ).cuda().detach() * (1 - binary_mask)
    return y_2


def preprocess_depth_gt(y):
    binary_mask = get_mask_depth_gt(y)
    return _transform(y * binary_mask)


def preprocess_normal_gt(y):
    return (y + 1.0) / 2.0


def _get_detached_and_size(x):
    size = x.nonzero().size(0)
    return x.detach(), size if size != 0 else 1


def get_recon_loss_seg(x_pred, x_output, mask):
    x_output, mask_size = _get_detached_and_size(x_output)
    return (
        F.binary_cross_entropy_with_logits(x_pred, x_output, reduction="none") * mask
    ).sum() / mask_size


def get_recon_loss_depth(x_pred, x_output, mask):
    x_output, mask_size = _get_detached_and_size(x_output)
    x_pred = (torch.sigmoid(x_pred) - 0.5) * (1 - 1e-5) + 0.5
    x_output = _transform(x_output)
    return (F.l1_loss(x_pred, x_output, reduction="none") * mask).sum() / mask_size


def get_recon_loss_normal(x_pred, x_output, mask):
    x_output, mask_size = _get_detached_and_size(x_output)
    return (
        1
        - torch.sum(
            ((x_pred / torch.norm(x_pred, p=2, dim=1, keepdim=True)) * x_output * mask)
        )
        / mask_size
    )
