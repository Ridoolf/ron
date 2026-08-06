import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Benefits } from "@/components/sections/Benefits";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  siteConfig,
  trustItems,
  benefits,
  heroRotatingPhrases,
  heroFixedLine,
} from "@/lib/site";
import { getFeaturedServices } from "@/lib/services";

export default function HomePage() {
  return (
    <div className="section-float">
      <div className="home-hero-viewport">
        <Hero
          eyebrow={siteConfig.tagline}
          rotatingHeadline={{
            phrases: heroRotatingPhrases,
            fixedLine: heroFixedLine,
          }}
          subtitle="Mantenimiento integral en Buenos Aires y Bariloche."
          viewportFit
        />
        <TrustStrip items={trustItems} docked />
      </div>
      <ServiceGrid services={getFeaturedServices(6)} bubble />
      <Benefits items={benefits} bubble />
      <AboutPreview bubble />
      <CtaSection bubble />
    </div>
  );
}
