import { Hero } from "@/components/sections/Hero";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = {
  title: "Contacto",
  description: `Solicitá presupuesto para reformas, diseño o administración de consorcio. ${siteConfig.name}.`,
};

export default function ContactoPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contacto"
        title="Solicitá tu presupuesto"
        subtitle="Completá el formulario y te derivamos a WhatsApp con tu consulta lista para enviar."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <FadeIn>
              <h2 className="text-3xl uppercase tracking-wide">Solicita tu presupuesto</h2>
              <div className="my-5 h-1 w-16 bg-foreground" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Elegí el tipo de servicio que necesitás — reformas, diseño,
                administración de consorcio u otro — y envianos tu consulta por
                WhatsApp. Atención personalizada y respuesta rápida.
              </p>
            </FadeIn>
            <div className="mt-10">
              <QuoteForm />
            </div>
          </div>

          <FadeIn delay={0.1} className="flex flex-col justify-center">
            <div className="rounded-sm border border-border bg-card p-8">
              <h3 className="font-serif text-2xl">Datos de contacto</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li>
                  <span className="block text-xs uppercase tracking-wide text-foreground">
                    WhatsApp
                  </span>
                  <a
                    href={buildDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-foreground">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-foreground">
                    Instagram
                  </span>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {siteConfig.instagram}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-foreground">
                    Zonas
                  </span>
                  {siteConfig.zones.join(" · ")}
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
