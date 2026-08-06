export const serviceGroups = [
  {
    id: "mantenimiento",
    label: "Mantenimiento",
    services: [
      "mantenimiento-consorcios",
      "mantenimiento-integral",
    ],
  },
  {
    id: "proyectos",
    label: "Proyectos",
    services: ["refacciones-diseno", "direccion-obra"],
  },
  {
    id: "tecnologia",
    label: "Tecnología",
    services: [
      "instalaciones-electricas",
      "domotica",
      "planos-documentacion",
    ],
  },
];

export const services = [
  {
    slug: "mantenimiento-consorcios",
    title: "Administración de Consorcios",
    shortTitle: "Administración de consorcios",
    group: "mantenimiento",
    tagline: "Visitas cada 15 días, planificadas y registradas.",
    summary:
      "Mantenimiento preventivo de edificios con inspecciones periódicas que protegen tu inversión.",
    includes: [
      "Iluminación de hall, escaleras y pasillos",
      "Inspección de limpieza de espacios comunes",
      "Instalaciones sanitarias: pérdidas, bombas y tanques",
      "Instalación eléctrica: tableros, térmicas y luces de emergencia",
      "Seguridad: matafuegos, señalización y elementos de protección",
      "Terrazas y techos: desagües, canaletas y filtraciones",
      "Fachadas y exterior: muros, veredas y portones",
      "Mantenimiento general: herrajes, cerraduras y reparaciones menores",
      "Informe con fotos y registro de tareas en cada visita",
    ],
    process: [
      "Relevamiento inicial del edificio y puntos críticos",
      "Planificación de visitas quincenales",
      "Inspección sistemática por áreas",
      "Registro fotográfico y reporte detallado",
      "Seguimiento de tareas pendientes y urgencias",
    ],
    benefits: [
      "Prevenimos problemas antes de que se vuelvan costosos",
      "Optimizamos recursos y extendemos la vida útil de instalaciones",
      "Tranquilidad para administradores y vecinos",
      "Planificación y compromiso en cada visita",
    ],
    faq: [
      {
        q: "¿Con qué frecuencia realizan las visitas?",
        a: "Cada 15 días, planificadas y registradas con informe y fotos.",
      },
      {
        q: "¿Qué pasa si surge una urgencia entre visitas?",
        a: "Contamos con atención 24 hs para resolver emergencias.",
      },
    ],
  },
  {
    slug: "mantenimiento-integral",
    title: "Mantenimiento Integral para Hogares y Comercios",
    shortTitle: "Hogares y comercios",
    group: "mantenimiento",
    tagline: "Soluciones rápidas para casas, locales y espacios comerciales.",
    summary:
      "Mantenemos y mejoramos lo que más valorás: tu casa o comercio, con un equipo que resuelve desde reparaciones menores hasta urgencias.",
    includes: [
      "Reparaciones eléctricas",
      "Plomería y gas",
      "Pintura y herrería",
      "Durlock y terminaciones",
      "Colocación de artefactos",
      "Soluciones de urgencia",
    ],
    process: [
      "Consulta y relevamiento del problema",
      "Presupuesto claro antes de iniciar",
      "Ejecución con materiales de calidad",
      "Control final y recomendaciones",
    ],
    benefits: [
      "Respuesta rápida y atención personalizada",
      "Soluciones que duran",
      "Un solo equipo para múltiples necesidades",
    ],
    faq: [],
  },
  {
    slug: "refacciones-diseno",
    title: "Refacciones e Interiorismo",
    shortTitle: "Refacciones e interiorismo",
    group: "proyectos",
    tagline: "Transformamos espacios con funcionalidad, estilo y calidad.",
    summary:
      "Renovamos y diseñamos interiores integrando estética, funcionalidad y materiales de calidad.",
    includes: [
      "Refacciones integrales y parciales",
      "Diseño y decoración de interiores",
      "Distribución y funcionalidad de espacios",
      "Selección de materiales y paleta",
      "Propuesta de mobiliario e iluminación",
      "Asesoramiento en materiales y terminaciones",
      "Coordinación de oficios",
      "Proyectos residenciales y comerciales",
    ],
    process: [
      "Relevamiento y entrevista sobre necesidades",
      "Propuesta de diseño y presupuesto",
      "Planificación de obra",
      "Ejecución y supervisión",
      "Entrega y ajustes finales",
    ],
    benefits: [
      "Espacios funcionales y estéticamente coherentes",
      "Atención personalizada en cada etapa",
      "Calidad en terminaciones",
    ],
    faq: [],
  },
  {
    slug: "direccion-obra",
    title: "Dirección de Obra",
    shortTitle: "Dirección de obra",
    group: "proyectos",
    tagline: "Coordinación profesional de principio a fin.",
    summary:
      "Dirigimos obras residenciales y comerciales con control de avance, calidad y coordinación de contratistas.",
    includes: [
      "Coordinación general de la obra",
      "Control de avance y calidad",
      "Gestión de contratistas y proveedores",
      "Seguimiento de plazos y presupuesto",
      "Resolución de imprevistos en obra",
    ],
    process: [
      "Análisis de documentación y planificación",
      "Organización de equipos y cronograma",
      "Supervisión diaria/semanal según escala",
      "Informes de avance",
      "Recepción y cierre de obra",
    ],
    benefits: [
      "Obra ordenada y bajo control",
      "Comunicación clara con el cliente",
      "Experiencia en proyectos residenciales y comerciales",
    ],
    faq: [],
  },
  {
    slug: "instalaciones-electricas",
    title: "Instalaciones Eléctricas",
    shortTitle: "Electricidad",
    group: "tecnologia",
    tagline: "Obras nuevas, refacciones y mantenimiento.",
    summary:
      "Realizamos instalaciones eléctricas para viviendas, edificios y locales comerciales, con foco en seguridad y normativa.",
    includes: [
      "Instalaciones nuevas",
      "Refacciones y ampliaciones",
      "Mantenimiento preventivo y correctivo",
      "Tableros, térmicas y puesta a tierra",
      "Soluciones para hogares y oficinas",
    ],
    process: [
      "Relevamiento de la instalación existente",
      "Propuesta técnica y presupuesto",
      "Ejecución con materiales certificados",
      "Pruebas y certificación según corresponda",
    ],
    benefits: [
      "Seguridad eléctrica",
      "Soluciones adaptadas a cada espacio",
      "Mantenimiento programado disponible",
    ],
    faq: [],
  },
  {
    slug: "domotica",
    title: "Domótica y Automatización",
    shortTitle: "Domótica",
    group: "tecnologia",
    tagline: "Tecnología inteligente para tu hogar o comercio.",
    summary:
      "Integramos sistemas de automatización para iluminación, climatización, cortinas, seguridad y control desde app o voz.",
    includes: [
      "Iluminación inteligente",
      "Control de climatización",
      "Automatización de cortinas",
      "Integración con sistemas de seguridad",
      "Control desde app o asistentes de voz",
    ],
    process: [
      "Análisis de necesidades y compatibilidad",
      "Diseño del sistema",
      "Instalación y configuración",
      "Capacitación al usuario",
    ],
    benefits: [
      "Mayor confort y eficiencia",
      "Control centralizado",
      "Tecnología adaptada a cada proyecto",
    ],
    faq: [],
  },
  {
    slug: "planos-documentacion",
    title: "Planos y Documentación",
    shortTitle: "Planos",
    group: "tecnologia",
    tagline: "Documentación técnica clara y profesional.",
    summary:
      "Elaboramos planos arquitectónicos, eléctricos y documentación técnica para proyectos residenciales y comerciales.",
    includes: [
      "Planos arquitectónicos",
      "Planos eléctricos",
      "Firma de planos",
      "Documentación técnica para obra",
      "Asesoramiento normativo",
    ],
    process: [
      "Relevamiento y mediciones",
      "Desarrollo de planos",
      "Revisión con el cliente",
      "Entrega de documentación final",
    ],
    benefits: [
      "Documentación precisa",
      "Facilita trámites y ejecución de obra",
      "Profesionalismo en cada detalle",
    ],
    faq: [],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((service) => service.slug);
}

export function getFeaturedServices(limit = 6) {
  return services.slice(0, limit);
}
