######
# Augmentation on pytorch tensor
######
import torch
from torch import Tensor
import math
import torchvision.transforms as T
from torchvision.transforms import functional as F, InterpolationMode
from typing import Dict, List, Optional, Tuple


class ImgAugment(torch.nn.Module):
    """
    Reference: RandAugment
    https://pytorch.org/vision/main/_modules/torchvision/transforms/autoaugment.html#RandAugment
    """

    def __init__(
        self,
        num_ops: int = 2,
        magnitude: int = 6,  # default 9, range from 0 ~ num_magnitude_bins
        num_magnitude_bins: int = 31,  # magnitude resolution
        interpolation: InterpolationMode = InterpolationMode.NEAREST,
        fill: Optional[List[float]] = None,
        magnitude_sampling=True,
    ) -> None:
        super().__init__()
        self.num_ops = num_ops
        self.magnitude = magnitude
        self.num_magnitude_bins = num_magnitude_bins
        self.interpolation = interpolation
        self.fill = fill
        self.magnitude_sampling = magnitude_sampling

    def _augmentation_space(
        self, num_bins: int, image_size: Tuple[int, int]
    ) -> Dict[str, Tuple[Tensor, bool]]:
        return {
            # op_name: (magnitudes, signed)
            "Identity": (torch.tensor(0.0), False),
            # "ShearX": (torch.linspace(0.0, 0.3, num_bins), True),
            # "ShearY": (torch.linspace(0.0, 0.3, num_bins), True),
            # "TranslateX": (torch.linspace(0.0, 150.0 / 331.0 * image_size[1], num_bins), True),
            # "TranslateY": (torch.linspace(0.0, 150.0 / 331.0 * image_size[0], num_bins), True),
            # "Rotate": (torch.linspace(0.0, 30.0, num_bins), True),
            "Brightness": (torch.linspace(0.0, 0.9, num_bins), True),
            "Color": (torch.linspace(0.0, 0.9, num_bins), True),
            "Contrast": (torch.linspace(0.0, 0.9, num_bins), True),
            "Sharpness": (torch.linspace(0.0, 0.9, num_bins), True),
            "Posterize": (
                8 - (torch.arange(num_bins) / ((num_bins - 1) / 4)).round().int(),
                False,
            ),
            "Solarize": (torch.linspace(255.0, 0.0, num_bins), False),
            "AutoContrast": (torch.tensor(0.0), False),
            "Equalize": (torch.tensor(0.0), False),
        }

    def forward(self, img: Tensor) -> Tensor:
        """
            img (PIL Image or Tensor): Image to be transformed.

        Returns:
            PIL Image or Tensor: Transformed image.
        """
        fill = self.fill
        # channels, height, width = F.get_dimensions(img)
        channels, height, width = img.shape
        if isinstance(img, Tensor):
            if isinstance(fill, (int, float)):
                fill = [float(fill)] * channels
            elif fill is not None:
                fill = [float(f) for f in fill]

        op_meta = self._augmentation_space(self.num_magnitude_bins, (height, width))
        for _ in range(self.num_ops):
            op_index = int(torch.randint(len(op_meta), (1,)).item())
            op_name = list(op_meta.keys())[op_index]
            magnitudes, signed = op_meta[op_name]
            if self.magnitude_sampling:
                sampled_magnitude = torch.randint(self.magnitude, (1,)).item()
            else:
                sampled_magnitude = self.magnitude
            magnitude = (
                float(magnitudes[sampled_magnitude].item())
                if magnitudes.ndim > 0
                else 0.0
            )
            if signed and torch.randint(2, (1,)):
                magnitude *= -1.0
            img = _apply_op(
                img, op_name, magnitude, interpolation=self.interpolation, fill=fill
            )

        return img


def _apply_op(
    img: Tensor,
    op_name: str,
    magnitude: float,
    interpolation: InterpolationMode,
    fill: Optional[List[float]],
):
    if op_name == "ShearX":
        # magnitude should be arctan(magnitude)
        # official autoaug: (1, level, 0, 0, 1, 0)
        # https://github.com/tensorflow/models/blob/dd02069717128186b88afa8d857ce57d17957f03/research/autoaugment/augmentation_transforms.py#L290
        # compared to
        # torchvision:      (1, tan(level), 0, 0, 1, 0)
        # https://github.com/pytorch/vision/blob/0c2373d0bba3499e95776e7936e207d8a1676e65/torchvision/transforms/functional.py#L976
        img = F.affine(
            img,
            angle=0.0,
            translate=[0, 0],
            scale=1.0,
            shear=[math.degrees(math.atan(magnitude)), 0.0],
            interpolation=interpolation,
            fill=fill,
            center=[0, 0],
        )
    elif op_name == "ShearY":
        # magnitude should be arctan(magnitude)
        # See above
        img = F.affine(
            img,
            angle=0.0,
            translate=[0, 0],
            scale=1.0,
            shear=[0.0, math.degrees(math.atan(magnitude))],
            interpolation=interpolation,
            fill=fill,
            center=[0, 0],
        )
    elif op_name == "TranslateX":
        img = F.affine(
            img,
            angle=0.0,
            translate=[int(magnitude), 0],
            scale=1.0,
            interpolation=interpolation,
            shear=[0.0, 0.0],
            fill=fill,
        )
    elif op_name == "TranslateY":
        img = F.affine(
            img,
            angle=0.0,
            translate=[0, int(magnitude)],
            scale=1.0,
            interpolation=interpolation,
            shear=[0.0, 0.0],
            fill=fill,
        )
    elif op_name == "Rotate":
        img = F.rotate(img, magnitude, interpolation=interpolation, fill=fill)
    elif op_name == "Brightness":
        img = F.adjust_brightness(img, 1.0 + magnitude)
    elif op_name == "Color":
        img = F.adjust_saturation(img, 1.0 + magnitude)
    elif op_name == "Contrast":
        img = F.adjust_contrast(img, 1.0 + magnitude)
    elif op_name == "Sharpness":
        img = F.adjust_sharpness(img, 1.0 + magnitude)
    elif op_name == "Posterize":
        if torch.is_tensor(img):
            img = T.ToPILImage()(img)
            img = F.posterize(img, int(magnitude))
            img = T.ToTensor()(img)
        else:
            img = F.posterize(img, int(magnitude))
    elif op_name == "Solarize":
        if torch.is_tensor(img):
            img = T.ToPILImage()(img)
            img = F.solarize(img, magnitude)
            img = T.ToTensor()(img)
        else:
            img = F.solarize(img, magnitude)
    elif op_name == "AutoContrast":
        img = F.autocontrast(img)
    elif op_name == "Equalize":
        if torch.is_tensor(img):
            img = T.ToPILImage()(img)
            img = F.equalize(img)
            img = T.ToTensor()(img)
        else:
            img = F.equalize(img)
    elif op_name == "Invert":
        img = F.invert(img)
    elif op_name == "Identity":
        pass
    else:
        raise ValueError(f"The provided operator {op_name} is not recognized.")
    return img
