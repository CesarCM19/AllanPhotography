'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Página Principal del Sitio (Home)
 * 
 * En este archivo se coordinan y renderizan todas las secciones de la landing page.
 * 
 * Estructura de la Landing Page:
 * 1. Navbar: Menú fijo superior con backdrop-blur.
 * 2. Hero: Sección principal con video/imagen aérea cinematográfica y llamada a la acción.
 * 3. Services: Sección de servicios en formato grid con tarjetas interactivas de drone y foto.
 * 4. Gallery: Portafolio de fotos filtrables por categoría con hover zoom.
 * 5. Contact: Formulario de cotización que genera redirecciones directas a WhatsApp y enlaces a redes.
 * 6. Footer: Información de marca, enlaces de interés y derechos de autor.
 * 7. WhatsAppButton: Botón flotante permanente e interactivo en toda la web.
 */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500/25 selection:text-white">
      {/* 1. Menú superior */}
      <Navbar />

      <main>
        {/* 2. Sección principal / Portada */}
        <Hero />

        {/* 3. Sección de servicios detallados */}
        <Services />

        {/* 4. Sección de portafolio / galería interactiva */}
        <Gallery />

        {/* 5. Sección de contacto y cotizaciones */}
        <Contact />
      </main>

      {/* 6. Pie de página */}
      <Footer />

      {/* 7. Botón flotante de contacto directo */}
      <WhatsAppButton />
    </div>
  );
}
