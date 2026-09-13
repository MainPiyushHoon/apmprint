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
  }, [serviceIndex, serviceTitle]);

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
            onClick={handleServiceClick}
            title="Click to view full specs &amp; get instant quote"
          >
            <span
              className="typing-text"
              ref={textRef}
              key={currentService.id || serviceIndex}
              style={{ backgroundImage: brandGradient }}
            >
              {serviceTitle.split('').map((char, index) => (
                <span
                  key={`${currentService.id || serviceIndex}-${index}`}
                  className="typing-char"
                  style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
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
            <a href="#facility-showcase" className="btn btn-outline">
              <i className="ri-building-line"></i> Machine Facility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
