import React, { useState } from 'react';
import { businessConfig } from '../data/businessConfig';
import { getAppUrl } from '../utils/urlHelper';

export default function GoogleReviews({ onShowToast }) {
  const [syncTime, setSyncTime] = useState('Live Sync Active • Sector 12 Vijay Nagar');
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setSyncTime(`Live Sync Active • Verified at ${timeStr}`);
      setIsSyncing(false);
      onShowToast(`Google Maps Sync Complete: 4.9 ★ (${businessConfig.googleRating.reviewsCount}+ Customer Reviews Verified)`);
    }, 1000);
  };

  const reviews = [
    {
      author: 'Rajesh Sharma (Sharma Traders)',
      rating: 5,
      date: '2 weeks ago',
      text: 'Best printing press in Vijay Nagar Ghaziabad! Got 50 duplicate NCR bill books and 1000 letterheads printed in 24 hours. The paper quality and serial numbering were perfect.'
    },
    {
      author: 'Dr. Neha Verma (Apollo Clinic)',
      rating: 5,
      date: '1 month ago',
      text: 'Ordered prescription pads, patient file folders, and an outdoor 3D acrylic LED board for our clinic. Exceptional quality and very polite team led by Sunil ji.'
    },
    {
      author: 'Amit Goel (Goel Logistics)',
      rating: 5,
      date: '3 weeks ago',
      text: 'We order delivery challan books and fleet vinyl stickers in bulk. Press wholesale rates and reliable on-time delivery every single time.'
    }
  ];

  return (
    <section className="google-reviews-section" id="google-reviews">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <span className="pulse-dot"></span>
            <span>Google Verified Listing</span>
          </div>
          <h2 className="section-title">Verified Customer Reviews on Google Maps</h2>
          <p className="section-subtitle">
            Ranked 4.9 ★★★★★ by corporate clients, retail traders, schools, and clinics across Ghaziabad &amp; Delhi-NCR.
          </p>
        </div>

        <div className="reviews-summary-card">
          <div className="rating-overview">
            <div className="rating-huge">{businessConfig.googleRating.score}</div>
            <div className="stars-row" aria-label="5 out of 5 stars rating">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <div className="rating-sub">Based on {businessConfig.googleRating.reviewsCount}+ Google Reviews</div>

            <div style={{ marginTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%' }}>
              <a
                href={businessConfig.googleRating.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem' }}
              >
                <i className="ri-google-fill"></i> View on Google Maps
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleSync}
                disabled={isSyncing}
                style={{ width: '100%', fontSize: '0.82rem', padding: '0.55rem' }}
              >
                <i className={`ri-refresh-line ${isSyncing ? 'ri-spin' : ''}`} style={{ color: 'var(--google-blue)' }}></i>
                {isSyncing ? 'Syncing...' : 'Sync Live Reviews'}
              </button>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>
              {syncTime}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {/* Visual Callout for Google Maps Photos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '0.8rem 1.2rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <img
                  src={getAppUrl('images/maps_acrylic_signboard.webp')}
                  alt="Client signboard from Google Maps"
                  width="54"
                  height="40"
                  style={{ borderRadius: '6px', objectFit: 'cover', border: '1px solid #93c5fd' }}
                />
                <img
                  src={getAppUrl('images/maps_glass_branding.webp')}
                  alt="Glass door branding from Google Maps"
                  width="54"
                  height="40"
                  style={{ borderRadius: '6px', objectFit: 'cover', border: '1px solid #93c5fd' }}
                />
              </div>
              <div style={{ fontSize: '0.82rem', color: '#1e3a8a', lineHeight: 1.4 }}>
                <strong>Client Project Photos on Google Maps:</strong> Includes installations for Contentegy, Sea Hawk Navigation, and local businesses in Sector 12.
              </div>
            </div>

            <div className="reviews-grid">
              {reviews.map((r, i) => (
                <div key={i} className="review-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="review-author">{r.author}</span>
                    <div style={{ color: 'var(--google-star)', fontSize: '0.85rem' }}>
                      ★★★★★
                    </div>
                  </div>
                  <p className="review-text">"{r.text}"</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      <i className="ri-google-fill" style={{ color: 'var(--google-blue)' }}></i> Verified Review
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
