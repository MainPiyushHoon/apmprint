# Design Specification: Product Imagery Across Service Cards & Modals

**Date:** 2026-09-19  
**Status:** Approved  
**Topic:** Service Card Product Images Integration across Home, Services Directory, Cluster Sub-pages & Modals  

---

## 1. Objective & Scope

Aggarwal Print Media (APM Print) offers 32 commercial printing, packaging, and outdoor signage verticals. Previously, service cards displayed generic category icons without actual product visuals. This specification establishes a unified, photorealistic product imagery system integrated across:
1. **Home Page**: The primary `ServiceCatalog` component.
2. **Services Directory Page (`/services/`)**: Full 32-service listing.
3. **Service Cluster Landing Pages (`/services/:slug/`)**: Included service cards (`cluster-service-card`).
4. **Service Detail Modal (`ServiceModal.jsx`)**: The "View Specs" popup dialog.

---

## 2. Architecture & Data Model

### 2.1 Asset Organization
All 32 product images will be stored within `public/images/products/` as optimized WebP assets with descriptive slugs matching service IDs:
- Directory: `public/images/products/`
- Format: `.webp` (high-fidelity, lightweight for mobile performance)
- Asset list (32 items):
  - `bill-book.webp`, `challan-book.webp`, `letter-head.webp`, `school-registers.webp`, `school-id-cards.webp`, `office-files.webp`, `record-registers.webp`, `envelope.webp`, `other-stationery.webp`
  - `leaflet-pumplet.webp`, `brochure.webp`, `catalogue.webp`, `calenders.webp`, `tant-card.webp`, `dangler.webp`
  - `product-label.webp`, `sticker.webp`, `wall-clock.webp`, `wrist-watch.webp`
  - `flex-board.webp`, `back-drop.webp`, `glowsign-board.webp`, `dealers-board.webp`, `digital-vinyl.webp`, `one-way-vision.webp`, `sunpack.webp`, `rollup-standee.webp`, `canopy.webp`, `acp-cutting-board.webp`, `clip-on-board.webp`, `sandwich-board.webp`, `outdoor-branding.webp`

### 2.2 Data Model Enhancement (`src/data/servicesData.js`)
Each service item object in `servicesData` will be enhanced with:
- `image`: URL string pointing to `/images/products/{id}.webp` (compatible with `getAppUrl` or base-path-aware helper for GitHub Pages).
- `imageAlt`: Clear descriptive alt text for accessibility and SEO.

---

## 3. Component Architecture & UI Layout

### 3.1 `ServiceCard.jsx`
- Replace the bare icon header with a dedicated `.card-image-wrap` element.
- Structure:
  - `.card-image-wrap`: Aspect ratio `16/10`, rounded top corners (`border-radius: var(--radius-sm)`), overflow hidden, subtle border.
  - Image element: `loading="lazy"`, `object-fit: cover`, smooth zoom on card hover (`scale(1.04)`).
  - Floating badges:
    - `.card-badge-overlay`: Top-left floating badge for category/status (`Popular`, `Essential`, `Corporate`, etc.) with glassmorphism backdrop.
    - `.card-icon-overlay`: Top-right compact icon badge indicating the vertical type.
  - Below image wrap:
    - Card body containing `service.title`, `service.desc`.
    - Action buttons: "Specs" (triggering modal) and "Quote" (linking to WhatsApp).

### 3.2 `ServiceModal.jsx`
- Introduce a high-resolution hero product banner at the top of the modal dialog:
  - Header image container with height ~200px.
  - Bottom vignette gradient smoothly transitioning into modal content.
  - Badge, category name, and title overlayed or immediately underneath.
  - Followed by the technical specifications bullet points and quotation actions.

### 3.3 `ServiceClusterPage.jsx`
- Update `.cluster-service-card` within the "Specific Capabilities Covered" grid to feature the identical `.card-image-wrap` structure, ensuring visual consistency when navigating from the home/directory page to individual cluster pages.

---

## 4. Responsive Styling System (`src/styles/index.css`)

### 4.1 Desktop & Tablet (`> 480px`)
- Card layout remains standard auto-fill grid (`minmax(270px, 1fr)`).
- Card image container maintains `aspect-ratio: 16/10`.
- Card padding and typography remain generous and easily readable.
- Smooth transition on hover: `transform: translateY(-4px)`, shadow lift, and image zoom.

### 4.2 Mobile 2-Column Grid (`<= 480px`)
- Grid remains 2 columns (`repeat(2, minmax(0, 1fr))`) with compact gap (`0.55rem`).
- Card image height scales gracefully to `95px - 105px`.
- Overlay badges use compact typography (`0.62rem - 0.68rem`) with minimal padding.
- Card titles and descriptions fit comfortably without overflow.

---

## 5. Asset Generation Strategy

For each of the 32 services, photorealistic, clean commercial studio mockups will be generated and saved directly to `public/images/products/`:
1. Realistic lighting, white/neutral studio backdrop or ambient printing press environment.
2. Clear representation of the physical product (e.g. duplicate carbonless paper layers with perforation for Bill Book; backlit illumination for Glowsign Board; metallic aluminum retractable base for Rollup Standee).
3. Standardized aspect ratio to ensure uniform grid alignment.

---

## 6. Verification & Quality Assurance

- **Build Verification**: `npm run build` must succeed with 0 syntax or bundling errors.
- **Visual Testing**:
  - Test desktop view on Home, Services Directory, and Cluster pages.
  - Test mobile view (375px & 320px) to verify 2-column card balance, image aspect ratio, and button tap targets.
  - Verify modal image presentation and close behavior.
