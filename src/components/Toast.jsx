import React from 'react';

export default function Toast({ message, isVisible }) {
  return (
    <div className={`toast ${isVisible ? 'show' : ''}`} role="status" aria-live="polite">
      <i className="ri-checkbox-circle-fill" style={{ color: '#4ade80' }}></i>
      <span>{message}</span>
    </div>
  );
}
