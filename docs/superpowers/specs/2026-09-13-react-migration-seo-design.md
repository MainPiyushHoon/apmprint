# Design Specification: React Migration, SEO Overhaul & Asset Integration

**Business**: Aggarwal Print Media (APM Print)  
**Date**: 2026-09-13  
**Status**: Approved by User  
**Target Platform**: Web (Vite + React, GitHub Pages CI/CD)

---

## 1. Overview & Objectives

Aggarwal Print Media operates an established printing press and outdoor branding facility in Sector 12, Vijay Nagar, Ghaziabad, UP, offering 32 distinct commercial service verticals. This project migrates the existing static HTML/CSS/JS website to a modern, modular React (Vite) application while performing a comprehensive technical and on-page SEO overhaul, integrating real facility photography (`komori_offset_press.jpg`, `flex_banner_printer.jpg`) and the vector brand mark (`apm logo.svg`), and configuring an automated GitHub Pages deployment pipeline.

---

## 2. Technical Architecture & File Structure

```text
apmprint/
├── public/
│   ├── images/
│   │   ├── apm-logo.svg            # Vector brand mark
│   │   ├── komori_offset_press.jpg # Komori Lithrone 28 multi-unit offset press
│   │   ├── flex_banner_printer.jpg # Roll-to-roll industrial flex printer
│   │   ├── business_cards.jpg      # Stationery & card photography
│   │   ├── flex_boards.jpg         # Outdoor signage photography
│   │   ├── paper_flyers.jpg        # Leaflets & billbooks photography
│   │   └── hero_press.jpg          # Commercial facility highlight
│   ├── favicon.svg                 # SVG brand favicon
│   ├── robots.txt                  # Full crawl directive & sitemap index
│   └── sitemap.xml                 # Canonical XML sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Semantic header, vector logo, mobile drawer
│   │   ├── Hero.jsx                # Single H1, live stats counter, dual CTAs, press photo
│   │   ├── ServiceCatalog.jsx      # Live catalog search, category pills, 32 service grid
│   │   ├── ServiceCard.jsx         # Accessible card with specs button & quick quote
│   │   ├── ServiceModal.jsx        # Dialog for detailed paper GSM & technical specs
│   │   ├── GoogleReviews.jsx       # 4.9 ★ review display with direct Google Maps link
│   │   ├── ProductionShowcase.jsx  # Gallery with genuine Komori & flex roll printer photos
│   │   ├── WhyUs.jsx               # 4 value pillars (24h delivery, wholesale, etc.)
│   │   ├── ContactQuoteDesk.jsx    # 1-Click WhatsApp quote generator & web form
│   │   ├── Toast.jsx               # Non-intrusive action feedback toasts
│   │   └── Footer.jsx              # Semantic footer, structured internal links, schema
│   ├── data/
│   │   └── servicesData.js         # Single source of truth for all 32 services
│   ├── styles/
│   │   └── index.css               # Clean Light Ink & Paper CSS token system
│   ├── App.jsx                     # Master state controller (modals, search, toasts)
│   └── main.jsx                    # React mount point
├── index.html                      # Static SEO document with full meta, OG/Twitter, JSON-LD
├── vite.config.js                  # Relative base ('./'), build optimizations
├── package.json                    # React 19 / 18, Vite, Remix Icons, build scripts
└── .github/workflows/static.yml    # CI/CD: Checkout -> Node.js -> Build -> Deploy dist
```

---

## 3. SEO Specification & Technical Standards

