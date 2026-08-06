"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ items }) {
  const pathname = usePathname();

  const crumbs = items ?? [
    { label: "Inicio", href: "/" },
  ];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-white/10 bg-card">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-sm text-muted-foreground md:px-6">
        {crumbs.map((item, index) => {
          const isLast = index === crumbs.length - 1;
          const isActive = item.href === pathname;

          return (
            <span key={`${item.href}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast || isActive ? (
                <span className="text-foreground">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
