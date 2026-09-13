# Cinematic Hero with Anime.js & Interactive Dotted Canvas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Hero section with a new high-impact Cinematic Hero featuring an interactive brand-palette dotted canvas with cursor repulsion physics and an anime.js typewriter reel cycling all 32 services, while shifting the previous hero below as `FacilitySpotlight` with semantic `<h2>`.

**Architecture:** 
- `InteractiveDottedCanvas.jsx`: Zero-dependency HTML5 `<canvas>` background component rendering responsive points in the official APM brand logo palette with cursor repulsion, spring-damping physics, and viewport auto-pausing.
- `CinematicHero.jsx`: Main entrance component containing the page's single `<h1>` tag, dynamic `anime.js` typewriter animation cycling all 32 services from `servicesData.js`, category pills, and instant WhatsApp quote CTAs.
- `FacilitySpotlight.jsx`: Refactored previous hero, preserving the 4-slide carousel reel (Komori press, flex printer, Contentegy 3D logo, Sea Hawk frosted vinyl) and animated order counters with `<h2>` heading.

**Tech Stack:** React 19, Vite 6, animejs, HTML5 Canvas API, Vanilla CSS.

## Global Constraints
- Must maintain single `<h1>` on the indexable page.
- Dot colors must use the APM logo color palette (`#008DD2`, `#1D5FAB`, `#E5097F`, `#EF7F1A`, `#B0CB1F`, `#cbd5e1`).
- Must preserve all 32 printing service offerings and Sunil Bansal's verified contact coordinates.
- Zero Cumulative Layout Shift (CLS) and smooth 60fps canvas animation with automatic idle pausing.

---

### Task 1: Install `animejs` Dependency

**Files:**
- Modify: `package.json`

**Interfaces:**
- Consumes: npm registry
- Produces: `animejs` importable in ES modules

- [ ] **Step 1: Install `animejs`**
Run: `npm install animejs`
Expected: `package.json` updated with `animejs` and exit code 0.

- [ ] **Step 2: Verify dependency installation**
Run: `node -e "import('animejs').then(() => console.log('animejs OK'))"`
Expected: Prints `animejs OK`.

- [ ] **Step 3: Commit**
```bash
git add package.json package-lock.json
git commit -m "deps: add animejs for hero typewriter animations"
```

---

### Task 2: Refactor Current Hero to `FacilitySpotlight.jsx`

**Files:**
- Create: `src/components/FacilitySpotlight.jsx`
- Modify: `src/components/Hero.jsx` (will be superseded or redirected)

**Interfaces:**
- Consumes: `src/data/businessConfig.js`, `public/images/*`
- Produces: `<FacilitySpotlight onSelectQuickTag={handleSelectQuickTag} />`

- [ ] **Step 1: Create `src/components/FacilitySpotlight.jsx`**
Port the existing `Hero.jsx` implementation into `FacilitySpotlight.jsx`, changing:
  - Component name to `FacilitySpotlight`
  - Section class to `facility-spotlight` and `id="facility-showcase"`
  - Heading from `<h1 className="hero-title">` to `<h2 className="facility-title">Commercial Manufacturing &amp; Offset Press Facility</h2>`
  - Subtitle and badge highlighting physical plant in Sector 12, Vijay Nagar
  - Preserve the 4-slide carousel reel, pause on hover, nav arrows, pagination dots, Google 4.9★ badge, and animated counters (`15,000+` orders, `32` verticals, `99%` guarantee).

- [ ] **Step 2: Verify component builds cleanly**
Run: `npx vite build`
Expected: Zero compilation errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/FacilitySpotlight.jsx
git commit -m "refactor(hero): shift previous hero to FacilitySpotlight with semantic h2"
```

---

### Task 3: Build `InteractiveDottedCanvas.jsx`

**Files:**
- Create: `src/components/InteractiveDottedCanvas.jsx`

**Interfaces:**
- Consumes: HTML5 Canvas API, window resize events, mouse pointer coordinates
- Produces: `<InteractiveDottedCanvas />` rendering behind the hero text

- [ ] **Step 1: Implement `InteractiveDottedCanvas.jsx`**
Build the canvas component with:
  - Canvas resolution scaling using `window.devicePixelRatio`.
  - Dot matrix layout with ~30px spacing.
  - Color palette directly from brand logo:
    - Base: `#cbd5e1` (soft slate)
    - Accents: `['#008DD2', '#1D5FAB', '#E5097F', '#EF7F1A', '#B0CB1F']`
  - Physics mechanics:
    - Points store `(x0, y0)`, current `(x, y)`, and velocities `(vx, vy)`.
    - Mouse movement applies repulsion force within a 110px radius:
      $F = (1 - \text{dist}/110) \times 4$
    - Displaced points spring back to resting state with damping ($k = 0.08, \text{damping} = 0.86$).
    - Dots within mouse radius illuminate in brand colors and connect with subtle translucent filaments (`rgba(0, 141, 210, 0.14)`).
  - Ambient wave pulse for mobile touch or idle states.
  - `IntersectionObserver` to pause `requestAnimationFrame` when the hero is out of view.
  - Proper event listener cleanup on unmount.

