import React, { useState, useEffect } from 'react';
import { businessConfig } from '../data/businessConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="brand-logo" onClick={closeMobileMenu}>
          <img
            src="images/apm-logo.svg"
            alt="Aggarwal Print Media Official Logo"
            className="logo-img"
            width="50"
            height="50"
          />
          <div className="logo-text">
            <span className="logo-name">{businessConfig.name}</span>
            <span className="logo-sub">{businessConfig.tagline}</span>
          </div>
        </a>

        <nav aria-label="Main Navigation">
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#services" className="nav-link" onClick={closeMobileMenu}>
                Services (32)
              </a>
            </li>
            <li>
              <a href="#google-reviews" className="nav-link" onClick={closeMobileMenu}>
                Google Reviews
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link" onClick={closeMobileMenu}>
                Production Showcase
              </a>
            </li>
            <li>
              <a href="#why-us" className="nav-link" onClick={closeMobileMenu}>
                Why APM
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
                Contact & Quote
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.2rem', fontSize: '0.88rem' }}>
            <i className="ri-whatsapp-line"></i> Quote Request
          </a>
          <button
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
