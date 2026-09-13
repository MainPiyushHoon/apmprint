# Design Document: Cinematic Hero with Anime.js Typing Reel & Interactive Dotted Canvas

## 1. Overview
This feature introduces a state-of-the-art **Cinematic Hero** section for Aggarwal Print Media (APM Print). It combines an interactive HTML5 dotted mesh canvas background driven by cursor repulsion physics and the official APM logo color palette with a dynamic `anime.js` typewriter animation that smoothly cycles through all 32 commercial printing services. The existing facility hero section is repositioned immediately below as `FacilitySpotlight`, adjusting its heading from `<h1>` to `<h2>` to preserve 100% SEO integrity and heading hierarchy.

---

## 2. Architecture & Component Structure

### 2.1 File Map
- **`src/components/CinematicHero.jsx`** [NEW]: Primary hero element with single `<h1>`, animated service typing reel, active category badges, and fast quote CTAs.
- **`src/components/InteractiveDottedCanvas.jsx`** [NEW]: Zero-dependency canvas component rendering the brand-colored particle grid with interactive cursor physics.
- **`src/components/FacilitySpotlight.jsx`** [NEW / REFACTOR from `Hero.jsx`]: Renamed existing hero featuring the 4-photo facility reel, Google 4.9★ badge, and animated counters, with `<h2>` heading.
- **`src/App.jsx`** [MODIFY]: Sequential rendering of `CinematicHero` followed by `FacilitySpotlight` and the rest of the application.
- **`src/styles/index.css`** [MODIFY]: Styles for canvas container, cinematic hero layout, typing text, cursor blink animation, and responsiveness.
- **`package.json`** [MODIFY]: Add `animejs` dependency.

### 2.2 Component Hierarchy & Data Flow
```
App.jsx
  ├── Navbar.jsx
  │
  ├── main#main-content
  │     ├── CinematicHero.jsx (New Primary Hero)
  │     │     ├── InteractiveDottedCanvas.jsx (Canvas Background)
  │     │     ├── Single <h1> Title & Dynamic Typing Reel (anime.js)
  │     │     └── Quick CTAs (WhatsApp Quote + Service Jump)
  │     │
  │     ├── FacilitySpotlight.jsx (Shifted Previous Hero)
  │     │     ├── Semantic <h2> Facility Title
  │     │     ├── 4-Photo Carousel Reel (Komori press, Flex printer, Google Maps client work)
  │     │     ├── Animated Stats Counters (15,000+ orders, 32 verticals, 99% guarantee)
  │     │     └── Google Rating & 24h Express Badges
  │     │
  │     ├── ServiceCatalog.jsx (32 Filterable Services)
  │     ├── GoogleReviews.jsx
  │     ├── ProductionShowcase.jsx
  │     ├── WhyUs.jsx
  │     └── ContactQuoteDesk.jsx
  │
  ├── Footer.jsx
  └── ServiceModal.jsx (WhatsApp Quote Modal)
```

---

## 3. Detailed Specifications

### 3.1 `InteractiveDottedCanvas.jsx`
- **Canvas Setup**:
  - Full-width, full-height relative container behind hero content with `pointer-events: auto` to track cursor.
  - Automatically handles `window.devicePixelRatio` for crisp rendering across High-DPI and mobile displays.
  - Subscribes to `IntersectionObserver` to pause the rendering loop when scrolled out of view, minimizing CPU/GPU consumption.
- **Brand Logo Color Gamut**:
  - Extracted from `apm-logo.svg`:
    - Base resting dots: Slate `#cbd5e1`
    - Brand node accents: Cyan `#008DD2`, Royal Blue `#1D5FAB`, Magenta `#E5097F`, Orange `#EF7F1A`, Lime Green `#B0CB1F`.
- **Physics Mechanics**:
  - Grid resolution: ~28px – 32px spacing.
  - Each point has `(x0, y0)` resting position, `(x, y)` current position, and velocities `(vx, vy)`.
  - Repulsion force on mouse move within 110px radius:
    $$F = (1 - \text{dist} / \text{radius}) \times \text{power}$$
  - Spring-damping mechanics returning displaced points:
    $$vx = (vx + (x_0 - x) \times k) \times \text{damping}$$
  - Displaced dots in mouse proximity draw delicate transient connection filaments in translucent brand tones (`rgba(0, 141, 210, 0.15)`).
- **Mobile Fallback**:
  - Ambient harmonic wave creates a gentle, continuous pulse through the dot field when no active pointer is present.

### 3.2 `CinematicHero.jsx` (Anime.js Typing Reel)
- **Typing Engine**:
  - Utilizes `anime.js` to animate the characters of service titles drawn from `servicesData.js` (32 services total).
  - Sequence:
    1. Type in characters progressively with realistic typewriter timing.
    2. Hold active service for ~2.2 seconds.
    3. Backspace / wipe out characters and advance to the next service index.
  - Flashing terminal cursor element (`|`) styled with `animation: blink 0.9s infinite`.
- **Interactive Trigger**:
  - Clicking on the dynamic typed service name scrolls the user to `#services` and pre-filters that service in `ServiceCatalog`.
- **Content & CTAs**:
  - Single `<h1>`: *"High-Precision Commercial Printing &amp; Signage Press"*.
  - Subtitle highlighting Sunil Bansal's on-site supervision in Sector 12, Vijay Nagar, Ghaziabad.
  - CTAs: *"Instant WhatsApp Quote"* (`#contact`) and *"Browse 32 Verticals"* (`#services`).
  - Active Service Category indicator (Paper & Offset, Signage & Large Format, Corporate Stationery, Promotional).

### 3.3 `FacilitySpotlight.jsx`
- Replaces former `Hero.jsx`.
- Heading updated to `<h2>Commercial Manufacturing & Offset Press Facility</h2>`.
- Maintains 4-slide carousel reel:
  1. Komori Lithrone 28 commercial offset line.
  2. Large-format heavy-duty roll flex & vinyl printer.
  3. 3D acrylic raised wall logo (Contentegy client installation from Google Maps).
  4. Frosted glass door vinyl graphics (Sea Hawk Navigation from Google Maps).
- Keeps auto-play timer (4.5s), hover-to-pause, prev/next arrows, dot pagination, and animated counter metrics.

---

## 4. Technical SEO & Performance Guardrails
1. **Single `<h1>` Tag**: Only `CinematicHero.jsx` contains the `<h1>`. All subsequent sections use semantic `<h2>`.
2. **Core Web Vitals**:
   - Zero Cumulative Layout Shift (CLS): Canvas container has CSS min-height and fixed relative boundaries.
   - Canvas animation uses `requestAnimationFrame` and pauses automatically when inactive.
   - `animejs` bundle impact is minimal (~14KB gzipped).
3. **Responsive Design**:
   - Canvas automatically handles resize events with debouncing.
   - Typography scales gracefully from mobile viewports (320px) up to ultra-wide desktop displays (1920px+).

---

## 5. Verification Plan
1. **Dependencies**: `npm install animejs` executes cleanly with zero vulnerabilities.
2. **Build Test**: `npm run build` compiles clean with exit code 0.
3. **SEO Audit**: `node scratch/verify-seo.cjs` confirms exact count of single `<h1>`, valid schema, and Open Graph tags.
4. **Visual & Interaction Verification**:
   - Canvas dots react to mouse movement and recoil smoothly.
   - Dot colors display the APM brand logo palette.
   - Service names cycle continuously with typewriter effect.
   - Facility spotlight below operates smoothly with carousel and counters.
