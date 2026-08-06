import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";
import { getServiceImage } from "@/lib/images";

export function ServiceDetail({ service }) {
  const imageSrc = service.image ?? getServiceImage(service.slug);

  return (
    <div className="pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 pt-8 md:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--bubble-radius)] shadow-[var(--shadow-premium)]">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mt-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">{service.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {service.summary}
          </p>
          <Link
            href="/contacto"
            className={buttonVariants({ variant: "accent" }) + " mt-8 inline-flex"}
          >
            Solicitar presupuesto
          </Link>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl md:text-3xl">Qué incluye</h2>
            <div className="gold-rule mt-4 mb-6" />
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-3xl">Proceso</h2>
            <div className="gold-rule mt-4 mb-6" />
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm text-muted-foreground md:text-base">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent/30 text-xs font-medium text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>

        {service.benefits?.length > 0 && (
          <FadeIn delay={0.15} className="mt-16 border border-white/10 bg-card p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl">Beneficios</h2>
            <div className="gold-rule mt-4 mb-6" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="text-sm text-muted-foreground md:text-base">
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        )}

        {service.faq?.length > 0 && (
          <FadeIn delay={0.2} className="mt-16">
            <h2 className="text-2xl md:text-3xl">Preguntas frecuentes</h2>
            <div className="gold-rule mt-4 mb-6" />
            <div className="space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group border border-white/10 bg-card p-5"
                >
                  <summary className="cursor-pointer list-none font-medium">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.25} className="mt-16 text-center">
          <Link href="/contacto" className={buttonVariants({ variant: "accent" }) + " inline-flex"}>
            Solicitar presupuesto
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
