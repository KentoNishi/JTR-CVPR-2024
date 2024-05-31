import os
import torch
import shutil
from pandas import DataFrame


def mkdir_recursive(path):
    if not os.path.exists(path):
        os.makedirs(path)


def save_checkpoint(base, state, is_best, filename="checkpoint.pth.tar"):
    filename = os.path.join(base, filename)
    torch.save(state, filename)
    if is_best:
        shutil.copyfile(filename, os.path.join(base, "model_best.pth.tar"))


def get_logger_nyuv2():
    df = DataFrame(
        columns=[
            "Epoch",
            "V. Seg. mIoU",
            "V. Seg. Acc.",
            "V. Depth Abs.",
            "V. Depth Rel.",
            "V. Norm. Mean",
            "V. Norm. Med.",
            "V. Norm. 11.25",
            "V. Norm. 22.5",
            "V. Norm. 30",
            "V. Delta Seg.",
            "V. Delta Depth",
            "V. Delta Norm.",
            "V. Delta MTL",
            "Best Delta MTL",
        ]
    )
    return df


def get_logger_cityscapes():
    df = DataFrame(
        columns=[
            "Epoch",
            "V. Seg. mIoU",
            "V. Seg. Acc.",
            "V. Depth Abs.",
            "V. Depth Rel.",
            "V. Delta Seg.",
            "V. Delta Depth",
            "V. Delta MTL",
            "Best Delta MTL",
        ]
    )
    return df


def write_logger(logger, epoch, info, base, filename="logs.csv"):
    logger.loc[epoch] = [
        epoch,
        *info,
    ]
    logger.to_csv(os.path.join(base, filename), index=False)
