# Soluciones Integrales RON

Sitio web multipágina para **Soluciones Integrales RON** — arquitectura, construcción y tecnología para proyectos residenciales y comerciales en Buenos Aires y Bariloche.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4

## Requisitos

- Node.js 20 o superior
- npm 10+

## Desarrollo local

```bash
npm install
npm run check:images   # opcional: lista fotos faltantes en public/images/
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Si `npm install` falla con error de certificado SSL en Windows, el repo incluye `.npmrc` con `node-options=--use-system-ca`. Tras instalar, si Next avisa sobre `sharp`, ejecutá:

```bash
npm approve-scripts sharp
npm rebuild sharp
```

### Imágenes

Las rutas esperadas están documentadas en [`public/images/README.md`](public/images/README.md). Sin esos archivos WebP el sitio compila, pero los heroes y tarjetas no muestran fotos.

## Próximos pasos (diseño)

Opciones de animaciones y componentes para Fase 3: [`content/CATALOGO_ANIMACIONES.md`](content/CATALOGO_ANIMACIONES.md).

## Build

```bash
npm run build
npm run start
```

## Despliegue en Vercel

Proyecto Next.js estándar. Vercel detecta el framework automáticamente.

| Campo            | Valor         |
| ---------------- | ------------- |
| Build Command    | `npm run build` |
| Output Directory | (default)     |

## Estructura

```
app/              # Rutas y páginas (App Router)
components/       # Layout, secciones, UI
content/          # Contenido de servicios y referencias
lib/              # Config del sitio y datos
```

## Contacto del negocio

- Email: solucionesintegralesron@gmail.com
- Instagram: [@solucionesintegralesron](https://instagram.com/solucionesintegralesron)
