export const categories = [
  { id: 'stationery', label: 'Stationery & Registers', count: 9 },
  { id: 'paper', label: 'Paper & Marketing', count: 6 },
  { id: 'labels', label: 'Labels & Promo Gifts', count: 4 },
  { id: 'outdoor', label: 'Outdoor & Signage', count: 13 }
];

export const servicesData = [
  // 1. Stationery & Registers (9 Items)
  {
    id: 'bill-book',
    image: '/images/products/bill-book.webp',
    imageAlt: 'Duplicate and Triplicate NCR carbonless paper bill book with red sequential numbering',
    title: 'Bill Book',
    category: 'stationery',
    badge: 'Popular',
    icon: 'ri-file-list-3-line',
    desc: 'Duplicate (1+1) & Triplicate (1+2) NCR carbonless paper invoice books with customized numbering and hard binding.',
    specs: [
      'Paper Type: 55-60 GSM NCR Carbonless Paper',
      'Binding: Hardboard cloth binding with perforation',
      'Numbering: Red sequential serial numbering',
      'Copies: Duplicate (1+1) or Triplicate (1+2)',
      'Customization: Company logo, GSTIN, T&C imprint'
    ]
  },
  {
    id: 'challan-book',
    image: '/images/products/challan-book.webp',
    imageAlt: 'Delivery challan book with transport dispatch slips and perforated copies',
    title: 'Challan Book',
    category: 'stationery',
    badge: 'Essential',
    icon: 'ri-truck-line',
    desc: 'Delivery challan books, transport receipts & dispatch registers with red serial numbering and perforated slips.',
    specs: [
      'Format: Delivery challan, gate pass, transport bilti',
      'Paper: 60 GSM maplitho or self-carbon paper',
      'Numbering: 6-digit consecutive serial stamping',
      'Finish: Heavy board cover with protective wrap'
    ]
  },
  {
    id: 'letter-head',
    image: '/images/products/letter-head.webp',
    imageAlt: 'Executive 100 GSM Royal Bond paper letterhead with corporate embossing and gold seal',
    title: 'Letter Head',
    category: 'stationery',
    badge: 'Corporate',
    icon: 'ri-draft-line',
    desc: 'Executive 100 GSM Royal Executive bond paper letterheads for official corporate correspondence and agreements.',
    specs: [
      'Media: 100 GSM Alabaster / Royal Executive Bond',
      'Print: Multi-color offset or digital spot color',
      'Compatibility: Laser and inkjet printer friendly',
      'Standard Size: A4 (210 x 297 mm)'
    ]
  },
  {
    id: 'school-registers',
    image: '/images/products/school-registers.webp',
    imageAlt: 'Hard-bound student attendance and office ledger register with gold corner protectors',
    title: 'School Office Registers',
    category: 'stationery',
    badge: 'Bulk Supply',
    icon: 'ri-book-read-line',
    desc: 'Hard-bound student attendance registers, teacher logbooks, admission ledgers, and fee receipt registers.',
    specs: [
      'Ruling: Custom ledger ruling, attendance grid',
      'Paper: 70-80 GSM high-opacity ledger paper',
      'Binding: Section-sewn hard rexine case binding',
      'Capacities: 100, 200, 300, 400 pages'
    ]
  },
  {
    id: 'school-id-cards',
    image: '/images/products/school-id-cards.webp',
    imageAlt: 'Thermal fused PVC identity cards with customized satin printed lanyards and holders',
    title: 'School Office ID Cards',
    category: 'stationery',
    badge: 'Security',
    icon: 'ri-profile-line',
    desc: 'High-definition thermal fused PVC plastic identity cards with multi-color printed satin lanyards and holders.',
    specs: [
      'Material: 760 Micron Premium PVC Plastic',
      'Print: Edge-to-edge dye-sublimation color',
      'Lanyard: 16mm/20mm custom heat-transfer satin',
      'Security: QR code, barcode, magnetic stripe option'
    ]
  },
  {
    id: 'office-files',
    image: '/images/products/office-files.webp',
    imageAlt: 'Heavy-duty cardboard cobra spring files and document folders with metal mechanisms',
    title: 'Office Files',
    category: 'stationery',
    badge: 'Office',
    icon: 'ri-folder-shared-line',
    desc: 'Heavy cardboard cobra spring files, printed plastic document folders, and index filing systems.',
    specs: [
      'Board: 1.5mm - 2.5mm stiff grey board',
      'Fittings: Chrome cobra spring clip & lever arch',
      'Print: Outer laminated litho wrap with brand graphics',
      'Durability: Reinforced spine and metal corners'
    ]
  },
  {
    id: 'record-registers',
    image: '/images/products/record-registers.webp',
    imageAlt: 'Industrial stock maintenance register with canvas buckram spine and ledger ruling',
    title: 'Record Registers',
    category: 'stationery',
    badge: 'Industrial',
    icon: 'ri-survey-line',
    desc: 'Stock registers, cash books, factory maintenance logs, visitor entry registers, and legal account books.',
    specs: [
      'Pages: 2 Quire, 4 Quire, 6 Quire standard sizes',
      'Paper: High tensile ledger paper',
      'Ruling: Single cash, double cash, stock register column',
      'Binding: Full cloth spine hard binding'
    ]
  },
  {
    id: 'envelope',
    image: '/images/products/envelope.webp',
    imageAlt: 'Custom printed commercial envelopes in DL 9x4 and A4 catalog sizes with peel and seal',
    title: 'Envelope',
    category: 'stationery',
    badge: 'Commercial',
    icon: 'ri-mail-line',
    desc: 'Standard 9x4 commercial envelopes, A4/FS document envelopes, and cloth-laminated tear-resistant mailers.',
    specs: [
      'Sizes: 9x4 inch, 10x4.5 inch, 10x12 inch (A4), 11x14 (FS)',
      'Substrate: 80 GSM - 120 GSM maplitho or green cloth lined',
      'Adhesive: Peel & seal self-adhesive or wet glue flap',
      'Window: Plain or clear transparent address window'
    ]
  },
  {
    id: 'other-stationery',
    image: '/images/products/other-stationery.webp',
    imageAlt: 'Custom office stationery set including wire-o notepads and self-inking rubber stamps',
    title: 'Other Stationery',
    category: 'stationery',
    badge: 'Custom',
    icon: 'ri-pencil-ruler-line',
    desc: 'Custom desk notepads, self-inking polymer rubber stamps, certificate printing, and specialized office supplies.',
    specs: [
      'Notepads: 50-100 leaf wire-o or glue-pad notepads',
      'Stamps: Self-inking automatic date and signature stamps',
      'Certificates: Gold foil stamped textured certificates',
      'Custom orders for government & corporate tenders'
    ]
  },

  // 2. Paper Printing & Marketing (6 Items)
  {
    id: 'leaflet-pumplet',
    image: '/images/products/leaflet-pumplet.webp',
    imageAlt: 'High-gloss 170 GSM promotional pamphlets and advertising flyers with vibrant CMYK print',
    title: 'Leaflet / Pumplet',
    category: 'paper',
    badge: 'Best Seller',
    icon: 'ri-newspaper-line',
    desc: 'Full-color promotional pamphlets and advertising flyers on 100/130/170 GSM glossy or matte art paper.',
    specs: [
      'Sizes: A4, A5, A6, DL or custom newspaper insert size',
      'Paper: 100/130/170 GSM high-gloss or matte coated',
      'Speed: 24-hour turnaround on bulk runs (5000+ copies)',
      'Finishing: Center crease, single fold, or flat cut'
    ]
  },
  {
    id: 'brochure',
    image: '/images/products/brochure.webp',
    imageAlt: 'Corporate tri-fold and bi-fold marketing brochures with soft-touch matte lamination',
    title: 'Brochure',
    category: 'paper',
    badge: 'High Impact',
    icon: 'ri-book-open-line',
    desc: 'Bi-fold, tri-fold, and multi-panel marketing brochures printed with velvety soft-touch or spot UV lamination.',
    specs: [
      'Folds: Bi-fold (4 pages), Tri-fold (6 pages), Z-fold',
      'Paper: 250 - 350 GSM premium art card',
      'Lamination: Thermal matte, gloss, or velvet soft-touch',
      'Embellishment: Spot UV, raised gold foil stamping'
    ]
  },
  {
    id: 'catalogue',
    image: '/images/products/catalogue.webp',
    imageAlt: 'Multi-page commercial product catalog book with saddle-stitch wire and glossy cover',
    title: 'Catalogue',
    category: 'paper',
    badge: 'Multi-Page',
    icon: 'ri-pages-line',
    desc: 'Multi-page industrial product showcase catalogs with saddle-stitch wire or perfect spine binding.',
    specs: [
      'Cover: 300 GSM art card with thermal lamination',
      'Inner Pages: 130 - 170 GSM gloss art paper',
      'Binding: Center wire saddle-stitch or perfect glued spine',
      'Page Counts: 8 to 120+ pages'
    ]
  },
  {
    id: 'calenders',
    image: '/images/products/calenders.webp',
    imageAlt: 'Desktop tent calendars and corporate wall calendars with top wiro wire binding',
    title: 'Calenders',
    category: 'paper',
    badge: 'Seasonal',
    icon: 'ri-calendar-line',
    desc: 'Corporate wall calendars and desktop tent stand calendars with top wiro wire binding and custom monthly pages.',
    specs: [
      'Formats: Desktop tent calendar (12 leaves) & wall hanger',
      'Base: Heavy 2mm kappa board covered base',
      'Media: 220 GSM royal matte card',
      'Binding: High-gauge double-loop wire-o binding'
    ]
  },
  {
    id: 'tant-card',
    image: '/images/products/tant-card.webp',
    imageAlt: 'Tabletop triangular tent cards for restaurant menus and conference table standees',
    title: 'Tant Card',
    category: 'paper',
    badge: 'Hospitality',
    icon: 'ri-table-line',
    desc: 'Tabletop tent cards for restaurant menus, QR scan payment stands, and corporate conference table standees.',
    specs: [
      'Design: Self-standing triangular folded tent card',
      'Media: 350 GSM stiff duplex/art board',
      'Lamination: Waterproof gloss/matte lamination',
      'Custom: QR code integration for food menus & UPI'
    ]
  },
  {
    id: 'dangler',
    image: '/images/products/dangler.webp',
    imageAlt: 'Die-cut promotional ceiling danglers with custom retail marketing shapes and hanging string',
    title: 'Dangler',
    category: 'paper',
    badge: 'Retail',
    icon: 'ri-price-tag-3-line',
    desc: 'Ceiling promotional danglers for supermarket aisles, showrooms, and retail stores with custom die-cut shapes.',
    specs: [
      'Substrate: 350 GSM art board or 2mm sunpack fluted sheet',
      'Shape: Circular, square, starburst, or custom contour die-cut',
      'Hanging: Pre-punched 4mm eyelet hole with nylon thread',
      'Printing: Both sides full color CMYK'
    ]
  },

  // 3. Labels & Promo Gifts (4 Items)
  {
    id: 'product-label',
    image: '/images/products/product-label.webp',
    imageAlt: 'Adhesive packaging roll labels and barcode stickers for bottles, jars, and cartons',
    title: 'Product Label',
    category: 'labels',
    badge: 'Packaging',
    icon: 'ri-barcode-line',
    desc: 'Custom packaging labels, cosmetic bottle stickers, food jars, and barcode stickers in sheet or roll form.',
    specs: [
      'Adhesive: Permanent acrylic or removable pressure-sensitive',
      'Finishes: Waterproof matte, gloss, or metallic gold foil',
      'Form: Kiss-cut sheets or continuous roll feeds',
      'Compliance: Oil-resistant, freezer-grade adhesives'
    ]
  },
  {
    id: 'sticker',
    image: '/images/products/sticker.webp',
    imageAlt: 'Precision die-cut waterproof vinyl stickers and decals with crack-and-peel backing',
    title: 'Sticker',
    category: 'labels',
    badge: 'Versatile',
    icon: 'ri-sticky-note-line',
    desc: 'Waterproof white vinyl stickers, paper stickers, transparent clear vinyl decals, and die-cut logos.',
    specs: [
      'Material: Monomeric/polymeric vinyl or chromo paper',
      'Cutting: Precision plotter die-cut to any custom silhouette',
      'Durability: Scratchproof UV coating, weather-resistant',
      'Usage: Vehicle glass, equipment branding, consumer merchandise'
    ]
  },
  {
    id: 'wall-clock-printing',
    image: '/images/products/wall-clock-printing.webp',
    imageAlt: 'Custom printed dial wall clocks with company logo branding for corporate gifting',
    title: 'Wall Clock Printing',
    category: 'labels',
    badge: 'Promo Gift',
    icon: 'ri-time-line',
    desc: 'Custom printed dial wall clocks with company branding, logo, and marketing slogans for corporate gifting.',
    specs: [
      'Dial Size: 10 inch, 12 inch, 14 inch round or square',
      'Movement: Silent sweep quartz clock machine',
      'Print: Multi-color photo-quality dial printing',
      'Packaging: Individual corrugated gift box packing'
    ]
  },
  {
    id: 'wrist-watch-printing',
    image: '/images/products/wrist-watch-printing.webp',
    imageAlt: 'Corporate employee recognition wristwatches with custom printed logo dial and leather strap',
    title: 'Wrist Watch Printing',
    category: 'labels',
    badge: 'Premium Gift',
    icon: 'ri-wrist-watch-line',
    desc: 'Corporate employee award wristwatches with full dial logo printing, stainless steel or leather strap.',
    specs: [
      'Case: Alloy metal case with mineral glass face',
      'Movement: Japanese quartz precision movement',
      'Strap: Genuine leather, stainless steel chain, or silicone',
      'Branding: Dial printing and laser engraving on back case'
    ]
  },

  // 4. Outdoor & Signage (13 Items)
  {
    id: 'flex-board',
    image: '/images/products/flex-board.webp',
    imageAlt: 'Heavy-duty Star Flex outdoor sign board with welded MS iron pipe box frame mounting',
    title: 'Flex Board',
    category: 'outdoor',
    badge: 'Large Format',
    icon: 'ri-billboard-line',
    desc: 'Heavy-duty Star Flex outdoor banners with MS iron square pipe frame mounting and weather-sealed finish.',
    specs: [
      'Media: 280 - 440 GSM Star Flex or normal flex',
      'Frame: 1 inch / 1.5 inch MS square iron pipe structure',
      'Print: Solvent/Eco-Solvent vibrant waterproof inks',
      'Installation: Complete on-site mounting & welding available'
    ]
  },
  {
    id: 'back-drop',
    image: '/images/products/back-drop.webp',
    imageAlt: 'Non-reflective event stage backdrop with step-and-repeat sponsor logo grid and truss frame',
    title: 'Back Drop',
    category: 'outdoor',
    badge: 'Events',
    icon: 'ri-image-2-line',
    desc: 'Non-reflective stage backdrops, seminar displays, and photo booth frames with fast on-site erection.',
    specs: [
      'Media: Anti-glare matte non-reflective flex banner',
      'Structure: Modular truss or iron frame backdrop',
      'Sizes: 8x10 ft, 10x12 ft, 12x20 ft or custom stage sizing',
      'Lighting: Pre-configured spotlight mounting provisions'
    ]
  },
  {
    id: 'glowsign-board',
    image: '/images/products/glowsign-board.webp',
    imageAlt: 'Illuminated 3D acrylic LED storefront letters and high-lumen backlit glow sign box',
    title: 'Glowsign Board',
    category: 'outdoor',
    badge: 'Illuminated',
    icon: 'ri-flashlight-line',
    desc: 'Backlit flex glow sign boxes and 3D acrylic glowing LED letters with energy-efficient Samsung LED modules.',
    specs: [
      'Facing: High-translucency backlit flex or cast acrylic sheet',
      'LEDs: Waterproof IP67 Samsung LED modules with driver',
      'Cabinet: Powder-coated aluminum or galvanized sheet cabinet',
      'Warranty: 1-3 years LED power supply warranty'
    ]
  },
  {
    id: 'dealers-board',
    image: '/images/products/dealers-board.webp',
    imageAlt: 'Retail brand dealership tin plates and sunpack signboards with perimeter frame',
    title: 'Dealers Board',
    category: 'outdoor',
    badge: 'Network Branding',
    icon: 'ri-store-2-line',
    desc: 'Bulk brand dealership tin plates, sunpack advertising, and retail distribution network signboards.',
    specs: [
      'Substrate: Tin sheet (GI sheet) or corrugated fluted sunpack',
      'Printing: Silk screen printing or UV flatbed ink',
      'Volume: Bulk manufacturing capacity (100 to 10,000+ units)',
      'Distribution: Dispatched in wooden-frame bulk bundles'
    ]
  },
  {
    id: 'digital-vinyl',
    image: '/images/products/digital-vinyl.webp',
    imageAlt: 'High-resolution photo-grade self-adhesive digital vinyl for walls, glass doors, and wraps',
    title: 'Digital Vinyl',
    category: 'outdoor',
    badge: 'High Res',
    icon: 'ri-aspect-ratio-line',
    desc: 'High-resolution self-adhesive vinyl for retail glass doors, indoor feature walls, vehicle wraps, and kiosks.',
    specs: [
      'Resolution: 1440 DPI photo-grade eco-solvent printing',
      'Lamination: Cold matte or gloss protective over-laminate',
      'Adhesion: Bubble-free air release adhesive option',
      'Application: Wall graphics, glass partition frost, vehicle wrap'
    ]
  },
  {
    id: 'one-way-vision',
    image: '/images/products/one-way-vision.webp',
    imageAlt: 'Micro-perforated one-way vision window film installed on commercial storefront glass',
    title: 'One Way Vision',
    category: 'outdoor',
    badge: 'Window Film',
    icon: 'ri-eye-line',
    desc: 'Perforated window film printing: full external brand graphics while maintaining clear see-through visibility from inside.',
    specs: [
      'Perforation: 60/40 hole ratio for optimal transparency',
      'Application: Glass shopfronts, office partitions, rear car windows',
      'UV Defense: Blocks up to 60% solar heat and glare',
      'Durability: 2-3 years outdoor fade resistance'
    ]
  },
  {
    id: 'sunpack',
    image: '/images/products/sunpack.webp',
    imageAlt: 'Corrugated fluted plastic sunpack sheets with eyelets for electric pole kiosk advertising',
    title: 'Sunpack',
    category: 'outdoor',
    badge: 'Pole Ads',
    icon: 'ri-layout-grid-line',
    desc: 'Corrugated plastic fluted sheets for electric pole advertising, tuition center ads, and street marketing campaigns.',
    specs: [
      'Thickness: 2mm, 3mm, 4mm fluted polypropylene sheet',
      'Printing: High-speed silk screen or UV inkjet',
      'Fastening: Corner eyelet punches or cable-tie slots',
      'Resilience: Waterproof, lightweight, wind-tolerant'
    ]
  },
  {
    id: 'roll-up-standee',
    image: '/images/products/roll-up-standee.webp',
    imageAlt: 'Portable 6x3 ft retractable aluminum roll-up banner standee with carrying bag',
    title: 'Roll up Standee',
    category: 'outdoor',
    badge: 'Portable',
    icon: 'ri-presentation-line',
    desc: 'Portable retractable aluminum roll-up standees with non-tearable matte vinyl media and padded carrying bag.',
    specs: [
      'Media: 240 Micron non-curl tear-resistant matte vinyl',
      'Base: Heavy-duty aluminum cassette with stabilization feet',
      'Standard Sizes: 2x6 ft, 2.5x6 ft, 3x6 ft',
      'Accessories: Includes zippered oxford cloth travel bag'
    ]
  },
  {
    id: 'canopy',
    image: '/images/products/canopy.webp',
    imageAlt: 'Heavy-duty 3x3 meter collapsible outdoor promotional gazebo canopy tent with branding',
    title: 'Canopy',
    category: 'outdoor',
    badge: 'Promotions',
    icon: 'ri-tent-line',
    desc: 'Foldable outdoor promotional tents with heavy iron scissor frame, waterproof printed roof, and side wall graphics.',
    specs: [
      'Sizes: 6x6x7 ft, 8x8x7 ft, 10x10x7 ft',
      'Fabric: Tetron waterproof coated canopy cloth',
      'Structure: Rust-proof black coated collapsible metal frame',
      'Graphics: Complete 4-side valance and back-wall branding'
    ]
  },
  {
    id: 'acp-sheet-cutting-board',
    image: '/images/products/acp-sheet-cutting-board.webp',
    imageAlt: 'Architectural CNC router cut Aluminum Composite Panel signboard with 3D acrylic letters',
    title: 'ACP Sheet Cutting Board',
    category: 'outdoor',
    badge: 'Architectural',
    icon: 'ri-building-line',
    desc: 'Precision CNC router cut Aluminum Composite Panel (ACP) signboards with acrylic backlighting for premier facades.',
    specs: [
      'Panel: 3mm / 4mm exterior grade ACP sheet (Aludecor/Eurobond)',
      'Router Cut: High-accuracy CNC laser and router cutting',
      'Lettering: Raised 3D acrylic letters with push-through glow',
      'Lifespan: 10+ years exterior architectural weatherability'
    ]
  },
  {
    id: 'clip-on-board',
    image: '/images/products/clip-on-board.webp',
    imageAlt: 'Ultra-slim 1-inch aluminum snap-frame poster lightbox with edge-lit LED illumination',
    title: 'Clip on Board',
    category: 'outdoor',
    badge: 'Slim Lightbox',
    icon: 'ri-window-line',
    desc: 'Ultra-slim 1-inch aluminum snap-frame poster boards and edge-lit LED lightboxes for fast graphic updates.',
    specs: [
      'Frame: Anodized aluminum 4-side front snap opening',
      'Lighting: High-lumen edge-lit optical acrylic light guide',
      'Cover: 0.5mm anti-glare protective PVC sheet',
      'Graphic: Backlit film transparency poster'
    ]
  },
  {
    id: 'sandwich-board',
    image: '/images/products/sandwich-board.webp',
    imageAlt: 'Double-sided folding A-frame sidewalk pavement sandwich board with poster inserts',
    title: 'Sandwich Board',
    category: 'outdoor',
    badge: 'Sidewalk',
    icon: 'ri-layout-vertical-line',
    desc: 'Double-sided A-frame sidewalk sandwich boards and acrylic wall sandwich poster frames with stainless steel studs.',
    specs: [
      'Types: Portable folding metal A-frame & wall acrylic sandwich',
      'Acrylic: 3mm + 3mm imported cast clear acrylic sheets',
      'Hardware: Stainless steel spacer studs and wall anchors',
      'Poster: Easy self-replacement of inner printed media'
    ]
  },
  {
    id: 'outdoor-branding-advertising',
    image: '/images/products/outdoor-branding-advertising.webp',
    imageAlt: 'Monumental highway unipole billboard and outdoor hoarding banner advertising campaign',
    title: 'Branding & Advertising',
    category: 'outdoor',
    badge: 'Turnkey',
    icon: 'ri-road-map-line',
    desc: 'Turnkey highway hoarding banners, building facade wraps, metro pillar kiosks, and comprehensive city-wide campaigns.',
    specs: [
      'Scope: Structural fabrication, council permits & installation',
      'Lighting: High-power LED floodlight illumination',
      'Locations: Delhi-NCR highway corridors & commercial hubs',
      'Maintenance: Periodic tensioning and inspection included'
    ]
  }
];
