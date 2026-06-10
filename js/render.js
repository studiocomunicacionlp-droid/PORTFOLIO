/**
 * ============================================================
 *  render.js — Lee CONTENT desde texts.js e inyecta en el DOM
 *  No tocar si sólo querés cambiar textos — editá texts.js
 * ============================================================
 */
(function () {
  const C = CONTENT;

  // ── HELPERS ────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const setText  = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };
  const setAttr  = (id, attr, val) => { const el = $(id); if (el) el[attr] = val; };
  const setHref  = (id, href) => { const el = $(id); if (el) el.href = href; };

  function photoOrPlaceholder(src, alt, cssClass, svgIcon) {
    if (src && src !== 'images/hero-photo.jpg' && src !== 'images/about-photo.jpg') {
      return `<img src="${src}" alt="${alt}" class="${cssClass}" loading="lazy" onerror="this.parentElement.innerHTML=placeholderSVG('${alt}')">`;
    }
    return `<div class="${cssClass}-placeholder">
      ${svgIcon || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'}
      <span>Tu foto aquí</span>
    </div>`;
  }

  // ── META / SEO ─────────────────────────────────────────────
  $('page-title').textContent  = C.meta.title;
  $('meta-desc').content       = C.meta.description;
  $('meta-keys').content       = C.meta.keywords;
  $('meta-author').content     = C.meta.author;
  $('og-title').content        = C.meta.title;
  $('og-description').content  = C.meta.description;

  // ── HERO ──────────────────────────────────────────────────
  const hero = C.hero;
  setText('hero-badge-text', hero.badge);
  setText('hero-name', hero.name);
  setText('hero-profession', hero.profession);
  setText('hero-tagline', hero.tagline);

  // CTA buttons
  const ctaPrimary = $('hero-cta-primary');
  if (ctaPrimary) ctaPrimary.querySelector('span').textContent = hero.cta_primary;
  const ctaSecondary = $('hero-cta-secondary');
  if (ctaSecondary) ctaSecondary.querySelector('span').textContent = hero.cta_secondary;

  // Hero photo
  const heroPhotoC = $('hero-photo-container');
  if (heroPhotoC) heroPhotoC.innerHTML = photoOrPlaceholder(hero.photo, hero.photo_alt, 'hero-photo', '');

  // Hero stats (usando las métricas)
  const heroStats = $('hero-stats');
  if (heroStats && C.metrics && C.metrics.items) {
    heroStats.innerHTML = C.metrics.items.slice(0, 3).map(m => `
      <div class="hero-stat-item">
        <div class="hero-stat-value">${m.value}${m.suffix}</div>
        <div class="hero-stat-label">${m.label}</div>
      </div>
    `).join('');
  }

  // ── ABOUT ─────────────────────────────────────────────────
  const about = C.about;
  setText('about-badge', about.badge);
  setText('about-headline', about.headline);
  setText('about-story', about.story);
  setText('about-story2', about.story2);

  // About photo
  const aboutPhotoC = $('about-photo-container');
  if (aboutPhotoC) aboutPhotoC.innerHTML = photoOrPlaceholder(about.photo, about.photo_alt, 'about-photo',
    '<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  );

  // Diferenciales
  const diffGrid = $('about-differentials');
  if (diffGrid) {
    diffGrid.innerHTML = about.differentials.map(d => `
      <div class="diff-card reveal">
        <div class="diff-icon">${d.icon}</div>
        <div class="diff-title">${d.title}</div>
        <div class="diff-desc">${d.desc}</div>
      </div>
    `).join('');
  }

  // Experiencia
  const expList = $('about-experience-list');
  if (expList) {
    expList.innerHTML = about.experience.map(e => `
      <div class="exp-item">
        <span class="exp-year">${e.year}</span>
        <div>
          <div class="exp-role">${e.role}</div>
          <div class="exp-company">${e.company}</div>
        </div>
      </div>
    `).join('');
  }

  // ── SERVICES ──────────────────────────────────────────────
  const svc = C.services;
  setText('services-badge', svc.badge);
  setText('services-headline', svc.headline);
  setText('services-subtitle', svc.subtitle);

  const svcGrid = $('services-grid');
  if (svcGrid) {
    svcGrid.innerHTML = svc.items.map((s, i) => `
      <div class="service-card reveal" style="transition-delay:${i * 0.08}s">
        <div class="service-icon">${s.icon}</div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
        <ul class="service-features">
          ${s.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="service-price">${s.price}</div>
      </div>
    `).join('');
  }

  // ── PORTFOLIO ─────────────────────────────────────────────
  const port = C.portfolio;
  setText('portfolio-badge', port.badge);
  setText('portfolio-headline', port.headline);
  setText('portfolio-subtitle', port.subtitle);

  // Filters
  const filters = $('portfolio-filters');
  if (filters) {
    filters.innerHTML = port.categories.map((cat, i) => `
      <button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    `).join('');
  }

  // Grid items
  const portGrid = $('portfolio-grid');
  if (portGrid) {
    portGrid.innerHTML = port.items.map((p, i) => {
      const imgHTML = `
        <div class="portfolio-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="portfolio-placeholder" style="display:none;position:absolute;inset:0;">Sin imagen</div>
          <div class="portfolio-overlay">
            <a href="${p.link}" class="portfolio-link" target="_blank" rel="noopener">
              Ver proyecto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      `;
      return `
        <div class="portfolio-item reveal" data-category="${p.category}" style="transition-delay:${i * 0.07}s">
          ${imgHTML}
          <div class="portfolio-info">
            <div class="portfolio-tags">${p.tags.map(t => `<span class="portfolio-tag">${t}</span>`).join('')}</div>
            <h3 class="portfolio-title">${p.title}</h3>
            <p class="portfolio-desc">${p.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  // ── TESTIMONIALS ──────────────────────────────────────────
  const test = C.testimonials;
  setText('testimonials-badge', test.badge);
  setText('testimonials-headline', test.headline);

  const track = $('testimonials-track');
  const dotsContainer = $('slider-dots');
  if (track) {
    track.innerHTML = test.items.map(t => {
      const avatarHTML = `<img src="${t.avatar}" alt="${t.name}" class="test-avatar"
        onerror="this.outerHTML='<div class=test-avatar-placeholder>👤</div>'">`;
      const stars = Array(t.stars).fill('<span>★</span>').join('');
      return `
        <div class="testimonial-card">
          <div class="test-stars">${stars}</div>
          <p class="test-text">${t.text}</p>
          <div class="test-author">
            ${avatarHTML}
            <div>
              <div class="test-name">${t.name}</div>
              <div class="test-role">${t.role}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
  if (dotsContainer) {
    dotsContainer.innerHTML = test.items.map((_, i) =>
      `<div class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
    ).join('');
  }

  // ── METRICS ───────────────────────────────────────────────
  const met = C.metrics;
  setText('metrics-badge', met.badge);
  setText('metrics-headline', met.headline);

  const metGrid = $('metrics-grid');
  if (metGrid) {
    metGrid.innerHTML = met.items.map(m => `
      <div class="metric-item reveal">
        <div class="metric-value">
          <span class="metric-number" data-target="${m.value}">0</span>${m.suffix}
        </div>
        <div class="metric-label">${m.label}</div>
      </div>
    `).join('');
  }

  // ── CONTACT ───────────────────────────────────────────────
  const con = C.contact;
  setText('contact-badge', con.badge);
  setText('contact-headline', con.headline);
  setText('contact-subtitle', con.subtitle);

  // Items de contacto
  const conItems = $('contact-items');
  if (conItems && C.footer) {
    conItems.innerHTML = `
      <div class="contact-item">
        <div class="contact-item-icon">📧</div>
        <div>
          <div class="contact-item-label">Email</div>
          <div class="contact-item-value"><a href="mailto:${C.footer.email}" style="color:inherit">${C.footer.email}</a></div>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item-icon">💬</div>
        <div>
          <div class="contact-item-label">WhatsApp</div>
          <div class="contact-item-value">${C.footer.whatsapp.number}</div>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item-icon">⏰</div>
        <div>
          <div class="contact-item-label">Respuesta</div>
          <div class="contact-item-value">Menos de 24 horas</div>
        </div>
      </div>
    `;
  }

  // WhatsApp button
  const waBtn = $('wa-btn');
  if (waBtn && C.footer?.whatsapp) {
    const { number, message } = C.footer.whatsapp;
    const cleanNumber = number.replace(/[^0-9]/g, '');
    waBtn.href = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }

  // Form placeholders y opciones
  const inputName    = $('input-name');
  const inputEmail   = $('input-email');
  const inputService = $('input-service');
  const inputMsg     = $('input-message');
  const formSubmit   = $('form-submit');
  const formSuccess  = $('form-success');

  if (inputName)    inputName.placeholder    = con.form.name_placeholder;
  if (inputEmail)   inputEmail.placeholder   = con.form.email_placeholder;
  if (inputMsg)     inputMsg.placeholder     = con.form.message_placeholder;
  if (formSubmit)   formSubmit.textContent   = con.form.submit_text;
  if (formSuccess)  formSuccess.textContent  = con.form.success_text;

  if (inputService) {
    inputService.innerHTML = `<option value="" disabled selected>${con.form.service_placeholder}</option>`
      + con.form.service_options.map(o => `<option value="${o}">${o}</option>`).join('');
  }

  // ── FOOTER ────────────────────────────────────────────────
  const footer = C.footer;
  setText('footer-tagline', footer.tagline);
  setText('footer-copyright', footer.copyright);

  // SVG icons para redes sociales
  const socialIcons = {
    linkedin:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
    github:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    behance:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.971 13c-.073-1.136-.543-2.062-2.285-2.062-1.567 0-2.292.856-2.349 2.062h4.634zM3 5h4c.552 0 3.5.044 3.5 2.701 0 1.301-.744 2.07-1.683 2.437C10.154 10.53 11 11.5 11 13c0 3.059-2.604 3-3.5 3H3V5zm2.5 2.5v2h2c.966 0 1.5-.464 1.5-1 0-.65-.542-1-1.5-1h-2zm0 4v2h2c1.163 0 1.5-.503 1.5-1.063 0-.546-.399-0.937-1.5-0.937h-2z"/></svg>`,
    twitter:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  };

  const footerSocial = $('footer-social');
  if (footerSocial) {
    footerSocial.innerHTML = footer.social.map(s => `
      <a href="${s.url}" class="social-icon" target="_blank" rel="noopener" aria-label="${s.name}">
        ${socialIcons[s.icon] || s.icon}
      </a>
    `).join('');
  }

})();
