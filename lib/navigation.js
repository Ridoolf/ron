import { serviceGroups, services } from "./services";

export const mainNav = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
    children: [
      { label: "Quiénes somos", href: "/nosotros#quienes-somos" },
      { label: "Valores", href: "/nosotros#valores" },
      { label: "Zonas de trabajo", href: "/nosotros#zonas" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    groups: serviceGroups.map((group) => ({
      label: group.label,
      items: group.services
        .map((slug) => services.find((s) => s.slug === slug))
        .filter(Boolean)
        .map((service) => ({
          label: service.shortTitle,
          href: `/servicios/${service.slug}`,
          description: service.tagline,
        })),
    })),
  },
  {
    label: "Contacto",
    href: "/contacto",
    children: [
      { label: "Solicitar presupuesto", href: "/contacto" },
    ],
  },
];

export const footerNav = {
  servicios: services.map((service) => ({
    label: service.shortTitle,
    href: `/servicios/${service.slug}`,
  })),
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Todos los servicios", href: "/servicios" },
  ],
};
