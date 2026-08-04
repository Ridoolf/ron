import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function TrustStrip({ items }) {
  return (
    <section className="border-b border-border bg-dark py-6 text-dark-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.label} className="text-center sm:text-left">
              <p className="font-serif text-lg text-accent">{item.label}</p>
              <p className="mt-1 text-sm text-dark-foreground/70">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
