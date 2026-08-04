import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Benefits } from "@/components/sections/Benefits";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaSection } from "@/components/sections/CtaSection";
import { siteConfig, trustItems, benefits } from "@/lib/site";
import { getFeaturedServices } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={siteConfig.tagline}
        title="Arquitectura, construcción y tecnología para proyectos residenciales y comerciales"
        subtitle="Mantenimiento preventivo y correctivo, refacciones, diseño, instalaciones eléctricas y domótica. Buenos Aires y Bariloche."
      />
      <TrustStrip items={trustItems} />
      <ServiceGrid services={getFeaturedServices(6)} />
      <Benefits items={benefits} />
      <AboutPreview />
      <CtaSection />
    </>
  );
}
