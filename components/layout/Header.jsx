"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { BrandWordmark } from "./BrandWordmark";
import { DesktopNav } from "./DesktopNav";
import { LogoMark } from "./LogoMark";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-dark text-dark-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <LogoMark className="h-11 w-11 text-dark-foreground" />
          <BrandWordmark />
        </Link>

        <DesktopNav />

        <div className="flex flex-1 items-center justify-end gap-3 lg:flex-none">
          <Link
            href="/contacto"
            className={cn(
              buttonVariants({ variant: "accent", size: "sm" }),
              "hidden font-[family-name:var(--font-montserrat)] md:inline-flex"
            )}
          >
            Solicitar presupuesto
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
