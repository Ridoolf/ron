import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { getServiceImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export function ServiceGrid({
  services,
  title = "Nuestros servicios",
  showAllLink = true,
  bubble = false,
}) {
  return (
    <section className={cn(bubble ? "section-premium bg-muted/40" : "py-16 md:py-24")}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading label="Servicios" title={title} />
          {showAllLink && (
            <Link
              href="/servicios"
              className="text-label transition-colors hover:text-foreground"
            >
              Ver todos
            </Link>
          )}
        </FadeIn>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={`/servicios/${service.slug}`} className="group block h-full">
                <article className="card-premium flex h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image ?? getServiceImage(service.slug)}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                      aria-hidden="true"
                    />
                    <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="text-sm font-bold tracking-[0.08em] text-foreground">
                      {service.shortTitle}
                    </h3>
                    <p className="text-body mt-3 flex-1 text-sm normal-case tracking-normal">
                      {service.summary}
                    </p>
                    <span className="text-label mt-5 block text-[0.625rem]">Conocer más</span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
