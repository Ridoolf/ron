import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { buttonVariants } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

export function AboutPreview({ bubble = false }) {
  return (
    <section className={bubble ? "section-premium bg-muted/40" : "py-16 md:py-24"}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-6">
        <FadeIn>
          <SectionHeading label="Nosotros" title="Somos padre e hija" />
          <p className="text-body mt-6 text-base">
            Combinamos experiencia, compromiso y atención personalizada para
            cuidar edificios, casas y comercios. Creemos en el mantenimiento
            preventivo, la transparencia en cada visita y soluciones que duran en
            el tiempo.
          </p>
          <Link
            href="/nosotros"
            className={buttonVariants({ variant: "outline", size: "md" }) + " mt-8 inline-flex"}
          >
            Conocer más
          </Link>
        </FadeIn>

        <FadeIn delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 shadow-[var(--shadow-premium)]">
            <Image
              src={IMAGES.nosotros.equipo}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="heading-section text-lg normal-case tracking-wide md:text-xl">
                Mantenemos y mejoramos lo que más valorás.
              </p>
              <ul className="text-body mt-5 space-y-2 text-sm normal-case tracking-normal">
                <li>Propietarios de edificios</li>
                <li>Dueños de casas</li>
                <li>Dueños de comercios</li>
                <li>Administradores de consorcios</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
