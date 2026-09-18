import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { businessConfig } from '../src/data/businessConfig.js';
import { servicesData, categories } from '../src/data/servicesData.js';
import { serviceClusters } from '../src/data/serviceClustersData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templatePath = path.resolve(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

let rawBase = process.env.VITE_BASE_PATH ?? '/apmprint/';
if (!rawBase || rawBase === '') {
  rawBase = '/';
}
const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

function getAppUrl(p = '') {
  if (!p) return basePath;
  if (
    p.startsWith('http://') ||
    p.startsWith('https://') ||
    p.startsWith('mailto:') ||
    p.startsWith('tel:')
  ) {
    return p;
  }
  if (p.startsWith('#')) {
    return `${basePath}${p}`;
  }
  if (p.startsWith('/#')) {
    return `${basePath}${p.slice(1)}`;
  }
  const clean = p.startsWith('/') ? p.slice(1) : p;
  return `${basePath}${clean}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderNavbar() {
  return `
    <header class="navbar">
      <div class="container nav-container">
        <a href="${getAppUrl('/')}" class="brand-logo">
          <img
            src="${getAppUrl('images/apm-logo.svg')}"
            alt="Aggarwal Print Media Official Logo"
            class="logo-img"
            width="50"
            height="50"
          />
          <div class="logo-text">
            <span class="logo-name">${escapeHtml(businessConfig.name)}</span>
            <span class="logo-sub">${escapeHtml(businessConfig.tagline)}</span>
          </div>
        </a>

        <nav aria-label="Main Navigation">
          <ul class="nav-links">
            <li><a href="${getAppUrl('services/')}" class="nav-link">Services (32)</a></li>
            <li><a href="${getAppUrl('#google-reviews')}" class="nav-link">Google Reviews</a></li>
            <li><a href="${getAppUrl('#portfolio')}" class="nav-link">Production Showcase</a></li>
            <li><a href="${getAppUrl('#why-us')}" class="nav-link">Why APM</a></li>
            <li><a href="${getAppUrl('#contact')}" class="nav-link">Contact &amp; Quote</a></li>
            <li class="mobile-nav-cta">
              <a href="${getAppUrl('#contact')}" class="btn btn-primary" style="width: 100%; justify-content: center;">
                <i class="ri-whatsapp-line"></i> Instant WhatsApp Quote
              </a>
            </li>
          </ul>
        </nav>

        <div class="nav-actions">
          <a href="${getAppUrl('#contact')}" class="btn btn-primary nav-quote-btn">
            <i class="ri-whatsapp-line"></i>
            <span class="quote-text-full">Quote Request</span>
            <span class="quote-text-short">Quote</span>
          </a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <a href="${getAppUrl('/')}" class="brand-logo">
              <img 
                src="${getAppUrl('images/apm-logo.svg')}" 
                alt="Aggarwal Print Media Logo" 
                width="42" 
                height="42" 
                class="logo-img" 
              />
              <div class="logo-text">
                <span class="logo-name">${escapeHtml(businessConfig.name)}</span>
                <span class="logo-sub">${escapeHtml(businessConfig.tagline)}</span>
              </div>
            </a>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.8rem; line-height: 1.6;">
              Premier commercial manufacturing press delivering high-fidelity paper printing, carbonless NCR bill books, 
              corporate registers, 3D acrylic LED boards, large flex banners, and custom promotional items.
            </p>
            <p style="font-size: 0.82rem; color: var(--text-main); margin-top: 0.8rem; display: flex; align-items: center; gap: 0.4rem;">
              <i class="ri-map-pin-fill" style="color: var(--primary);"></i>
              ${escapeHtml(businessConfig.address.full)}
            </p>
          </div>

          <div class="footer-col">
            <h4>Quick Navigation</h4>
            <ul class="footer-links">
              <li><a href="${getAppUrl('services/')}">All 32 Services Directory</a></li>
              <li><a href="${getAppUrl('#google-reviews')}">Google Reviews (4.9 ★)</a></li>
              <li><a href="${getAppUrl('#portfolio')}">Press Facility &amp; Machines</a></li>
              <li><a href="${getAppUrl('#why-us')}">Why Choose APM</a></li>
              <li><a href="${getAppUrl('#contact')}">Contact &amp; Quote Desk</a></li>
              <li><a href="${getAppUrl('sitemap.xml')}" target="_blank" rel="noopener noreferrer">XML Sitemap</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Core Service Pages</h4>
            <ul class="footer-links">
              <li><a href="${getAppUrl('services/bill-book-printing/')}">Bill Book Printing</a></li>
              <li><a href="${getAppUrl('services/flex-board-printing/')}">Flex Board Printing</a></li>
              <li><a href="${getAppUrl('services/glow-sign-board/')}">3D LED &amp; Glowsign Boards</a></li>
              <li><a href="${getAppUrl('services/pamphlet-printing/')}">Pamphlet &amp; Flyer Printing</a></li>
              <li><a href="${getAppUrl('services/letterhead-printing/')}">Letterhead &amp; Stationery</a></li>
              <li><a href="${getAppUrl('services/school-id-cards-registers/')}">School ID Cards &amp; Registers</a></li>
              <li><a href="${getAppUrl('services/sticker-label-printing/')}">Sticker &amp; Label Printing</a></li>
              <li><a href="${getAppUrl('services/brochure-catalogue-printing/')}">Brochure &amp; Catalogue Printing</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Customer Support Desk</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.8rem;">
              Direct line to <strong>${escapeHtml(businessConfig.contactPerson)}</strong> for instant pricing, urgent orders &amp; prepress proofing.
            </p>
            <a
              href="https://wa.me/${businessConfig.phone.whatsappRaw}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-whatsapp"
              style="width: 100%; gap: 0.5rem; font-size: 0.88rem; padding: 0.7rem;"
            >
              <i class="ri-whatsapp-fill" style="font-size: 1.2rem;"></i> WhatsApp: ${escapeHtml(businessConfig.phone.primary)}
            </a>
            <div style="margin-top: 0.8rem; font-size: 0.82rem; color: var(--text-muted);">
              <i class="ri-mail-line"></i> ${escapeHtml(businessConfig.emails.primary)}
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; ${new Date().getFullYear()} Aggarwal Print Media (APM Print). All Rights Reserved.</div>
          <div style="display: flex; gap: 1.4rem;">
            <a href="#">Back to Top</a>
            <a href="${getAppUrl('sitemap.xml')}" target="_blank" rel="noopener noreferrer">Sitemap</a>
            <a href="${getAppUrl('robots.txt')}" target="_blank" rel="noopener noreferrer">Robots</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderBreadcrumbs(items) {
  return `
    <nav aria-label="Breadcrumb" class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="${getAppUrl('/')}">Home</a></li>
          ${items
            .map((item, index) => {
              const isLast = index === items.length - 1;
              return `
                <li class="breadcrumb-item ${isLast ? 'active' : ''}">
                  <span class="breadcrumb-separator" aria-hidden="true">/</span>
                  ${isLast || !item.url ? `<span aria-current="${isLast ? 'page' : ''}">${escapeHtml(item.label)}</span>` : `<a href="${getAppUrl(item.url)}">${escapeHtml(item.label)}</a>`}
                </li>
              `;
            })
            .join('')}
        </ol>
      </div>
    </nav>
  `;
}

function buildPageHtml({ title, description, canonicalUrl, ogImage, jsonLd, bodyContent }) {
  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = html.replace(/<meta\s+name=["']title["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="title" content="${title}" />`);

  // Replace Meta Description
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="description" content="${description}" />`);

  // Replace Canonical
  html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace OG / Twitter Title & URL
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta\s+name=["']twitter:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  if (ogImage) {
    html = html.replace(/<meta\s+property=["']og:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta property="og:image" content="${ogImage}" />`);
    html = html.replace(/<meta\s+name=["']twitter:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i, `<meta name="twitter:image" content="${ogImage}" />`);
  }

  // Inject additional JSON-LD schemas if provided
  if (jsonLd) {
    const jsonLdScripts = Array.isArray(jsonLd)
      ? jsonLd.map((schema) => `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`).join('\n')
      : `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`;
    html = html.replace('</head>', `${jsonLdScripts}\n</head>`);
  }

  // Inject rendered body into <div id="root">
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>\s*<!-- Vite React Module Entry -->/i,
    `<div id="root">\n${bodyContent}\n</div>\n<!-- Vite React Module Entry -->`
  );

  return html;
}

// 1. Pre-render Services Directory (/services/)
function prerenderServicesDirectory() {
  const dirOut = path.resolve(distDir, 'services');
  if (!fs.existsSync(dirOut)) {
    fs.mkdirSync(dirOut, { recursive: true });
  }

  const breadcrumbsHtml = renderBreadcrumbs([{ label: 'Services Directory' }]);

  const featuredCardsHtml = serviceClusters
    .map(
      (c) => `
      <a href="${getAppUrl(c.path)}" class="featured-cluster-card">
        <div class="featured-card-header">
          <span class="card-badge">${escapeHtml(c.categoryBadge)}</span>
          <span class="featured-card-arrow"><i class="ri-arrow-right-up-line"></i></span>
        </div>
        <h3 class="featured-card-title">${escapeHtml(c.h1)}</h3>
        <p class="featured-card-desc">${escapeHtml(c.subtitle)}</p>
        <div class="featured-card-tags">
          ${c.relatedKeywords.slice(0, 3).map((kw) => `<span class="featured-card-tag">${escapeHtml(kw)}</span>`).join('')}
        </div>
      </a>
    `
    )
    .join('');

  const catalogCardsHtml = servicesData
    .map(
      (s) => `
      <article class="service-card" data-category="${s.category}">
        <div>
          <div class="card-top">
            <div class="card-icon" aria-hidden="true"><i class="${s.icon}"></i></div>
            <span class="card-badge">${escapeHtml(s.badge)}</span>
          </div>
          <h3 class="service-title">${escapeHtml(s.title)}</h3>
          <p class="service-desc">${escapeHtml(s.desc)}</p>
        </div>
        <div class="card-actions">
          <a href="${getAppUrl('#contact')}" class="card-btn btn-primary"><i class="ri-whatsapp-line"></i> Quote</a>
        </div>
      </article>
    `
    )
    .join('');

  const bodyContent = `
    <div class="app-layout">
      ${renderNavbar()}
      <div class="services-directory-wrapper">
        ${breadcrumbsHtml}
        <section class="service-page-hero">
          <div class="container">
            <div class="service-hero-content">
              <div class="badge">
                <span class="pulse-dot"></span>
                <span>Complete In-House Facility</span>
              </div>
              <h1 class="service-page-h1">Commercial Printing &amp; Signage Services Directory</h1>
              <p class="service-hero-subtitle">
                Explore our 32 commercial printing, packaging, and outdoor signage manufacturing verticals produced in Sector 12, Vijay Nagar, Ghaziabad.
              </p>
              <div class="service-hero-ctas">
                <a href="#featured-services" class="btn btn-primary"><i class="ri-star-line"></i> Featured Core Services (8)</a>
                <a href="#all-services" class="btn btn-secondary"><i class="ri-grid-line"></i> Browse Full Catalog (32)</a>
                <a href="https://wa.me/${businessConfig.phone.whatsappRaw}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                  <i class="ri-whatsapp-fill"></i> Instant WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="featured-clusters-section" id="featured-services">
          <div class="container">
            <div class="section-header">
              <div class="badge"><span class="badge-dot"></span><span>High-Priority Verticals</span></div>
              <h2 class="section-title">Dedicated Service Landing Pages</h2>
              <p class="section-subtitle">Detailed technical specifications, material selections, and order guidelines for our most in-demand services.</p>
            </div>
            <div class="featured-clusters-grid">
              ${featuredCardsHtml}
            </div>
          </div>
        </section>

        <section class="services-section" id="all-services">
          <div class="container">
            <div class="section-header">
              <div class="badge"><span class="badge-dot"></span><span>Comprehensive Press Verticals</span></div>
              <h2 class="section-title">All 32 Commercial Services</h2>
              <p class="section-subtitle">Offset printing, commercial stationery, outdoor flex, 3D acrylic LED boards, and promotional gifting.</p>
            </div>
            <div class="services-grid">
              ${catalogCardsHtml}
            </div>
          </div>
        </section>
      </div>
      ${renderFooter()}
    </div>
  `;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://apmprint.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://apmprint.in/services/' }
    ]
  };

  const html = buildPageHtml({
    title: 'Commercial Printing & Signage Services Directory | APM Print',
    description:
      'Explore 32 commercial printing, packaging & outdoor signage services in Vijay Nagar, Ghaziabad. Offset press, NCR bill books, flex boards & LED signage. Call +91 95820 23022.',
    canonicalUrl: 'https://apmprint.in/services/',
    ogImage: 'https://apmprint.in/images/komori_offset_press.jpg',
    jsonLd: breadcrumbSchema,
    bodyContent
  });

  fs.writeFileSync(path.resolve(dirOut, 'index.html'), html, 'utf-8');
  console.log('✓ Pre-rendered /services/index.html');
}

// 2. Pre-render 8 Service Clusters (/services/:slug/)
function prerenderClusterPages() {
  serviceClusters.forEach((cluster) => {
    const dirOut = path.resolve(distDir, 'services', cluster.slug);
    if (!fs.existsSync(dirOut)) {
      fs.mkdirSync(dirOut, { recursive: true });
    }

    const breadcrumbsHtml = renderBreadcrumbs([
      { label: 'Services', url: '/services/' },
      { label: cluster.h1 }
    ]);

    const includedServices = servicesData.filter((s) => cluster.serviceIds.includes(s.id));
    const relatedClusters = serviceClusters.filter((c) => cluster.relatedClusterSlugs.includes(c.slug));

    const includedServicesHtml = includedServices
      .map(
        (s) => `
        <article class="cluster-service-card">
          <div class="cluster-card-top">
            <div class="card-icon" aria-hidden="true"><i class="${s.icon}"></i></div>
            <span class="card-badge">${escapeHtml(s.badge)}</span>
          </div>
          <h3 class="cluster-service-title">${escapeHtml(s.title)}</h3>
          <p class="cluster-service-desc">${escapeHtml(s.desc)}</p>
          <div class="cluster-specs-list">
            <span class="specs-heading">Key Specifications:</span>
            <ul>
              ${s.specs.map((spec) => `<li><i class="ri-checkbox-circle-fill" style="color: var(--primary);"></i><span>${escapeHtml(spec)}</span></li>`).join('')}
            </ul>
          </div>
          <div class="cluster-card-actions">
            <a href="https://wa.me/${businessConfig.phone.whatsappRaw}?text=${encodeURIComponent(`Hello Sunil ji! I would like to inquire about: ${s.title}`)}" target="_blank" rel="noopener noreferrer" class="card-btn btn-primary">
              <i class="ri-whatsapp-line"></i> Quote
            </a>
          </div>
        </article>
      `
      )
      .join('');

    const specsTableHtml = cluster.specifications
      .map(
        (spec) => `
        <div class="spec-table-row">
          <div class="spec-label">
            <i class="ri-check-double-line" style="color: var(--primary);"></i>
            <span>${escapeHtml(spec.label)}</span>
          </div>
          <div class="spec-value">${escapeHtml(spec.value)}</div>
        </div>
      `
      )
      .join('');

    const useCasesHtml = cluster.suitableFor
      .map(
        (item) => `
        <div class="usecase-item">
          <i class="ri-building-line usecase-icon" aria-hidden="true"></i>
          <span>${escapeHtml(item)}</span>
        </div>
      `
      )
      .join('');

    const timelineHtml = cluster.orderingSteps
      .map(
        (step) => `
        <div class="timeline-step">
          <div class="step-num">${step.step}</div>
          <div class="step-content">
            <h4>${escapeHtml(step.title)}</h4>
            <p>${escapeHtml(step.desc)}</p>
          </div>
        </div>
      `
      )
      .join('');

    const faqsHtml = cluster.faqs
      .map(
        (faq) => `
        <div class="faq-card expanded">
          <div class="faq-question">
            <span>${escapeHtml(faq.question)}</span>
          </div>
          <div class="faq-answer">
            <p>${escapeHtml(faq.answer)}</p>
          </div>
        </div>
      `
      )
      .join('');

    const relatedCardsHtml = relatedClusters
      .map(
        (rel) => `
        <a href="${getAppUrl(rel.path)}" class="related-cluster-card">
          <div class="related-card-badge">${escapeHtml(rel.categoryBadge)}</div>
          <h3 class="related-card-title">${escapeHtml(rel.h1)}</h3>
          <p class="related-card-desc">${escapeHtml(rel.subtitle)}</p>
          <span class="related-card-link">Explore Service <i class="ri-arrow-right-line"></i></span>
        </a>
      `
      )
      .join('');

    const bodyContent = `
      <div class="app-layout">
        ${renderNavbar()}
        <div class="service-page-wrapper">
          ${breadcrumbsHtml}
          <section class="service-page-hero">
            <div class="container">
              <div class="service-hero-content">
                <div class="badge"><span class="pulse-dot"></span><span>${escapeHtml(cluster.categoryBadge)}</span></div>
                <h1 class="service-page-h1">${escapeHtml(cluster.h1)}</h1>
                <p class="service-hero-subtitle">${escapeHtml(cluster.subtitle)}</p>
                <div class="service-hero-ctas">
                  <a href="https://wa.me/${businessConfig.phone.whatsappRaw}?text=${encodeURIComponent(`Hello Sunil ji! I would like to inquire about: ${cluster.h1}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <i class="ri-whatsapp-line"></i> Instant WhatsApp Quote
                  </a>
                  <a href="tel:${businessConfig.phone.primaryRaw}" class="btn btn-secondary">
                    <i class="ri-phone-line"></i> Call ${escapeHtml(businessConfig.phone.primary)}
                  </a>
                  <a href="#specifications" class="btn btn-secondary"><i class="ri-file-list-3-line"></i> View Specifications</a>
                </div>
                <div class="service-quick-tags">
                  <span class="quick-tags-label">Related Verticals:</span>
                  ${cluster.relatedKeywords.map((kw) => `<span class="service-quick-pill">${escapeHtml(kw)}</span>`).join('')}
                </div>
              </div>
            </div>
          </section>

          <section class="service-overview-section">
            <div class="container">
              <div class="overview-card">
                <div class="section-header" style="text-align: left; margin-bottom: 1.5rem;">
                  <div class="badge" style="width: fit-content;"><span class="badge-dot"></span><span>Press Capability Overview</span></div>
                  <h2 class="section-title" style="font-size: 1.85rem;">Commercial Production &amp; Finishing in Ghaziabad</h2>
                </div>
                <p class="overview-text">${escapeHtml(cluster.overview)}</p>
              </div>

              <div class="section-header" style="margin-top: 3.5rem;">
                <div class="badge"><span class="badge-dot"></span><span>In-House Manufacturing Verticals</span></div>
                <h2 class="section-title">Specific Capabilities Covered</h2>
                <p class="section-subtitle">Detailed technical specifications manufactured at our Sector 12, Vijay Nagar facility.</p>
              </div>
              <div class="cluster-services-grid">
                ${includedServicesHtml}
              </div>
            </div>
          </section>

          <section class="service-specs-section" id="specifications">
            <div class="container">
              <div class="section-header">
                <div class="badge"><span class="badge-dot"></span><span>Technical Standards</span></div>
                <h2 class="section-title">Substrates, Formats &amp; Finishing</h2>
                <p class="section-subtitle">Authentic factory-direct specifications maintained across all production runs.</p>
              </div>
              <div class="specs-table-grid">
                ${specsTableHtml}
              </div>
            </div>
          </section>

          <section class="service-usecases-section">
            <div class="container">
              <div class="usecases-grid">
                <div class="usecases-info">
                  <div class="badge" style="width: fit-content;"><span class="badge-dot"></span><span>Target Applications</span></div>
                  <h2 style="font-size: 1.9rem; color: var(--text-main); margin-top: 0.8rem; line-height: 1.25;">Who This Service Is Built For</h2>
                  <p style="color: var(--text-muted); font-size: 0.96rem; margin-top: 0.8rem; line-height: 1.6;">
                    Our commercial printing equipment and finish options serve diverse business operations across Ghaziabad, Vijay Nagar, and Delhi-NCR.
                  </p>
                  <div class="usecase-items">
                    ${useCasesHtml}
                  </div>
                </div>

                <div class="ordering-process-card">
                  <div class="badge" style="width: fit-content;"><span class="badge-dot"></span><span>Simple 3-Step Process</span></div>
                  <h3 style="font-size: 1.35rem; color: var(--text-main); margin: 0.6rem 0 1.2rem;">How to Order from APM Print</h3>
                  <div class="process-timeline">
                    ${timelineHtml}
                  </div>
                  <div style="margin-top: 1.4rem;">
                    <a href="https://wa.me/${businessConfig.phone.whatsappRaw}?text=${encodeURIComponent(`Hello Sunil ji! I would like to inquire about ordering: ${cluster.h1}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%; justify-content: center;">
                      <i class="ri-whatsapp-fill"></i> Send Requirements on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="service-faq-section">
            <div class="container">
              <div class="section-header">
                <div class="badge"><span class="badge-dot"></span><span>Common Questions</span></div>
                <h2 class="section-title">Frequently Asked Questions</h2>
                <p class="section-subtitle">Clear answers regarding paper weights, formatting, numbering, and press options.</p>
              </div>
              <div class="faq-accordion">
                ${faqsHtml}
              </div>
            </div>
          </section>

          <section class="service-related-section">
            <div class="container">
              <div class="section-header">
                <div class="badge"><span class="badge-dot"></span><span>Related Printing Services</span></div>
                <h2 class="section-title">Frequently Ordered Together</h2>
                <p class="section-subtitle">Explore complementary commercial print verticals manufactured at our Ghaziabad facility.</p>
              </div>
              <div class="related-clusters-grid">
                ${relatedCardsHtml}
              </div>
            </div>
          </section>

          <section class="service-cta-banner">
            <div class="container">
              <div class="cta-banner-card">
                <h2>Ready to Place Your Order for ${escapeHtml(cluster.h1)}?</h2>
                <p>
                  Connect directly with <strong>${escapeHtml(businessConfig.contactPerson)}</strong> at our Sector 12 Vijay Nagar press.
                  Get instant written pricing, paper recommendations, and turnaround details within minutes.
                </p>
                <div class="cta-banner-actions">
                  <a href="https://wa.me/${businessConfig.phone.whatsappRaw}?text=${encodeURIComponent(`Hello Sunil ji! I would like a quote for ${cluster.h1}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.85rem 1.8rem;">
                    <i class="ri-whatsapp-fill" style="font-size: 1.25rem;"></i> Direct WhatsApp Quote
                  </a>
                  <a href="tel:${businessConfig.phone.primaryRaw}" class="btn btn-secondary" style="padding: 0.85rem 1.6rem;">
                    <i class="ri-phone-line"></i> Call ${escapeHtml(businessConfig.phone.primary)}
                  </a>
                  <a href="${getAppUrl('services/')}" class="btn btn-secondary" style="padding: 0.85rem 1.6rem;">
                    <i class="ri-grid-fill"></i> View All 32 Services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        ${renderFooter()}
      </div>
    `;

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://apmprint.in/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://apmprint.in/services/' },
        { '@type': 'ListItem', position: 3, name: cluster.h1, item: cluster.url }
      ]
    };

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: cluster.h1,
      serviceType: cluster.primaryKeyword,
      description: cluster.metaDescription,
      provider: {
        '@type': 'PrintingService',
        name: businessConfig.name,
        telephone: businessConfig.phone.primaryRaw,
        address: {
          '@type': 'PostalAddress',
          streetAddress: businessConfig.address.street,
          addressLocality: businessConfig.address.city,
          addressRegion: businessConfig.address.state,
          postalCode: businessConfig.address.postalCode,
          addressCountry: 'IN'
        }
      },
      areaServed: ['Ghaziabad', 'Vijay Nagar', 'Noida', 'Delhi NCR']
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: cluster.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    };

    const html = buildPageHtml({
      title: cluster.title,
      description: cluster.metaDescription,
      canonicalUrl: cluster.url,
      ogImage: 'https://apmprint.in/images/komori_offset_press.jpg',
      jsonLd: [breadcrumbSchema, serviceSchema, faqSchema],
      bodyContent
    });

    fs.writeFileSync(path.resolve(dirOut, 'index.html'), html, 'utf-8');
    console.log(`✓ Pre-rendered /services/${cluster.slug}/index.html`);
  });
}

// 3. Update root index.html with pre-rendered homepage semantic content
function prerenderHomepage() {
  const catalogCardsHtml = servicesData
    .map(
      (s) => `
      <article class="service-card" data-category="${s.category}">
        <div>
          <div class="card-top">
            <div class="card-icon" aria-hidden="true"><i class="${s.icon}"></i></div>
            <span class="card-badge">${escapeHtml(s.badge)}</span>
          </div>
          <h3 class="service-title">${escapeHtml(s.title)}</h3>
          <p class="service-desc">${escapeHtml(s.desc)}</p>
        </div>
        <div class="card-actions">
          <a href="/#contact" class="card-btn btn-primary"><i class="ri-whatsapp-line"></i> Quote</a>
        </div>
      </article>
    `
    )
    .join('');

  const bodyContent = `
    <div class="app-layout">
      ${renderNavbar()}
      <main id="main-content">
        <section class="cinematic-hero" id="home">
          <div class="interactive-canvas-container" aria-hidden="true">
            <canvas class="dotted-canvas"></canvas>
          </div>
          <div class="container cinematic-container">
            <div class="cinematic-content">
              <div class="cinematic-category-pill">
                <span class="cinematic-pill-dot"></span>
                <i class="ri-printer-line"></i>
                <span>Stationery &amp; Registers</span>
              </div>
              <h1 class="cinematic-static-h1">Commercial Printing &amp; Signage in Ghaziabad</h1>
              <div class="cinematic-typing-headline" aria-label="Commercial printing services">
                <span class="typing-text">Bill Book</span>
                <span class="typing-cursor" aria-hidden="true">|</span>
              </div>
              <div class="cinematic-cta-group">
                <a href="${getAppUrl('#contact')}" class="btn btn-primary cinematic-btn-glow">
                  <i class="ri-whatsapp-line"></i> Instant WhatsApp Quote
                </a>
                <a href="${getAppUrl('services/')}" class="btn btn-secondary">
                  <i class="ri-grid-fill"></i> Browse All 32 Services
                </a>
                <a href="${getAppUrl('#portfolio')}" class="btn btn-secondary">
                  <i class="ri-building-line"></i> Machine Facility
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="facility-spotlight" id="facility-showcase">
          <div class="container hero-grid">
            <div class="hero-content">
              <div class="badge">
                <span class="pulse-dot"></span>
                <span>Sector 12, Vijay Nagar, Ghaziabad</span>
              </div>
              <h2 class="facility-title">Commercial <span>Manufacturing</span> &amp; Offset Press Facility</h2>
              <p class="hero-subtitle">
                Manufacturing press delivering carbonless NCR duplicate bill books, executive letterheads,
                3D acrylic LED signboards, heavy-duty Star Flex banners, and corporate gifts. Supervised on-site by
                <strong>${escapeHtml(businessConfig.contactPerson)}</strong>.
              </p>
              <div class="hero-cta">
                <a href="${getAppUrl('#contact')}" class="btn btn-primary" style="padding: 0.9rem 1.8rem;">
                  <i class="ri-whatsapp-line"></i> Direct Factory Quote
                </a>
                <a href="${getAppUrl('services/')}" class="btn btn-secondary" style="padding: 0.9rem 1.6rem;">
                  <i class="ri-grid-fill"></i> View All 32 Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="services-section" id="services">
          <div class="container">
            <div class="section-header">
              <div class="badge"><span class="badge-dot"></span><span>Comprehensive Press Verticals</span></div>
              <h2 class="section-title">Our 32 Commercial Printing &amp; Branding Services</h2>
              <p class="section-subtitle">
                From daily GST tax invoices and student identity cards to large-format outdoor flex hoardings and LED signage.
              </p>
            </div>
            <div class="services-grid">
              ${catalogCardsHtml}
            </div>
          </div>
        </section>

        <section class="contact-section" id="contact">
          <div class="container">
            <div class="contact-grid">
              <div class="contact-info">
                <div class="badge" style="width: fit-content;"><span class="badge-dot"></span><span>Official Sales Desk</span></div>
                <h2 style="font-size: 2.2rem; color: var(--text-main); line-height: 1.2;">Request an Instant Custom Quote</h2>
                <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.6;">
                  Connect directly with <strong>${escapeHtml(businessConfig.contactPerson)}</strong> at our Sector 12 Vijay Nagar press.
                  Submit your job specifications online or send an instant WhatsApp message to get written pricing within minutes.
                </p>
                <div class="info-item">
                  <div class="info-icon" aria-hidden="true"><i class="ri-map-pin-2-fill"></i></div>
                  <div>
                    <h3 style="font-size: 0.95rem; margin-bottom: 0.2rem; color: var(--text-main);">Press Location &amp; Workshop</h3>
                    <p style="font-size: 0.88rem; color: var(--text-muted);">${escapeHtml(businessConfig.address.full)}</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon" aria-hidden="true"><i class="ri-whatsapp-fill" style="color: var(--whatsapp-green);"></i></div>
                  <div>
                    <h3 style="font-size: 0.95rem; margin-bottom: 0.2rem; color: var(--text-main);">Direct WhatsApp &amp; Call Desk</h3>
                    <p style="font-size: 0.88rem;">
                      <a href="tel:${businessConfig.phone.primaryRaw}" style="color: var(--primary); font-weight: 700;">${escapeHtml(businessConfig.phone.primary)}</a>
                      <span style="color: var(--text-dim);">(${escapeHtml(businessConfig.contactPerson)})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      ${renderFooter()}
    </div>
  `;

  const html = buildPageHtml({
    title: 'Commercial Printing Press & Signage in Ghaziabad | APM Print',
    description:
      'Commercial printing press in Sector 12, Vijay Nagar, Ghaziabad. Offset printing, NCR bill books, flex banners, LED sign boards & corporate stationery. Call +91 95820 23022.',
    canonicalUrl: 'https://apmprint.in/',
    ogImage: 'https://apmprint.in/images/komori_offset_press.jpg',
    bodyContent
  });

  fs.writeFileSync(templatePath, html, 'utf-8');
  console.log('✓ Pre-rendered /index.html (Homepage)');
}

// Execute pre-render pipeline
console.log('Starting SEO Static Pre-rendering for APM Print...');
prerenderHomepage();
prerenderServicesDirectory();
prerenderClusterPages();

// Create 404.html from root index.html
fs.copyFileSync(templatePath, path.resolve(distDir, '404.html'));
console.log('✓ Created /404.html fallback');

// Ensure CNAME exists in dist
const cnameSrc = path.resolve(rootDir, 'public', 'CNAME');
if (fs.existsSync(cnameSrc)) {
  fs.copyFileSync(cnameSrc, path.resolve(distDir, 'CNAME'));
  console.log('✓ Verified /CNAME in dist');
}

console.log('✓ Static pre-rendering completed successfully!');
