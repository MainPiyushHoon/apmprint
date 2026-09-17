import React, { useState } from 'react';
import { businessConfig } from '../data/businessConfig';
import { servicesData } from '../data/servicesData';
import { serviceClusters } from '../data/serviceClustersData';
import Breadcrumbs from './Breadcrumbs';
import ServiceModal from './ServiceModal';

export default function ServiceClusterPage({ cluster, onOpenServiceModal }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!cluster) return null;

  // Retrieve matching services from servicesData
  const includedServices = servicesData.filter((s) =>
    cluster.serviceIds.includes(s.id)
  );

  // Retrieve related clusters
  const relatedClusters = serviceClusters.filter((c) =>
    cluster.relatedClusterSlugs.includes(c.slug)
  );

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleOpenSpecs = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getWhatsAppOrderUrl = () => {
    const text = encodeURIComponent(
      `Hello Aggarwal Print Media (${businessConfig.contactPerson})!\nI would like to inquire about: ${cluster.h1}.\n\nPlease share paper/material options, turnaround time, and pricing for our requirements.\nThank you!`
    );
    return `https://wa.me/${businessConfig.phone.whatsappRaw}?text=${text}`;
  };

  const breadcrumbs = [
    { label: 'Services', url: '/services/' },
    { label: cluster.h1 }
  ];

  return (
    <div className="service-page-wrapper">
      <Breadcrumbs items={breadcrumbs} />

      {/* Service Page Hero */}
      <section className="service-page-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="badge">
              <span className="pulse-dot"></span>
              <span>{cluster.categoryBadge}</span>
            </div>

            <h1 className="service-page-h1">{cluster.h1}</h1>

            <p className="service-hero-subtitle">{cluster.subtitle}</p>

            <div className="service-hero-ctas">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="ri-whatsapp-line"></i> Instant WhatsApp Quote
              </a>
              <a
                href={`tel:${businessConfig.phone.primaryRaw}`}
                className="btn btn-secondary"
              >
                <i className="ri-phone-line"></i> Call {businessConfig.phone.primary}
              </a>
              <a href="#specifications" className="btn btn-secondary">
                <i className="ri-file-list-3-line"></i> View Specifications
              </a>
            </div>

            {/* Quick Keyword/Topic Pills */}
            <div className="service-quick-tags" aria-label="Target service categories">
              <span className="quick-tags-label">Related Verticals:</span>
              {cluster.relatedKeywords.map((kw, i) => (
                <span key={i} className="service-quick-pill">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview & What APM Print Offers */}
      <section className="service-overview-section">
        <div className="container">
          <div className="overview-card">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <div className="badge" style={{ width: 'fit-content' }}>
                <span className="badge-dot"></span>
                <span>Press Capability Overview</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '1.85rem' }}>
                Commercial Production &amp; Finishing in Ghaziabad
              </h2>
            </div>
            <p className="overview-text">{cluster.overview}</p>
          </div>

          {/* Included Specific Services Cards */}
          <div className="section-header" style={{ marginTop: '3.5rem' }}>
            <div className="badge">
              <span className="badge-dot"></span>
              <span>In-House Manufacturing Verticals</span>
            </div>
            <h2 className="section-title">Specific Capabilities Covered</h2>
            <p className="section-subtitle">
              Detailed technical specifications manufactured at our Sector 12, Vijay Nagar facility.
            </p>
          </div>

          <div className="cluster-services-grid">
            {includedServices.map((service) => (
              <article key={service.id} className="cluster-service-card">
                <div className="cluster-card-top">
                  <div className="card-icon" aria-hidden="true">
                    <i className={service.icon}></i>
                  </div>
                  <span className="card-badge">{service.badge}</span>
                </div>

                <h3 className="cluster-service-title">{service.title}</h3>
                <p className="cluster-service-desc">{service.desc}</p>

                <div className="cluster-specs-list">
                  <span className="specs-heading">Key Specifications:</span>
                  <ul>
                    {service.specs.map((spec, idx) => (
                      <li key={idx}>
                        <i className="ri-checkbox-circle-fill" style={{ color: 'var(--primary)' }}></i>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cluster-card-actions">
                  <button
                    type="button"
                    className="card-btn btn-secondary"
                    onClick={() => handleOpenSpecs(service)}
                  >
                    <i className="ri-information-line"></i> View Full Specs
                  </button>
                  <a
                    href={getWhatsAppOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn btn-primary"
                  >
                    <i className="ri-whatsapp-line"></i> Quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Materials Grid */}
      <section className="service-specs-section" id="specifications">
        <div className="container">
          <div className="section-header">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>Technical Standards</span>
            </div>
            <h2 className="section-title">Substrates, Formats &amp; Finishing</h2>
            <p className="section-subtitle">
              Authentic factory-direct specifications maintained across all production runs.
            </p>
          </div>

          <div className="specs-table-grid">
            {cluster.specifications.map((item, idx) => (
              <div key={idx} className="spec-table-row">
                <div className="spec-label">
                  <i className="ri-check-double-line" style={{ color: 'var(--primary)' }}></i>
                  <span>{item.label}</span>
                </div>
                <div className="spec-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For / Typical Use Cases */}
      <section className="service-usecases-section">
        <div className="container">
          <div className="usecases-grid">
            <div className="usecases-info">
              <div className="badge" style={{ width: 'fit-content' }}>
                <span className="badge-dot"></span>
                <span>Target Applications</span>
              </div>
              <h2 style={{ fontSize: '1.9rem', color: 'var(--text-main)', marginTop: '0.8rem', lineHeight: 1.25 }}>
                Who This Service Is Built For
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', marginTop: '0.8rem', lineHeight: 1.6 }}>
                Our commercial printing equipment and finish options serve diverse business operations across Ghaziabad, Vijay Nagar, Bulandshahr Road Industrial Area, and Delhi-NCR.
              </p>

              <div className="usecase-items">
                {cluster.suitableFor.map((item, idx) => (
                  <div key={idx} className="usecase-item">
                    <i className="ri-building-line usecase-icon" aria-hidden="true"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ordering Process Box */}
            <div className="ordering-process-card">
              <div className="badge" style={{ width: 'fit-content' }}>
                <span className="badge-dot"></span>
                <span>Simple 3-Step Process</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', margin: '0.6rem 0 1.2rem' }}>
                How to Order from APM Print
              </h3>

              <div className="process-timeline">
                {cluster.orderingSteps.map((step, idx) => (
                  <div key={idx} className="timeline-step">
                    <div className="step-num">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.4rem' }}>
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <i className="ri-whatsapp-fill"></i> Send Requirements on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant FAQs Section */}
      {cluster.faqs && cluster.faqs.length > 0 && (
        <section className="service-faq-section">
          <div className="container">
            <div className="section-header">
              <div className="badge">
                <span className="badge-dot"></span>
                <span>Common Questions</span>
              </div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Clear answers regarding paper weights, formatting, numbering, and press options.
              </p>
            </div>

            <div className="faq-accordion">
              {cluster.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-card ${activeFaq === idx ? 'expanded' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={activeFaq === idx}
                  >
                    <span>{faq.question}</span>
                    <i className={activeFaq === idx ? 'ri-subtract-line' : 'ri-add-line'}></i>
                  </button>
                  {activeFaq === idx && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related APM Services Cross-Linking */}
      {relatedClusters.length > 0 && (
        <section className="service-related-section">
          <div className="container">
            <div className="section-header">
              <div className="badge">
                <span className="badge-dot"></span>
                <span>Related Printing Services</span>
              </div>
              <h2 className="section-title">Frequently Ordered Together</h2>
              <p className="section-subtitle">
                Explore complementary commercial print verticals manufactured at our Ghaziabad facility.
              </p>
            </div>

            <div className="related-clusters-grid">
              {relatedClusters.map((rel) => (
                <a key={rel.slug} href={rel.path} className="related-cluster-card">
                  <div className="related-card-badge">{rel.categoryBadge}</div>
                  <h3 className="related-card-title">{rel.h1}</h3>
                  <p className="related-card-desc">{rel.subtitle}</p>
                  <span className="related-card-link">
                    Explore Service <i className="ri-arrow-right-line"></i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ready to Order CTA Banner */}
      <section className="service-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <h2>Ready to Place Your Order for {cluster.h1}?</h2>
            <p>
              Connect directly with <strong>{businessConfig.contactPerson}</strong> at our Sector 12 Vijay Nagar press.
              Get instant written pricing, paper recommendations, and turnaround details within minutes.
            </p>
            <div className="cta-banner-actions">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.85rem 1.8rem' }}
              >
                <i className="ri-whatsapp-fill" style={{ fontSize: '1.25rem' }}></i> Direct WhatsApp Quote
              </a>
              <a
                href={`tel:${businessConfig.phone.primaryRaw}`}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem' }}
              >
                <i className="ri-phone-line"></i> Call {businessConfig.phone.primary}
              </a>
              <a href="/services/" className="btn btn-secondary" style={{ padding: '0.85rem 1.6rem' }}>
                <i className="ri-grid-fill"></i> View All 32 Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
