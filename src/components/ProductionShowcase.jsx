import React from 'react';

export default function ProductionShowcase() {
  const showcaseItems = [
    {
      id: 1,
      image: 'images/komori_offset_press.jpg',
      badge: 'Commercial Offset Press',
      title: 'Komori Lithrone 28 Multi-Unit Press',
      desc: 'High-speed automated offset line for executive letterheads, multi-page product catalogues, and high-volume NCR bill books.',
      alt: 'Komori Lithrone 28 multi-unit commercial offset printing press at Aggarwal Print Media facility'
    },
    {
      id: 2,
      image: 'images/flex_banner_printer.jpg',
      badge: 'Large Format Signage',
      title: 'Heavy-Duty Roll Flex & Vinyl Printer',
      desc: 'High-speed solvent/eco-solvent roll printer for outdoor Star Flex hoardings, one-way vision window films, and promotional backdrops.',
      alt: 'Industrial roll-to-roll wide format flex banner and vinyl printer machine'
    },
    {
      id: 3,
      image: 'images/paper_flyers.jpg',
      badge: 'Marketing Collateral',
      title: 'Leaflets, Brochures & Corporate Folders',
      desc: 'Precision folded pamphlets on 130/170 GSM gloss art paper with spot UV lamination and clean die-cutting.',
      alt: 'Stack of promotional marketing flyers, leaflets, and business brochures'
    },
    {
      id: 4,
      image: 'images/flex_boards.jpg',
      badge: 'Outdoor Branding',
      title: '3D Acrylic LED Letters & Glowsign Boards',
      desc: 'Architectural ACP sheet signboards with CNC router cuts, IP67 waterproof Samsung LED modules, and sidewalk sandwich boards.',
      alt: 'Illuminated 3D LED glowsign board and commercial outdoor signage'
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Real Factory Machinery</span>
          </div>
          <h2 className="section-title">Production Machinery & Press Facility</h2>
          <p className="section-subtitle">
            Take a look inside our manufacturing floor in Sector 12, Vijay Nagar, Ghaziabad. We operate commercial offset and large-format digital lines in-house.
          </p>
        </div>

        <div className="showcase-grid">
          {showcaseItems.map((item) => (
            <article key={item.id} className="showcase-card">
              <img
                src={item.image}
                alt={item.alt}
                width="560"
                height="320"
                loading="lazy"
                decoding="async"
              />
              <div className="showcase-info">
                <span className="showcase-badge">{item.badge}</span>
                <h3 className="showcase-title">{item.title}</h3>
                <p className="showcase-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
