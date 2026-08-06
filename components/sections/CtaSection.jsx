import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

export function CtaSection({
  title = "Solicitá tu presupuesto",
  description = "Contanos qué necesitás. Te respondemos por WhatsApp con atención personalizada.",
  href = "/contacto",
  label = "Ir al formulario",
  bubble = false,
}) {
  if (!bubble) {
    return (
      <section className="bg-muted py-16 md:py-24">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <div className="gold-rule mx-auto my-6" />
          <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
          <Link href={href} className={buttonVariants({ variant: "default" }) + " mt-8 inline-flex"}>
            {label}
          </Link>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src={IMAGES.hero.home}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-dark/88" aria-hidden="true" />

      <FadeIn className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="heading-section text-2xl md:text-3xl lg:text-4xl">{title}</h2>
        <div className="gold-rule mx-auto my-6" />
        <p className="text-body text-base md:text-lg">{description}</p>
        <Link
          href={href}
          className={buttonVariants({ variant: "accent", size: "lg" }) + " mt-10 inline-flex"}
        >
          {label}
        </Link>
      </FadeIn>
    </section>
  );
}
