import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { servicesData } from '../data/servicesData';
import InteractiveDottedCanvas from './InteractiveDottedCanvas';

/**
 * CinematicHero Component
 * High-tech cinematic entrance with interactive dotted physics canvas,
 * anime.js dynamic service typewriter reel, and single primary H1 SEO tag.
 */
export default function CinematicHero() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef(null);

  // Official APM Brand Logo Palette (Flipped: Orange -> Lime -> Magenta -> Cyan -> Royal Blue)
  const brandColors = [
    '#f07101ff', // Bright Orange
    '#ce5205ff', // Darker Orange
    '#E5097F', // Process Magenta / Pink
    '#008DD2', // Cyan / Process Blue
    '#1D5FAB', // Royal Blue
    '#3ffb00ff', // Lime Offset Green
  ];

  const brandGradient = `linear-gradient(90deg, ${brandColors[0]} 0%, ${brandColors[1]} 20%, ${brandColors[2]} 40%, ${brandColors[3]} 60%, ${brandColors[4]} 80%, ${brandColors[5]} 100%)`;

  // Extract all 32 services safely
  const currentService = servicesData[serviceIndex] || servicesData[0] || {};
  const serviceTitle = currentService.title || currentService.name || 'Commercial Printing';

  const categoryLabels = {
    stationery: 'Stationery & Registers',
    paper: 'Paper & Marketing',
    labels: 'Labels & Promo Gifts',
    outdoor: 'Outdoor & Signage',
  };
  const activeCategoryLabel = categoryLabels[currentService.category] || currentService.category || 'Printing';

  // Smooth Typewriter cycle cycling all 32 services with full brand gradient
  useEffect(() => {
    let timer;
    const fullText = serviceTitle;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 55);
      } else {
        // Pause and hold the full word with full brand gradient
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 28);
      } else {
        // Transition to next service
        setIsDeleting(false);
        setServiceIndex((prev) => (prev + 1) % servicesData.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, serviceTitle]);

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

  return (
    <section className="cinematic-hero" id="home">
      {/* Interactive Dotted Physics Background */}
      <InteractiveDottedCanvas />

      {/* Hero Foreground Content */}
      <div className="container cinematic-container">
        <div className="cinematic-content">
          {/* Minimal Category Indicator Pill */}
          <div className="cinematic-category-pill">
            <span className="cinematic-pill-dot"></span>
            <i className={currentService.icon || 'ri-printer-line'}></i>
            <span>{activeCategoryLabel}</span>
          </div>

          {/* Primary Static <h1> for SEO & Immediate Crawlability */}
          <h1 className="cinematic-static-h1">
            Commercial Printing &amp; Signage in Ghaziabad
          </h1>

          {/* Dynamic Typing Accent Subheading */}
          <div
            className="cinematic-typing-headline"
            aria-label="Commercial printing services"
          >
            <span
              className="typing-text"
              key={currentService.id || serviceIndex}
              style={{
                backgroundImage: brandGradient,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {displayedText || '\u00A0'}
            </span>
            <span className="typing-cursor" ref={cursorRef} aria-hidden="true">|</span>
          </div>

          {/* Direct Action CTAs */}
          <div className="cinematic-cta-group">
            <a href="#contact" className="btn btn-primary cinematic-btn-glow">
              <i className="ri-whatsapp-line"></i> Instant WhatsApp Quote
            </a>
            <a href="/services/" className="btn btn-secondary">
              <i className="ri-grid-fill"></i> Browse All 32 Services
            </a>
            <a href="#facility-showcase" className="btn btn-secondary">
              <i className="ri-building-line"></i> Machine Facility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
