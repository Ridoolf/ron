export const IMAGES = {
  hero: {
    home: "/images/hero/home.webp",
    servicios: "/images/hero/servicios.webp",
    nosotros: "/images/hero/nosotros.webp",
  },
  og: {
    default: "/images/og/og-default.webp",
  },
  nosotros: {
    equipo: "/images/nosotros/equipo.webp",
  },
  zonas: {
    buenosAires: "/images/zonas/buenos-aires.webp",
    bariloche: "/images/zonas/bariloche.webp",
  },
};

export function getServiceImage(slug) {
  return `/images/servicios/${slug}.webp`;
}
