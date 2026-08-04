import { cn } from "@/lib/utils";

export function BrandWordmark({ className }) {
  return (
    <div
      className={cn(
        "hidden font-[family-name:var(--font-montserrat)] uppercase leading-none text-dark-foreground sm:block",
        className
      )}
    >
      <span className="block text-[0.65rem] font-medium tracking-[0.12em] sm:text-[0.7rem]">
        Soluciones
      </span>
      <span className="block text-[0.65rem] font-medium tracking-[0.12em] sm:text-[0.7rem]">
        Integrales
      </span>
      <span className="block text-xl font-extrabold tracking-[0.06em] sm:text-2xl">
        Ron
      </span>
    </div>
  );
}
