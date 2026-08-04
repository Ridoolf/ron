import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";

export function ServiceDetail({ service }) {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="max-w-3xl">
          <p className="text-sm text-muted-foreground">{service.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
          <Link
            href="/contacto"
            className={buttonVariants({ variant: "default" }) + " mt-6 inline-flex"}
          >
            Solicitar presupuesto
          </Link>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl">Qué incluye</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl">Proceso</h2>
            <ol className="mt-4 space-y-3">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-medium text-accent">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>

        {service.benefits?.length > 0 && (
          <FadeIn delay={0.15} className="mt-14 rounded-sm border border-border bg-card p-8">
            <h2 className="text-2xl">Beneficios</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="text-sm text-muted-foreground">
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        )}

        {service.faq?.length > 0 && (
          <FadeIn delay={0.2} className="mt-14">
            <h2 className="text-2xl">Preguntas frecuentes</h2>
            <div className="mt-6 space-y-4">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-sm border border-border bg-background p-4"
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

        <FadeIn delay={0.25} className="mt-14 text-center">
          <Link href="/contacto" className={buttonVariants({ variant: "accent" }) + " inline-flex"}>
            Solicitar presupuesto
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
