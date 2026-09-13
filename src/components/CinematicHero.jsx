import React, { useState, useEffect, useRef } from 'react';
import { animate, createTimeline, stagger, set } from 'animejs';
import { servicesData } from '../data/servicesData';
import { businessConfig } from '../data/businessConfig';
import InteractiveDottedCanvas from './InteractiveDottedCanvas';

/**
 * CinematicHero Component
 * High-tech cinematic entrance with interactive dotted physics canvas,
 * anime.js dynamic service typewriter reel, and single primary H1 SEO tag.
 */
export default function CinematicHero({ onSelectQuickTag }) {
  const [serviceIndex, setServiceIndex] = useState(0);
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const isMountedRef = useRef(true);

  // Extract all 32 services
  const currentService = servicesData[serviceIndex] || servicesData[0];

  // anime.js character stagger typing & wipe cycle
  useEffect(() => {
    isMountedRef.current = true;
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('.typing-char');
    if (!chars || chars.length === 0) return;

    // Reset initial state
    set(chars, { opacity: 0, translateY: 6 });

    // Timeline: 1. Type In -> 2. Hold -> 3. Wipe Out
    const tl = createTimeline({
      defaults: {
        ease: 'outCubic',
      },
      onComplete: () => {
        if (!isMountedRef.current) return;
        setServiceIndex((prev) => (prev + 1) % servicesData.length);
      }
    });

    tl.add(chars, {
      opacity: [0, 1],
      translateY: [6, 0],
      delay: stagger(30),
      duration: 380,
    })
    .add(chars, {
      opacity: 1,
      duration: 2200,
    })
    .add(chars, {
      opacity: [1, 0],
      translateY: [0, -6],
      delay: stagger(18, { from: 'last' }),
      duration: 280,
      ease: 'inCubic',
    });

    return () => {
      isMountedRef.current = false;
      tl.pause();
    };
  }, [serviceIndex]);

  // Cursor pulse animation with anime.js
  useEffect(() => {
    if (!cursorRef.current) return;
    const cursorAnim = animate(cursorRef.current, {
      opacity: [1, 0.15],
      duration: 650,
      alternate: true,
      loop: true,
      ease: 'inOutQuad',
    });

    return () => cursorAnim.pause();
  }, []);

  const handleServiceClick = () => {
    if (onSelectQuickTag && currentService) {
      onSelectQuickTag(currentService.name);
    }
  };

  const categories = [
    { name: 'Paper & Offset Printing', icon: 'ri-printer-line' },
    { name: 'Signage & Large Format', icon: 'ri-billboard-line' },
    { name: 'Corporate Stationery', icon: 'ri-briefcase-line' },
    { name: 'Promotional & Marketing', icon: 'ri-gift-line' },
  ];

  return (
    <section className="cinematic-hero" id="home">
      {/* Interactive Dotted Physics Background */}
      <InteractiveDottedCanvas />

      {/* Hero Foreground Content */}
      <div className="container cinematic-container">
        <div className="cinematic-content">
          {/* Top Status Badge */}
          <div className="cinematic-badge">
            <span className="cinematic-badge-pulse"></span>
            <span className="cinematic-badge-text">
              Direct Commercial Manufacturing • Sector 12, Vijay Nagar, Ghaziabad
            </span>
          </div>

          {/* Primary Single <h1> Tag for Technical SEO */}
          <h1 className="cinematic-title">
            Precision <span>Commercial Printing</span> &amp; Signage Press
          </h1>

          {/* Dynamic Anime.js Typing Reel */}
          <div className="cinematic-dynamic-box" onClick={handleServiceClick} title="Click to view full specs &amp; get instant quote">
            <div className="dynamic-box-prefix">
              <span className="prefix-label">Now Manufacturing:</span>
              <span className="category-pill-active">
                <i className={currentService.icon || 'ri-check-double-line'}></i>
                {currentService.category}
              </span>
            </div>

            <div className="dynamic-text-row">
              <div className="dynamic-text" ref={textRef} key={currentService.id}>
                {currentService.name.split('').map((char, index) => (
                  <span
                    key={`${currentService.id}-${index}`}
                    className="typing-char"
                    style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
              <span className="typing-cursor" ref={cursorRef} aria-hidden="true">|</span>
            </div>

            <div className="dynamic-box-hint">
              <i className="ri-cursor-line"></i> Click to view specs, bulk rates &amp; WhatsApp quote
            </div>
          </div>

          {/* Subtitle with Sunil Bansal on-site supervision */}
          <p className="cinematic-subtitle">
            Supplying Delhi NCR &amp; pan-India enterprises with carbonless NCR duplicate bill books, 
            executive letterheads, 3D acrylic LED signage, industrial Star Flex banners, and luxury marketing collateral. 
            Supervised on-site by <strong>{businessConfig.contactPerson}</strong>.
          </p>

          {/* Quick Action CTAs */}
          <div className="cinematic-cta-group">
            <a href="#contact" className="btn btn-primary cinematic-btn-glow">
              <i className="ri-whatsapp-line"></i> Instant WhatsApp Quote
            </a>
            <a href="#services" className="btn btn-secondary">
              <i className="ri-grid-fill"></i> Browse All 32 Services
            </a>
            <a href="#facility-showcase" className="btn btn-outline">
              <i className="ri-building-line"></i> Machine Facility
            </a>
          </div>

          {/* Category Quick Filter Pills */}
          <div className="cinematic-category-strip">
            <span className="category-strip-label">Quick Sectors:</span>
            {categories.map((cat, idx) => (
              <a
                key={idx}
                href="#services"
                className={`category-strip-btn ${currentService.category === cat.name ? 'active-cat' : ''}`}
                onClick={() => onSelectQuickTag && onSelectQuickTag(cat.name)}
              >
                <i className={cat.icon}></i>
                {cat.name}
              </a>
            ))}
          </div>

          {/* Trust Highlights */}
          <div className="cinematic-trust-row">
            <div className="trust-col">
              <i className="ri-shield-check-fill text-success"></i>
              <span>Direct Factory Wholesale</span>
            </div>
            <div className="trust-col">
              <i className="ri-flashlight-fill text-amber"></i>
              <span>24h Express Dispatch</span>
            </div>
            <div className="trust-col">
              <i className="ri-google-fill text-primary"></i>
              <span>4.9★ Google Maps Rating</span>
            </div>
            <div className="trust-col">
              <i className="ri-check-double-line text-info"></i>
              <span>Zero-Error Prepress Audit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
