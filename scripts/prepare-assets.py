from __future__ import annotations

from pathlib import Path
from PIL import Image

ASSETS = Path('public/assets')


def convert(source: str, webp: str, jpg: str | None = None, quality: int = 82) -> None:
    image = Image.open(ASSETS / source)
    if image.mode not in ('RGB', 'RGBA'):
        image = image.convert('RGBA')
    image.save(ASSETS / webp, 'WEBP', quality=quality, method=6)
    if jpg:
        rgb = image.convert('RGB')
        rgb.save(ASSETS / jpg, 'JPEG', quality=88, optimize=True, progressive=True)


convert('karlla-pinheiro-hero.png', 'karlla-pinheiro-hero.webp', 'karlla-pinheiro-hero.jpg', 82)
convert('keyteler-leite-hero.png', 'keyteler-leite-hero.webp', 'keyteler-leite-hero.jpg', 82)
convert('foto-oficial-advogadas.jpg', 'foto-oficial-advogadas.webp', None, 82)
convert('abstract-archival-texture.png', 'abstract-archival-texture.webp', None, 76)
