from __future__ import annotations

from pathlib import Path

import cv2
import numpy as np
import pytesseract
from pytesseract import Output

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"


def sharpen_subtle(image: np.ndarray) -> np.ndarray:
    blurred = cv2.GaussianBlur(image, (0, 0), 0.8)
    return cv2.addWeighted(image, 1.03, blurred, -0.03, 0)


def save_jpeg(path: Path, image: np.ndarray) -> None:
    if not cv2.imwrite(str(path), sharpen_subtle(image), [cv2.IMWRITE_JPEG_QUALITY, 98]):
        raise RuntimeError(f"Could not write {path}")


def clean_portrait(source: Path, output: Path) -> None:
    image = cv2.imread(str(source), cv2.IMREAD_COLOR)
    if image is None:
        raise RuntimeError(f"Could not read {source}")
    height, width = image.shape[:2]
    mask = np.zeros((height, width), dtype=np.uint8)
    mask[int(height * 0.895):int(height * 0.995), int(width * 0.22):int(width * 0.82)] = 255
    cleaned = cv2.inpaint(image, mask, 18, cv2.INPAINT_NS)
    save_jpeg(output, cleaned)


def ocr_mask_for_team(image: np.ndarray) -> np.ndarray:
    height, width = image.shape[:2]
    mask = np.zeros((height, width), dtype=np.uint8)
    data = pytesseract.image_to_data(image, output_type=Output.DICT, config="--psm 11")
    for i, text in enumerate(data["text"]):
        text = text.strip()
        if not text:
            continue
        try:
            confidence = float(data["conf"][i])
        except ValueError:
            confidence = 0
        x, y = int(data["left"][i]), int(data["top"][i])
        w, h = int(data["width"][i]), int(data["height"][i])
        if confidence < 20 or w <= 0 or h <= 0:
            continue
        # Preserve the monogram and every pixel of both people. Only accept
        # OCR boxes in the known left text panel or the bottom caption band.
        in_left_text_panel = x < int(width * 0.56) and int(height * 0.31) < y < int(height * 0.88)
        in_bottom_caption = y > int(height * 0.90) and x < int(width * 0.70)
        if not (in_left_text_panel or in_bottom_caption):
            continue
        x0, y0 = max(0, x - 5), max(0, y - 5)
        x1, y1 = min(width, x + w + 5), min(height, y + h + 5)
        mask[y0:y1, x0:x1] = 255
    return mask


def local_ghost_mask(image: np.ndarray, rect: tuple[int, int, int, int]) -> np.ndarray:
    x0, y0, x1, y1 = rect
    roi = image[y0:y1, x0:x1]
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    smooth = cv2.GaussianBlur(gray, (0, 0), 11)
    residual = cv2.absdiff(gray, smooth)
    mask = ((residual > 4) & (gray < 190)).astype(np.uint8) * 255
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((2, 2), np.uint8))
    mask = cv2.dilate(mask, np.ones((2, 2), np.uint8), iterations=1)
    out = np.zeros(image.shape[:2], dtype=np.uint8)
    out[y0:y1, x0:x1] = mask
    return out


def clean_team(source: Path, output: Path) -> None:
    image = cv2.imread(str(source), cv2.IMREAD_COLOR)
    if image is None:
        raise RuntimeError(f"Could not read {source}")
    height, width = image.shape[:2]
    # OCR masks the explicit title, paragraph, names, OABs, and line; local
    # contrast masks only faint words in the empty left wall. No broad panel or
    # face-area blur is used, so the people remain pixel-identical.
    mask = ocr_mask_for_team(image)
    for rect in [
        (10, int(image.shape[0] * 0.13), int(image.shape[1] * 0.38), int(image.shape[0] * 0.33)),
        (10, int(image.shape[0] * 0.67), int(image.shape[1] * 0.38), int(image.shape[0] * 0.87)),
    ]:
        mask = np.maximum(mask, local_ghost_mask(image, rect))
    # Explicit narrow bottom bands remove both names/OABs and the separator;
    # the right edge stays before the seated subject's white trousers.
    for x0, y0, x1, y1 in [
        (18, int(height * 0.915), int(width * 0.20), int(height * 0.985)),
        (int(width * 0.20), int(height * 0.925), int(width * 0.47), int(height * 0.965)),
        (int(width * 0.47), int(height * 0.915), int(width * 0.69), int(height * 0.985)),
    ]:
        mask[y0:y1, x0:x1] = 255
    mask = cv2.dilate(mask, np.ones((3, 3), np.uint8), iterations=1)
    cleaned = cv2.inpaint(image, mask, 8, cv2.INPAINT_NS)
    save_jpeg(output, cleaned)


def main() -> None:
    clean_team(ASSETS / "foto-oficial-advogadas.jpg", ASSETS / "foto-oficial-advogadas.cleaned.jpg")
    clean_portrait(ASSETS / "karlla-pinheiro-hero.jpg", ASSETS / "karlla-pinheiro-hero.cleaned.jpg")
    clean_portrait(ASSETS / "keyteler-leite-hero.jpg", ASSETS / "keyteler-leite-hero.cleaned.jpg")
    print("Created cleaned JPEG candidates")


if __name__ == "__main__":
    main()
