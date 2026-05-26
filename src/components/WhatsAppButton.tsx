'use client';

import { MessageSquare } from 'lucide-react';

/**
 * Componente de Botón Flotante de WhatsApp (WhatsAppButton)
 * 
 * Características:
 * - Fijo en la parte inferior derecha (`fixed bottom-8 right-8`) con índice Z muy alto.
 * - Icono elegante y representativo.
 * - Animación de pulso continuo (creada en styles/animations.css) para atraer conversiones de forma no intrusiva.
 * - Efecto de hover que escala el tamaño e incrementa la sombra verde de fondo.
 */
export default function WhatsAppButton() {
  const PHONE_NUMBER = "50660716690";
  const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=Hola,%20vi%20tu%20sitio%20web%20y%20me%20gustaría%20obtener%20más%20información%20sobre%20tus%20servicios%20de%20fotografía%20y%20drone.`;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.6)] animate-whatsapp-pulse"
      title="Escríbenos por WhatsApp"
      aria-label="Escríbenos por WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
    </a>
  );
}
