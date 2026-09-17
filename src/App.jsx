import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import CinematicHero from './components/CinematicHero';
import FacilitySpotlight from './components/FacilitySpotlight';
import ServiceCatalog from './components/ServiceCatalog';
import ServiceModal from './components/ServiceModal';
import GoogleReviews from './components/GoogleReviews';
import ProductionShowcase from './components/ProductionShowcase';
import WhyUs from './components/WhyUs';
import ContactQuoteDesk from './components/ContactQuoteDesk';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ServicesDirectoryPage from './components/ServicesDirectoryPage';
import ServiceClusterPage from './components/ServiceClusterPage';
import { serviceClusters, getServiceClusterBySlug } from './data/serviceClustersData';

function normalizePath(pathname) {
  if (!pathname) return '/';
  let path = pathname.trim().split('?')[0].split('#')[0];
  if (path !== '/' && !path.endsWith('/')) {
    path += '/';
  }
  return path;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const [selectedModalService, setSelectedModalService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState(null);
  const [searchTag, setSearchTag] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Sync document title and canonical meta tags on client navigation
  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const metaDescription = document.querySelector("meta[name='description']");

    if (currentPath === '/' || currentPath === '/index.html/') {
      document.title = 'Commercial Printing Press & Signage in Ghaziabad | APM Print';
      if (canonicalLink) canonicalLink.setAttribute('href', 'https://apmprint.in/');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Commercial printing press in Sector 12, Vijay Nagar, Ghaziabad. Offset printing, NCR bill books, flex banners, LED sign boards & corporate stationery. Call +91 95820 23022.'
        );
      }
    } else if (currentPath === '/services/') {
      document.title = 'Commercial Printing & Signage Services Directory | APM Print';
      if (canonicalLink) canonicalLink.setAttribute('href', 'https://apmprint.in/services/');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Explore 32 commercial printing, packaging & outdoor signage services in Vijay Nagar, Ghaziabad. Offset press, NCR bill books, flex boards & LED signage. Call +91 95820 23022.'
        );
      }
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace(/^\/services\//, '').replace(/\/$/, '');
      const cluster = getServiceClusterBySlug(slug);
      if (cluster) {
        document.title = cluster.title;
        if (canonicalLink) canonicalLink.setAttribute('href', cluster.url);
        if (metaDescription) metaDescription.setAttribute('content', cluster.metaDescription);
      }
    }
  }, [currentPath]);

  // Handle client-side popstate for back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept internal relative links for smooth SPA navigation
  const handleInternalNavigation = useCallback((e) => {
    const target = e.target.closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (!href) return;

    // Ignore external, phone, mailto, whatsapp, or target="_blank"
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      target.getAttribute('target') === '_blank'
    ) {
      return;
    }

    // Hash anchor on current page
    if (href.startsWith('#')) {
      return; // Allow standard smooth scrolling
    }

    // Cross-page anchor (e.g. /#contact)
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      if (currentPath === '/' || currentPath === '/index.html/') {
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', href);
        }
      } else {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
      return;
    }

    // Internal path navigation (/services/, /services/bill-book-printing/, /)
    if (href.startsWith('/')) {
      e.preventDefault();
      const norm = normalizePath(href);
      if (norm !== currentPath) {
        window.history.pushState({}, '', href);
        setCurrentPath(norm);
        window.scrollTo(0, 0);
      }
    }
  }, [currentPath]);

  useEffect(() => {
    document.addEventListener('click', handleInternalNavigation);
    return () => document.removeEventListener('click', handleInternalNavigation);
  }, [handleInternalNavigation]);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 4000);
  };

  const handleOpenModal = (service) => {
    setSelectedModalService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectQuote = (service) => {
    setQuoteService(service);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuickTag = (tag) => {
    setSearchTag(tag);
    showToast(`Filtering catalog by "${tag}"...`);
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine which view to render
  const renderCurrentRoute = () => {
    // 1. Service Detail Cluster Page (/services/:slug/)
    if (currentPath.startsWith('/services/') && currentPath !== '/services/') {
      const slug = currentPath.replace(/^\/services\//, '').replace(/\/$/, '');
      const cluster = getServiceClusterBySlug(slug);
      if (cluster) {
        return (
          <ServiceClusterPage
            cluster={cluster}
            onOpenServiceModal={handleOpenModal}
          />
        );
      }
    }

    // 2. Services Directory (/services/)
    if (currentPath === '/services/') {
      return (
        <ServicesDirectoryPage
          onOpenModal={handleOpenModal}
          onSelectQuote={handleSelectQuote}
        />
      );
    }

    // 3. Homepage (Default)
    return (
      <main id="main-content">
        <CinematicHero />
        <FacilitySpotlight onSelectQuickTag={handleSelectQuickTag} />
        <ServiceCatalog
          onOpenModal={handleOpenModal}
          onSelectQuote={handleSelectQuote}
          externalSearch={searchTag}
        />
        <GoogleReviews onShowToast={showToast} />
        <ProductionShowcase />
        <WhyUs />
        <ContactQuoteDesk
          selectedService={quoteService}
          onShowToast={showToast}
        />
      </main>
    );
  };

  return (
    <div className="app-layout">
      <Navbar />

      {renderCurrentRoute()}

      <Footer />

      <ServiceModal
        service={selectedModalService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Toast message={toastMessage} isVisible={isToastVisible} />
    </div>
  );
}
