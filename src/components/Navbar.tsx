'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';

/**
 * Componente de Navegación (Navbar)
 * 
 * Características:
 * - Sticky: Se mantiene fijo en la parte superior al hacer scroll.
 * - Backdrop-blur: Fondo semi-transparente con desenfoque para dar un aspecto premium y moderno.
 * - Responsive: Se adapta a pantallas pequeñas usando un menú de tipo hamburguesa animado.
 * - Cambio de estado al hacer scroll: Añade un borde sutil y fondo más oscuro al bajar de la página.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll de la página y cambiar el aspecto del Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar el scroll suave al hacer clic en los enlaces
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculamos la posición considerando la altura del navbar (aprox. 80px)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Cierra el menú móvil si está abierto
    }
  };

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Galería', id: 'galeria' },
    { name: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-neutral-950/80 border-b border-neutral-900/50 backdrop-blur-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO / NOMBRE DEL NEGOCIO */}
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollTo(e, 'inicio')}
          className="flex items-center gap-2 group text-white font-semibold tracking-wider text-xl"
        >
          <Camera className="w-6 h-6 text-amber-500 transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-light">ALLAN</span>
          <span className="text-amber-500 font-bold">PHOTOGRAPHY</span>
        </a>

        {/* ENLACES PARA PANTALLAS GRANDES (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-sm font-medium tracking-widest text-neutral-300 hover:text-amber-500 uppercase transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleScrollTo(e, 'contacto')}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-widest bg-amber-500 text-neutral-950 rounded-full hover:bg-white hover:text-neutral-950 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
          >
            Cotizar
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL (HAMBURGUESA) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-amber-500 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <div className={`md:hidden fixed top-[73px] left-0 w-full bg-neutral-950/95 border-b border-neutral-900 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
      }`}>
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-base font-semibold tracking-widest text-neutral-300 hover:text-amber-500 uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleScrollTo(e, 'contacto')}
            className="w-full text-center px-6 py-3 text-sm font-semibold uppercase tracking-widest bg-amber-500 text-neutral-950 rounded-full hover:bg-white transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
