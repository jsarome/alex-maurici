content = """# Datos de Contacto y Configuración de Mapa: Alex Maurici

Este documento centraliza la información necesaria para configurar los enlaces de comunicación y la integración de ubicación en el nuevo sitio desarrollado en VS Code.

## 1. Información de Contacto Directo
Utiliza estos datos para los botones de acción (CTAs), el pie de página (Footer) y la página de contacto.

* **Nombre / Titular:** Alex Maurici
* **Email de Consultas:** contacto@growintell.com
* **Sitio Web Actual:** [alexmaurici.com](https://alexmaurici.com/)
* **Marca Relacionada:** SmartIntel IA / GrowIntell

## 2. Enlaces de Comunicación (Protocolos)
Para que los botones funcionen correctamente en el código, utiliza estos formatos:

* **Email Link:** `mailto:contacto@growintell.com`
* **Web Link:** `https://alexmaurici.com`
* **WhatsApp (Sugerido):** `https://wa.me/TUNUMERO` (Reemplazar 'TUNUMERO' por el número de teléfono con código de país).

## 3. Integración de Mapa (Ubicación)
Si decides incluir una sección de ubicación, aquí tienes el código base para insertarlo de forma limpia y responsiva.

### Opción A: Iframe Estándar (Recomendado para Landing)
Este código es el más sencillo de implementar en un componente de React/Next.js:

```html
<div class="map-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="[https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.000000000000!2d-64.0000000!3d-31.0000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAwJzAwLjAiUyA2NMKwMDAnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.000000000000!2d-64.0000000!3d-31.0000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAwJzAwLjAiUyA2NMKwMDAnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890)" 
    width="100%" 
    height="100%" 
    style="border:0; position: absolute; top: 0; left: 0;" 
    allowfullscreen="" 
    loading="lazy">
  </iframe>
</div>