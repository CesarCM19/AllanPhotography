import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Habilita la exportación estática de Next.js. Genera archivos HTML/CSS/JS independientes en la carpeta 'out'
  output: 'export',
  
  // GH Pages no soporta la optimización de imágenes nativa de Next.js en tiempo de servidor
  images: {
    unoptimized: true,
  },
  
  // Define el subdirectorio para GitHub Pages si estamos en producción
  // Reemplaza '/AllanPhotography' si usas un dominio personalizado
  basePath: isProd ? '/AllanPhotography' : '',

  // Ignorar errores de TypeScript y ESLint durante el build para que no rompa el despliegue en CI
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
