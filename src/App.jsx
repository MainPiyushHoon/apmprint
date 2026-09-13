import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCatalog from './components/ServiceCatalog';
import ServiceModal from './components/ServiceModal';
import GoogleReviews from './components/GoogleReviews';
import ProductionShowcase from './components/ProductionShowcase';
import WhyUs from './components/WhyUs';
import ContactQuoteDesk from './components/ContactQuoteDesk';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [selectedModalService, setSelectedModalService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

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
  };

  return (
    <div className="app-layout">
      <Navbar />

      <main id="main-content">
        <Hero />
        <ServiceCatalog
          onOpenModal={handleOpenModal}
          onSelectQuote={handleSelectQuote}
        />
        <GoogleReviews onShowToast={showToast} />
        <ProductionShowcase />
        <WhyUs />
        <ContactQuoteDesk
          selectedService={quoteService}
          onShowToast={showToast}
        />
      </main>

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
