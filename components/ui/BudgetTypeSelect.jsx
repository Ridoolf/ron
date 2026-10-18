"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function BudgetTypeSelect({
  id: idProp,
  name,
  value,
  options,
  onChange,
  required = false,
  className,
}) {
  const autoId = useId();
  const id = idProp ?? autoId;
  const listboxId = `${id}-listbox`;
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  const selected = options.find((item) => item.value === value);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
        className={cn(className, "flex w-full items-center justify-between gap-3 text-left")}
      >
        <span className="truncate">{selected?.label ?? "Elegí una opción"}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180 text-accent"
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          className="nav-dropdown-panel absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-[var(--bubble-radius)] border border-white/10 bg-card py-1 shadow-[var(--shadow-bubble-lg)]"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    "block w-full px-3 py-2.5 text-left text-sm normal-case tracking-normal text-foreground transition-colors hover:bg-white/5 hover:text-accent",
                    isSelected && "bg-white/5 font-medium text-accent"
                  )}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
