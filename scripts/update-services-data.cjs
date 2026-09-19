const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/servicesData.js');
let content = fs.readFileSync(filePath, 'utf8');

// We have 32 services. Let's create a lookup of alt text for each id
const altMap = {
  'bill-book': 'Duplicate and Triplicate NCR carbonless paper bill book with red sequential numbering',
  'challan-book': 'Delivery challan book with transport dispatch slips and perforated copies',
  'letter-head': 'Executive 100 GSM Royal Bond paper letterhead with corporate embossing and gold seal',
  'school-registers': 'Hard-bound student attendance and office ledger register with gold corner protectors',
  'school-id-cards': 'Thermal fused PVC identity cards with customized satin printed lanyards and holders',
  'office-files': 'Heavy-duty cardboard cobra spring files and document folders with metal mechanisms',
  'record-registers': 'Industrial stock maintenance register with canvas buckram spine and ledger ruling',
  'envelope': 'Custom printed commercial envelopes in DL 9x4 and A4 catalog sizes with peel and seal',
  'other-stationery': 'Custom office stationery set including wire-o notepads and self-inking rubber stamps',
  'leaflet-pumplet': 'High-gloss 170 GSM promotional pamphlets and advertising flyers with vibrant CMYK print',
  'brochure': 'Corporate tri-fold and bi-fold marketing brochures with soft-touch matte lamination',
  'catalogue': 'Multi-page commercial product catalog book with saddle-stitch wire and glossy cover',
  'calenders': 'Desktop tent calendars and corporate wall calendars with top wiro wire binding',
  'tant-card': 'Tabletop triangular tent cards for restaurant menus and conference table standees',
  'dangler': 'Die-cut promotional ceiling danglers with custom retail marketing shapes and hanging string',
  'product-label': 'Adhesive packaging roll labels and barcode stickers for bottles, jars, and cartons',
  'sticker': 'Precision die-cut waterproof vinyl stickers and decals with crack-and-peel backing',
  'wall-clock-printing': 'Custom printed dial wall clocks with company logo branding for corporate gifting',
  'wrist-watch-printing': 'Corporate employee recognition wristwatches with custom printed logo dial and leather strap',
  'flex-board': 'Heavy-duty Star Flex outdoor sign board with welded MS iron pipe box frame mounting',
  'back-drop': 'Non-reflective event stage backdrop with step-and-repeat sponsor logo grid and truss frame',
  'glowsign-board': 'Illuminated 3D acrylic LED storefront letters and high-lumen backlit glow sign box',
  'dealers-board': 'Retail brand dealership tin plates and sunpack signboards with perimeter frame',
  'digital-vinyl': 'High-resolution photo-grade self-adhesive digital vinyl for walls, glass doors, and wraps',
  'one-way-vision': 'Micro-perforated one-way vision window film installed on commercial storefront glass',
  'sunpack': 'Corrugated fluted plastic sunpack sheets with eyelets for electric pole kiosk advertising',
  'roll-up-standee': 'Portable 6x3 ft retractable aluminum roll-up banner standee with carrying bag',
  'canopy': 'Heavy-duty 3x3 meter collapsible outdoor promotional gazebo canopy tent with branding',
  'acp-sheet-cutting-board': 'Architectural CNC router cut Aluminum Composite Panel signboard with 3D acrylic letters',
  'clip-on-board': 'Ultra-slim 1-inch aluminum snap-frame poster lightbox with edge-lit LED illumination',
  'sandwich-board': 'Double-sided folding A-frame sidewalk pavement sandwich board with poster inserts',
  'outdoor-branding-advertising': 'Monumental highway unipole billboard and outdoor hoarding banner advertising campaign'
};

// Process each service entry in servicesData
for (const [id, alt] of Object.entries(altMap)) {
  const target = `id: '${id}',`;
  if (content.includes(target)) {
    const replacement = `id: '${id}',\n    image: '/images/products/${id}.webp',\n    imageAlt: '${alt}',`;
    // If not already has image:
    const regex = new RegExp(`id:\\s*'${id}',(\\s*image:.*?)?`);
    content = content.replace(regex, `id: '${id}',\n    image: '/images/products/${id}.webp',\n    imageAlt: '${alt}',`);
  } else {
    console.error(`Warning: target id '${id}' not found in servicesData.js`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated servicesData.js with image and imageAlt fields.');
