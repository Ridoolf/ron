"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const navLinkClass =
  "rounded-sm px-4 py-2 font-[family-name:var(--font-montserrat)] text-xs font-medium uppercase tracking-[0.14em] text-dark-foreground/90 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const panelClass =
  "nav-dropdown-panel rounded-md border border-white/10 bg-dark text-dark-foreground shadow-xl";

function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return canHover;
}

function MegaMenuPanel({ groups }) {
  return (
    <div
      className={cn(
        panelClass,
        "grid w-[36rem] max-w-[calc(100vw-2rem)] grid-cols-3 gap-8 p-6"
      )}
    >
      {groups.map((group) => (
        <div key={group.label}>
          <p className="mb-3 font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-widest text-accent">
            {group.label}
          </p>
          <ul className="space-y-2">
            {group.items.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded-sm px-2 py-1.5 transition-colors hover:bg-white/5 hover:text-accent"
                >
                  <span className="block font-[family-name:var(--font-montserrat)] text-sm font-medium">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="mt-0.5 block text-xs text-dark-foreground/60">
                      {child.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SimpleMenuPanel({ items }) {
  return (
    <ul className={cn(panelClass, "w-48 space-y-1 p-2")}>
      {items.map((child) => (
        <li key={child.href}>
          <Link
            href={child.href}
            className="block rounded-sm px-3 py-2 font-[family-name:var(--font-montserrat)] text-sm transition-colors hover:bg-white/5 hover:text-accent"
          >
            {child.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function DesktopNav() {
  const canHover = useCanHover();
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 150);
  }, [clearCloseTimer]);

  const open = useCallback(
    (menuId) => {
      clearCloseTimer();
      setOpenMenu(menuId);
    },
    [clearCloseTimer]
  );

  const toggle = useCallback((menuId) => {
    setOpenMenu((current) => (current === menuId ? null : menuId));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!canHover && navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [canHover]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  return (
    <nav ref={navRef} aria-label="Principal" className="relative z-50 hidden lg:block">
      <ul className="flex items-center gap-1">
        {mainNav.map((item) => {
          const menuId = item.label.toLowerCase();
          const hasDropdown = item.children?.length || item.groups?.length;
          const isOpen = openMenu === menuId;

          if (!hasDropdown) {
            return (
              <li key={item.label}>
                <Link href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => canHover && open(menuId)}
              onMouseLeave={() => canHover && scheduleClose()}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => !canHover && toggle(menuId)}
                className={cn(
                  navLinkClass,
                  "inline-flex items-center gap-1",
                  isOpen && "text-accent"
                )}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {isOpen && (
                <div
                  className={cn(
                    "absolute top-full z-50 pt-2",
                    item.groups ? "left-1/2 -translate-x-1/2" : "left-0"
                  )}
                  onMouseEnter={() => canHover && clearCloseTimer()}
                  onMouseLeave={() => canHover && scheduleClose()}
                >
                  {item.groups ? (
                    <MegaMenuPanel groups={item.groups} />
                  ) : (
                    <SimpleMenuPanel items={item.children} />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
