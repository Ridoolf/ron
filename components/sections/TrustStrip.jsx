import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function TrustStrip({ items, floating = false, docked = false }) {
  return (
    <section
      className={
        docked
          ? "relative z-10 pb-[max(1rem,env(safe-area-inset-bottom))] md:pb-5"
          : floating
            ? "relative z-10 -mt-16 pb-6 md:-mt-20 md:pb-8"
            : "border-b border-border bg-card py-6"
      }
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <article className="h-full border border-white/10 bg-card p-5 text-center transition-colors hover:border-accent/35 sm:p-6 sm:text-left">
                <p className="text-label text-[0.625rem]">{item.label}</p>
                <p className="text-body mt-2 text-sm normal-case tracking-normal">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
