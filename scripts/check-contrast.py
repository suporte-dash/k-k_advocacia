from __future__ import annotations


def channel(value: int) -> float:
    c = value / 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(hex_color: str) -> float:
    value = hex_color.lstrip('#')
    rgb = [int(value[index : index + 2], 16) for index in (0, 2, 4)]
    r, g, b = [channel(item) for item in rgb]
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(first: str, second: str) -> float:
    one, two = sorted((luminance(first), luminance(second)), reverse=True)
    return (one + 0.05) / (two + 0.05)

for candidate in ('#8A6435', '#805D30', '#76542C', '#6F4E2A'):
    print(candidate, f'{contrast(candidate, "#FFFAF3"):.2f}:1')
