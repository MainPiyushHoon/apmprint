import React from 'react';
import { businessConfig } from '../data/businessConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col">
            <a href="/" className="brand-logo">
              <img 
                src="/images/apm-logo.svg" 
                alt="Aggarwal Print Media Logo" 
                width="42" 
                height="42" 
                className="logo-img" 
              />
              <div className="logo-text">
                <span className="logo-name">{businessConfig.name}</span>
                <span className="logo-sub">{businessConfig.tagline}</span>
              </div>
            </a>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.8rem', lineHeight: '1.6' }}>
              Premier commercial manufacturing press delivering high-fidelity paper printing, carbonless NCR bill books, 
              corporate registers, 3D acrylic LED boards, large flex banners, and custom promotional items.
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', marginTop: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <i className="ri-map-pin-fill" style={{ color: 'var(--primary)' }}></i>
              {businessConfig.address.full}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="/services/">All 32 Services Directory</a></li>
              <li><a href="/#google-reviews">Google Reviews (4.9 ★)</a></li>
              <li><a href="/#portfolio">Press Facility & Machines</a></li>
              <li><a href="/#why-us">Why Choose APM</a></li>
              <li><a href="/#contact">Contact & Quote Desk</a></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML Sitemap</a></li>
            </ul>
          </div>

          {/* Col 3: Key Offerings */}
          <div className="footer-col">
            <h4>Core Service Pages</h4>
            <ul className="footer-links">
              <li><a href="/services/bill-book-printing/">Bill Book Printing</a></li>
              <li><a href="/services/flex-board-printing/">Flex Board Printing</a></li>
              <li><a href="/services/glow-sign-board/">3D LED & Glowsign Boards</a></li>
              <li><a href="/services/pamphlet-printing/">Pamphlet & Flyer Printing</a></li>
              <li><a href="/services/letterhead-printing/">Letterhead & Stationery</a></li>
              <li><a href="/services/school-id-cards-registers/">School ID Cards & Registers</a></li>
              <li><a href="/services/sticker-label-printing/">Sticker & Label Printing</a></li>
              <li><a href="/services/brochure-catalogue-printing/">Brochure & Catalogue Printing</a></li>
            </ul>
          </div>

          {/* Col 4: WhatsApp Support */}
          <div className="footer-col">
            <h4>Customer Support Desk</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
              Direct line to <strong>{businessConfig.contactPerson}</strong> for instant pricing, urgent orders & prepress proofing.
            </p>
            <a
              href={`https://wa.me/${businessConfig.phone.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', gap: '0.5rem', fontSize: '0.88rem', padding: '0.7rem' }}
            >
              <i className="ri-whatsapp-fill" style={{ fontSize: '1.2rem' }}></i> WhatsApp: {businessConfig.phone.primary}
            </a>
            <div style={{ marginTop: '0.8rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <i className="ri-mail-line"></i> {businessConfig.emails.primary}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Aggarwal Print Media (APM Print). All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '1.4rem' }}>
            <a href="#">Back to Top</a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer">Robots</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
