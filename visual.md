content = """# Identidad Visual y Estilo de Diseño: Alex Maurici (Rediseño)

Este documento define las directrices visuales extraídas del sitio actual para asegurar la coherencia de marca durante la migración al entorno de desarrollo (VS Code).

## 1. Paleta de Colores (Brand Colors)
Se mantendrá un esquema basado en la tecnología, la limpieza y la confianza.

* **Azul Principal (Action Color):** `#007BFF` (o similar aproximado del sitio). Se usará para botones (CTAs), enlaces importantes e iconos destacados.
* **Fondo Primario:** `#FFFFFF` (Blanco). Mantiene el enfoque en el contenido y la legibilidad.
* **Fondo Secundario / Secciones:** `#F8F9FA` (Gris muy claro). Para separar bloques de contenido sin romper la armonía.
* **Tipografía Principal:** `#212529` (Gris casi negro). Para el cuerpo de texto y párrafos.
* **Tipografía de Títulos:** `#1A1A1A` (Negro profundo). Para jerarquizar encabezados.

## 2. Tipografía (Typography)
Buscamos una estética "Tech & Clean".
* **Familia Sugerida:** *Inter* o *Montserrat*. Ambas son sans-serif, modernas y optimizadas para interfaces de usuario.
* **Jerarquía:**
    * H1: Negrita (Bold), tamaño grande para la propuesta de valor.
    * H2: Seminegrita, para los títulos de servicios.
    * Body: Regular, interlineado amplio (1.6) para facilitar la lectura.

## 3. Elementos Gráficos y UI
* **Botones (CTAs):** Bordes ligeramente redondeados (`border-radius: 8px`). Efecto *hover* con cambio de tonalidad o sombra sutil.
* **Iconografía:** Estilo lineal y minimalista. Todos los iconos deben compartir el mismo grosor de trazo y color de marca.
* **Tarjetas (Cards):** Uso de sombras muy suaves (`box-shadow`) y bordes definidos para resaltar los servicios de automatización.
* **Espaciado (White Space):** Mantener amplios márgenes entre secciones para evitar la saturación visual y guiar la vista hacia los puntos de conversión.

## 4. Moodboard de Referencia (Look & Feel)
* **Atributos:** Profesional, Innovador, Automatizado, Directo.
* **Imágenes:** Uso de capturas de interfaz (dashboards de Odoo/CRM) y representaciones abstractas de redes/IA que no distraigan del texto.

## 5. Aplicación en el Código (Tailwind Config Preview)
Para la fase de desarrollo, configuraremos los colores en el archivo de estilos de la siguiente manera:

```javascript
// tailwind.config.js (previsualización)
theme: {
  extend: {
    colors: {
      brand: {
        blue: '#007BFF',
        dark: '#1A1A1A',
        light: '#F8F9FA',
      },
    },
  },
}