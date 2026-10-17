import {
  CircleDollarSign,
  Users,
  Siren,
  ClipboardCheck,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionLabel";

const icons = [CircleDollarSign, Users, Siren, ClipboardCheck];

export function Benefits({
  items,
  title = "¿Cuáles son los beneficios de contratarnos?",
  bubble = false,
}) {
  return (
    <section className={bubble ? "section-premium bg-background" : "border-y border-border py-16 md:py-24"}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
          <SectionHeading title={title} align="center" />
        </FadeIn>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <StaggerItem key={item.title}>
                <article className="card-luminous-edge flex h-full flex-col p-7 text-center md:p-8">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-accent/30 bg-accent/5">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-sm font-bold tracking-[0.06em] text-accent">
                    {item.title}
                  </h3>
                  <p className="text-body mt-3 text-sm normal-case tracking-normal">
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
