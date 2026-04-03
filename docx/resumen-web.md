# Resumen de la web DC-Prototype

## 1. Vision general
DC-Prototype es una web corporativa tipo landing multipagina para una consultora de tecnologia orientada a:
- implementacion de soluciones digitales,
- automatizaciones B2B,
- desarrollo de software a medida.

La aplicacion esta construida con React + TypeScript sobre Vite y usa una estetica oscura con animaciones y fondo dinamico estilo Matrix.

## 2. Stack tecnologico
- Frontend: React 19 + TypeScript.
- Bundler y desarrollo local: Vite 6.
- Routing: react-router-dom.
- UI y animaciones: Tailwind CSS + motion + lucide-react.
- Internacionalizacion: i18next + react-i18next.

## 3. Estructura funcional de la app
- Punto de entrada: src/main.tsx.
- Componente raiz con rutas y layout global: src/App.tsx.
- Layout persistente en todas las paginas:
  - Navbar fijo superior,
  - Footer,
  - Fondo Matrix animado (canvas).

## 4. Rutas principales
Definidas en src/App.tsx:
- / -> Home.
- /about -> pagina de empresa.
- /contact -> pagina de contacto.
- /privacy -> politica de privacidad.
- /terms -> terminos y condiciones.
- /services/:id -> detalle dinamico de servicio.
- /automations -> detalle de automatizaciones B2B.

## 5. Home y secciones
La home (src/pages/Home.tsx) compone varias secciones en este orden:
- Hero.
- Services.
- Automations.
- CostComparison.
- TechStack.

Esto crea un flujo tipico de conversion:
- propuesta de valor,
- catalogo de servicios,
- casos de automatizacion,
- comparativa de costos,
- tecnologias utilizadas.

## 6. Datos y contenido
- Servicios cargados desde src/data/services.tsx.
- Cada servicio contiene:
  - id,
  - iconos,
  - titulo y descripcion,
  - descripcion larga,
  - lista de capacidades.

La ruta /services/:id busca el servicio por id y renderiza la vista de detalle. Si no existe, muestra estado Service Not Found.

## 7. Navegacion y UX
Navbar (src/components/Navbar.tsx):
- Navegacion contextual a secciones de home (#services y #automations).
- Links a About y Contact.
- Boton de cambio de idioma EN/ES en caliente.
- CTA de contacto visible en la cabecera.

ServiceDetail y AutomationDetail:
- usan tarjetas, tipografia grande y animaciones de entrada,
- incluyen CTA final para pasar a Contact.

## 8. Internacionalizacion
Configurada en src/i18n/index.ts con recursos en:
- src/i18n/locales/en.ts
- src/i18n/locales/es.ts

Comportamiento actual:
- idioma por defecto: en,
- fallback: en,
- cambio de idioma desde navbar.

## 9. Estilo visual
- Tema oscuro con alto contraste.
- Fondo animado Matrix en canvas para reforzar identidad tecnica.
- Componentes con bordes translucidos, blur y gradientes suaves.
- Uso de iconografia tecnica para reforzar jerarquia visual.

## 10. Variables de entorno y ejecucion
README y .env.example quedan preparados para configuracion simple de entorno:
- SITE_URL opcional para URL publica.

Comandos principales:
- npm install
- npm run dev
- npm run build
- npm run preview

## 11. Observaciones para contexto futuro
- Es una base de presentacion comercial, no una plataforma transaccional.
- El contenido de servicios es mayormente estatico y centralizado en un archivo de datos.
- Arquitectura limpia y facil de extender con nuevas rutas o bloques de home.

## 12. Estado actual (2 abril 2026)
- Repositorio clonado correctamente.
- Dependencias instaladas con exito.
- Servidor de desarrollo funcionando en http://localhost:3000/.
