'use client';

import { useState } from 'react';

// Interfaz para los elementos de la galería
interface GalleryItem {
  id: number;
  title: string;
  category: 'fotografia' | 'drone' | 'eventos';
  categoryLabel: string;
  image: string;
}

/**
 * Componente de Galería (Gallery)
 * 
 * Características:
 * - Filtro de categorías interactivo (Fotografía, Drone, Eventos).
 * - Animaciones suaves de transición en las imágenes al aplicar filtros.
 * - Efecto de zoom y oscurecimiento en hover con texto descriptivo elegante.
 * - Responsivo: Cambia de 1 columna (móvil) a 2 (tablets) y 3 (escritorio).
 */
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'fotografia' | 'drone' | 'eventos'>('todos');
  const basePath = process.env.NODE_ENV === 'production' ? '/AllanPhotography' : '';

  // Datos estructurados de la galería de imágenes
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Acantilados del Pacífico',
      category: 'drone',
      categoryLabel: 'Drone',
      image: '/images/gallery_drone_1.png',
    },
    {
      id: 2,
      title: 'Retrato en la Hora Dorada',
      category: 'fotografia',
      categoryLabel: 'Fotografía',
      image: '/images/gallery_photo_1.png',
    },
    {
      id: 3,
      title: 'Metrópolis Nocturna',
      category: 'drone',
      categoryLabel: 'Drone',
      image: '/images/gallery_drone_2.png',
    },
    {
      id: 4,
      title: 'Celebración Íntima',
      category: 'eventos',
      categoryLabel: 'Eventos',
      image: '/images/gallery_event_1.png',
    },
    {
      id: 5,
      title: 'Detalles del Bosque Nebuloso',
      category: 'fotografia',
      categoryLabel: 'Fotografía',
      image: '/images/gallery_photo_2.png',
    },
    {
      id: 6,
      title: 'Luces y Escenarios',
      category: 'eventos',
      categoryLabel: 'Eventos',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    }
  ];

  // Filtrado de las imágenes en base al filtro seleccionado
  const filteredItems = activeFilter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Lista de botones de filtros con sus etiquetas
  const filterButtons = [
    { key: 'todos', label: 'Todos' },
    { key: 'fotografia', label: 'Fotografía' },
    { key: 'drone', label: 'Drone / Aéreo' },
    { key: 'eventos', label: 'Eventos' }
  ] as const;

  return (
    <section id="galeria" className="py-24 bg-neutral-900/20 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            Portafolio
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
            Galería <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Destacada</span>
          </h2>
          <div className="w-12 h-[2px] bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
            Una selección de nuestros mejores trabajos. Capturando momentos únicos desde perspectivas terrestres y aéreas excepcionales.
          </p>
        </div>

        {/* BOTONES DE FILTRADO INTERACTIVOS */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveFilter(btn.key)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === btn.key
                  ? 'bg-amber-500 text-neutral-950 shadow-[0_4px_15px_rgba(245,158,11,0.3)]'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* CUADRÍCULA DE IMÁGENES (GRID) */}
        {/* Se usa grid-cols-1 para móviles, sm:grid-cols-2 para tablets y lg:grid-cols-3 para desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800/40 cursor-pointer animate-fade-in-up"
            >
              {/* IMAGEN
                  Se utiliza tag img nativo para mayor flexibilidad con URLs externas de Unsplash y archivos locales */}
              <img
                src={item.image.startsWith('http') ? item.image : `${basePath}${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* OVERLAY DE HOVER
                  Aparece con una transición suave (opacidad) al pasar el cursor */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
                  {item.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                
                {/* Detalle decorativo */}
                <div className="w-8 h-[2px] bg-white mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Filtro sutil permanente para atenuar imágenes en el diseño cinematográfico */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
