import React from 'react';

export default function ServiceCard({ service, onOpenModal, onSelectQuote }) {
  return (
    <article className="service-card" data-category={service.category}>
      <div>
        <div className="card-top">
          <div className="card-icon" aria-hidden="true">
            <i className={service.icon}></i>
          </div>
          <span className="card-badge">{service.badge}</span>
        </div>

        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.desc}</p>
      </div>

      <div className="card-actions">
        <button 
          type="button" 
          className="card-btn btn-secondary" 
          onClick={() => onOpenModal(service)}
          aria-label={`View technical specifications for ${service.title}`}
        >
          <i className="ri-information-line"></i> View Specs
        </button>
        <a 
          href="#contact" 
          className="card-btn btn-primary"
          onClick={() => onSelectQuote(service)}
          aria-label={`Request quote for ${service.title}`}
        >
          <i className="ri-whatsapp-line"></i> Quote
        </a>
      </div>
    </article>
  );
}
