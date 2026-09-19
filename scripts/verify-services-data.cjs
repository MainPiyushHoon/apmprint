const fs = require('fs');
const path = require('path');

// We will read servicesData.js and evaluate or regex check
const dataPath = path.resolve(__dirname, '../src/data/servicesData.js');
const content = fs.readFileSync(dataPath, 'utf8');

// Ensure image: and imageAlt: are present for every service object
const idMatches = [...content.matchAll(/id:\s*['"]([a-z0-9-]+)['"]/g)].map(m => m[1]);
console.log(`Checking ${idMatches.length} services in servicesData.js...`);

let missing = 0;
idMatches.forEach(id => {
  // Check if image: exists for this service block
  const blockRegex = new RegExp(`id:\\s*['"]${id}['"][\\s\\S]*?desc:`, 'g');
  const match = blockRegex.exec(content);
  if (!match) {
    console.error(`Could not locate block for ${id}`);
    missing++;
    return;
  }
  const block = match[0];
  if (!block.includes('image:') || !block.includes('imageAlt:')) {
    console.error(`[FAIL] Service '${id}' is missing image or imageAlt.`);
    missing++;
  }
});

console.log(`\nSummary: ${idMatches.length - missing} complete, ${missing} missing.`);

if (missing > 0) {
  process.exit(1);
} else {
  console.log('SUCCESS: All services have image and imageAlt!');
  process.exit(0);
}
