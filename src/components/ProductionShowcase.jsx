import React, { useState } from 'react';

export default function ProductionShowcase() {
  const [filter, setFilter] = useState('all');

  const showcaseItems = [
    {
      id: 1,
      category: 'machinery',
      image: '/images/komori_offset_press.webp',
      badge: 'Facility Machinery',
      title: 'Komori Lithrone 28 Multi-Unit Press',
      desc: 'High-speed automated offset press line for executive letterheads, multi-page product catalogues, and high-volume NCR duplicate bill books.',
      alt: 'Komori Lithrone 28 multi-unit commercial offset printing press at Aggarwal Print Media facility'
    },
    {
      id: 2,
      category: 'machinery',
      image: '/images/flex_banner_printer.webp',
      badge: 'Signage Press',
      title: 'Heavy-Duty Roll Flex & Vinyl Printer',
      desc: 'High-speed solvent/eco-solvent roll printer for outdoor Star Flex hoardings, one-way vision window films, and stage backdrops.',
      alt: 'Industrial roll-to-roll wide format flex banner and vinyl printer machine'
    },
    {
      id: 3,
      category: 'client-work',
      image: '/images/maps_acrylic_signboard.webp',
      badge: 'Google Maps Verified Work',
      title: '3D Acrylic Raised Logo Signboard (Contentegy)',
      desc: 'Laser-cut 3D acrylic brand lettering with high-gloss finish and architectural wall mounting for corporate reception branding.',
      alt: '3D acrylic letters and architectural company wall logo installation for Contentegy'
    },
    {
      id: 4,
      category: 'client-work',
      image: '/images/maps_glass_branding.webp',
      badge: 'Google Maps Verified Work',
      title: 'Frosted Glass Door Graphics (Sea Hawk Navigation)',
      alt: 'Frosted vinyl glass partition branding and office door graphics for Sea Hawk Navigation',
      desc: 'High-density frosted vinyl film with precision plotter cutting and corporate office lettering for Urbtech NPX Noida office.'
    },
    {
      id: 5,
      category: 'paper',
      image: '/images/paper_flyers.webp',
      badge: 'Marketing Collateral',
      title: 'Leaflets, Brochures & Corporate Pamphlets',
      desc: 'Precision folded pamphlets on 130/170 GSM gloss art paper with spot UV lamination, vibrant color fidelity, and clean die-cutting.',
      alt: 'Stack of promotional marketing flyers, leaflets, and business brochures'
    },
    {
      id: 6,
      category: 'paper',
      image: '/images/business_cards.webp',
      badge: 'Stationery & PVC',
      title: 'PVC ID Cards, Letterheads & Files',
      desc: 'Thermal fused 760-micron PVC identity cards with heat-transfer satin lanyards, 100 GSM Royal bond letterheads, and cardboard cobra files.',
      alt: 'Corporate ID cards, satin lanyards, executive letterheads, and office stationery'
    }
  ];

  const filteredItems = showcaseItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Real Facility &amp; Client Projects</span>
          </div>
          <h2 className="section-title">Production Machinery &amp; Press Showcase</h2>
          <p className="section-subtitle">
            Authentic equipment and completed client installations from our workshop and Google Maps listing in Sector 12, Vijay Nagar, Ghaziabad.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Projects & Machinery (6)' },
            { id: 'machinery', label: 'Factory Machinery (2)' },
            { id: 'client-work', label: 'Google Maps Client Work (2)' },
            { id: 'paper', label: 'Paper & Stationery (2)' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="showcase-grid">
          {filteredItems.map((item) => (
            <article key={item.id} className="showcase-card">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.alt}
                  width="560"
                  height="320"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
