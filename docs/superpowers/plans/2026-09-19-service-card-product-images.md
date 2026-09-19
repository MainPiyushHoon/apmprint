# Service Card Product Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate high-quality, photorealistic product imagery into all 32 service cards across Home (`ServiceCatalog`), Services Directory (`/services/`), Service Cluster landing pages (`/services/:slug/`), and the "View Specs" detail modal (`ServiceModal`).

**Architecture:** Add product image paths and SEO alt attributes to all 32 items in `src/data/servicesData.js`. Enhance `ServiceCard.jsx` with an integrated `.card-image-wrap` featuring floating status badges and smooth zoom micro-interactions. Update `ServiceModal.jsx` and `ServiceClusterPage.jsx` with matching product banners. Implement responsive CSS preserving the 2-column mobile card layout.

**Tech Stack:** React 19, Vite 6, Vanilla CSS3 (custom design system tokens), WebP image assets, HTML5 responsive image standards.

## Global Constraints

- Preserve the 2-column mobile catalog layout on `@media (max-width: 480px)`.
- All images must be stored under `public/images/products/` as `.webp` assets.
- Asset URLs must be compatible with GitHub Pages base path (`/apmprint/`) via `getAppUrl` or base-path-aware helper.
- Card hover animations must remain silky-smooth (`scale(1.04)`) without causing layout reflow or clipping issues.
- Maintain WCAG contrast standards and accessible alt attributes for all 32 product images.

---

### Task 1: Asset Directory & 32 Product Images Setup

**Files:**
- Create: `public/images/products/*.webp` (32 items)
- Verification script: `scripts/verify-product-images.cjs`

**Interfaces:**
- Consumes: Service IDs from `src/data/servicesData.js`
- Produces: 32 readable, non-zero `.webp` image assets in `public/images/products/`:
  - `bill-book.webp`, `challan-book.webp`, `letter-head.webp`, `school-registers.webp`, `school-id-cards.webp`, `office-files.webp`, `record-registers.webp`, `envelope.webp`, `other-stationery.webp`
  - `leaflet-pumplet.webp`, `brochure.webp`, `catalogue.webp`, `calenders.webp`, `tant-card.webp`, `dangler.webp`
  - `product-label.webp`, `sticker.webp`, `wall-clock.webp`, `wrist-watch.webp`
  - `flex-board.webp`, `back-drop.webp`, `glowsign-board.webp`, `dealers-board.webp`, `digital-vinyl.webp`, `one-way-vision.webp`, `sunpack.webp`, `rollup-standee.webp`, `canopy.webp`, `acp-cutting-board.webp`, `clip-on-board.webp`, `sandwich-board.webp`, `outdoor-branding.webp`

- [ ] **Step 1: Create verification script**
Create `scripts/verify-product-images.cjs` checking that all 32 product image files exist in `public/images/products/` with size > 1KB.

- [ ] **Step 2: Run verification script to confirm initial missing state**
Run: `node scripts/verify-product-images.cjs`
Expected: Fails listing missing images.

- [ ] **Step 3: Generate and populate all 32 photorealistic WebP product assets**
Create `public/images/products/` directory and populate all 32 distinct commercial print product mockups matching the physical product specifications.

- [ ] **Step 4: Run verification script to verify all 32 images pass**
Run: `node scripts/verify-product-images.cjs`
Expected: PASS (All 32 product images verified).

- [ ] **Step 5: Commit assets**
```bash
git add public/images/products/ scripts/verify-product-images.cjs
git commit -m "feat(assets): add photorealistic product imagery for all 32 print verticals"
```

---

### Task 2: Data Model Updates in `src/data/servicesData.js`

**Files:**
- Modify: `src/data/servicesData.js`
- Test: `scripts/verify-services-data.cjs`

**Interfaces:**
- Consumes: 32 product WebP files from `public/images/products/`
- Produces: Enhanced `servicesData` array where every object has `image` and `imageAlt` properties.

- [ ] **Step 1: Write verification test for servicesData**
Create `scripts/verify-services-data.cjs` asserting that each entry in `servicesData` has valid non-empty strings for `image` and `imageAlt`.

- [ ] **Step 2: Run test to verify it fails on existing data**
Run: `node scripts/verify-services-data.cjs`
Expected: FAIL ("service bill-book missing image").

- [ ] **Step 3: Update `src/data/servicesData.js`**
Add `image: '/images/products/<id>.webp'` and detailed contextual `imageAlt` to all 32 services.

- [ ] **Step 4: Run verification test**
Run: `node scripts/verify-services-data.cjs`
Expected: PASS (All 32 services have image and imageAlt).

- [ ] **Step 5: Commit**
```bash
git add src/data/servicesData.js scripts/verify-services-data.cjs
git commit -m "feat(data): add image and imageAlt fields to all 32 services"
```

---

### Task 3: Update `ServiceCard.jsx` Component

**Files:**
- Modify: `src/components/ServiceCard.jsx`

**Interfaces:**
- Consumes: `service.image`, `service.imageAlt`, `service.badge`, `service.icon`, `service.title`, `service.desc`
- Produces: Updated card DOM containing `.card-image-wrap` with image, overlays, and card body.

- [ ] **Step 1: Update `ServiceCard.jsx`**
Add `.card-image-wrap` containing:
- `img` tag with `src={getAppUrl(service.image)}`, `alt={service.imageAlt}`, `loading="lazy"`
- `.card-badge-overlay` displaying `service.badge`
- `.card-icon-overlay` displaying `service.icon`
Keep existing title, description, and action buttons ("View Specs" & "Quote").

