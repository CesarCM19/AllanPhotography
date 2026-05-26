'use client';

import { Camera } from 'lucide-react';

/**
 * Componente del Pie de Página (Footer)
 * 
 * Características:
 * - Diseño minimalista oscuro acorde a la estética general.
 * - Enlaces de navegación con desplazamiento suave.
 * - Icono de la marca e información de copyright de AllanPhotography.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LOGOTIPO */}
        <div className="flex items-center gap-2 text-white">
          <Camera className="w-5 h-5 text-amber-500" />
          <span className="font-light tracking-widest text-sm">ALLAN</span>
          <span className="text-amber-500 font-bold tracking-widest text-sm">PHOTOGRAPHY</span>
        </div>

        {/* ENLACÈS DE NAVEGACIÓN */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, 'inicio')}
            className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            onClick={(e) => handleScrollTo(e, 'servicios')}
            className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            Servicios
          </a>
          <a
            href="#galeria"
            onClick={(e) => handleScrollTo(e, 'galeria')}
            className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            Galería
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleScrollTo(e, 'contacto')}
            className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            Contacto
          </a>
        </div>

        {/* REDES SOCIALES E INFO */}
        <div className="flex items-center gap-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-amber-500 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-amber-500 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

      </div>

      {/* DERECHOS DE AUTOR */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-neutral-900/40 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          © {currentYear} Allan Photography & Drone. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
