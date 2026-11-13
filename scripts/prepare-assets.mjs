import fs from "node:fs";
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
  const srcPath = path.join(assets, source);
  const destPath = path.join(assets, destination);

  if (!fs.existsSync(srcPath)) {
    console.log(`Pular: ${source} (já migrado ou inexistente)`);
    continue;
  }

  await sharp(srcPath).webp({ quality: 82 }).toFile(destPath);
  console.log(`${source} -> ${destination}`);
}
