import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function ServiceGrid({ services, title = "Nuestros servicios", showAllLink = true }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Servicios</p>
            <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
          </div>
          {showAllLink && (
            <Link
              href="/servicios"
              className="text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent"
            >
              Ver todos
            </Link>
          )}
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/servicios/${service.slug}`}
                className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl">{service.shortTitle}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-4 text-xs uppercase tracking-wide text-accent">
                  Conocer más
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
