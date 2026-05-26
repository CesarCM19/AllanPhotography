'use client';

import { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

/**
 * Componente de Contacto (Contact)
 * 
 * Características:
 * - Diseño de dos columnas en desktop (Información y Formulario estético de cotización).
 * - Enlace directo de conversión a WhatsApp con mensaje pre-redactado.
 * - Iconos elegantes de redes sociales (Instagram, Facebook) y datos editables.
 * - Comentarios explicativos en español del funcionamiento de los inputs y el envío.
 */
export default function Contact() {
  // Número de teléfono editable y mensaje base
  const PHONE_NUMBER = "50660716690";
  const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_NUMBER}`;

  // Estado para el formulario de contacto visual
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: 'fotografia-profesional',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para redirigir a WhatsApp con los datos del formulario estructurados
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, mi nombre es ${formData.nombre}. Estoy interesado en el servicio de *${formData.servicio === 'fotografia-profesional' ? 'Fotografía Profesional' :
      formData.servicio === 'drone-video' ? 'Videos con Drone' :
        formData.servicio === 'eventos' ? 'Cobertura de Eventos' :
          formData.servicio === 'sesion-personal' ? 'Sesión Personalizada' : 'Producción Audiovisual'
      }*. %0A%0AMensaje adicional: ${formData.mensaje}`;

    window.open(`${WHATSAPP_BASE_URL}?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-neutral-950 text-white relative">

      {/* Luz difusa decorativa lateral */}
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            Hablemos
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
            Comienza tu <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Proyecto</span>
          </h2>
          <div className="w-12 h-[2px] bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
            ¿Tienes una idea en mente, una propiedad para fotografiar o un evento que cubrir? Escríbenos y cotiza hoy mismo de forma rápida.
          </p>
        </div>

        {/* CONTENIDO EN DOS COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* COLUMNA 1: DETALLES DE CONTACTO (4/12 partes) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-900/30 border border-neutral-800/40 rounded-3xl p-8 md:p-10">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-amber-500">
                Información de Contacto
              </h3>

              <div className="space-y-8">
                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-amber-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Teléfono</h4>
                    <p className="text-sm font-medium hover:text-amber-500 transition-colors">
                      <a href="tel:+50660716690">+506 6071 6690</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-amber-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Correo Electrónico</h4>
                    <p className="text-sm font-medium hover:text-amber-500 transition-colors">
                      <a href="mailto:info@allanphotography.com">amc.mora.campos@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-amber-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Ubicación</h4>
                    <p className="text-sm font-light text-neutral-300">Alajuela, Costa Rica (Disponibilidad nacional)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">Siguenos en Redes</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/allan.mora_cr?igsh=MXZodnBtNmcwdmhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1DnRW6sLj3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* COLUMNA 2: FORMULARIO DE COTIZACIÓN (7/12 partes) */}
          <div className="lg:col-span-7 bg-neutral-900/30 border border-neutral-800/40 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6">
              Solicitar una <span className="text-amber-500">Cotización</span>
            </h3>
            <p className="text-xs text-neutral-400 mb-8 leading-relaxed">
              Completa el formulario y te redirigiremos de forma automática a WhatsApp con los detalles de tu consulta.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              {/* Input Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej. Allan Delgado"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Selector Servicio */}
              <div>
                <label htmlFor="servicio" className="block text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                  Servicio Requerido
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="fotografia-profesional">Fotografía Profesional</option>
                  <option value="drone-video">Videos con Drone / Aéreo</option>
                  <option value="eventos">Cobertura de Eventos</option>
                  <option value="sesion-personal">Sesión Personalizada</option>
                  <option value="audiovisual">Producción Audiovisual completa</option>
                </select>
              </div>

              {/* Textarea Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                  Detalles del Proyecto
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos un poco más sobre el tipo de proyecto, locación, fecha aproximada, etc."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {/* Botón de Enviar a WhatsApp */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-amber-500 text-neutral-950 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all duration-300 active:scale-[0.98] shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
              >
                <MessageSquare className="w-4 h-4 fill-neutral-950" />
                Enviar Solicitud a WhatsApp
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
