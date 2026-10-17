# Imágenes del sitio

Colocá archivos **WebP** en estas rutas (relativas a `public/`). El código las referencia desde `lib/images.js`.

## Heroes (fondo, ~1920×1080 o más)

| Archivo | Uso |
|---------|-----|
| `hero/home.webp` | Home y contacto |
| `hero/servicios.webp` | Listado de servicios |
| `hero/nosotros.webp` | Página Nosotros |

## Open Graph (~1200×630)

| Archivo | Uso |
|---------|-----|
| `og/og-default.webp` | Vista previa al compartir en redes |

## Nosotros y zonas

| Archivo | Uso |
|---------|-----|
| `nosotros/equipo.webp` | Foto del equipo |
| `zonas/buenos-aires.webp` | Zona CABA/GBA |
| `zonas/bariloche.webp` | Zona Bariloche |

## Servicios (tarjetas y detalle, ~1200×800)

Un archivo por slug en `servicios/`:

- `mantenimiento-consorcios.webp`
- `mantenimiento-integral.webp`
- `refacciones-diseno.webp`
- `direccion-obra.webp`
- `instalaciones-electricas.webp`
- `domotica.webp`
- `planos-documentacion.webp`

## Verificación

```bash
npm run check:images
```
