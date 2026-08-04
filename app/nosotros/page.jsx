import { Hero } from "@/components/sections/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig, values, audiences } from "@/lib/site";

export const metadata = {
  title: "Nosotros",
  description: `Conocé al equipo de ${siteConfig.name}. Somos padre e hija con experiencia en mantenimiento, obra y tecnología.`,
};

export default function NosotrosPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Nosotros"
        title="Somos padre e hija"
        subtitle="Combinamos experiencia, compromiso y atención personalizada para cuidar edificios, casas y comercios."
      />

      <section id="quienes-somos" className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <FadeIn>
            <h2 className="text-3xl">Quiénes somos</h2>
            <div className="my-5 h-px w-16 bg-accent" />
            <p className="text-base leading-relaxed text-muted-foreground">
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
          <FadeIn delay={0.1} className="rounded-sm border border-border bg-card p-8">
            <p className="font-serif text-2xl">
              Un mantenimiento preventivo hoy evita reparaciones costosas mañana.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="valores" className="border-y border-border bg-muted py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <FadeIn className="mb-10">
            <h2 className="text-3xl">Valores</h2>
            <div className="my-5 h-px w-16 bg-accent" />
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.05} className="rounded-sm bg-card p-6">
                <h3 className="text-xl text-accent">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="zonas" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl">Zonas de trabajo</h2>
            <div className="my-5 h-px w-16 bg-accent" />
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Operamos en {siteConfig.zones.join(" y ")}. Atendemos propietarios,
              administradores y comercios que buscan un servicio confiable y
              personalizado.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-sm border border-border bg-card px-4 py-3 text-sm"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
