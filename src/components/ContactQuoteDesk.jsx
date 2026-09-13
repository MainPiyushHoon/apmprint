import React, { useState } from 'react';
import { businessConfig } from '../data/businessConfig';
import { servicesData } from '../data/servicesData';

export default function ContactQuoteDesk({ selectedService, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService ? selectedService.title : 'Bill Book',
    message: ''
  });

  // Update selected service if parent passes it
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService.title }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim() || 'Valued Customer';
    const phone = formData.phone.trim() || 'Not specified';
    const service = formData.service;
    const specs = formData.message.trim() || 'Standard job specifications';

    const text = encodeURIComponent(
      `Hello Aggarwal Print Media (Sunil Bansal Ji)!\nI would like to request a custom quote for commercial printing:\n\n` +
      `👤 Name/Company: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📦 Required Service: ${service}\n` +
      `📝 Job Details: ${specs}\n\n` +
      `Please provide best pricing, paper options, and turnaround time. Thank you!`
    );

    window.open(`https://wa.me/${businessConfig.phone.whatsappRaw}?text=${text}`, '_blank');
    onShowToast('Opening WhatsApp with your order details...');
  };

  const handleWebFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and contact phone number.');
      return;
    }

    onShowToast(`Thank you ${formData.name}! Your quote request for ${formData.service} has been received. Our desk will contact you shortly.`);
    setFormData({
      name: '',
      phone: '',
      service: 'Bill Book',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="badge" style={{ width: 'fit-content' }}>
              <span className="badge-dot"></span>
              <span>Official Sales Desk</span>
            </div>

            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: 1.2 }}>
              Request an Instant Custom Quote
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              Connect directly with <strong>{businessConfig.contactPerson}</strong> at our Sector 12 Vijay Nagar press. 
              Submit your job specifications online or send an instant WhatsApp message to get written pricing within minutes.
            </p>

            <div className="info-item">
              <div className="info-icon" aria-hidden="true">
                <i className="ri-map-pin-2-fill"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>Press Location & Workshop</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {businessConfig.address.full}
                </p>
                <a 
                  href={businessConfig.googleRating.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.2rem' }}
                >
                  <i className="ri-direction-line"></i> Open in Google Maps
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" aria-hidden="true">
                <i className="ri-whatsapp-fill" style={{ color: 'var(--whatsapp-green)' }}></i>
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>Direct WhatsApp & Call Desk</h3>
                <p style={{ fontSize: '0.88rem' }}>
                  <a href={`tel:${businessConfig.phone.primaryRaw}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>
                    {businessConfig.phone.primary}
                  </a>{' '}
                  <span style={{ color: 'var(--text-dim)' }}>({businessConfig.contactPerson})</span>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" aria-hidden="true">
                <i className="ri-mail-fill"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>Email & Artwork Submissions</h3>
                <p style={{ fontSize: '0.88rem' }}>
                  <a href={`mailto:${businessConfig.emails.primary}`} style={{ color: 'var(--primary)', fontWeight: 600 }}>
                    {businessConfig.emails.primary}
                  </a>
                  <br />
                  <a href={`mailto:${businessConfig.emails.secondary}`} style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                    {businessConfig.emails.secondary}
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" aria-hidden="true">
                <i className="ri-time-fill"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.2rem', color: 'var(--text-main)' }}>Operating Hours</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {businessConfig.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Form Box */}
          <div className="contact-form-box">
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.3rem', color: 'var(--text-main)' }}>
              Send Job Details
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.4rem' }}>
              Fill in your order requirements to generate an instant WhatsApp message or submit via web form.
            </p>

            <form onSubmit={handleWebFormSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name / Business Name *</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="e.g. Vikram Sharma (Sharma Enterprises)"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="e.g. 95820 23022"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="service">Select Service Required (32 Options)</label>
                <select
                  id="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Job Specifications & Quantity</label>
                <textarea
                  id="message"
                  className="form-input"
                  placeholder="Specify required quantity, paper GSM, size (e.g. A4, 10x12 ft), lamination, or custom requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginTop: '0.8rem' }}>
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  <i className="ri-whatsapp-fill" style={{ fontSize: '1.25rem' }}></i> Send Quote Request on WhatsApp
                </button>

                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.8rem', fontSize: '0.88rem' }}
                >
                  <i className="ri-send-plane-fill"></i> Submit Web Form Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
