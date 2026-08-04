import {
  CircleDollarSign,
  Users,
  Siren,
  ClipboardCheck,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const icons = [CircleDollarSign, Users, Siren, ClipboardCheck];

export function Benefits({ items, title = "¿Cuáles son los beneficios de contratarnos?" }) {
  return (
    <section className="border-y border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl text-accent md:text-4xl">{title}</h2>
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <StaggerItem key={item.title}>
                <article className="flex h-full flex-col rounded-sm bg-card p-6 text-center transition-transform hover:-translate-y-0.5">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
                    <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
