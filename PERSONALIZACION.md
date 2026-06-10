# Guía de Personalización del Portfolio

Todo el contenido editable está centralizado en **`content/texts.js`**.
Las imágenes van en la carpeta **`images/`**.
**No necesitás tocar el HTML ni el CSS** para los cambios básicos.

---

## 1. Cambiar tu NOMBRE

Archivo: `content/texts.js`

```js
hero: {
  name: "Juan Pérez",  // ← Cambiá esto
```

También actualizar:
```js
meta: {
  author: "Juan Pérez",  // ← Y esto
  title: "Juan Pérez | Diseñador & Desarrollador Web",
```

Y en footer:
```js
footer: {
  name: "Juan Pérez",  // ← Y esto
```

---

## 2. Cambiar tu FOTO

### Foto principal (Hero)
1. Guardá tu foto como `images/hero-photo.jpg` (recomendado: 800×1000px)
2. En `content/texts.js`:
```js
hero: {
  photo: "images/hero-photo.jpg",
  photo_alt: "Tu Nombre — Tu Profesión",
```

### Foto sección Sobre mí
1. Guardá tu foto como `images/about-photo.jpg` (recomendado: 600×750px)
2. En `content/texts.js`:
```js
about: {
  photo: "images/about-photo.jpg",
  photo_alt: "Tu nombre trabajando",
```

> **Nota:** Mientras no existan las imágenes, se muestra un placeholder automático.

---

## 3. Cambiar SERVICIOS

En `content/texts.js`, editá el array `services.items`:

```js
services: {
  items: [
    {
      icon: `<svg .../>`,        // SVG del ícono
      title: "Nombre servicio",  // ← Título de la tarjeta
      desc: "Descripción...",    // ← Descripción breve
      features: [                // ← Lista de características
        "Característica 1",
        "Característica 2",
        "Característica 3",
      ],
      price: "Desde $XXX USD",   // ← Precio o quitar esta línea
    },
  ],
}
```

Para **agregar** un servicio: copiar y pegar un bloque `{ }` al final del array.
Para **eliminar** un servicio: borrar el bloque completo `{ ... },`.

---

## 4. Cambiar PROYECTOS del Portfolio

En `content/texts.js`, editá el array `portfolio.items`:

```js
portfolio: {
  categories: ["Todos", "Diseño Web", "Branding"],  // ← Categorías del filtro
  items: [
    {
      id: 1,
      category: "Diseño Web",               // ← Debe coincidir con las categorías
      title: "Nombre del proyecto",
      desc: "Descripción breve.",
      image: "images/portfolio/project-1.jpg",  // ← Ruta de la imagen
      tags: ["Diseño Web", "E-commerce"],    // ← Etiquetas visibles
      link: "https://tuproyecto.com",        // ← URL del proyecto
    },
  ],
}
```

**Imágenes de proyectos:** guardarlas en `images/portfolio/` con el nombre que ponés en `image`.

---

## 5. Cambiar COLORES

Archivo: `css/styles.css` — las primeras líneas del archivo.

```css
:root {
  --accent:   #6c63ff;   /* Color principal — cambiar por el tuyo */
  --accent-2: #ff6b6b;   /* Color secundario */
  --navy:     #0a0e1a;   /* Fondo oscuro principal */
  --navy-mid: #111827;   /* Fondo secciones alternas */
```

**Combinaciones sugeridas:**
- Azul profesional: `--accent: #2563eb`
- Verde tecnológico: `--accent: #10b981`
- Naranja energético: `--accent: #f97316`
- Rosa creativo: `--accent: #ec4899`

---

## 6. Cambiar REDES SOCIALES

En `content/texts.js`:

```js
footer: {
  social: [
    { name: "LinkedIn",   url: "https://linkedin.com/in/tuusuario",   icon: "linkedin"  },
    { name: "Instagram",  url: "https://instagram.com/tuusuario",     icon: "instagram" },
    { name: "GitHub",     url: "https://github.com/tuusuario",        icon: "github"    },
    { name: "Behance",    url: "https://behance.net/tuusuario",       icon: "behance"   },
  ],
```

Íconos disponibles: `linkedin`, `instagram`, `github`, `behance`, `twitter`.
Para eliminar una red, borrar la línea `{ }` correspondiente.

---

## 7. Cambiar TEXTOS generales

Cada sección tiene su bloque en `content/texts.js`:

| Sección    | Clave principal          |
|------------|--------------------------|
| Hero       | `CONTENT.hero`           |
| Sobre mí   | `CONTENT.about`          |
| Servicios  | `CONTENT.services`       |
| Portfolio  | `CONTENT.portfolio`      |
| Testimonios| `CONTENT.testimonials`   |
| Métricas   | `CONTENT.metrics`        |
| Contacto   | `CONTENT.contact`        |
| Footer     | `CONTENT.footer`         |

---

## 8. Cambiar BOTONES

Botón principal hero:
```js
hero: {
  cta_primary:   "Hablemos de tu proyecto",  // ← Texto botón primario
  cta_secondary: "Ver mis trabajos",         // ← Texto botón secundario
```

Botón formulario:
```js
contact: {
  form: {
    submit_text: "Enviar mensaje",           // ← Texto del botón submit
```

---

## 9. Configurar el FORMULARIO de contacto

Por defecto el formulario muestra un mensaje de éxito simulado.
Para conectarlo a un servicio real, editá `js/main.js` — línea del `form.addEventListener('submit', ...)`.

**Opciones gratuitas recomendadas:**
- **Formspree:** `<form action="https://formspree.io/f/TUCODIGO">`
- **EmailJS:** reemplazá el `setTimeout` por `emailjs.sendForm(...)`
- **Netlify Forms:** agregar `netlify` al `<form>`

---

## 10. Cambiar WhatsApp y Email

```js
footer: {
  whatsapp: {
    number:  "+5491112345678",                           // ← Tu número con código de país
    message: "Hola, me gustaría hablar sobre un proyecto.", // ← Mensaje pre-escrito
  },
  email: "hola@tudominio.com",                           // ← Tu email
```

---

## Estructura de carpetas

```
PORTFOLIO/
├── index.html              ← Estructura HTML (no editar para textos)
├── css/
│   └── styles.css          ← Estilos y colores
├── js/
│   ├── render.js           ← Motor de renderizado (no editar)
│   └── main.js             ← Interactividad
├── content/
│   └── texts.js            ← ✅ ARCHIVO PRINCIPAL DE EDICIÓN
├── images/
│   ├── hero-photo.jpg      ← Tu foto principal
│   ├── about-photo.jpg     ← Tu foto sección "sobre mí"
│   ├── portfolio/          ← Imágenes de proyectos
│   │   ├── project-1.jpg
│   │   └── ...
│   └── testimonials/       ← Fotos de clientes
│       ├── avatar-1.jpg
│       └── ...
└── PERSONALIZACION.md      ← Esta guía
```
