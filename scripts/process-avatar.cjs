const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processAvatar() {
  const sourcePath = 'C:/Users/NOC 01/.gemini/antigravity-ide/brain/597426e2-c130-4778-b3df-a45d57ec7b14/.user_uploaded/media_1791643350792.png';
  const targetPath = path.resolve(__dirname, '../public/assets/instagram-avatar.png');

  // Extract the 150x150 circle at x: 21, y: 16
  const { data, info } = await sharp(sourcePath)
    .extract({ left: 21, top: 16, width: 150, height: 150 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cx = 74.5;
  const cy = 74.5;
  const r = 74.5;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const dist = Math.hypot(x - cx, y - cy);
      const idx = (y * info.width + x) * info.channels;
      if (dist > r) {
        data[idx + 3] = 0; // Make transparent
      } else if (dist > r - 1.2) {
        const factor = Math.max(0, Math.min(1, r - dist));
        data[idx + 3] = Math.round(data[idx + 3] * factor);
      }
    }
  }

  // Save with sharp
  await sharp(data, { raw: info })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(targetPath);

  console.log('Saved processed avatar to', targetPath);
}

processAvatar().catch(err => {
  console.error(err);
  process.exit(1);
});
