# React Migration & SEO Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert Aggarwal Print Media (APM Print) website from static HTML/CSS/JS to a high-performance React (Vite) application, integrate real press machinery imagery and the vector brand logo, implement comprehensive technical and on-page SEO best practices (schema, meta, canonical, sitemap, robots), and update the GitHub Actions deployment workflow.

**Architecture:** A lightweight, component-driven React application built with Vite with pre-rendered semantic HTML in `index.html` for instant crawlability and zero-CLS Core Web Vitals. Centralized data configuration for business contact info and the 32 service verticals.

**Tech Stack:** React 19 / 18, Vite 6 / 5, `@vitejs/plugin-react`, Remix Icon CDN, Vanilla CSS Design System, GitHub Actions.

## Global Constraints

- Domain for SEO/Canonical/Sitemap: `https://apmprint.in/` (with fallback support for GitHub Pages `https://mainpiyushhoon.github.io/apmprint/` via relative base `./`)
- Theme: Minimalist Light Ink & Paper (`#ffffff`, `#f8fafc`, `#1d4ed8`, `#0f172a`)
- Brand Logo: Vector CorelDRAW SVG `apm logo.svg`
- Real Press Photos: `komori_offset_press.jpg` (Komori Lithrone 28), `flex_banner_printer.jpg` (Wide-format roll printer)
- Service Catalog: All 32 service verticals categorized accurately across 4 tabs
- Single `<h1>` on page, strict `<h2>` -> `<h3>` -> `<h4>` hierarchy, valid Schema.org JSON-LD

---

### Task 1: Project Scaffolding & Configuration

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Test: Verify dependencies install and Vite config is valid

- [ ] **Step 1: Create package.json with React and Vite dependencies**

```json
{
  "name": "apmprint",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.2.0"
  }
}
```

- [ ] **Step 2: Create vite.config.js with relative base**

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
```

- [ ] **Step 3: Run npm install**

Run: `npm install`
Expected: Dependencies installed successfully, `package-lock.json` generated.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json vite.config.js
git commit -m "chore: scaffold React Vite application"
```

---

### Task 2: Static Assets & SEO Files Setup

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `public/favicon.svg`
- Copy: `images/` to `public/images/` with standardized asset names

- [ ] **Step 1: Setup public directory structure and copy images**

Copy `images/*` to `public/images/`, ensuring `apm logo.svg` is accessible as `public/images/apm-logo.svg` and as `public/favicon.svg`.

- [ ] **Step 2: Create public/robots.txt**

```text
User-agent: *
Allow: /

Sitemap: https://apmprint.in/sitemap.xml
```

- [ ] **Step 3: Create public/sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://apmprint.in/</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://apmprint.in/#services</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://apmprint.in/#portfolio</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://apmprint.in/#contact</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

- [ ] **Step 4: Commit**

```bash
git add public/
git commit -m "feat(seo): add robots.txt, sitemap.xml, favicon and public imagery"
```

---

### Task 3: Centralized Data Layer

**Files:**
- Create: `src/data/businessConfig.js`
- Create: `src/data/servicesData.js`

- [ ] **Step 1: Create src/data/businessConfig.js**

```javascript
export const businessConfig = {
  name: "Aggarwal Print Media",
  shortName: "APM Print",
  tagline: "Commercial Paper Printing, Offset & Signage Press",
  address: {
    street: "Near Double Tanki Road, Sector 12, Vijay Nagar",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    postalCode: "201009",
    country: "India",
    full: "Sector 12, Vijay Nagar, Ghaziabad, Uttar Pradesh 201009"
  },
  geo: {
    latitude: 28.6415,
    longitude: 77.4294
  },
  phone: {
    primary: "+91 98765 43210",
    primaryRaw: "+919876543210",
    landline: "+91 (011) 2345 6789",
    whatsappRaw: "919876543210"
  },
  email: "info@aggarwalprintmedia.com",
  hours: "Monday – Saturday: 9:30 AM – 8:30 PM (Sunday Closed)",
  googleRating: {
    score: "4.9",
    reviewsCount: 85,
    mapsUrl: "https://maps.app.goo.gl/Spq1CrgbY3Rd7Q5e6"
  },
  canonicalUrl: "https://apmprint.in/"
};
```