- [ ] **Step 2: Verify Vite build succeeds**
Run: `npm run build`
Expected: PASS (no JSX or build errors).

- [ ] **Step 3: Commit**
```bash
git add src/components/ServiceCard.jsx
git commit -m "feat(ui): add top image banner with floating badge overlays to ServiceCard"
```

---

### Task 4: Update `ServiceModal.jsx` Component

**Files:**
- Modify: `src/components/ServiceModal.jsx`

**Interfaces:**
- Consumes: `service.image`, `service.imageAlt`, `service.title`, `service.specs`
- Produces: Enhanced modal header with full-width product banner image before specs list.

- [ ] **Step 1: Update `ServiceModal.jsx`**
Insert a `.modal-hero-image-wrap` at the top of the modal body when `service.image` exists:
- Responsive hero image with gradient overlay
- Service badge and category tag
- Preserves existing technical specs, close button, and WhatsApp quote CTA.

- [ ] **Step 2: Verify Vite build succeeds**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**
```bash
git add src/components/ServiceModal.jsx
git commit -m "feat(ui): add product hero image banner to ServiceModal"
```

---

### Task 5: Update `ServiceClusterPage.jsx` Component

**Files:**
- Modify: `src/components/ServiceClusterPage.jsx`

**Interfaces:**
- Consumes: `includedServices` (filtered from `servicesData`)
- Produces: Consistent `.card-image-wrap` in `.cluster-service-card` within the "Specific Capabilities Covered" section.

- [ ] **Step 1: Update `ServiceClusterPage.jsx`**
Replace the plain icon header inside `.cluster-service-card` with `.card-image-wrap` using `service.image`, `service.imageAlt`, badge, and icon overlay.

- [ ] **Step 2: Verify Vite build succeeds**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**
```bash
git add src/components/ServiceClusterPage.jsx
git commit -m "feat(ui): add product image banner to cluster service cards"
```

---

### Task 6: Responsive CSS Styles in `src/styles/index.css`

**Files:**
- Modify: `src/styles/index.css`

**Interfaces:**
- Consumes: Class selectors `.card-image-wrap`, `.card-product-img`, `.card-badge-overlay`, `.card-icon-overlay`, `.modal-hero-image-wrap`
- Produces: Cohesive styling across desktop, tablet, and 2-column mobile grid.

- [ ] **Step 1: Add desktop & tablet styles for card image wrapper**
Define:
- `.card-image-wrap`: `position: relative`, `aspect-ratio: 16 / 10`, `border-radius: var(--radius-sm)`, `overflow: hidden`, `background: #f1f5f9`, `margin-bottom: 0.9rem`.
- `.card-product-img`: `width: 100%`, `height: 100%`, `object-fit: cover`, `transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)`.
- `.service-card:hover .card-product-img`: `transform: scale(1.05)`.
- `.card-badge-overlay`: `position: absolute`, `top: 8px`, `left: 8px`, `background: rgba(255, 255, 255, 0.92)`, `backdrop-filter: blur(6px)`, `font-size: 0.72rem`, `font-weight: 700`, `padding: 0.2rem 0.55rem`, `border-radius: var(--radius-full)`.
- `.card-icon-overlay`: `position: absolute`, `top: 8px`, `right: 8px`, `width: 28px`, `height: 28px`, `border-radius: var(--radius-full)`, `background: rgba(255, 255, 255, 0.92)`, `color: var(--primary)`.

- [ ] **Step 2: Add 2-column mobile styles in `@media (max-width: 480px)`**
Define:
- `.card-image-wrap`: `height: 100px`, `aspect-ratio: auto`, `margin-bottom: 0.5rem`.
- `.card-badge-overlay`: `font-size: 0.62rem`, `padding: 0.15rem 0.45rem`, `top: 6px`, `left: 6px`.
- `.card-icon-overlay`: `width: 24px`, `height: 24px`, `font-size: 0.85rem`, `top: 6px`, `right: 6px`.
- Ensure buttons and text align cleanly without vertical stretching or overflow.

- [ ] **Step 3: Add modal and cluster page image banner styles**
Define `.modal-hero-image-wrap` with `height: 200px`, `border-radius: var(--radius-md)`, and subtle bottom gradient fade.

- [ ] **Step 4: Verify build and syntax**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/styles/index.css
git commit -m "feat(css): implement responsive styling for card product images and mobile 2-col grid"
```

---

### Task 7: End-to-End Build & Visual Verification

**Files:**
- Verification: `npm run build`
- Visual checks: Headless Edge screenshots

- [ ] **Step 1: Run production build**
Run: `npm run build`
Expected: PASS with clean bundle output.

- [ ] **Step 2: Capture desktop screenshots**
Capture desktop view at 1280x800 for:
- Home page `ServiceCatalog`
- Services Directory (`/services/`)
- A cluster sub-page (e.g., `/services/bill-book-invoice-printing/`)
- Open "View Specs" modal

- [ ] **Step 3: Capture mobile screenshots**
Capture mobile view at 375x812 to verify 2-column mobile grid:
- Card image proportions and badge overlay readability
- Button tap targets
- Zero horizontal overflow

- [ ] **Step 4: Push to origin main and deploy to GitHub Pages**
```bash
git push origin main
# mirror build to gh-pages branch
```
