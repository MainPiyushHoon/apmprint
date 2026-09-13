import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
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
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef(null);

  // Official APM Brand Logo Palette
  const brandColors = [
    '#008DD2', // Cyan / Process Blue
    '#1D5FAB', // Royal Blue
    '#E5097F', // Process Magenta / Pink
    '#EF7F1A', // Bright Orange
    '#B0CB1F', // Lime Offset Green
  ];

  const brandGradient = `linear-gradient(90deg, ${brandColors[0]} 0%, ${brandColors[1]} 25%, ${brandColors[2]} 50%, ${brandColors[3]} 75%, ${brandColors[4]} 100%)`;

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

  const handleServiceClick = () => {
    if (onSelectQuickTag && serviceTitle) {
      onSelectQuickTag(serviceTitle);
    }
  };

  const categoryFilters = [
    { id: 'stationery', label: 'Stationery & Registers', icon: 'ri-file-list-3-line' },
    { id: 'paper', label: 'Paper & Marketing', icon: 'ri-printer-line' },
    { id: 'labels', label: 'Labels & Promo Gifts', icon: 'ri-gift-line' },
    { id: 'outdoor', label: 'Outdoor & Signage', icon: 'ri-billboard-line' },
  ];

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

          {/* Primary Single <h1> Tag with Pure Dynamic Typing Headline */}
          <h1
            className="cinematic-typing-headline"
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
          </h1>

          {/* Direct Action CTAs */}
          <div className="cinematic-cta-group">
            <a href="#contact" className="btn btn-primary cinematic-btn-glow">
              <i className="ri-whatsapp-line"></i> Instant WhatsApp Quote
            </a>
            <a href="#services" className="btn btn-secondary">
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
