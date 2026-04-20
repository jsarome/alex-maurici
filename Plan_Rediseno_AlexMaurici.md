# Propuesta de Rediseño y Migración: Alex Maurici (IA & Automatización)

Este documento detalla la estructura conceptual, técnica y de contenido para la transición del sitio [alexmaurici.com](https://alexmaurici.com/) desde una plataforma cerrada (Base44) hacia un entorno de desarrollo profesional (IDE / Código).

## 1. Análisis del Estado Actual
* **Plataforma:** Base44 (Generador de sitios con IA).
* **Enfoque:** Consultoría en Inteligencia Artificial y Automatización de Procesos.
* **Puntos Fuertes:** Mensaje claro, enfoque en resultados de negocio, estética limpia.
* **Limitaciones Actuales:** Rigidez en el diseño, SEO limitado, falta de funcionalidades dinámicas avanzadas y dependencia de una plataforma de terceros.

## 2. Propuesta de Arquitectura del Sitio (Sitemap)

### A. Home (Landing Page de Conversión)
* **Hero Section:** Propuesta de valor inmediata ("Escala tu negocio con IA"). Call to Action (CTA) principal: Agendar consulta.
* **Pain Points:** Identificación de problemas comunes en empresas (procesos manuales, pérdida de leads).
* **Soluciones en 3 Pilares:** 1. Automatización de CRM (Odoo).
    2. Agentes de IA/Chatbots.
    3. Análisis de Datos.
* **Sección de Autoridad:** Trayectoria de Alex Maurici y propuesta diferencial.
* **Social Proof:** Logotipos de clientes y testimonios.

### B. Servicios (Páginas Detalladas)
* **Implementación de CRM:** Foco en la eficiencia operativa.
* **Agentes de Inteligencia Artificial:** Foco en atención al cliente 24/7 y ventas.
* **Automatización de Workflows:** Conexiones entre herramientas (Make/Zapier).

### C. Recursos / Blog (Nuevo)
* Artículos sobre tendencias de IA para posicionamiento SEO y educación del cliente.

### D. Contacto / Agendamiento
* Formulario inteligente e integración con Calendly.

## 3. Especificaciones Técnicas (Stack Recomendado)
Para el desarrollo en **VS Code**, se sugiere un entorno moderno y escalable:
* **Framework:** Next.js 14+ (React) por su excelente manejo de SEO y velocidad.
* **Estilos:** Tailwind CSS para un diseño responsivo y "pixel perfect".
* **Animaciones:** Framer Motion para dar esa sensación de "tecnología de punta".
* **Deployment:** Vercel (integración continua con GitHub).
* **CMS (Opcional):** Contentful o Sanity si se desea gestionar el blog sin tocar código.

## 4. Fase de Diseño UI/UX
* **Estética:** Dark mode o Minimalista Tecnológico (uso de gradientes sutiles, fuentes sans-serif modernas como *Inter* o *Geist*).
* **Interactividad:** Gráficos que reaccionen al scroll para explicar procesos de automatización.

## 5. Plan de Ejecución
1.  **Auditoría de Contenido:** Extracción de textos y activos actuales.
2.  **Definición de Wireframes:** Estructura en blanco y negro de la navegación.
3.  **Configuración del Entorno:** Setup del repositorio en GitHub y proyecto base en VS Code.
4.  **Desarrollo Frontend:** Maquetación de componentes.
5.  **Integraciones:** Conexión con APIs de CRM y herramientas de agendamiento.
6.  **SEO & Launch:** Configuración de metadatos y migración de DNS.
