'use client';

import { servicesData } from '@/data/services';
import { Check } from 'lucide-react';

/**
 * Componente de Servicios (Services)
 * 
 * Características:
 * - Diseño de rejilla (Grid) responsivo que cambia de 1 a 3 columnas según el tamaño de pantalla.
 * - Tarjetas interactivas con animaciones en hover (desplazamiento hacia arriba y cambio de color).
 * - Visualización dinámica de iconos importados desde los datos de servicios.
 * - Detalle de entregables de cada servicio utilizando listas elegantes.
 */
export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-neutral-950 text-white relative">

      {/* Fondo decorativo con luces difuminadas de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
            Nuestros <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Servicios</span>
          </h2>
          <div className="w-12 h-[2px] bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
            Ofrecemos soluciones audiovisuales completas combinando tecnología de drones de última generación con técnicas de fotografía terrestre artística.
          </p>
        </div>

        {/* REJILLA DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-neutral-900/40 border border-neutral-800/60 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* ICONO CON EFECTO DE RESPLANDOR */}
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* TÍTULO Y DESCRIPCIÓN */}
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-amber-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* DETALLES ADICIONALES (CHECKLIST) */}
                <ul className="space-y-3 mt-4 pt-6 border-t border-neutral-900">
                  {service.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-3 text-xs text-neutral-400">
                      <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
