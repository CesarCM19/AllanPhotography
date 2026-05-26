import { Camera, Video, Calendar, Sparkles, Film, Compass } from 'lucide-react';
import { ElementType } from 'react';

// Interfaz para definir la estructura de un Servicio
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ElementType; // Tipo React para componentes de iconos
  details: string[];
}

// Datos de los servicios profesionales ofrecidos
export const servicesData: Service[] = [
  {
    id: 'fotografia-profesional',
    title: 'Fotografía Profesional',
    description: 'Captura de imágenes de alta resolución con dirección artística para marcas, productos y retratos corporativos.',
    icon: Camera,
    details: ['Dirección de arte', 'Iluminación de estudio', 'Retoque digital premium', 'Formatos listos para web y prensa']
  },
  {
    id: 'videos-con-drone',
    title: 'Videos con Drone',
    description: 'Tomas aéreas espectaculares en resolución 4K que aportan una perspectiva cinematográfica única a tus proyectos.',
    icon: Compass,
    details: ['Piloto certificado', 'Grabación en 4K UHD', 'Planificación de ruta de vuelo', 'Edición de color profesional']
  },
  {
    id: 'fotografia-aerea',
    title: 'Fotografía Aérea',
    description: 'Imágenes aéreas de alta definición para bienes raíces, terrenos, inspecciones de obra y paisajes.',
    icon: Sparkles,
    details: ['Bienes raíces premium', 'Seguimiento de obras', 'Paisajismo a gran escala', 'Ortomosaicos de alta resolución']
  },
  {
    id: 'cobertura-de-eventos',
    title: 'Cobertura de Eventos',
    description: 'Documentación visual completa y espontánea para eventos corporativos, bodas, conciertos y festivales.',
    icon: Calendar,
    details: ['Multicámara', 'Captura de momentos espontáneos', 'Entrega exprés de contenido destacado', 'Galería web privada']
  },
  {
    id: 'sesiones-personales',
    title: 'Sesiones Personalizadas',
    description: 'Retratos individuales, artísticos, familiares o de pareja en locaciones exteriores o estudio adaptados a tu estilo.',
    icon: Video, // Reutilizamos un icono representativo
    details: ['Asesoría de vestuario', 'Locación a elegir', 'Sesiones individuales o grupales', 'Entrega digital en alta calidad']
  },
  {
    id: 'produccion-audiovisual',
    title: 'Producción Audiovisual',
    description: 'Creación de videos publicitarios, corporativos y de marca. Desde el guionismo hasta la edición y postproducción final.',
    icon: Film,
    details: ['Guion y storyboard', 'Edición y postproducción', 'Diseño sonoro y música licenciada', 'Formatos para redes sociales']
  }
];
