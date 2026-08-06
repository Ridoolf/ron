import { cn } from "@/lib/utils";

const variants = {
  light: "bubble text-foreground",
  dark: "bubble-dark",
  glass: "bubble-glass text-foreground",
};

export function BubbleCard({
  variant = "light",
  className,
  as: Component = "div",
  hover = false,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(variants[variant], hover && "bubble-hover", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
