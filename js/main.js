/**
 * ============================================================
 *  PORTFOLIO — JavaScript principal
 * ============================================================
 */

// Siempre arrancar desde el tope — limpia el hash para que el navegador
// móvil no salte a la sección que el usuario visitó la vez anterior.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

document.addEventListener('DOMContentLoaded', () => {

  // ── CURSOR PERSONALIZADO ──────────────────────────────────
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top  = e.clientY + 'px';
      }, 80);
    });
    document.querySelectorAll('a, button, .portfolio-item, .service-card').forEach(el => {
      el.addEventListener('mouseenter', () => follower.style.transform = 'translate(-50%,-50%) scale(1.8)');
      el.addEventListener('mouseleave', () => follower.style.transform = 'translate(-50%,-50%) scale(1)');
    });
  }

  // ── NAVBAR SCROLL ─────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── MOBILE MENU ───────────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  toggle?.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );

  // ── SCROLL REVEAL ─────────────────────────────────────────
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el =>
    revealObs.observe(el)
  );

  // ── COUNTER ANIMATION ─────────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = 16;
    const increments = Math.ceil(duration / step);
    let current = 0;
    const inc = target / increments;

    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current);
    }, step);
  }

  const metricObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.metric-number').forEach(animateCounter);
        metricObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.metrics-grid').forEach(g => metricObs.observe(g));

  // ── PORTFOLIO FILTER ──────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      portfolioItems.forEach(item => {
        const cat = item.dataset.category;
        if (filter === 'Todos' || cat === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeInUp 0.4s ease both';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ── TESTIMONIALS SLIDER ───────────────────────────────────
  const track = document.querySelector('.testimonials-track');
  const dots  = document.querySelectorAll('.slider-dot');
  const btnPrev = document.querySelector('.slider-prev');
  const btnNext = document.querySelector('.slider-next');

  if (track) {
    let current = 0;
    const cards = track.querySelectorAll('.testimonial-card');
    const total = cards.length;
    let autoSlide;

    function getVisible() {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }

    function maxIndex() { return Math.max(0, total - getVisible()); }

    function slideTo(idx) {
      current = Math.max(0, Math.min(idx, maxIndex()));
      const cardWidth = cards[0].offsetWidth + 24; // +gap
      track.style.transform = `translateX(-${current * cardWidth}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    btnNext?.addEventListener('click', () => { slideTo(current + 1); resetAuto(); });
    btnPrev?.addEventListener('click', () => { slideTo(current - 1); resetAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { slideTo(i); resetAuto(); }));

    function startAuto() { autoSlide = setInterval(() => slideTo(current + 1 > maxIndex() ? 0 : current + 1), 4500); }
    function resetAuto() { clearInterval(autoSlide); startAuto(); }
    startAuto();

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { slideTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    });

    window.addEventListener('resize', () => slideTo(current));
  }

  // ── SCROLL TO TOP ─────────────────────────────────────────
  const scrollTopBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () =>
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 400)
  );
  scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── FORMULARIO DE CONTACTO ────────────────────────────────
  const form = document.querySelector('.contact-form-el');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const successMsg = form.querySelector('.form-success');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simulación — reemplazar con tu lógica real (EmailJS, Formspree, etc.)
    setTimeout(() => {
      form.querySelectorAll('.form-group').forEach(g => g.style.display = 'none');
      btn.style.display = 'none';
      if (successMsg) successMsg.style.display = 'block';
    }, 1500);
  });

  // ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        link?.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => activeObs.observe(s));

});
