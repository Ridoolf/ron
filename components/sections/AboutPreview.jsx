import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Nosotros</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Somos padre e hija</h2>
          <div className="my-5 h-px w-16 bg-accent" />
          <p className="text-base leading-relaxed text-muted-foreground">
            Combinamos experiencia, compromiso y atención personalizada para
            cuidar edificios, casas y comercios. Creemos en el mantenimiento
            preventivo, la transparencia en cada visita y soluciones que duran en
            el tiempo.
          </p>
          <Link href="/nosotros" className={buttonVariants({ variant: "outline", size: "md" }) + " mt-8 inline-flex"}>
            Conocer más
          </Link>
        </FadeIn>

        <FadeIn delay={0.1} className="rounded-sm border border-border bg-card p-8">
          <p className="font-serif text-2xl leading-snug">
            Mantenemos y mejoramos lo que más valorás.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>Propietarios de edificios</li>
            <li>Dueños de casas</li>
            <li>Dueños de comercios</li>
            <li>Administradores de consorcios</li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