- [ ] **Step 2: Verify component compiles**
Run: `npx vite build`
Expected: Zero compilation errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/InteractiveDottedCanvas.jsx
git commit -m "feat(canvas): implement InteractiveDottedCanvas with brand logo palette and physics"
```

---

### Task 4: Build `CinematicHero.jsx` with Anime.js Typing Reel

**Files:**
- Create: `src/components/CinematicHero.jsx`

**Interfaces:**
- Consumes: `src/data/servicesData.js`, `src/data/businessConfig.js`, `src/components/InteractiveDottedCanvas.jsx`, `animejs`
- Produces: `<CinematicHero onSelectQuickTag={handleSelectQuickTag} />`

- [ ] **Step 1: Implement `CinematicHero.jsx`**
Build the component with:
  - Background `<InteractiveDottedCanvas />`.
  - Single `<h1>` tag: *"Commercial Printing Press &amp; Signage Manufacturer"*.
  - Dynamic Typewriter Reel:
    - Cycles continuously through all 32 service titles in `servicesData.js`.
    - Types out letter by letter using `anime.js` (or character timeline), holds for ~2.2s, backspaces smoothly, and transitions to the next service.
    - Blinking cursor indicator `|`.
    - Displays active service category pill (e.g. *Paper & Offset*, *Signage & Large Format*, *Corporate Stationery*, *Promotional*).
    - Clicking the typed service name calls `onSelectQuickTag` and scrolls directly to `#services`.
  - Primary CTAs:
    - *"Instant WhatsApp Quote"* (`#contact`)
    - *"Explore All 32 Services"* (`#services`)
  - Floating tech badge: *"High-Speed Offset & Digital Manufacturing • Sector 12 Vijay Nagar Ghaziabad"*.

- [ ] **Step 2: Verify component compiles**
Run: `npx vite build`
Expected: Zero compilation errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/CinematicHero.jsx
git commit -m "feat(hero): implement CinematicHero with anime.js dynamic service typing reel"
```

---

### Task 5: CSS Design System & Integration into `App.jsx`

**Files:**
- Modify: `src/styles/index.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `CinematicHero`, `FacilitySpotlight`
- Produces: Updated application layout with cinematic hero and shifted spotlight

- [ ] **Step 1: Add CSS rules in `src/styles/index.css`**
Add styles for:
  - `.cinematic-hero`: full-width relative container, min-height 85vh on desktop, centered content alignment.
  - `.canvas-wrapper`: absolute inset 0, z-index 0, overflow hidden.
  - `.cinematic-content`: relative z-index 1, max-width 960px.
  - `.typed-headline`: large bold display styling with gradient/accent text.
  - `.typing-cursor`: pulsing brand blue terminal cursor.
  - `.facility-spotlight`: styling for the shifted showcase section below, ensuring seamless visual rhythm.
  - Mobile responsive adjustments (font scaling, padding).

- [ ] **Step 2: Update `src/App.jsx`**
Replace `<Hero />` with:
```jsx
<CinematicHero onSelectQuickTag={handleSelectQuickTag} />
<FacilitySpotlight onSelectQuickTag={handleSelectQuickTag} />
```

- [ ] **Step 3: Verify build**
Run: `npm run build`
Expected: Build passes with exit code 0.

- [ ] **Step 4: Commit**
```bash
git add src/styles/index.css src/App.jsx
git commit -m "feat(ui): style and integrate CinematicHero and FacilitySpotlight into App layout"
```

---

### Task 6: Full Verification, SEO Audit & Browser Visual Check

**Files:**
- Test: `scratch/verify-seo.cjs`

**Interfaces:**
- Consumes: `dist/index.html`, browser/headless test
- Produces: Passing verification report

- [ ] **Step 1: Run project production build**
Run: `npm run build`
Expected: Clean compilation in <2s.

- [ ] **Step 2: Run SEO verification script**
Run: `node "C:\Users\HP\.gemini\antigravity-ide\brain\d0f80cb9-9629-4be9-b9a3-3c25f6ca20fb\scratch\verify-seo.cjs"`
Expected: All tests pass (exact count of 1 for `<h1>`, valid JSON-LD schema, OG tags, canonical tag).

- [ ] **Step 3: Run headless browser check & screenshot**
Capture visual screenshot of the new Hero and Facility Spotlight to confirm render quality, dot physics canvas, and typography.

- [ ] **Step 4: Final commit & walkthrough update**
```bash
git add .
git commit -m "chore: complete cinematic hero with anime.js and interactive canvas"
```
