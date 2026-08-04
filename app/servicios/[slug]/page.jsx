import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: service.shortTitle, href: `/servicios/${service.slug}` },
        ]}
      />
      <Hero compact title={service.title} subtitle={service.tagline} />
      <ServiceDetail service={service} />
    </>
  );
}
