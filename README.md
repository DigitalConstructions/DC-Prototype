<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Digital Constructions - Web Template

Plantilla web corporativa construida con React + TypeScript + Vite.

## Desarrollo local

Prerequisito: Node.js 18 o superior.

1. Instala dependencias:
   `npm install`
2. Ejecuta el entorno de desarrollo:
   `npm run dev`
3. Abre en navegador:
   `http://localhost:3000`

## Build de produccion

1. Genera build:
   `npm run build`
2. Previsualiza build localmente:
   `npm run preview`

## Despliegue en Netlify

El proyecto ya incluye configuracion en `netlify.toml` para SPA.

Opciones de despliegue:

1. Via Git (recomendada)
   - Conecta el repositorio en Netlify.
   - Build command: `npm run build`
   - Publish directory: `dist`

2. Via CLI
   - `npm install -g netlify-cli`
   - `netlify login`
   - `netlify init`
   - `netlify deploy --build --prod`

## Auto-deploy con GitHub Actions (rama desarrollo)

Este repositorio incluye el workflow `.github/workflows/deploy-netlify.yml`.

Funcionamiento:
- Cada `push` a la rama `desarrollo` ejecuta build y despliega a Netlify.

Configura en GitHub (Settings > Secrets and variables > Actions):
- `NETLIFY_AUTH_TOKEN`: token personal de Netlify.

El `NETLIFY_SITE_ID` ya esta configurado en el workflow para este proyecto.
