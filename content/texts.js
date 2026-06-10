/**
 * ============================================================
 *  ARCHIVO CENTRAL DE TEXTOS — Editá todo el contenido aquí
 * ============================================================
 */
const CONTENT = {

  /* ── META SEO ────────────────────────────────────────────── */
  meta: {
    title: "Juan Pérez | Diseñador & Desarrollador Web",
    description: "Diseño y desarrollo sitios web que convierten visitantes en clientes. Especialista en UI/UX, branding y estrategia digital.",
    keywords: "diseño web, desarrollo web, portfolio, UI/UX, branding, marketing digital",
    author: "Juan Pérez",
  },

  /* ── HERO ────────────────────────────────────────────────── */
  hero: {
    badge: "Disponible para proyectos",
    name: "Juan Pérez",
    profession: "Diseñador & Desarrollador Web",
    tagline: "Convierto ideas en <span class='highlight'>experiencias digitales</span> que generan resultados reales.",
    cta_primary: "Hablemos de tu proyecto",
    cta_secondary: "Ver mis trabajos",
    // Cambiar ruta de imagen en: images/hero-photo.jpg
    photo: "images/hero-photo.jpg",
    photo_alt: "Juan Pérez — Diseñador Web",
  },

  /* ── SOBRE MÍ ────────────────────────────────────────────── */
  about: {
    badge: "Sobre mí",
    headline: "Diseño con propósito, desarrollo con precisión",
    story: `Con más de <strong>6 años de experiencia</strong> trabajando con marcas, emprendedores y agencias,
            construyo presencias digitales que no solo se ven bien, sino que <strong>venden</strong>.`,
    story2: `Mi enfoque combina estética premium con estrategia de conversión. Cada pixel tiene un objetivo:
             hacer que tu negocio crezca.`,
    differentials: [
      { icon: "⚡", title: "Entrega rápida", desc: "Proyectos listos en 7–14 días hábiles." },
      { icon: "🎯", title: "Orientado a resultados", desc: "Diseño para convertir, no solo para verse bien." },
      { icon: "💬", title: "Comunicación clara", desc: "Actualizaciones constantes, sin vueltas." },
      { icon: "🛡️", title: "Garantía de satisfacción", desc: "Revisiones incluidas hasta que quedes conforme." },
    ],
    experience: [
      { year: "2024–hoy", role: "Freelance Senior", company: "Clientes globales" },
      { year: "2021–2024", role: "Lead Designer", company: "Agencia CreativeHub" },
      { year: "2018–2021", role: "UI/UX Designer", company: "Startup TechFlow" },
    ],
    // Imagen about: images/about-photo.jpg
    photo: "images/about-photo.jpg",
    photo_alt: "Juan trabajando",
  },

  /* ── SERVICIOS ───────────────────────────────────────────── */
  services: {
    badge: "Servicios",
    headline: "¿Qué puedo hacer por tu negocio?",
    subtitle: "Soluciones digitales completas, desde la estrategia hasta la entrega final.",
    items: [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
        title: "Diseño Web",
        desc: "Sitios web modernos, rápidos y responsivos que reflejan tu marca y convierten visitantes en clientes.",
        features: ["Diseño personalizado", "Mobile-first", "Optimizado para SEO"],
        price: "Desde $800 USD",
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        title: "Desarrollo Frontend",
        desc: "Código limpio, performático y escalable con las últimas tecnologías web.",
        features: ["React / Next.js", "Animaciones avanzadas", "API integrations"],
        price: "Desde $1,200 USD",
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
        title: "UI/UX Design",
        desc: "Interfaces intuitivas y experiencias de usuario que encantan y retienen.",
        features: ["Wireframes & prototipos", "Design System", "User testing"],
        price: "Desde $600 USD",
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
        title: "Branding Digital",
        desc: "Identidad visual coherente que posiciona tu marca y genera confianza.",
        features: ["Logo & identidad", "Paleta & tipografía", "Brand guidelines"],
        price: "Desde $500 USD",
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
        title: "Optimización SEO",
        desc: "Más visibilidad en buscadores para atraer tráfico orgánico de calidad.",
        features: ["Auditoría técnica", "On-page SEO", "Core Web Vitals"],
        price: "Desde $400 USD",
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
        title: "Landing Pages",
        desc: "Páginas de aterrizaje de alta conversión para campañas y lanzamientos.",
        features: ["CRO optimizado", "A/B testing ready", "Integración con ads"],
        price: "Desde $350 USD",
      },
    ],
  },

  /* ── PORTFOLIO ───────────────────────────────────────────── */
  portfolio: {
    badge: "Portfolio",
    headline: "Proyectos que generan impacto",
    subtitle: "Una selección de trabajos recientes en diseño web, branding y desarrollo.",
    categories: ["Todos", "Diseño Web", "Branding", "Landing Page", "App"],
    items: [
      {
        id: 1,
        category: "Diseño Web",
        title: "E-commerce FashionLux",
        desc: "Tienda online premium con experiencia de compra fluida.",
        // Imagen: images/portfolio/project-1.jpg
        image: "images/portfolio/project-1.jpg",
        tags: ["Diseño Web", "E-commerce"],
        link: "#",
      },
      {
        id: 2,
        category: "Branding",
        title: "Identidad Marca Nutri+",
        desc: "Branding completo para suplementos nutricionales.",
        image: "images/portfolio/project-2.jpg",
        tags: ["Branding", "Logo"],
        link: "#",
      },
      {
        id: 3,
        category: "Landing Page",
        title: "Landing Curso Online",
        desc: "Página de ventas con 8.7% de conversión.",
        image: "images/portfolio/project-3.jpg",
        tags: ["Landing Page", "CRO"],
        link: "#",
      },
      {
        id: 4,
        category: "Diseño Web",
        title: "Portfolio Fotógrafa",
        desc: "Portfolio visual minimalista con galería animada.",
        image: "images/portfolio/project-4.jpg",
        tags: ["Diseño Web", "Portfolio"],
        link: "#",
      },
      {
        id: 5,
        category: "App",
        title: "Dashboard Analytics",
        desc: "Panel de control para startup de data analytics.",
        image: "images/portfolio/project-5.jpg",
        tags: ["App", "UI/UX"],
        link: "#",
      },
      {
        id: 6,
        category: "Landing Page",
        title: "Campaña Inmobiliaria",
        desc: "Landing de captación de leads para real estate.",
        image: "images/portfolio/project-6.jpg",
        tags: ["Landing Page", "Real Estate"],
        link: "#",
      },
    ],
  },

  /* ── TESTIMONIOS ─────────────────────────────────────────── */
  testimonials: {
    badge: "Testimonios",
    headline: "Lo que dicen mis clientes",
    items: [
      {
        name: "María González",
        role: "CEO, FashionLux",
        // Imagen: images/testimonials/avatar-1.jpg
        avatar: "images/testimonials/avatar-1.jpg",
        text: "Juan transformó por completo nuestra tienda online. Las ventas aumentaron un 40% en el primer mes. Su atención al detalle y su comprensión del negocio son excepcionales.",
        stars: 5,
      },
      {
        name: "Carlos Herrera",
        role: "Fundador, Nutri+",
        avatar: "images/testimonials/avatar-2.jpg",
        text: "Mejor inversión que hicimos este año. El branding que creó Juan nos diferenció completamente de la competencia. Profesional, rápido y con un gusto estético increíble.",
        stars: 5,
      },
      {
        name: "Sofía Martínez",
        role: "Coach Online",
        avatar: "images/testimonials/avatar-3.jpg",
        text: "Mi landing page convierte al 8.7%. Antes tenía otra página y apenas llegaba al 2%. Juan sabe exactamente cómo diseñar para que la gente compre.",
        stars: 5,
      },
      {
        name: "Andrés Romero",
        role: "Director, AgenciaBoost",
        avatar: "images/testimonials/avatar-4.jpg",
        text: "Hemos trabajado en más de 5 proyectos juntos. Siempre entrega en tiempo y forma, el código es impecable y los diseños superan nuestras expectativas.",
        stars: 5,
      },
    ],
  },

  /* ── MÉTRICAS ────────────────────────────────────────────── */
  metrics: {
    badge: "En números",
    headline: "Resultados que hablan",
    items: [
      { value: 120, suffix: "+", label: "Clientes satisfechos" },
      { value: 340, suffix: "+", label: "Proyectos completados" },
      { value: 6, suffix: " años", label: "De experiencia" },
      { value: 40, suffix: "%", label: "Aumento promedio en conversión" },
    ],
  },

  /* ── CTA / CONTACTO ──────────────────────────────────────── */
  contact: {
    badge: "Contacto",
    headline: "¿Listo para llevar tu negocio al siguiente nivel?",
    subtitle: "Contame sobre tu proyecto y te respondo en menos de 24 hs.",
    cta_text: "Reservá una llamada gratuita",
    form: {
      name_placeholder: "Tu nombre",
      email_placeholder: "Tu email",
      service_placeholder: "¿Qué servicio necesitás?",
      service_options: [
        "Diseño Web",
        "Desarrollo Frontend",
        "UI/UX Design",
        "Branding Digital",
        "Optimización SEO",
        "Landing Page",
        "Otro",
      ],
      message_placeholder: "Contame sobre tu proyecto...",
      submit_text: "Enviar mensaje",
      success_text: "¡Mensaje enviado! Te respondo pronto.",
    },
  },

  /* ── FOOTER ──────────────────────────────────────────────── */
  footer: {
    name: "Juan Pérez",
    tagline: "Diseñador & Desarrollador Web",
    copyright: `© ${new Date().getFullYear()} Juan Pérez. Todos los derechos reservados.`,
    social: [
      { name: "LinkedIn", url: "https://linkedin.com/in/tuusuario", icon: "linkedin" },
      { name: "Instagram", url: "https://instagram.com/tuusuario", icon: "instagram" },
      { name: "GitHub", url: "https://github.com/tuusuario", icon: "github" },
      { name: "Behance", url: "https://behance.net/tuusuario", icon: "behance" },
    ],
    whatsapp: {
      number: "+5491112345678",  // Cambiar por tu número
      message: "Hola Juan, me gustaría hablar sobre un proyecto.",
    },
    email: "hola@juanperez.com",  // Cambiar por tu email
  },
};
