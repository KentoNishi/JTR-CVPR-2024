import argparse
from typing import Dict


def get_base_arg_parser(description, arg_values: Dict) -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=description)

    parser.add_argument("--data-dir", required=True, type=str, help="path to dataset")
    parser.add_argument(
        "--out-dir", required=True, type=str, help="path to output directory"
    )
    parser.add_argument(
        "--label-dir", required=True, type=str, help="path to label dir"
    )
    parser.add_argument(
        "--dist-mtl-weight", default=4, type=float, help="dist_mtl_weight"
    )
    parser.add_argument("--recon-weight", default=2, type=float, help="recon_weight")
    parser.add_argument("--num-epochs", default=400, type=int, help="num_epochs")
    parser.add_argument("--step-size", default=200, type=int, help="step_size")
    parser.add_argument(
        "--batch-size", default=arg_values["batch_size"], type=int, help="batch_size"
    )
    parser.add_argument("--num-workers", default=4, type=int, help="num_workers")
    parser.add_argument("--seed", default=0, type=int, help="seed")

    return parser