- [ ] **Step 2: Create src/data/servicesData.js with all 32 services**

Organized into the 4 primary categories:
1. `stationery`: Bill Book, Challan Book, Letter Head, School Office Registers, School Office ID Cards, Office Files, Record Registers, Envelope, Other Stationery (9 items).
2. `paper`: Leaflet / Pumplet, Brochure, Catalogue, Calenders, Tant Card, Dangler (6 items).
3. `labels`: Product Label, Sticker, Wall Clock Printing, Wrist Watch Printing (4 items).
4. `outdoor`: Flex Board, Back Drop, Glowsign Board, Dealers Board, Digital Vinyl, One Way Vision, Sunpack, Roll up Standee, Canopy, ACP Sheet Cutting Board, Clip on Board, Sandwich Board, Outdoor Branding & Advertising (13 items).

- [ ] **Step 3: Commit**

```bash
git add src/data/
git commit -m "feat(data): add business configuration and 32-service catalog data"
```

---

### Task 4: Design System CSS

**Files:**
- Create: `src/styles/index.css`

- [ ] **Step 1: Write modern, responsive CSS design system**

Port and optimize CSS from `css/styles.css` into `src/styles/index.css`:
- CSS variables for colors (`--bg-main`, `--bg-surface`, `--primary`, `--primary-hover`, `--text-main`, `--text-muted`, `--border-light`, `--google-blue`, `--whatsapp-green`).
- Responsive typography (`'Outfit'`, `'Plus Jakarta Sans'`).
- Fluid grid, cards, badge utilities, buttons, search input styling, modal transitions, and toast notifications.

- [ ] **Step 2: Commit**

```bash
git add src/styles/index.css
git commit -m "style: implement modern responsive design tokens in index.css"
```

---

### Task 5: Core UI Components (Navbar, Hero, Catalog, Modals, Toast)

