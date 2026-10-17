import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";
import { HeroRotatingHeadline } from "@/components/sections/HeroRotatingHeadline";

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryHref = "/contacto",
  primaryLabel = "Solicitar presupuesto",
  secondaryHref = "/servicios",
  secondaryLabel = "Ver servicios",
  compact = false,
  backgroundImage,
  rotatingHeadline,
  viewportFit = false,
}) {
  if (compact) {
    const bg = backgroundImage;
    return (
      <section className="relative min-h-[42vh] overflow-hidden border-b border-white/10 md:min-h-[48vh]">
        {bg && (
          <>
            <Image
              src={bg}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
            <div className="hero-overlay-compact absolute inset-0" aria-hidden="true" />
          </>
        )}
        {!bg && <div className="absolute inset-0 bg-dark" aria-hidden="true" />}
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl items-end px-4 pb-14 pt-28 md:min-h-[48vh] md:px-8 md:pb-16 lg:px-10">
          <FadeIn>
            {eyebrow && <p className="hero-eyebrow text-label mb-0">{eyebrow}</p>}
            <h1 className="heading-display max-w-3xl text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="text-body mt-5 max-w-2xl text-base md:text-lg">{subtitle}</p>
            )}
          </FadeIn>
        </div>
      </section>
    );
  }

  const bg = backgroundImage ?? IMAGES.hero.home;

  return (
    <section
      className={
        viewportFit
          ? "relative h-full min-h-0 overflow-hidden"
          : "relative min-h-[88vh] overflow-hidden md:min-h-[92vh]"
      }
    >
      <Image
        src={bg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <div
        className={
          viewportFit
            ? "relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-start px-4 pt-16 pb-4 md:px-8 md:pt-20 lg:px-10"
            : "relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-28 md:min-h-[92vh] md:px-8 lg:px-10"
        }
      >
        <FadeIn className="max-w-4xl">
          {eyebrow && <p className="hero-eyebrow text-label mb-0">{eyebrow}</p>}
          {rotatingHeadline ? (
            <HeroRotatingHeadline
              phrases={rotatingHeadline.phrases}
              fixedLine={rotatingHeadline.fixedLine}
              className={`heading-display heading-hero text-[1.625rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem] ${viewportFit ? "mt-6" : "mt-8"}`}
            />
          ) : (
            <h1
              className={`heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem] ${viewportFit ? "mt-6" : "mt-8"}`}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className={`text-body max-w-xl text-base font-normal normal-case tracking-normal md:text-lg ${viewportFit ? "mt-5" : "mt-6"}`}
            >
              {subtitle}
            </p>
          )}
          <div className={`flex flex-wrap gap-4 ${viewportFit ? "mt-8" : "mt-10"}`}>
            <Link href={primaryHref} className={buttonVariants({ variant: "accent", size: "lg" })}>
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className={buttonVariants({ variant: "luxury", size: "lg" })}>
              {secondaryLabel}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