### 3.1 Metadata & Social Graph
- **Title Tag**: `Aggarwal Print Media | Commercial Paper Printing, Offset & Signage Press` (< 60 chars)
- **Meta Description**: `Premier commercial printing press in Ghaziabad & Delhi-NCR. Specializing in NCR bill books, letterheads, flex boards, 3D LED signs, ID cards & promo gifts.` (~158 chars)
- **Canonical URL**: `https://mainpiyushhoon.github.io/apmprint/`
- **Robots Tag**: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **Open Graph**: `og:title`, `og:description`, `og:image` (pointing to `komori_offset_press.jpg`), `og:url`, `og:type=website`, `og:site_name`
- **Twitter Cards**: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`

### 3.2 Structured Data (Schema.org JSON-LD)
Embedded directly in static `index.html`:
- `@type`: `["LocalBusiness", "PrintingService"]`
- `name`: Aggarwal Print Media
- `address`: Sector 12, Vijay Nagar, Ghaziabad, UP 201009, India
- `geo`: Latitude 28.6415, Longitude 77.4294
- `telephone`: `+919876543210`
- `priceRange`: `₹₹`
- `openingHoursSpecification`: `Mo-Sa 09:30-20:30`
- `aggregateRating`: ratingValue: `4.9`, reviewCount: `85`
- `hasOfferCatalog`: Structured listing of 4 categories and all 32 services.

### 3.3 Strict Heading Hierarchy
- **`<h1>` (Hero)**: `Commercial Paper Printing, Offset & Signage Press`
- **`<h2>` (Sections)**:
  - `Our 32 Commercial Printing & Branding Services`
  - `Verified Customer Reviews on Google Maps`
  - `Production Machinery & Press Facility`
  - `Why Choose Aggarwal Print Media`
  - `Request an Instant Custom Quote`
- **`<h3>`**: Individual service cards, showcase machines, value proposition cards.
- **`<h4>`**: Modal spec details, contact methods, footer columns.

### 3.4 Core Web Vitals & Media Optimization
- Explicit `width` and `height` on all image elements (0 Cumulative Layout Shift).
- Hero press image loaded with `fetchpriority="high"` and `loading="eager"`.
- Below-the-fold showcase images loaded with `loading="lazy"` and `decoding="async"`.
- Vector brand mark (`apm logo.svg`) rendered crisply at any DPI without rasterization.

---

## 4. Components & Interactive Features

1. **Service Catalog Engine (`ServiceCatalog.jsx` & `servicesData.js`)**:
   - 4 Categories: Stationery & Registers (9), Paper & Marketing (6), Labels & Promo Gifts (4), Outdoor & Signage (13).
   - Real-time search filtering across service title and technical description.
   - Interactive modal popup with paper GSM, binding, finish, and minimum order specs.
2. **1-Click WhatsApp Quote Desk (`ContactQuoteDesk.jsx`)**:
   - Form inputs: Customer Name, Phone, Service Select (32 items), Job Specifications.
   - Generates pre-formatted WhatsApp URL sent directly to sales desk (+91 98765 43210).
   - Alternative web form submission with interactive toast response.
3. **Google Reviews Sync (`GoogleReviews.jsx`)**:
   - Displaying 4.9 ★ rating, 85+ verified reviews, live sync timestamp, and direct link to official Google Maps listing.
4. **Animated Stat Counters (`Hero.jsx`)**:
   - 15,000+ Orders Fulfilled, 32 Service Verticals, 99% On-Time Guarantee.

---

## 5. Automated CI/CD Deployment (`.github/workflows/static.yml`)

1. Trigger on push to `main` or manual workflow dispatch.
2. Steps:
   - Checkout code (`actions/checkout@v4`)
   - Setup Node.js (`actions/setup-node@v4`) with Node 20.x / 22.x
   - Run `npm ci`
   - Run `npm run build` (outputs optimized production bundle to `./dist`)
   - Upload GitHub Pages artifact from `./dist`
   - Deploy artifact to GitHub Pages (`actions/deploy-pages@v5`)

---

## 6. Verification & Post-Implementation SEO Audit

- Build verification (`npm run build` passing with 0 errors).
- Automated SEO checks (meta tags, robots.txt, sitemap.xml, JSON-LD validator).
- Browser functional verification of search, modals, responsive drawer, and WhatsApp builder.
