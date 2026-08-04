# Catálogo de animaciones y componentes — Soluciones Integrales RON

Este documento reúne las opciones del plan para que elijas qué pulir en la Fase 3.
La implementación base ya incluye las opciones **recomendadas** marcadas con ✅.

---

## Implementado en v1 (defaults recomendados)

| Área | Elección aplicada | Demo / referencia |
|------|-------------------|-------------------|
| Navegación desktop | ✅ Radix Navigation Menu | https://www.radix-ui.com/primitives/docs/components/navigation-menu |
| Menú mobile | ✅ Panel slide desde la derecha (custom + Motion CSS) | Similar a drawer lateral |
| Scroll reveal | ✅ Fade + slide up (`whileInView`) | https://motion.dev/examples/react |
| Cards beneficios | ✅ Stagger + hover lift sutil | — |
| Formulario | ✅ Inputs underline (estilo foto 5) | — |
| WhatsApp float | ✅ Círculo fijo + pulse suave | — |
| Transiciones de página | ✅ Sin transición (máxima claridad) | — |

---

## A) Navegación desktop — alternativas

| Opción | Demo | Notas |
|--------|------|-------|
| Radix Navigation Menu ✅ | https://www.radix-ui.com/primitives/docs/components/navigation-menu | Actual |
| Headless UI Menu | https://headlessui.com/react/menu | Scale/fade configurable |
| CSS-only hover | — | Mínimo JS |

---

## B) Menú mobile — alternativas

| Opción | Demo | Animaciones |
|--------|------|-------------|
| Panel slide custom ✅ | — | translate-x desde derecha |
| react-burger-menu | https://negomi.github.io/react-burger-menu/ | slide, stack, elastic, bubble, push, pushRotate, scaleDown, scaleRotate, fallDown, reveal |
| Vaul Drawer | https://vaul.emilkowal.ski/ | Drawer inferior o lateral |

---

## C) Animaciones de scroll — alternativas

**Motion:** https://motion.dev/examples/react

| Efecto | Uso sugerido | Estado |
|--------|--------------|--------|
| Fade + slide up | Secciones al entrar en viewport | ✅ Activo |
| Stagger children | Grid de beneficios/servicios | ✅ Activo |
| Layout animation | Filtros de portfolio futuro | Pendiente |
| Page transition fade | Cambio entre rutas | Opcional |
| Parallax | Hero | ❌ No recomendado (scroll infinito) |

**Magic UI:** https://magicui.design/docs/components

- Blur Fade
- Animated Grid Pattern (fondo hero sutil)
- Shimmer Button
- Number Ticker (stats: "15 días", "24 hs")

**Aceternity UI:** https://ui.aceternity.com/components

- Text Reveal Card
- Timeline
- Bento Grid
- Placeholders and Vanish Input (formulario)

---

## D) Componentes de sección — alternativas

| Sección | Opciones |
|---------|----------|
| Cards beneficios | Grid estático · Hover lift ✅ · Icon draw-on-hover |
| Formulario | Underline ✅ · Placeholders and Vanish · Select animado Radix |
| Hero servicios | Tipografía + línea dorada ✅ · Imagen con overlay |
| WhatsApp | Pulse ✅ · Botón expandible con tooltip |

---

## Cómo elegir

Respondé en el chat con los números o nombres, por ejemplo:

- Mobile: `react-burger-menu / elastic`
- Scroll: `Blur Fade` + `Number Ticker`
- Formulario: `Placeholders and Vanish Input`

Con eso reemplazamos los defaults en una segunda pasada de diseño.
