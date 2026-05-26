'use client';

import { ArrowDown, MessageSquare } from 'lucide-react';

/**
 * Componente Hero (Sección de Bienvenida)
 * 
 * Características:
 * - Pantalla completa (min-h-screen) con una imagen aérea cinematográfica de fondo.
 * - Overlay con gradiente oscuro para asegurar que el texto sea perfectamente legible.
 * - Animaciones de entrada en cascada utilizando Tailwind y clases CSS de animaciones.
 * - Botón interactivo de WhatsApp que desplaza al usuario al chat con un mensaje preestablecido.
 */
export default function Hero() {
  const basePath = process.env.NODE_ENV === 'production' ? '/AllanPhotography' : '';
  const WHATSAPP_URL = "https://wa.me/50660716690?text=Hola,%20quiero%20cotizar%20una%20sesión%20fotográfica%20o%20de%20drone";

  const handleScrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* IMAGEN DE FONDO CINEMATOGRÁFICA */}
      {/* Se utiliza un div con absolute inset-0 y fondo optimizado para lograr un aspecto de pantalla completa */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105 hover:scale-100"
        style={{
          backgroundImage: `url('${basePath}/images/hero_bg.png')`,
        }}
      />

      {/* OVERLAYS OSCUROS
          1. Un fondo negro semi-transparente para opacidad.
          2. Un gradiente radial que oscurece los bordes de la pantalla para simular una viñeta de cámara. */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 z-10" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">

        {/* Línea decorativa dorada */}
        <div className="w-12 h-[2px] bg-amber-500 mb-6 animate-fade-in-up" />

        {/* Subtítulo elegante */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.35em] text-amber-500 uppercase mb-4 animate-fade-in-up animation-delay-100">
          Perspectivas Aéreas & Dirección Artística
        </p>

        {/* Título principal gigante */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight mb-8 leading-tight animate-fade-in-up animation-delay-200">
          Fotografía & <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Drone</span> Profesional
        </h1>

        {/* Descripción sutil */}
        <p className="text-sm md:text-lg text-neutral-300 max-w-2xl font-light tracking-wide leading-relaxed mb-12 animate-fade-in-up animation-delay-300">
          Capturamos momentos inolvidables y creamos contenido audiovisual impactante desde el aire y la tierra. Soluciones visuales premium a tu alcance.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto animate-fade-in-up animation-delay-500">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold uppercase tracking-widest text-xs rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] active:scale-95 animate-whatsapp-pulse"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            Cotizar por WhatsApp
          </a>

          <button
            onClick={handleScrollToServices}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-neutral-950 hover:border-white transition-all duration-300 active:scale-95"
          >
            Ver portafolio
          </button>
        </div>
      </div>

      {/* FLECHA DE DESPLAZAMIENTO HACIA ABAJO */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={handleScrollToServices}
          className="p-2 text-neutral-400 hover:text-amber-500 transition-colors"
          aria-label="Desplazar hacia abajo"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
