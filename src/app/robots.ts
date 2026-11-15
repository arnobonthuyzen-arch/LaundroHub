import type { MetadataRoute } from "next";

const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  const disallowed = ["/api/"];

  return {
    rules: [
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: disallowed,
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowed,
      },
    ],
    sitemap: "https://laundro-hub.co.za/sitemap.xml",
  };
}
