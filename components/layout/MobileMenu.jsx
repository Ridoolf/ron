"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const mobileNavClass =
  "font-[family-name:var(--font-montserrat)] uppercase tracking-[0.12em]";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-dark-foreground transition-colors hover:bg-white/10"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col rounded-l-2xl bg-dark px-6 py-6 text-dark-foreground shadow-[var(--shadow-bubble-lg)] transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className={cn(mobileNavClass, "text-sm font-semibold")}>Menú</span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {mainNav
            .filter((item) => item.href !== "/contacto")
            .map((item) => (
            <div key={item.label} className="border-b border-white/10 py-3">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(mobileNavClass, "block text-sm font-medium")}
              >
                {item.label}
              </Link>

              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    mobileNavClass,
                    "mt-2 block pl-3 text-xs font-normal normal-case tracking-normal text-dark-foreground/75 hover:text-accent"
                  )}
                >
                  {child.label}
                </Link>
              ))}

              {item.groups?.map((group) => (
                <div key={group.label} className="mt-3">
                  <p
                    className={cn(
                      mobileNavClass,
                      "mb-2 pl-3 text-[0.65rem] font-semibold tracking-widest text-accent"
                    )}
                  >
                    {group.label}
                  </p>
                  {group.items.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        mobileNavClass,
                        "block py-1.5 pl-3 text-xs font-normal normal-case tracking-normal text-dark-foreground/75 hover:text-accent"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Link
          href="/contacto"
          onClick={() => setOpen(false)}
          className={cn(
            buttonVariants({ variant: "accent" }),
            mobileNavClass,
            "mt-6 w-full text-xs"
          )}
        >
          Solicitar presupuesto
        </Link>
      </nav>
    </div>
  );
}
