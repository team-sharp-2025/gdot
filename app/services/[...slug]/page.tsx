import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import ServicePageClient from "@/app/services/[...slug]/ServicePageClient";

type Props = {
  params: {
    slug: string[];
  };
};

// This generates static params for all services at build time
export async function generateStaticParams() {
  return Object.keys(services).map((path) => ({
    slug: path.split("/"),
  }));
}

// Dynamic metadata for each service page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const servicePath = params.slug.join("/");
  const service = services[servicePath];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - GDOT`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} - GDOT`,
      description: service.metaDescription,
      images: [service.headerImage],
    },
  };
}

export default function ServicePage({ params }: Props) {
  // Log the params to debug
  const servicePath = params.slug.join("/");

  const service = services[servicePath];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
