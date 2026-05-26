# Allan Photography & Drone - Web Oficial

Este proyecto es una Landing Page moderna, elegante y de diseño cinematográfico orientada a un negocio profesional de fotografía y tomas aéreas con Drone. Construido utilizando **Next.js (App Router)**, **TypeScript**, y **Tailwind CSS**.

## 🚀 Características Principales

- **Diseño Premium y Cinematográfico:** Paleta de colores súper oscuros con acentos dorados elegantes, amplios espacios visuales, efectos de viñeta y micro-animaciones personalizadas en CSS.
- **Optimización y Estructura:** Arquitectura basada en componentes reutilizables con separación de datos y lógica.
- **Navegación Fluida (Smooth Scroll):** Navbar fija semi-transparente con efecto de desenfoque de fondo (`backdrop-blur`) y scroll suavizado hacia las secciones.
- **Portafolio Interactivo:** Galería de imágenes filtrables (Todos, Fotografía, Drone, Eventos) con transiciones animadas y zoom progresivo en hover.
- **Foco en Conversión:** Integración directa con WhatsApp a través de un botón flotante y un formulario de cotización que autocompleta el mensaje para agilizar el contacto del cliente.
- **100% Responsivo:** Adaptado meticulosamente para dispositivos móviles, tablets y computadoras de escritorio.

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos e importaciones globales de Tailwind v4 y variables CSS
│   ├── layout.tsx       # Plantilla principal, SEO, Google Fonts (Outfit)
│   └── page.tsx         # Página principal que orquesta todas las secciones
│
├── components/
│   ├── Navbar.tsx       # Menú de navegación responsive y dinámico al hacer scroll
│   ├── Hero.tsx         # Portada de pantalla completa con imagen aérea cinematográfica
│   ├── Services.tsx     # Rejilla de servicios profesionales y detalles
│   ├── Gallery.tsx      # Portafolio filtrable de imágenes con efectos hover
│   ├── Contact.tsx      # Formulario y links a redes sociales con redirección a WhatsApp
│   ├── Footer.tsx       # Pie de página minimalista
│   └── WhatsAppButton.tsx # Botón flotante permanente
│
├── data/
│   └── services.ts      # Datos estructurados de los servicios en español
│
└── styles/
    └── animations.css   # Animaciones personalizadas en CSS (fadeInUp, pulses, glows, shimmers)
```

---

## 🛠️ Instalación y Desarrollo Local

Sigue estos sencillos pasos para ejecutar el proyecto en tu máquina local:

### 1. Clonar o descargar el repositorio
Asegúrate de que estás en la raíz del proyecto.

### 2. Instalar las dependencias
Ejecuta el siguiente comando para descargar e instalar los paquetes de desarrollo necesarios (Next.js, Tailwind v4, React y Lucide Icons):
```bash
npm install
```

### 3. Levantar el servidor de desarrollo
Una vez finalizada la instalación, ejecuta:
```bash
npm run dev
```

### 4. Abrir en el navegador
Visita [http://localhost:3000](http://localhost:3000) en tu navegador preferido para visualizar e interactuar con el sitio web.

---

## ⚡ Tecnologías Utilizadas

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (para iconos vectoriales elegantes)
- **Outfit Font** (de Google Fonts)
