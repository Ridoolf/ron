import Link from "next/link";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import { BrandWordmark } from "./BrandWordmark";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-dark text-dark-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <LogoMark className="h-10 w-auto" />
            <BrandWordmark className="block" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-dark-foreground/70">
            {siteConfig.tagline}. Arquitectura, construcción y tecnología para
            proyectos residenciales y comerciales.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-accent">
            Servicios
          </h3>
          <ul className="space-y-2 text-sm text-dark-foreground/75">
            {footerNav.servicios.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/servicios" className="transition-colors hover:text-accent">
                Ver todos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-accent">
            Empresa
          </h3>
          <ul className="space-y-2 text-sm text-dark-foreground/75">
            {footerNav.empresa.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-accent">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-dark-foreground/75">
            <li>
              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                WhatsApp: {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram {siteConfig.instagram}
              </a>
            </li>
            <li>{siteConfig.zones.join(" · ")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-dark-foreground/50">
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
