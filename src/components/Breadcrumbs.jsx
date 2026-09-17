import React from 'react';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                <span className="breadcrumb-separator" aria-hidden="true">/</span>
                {isLast || !item.url ? (
                  <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                ) : (
                  <a href={item.url}>{item.label}</a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
