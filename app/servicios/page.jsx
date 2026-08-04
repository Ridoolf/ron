import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Hero } from "@/components/sections/Hero";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Servicios",
  description: `Servicios de ${siteConfig.name}: mantenimiento, refacciones, diseño, electricidad, domótica y más.`,
};

export default function ServiciosPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Servicios"
        title="Soluciones integrales para cada necesidad"
        subtitle="Mantenimiento, proyectos y tecnología con un mismo equipo de confianza."
      />
      <ServiceGrid services={services} title="Todos nuestros servicios" showAllLink={false} />
    </>
  );
}
