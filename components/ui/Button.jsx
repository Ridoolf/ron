import { cn } from "@/lib/utils";

const variants = {
  default:
    "bg-dark text-dark-foreground hover:bg-dark/90 focus-visible:ring-dark",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent",
  outline:
    "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 focus-visible:ring-foreground/30",
  ghost:
    "bg-transparent text-foreground hover:bg-foreground/5 focus-visible:ring-foreground/20",
};

const sizes = {
  sm: "h-9 px-4 text-xs tracking-wide uppercase",
  md: "h-11 px-6 text-sm tracking-wide uppercase",
  lg: "h-12 px-8 text-sm tracking-wide uppercase",
};

export function Button({
  className,
  variant = "default",
  size = "md",
  asChild = false,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (asChild) {
    return children;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function buttonVariants({ variant = "default", size = "md", className } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variants[variant],
    sizes[size],
    className
  );
}
