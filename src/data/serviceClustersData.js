import { servicesData } from './servicesData.js';

export const serviceClusters = [
  {
    slug: 'bill-book-printing',
    url: 'https://apmprint.in/services/bill-book-printing/',
    path: '/services/bill-book-printing/',
    title: 'Bill Book Printing in Ghaziabad | APM Print',
    metaDescription: 'Commercial bill book & delivery challan printing in Ghaziabad. Duplicate & triplicate NCR carbonless books, custom numbering & hard binding. Call +91 95820 23022.',
    h1: 'Bill Book Printing in Ghaziabad',
    subtitle: 'Duplicate & triplicate NCR carbonless invoice books, cash memos, and serialized delivery challan books manufactured for retail, wholesale, and logistics operations.',
    categoryBadge: 'Stationery & Registers',
    serviceIds: ['bill-book', 'challan-book'],
    primaryKeyword: 'bill book printing in Ghaziabad',
    relatedKeywords: [
      'duplicate bill book printing',
      'challan book printing',
      'GST bill book printing',
      'invoice book printing'
    ],
    overview: 'Aggarwal Print Media manufactures commercial-grade duplicate and triplicate invoice books, cash memos, and transport delivery challans at our Sector 12, Vijay Nagar facility. Using high-sensitivity NCR (No Carbon Required) carbonless paper and precision sequential red numbering, our books provide clean, smudge-free duplicate records for every transaction without messy carbon sheets.',
    suitableFor: [
      'Retail stores and wholesale traders requiring GST tax invoices and cash memos',
      'Manufacturing plants and dispatch warehouses needing serialized delivery challans',
      'Logistics, transport companies, and goods carriers needing transport bilti receipts',
      'Clinics, laboratories, and service centers requiring receipt slips and gate passes'
    ],
    specifications: [
      { label: 'Paper Substrate', value: '55–60 GSM premium NCR carbonless paper or 60 GSM maplitho paper' },
      { label: 'Copy Formats', value: 'Duplicate (1+1) and Triplicate (1+2) page configurations' },
      { label: 'Standard Dimensions', value: 'A4, A5, 1/8 demy size, or custom dimensions' },
      { label: 'Serial Numbering', value: '6-digit consecutive red serial numbering stamped on each sheet' },
      { label: 'Binding & Finish', value: 'Stiff cardboard cover, rexine/cloth spine binding with clean tear-off perforation' },
      { label: 'Customization', value: 'Imprint of firm name, GSTIN, business logo, bank details, and terms & conditions' }
    ],
    orderingSteps: [
      { step: '1', title: 'Share Layout or Sample', desc: 'Send your existing bill book photo, PDF layout, or text details via WhatsApp or email.' },
      { step: '2', title: 'Proof Approval', desc: 'We prepare your proof layout with company details, GSTIN, and serial numbering format for your written approval.' },
      { step: '3', title: 'Press Production & Pickup', desc: 'Precision offset printing, consecutive numbering, perforation, and cloth hard-binding at our Vijay Nagar workshop.' }
    ],
    faqs: [
      {
        question: 'What is the difference between duplicate (1+1) and triplicate (1+2) bill books?',
        answer: 'Duplicate books have 1 original sheet and 1 carbonless copy for the customer and accounts. Triplicate books include 1 original and 2 carbonless copies, typically used where one copy goes to the customer, one stays in the book, and one is filed for transport or audit.'
      },
      {
        question: 'Can you print our GST number, terms, and bank details on the invoice?',
        answer: 'Yes. Every bill book is customized with your official firm name, logo, registered address, GSTIN, bank account information, and customized terms and conditions.'
      },
      {
        question: 'Can delivery challan books include consecutive serial numbering?',
        answer: 'Yes. All delivery challan, bilti, and invoice books come stamped with 6-digit consecutive red serial numbers for audit compliance.'
      }
    ],
    relatedClusterSlugs: ['letterhead-printing', 'school-id-cards-registers', 'pamphlet-printing']
  },

  {
    slug: 'flex-board-printing',
    url: 'https://apmprint.in/services/flex-board-printing/',
    path: '/services/flex-board-printing/',
    title: 'Flex Board Printing in Ghaziabad | APM Print',
    metaDescription: 'High-speed flex board & banner printing in Ghaziabad. Heavy-duty Star Flex banners, MS iron pipe frames & stage backdrops. Call +91 95820 23022.',
    h1: 'Flex Board Printing in Ghaziabad',
    subtitle: 'Heavy-duty Star Flex banners, welded MS iron frame outdoor boards, event stage backdrops, and turnkey outdoor hoardings manufactured with weather-resistant inks.',
    categoryBadge: 'Outdoor & Signage',
    serviceIds: ['flex-board', 'back-drop', 'outdoor-branding-advertising'],
    primaryKeyword: 'flex printing in Ghaziabad',
    relatedKeywords: [
      'flex board printing',
      'flex banner printing',
      'banner printing in Ghaziabad'
    ],
    overview: 'APM Print operates dedicated roll-to-roll solvent and eco-solvent large format presses in Sector 12, Vijay Nagar, Ghaziabad. We manufacture high-impact Star Flex outdoor boards with welded MS iron pipe frames, event stage backdrops, building facade wraps, and city-wide advertising banners designed for vibrant outdoor color retention and weather resilience.',
    suitableFor: [
      'Retail shops, showrooms, and commercial storefronts needing durable outdoor fascia boards',
      'Event organizers, corporate seminars, and conferences requiring anti-glare stage backdrops',
      'Real estate developers, institutions, and brands running outdoor campaigns',
      'Exhibitors and political or community announcements requiring fast large-format banners'
    ],
    specifications: [
      { label: 'Flex Substrates', value: '280 GSM to 440 GSM normal flex, heavy-duty Star Flex, and blackout banner' },
      { label: 'Printing Technology', value: 'High-speed Solvent and Eco-Solvent digital roll printing' },
      { label: 'Frame Structure', value: '1 inch / 1.5 inch MS square iron pipe structure with protective coating' },
      { label: 'Finishing Options', value: 'Welded hem borders, reinforced brass eyelets, and wooden batten supports' },
      { label: 'Stage Dimensions', value: '8x10 ft, 10x12 ft, 12x20 ft or custom stage sizing with matte finish' },
      { label: 'Installation', value: 'Complete on-site mounting and structural welding available across Ghaziabad & Delhi-NCR' }
    ],
    orderingSteps: [
      { step: '1', title: 'Provide Dimensions & Artwork', desc: 'Share your width and height dimensions along with your print-ready file or design concept.' },
      { step: '2', title: 'Media & Frame Selection', desc: 'Select flex GSM (standard or Star Flex) and whether you require plain banners, eyelets, or a welded MS iron frame.' },
      { step: '3', title: 'High-Speed Print & Mounting', desc: 'High-resolution printing, framing, and optional on-site installation by our workshop team.' }
    ],
    faqs: [
      {
        question: 'What is the advantage of Star Flex over normal flex?',
        answer: 'Star Flex offers a thicker (typically 340–440 GSM), smoother weave that delivers higher color vibrancy, greater tear resistance, and significantly longer lifespan in outdoor weather compared to basic promotional flex.'
      },
      {
        question: 'Do you fabricate the metal iron frame for outdoor flex boards?',
        answer: 'Yes. We fabricate heavy-duty 1-inch and 1.5-inch MS square pipe frames welded specifically to your storefront dimensions.'
      },
      {
        question: 'Can you print non-reflective backdrops for photo shoots and stage events?',
        answer: 'Yes. We produce anti-glare matte flex stage backdrops that prevent camera flash reflection for seminars, corporate meetings, and event photography.'
      }
    ],
    relatedClusterSlugs: ['glow-sign-board', 'standees-canopies', 'sticker-label-printing']
  },

  {
    slug: 'glow-sign-board',
    url: 'https://apmprint.in/services/glow-sign-board/',
    path: '/services/glow-sign-board/',
    title: 'LED & Glow Sign Boards in Ghaziabad | APM Print',
    metaDescription: 'Commercial 3D acrylic LED signboards & glowsign boards in Ghaziabad. Backlit flex boxes, CNC router cut ACP sheets & Samsung LEDs. Call +91 95820 23022.',
    h1: 'LED & Glow Sign Boards in Ghaziabad',
    subtitle: 'High-visibility 3D acrylic glowing LED letters, backlit glowsign boxes, and precision CNC router-cut ACP architectural signboards for retail facades and offices.',
    categoryBadge: 'Outdoor & Signage',
    serviceIds: ['glowsign-board', 'acp-sheet-cutting-board'],
    primaryKeyword: 'LED sign board in Ghaziabad',
    relatedKeywords: [
      'glow sign board',
      '3D acrylic letters',
      'LED signage',
      'acrylic sign board'
    ],
    overview: 'Aggarwal Print Media designs and manufactures illuminated signage for retail outlets, corporate offices, hospitals, and commercial establishments. From weather-sealed backlit flex glowsign boxes to premier CNC router-cut ACP (Aluminum Composite Panel) signboards featuring raised 3D cast acrylic letters illuminated with energy-efficient Samsung LED modules, we engineer night-and-day brand visibility.',
    suitableFor: [
      'Commercial showrooms, retail shops, and restaurants requiring 24/7 exterior brand lighting',
      'Hospitals, medical clinics, and nursing homes needing clear day-and-night facade signage',
      'Corporate offices and IT companies requiring 3D acrylic reception wall logos and fascia',
      'Brand dealerships and retail franchise networks'
    ],
    specifications: [
      { label: 'Fascia Substrates', value: '3mm / 4mm exterior-grade ACP sheets (Aludecor/Eurobond) and high-translucency backlit flex' },
      { label: 'Lettering & Acrylic', value: 'Cast acrylic sheet with precision CNC router cutting and raised 3D return depth' },
      { label: 'Lighting Modules', value: 'Waterproof IP67 Samsung LED modules with industrial power supply drivers' },
      { label: 'Cabinet & Framing', value: 'Powder-coated aluminum extrusion or heavy galvanized iron box enclosure' },
      { label: 'Architectural Durability', value: 'Weather-resistant sealed joints engineered for 10+ year facade endurance' },
      { label: 'Electrical Warranty', value: '1 to 3 years warranty on LED power supply and illumination modules' }
    ],
    orderingSteps: [
      { step: '1', title: 'Site Dimensions & Logo', desc: 'Share your facade measurements and vector logo file or shopfront photograph on WhatsApp.' },
      { step: '2', title: 'Signboard Type & 3D Proof', desc: 'Choose between traditional backlit glowsign box, 3D acrylic letters, or CNC ACP sheet design.' },
      { step: '3', title: 'Fabrication & Mounting', desc: 'Precision CNC cutting, acrylic letter molding, LED wiring, testing, and professional on-site mounting.' }
    ],
    faqs: [
      {
        question: 'What is an ACP sheet signboard with 3D acrylic letters?',
        answer: 'ACP (Aluminum Composite Panel) provides a sleek, modern architectural background sheet onto which 3D raised acrylic letters are mounted. The acrylic letters are fitted with internal LEDs, creating a high-end illuminated storefront sign.'
      },
      {
        question: 'Are the LED modules waterproof for outdoor monsoon conditions?',
        answer: 'Yes. We utilize IP67-rated waterproof LED modules and sealed power drivers specifically manufactured for all-weather outdoor performance.'
      },
      {
        question: 'Can you manufacture both illuminated glowsigns and non-lit ACP boards?',
        answer: 'Yes. We fabricate non-lit ACP boards with vinyl or acrylic lettering as well as fully illuminated backlit flex and LED push-through signboards.'
      }
    ],
    relatedClusterSlugs: ['flex-board-printing', 'standees-canopies', 'brochure-catalogue-printing']
  },

  {
    slug: 'pamphlet-printing',
    url: 'https://apmprint.in/services/pamphlet-printing/',
    path: '/services/pamphlet-printing/',
    title: 'Pamphlet & Flyer Printing in Ghaziabad | APM Print',
    metaDescription: 'High-speed promotional pamphlet & flyer printing in Ghaziabad. Glossy/matte art paper, 24-hour turnaround on bulk runs & newspaper inserts. Call +91 95820 23022.',
    h1: 'Pamphlet & Flyer Printing in Ghaziabad',
    subtitle: 'Vibrant full-color promotional pamphlets, advertising flyers, and handbills printed on premium glossy or matte art paper with express turnaround on bulk quantities.',
    categoryBadge: 'Paper & Marketing',
    serviceIds: ['leaflet-pumplet'],
    primaryKeyword: 'pamphlet printing in Ghaziabad',
    relatedKeywords: [
      'leaflet printing',
      'flyer printing',
      'pamphlet printing'
    ],
    overview: 'Promotional pamphlets and flyers remain one of the most cost-effective direct marketing tools across Ghaziabad and Delhi-NCR. Utilizing our automated multi-unit offset press lines, APM Print produces vibrant promotional handbills and leaflets with sharp text, accurate color fidelity, and 24-hour express turnarounds for bulk runs of 5,000 to 50,000+ copies.',
    suitableFor: [
      'Educational institutions, schools, colleges, and coaching centers announcing new admissions',
      'Clinics, hospitals, diagnostic labs, and dental centers promoting health packages',
      'Retail stores, supermarkets, and electronics showrooms announcing seasonal sales',
      'Real estate agents and local businesses running newspaper insert distribution campaigns'
    ],
    specifications: [
      { label: 'Paper Stock', value: '100 GSM, 130 GSM, and 170 GSM high-gloss or matte coated art paper' },
      { label: 'Standard Dimensions', value: 'A4, A5, A6, DL (envelope size), and custom newspaper insert dimensions' },
      { label: 'Printing Technology', value: 'High-speed 4-color commercial offset press line' },
      { label: 'Finishing Options', value: 'Precision guillotine flat cut, single center fold, or creased bi-fold' },
      { label: 'Turnaround Capability', value: '24-hour turnaround available on bulk print orders' },
      { label: 'Color Accuracy', value: 'Full-color CMYK with prepress artwork audit prior to print' }
    ],
    orderingSteps: [
      { step: '1', title: 'Submit Artwork & Quantity', desc: 'Share your CDR, PDF, or image artwork along with desired quantity and paper GSM.' },
      { step: '2', title: 'Prepress Check', desc: 'Our prepress desk verifies color mode, bleed margins, and text readability before plate imaging.' },
      { step: '3', title: 'High-Speed Offset Run', desc: 'High-speed press production, precision trimming, packaging, and pickup or delivery.' }
    ],
    faqs: [
      {
        question: 'Which paper GSM is recommended for newspaper insert distribution?',
        answer: 'For newspaper insertion campaigns, 100 GSM or 130 GSM gloss art paper is standard because it balances high-quality photo reproduction with optimal insertion weight.'
      },
      {
        question: 'How fast can a bulk order of 10,000 pamphlets be printed?',
        answer: 'With our in-house commercial offset press facility, bulk runs can be completed within 24 hours of final artwork proof confirmation.'
      },
      {
        question: 'Do you inspect artwork resolution before printing?',
        answer: 'Yes. Our prepress team conducts a complimentary artwork audit to ensure proper CMYK profiles, safe margins, and sharp text resolution.'
      }
    ],
    relatedClusterSlugs: ['brochure-catalogue-printing', 'bill-book-printing', 'sticker-label-printing']
  },

  {
    slug: 'letterhead-printing',
    url: 'https://apmprint.in/services/letterhead-printing/',
    path: '/services/letterhead-printing/',
    title: 'Letterhead & Corporate Stationery in Ghaziabad | APM Print',
    metaDescription: 'Executive letterhead & corporate stationery printing in Ghaziabad. 100 GSM Royal Executive Bond paper, matching envelopes & files. Call +91 95820 23022.',
    h1: 'Letterhead & Corporate Stationery in Ghaziabad',
    subtitle: 'Premium 100 GSM Royal Executive Bond paper letterheads, matching printed commercial envelopes, heavy cardboard cobra files, and custom corporate stationery.',
    categoryBadge: 'Stationery & Registers',
    serviceIds: ['letter-head', 'envelope', 'office-files', 'other-stationery'],
    primaryKeyword: 'letterhead printing in Ghaziabad',
    relatedKeywords: [
      'corporate stationery',
      'envelope printing',
      'office file printing',
      'business letterhead'
    ],
    overview: 'Official corporate correspondence reflects your company stature. Aggarwal Print Media produces executive-grade business letterheads printed on 100 GSM Royal Executive Bond and Alabaster paper, engineered for jam-free feeding in laser and inkjet office printers. We also manufacture matching custom commercial envelopes, heavy cardboard cobra spring files, and executive document folders.',
    suitableFor: [
      'Corporate enterprises, legal advocates, CA firms, and corporate consultancies',
      'Hospitals and healthcare clinics requiring official prescription pads and letterheads',
      'Educational institutions and colleges issuing certificates, agreements, and notices',
      'Real estate developers, construction firms, and commercial agencies'
    ],
    specifications: [
      { label: 'Paper Substrates', value: '100 GSM Alabaster, Royal Executive Bond, and fine textured bond papers' },
      { label: 'Standard Dimensions', value: 'A4 (210 x 297 mm) standard corporate size' },
      { label: 'Printer Compatibility', value: 'Laser, inkjet, and digital copier compatible without toner flaking' },
      { label: 'Envelopes Range', value: 'Standard 9x4 commercial envelopes, 10x12 inch (A4), and green cloth-laminated mailers' },
      { label: 'Office Files & Folders', value: '1.5mm–2.5mm stiff grey board with chrome cobra spring clip or lever arch mechanism' },
      { label: 'Additional Stationery', value: 'Custom notepads, self-inking polymer rubber stamps, and certificate printing' }
    ],
    orderingSteps: [
      { step: '1', title: 'Send Logo & Layout', desc: 'Share your corporate branding guideline, logo, contact details, and paper preference.' },
      { step: '2', title: 'Digital Proofing', desc: 'We verify alignment, margins, typography, and color codes for your executive sign-off.' },
      { step: '3', title: 'Precision Offset Production', desc: 'Printed on our automated offset press line, boxed in protective packaging, and dispatched.' }
    ],
    faqs: [
      {
        question: 'Will these letterheads work smoothly in our office laser printer?',
        answer: 'Yes. We print on 100 GSM Alabaster and Royal Executive Bond paper specifically selected for high heat tolerance and smooth feed in both desktop laser and inkjet printers.'
      },
      {
        question: 'Can you print matching company envelopes in standard 9x4 and A4 sizes?',
        answer: 'Yes. We produce complete matching stationery sets including 9x4 inch peel-and-seal envelopes, 10x12 inch document envelopes, and cloth-lined mailing envelopes.'
      },
      {
        question: 'Do you also make branded office file folders and cobra spring files?',
        answer: 'Yes. We manufacture heavy cardboard cobra spring files and laminated outer-wrapped document presentation folders customized with your firm branding.'
      }
    ],
    relatedClusterSlugs: ['bill-book-printing', 'brochure-catalogue-printing', 'school-id-cards-registers']
  },

  {
    slug: 'school-id-cards-registers',
    url: 'https://apmprint.in/services/school-id-cards-registers/',
    path: '/services/school-id-cards-registers/',
    title: 'School ID Cards & Registers in Ghaziabad | APM Print',
    metaDescription: 'Custom PVC school ID cards, satin lanyards & hard-bound registers in Ghaziabad. Thermal fused 760-micron plastic cards & ledgers. Call +91 95820 23022.',
    h1: 'School ID Cards & Registers in Ghaziabad',
    subtitle: 'Thermal fused 760-micron PVC student identity cards, custom printed satin lanyards, hard-bound student attendance registers, teacher logbooks, and office ledgers.',
    categoryBadge: 'Stationery & Registers',
    serviceIds: ['school-registers', 'school-id-cards', 'record-registers'],
    primaryKeyword: 'school ID card printing in Ghaziabad',
    relatedKeywords: [
      'student ID card printing',
      'school register printing',
      'attendance register printing'
    ],
    overview: 'Aggarwal Print Media is a trusted annual supply partner for schools, colleges, and coaching institutions throughout Ghaziabad. We manufacture durable 760-micron PVC plastic identity cards with vibrant dye-sublimation color printing, custom multi-color heat-transfer satin neck lanyards, and heavy-duty hard-bound student attendance registers, admission books, and fee ledgers.',
    suitableFor: [
      'Public and private schools, colleges, and polytechnic institutions',
      'Coaching institutes, test-prep centers, and computer academies',
      'Corporate offices and factories requiring employee identity cards and visitor logbooks',
      'Industrial units needing stock registers, attendance ledgers, and maintenance logbooks'
    ],
    specifications: [
      { label: 'Card Material', value: '760 Micron premium fused PVC plastic with protective gloss overlay' },
      { label: 'ID Card Printing', value: 'High-definition edge-to-edge dye-sublimation digital printing' },
      { label: 'Custom Lanyards', value: '16mm / 20mm heat-transfer multi-color satin fabric with safety dog hook' },
      { label: 'Security Options', value: 'Integrated QR codes, student barcodes, and signature strips' },
      { label: 'Registers & Ledgers', value: 'Hard rexine/cloth case binding with section-sewn 70–80 GSM ledger paper' },
      { label: 'Page Capacities', value: '100, 200, 300, 400 pages, and 2/4/6 Quire industrial record sizes' }
    ],
    orderingSteps: [
      { step: '1', title: 'Student Data & Card Template', desc: 'Provide student/staff photos with Excel spreadsheet data and your school card design.' },
      { step: '2', title: 'Sample Card Verification', desc: 'We generate digital proofs or sample cards for administrative verification.' },
      { step: '3', title: 'Batch Thermal Fusion', desc: 'Fused plastic printing, lanyard assembly with clips, and ledger book binding.' }
    ],
    faqs: [
      {
        question: 'Are the student ID cards made of real PVC plastic or laminated paper?',
        answer: 'Our identity cards are manufactured using 760-micron genuine thermal-fused PVC plastic (same standard thickness and durability as bank ATM cards), not cheap paper laminates.'
      },
      {
        question: 'Can the neck lanyards be custom printed with our school name and logo?',
        answer: 'Yes. We manufacture 16mm and 20mm high-density satin lanyards with full-color heat-transfer printing of your school or institutional name and logo.'
      },
      {
        question: 'Can you produce customized register rulings for school attendance and fee logs?',
        answer: 'Yes. We produce attendance grids, student fee ledgers, admission registers, and industrial stock registers with custom column rulings and hard rexine case binding.'
      }
    ],
    relatedClusterSlugs: ['letterhead-printing', 'bill-book-printing', 'pamphlet-printing']
  },

  {
    slug: 'sticker-label-printing',
    url: 'https://apmprint.in/services/sticker-label-printing/',
    path: '/services/sticker-label-printing/',
    title: 'Sticker & Label Printing in Ghaziabad | APM Print',
    metaDescription: 'Commercial product labels & waterproof vinyl sticker printing in Ghaziabad. Custom die-cut decals, barcode labels in sheets & rolls. Call +91 95820 23022.',
    h1: 'Sticker & Label Printing in Ghaziabad',
    subtitle: 'Custom product packaging labels, waterproof die-cut vinyl stickers, transparent decals, and barcode labels manufactured for consumer products and industrial packaging.',
    categoryBadge: 'Labels & Promo Gifts',
    serviceIds: ['product-label', 'sticker'],
    primaryKeyword: 'sticker printing in Ghaziabad',
    relatedKeywords: [
      'product label printing',
      'custom sticker printing',
      'barcode label printing',
      'product labels'
    ],
    overview: 'Serving manufacturers, packaging converters, and consumer brands in Ghaziabad and Delhi-NCR, Aggarwal Print Media prints high-precision product labels and die-cut stickers. From waterproof white vinyl and transparent decals for cosmetic bottles and jars to thermal barcode labels and metallic foil packaging stickers, we deliver adhesive solutions tailored to your surface specifications.',
    suitableFor: [
      'Food, beverage, spice, and cosmetic bottle and container packaging',
      'Industrial manufacturers in Bulandshahr Road and Kavi Nagar needing barcode asset labels',
      'Consumer merchandise, electronics equipment, and chemical container labeling',
      'Retail promotional stickers, packaging seals, and branded box tape decals'
    ],
    specifications: [
      { label: 'Substrate Media', value: 'Monomeric/polymeric vinyl, transparent clear film, and chromo paper' },
      { label: 'Adhesive Strengths', value: 'Permanent acrylic, high-tack industrial, and freezer-grade adhesives' },
      { label: 'Precision Cutting', value: 'Plotter kiss-cutting and die-cutting to any custom shape or silhouette' },
      { label: 'Surface Finishes', value: 'Waterproof matte, high-gloss UV coating, and metallic gold foil stamping' },
      { label: 'Supply Formats', value: 'Supplied in convenient peel-and-stick flat sheets or continuous rolls' },
      { label: 'Durability', value: 'Scratchproof, moisture-resistant, and oil-tolerant formulations' }
    ],
    orderingSteps: [
      { step: '1', title: 'Submit Label Design & Size', desc: 'Provide your label dimensions (width x height) and vector artwork with die-line contours.' },
      { step: '2', title: 'Substrate & Adhesive Selection', desc: 'Select between waterproof vinyl, clear transparent film, or standard chromo paper adhesive.' },
      { step: '3', title: 'High-Fidelity Print & Kiss-Cut', desc: 'High-resolution printing, digital contour die-cutting, packaging, and dispatch.' }
    ],
    faqs: [
      {
        question: 'Are your product labels waterproof and oil-resistant?',
        answer: 'Yes. Our vinyl product labels and overlaminated packaging stickers are completely waterproof, scratchproof, and resistant to oils and condensation.'
      },
      {
        question: 'Can you cut stickers into custom circular, oval, or outline shapes?',
        answer: 'Yes. We utilize precision digital plotter die-cutting to cut stickers into any custom silhouette, circle, oval, or contour outline.'
      },
      {
        question: 'Do you offer transparent/clear background stickers?',
        answer: 'Yes. We print on clear transparent vinyl films, suitable for glass bottles, cosmetics, and window decals where the background remains visible.'
      }
    ],
    relatedClusterSlugs: ['brochure-catalogue-printing', 'pamphlet-printing', 'flex-board-printing']
  },

  {
    slug: 'brochure-catalogue-printing',
    url: 'https://apmprint.in/services/brochure-catalogue-printing/',
    path: '/services/brochure-catalogue-printing/',
    title: 'Brochure & Catalogue Printing in Ghaziabad | APM Print',
    metaDescription: 'Commercial brochure & multi-page product catalogue printing in Ghaziabad. Bi-fold, tri-fold brochures, spot UV, saddle-stitch binding. Call +91 95820 23022.',
    h1: 'Brochure & Catalogue Printing in Ghaziabad',
    subtitle: 'High-impact bi-fold & tri-fold corporate marketing brochures, multi-page industrial product catalogues, tabletop tent cards, and retail display danglers.',
    categoryBadge: 'Paper & Marketing',
    serviceIds: ['brochure', 'catalogue', 'tant-card', 'dangler'],
    primaryKeyword: 'brochure printing in Ghaziabad',
    relatedKeywords: [
      'catalogue printing',
      'product catalogue printing',
      'brochure printing'
    ],
    overview: 'A premium product brochure or multi-page catalog is critical for commercial sales presentations and trade exhibitions. At APM Print, we produce corporate brochures on 250–350 GSM art cards with thermal matte, gloss, or velvet soft-touch lamination, complemented by spot UV and raised gold foil. For multi-page product lines, we produce saddle-stitched and perfect-bound showcase catalogs.',
    suitableFor: [
      'Industrial machinery, hardware, and equipment manufacturers showcasing product ranges',
      'Real estate developers presenting township floor plans and luxury brochures',
      'Corporate enterprises, hospitality groups, and educational academies',
      'Retail store aisles and restaurant tables needing promotional danglers and tent cards'
    ],
    specifications: [
      { label: 'Paper & Board Stock', value: 'Cover: 250–350 GSM stiff art card; Inner Pages: 130–170 GSM gloss art paper' },
      { label: 'Fold Configurations', value: 'Bi-fold (4 pages), Tri-fold (6 pages), Z-fold, and multi-panel gatefold' },
      { label: 'Catalog Bindings', value: 'Center wire saddle-stitch or perfect glued spine binding (8 to 120+ pages)' },
      { label: 'Protective Lamination', value: 'Thermal matte, high-gloss, or velvety soft-touch lamination' },
      { label: 'Premium Embellishments', value: 'Spot UV coating, raised gold foil stamping, and embossed textures' },
      { label: 'POS Collaterals', value: 'Self-standing table tent cards and custom die-cut ceiling danglers' }
    ],
    orderingSteps: [
      { step: '1', title: 'Submit Page Count & File', desc: 'Share your multi-page PDF or brochure design along with required fold format and quantity.' },
      { step: '2', title: 'Paper Weight & Finish Selection', desc: 'Choose your card weight, matte/gloss lamination, and optional spot UV or foil embellishments.' },
      { step: '3', title: 'Precision Print & Case Finishing', desc: 'Automated 4-color offset printing, folding, spine binding, trimming, and delivery.' }
    ],
    faqs: [
      {
        question: 'What folding styles are available for corporate brochures?',
        answer: 'We provide bi-fold (4 panels), tri-fold / letter fold (6 panels), Z-fold, and custom multi-panel accordion folds on creased heavy art card.'
      },
      {
        question: 'What binding is recommended for multi-page product catalogs?',
        answer: 'For catalogs up to 48–64 pages, center wire saddle-stitching is standard and cost-effective. For thicker books (60–120+ pages), a glued perfect spine binding provides an executive book finish.'
      },
      {
        question: 'Can you apply spot UV or gold foil stamping on the brochure cover?',
        answer: 'Yes. We offer localized spot UV gloss highlighting over matte lamination, as well as metallic gold or silver foil stamping for logos and titles.'
      }
    ],
    relatedClusterSlugs: ['pamphlet-printing', 'letterhead-printing', 'sticker-label-printing']
  }
];

export const getServiceClusterBySlug = (slug) => {
  return serviceClusters.find((c) => c.slug === slug);
};
