import { cn } from "@/lib/utils";

/** Ruta del logo vectorial oficial */
export const LOGO_SRC = "/logosvg.svg";

export function LogoMark({ className, title = "Soluciones Integrales RON" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="58 48 133 214"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("h-[2.875rem] w-auto shrink-0", className)}
    >
      <title>{title}</title>
      <path
        fill="#FFFFFF"
        d="M 152.0 48.0 L 101.0 83.0 L 102.0 117.0 L 58.0 148.0 L 58.0 262.0 L 162.0 262.0 L 152.0 254.0 Z M 101.0 171.0 L 102.0 254.0 L 68.0 255.0 L 66.0 251.0 L 66.0 197.0 Z M 111.0 167.0 L 144.0 192.0 L 143.0 256.0 L 112.0 256.0 L 110.0 254.0 Z M 143.0 64.0 L 144.0 178.0 L 109.0 155.0 L 67.0 185.0 L 66.0 154.0 L 100.0 129.0 L 102.0 151.0 L 110.0 145.0 L 110.0 87.0 Z"
      />
      <path
        fill="#DDAF62"
        d="M 160.0 135.0 L 160.0 144.0 L 185.0 164.0 L 185.0 255.0 L 167.0 257.0 L 170.0 262.0 L 191.0 262.0 L 191.0 159.0 Z"
      />
    </svg>
  );
}
