import React, { useState, useEffect, useRef } from 'react';
import { businessConfig } from '../data/businessConfig';

export default function FacilitySpotlight({ onSelectQuickTag }) {
  const [counts, setCounts] = useState({ orders: 0, verticals: 0, guarantee: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const facilityRef = useRef(null);

  const slides = [
    {
      id: 0,
      image: 'images/komori_offset_press.jpg',
      tag: 'Commercial Offset Line',
      tagIcon: 'ri-printer-line',
      title: 'Komori Lithrone 28 Multi-Unit High-Speed Press',
      alt: 'Komori Lithrone 28 commercial offset printing press at Aggarwal Print Media facility'
    },
    {
      id: 1,
      image: 'images/flex_banner_printer.jpg',
      tag: 'Large-Format Solvent Press',
      tagIcon: 'ri-billboard-line',
      title: 'Heavy-Duty Roll-to-Roll Flex & Vinyl Printer',
      alt: 'Industrial roll flex banner and vinyl printing machine at Aggarwal Print Media'
    },
    {
      id: 2,
      image: 'images/maps_acrylic_signboard.jpg',
      tag: 'Google Maps Verified Work',
      tagIcon: 'ri-google-fill',
      title: '3D Acrylic Raised Logo Wall Signboard (Contentegy)',
      alt: '3D acrylic letters and architectural company wall logo installation'
    },
    {
      id: 3,
      image: 'images/maps_glass_branding.jpg',
      tag: 'Google Maps Verified Work',
      tagIcon: 'ri-google-fill',
      title: 'Frosted Glass Door Vinyl Graphics (Sea Hawk Navigation)',
      alt: 'Frosted vinyl glass partition branding and office door graphics'
    }
  ];

  // Auto-play slideshow every 4.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Animated Counter Logic
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

    if (facilityRef.current) {
      observer.observe(facilityRef.current);
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

  const popularTags = [
    'Bill Book',
    'Flex Board',
    '3D Glowsign Board',
    'Letter Head',
    'School ID Cards',
    'Pamphlets'
  ];

  return (
    <section className="facility-spotlight" id="facility-showcase" ref={facilityRef}>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">
            <span className="pulse-dot"></span>
            <span>Production Plant • Sector 12, Vijay Nagar, Ghaziabad</span>
          </div>

          <h2 className="facility-title">
            Commercial <span>Manufacturing</span> &amp; Offset Press Facility
          </h2>

          <p className="hero-subtitle">
            Manufacturing press delivering carbonless NCR duplicate bill books, executive letterheads, 
            3D acrylic LED signboards, heavy-duty Star Flex banners, and corporate gifts. Supervised on-site by 
            <strong> {businessConfig.contactPerson}</strong>.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.9rem 1.8rem' }}>
              <i className="ri-whatsapp-line"></i> Direct Factory Quote
            </a>
            <a href="#services" className="btn btn-secondary" style={{ padding: '0.9rem 1.6rem' }}>
              <i className="ri-grid-fill"></i> View All 32 Services
            </a>
          </div>

          {/* Quick Inquiry Tags */}
          <div className="hero-pills">
            <span className="pills-label">Popular Verticals:</span>
            {popularTags.map((tag, idx) => (
              <a
                key={idx}
                href="#services"
                className="hero-pill-tag"
                onClick={() => onSelectQuickTag && onSelectQuickTag(tag)}
              >
                {tag}
              </a>
            ))}
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

        {/* Interactive Production Carousel */}
        <div
          className="hero-media"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="media-carousel-container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === activeSlide ? 'active' : ''}`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  width="640"
                  height="480"
                  loading="lazy"
                  decoding="async"
                />
                <div className="media-overlay">
                  <span className="overlay-tag">
                    <i className={slide.tagIcon} style={{ color: '#60a5fa' }}></i>
                    {slide.tag} • {index + 1}/{slides.length}
                  </span>
                  <p className="overlay-title">{slide.title}</p>
                </div>
              </div>
            ))}

            {/* Nav Arrows */}
            <button
              type="button"
              className="carousel-arrow prev"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              aria-label="Previous facility photo"
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button
              type="button"
              className="carousel-arrow next"
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              aria-label="Next facility photo"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>

            {/* Nav Dots */}
            <div className="carousel-nav-dots" role="tablist" aria-label="Slide Selection">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`carousel-dot ${idx === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  role="tab"
                  aria-selected={idx === activeSlide}
                />
              ))}
            </div>
          </div>

          {/* Top Floating Badge */}
          <a
            href="#google-reviews"
            className="floating-badge floating-badge-top"
            aria-label="View Google Reviews rated 4.9 stars"
          >
            <i className="ri-google-fill" style={{ color: 'var(--google-blue)', fontSize: '1.45rem' }}></i>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                4.9 <i className="ri-star-fill" style={{ color: 'var(--google-star)', fontSize: '0.9rem' }}></i>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--whatsapp-green)' }}>• Verified</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>85+ Google Maps Reviews</div>
            </div>
          </a>

          {/* Bottom Floating Badge */}
          <div className="floating-badge floating-badge-bottom">
            <i className="ri-flashlight-fill" style={{ color: '#f59e0b', fontSize: '1.35rem' }}></i>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--text-main)' }}>
                24h Express Delivery
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Factory Direct Wholesale Rates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
