import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryHref = "/contacto",
  primaryLabel = "Solicitar presupuesto",
  secondaryHref = "/servicios",
  secondaryLabel = "Ver servicios",
  compact = false,
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-card",
        compact ? "py-16 md:py-20" : "min-h-[60vh] py-20 md:min-h-[65vh] md:py-24"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,149,106,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(42,38,34,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          {eyebrow && (
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-4xl leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
          {!compact && (
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={primaryHref} className={buttonVariants({ variant: "default" })}>
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className={buttonVariants({ variant: "outline" })}>
                {secondaryLabel}
              </Link>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
