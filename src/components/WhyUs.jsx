import React from 'react';

export default function WhyUs() {
  const features = [
    {
      icon: 'ri-flashlight-fill',
      title: 'Fast 24-Hour Turnaround',
      desc: 'Urgent express runs available for pamphlets, visiting cards, roll-up standees, and duplicate bill books.'
    },
    {
      icon: 'ri-stack-fill',
      title: 'All 32 Services In-House',
      desc: 'No middle-men or outsourcing. Commercial offset printing, solvent flex signage, laser cutting, and gift printing under one roof.'
    },
    {
      icon: 'ri-price-tag-2-fill',
      title: 'Press Direct Wholesale Rates',
      desc: 'Competitive manufacturing rates for commercial agencies, schools, institutions, and high-volume corporate contracts.'
    },
    {
      icon: 'ri-file-shield-fill',
      title: 'Free Artwork Prepress Audit',
      desc: 'Our prepress team inspects your artwork resolution, CMYK color profiles, bleeds, and safe margins before printing.'
    }
  ];

  return (
    <section className="features-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Why Aggarwal Print Media</span>
          </div>
          <h2 className="section-title">Built for Quality, Speed & Reliability</h2>
          <p className="section-subtitle">
            Delivering trusted commercial printing solutions across Sector 12 Vijay Nagar, Ghaziabad, and Delhi-NCR for over a decade.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <i className={f.icon}></i>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
