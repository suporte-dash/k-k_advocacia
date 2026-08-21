from __future__ import annotations

from pathlib import Path

from PIL import Image

ASSETS = Path(__file__).resolve().parents[1] / "public" / "assets"


def convert_to_webp(source: str, destination: str, quality: int = 82) -> None:
    source_path = ASSETS / source
    destination_path = ASSETS / destination
    with Image.open(source_path) as image:
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA")
        image.save(destination_path, "WEBP", quality=quality, method=6)
        print(f"{source} -> {destination}")


# The JPGs are the canonical restored sources. Regenerating WebP from them
# prevents stale pre-restoration WebP files from being published by <picture>.
convert_to_webp("karlla-pinheiro-hero.jpg", "karlla-pinheiro-hero.webp")
convert_to_webp("keyteler-leite-hero.jpg", "keyteler-leite-hero.webp")
convert_to_webp("foto-oficial-advogadas.jpg", "foto-oficial-advogadas.webp")
