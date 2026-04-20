# Bitácora Paso a Paso: Desarrollo del Sitio Alex Maurici

Esta bitácora detalla el flujo de trabajo técnico para construir el nuevo sitio utilizando un IDE (VS Code) y un stack moderno.

## Fase 1: Preparación del Entorno (Día 1)
1.  **Instalación de Node.js:** Asegurarse de tener la versión LTS instalada.
2.  **Inicialización del Proyecto:** Ejecutar en la terminal de VS Code:
    `npx create-next-app@latest alex-maurici-web`
    *(Seleccionar: TypeScript, Tailwind CSS y App Router).*
3.  **Configuración de Git:**
    * `git init`
    * Crear repositorio en GitHub y vincularlo.
4.  **Limpieza de Estructura:** Borrar el contenido inicial de `page.tsx` y `globals.css`.

## Fase 2: Configuración de la Identidad Visual (Día 1)
1.  **Tailwind Config:** Editar `tailwind.config.ts` para incluir la paleta de colores definida en el archivo de Identidad Visual.
2.  **Fuentes:** Configurar `next/font` para cargar la tipografía (ej. Inter).
3.  **Assets:** Crear carpeta `/public/assets` y subir el logo y las imágenes extraídas.

## Fase 3: Arquitectura de Componentes Globales (Día 2)
1.  **Navbar:** Crear componente de navegación responsivo con el logo y botones de contacto.
2.  **Footer:** Crear pie de página con enlaces legales y redes sociales.
3.  **Layout:** Asegurar que el Navbar y Footer rodeen todas las páginas.

## Fase 4: Desarrollo de la Landing Page (Día 3-4)
1.  **Sección Hero:** Implementar el título principal, subtítulo y el botón de CTA (Agendar).
2.  **Sección Servicios:** Crear tarjetas (Cards) dinámicas para:
    * Automatización de CRM.
    * Agentes de IA.
    * Análisis de Datos.
3.  **Sección Social Proof:** Carrusel de logos y grid de testimonios.
4.  **Sección de Contacto:** Formulario funcional maquetado con validaciones.

## Fase 5: Interactividad y Animaciones (Día 5)
1.  **Framer Motion:** Instalar y aplicar animaciones de entrada (fade-in, slide-up) para dar sensación de "IA moderna".
2.  **Sticky Headers:** Optimizar la navegación para dispositivos móviles.

## Fase 6: Optimización y Lanzamiento (Día 6)
1.  **SEO:** Configurar `metadata` en Next.js (Título, descripción y OpenGraph para redes).
2.  **Performance:** Revisar puntuación en Lighthouse.
3.  **Deployment:** Conectar el repositorio con Vercel para el despliegue automático.
