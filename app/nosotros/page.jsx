import { Hero } from "@/components/sections/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { siteConfig, values, audiences } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Nosotros",
  description: `Conocé al equipo de ${siteConfig.name}. Somos padre e hija con experiencia en mantenimiento, obra y tecnología.`,
};

export default function NosotrosPage() {
  return (
    <>
      <Hero
        compact
        backgroundImage={IMAGES.hero.nosotros}
        eyebrow="Nosotros"
        title="Somos padre e hija"
        subtitle="Combinamos experiencia, compromiso y atención personalizada para cuidar edificios, casas y comercios."
      />

      <section id="quienes-somos" className="section-premium">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-6">
          <FadeIn>
            <h2 className="heading-section text-3xl md:text-4xl">Quiénes somos</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              En {siteConfig.name} trabajamos con un enfoque cercano y
              profesional. Somos un equipo familiar que entiende la importancia
              de mantener edificios, hogares y comercios en óptimas condiciones,
              con visitas planificadas, informes claros y respuesta ante
              urgencias.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Mantenemos y mejoramos lo que más valorás: tu inversión, tu espacio
              y la tranquilidad de quienes lo habitan o administran.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ImageFrame
              src={IMAGES.nosotros.equipo}
              alt=""
              aspect="portrait"
              overlay="darkStrong"
              className="rounded-[var(--bubble-radius)] shadow-[var(--shadow-premium)]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </section>

      <section id="valores" className="bg-dark py-20 text-dark-foreground md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <FadeIn className="mb-12">
            <h2 className="heading-section text-3xl md:text-4xl">Valores</h2>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn
                key={value.title}
                delay={index * 0.05}
                className="border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <h3 className="text-xl text-accent">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark-foreground/70">
                  {value.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="zonas" className="section-premium">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <FadeIn>
            <h2 className="heading-section text-3xl md:text-4xl">Zonas de trabajo</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Operamos en {siteConfig.zones.join(" y ")}. Atendemos propietarios,
              administradores y comercios que buscan un servicio confiable y
              personalizado.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <ImageFrame
                src={IMAGES.zonas.buenosAires}
                alt=""
                aspect="video"
                overlay="dark"
                className="rounded-[var(--bubble-radius)] shadow-[var(--shadow-bubble-lg)]"
              >
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">Buenos Aires</p>
                  <p className="mt-2 font-brand text-xl font-bold text-dark-foreground">CABA / GBA</p>
                </div>
              </ImageFrame>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ImageFrame
                src={IMAGES.zonas.bariloche}
                alt=""
                aspect="video"
                overlay="dark"
                className="rounded-[var(--bubble-radius)] shadow-[var(--shadow-bubble-lg)]"
              >
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">Patagonia</p>
                  <p className="mt-2 font-brand text-xl font-bold text-dark-foreground">Bariloche</p>
                </div>
              </ImageFrame>
            </FadeIn>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="border border-border bg-card px-4 py-3 text-sm"
              >
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
