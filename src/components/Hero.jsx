import React, { useState, useEffect, useRef } from 'react';
import { businessConfig } from '../data/businessConfig';

export default function Hero() {
  const [counts, setCounts] = useState({ orders: 0, verticals: 0, guarantee: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { orders: 15000, verticals: 32, guarantee: 99 };
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        orders: Math.min(Math.round(targets.orders * progress), targets.orders),
        verticals: Math.min(Math.round(targets.verticals * progress), targets.verticals),
        guarantee: Math.min(Math.round(targets.guarantee * progress), targets.guarantee),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Commercial Press • Sector 12, Vijay Nagar, Ghaziabad</span>
          </div>

          <h1 className="hero-title">
            Commercial <span>Paper Printing</span>, Offset & Signage Press
          </h1>

          <p className="hero-subtitle">
            Ghaziabad's premier manufacturing press for NCR Bill Books, Letterheads, School ID Cards, 
            3D Acrylic LED Signboards, Flex Boards, Pamphlets, and Custom Packaging under one roof.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <i className="ri-whatsapp-line"></i> Send Quote Request
            </a>
            <a href="#services" className="btn btn-secondary">
              <i className="ri-grid-fill"></i> Explore 32 Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{counts.orders.toLocaleString()}+</div>
              <div className="stat-label">Orders Fulfilled</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.verticals}</div>
              <div className="stat-label">Service Verticals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.guarantee}%</div>
              <div className="stat-label">On-Time Guarantee</div>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="media-card">
            <img 
              src="images/komori_offset_press.jpg" 
              alt="Komori Lithrone 28 commercial multi-unit offset printing line at Aggarwal Print Media press" 
              width="600" 
              height="380"
              fetchPriority="high"
            />
            <div className="media-overlay">
              <span className="overlay-tag">Commercial Offset Line</span>
              <p className="overlay-title" style={{ fontWeight: 600, color: '#ffffff' }}>
                Komori Lithrone 28 Multi-Unit High-Speed Press
              </p>
            </div>
          </div>

          <a 
            href="#google-reviews" 
            className="floating-badge" 
            aria-label="View Google Reviews rated 4.9 stars"
          >
            <i className="ri-google-fill" style={{ color: 'var(--google-blue)', fontSize: '1.4rem' }}></i>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                4.9 <i className="ri-star-fill" style={{ color: 'var(--google-star)', fontSize: '0.85rem' }}></i>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>85+ Google Reviews</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
