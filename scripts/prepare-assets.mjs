import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(fileURLToPath(import.meta.url));
const assets = path.resolve(root, "../public/assets");

const sources = [
  ["karlla-pinheiro-hero.jpg", "karlla-pinheiro-hero.webp"],
  ["keyteler-leite-hero.jpg", "keyteler-leite-hero.webp"],
  ["foto-oficial-advogadas.jpg", "foto-oficial-advogadas.webp"],
];

for (const [source, destination] of sources) {
  await sharp(path.join(assets, source)).webp({ quality: 82 }).toFile(path.join(assets, destination));
  console.log(`${source} -> ${destination}`);
}
