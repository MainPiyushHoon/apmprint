import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.resolve(__dirname, '../public/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  console.log('Optimizing images in:', imagesDir);

  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(imagesDir, file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const webpPath = path.join(imagesDir, `${name}.webp`);

      const originalSize = fs.statSync(inputPath).size;

      // Generate optimized WebP
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(webpPath);

      const newSize = fs.statSync(webpPath).size;
      const savings = Math.round(((originalSize - newSize) / originalSize) * 100);
      console.log(`✓ Converted ${file} (${Math.round(originalSize / 1024)} KB) -> ${name}.webp (${Math.round(newSize / 1024)} KB, -${savings}%)`);
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages().catch((err) => {
  console.error('Error optimizing images:', err);
});
