import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }) {
  return (
    <div className={cn("mb-5", className)}>
      <p className="text-label">{children}</p>
      <div className="gold-rule mt-3" />
    </div>
  );
}

export function SectionHeading({ label, title, accent, className, align = "left" }) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      {label && <SectionLabel className={align === "center" ? "mx-auto w-fit" : undefined}>{label}</SectionLabel>}
      <h2 className="heading-section text-2xl md:text-3xl lg:text-4xl">
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-accent-strong">{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}
