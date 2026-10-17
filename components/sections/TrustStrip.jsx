import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function TrustStrip({ items, floating = false, docked = false }) {
  return (
    <section
      className={
        docked
          ? "relative z-10 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] md:pt-4 md:pb-5"
          : floating
            ? "relative z-10 -mt-16 pb-6 md:-mt-20 md:pb-8"
            : "border-b border-border bg-card py-6"
      }
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <article className="card-luminous-edge h-full p-5 text-center sm:p-6 sm:text-left">
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
