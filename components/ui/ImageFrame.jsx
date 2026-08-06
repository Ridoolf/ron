import Image from "next/image";
import { cn } from "@/lib/utils";

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
  card: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  hero: "aspect-[16/10] md:aspect-[16/9]",
};

const overlayClasses = {
  dark: "bg-gradient-to-t from-dark/95 via-dark/55 to-dark/25",
  darkStrong: "bg-gradient-to-t from-dark via-dark/70 to-dark/40",
  subtle: "bg-gradient-to-t from-dark/60 via-transparent to-transparent",
  none: "",
};

export function ImageFrame({
  src,
  alt,
  aspect = "card",
  overlay = "dark",
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  children,
}) {
  return (
    <div className={cn("relative overflow-hidden", aspectClasses[aspect], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {overlay !== "none" && (
        <div className={cn("absolute inset-0", overlayClasses[overlay])} aria-hidden="true" />
      )}
      {children}
    </div>
  );
}
