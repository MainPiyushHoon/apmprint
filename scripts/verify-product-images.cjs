const fs = require('fs');
const path = require('path');

const productIds = [
  'bill-book',
  'challan-book',
  'letter-head',
  'school-registers',
  'school-id-cards',
  'office-files',
  'record-registers',
  'envelope',
  'other-stationery',
  'leaflet-pumplet',
  'brochure',
  'catalogue',
  'calenders',
  'tant-card',
  'dangler',
  'product-label',
  'sticker',
  'wall-clock',
  'wrist-watch',
  'flex-board',
  'back-drop',
  'glowsign-board',
  'dealers-board',
  'digital-vinyl',
  'one-way-vision',
  'sunpack',
  'rollup-standee',
  'canopy',
  'acp-cutting-board',
  'clip-on-board',
  'sandwich-board',
  'outdoor-branding'
];

const targetDir = path.resolve(__dirname, '../public/images/products');
let missingCount = 0;
let validCount = 0;

console.log(`Checking 32 product images in ${targetDir}...`);

productIds.forEach(id => {
  const filePath = path.join(targetDir, `${id}.webp`);
  if (!fs.existsSync(filePath)) {
    console.error(`[MISSING] ${id}.webp does not exist.`);
    missingCount++;
  } else {
    const stats = fs.statSync(filePath);
    if (stats.size < 500) {
      console.error(`[TOO SMALL] ${id}.webp size is ${stats.size} bytes (expected > 500 bytes).`);
      missingCount++;
    } else {
      validCount++;
    }
  }
});

console.log(`\nSummary: ${validCount} valid, ${missingCount} missing/invalid out of ${productIds.length} images.`);

if (missingCount > 0) {
  process.exit(1);
} else {
  console.log('SUCCESS: All 32 product images verified!');
  process.exit(0);
}