**Files:**
- Create: `src/components/Toast.jsx`
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Hero.jsx`
- Create: `src/components/ServiceCard.jsx`
- Create: `src/components/ServiceModal.jsx`
- Create: `src/components/ServiceCatalog.jsx`

- [ ] **Step 1: Create Toast.jsx**
Interactive toast for user feedback (e.g., copying info, syncing reviews, submitting quote).

- [ ] **Step 2: Create Navbar.jsx**
Semantic `<header className="navbar">` and `<nav>`, featuring the vector `apm-logo.svg`, navigation links, mobile hamburger drawer, and quick quote CTA.

- [ ] **Step 3: Create Hero.jsx**
Features single `<h1>`, animated number counters (`15,000+ Orders`, `32 Verticals`, `99% On-Time`), dual CTAs, and the real facility press image with `fetchpriority="high"`.

- [ ] **Step 4: Create ServiceCard.jsx & ServiceModal.jsx**
Service card with category badge, technical description, "View Specs" trigger, and instant quote action. Modal dialog with accessible focus management and Escape-key closure.

- [ ] **Step 5: Create ServiceCatalog.jsx**
Live search bar, 4 category filter pills, count badge, empty state feedback, and responsive grid.

- [ ] **Step 6: Commit**

```bash
git add src/components/
git commit -m "feat(components): build Navbar, Hero, ServiceCatalog, Card, Modal, and Toast"
```

---

### Task 6: Showcase, Reviews, Why Us & Quote Desk Components

**Files:**
- Create: `src/components/ProductionShowcase.jsx`
- Create: `src/components/GoogleReviews.jsx`
- Create: `src/components/WhyUs.jsx`
- Create: `src/components/ContactQuoteDesk.jsx`
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Create ProductionShowcase.jsx**
High-fidelity gallery featuring real photos:
- `komori_offset_press.jpg`: Komori Lithrone 28 commercial offset press line.
- `flex_banner_printer.jpg`: Industrial roll-fed flex banner and vinyl printer.
- Plus billbooks, stationery, and outdoor branding cards with descriptive alt text and explicit aspect ratios.

- [ ] **Step 2: Create GoogleReviews.jsx**
4.9 ★ rating badge, verified customer reviews, live sync timestamp updater, and direct link to official Google Maps listing.

- [ ] **Step 3: Create WhyUs.jsx**
4 value pillars (Fast 24h Turnaround, All 32 Services, Press Wholesale Pricing, Prepress Artwork Audit).

- [ ] **Step 4: Create ContactQuoteDesk.jsx**
- 1-Click WhatsApp Quote Generator encoding Name, Phone, Service, and Specs directly to WhatsApp.
- Web form submission with client validation and confirmation toast.
- Clear business contact details (address, phone, email, hours).

- [ ] **Step 5: Create Footer.jsx**
Semantic `<footer>`, vector brand logo, structured internal navigation links, copyright, and business location.

- [ ] **Step 6: Commit**

```bash
git add src/components/
git commit -m "feat(components): add Showcase, GoogleReviews, WhyUs, ContactQuoteDesk, and Footer"
```

---

### Task 7: App Root, Static SEO Document & Structured Data

**Files:**
- Create: `src/App.jsx`
- Create: `src/main.jsx`
- Modify: `index.html`

- [ ] **Step 1: Create src/App.jsx & src/main.jsx**
App wires together Navbar, Hero, ServiceCatalog, GoogleReviews, ProductionShowcase, WhyUs, ContactQuoteDesk, Footer, ServiceModal, and Toast.

- [ ] **Step 2: Update index.html with Complete Technical & On-Page SEO**
- Title tag under 60 chars.
- Meta description ~158 chars.
- Canonical `<link rel="canonical" href="https://apmprint.in/">`.
- Robots meta `<meta name="robots" content="index, follow, max-image-preview:large">`.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`).
- Twitter Card tags (`twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`).
- Rich Schema.org JSON-LD structured data (`PrintingService`, `AggregateRating`, `hasOfferCatalog`).
- Pre-rendered semantic landmarks `<main id="main-content">`.

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx src/main.jsx index.html
git commit -m "feat(seo): embed complete Schema.org JSON-LD, Open Graph, and semantic root"
```

---

### Task 8: Automated CI/CD GitHub Actions Deployment

**Files:**
- Modify: `.github/workflows/static.yml`

- [ ] **Step 1: Update .github/workflows/static.yml**
Configure GitHub Actions to:
1. Checkout code
2. Setup Node.js 22.x with npm cache
3. `npm ci`
4. `npm run build`
5. Upload `./dist` artifact
6. Deploy `./dist` to GitHub Pages

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/static.yml
git commit -m "ci: update GitHub Pages workflow for React Vite build and deployment"
```

---

### Task 9: Build Verification, Functional Testing & Post-Implementation SEO Audit

**Files:**
- Verify: `npm run build`
- Verify: `dist/index.html`
- Verify: Core Web Vitals & SEO checks

- [ ] **Step 1: Run production build**
Run: `npm run build`
Expected: Build passes with 0 errors, generating clean bundle in `dist/`.

- [ ] **Step 2: Verify SEO Checklist**
- [x] Title & meta description valid and present in built HTML
- [x] Canonical URL tag present and pointing to `https://apmprint.in/`
- [x] Open Graph & Twitter cards valid
- [x] JSON-LD Schema valid `PrintingService`
- [x] `sitemap.xml` and `robots.txt` present in `dist/`
- [x] Single `<h1>`, correct `<h2>` -> `<h3>` hierarchy
- [x] Alt text on all images, explicit width/height
- [x] Responsive layout verified

- [ ] **Step 3: Final Commit & Summary**
```bash
git status
```
