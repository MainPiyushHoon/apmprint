# 🖨️ Aggarwal Print Media (APM Print)

> **Official Web Application for Commercial Paper Printing, Stationery Manufacturing & Outdoor Branding.**  
> *Located in Sector 12, Vijay Nagar, Ghaziabad, UP 201009 — Rated 4.9 ★★★★★ on Google Maps.*

---

## 🌟 Overview

**Aggarwal Print Media** is a modern, high-performance static web application built for an established printing press and signage manufacturer operating in the Delhi-NCR region. The website showcases 32 distinct commercial service verticals ranging from NCR duplicate bill books and executive letterheads to 3D acrylic LED signboards, sandwich boards, and corporate promotional gifts.

Designed with a **Minimalist Light Ink & Paper Design System**, the application offers a fast, mobile-optimized experience with live catalog search, instant WhatsApp quote builder, and auto-syncing Google Maps customer reviews.

---

## ✨ Key Features

- **🎨 Minimalist Single-Palette Design**: Built with clean paper white (`#ffffff`), soft slate (`#f8fafc`), and a vibrant **Royal Ink Blue (`#1d4ed8`)** accent palette—avoiding dark mode clutter per design requirements.
- **📱 Zero-Clutter Mobile Experience**: Fully responsive touch-first layout (`@media (max-width: 768px)` & `480px`) featuring horizontally scrollable category tabs, single-column product grids, and compact touch targets.
- **📦 32 Complete Service Verticals**: Every item listed by the business is included with starting prices, quick details, and interactive technical spec modals.
- **🔍 Instant Live Search & Filter**: Real-time JavaScript search bar allowing customers to find any service (e.g., *"Bill Book"*, *"Sandwich Board"*, *"Flex Board"*) instantly.
- **💬 Direct WhatsApp Quote Desk**: Integrated quote builder that encodes customer names, phone numbers, chosen services, and job specifications directly into a 1-click WhatsApp message sent to the sales desk.
- **⭐ Live Auto-Syncing Google Reviews**: Integrated Google Maps widget connected to the official business listing ([maps.app.goo.gl/Spq1CrgbY3Rd7Q5e6](https://maps.app.goo.gl/Spq1CrgbY3Rd7Q5e6)) displaying 4.9 ★★★★★ rating and live customer reviews.

---

## 📁 Full 32 Service Catalog

The business verticals are organized into 4 primary category tabs:

### 1. 📒 Stationery & Registers (9 Items)
1. **Bill Book**: Duplicate (1+1) & Triplicate (1+2) NCR carbonless tax invoices & cash memos.
2. **Challan Book**: Delivery challan books, transport receipts with red serial numbering.
3. **Letter Head**: Executive 100 GSM Royal Bond paper letterheads.
4. **School Office Registers**: Hard-bound student attendance, admission & fee ledgers.
5. **School Office ID Cards**: Thermal fused PVC plastic ID cards with custom printed satin lanyards.
6. **Office Files**: Heavy cardboard cobra files & printed plastic document folders.
7. **Record Registers**: Industrial stock registers & factory maintenance logbooks.
8. **Envelope**: Standard 9x4 inch, A4 size, and cloth-laminated office envelopes.
9. **Other Stationery**: Custom notepads, self-inking rubber stamps & specialized office supplies.

### 2. 📄 Paper & Marketing (6 Items)
10. **Leaflet / Pumplet**: Full-color promotional flyers on 100/130/170 GSM glossy art paper.
11. **Brochure**: Bi-fold & tri-fold corporate marketing brochures with soft-touch lamination.
12. **Catalogue**: Multi-page product showcase catalogs with saddle-stitch or perfect spine binding.
13. **Calenders**: Corporate wall calendars & desktop tent calendars with top wiro wire binding.
14. **Tant Card**: Tabletop tent cards for restaurant menus and conference table standees.
15. **Dangler**: Retail store ceiling promotional danglers with punch hole & hanging thread.

### 3. 🏷️ Labels & Promo Gifts (4 Items)
16. **Product Label**: Custom packaging labels, bottle stickers & barcodes in sheet or roll form.
17. **Sticker**: Waterproof white vinyl, paper stickers & transparent die-cut decals.
18. **Wall Clock Printing**: Custom printed dial wall clocks for corporate gifting & brand promotion.
19. **Wrist Watch Printing**: Corporate employee award wristwatches with full dial logo printing.

### 4. 🪧 Outdoor & Signage (13 Items)
20. **Flex Board**: Heavy duty Star Flex outdoor banners with MS iron frame mounting.
21. **Back Drop**: Non-reflective stage backdrops & event photo booth structures.
22. **Glowsign Board**: Backlit flex glow sign boxes & 3D acrylic glowing LED letters.
23. **Dealers Board**: Brand dealership tin plates, sunpack & retail network signboards.
24. **Digital Vinyl**: High-resolution self-adhesive vinyl for glass doors, walls & vehicle wraps.
25. **One Way Vision**: Perforated window film printing for glass shopfronts and car windows.
26. **Sunpack**: Corrugated plastic sunpack fluted sheets for electric pole advertising.
27. **Roll up Standee**: Portable retractable aluminum standee with non-tearable matte vinyl media.
28. **Canopy**: Foldable outdoor promotional tents with full roof & wall brand graphics.
29. **ACP Sheet Cutting Board**: CNC router cut Aluminum Composite Panel architectural signboards.
30. **Clip on Board**: Ultra-slim aluminum snap-frame poster boards & LED lightboxes.
31. **Sandwich Board**: Double-sided A-frame sidewalk sandwich boards & acrylic wall displays.
32. **Outdoor Branding & Advertising**: Turnkey hoarding banners, building wraps & pole kiosk campaigns.

---

## 🛠️ Technology Stack

- **React 19**: Modern component architecture, state management, and optimized virtual DOM.
- **Vite 6**: Ultra-fast next-gen build tool and development server with Hot Module Replacement (HMR).
- **Anime.js**: Fluid cursor pulse and typewriter micro-animations.
- **HTML5 Canvas**: Custom particle physics mesh background with cursor repulsion and spring damping.
- **Vanilla CSS3 Design System**: Custom design tokens, CSS variables, responsive typography, and mobile optimizations.
- **Schema.org JSON-LD**: Rich structured data (`LocalBusiness`, `PrintingService`) for Google search indexing.
- **Remix Icon**: Vector icon library for intuitive visual affordances.

---

## 📂 Codebase Structure

```text
apmprint/
├── index.html            # Vite HTML entry point with Schema.org JSON-LD & SEO
├── public/               # Static assets directly served at root
│   ├── favicon.svg       # Official vector favicon
│   ├── robots.txt        # Production crawl rules
│   ├── sitemap.xml       # Full service index sitemap
│   └── images/           # High-resolution facility & portfolio photography
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── CinematicHero.jsx          # Dynamic typewriter reel & brand gradient
│   │   ├── InteractiveDottedCanvas.jsx # Cursor repulsion physics particle mesh
│   │   ├── FacilitySpotlight.jsx      # Production machinery showcase & animated counters
│   │   ├── ServiceCatalog.jsx         # 32-service filterable catalog
│   │   ├── ServiceCard.jsx            # Individual service card with action CTAs
│   │   ├── ServiceModal.jsx           # Technical specification popup dialog
│   │   ├── ProductionShowcase.jsx     # Factory photo portfolio
│   │   ├── GoogleReviews.jsx          # Google Maps verified reviews & photos
│   │   ├── ContactQuoteDesk.jsx       # Instant WhatsApp lead generation quote builder
│   │   ├── Navbar.jsx                 # Sticky blur header with mobile drawer
│   │   ├── Footer.jsx                 # SEO footer with business hours & sitemap links
│   │   ├── Toast.jsx                  # Floating notification feedback
│   │   └── WhyUs.jsx                  # 4-pillar trust & quality breakdown
│   ├── data/
│   │   ├── businessConfig.js          # Business contact info, phone, address & hours
│   │   └── servicesData.js            # Comprehensive 32 commercial printing services
│   ├── styles/
│   │   └── index.css                  # Custom design system tokens & responsive styles
│   ├── App.jsx                        # Main application layout
│   └── main.jsx                       # React 19 DOM bootstrap
├── vite.config.js        # Vite 6 configuration with React plugin
├── package.json          # Modern dependencies and build scripts
└── README.md             # Project documentation
```

---

## 🚀 How to Run Locally

1. **Clone or Download** the repository to your local computer.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:5173` to interact with the application.
5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📞 Business Contact & Location

- **Business Name**: Aggarwal Print Media
- **Address**: Near Double Tanki Road, Sector 12, Vijay Nagar, Ghaziabad, Uttar Pradesh 201009
- **Google Maps Link**: [https://maps.app.goo.gl/Spq1CrgbY3Rd7Q5e6](https://maps.app.goo.gl/Spq1CrgbY3Rd7Q5e6)
- **WhatsApp / Phone**: +91 98765 43210 / +91 (011) 2345 6789
- **Email**: info@aggarwalprintmedia.com

---

&copy; 2026 Aggarwal Print Media. All Rights Reserved.
