import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routesToVerify = [
  { path: '/', file: 'index.html', expectedH1: 'Commercial Printing & Signage in Ghaziabad', expectedTitle: 'Commercial Printing Press & Signage in Ghaziabad | APM Print' },
  { path: '/services/', file: 'services/index.html', expectedH1: 'Commercial Printing & Signage Services Directory', expectedTitle: 'Commercial Printing & Signage Services Directory | APM Print' },
  { path: '/services/bill-book-printing/', file: 'services/bill-book-printing/index.html', expectedH1: 'Bill Book Printing in Ghaziabad', expectedTitle: 'Bill Book Printing in Ghaziabad | APM Print' },
  { path: '/services/flex-board-printing/', file: 'services/flex-board-printing/index.html', expectedH1: 'Flex Board Printing in Ghaziabad', expectedTitle: 'Flex Board Printing in Ghaziabad | APM Print' },
  { path: '/services/glow-sign-board/', file: 'services/glow-sign-board/index.html', expectedH1: 'LED & Glow Sign Boards in Ghaziabad', expectedTitle: 'LED & Glow Sign Boards in Ghaziabad | APM Print' },
  { path: '/services/pamphlet-printing/', file: 'services/pamphlet-printing/index.html', expectedH1: 'Pamphlet & Flyer Printing in Ghaziabad', expectedTitle: 'Pamphlet & Flyer Printing in Ghaziabad | APM Print' },
  { path: '/services/letterhead-printing/', file: 'services/letterhead-printing/index.html', expectedH1: 'Letterhead & Corporate Stationery in Ghaziabad', expectedTitle: 'Letterhead & Corporate Stationery in Ghaziabad | APM Print' },
  { path: '/services/school-id-cards-registers/', file: 'services/school-id-cards-registers/index.html', expectedH1: 'School ID Cards & Registers in Ghaziabad', expectedTitle: 'School ID Cards & Registers in Ghaziabad | APM Print' },
  { path: '/services/sticker-label-printing/', file: 'services/sticker-label-printing/index.html', expectedH1: 'Sticker & Label Printing in Ghaziabad', expectedTitle: 'Sticker & Label Printing in Ghaziabad | APM Print' },
  { path: '/services/brochure-catalogue-printing/', file: 'services/brochure-catalogue-printing/index.html', expectedH1: 'Brochure & Catalogue Printing in Ghaziabad', expectedTitle: 'Brochure & Catalogue Printing in Ghaziabad | APM Print' }
];

let allPassed = true;

console.log('--- Verifying Built Static HTML Files ---');

routesToVerify.forEach((r) => {
  const fullPath = path.join(distDir, r.file);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Missing file: ${r.file}`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');

  // Check Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : null;
  const expectedTitleNorm = r.expectedTitle.replace(/&amp;/g, '&');
  if (!title || !title.includes(expectedTitleNorm)) {
    console.error(`❌ Title mismatch for ${r.path}. Expected: "${r.expectedTitle}", Found: "${title}"`);
    allPassed = false;
  }

  // Check Canonical
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;
  const expectedCanonical = `https://apmprint.in${r.path}`;
  if (canonical !== expectedCanonical) {
    console.error(`❌ Canonical mismatch for ${r.path}. Expected: "${expectedCanonical}", Found: "${canonical}"`);
    allPassed = false;
  }

  // Check H1 count and text
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`❌ H1 count violation on ${r.path}: Found ${h1Matches.length} H1 tags!`);
    allPassed = false;
  } else {
    const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    const expectedH1Norm = r.expectedH1.replace(/&amp;/g, '&').trim();
    if (!h1Text.includes(expectedH1Norm)) {
      console.error(`❌ H1 text mismatch on ${r.path}. Expected: "${r.expectedH1}", Found: "${h1Text}"`);
      allPassed = false;
    }
  }

  // Check Meta Description
  const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1] : null;
  if (!metaDesc || metaDesc.length < 50) {
    console.error(`❌ Weak or missing meta description on ${r.path}`);
    allPassed = false;
  }

  // Check Structured Data
  const jsonLdCount = (content.match(/<script type="application\/ld\+json">/gi) || []).length;
  if (jsonLdCount === 0) {
    console.error(`❌ Missing JSON-LD structured data on ${r.path}`);
    allPassed = false;
  }

  console.log(`✓ ${r.path.padEnd(42)} Title, Canonical, Single H1, Meta & JSON-LD OK (File: ${Math.round(content.length / 1024)} KB)`);
});

// Verify sitemap.xml
const sitemapContent = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf-8');
if (sitemapContent.includes('#')) {
  console.error('❌ Sitemap contains illegal # fragments!');
  allPassed = false;
} else {
  console.log('✓ sitemap.xml validated (Zero fragment URLs)');
}

// Verify robots.txt
const robotsContent = fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf-8');
if (!robotsContent.includes('Sitemap: https://apmprint.in/sitemap.xml')) {
  console.error('❌ robots.txt missing sitemap reference');
  allPassed = false;
} else {
  console.log('✓ robots.txt validated');
}

// Verify CSS and JS asset resolution from index.html
const indexHtmlContent = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const assetLinks = [
  ...(indexHtmlContent.match(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi) || []),
  ...(indexHtmlContent.match(/<script[^>]*src=["']([^"']+)["']/gi) || [])
];

let checkedAssets = 0;
assetLinks.forEach((tag) => {
  const match = tag.match(/(?:href|src)=["']([^"']+)["']/i);
  if (!match) return;
  const assetUrl = match[1];
  if (assetUrl.startsWith('http://') || assetUrl.startsWith('https://')) return;

  // Strip base prefix e.g. /apmprint/ or /
  let assetRel = assetUrl.replace(/^\/apmprint\//, '').replace(/^\//, '');
  const assetFile = path.join(distDir, assetRel);

  if (!fs.existsSync(assetFile)) {
    console.error(`❌ Missing asset file referenced in HTML: ${assetUrl} -> ${assetFile}`);
    allPassed = false;
  } else {
    checkedAssets++;
  }
});
console.log(`✓ Verified ${checkedAssets} local CSS & JS bundle assets exist in dist/`);

if (allPassed) {
  console.log('\n🌟 ALL 10 ROUTES & ASSETS PASSED COMPLETE AUDIT VERIFICATION! 🌟');
} else {
  console.error('\n❌ Build verification failed with errors.');
  process.exit(1);
}
