export const WHATSAPP_NUMBER = "5491169057424";

export const BUDGET_TYPES = [
  { value: "reformas", label: "Reformas" },
  { value: "diseno-interiores", label: "Diseño de interiores" },
  { value: "administracion-consorcio", label: "Administración de consorcio" },
  { value: "mantenimiento-preventivo", label: "Mantenimiento preventivo" },
  { value: "instalaciones", label: "Instalaciones" },
  { value: "otro", label: "Otro servicio" },
];

export function buildWhatsAppUrl({ tipo, nombre, email, telefono, mensaje }) {
  const tipoLabel =
    BUDGET_TYPES.find((item) => item.value === tipo)?.label ?? tipo;

  const text = encodeURIComponent(
    `Hola! Solicito presupuesto para: ${tipoLabel}\n` +
      `Nombre: ${nombre}\n` +
      `Email: ${email}\n` +
      `Tel: ${telefono}\n\n` +
      `${mensaje || "—"}`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function buildDirectWhatsAppUrl(message = "Hola! Quiero consultar por sus servicios.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
