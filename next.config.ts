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
};

export default nextConfig;
