import { cn } from "@/lib/utils";

export function LogoMark({ className, title = "Soluciones Integrales RON" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("shrink-0", className)}
    >
      <title>{title}</title>
      <g
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M10 62V41L24 29V62" />
        <path d="M24 29L40 15L56 31V62" />
        <path d="M56 31L68 41V62" />
        <path d="M8 62H70" />
      </g>
    </svg>
  );
}
