import React, { useEffect } from 'react';
import { businessConfig } from '../data/businessConfig';

export default function ServiceModal({ service, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Aggarwal Print Media! I would like to inquire about specifications and pricing for: ${service.title}.\n\nPlease share catalog details and minimum order quantities. Thank you!`
    );
    return `https://wa.me/${businessConfig.phone.whatsappRaw}?text=${text}`;
  };

  return (
    <div 
      className={`modal-backdrop ${isOpen ? 'active' : ''}`} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Close specifications dialog"
        >
          &times;
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <span className="badge" style={{ width: 'fit-content' }}>
            <span className="badge-dot"></span>
            {service.category.toUpperCase()}
          </span>

          <h3 id="modal-title" style={{ fontSize: '1.45rem', color: 'var(--text-main)' }}>
            {service.title}
          </h3>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {service.desc}
          </p>

          <div style={{ background: 'var(--bg-surface)', padding: '1.2rem', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ marginBottom: '0.75rem', color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Technical Specifications
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
              {service.specs.map((spec, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--primary)', marginTop: '0.15rem' }}></i>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.4rem' }}>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp" 
              style={{ flex: 1.2 }}
            >
              <i className="ri-whatsapp-fill"></i> Instant WhatsApp Quote
            </a>
            <a 
              href={`tel:${businessConfig.phone.primaryRaw}`} 
              className="btn btn-secondary" 
              style={{ flex: 0.8 }}
            >
              <i className="ri-phone-fill"></i> Call Press
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
