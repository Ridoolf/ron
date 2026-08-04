import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";

export function CtaSection({
  title = "Solicitá tu presupuesto",
  description = "Contanos qué necesitás. Te respondemos por WhatsApp con atención personalizada.",
  href = "/contacto",
  label = "Ir al formulario",
}) {
  return (
    <section className="bg-muted py-16 md:py-20">
      <FadeIn className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <div className="mx-auto my-5 h-px w-16 bg-accent" />
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        <Link href={href} className={buttonVariants({ variant: "default" }) + " mt-8 inline-flex"}>
          {label}
        </Link>
      </FadeIn>
    </section>
  );
}
