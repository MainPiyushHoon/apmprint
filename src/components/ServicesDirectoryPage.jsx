import React from 'react';
import { businessConfig } from '../data/businessConfig';
import { serviceClusters } from '../data/serviceClustersData';
import { getAppUrl } from '../utils/urlHelper';
import Breadcrumbs from './Breadcrumbs';
import ServiceCatalog from './ServiceCatalog';
import ServiceModal from './ServiceModal';

export default function ServicesDirectoryPage({ onOpenModal, onSelectQuote }) {
  const [selectedModalService, setSelectedModalService] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenSpecs = (service) => {
    setSelectedModalService(service);
    setIsModalOpen(true);
  };

  const handleCloseSpecs = () => {
    setIsModalOpen(false);
  };

  const breadcrumbs = [
    { label: 'Services Directory' }
  ];

  return (
    <div className="services-directory-wrapper">
      <Breadcrumbs items={breadcrumbs} />

      {/* Directory Hero */}
      <section className="service-page-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="badge">
              <span className="pulse-dot"></span>
              <span>Complete In-House Facility</span>
            </div>

            <h1 className="service-page-h1">Commercial Printing &amp; Signage Services Directory</h1>

            <p className="service-hero-subtitle">
              Explore our 32 commercial printing, packaging, and outdoor signage manufacturing verticals produced in Sector 12, Vijay Nagar, Ghaziabad. From daily carbonless invoice books to multi-unit offset runs and illuminated 3D LED storefronts.
            </p>

            <div className="service-hero-ctas">
              <a href="#featured-services" className="btn btn-primary">
                <i className="ri-star-line"></i> Featured Core Services (8)
              </a>
              <a href="#all-services" className="btn btn-secondary">
                <i className="ri-grid-line"></i> Browse Full Catalog (32)
              </a>
              <a
                href={`https://wa.me/${businessConfig.phone.whatsappRaw}?text=${encodeURIComponent('Hello Sunil ji! I would like to request a custom printing quote.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <i className="ri-whatsapp-fill"></i> Instant WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Core Service Clusters */}
      <section className="featured-clusters-section" id="featured-services">
        <div className="container">
          <div className="section-header">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>High-Priority Verticals</span>
            </div>
            <h2 className="section-title">Dedicated Service Landing Pages</h2>
            <p className="section-subtitle">
              Detailed technical specifications, material selections, and order guidelines for our most in-demand printing services.
            </p>
          </div>

          <div className="featured-clusters-grid">
            {serviceClusters.map((cluster) => (
              <a key={cluster.slug} href={getAppUrl(cluster.path)} className="featured-cluster-card">
                <div className="featured-card-header">
                  <span className="card-badge">{cluster.categoryBadge}</span>
                  <span className="featured-card-arrow">
                    <i className="ri-arrow-right-up-line"></i>
                  </span>
                </div>
                <h3 className="featured-card-title">{cluster.h1}</h3>
                <p className="featured-card-desc">{cluster.subtitle}</p>
                <div className="featured-card-tags">
                  {cluster.relatedKeywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="featured-card-tag">{kw}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 32-Service Catalog */}
      <div id="all-services">
        <ServiceCatalog
          onOpenModal={handleOpenSpecs}
          onSelectQuote={onSelectQuote}
        />
      </div>

      <ServiceModal
        service={selectedModalService}
        isOpen={isModalOpen}
        onClose={handleCloseSpecs}
      />
    </div>
  );
}
