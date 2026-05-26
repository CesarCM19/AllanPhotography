import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Configuración de la fuente Outfit de Google Fonts
// Se selecciona con un peso ligero (300), regular (400), medio (500), semibold (600) y bold (700)
// para dar máxima versatilidad y una estética geométrica moderna y limpia.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

// Metadatos SEO para indexación en motores de búsqueda
export const metadata: Metadata = {
  title: "Allan Photography & Drone | Fotografía Aérea y Terrestre Profesional",
  description: "Portafolio profesional de fotografía y video aéreo con drone. Servicios de cobertura de eventos, sesiones personalizadas, bienes raíces y producción audiovisual premium en Costa Rica.",
  keywords: ["fotografía", "drone", "video aéreo", "fotografía profesional", "producción audiovisual", "eventos", "bienes raíces", "Costa Rica"],
  authors: [{ name: "Allan Photography" }],
  creator: "Allan Photography",
  openGraph: {
    title: "Allan Photography & Drone",
    description: "Capturamos tus mejores momentos desde perspectivas únicas.",
    url: "https://allanphotography.com",
    siteName: "Allan Photography & Drone",
    locale: "es_CR",
    type: "website",
  },
};

/**
 * Layout Principal de la Aplicación (RootLayout)
 * 
 * Este archivo define la estructura base HTML de todo el sitio web:
 * - Define el idioma de la página en español (lang="es").
 * - Aplica la tipografía Outfit a nivel global.
 * - Asegura la consistencia en el renderizado.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
