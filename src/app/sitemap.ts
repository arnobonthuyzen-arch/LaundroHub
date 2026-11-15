import type { MetadataRoute } from "next";
import { getServices } from "@/lib/data";

const CONTENT_UPDATED_AT = new Date("2026-11-14T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://laundro-hub.co.za";
  const services = await getServices();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/what-we-offer`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/express`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/students`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/airbnb`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hospitality`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/schools`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/retirement-villages`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/healthcare`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/my-wash`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: CONTENT_UPDATED_AT,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
