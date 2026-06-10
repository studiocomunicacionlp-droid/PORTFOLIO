/**
 * ============================================================
 *  ARCHIVO CENTRAL DE TEXTOS — Editá todo el contenido aquí
 * ============================================================
 */
const CONTENT = {

  /* ── META SEO ────────────────────────────────────────────── */
  meta: {
    title: "Francisco Gimenez | Editor de Video — TikTok & Reels",
    description: "Edición de video profesional para TikTok, Reels e Instagram. Contenido que para el scroll y genera resultados reales para tu marca.",
    keywords: "edición de video, reels, tiktok, instagram, editor de video, contenido digital, publicidad, ecommerce",
    author: "Francisco Gimenez",
  },

  /* ── HERO ────────────────────────────────────────────────── */
  hero: {
    badge: "Disponible para proyectos",
    name: "Francisco Gimenez",
    profession: "Editor de Video — TikTok & Reels",
    tagline: "Creo contenido que <span class='highlight'>para el scroll</span> y convierte visitas en ventas reales.",
    cta_primary: "Quiero mi video",
    cta_secondary: "Ver mis trabajos",
    photo: "images/hero-photo.jpg",
    photo_alt: "Francisco Gimenez — Editor de Video",
  },

  /* ── SOBRE MÍ ────────────────────────────────────────────── */
  about: {
    badge: "Sobre mí",
    headline: "Video que vende, no que solo se ve bien",
    story: `Soy <strong>Francisco Gimenez</strong>, editor de video especializado en contenido para redes sociales.
            Me dedico a crear <strong>Reels, TikToks y piezas publicitarias</strong> que no solo se ven bien,
            sino que generan resultados: más alcance, más engagement y más ventas.`,
    story2: `Trabajo con marcas personales, comerciales y tiendas de ecommerce que necesitan
             contenido constante y de calidad. Entrego en tiempo y con el estilo que tu audiencia necesita ver.`,
    differentials: [
      { icon: "⚡", title: "Entrega rápida", desc: "Packs entregados en 24–48 hs según volumen." },
      { icon: "🎯", title: "Enfocado en conversión", desc: "Videos diseñados para parar el scroll y generar acción." },
      { icon: "🎬", title: "Estilo adaptado", desc: "Me adapto al tono de tu marca: elegante, dinámico o viral." },
      { icon: "🔄", title: "Revisiones incluidas", desc: "Correcciones hasta que el resultado te convenza." },
    ],
    experience: [
      { year: "2026 — hoy",  role: "Edición integral", company: "Reels, TikToks, Ads, YouTube, Marcas & Ecommerce" },
      { year: "2025",        role: "Agencias + Marcas", company: "Trabajé con agencias de marketing, ecomms y empecé a editar para marcas personales" },
      { year: "2024",        role: "Primeros pasos",    company: "Comencé editando contenido para tiendas de ecommerce" },
    ],
    photo: "images/about-photo.jpg",
    photo_alt: "Francisco editando video",
  },

  /* ── SERVICIOS (cards de overview) ──────────────────────── */
  services: {
    badge: "Servicios",
    headline: "¿Qué tipo de contenido creamos?",
    subtitle: "Desde un reel suelto hasta un plan mensual completo. Elegí lo que mejor se adapta a tu negocio.",
    items: [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><polygon points="10 8 16 11 10 14 10 8" fill="currentColor" stroke="none" opacity=".6"/></svg>`,
        title: "Reels para Marcas",
        desc: "Edición premium para marcas personales y comerciales. Contenido que posiciona y genera confianza en tu audiencia.",
        hook: "El contenido que te diferencia de la competencia",
        features: ["Posicioná tu marca como referente", "Generá confianza desde el primer segundo", "Estilo adaptado a tu identidad"],
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
        title: "Videos de Producto",
        desc: "Reels de ecommerce, publicidad y ads optimizados para mostrar tu producto y generar ventas directas.",
        hook: "Hacé que tu producto se venda solo",
        features: ["Tu producto irresistible en pantalla", "Ads que generan conversiones reales", "Optimizado para Meta & TikTok"],
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
        title: "Carruseles & Miniaturas",
        desc: "Carruseles para Instagram y miniaturas para YouTube que aumentan clics y dan coherencia visual a tu perfil.",
        hook: "La primera impresión que nadie puede ignorar",
        features: ["Más clics = más alcance orgánico", "Coherencia visual que fideliza", "Diseño que destaca en el feed"],
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
        title: "Plan Mensual",
        desc: "Contenido diario de lunes a sábados. Para cuentas que necesitan presencia constante y resultados sostenidos.",
        hook: "234 videos al mes. El algoritmo te va a amar.",
        features: ["Presencia diaria sin esfuerzo de tu parte", "Consistencia que construye audiencia real", "Liberá tu tiempo para hacer crecer tu negocio"],
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" opacity=".7"/></svg>`,
        title: "Videos para YouTube",
        desc: "Edición de videos largos y Shorts con formato profesional que retiene a tu audiencia hasta el final.",
        hook: "Tu canal, con la edición que se merece",
        features: ["Edición que mantiene al espectador hasta el final", "Intro, outro, efectos y captions animados", "Thumbnails que disparan el CTR"],
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
        title: "Packs Personalizados",
        desc: "¿Necesitás algo diferente? Armamos juntos el pack ideal para tus objetivos, volumen y plataforma.",
        hook: "Tu visión hecha video, sin límites ni moldes",
        features: ["Mix de formatos a medida", "Escalá según tus objetivos", "Un solo editor que conoce tu marca"],
      },
    ],
  },

  /* ── PRECIOS (sección especial de pricing) ───────────────── */
  pricing: {
    badge: "Packs",
    headline: "Edición de Video — Solos & Por Packs",
    subtitle: "Contenido en reels o publicidad que <strong>para el scroll</strong> y <strong>genera resultados</strong>.",
    categories: [
      {
        id: "marcas",
        name: "MARCAS",
        highlight: true,  // card destacada
        subtitle: "Personales o Comerciales. Reels para Instagram & TikTok",
        color: "primary",
        plans: [
          { name: "Edición Individual", price: "", desc: "1 reel o TikTok editado" },
          { name: "Pack Starter",       price: "", desc: "5 videos — ideal para empezar" },
          { name: "Pack Growth",        price: "", desc: "10 videos — para crecer consistente" },
          { name: "Plan Mensual",       price: "", desc: "30 videos — presencia constante" },
        ],
      },
      {
        id: "producto",
        name: "PRODUCTO",
        highlight: false,
        subtitle: "Ecommerce / Ads / Reels para Instagram básicos",
        color: "secondary",
        plans: [
          { name: "Edición Individual", price: "", desc: "1 video de producto editado" },
          { name: "Pack Starter",       price: "", desc: "5 videos — perfecto para testear" },
          { name: "Pack Growth",        price: "", desc: "10 videos — escala tu ecommerce" },
          { name: "Plan Mensual",       price: "", desc: "30 videos — flujo constante de contenido" },
        ],
      },
    ],
    mensual_card: {
      title: "PLAN MENSUAL MÁXIMO",
      subtitle: "9 VIDEOS × DÍA",
      desc: "Videos de Lunes a Sábados.",
      highlight: "234 VIDEOS AL MES",
      note: "Consultar disponibilidad y precio especial.",
    },
  },

  /* ── YOUTUBE ─────────────────────────────────────────────── */
  youtube: {
    badge: "YouTube",
    headline: "Videos para YouTube — Hablamos y llegamos a un acuerdo",
    subtitle: "La edición de videos largos tiene variables que hacen que cada proyecto sea único: duración, complejidad, efectos, captions, thumbnails y más. Por eso prefiero que lo hablemos directamente.",
    features: [
      { icon: "🎬", title: "Videos Largos", desc: "Edición completa: intro, cortes, música, grafismo y outro." },
      { icon: "⚡", title: "YouTube Shorts", desc: "Formato vertical optimizado para el algoritmo de Shorts." },
      { icon: "🖼️", title: "Thumbnails",    desc: "Diseño de miniaturas que aumentan el CTR del video." },
      { icon: "📝", title: "Captions & Subs",desc: "Subtítulos y captions animados para mayor retención." },
    ],
    cta: "Consultar por YouTube",
    note: "Cada proyecto de YouTube se cotiza individualmente según duración y nivel de producción requerido.",
  },

  /* ── PORTFOLIO ───────────────────────────────────────────── */
  portfolio: {
    badge: "Trabajos",
    headline: "Contenido que genera resultados",
    subtitle: "Una selección de trabajos recientes en reels, ads y contenido para marcas.",
    categories: ["Todos", "Reels Marca", "Producto & Ads", "TikTok", "YouTube"],
    items: [
      {
        id: 1, category: "Reels Marca",
        videoId: "1_1XrS0jXxvnwC7-TLa4MpoI5T1Lq84Bo",
        tags: ["Reels Marca"],
      },
      {
        id: 2, category: "Producto & Ads",
        videoId: "1RCYFRiAF_ZMrK_vn7MvKRark1LVP9SHf",
        tags: ["Producto & Ads"],
      },
      {
        id: 3, category: "TikTok",
        videoId: "1dgwZjdEDjyFPljN3CC7GAESu8TJ5-3Qy",
        tags: ["TikTok"],
      },
      {
        id: 4, category: "Reels Marca",
        videoId: "1bpqPUHDWrDwJV1EaDuPO3H_w8thGf1-q",
        tags: ["Reels Marca"],
      },
      {
        id: 5, category: "YouTube",
        videoId: "14WO4OYDipyoT8paA8_9yHI8PJl2ldXsb",
        tags: ["YouTube"],
      },
      {
        id: 6, category: "Producto & Ads",
        videoId: "1i3TLX5TwccQgvIU61p0sssXpeOCIccnd",
        tags: ["Producto & Ads"],
      },
    ],
  },

  /* ── CASOS DE ÉXITO ─────────────────────────────────────────── */
  cases: {
    badge: "Casos de Éxito",
    headline: "Marcas que crecieron con mi contenido",
    subtitle: "Resultados reales de clientes reales.",
    items: [
      {
        brand: "Auralezzi",
        result: "Mejor CPR de su historia",
        desc: "Gracias a los videos que creamos juntos, Auralezzi logró el costo por resultado más bajo de toda su historia en Meta Ads.",
        videoId: "13nhJ5lTVI6bfoK2pYyJjdBlNoH6QVmTg",
        url: "https://auralezzi.com/",
        stat: "Mejor CPR",
        statLabel: "de su historia",
      },
      {
        brand: "Couple Clothing",
        result: "Videos virales en su lanzamiento",
        desc: "Los reels que editamos para el lanzamiento de Couple Clothing tuvieron un alcance orgánico masivo y generaron ventas desde el primer día.",
        videoId: "1P5wLar7db27xM2TBxdoYftsj_WiPj8sY",
        url: "https://www.coupleclothingarg.com/",
        stat: "Viral",
        statLabel: "desde el día 1",
      },
    ],
  },

  /* ── FRASE INSPIRACIONAL ──────────────────────────────────── */
  quote: {
    text: "Todo lo que la mente puede concebir y creer, lo puede lograr.",
    author: "Napoleon Hill",
    source: "Piense y Hágase Rico",
    extra: "La diferencia entre los que llegan y los que no, no es el talento. Es la decisión de empezar.",
  },

  /* ── MÉTRICAS ────────────────────────────────────────────── */
  metrics: {
    badge: "En números",
    headline: "Resultados que hablan",
    items: [
      { prefix: "+", value: 50,   suffix: "",       label: "Clientes satisfechos" },
      { prefix: "+", value: 1500, suffix: "",       label: "Videos realizados" },
      { prefix: "+", value: 2,    suffix: " años",  label: "De experiencia" },
      { prefix: "",  value: 98,   suffix: "%",      label: "Clientes que repiten" },
    ],
  },

  /* ── CTA / CONTACTO ──────────────────────────────────────── */
  contact: {
    badge: "Contacto",
    headline: "¿Listo para que tu contenido genere resultados?",
    subtitle: "Contame qué necesitás y te respondo en menos de 24 hs con una propuesta.",
    cta_text: "Consultar ahora",
    form: {
      name_placeholder: "Tu nombre",
      email_placeholder: "Tu email",
      service_placeholder: "¿Qué necesitás?",
      service_options: [
        "Edición Individual — Marca ($15 USD)",
        "Edición Individual — Producto ($10 USD)",
        "Pack Starter — Marca ($65 USD)",
        "Pack Starter — Producto ($45 USD)",
        "Pack Growth — Marca ($120 USD)",
        "Pack Growth — Producto ($85 USD)",
        "Plan Mensual — Marca ($280 USD)",
        "Plan Mensual — Producto ($225 USD)",
        "Plan Mensual Máximo (234 videos)",
        "Portadas para Reels",
        "Videos para YouTube",
        "Pack Personalizado",
      ],
      message_placeholder: "Contame sobre tu marca, qué contenido necesitás y en qué plataforma...",
      submit_text: "Enviar consulta",
      success_text: "¡Consulta enviada! Te respondo en menos de 24 hs.",
    },
  },

  /* ── FOOTER ──────────────────────────────────────────────── */
  footer: {
    name: "Francisco Gimenez",
    tagline: "Editor de Video — TikTok & Reels",
    copyright: `© ${new Date().getFullYear()} Francisco Gimenez. Todos los derechos reservados.`,
    social: [
      { name: "Instagram", url: "https://www.instagram.com/frangimennez",                                                         icon: "instagram" },
      { name: "WhatsApp",  url: "https://wa.me/5493425220624?text=Hola%20Francisco!%20Me%20gustar%C3%ADa%20consultar%20sobre%20edici%C3%B3n%20de%20videos.", icon: "whatsapp"  },
    ],
    whatsapp: {
      number: "+5493425220624",
      message: "Hola Francisco! Me gustaría consultar sobre edición de videos.",
    },
    email: "franciscogimenez251007@gmail.com",
  },
};
