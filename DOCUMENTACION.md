# Documentación Técnica del Desarrollo del Sitio Web
## Portafolio Profesional de Santiago Doncel Galvis

---

## 1. Enfoque de Diseño: Minimalismo, Liquid Glass & Tipografía de Lujo

El sitio web fue rediseñado bajo una dirección de arte minimalista, sobria y de alta gama:
- **Liquid Glass:** Los cuadros y tarjetas utilizan un efecto de vidrio líquido orgánico mediante `backdrop-filter: blur(28px) saturate(190%)`, fondo translúcido con sutil gradiente interno, reflejo especular en el borde superior (`linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)`) y sombras profundas multicapa que generan sensación de tridimensionalidad.
- **Tipografía Editorial de Lujo:**
  * **Bodoni Moda:** Tipografía serif con alto contraste entre trazos finos y gruesos, inspirada en los maestros Bodoni, Didot y Baskerville, empleada en títulos y encabezados.
  * **Plus Jakarta Sans:** Tipografía sans-serif geométrica contemporánea, limpia y espaciada para una lectura cómoda de párrafos y datos.
- **Textos Directos y Legibles:** Eliminación de citas artificiales o bloques de texto redundantes, privilegiando la concisión y la fuerza de los hechos demostrables.

---

## 2. Los Tres Sectores de Especialización

### A. Desarrollo de Software (`software.html`)
Centrado en los tres pilares solicitados:
1. **Creación de Páginas Web:** Sitios modernos, interfaces adaptativas a cualquier pantalla, arquitectura limpia y optimización de SEO técnico.
2. **Automatizaciones:** Integración de procesos de datos mediante flujos ETL, herramientas no-code (Make) y scripts para optimizar la toma de decisiones en pymes.
3. **Uso de Agentes de IA para Programación:** Empleo de arquitecturas multiagente y modelos de lenguaje (LLMs) asistiendo el ciclo de desarrollo mediante Prompt Engineering.
4. **Logro en Investigación:** 1.er puesto a nivel nacional en el XII Encuentro Nacional de Semilleros de Investigación (Mayo 2026) con el Semillero *TechCare*.
5. **Certificaciones Oracle Academy:** Java Foundations (2026), Database Foundations (2025) y Java Fundamentals (2025).

### B. Marketing & Medios (`marketing.html`)
Galería visual interactiva con fotografías reales y piezas comerciales:
- **Conciertos y Festivales Masivos:** Cobertura en *Rock al Parque*, conciertos de *Desorden Público*, *Festival Nuevas Voces* y presentaciones en vivo.
- **Fotografía de Producto & Campañas:** Composición por capas para *Fresa Mía* (Oblea desglosada) y diseño publicitario para el sector salud con *Dra. Alison Cuchia*.
- **Enlace a Instagram:** Conexión con el canal de creación [@sant_doncell](https://www.instagram.com/sant_doncell?evlk=MTVpcDYzenp3eTBoOA==).

### C. Ventas & Operaciones (`ventas.html`)
- **Sistemas POS & Control de Caja:** Operación experta de facturación electrónica y creación del *Checklist de Arqueo* con el que se redujeron en un 90% las inconsistencias contables en *Fresa Mía*.
- **Planificación Logística:** Reorganización de turnos en *JR Logística* por curvas de demanda, disminuyendo horas extra innecesarias.
- **Eventos Gastronómicos:** Coordinación de montaje y despacho rápido en el *Coca-Cola Food Fest*.

---

## 3. Contacto Directo (`contacto.html`)

En concordancia con el principio de minimalismo:
- Se eliminó el formulario de mensaje tradicional para dar paso a una interfaz limpia de contacto inmediato mediante tarjetas *Liquid Glass*:
  * Correo electrónico: `santdoncel@gmail.com`
  * WhatsApp / Móvil: `+57 305 3490660`
  * Perfil en LinkedIn: `santiago-doncel-4a2b92311`
  * Repositorios en GitHub: `Santiago-Doncel`
  * Instagram: `@sant_doncell`
  * Ubicación: Bogotá D.C., Colombia

---

## 4. Despliegue en GitHub Pages

1. Inicializar / confirmar cambios en Git local:
   ```powershell
   cd C:\Users\santd\.gemini\antigravity\scratch\portafolio-santiago-doncel
   git add -A
   git commit -m "Refactor: diseno minimalista liquid glass y tipografia Bodoni"
   ```
2. Vincular y enviar al repositorio remoto:
   ```powershell
   git remote add origin https://github.com/Santiago-Doncel/portafolio-santiago-doncel.git
   git branch -M main
   git push -u origin main
   ```
3. Activar en GitHub: **Settings > Pages > Deploy from branch (main / root)**.
