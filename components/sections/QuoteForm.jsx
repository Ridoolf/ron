"use client";

import { useState } from "react";
import { BUDGET_TYPES, buildWhatsAppUrl } from "@/lib/whatsapp";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { BudgetTypeSelect } from "@/components/ui/BudgetTypeSelect";

export function QuoteForm() {
  const [form, setForm] = useState({
    tipo: "reformas",
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = buildWhatsAppUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-0";

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="tipo" className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">
            Tipo de presupuesto
          </label>
          <BudgetTypeSelect
            id="tipo"
            name="tipo"
            value={form.tipo}
            options={BUDGET_TYPES}
            onChange={(tipo) => setForm((prev) => ({ ...prev, tipo }))}
            required
            className={cn(inputClass, "cursor-pointer")}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">
              Nombre y apellido
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={handleChange}
              className={inputClass}
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefono" className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={form.telefono}
            onChange={handleChange}
            className={inputClass}
            placeholder="11 0000 0000"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={handleChange}
            className={cn(inputClass, "resize-none")}
            placeholder="Contanos brevemente qué necesitás..."
          />
        </div>

        <button type="submit" className={buttonVariants({ variant: "accent", size: "lg" })}>
          Enviar por WhatsApp
        </button>
      </form>
    </FadeIn>
  );
}
