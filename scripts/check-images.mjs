import { access } from "node:fs/promises";
import { join } from "node:path";

const publicDir = join(process.cwd(), "public");

const required = [
  "images/hero/home.webp",
  "images/hero/servicios.webp",
  "images/hero/nosotros.webp",
  "images/og/og-default.webp",
  "images/nosotros/equipo.webp",
  "images/zonas/buenos-aires.webp",
  "images/zonas/bariloche.webp",
  "images/servicios/mantenimiento-consorcios.webp",
  "images/servicios/mantenimiento-integral.webp",
  "images/servicios/refacciones-diseno.webp",
  "images/servicios/direccion-obra.webp",
  "images/servicios/instalaciones-electricas.webp",
  "images/servicios/domotica.webp",
  "images/servicios/planos-documentacion.webp",
];

const missing = [];
for (const rel of required) {
  try {
    await access(join(publicDir, rel));
  } catch {
    missing.push(rel);
  }
}

if (missing.length === 0) {
  console.log(`OK: ${required.length} imágenes presentes en public/.`);
  process.exit(0);
}

console.error(`Faltan ${missing.length} archivo(s) en public/:\n`);
for (const path of missing) {
  console.error(`  - ${path}`);
}
console.error("\nVer public/images/README.md para dimensiones sugeridas.");
process.exit(1);
