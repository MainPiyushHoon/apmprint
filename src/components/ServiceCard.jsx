import React from 'react';
import { getAppUrl } from '../utils/urlHelper';

export default function ServiceCard({ service, onOpenModal, onSelectQuote }) {
  const imageUrl = service.image ? getAppUrl(service.image) : null;

  return (
    <article className="service-card" data-category={service.category}>
      <div className="card-content-wrap">
        {imageUrl && (
          <div className="card-image-wrap">
            <img
              src={imageUrl}
              alt={service.imageAlt || service.title}
              className="card-product-img"
              loading="lazy"
              width="800"
              height="500"
            />
            <span className="card-badge-overlay">{service.badge}</span>
            <div className="card-icon-overlay" aria-hidden="true" title={service.title}>
              <i className={service.icon}></i>
            </div>
          </div>
        )}

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
          <i className="ri-information-line"></i>
          <span className="btn-text-full">View Specs</span>
          <span className="btn-text-short">Specs</span>
        </button>
        <a
          href={getAppUrl('#contact')}
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
