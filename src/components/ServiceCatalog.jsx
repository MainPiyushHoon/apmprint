import React, { useState, useMemo } from 'react';
import { categories, servicesData } from '../data/servicesData';
import ServiceCard from './ServiceCard';

export default function ServiceCatalog({ onOpenModal, onSelectQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.desc.toLowerCase().includes(query) ||
        service.specs.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Comprehensive Press Verticals</span>
          </div>
          <h2 className="section-title">Our 32 Commercial Printing & Branding Services</h2>
          <p className="section-subtitle">
            From daily GST tax invoices and student identity cards to large-format outdoor flex hoardings and LED signage.
          </p>
        </div>

        <div className="catalog-controls">
          <div className="search-box">
            <i className="ri-search-line search-icon" aria-hidden="true"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search 32 services (e.g., Bill Book, Flex Board, ID Card, Canopy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search printing and signage services"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1.2rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-dim)',
                  fontSize: '1.1rem'
                }}
                aria-label="Clear search query"
              >
                &times;
              </button>
            )}
          </div>

          <div className="category-tabs" role="tablist" aria-label="Service Categories">
            <button
              type="button"
              className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              role="tab"
              aria-selected={activeCategory === 'all'}
            >
              All Verticals <span className="tab-count">32</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {cat.label} <span className="tab-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {filteredServices.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3.5rem 1rem', background: 'var(--bg-surface)', borderRadius: '12px' }}>
            <i className="ri-file-search-line" style={{ fontSize: '3rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.8rem' }}></i>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>No Services Matching "{searchQuery}"</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Looking for something custom? We handle bespoke printing orders. Send us your requirements directly.
            </p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.2rem' }}>
              <i className="ri-whatsapp-line"></i> Contact Custom Desk
            </a>
          </div>
        ) : (
          <div className="services-grid">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpenModal={onOpenModal}
                onSelectQuote={onSelectQuote}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
