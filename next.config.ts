import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: path.resolve(__dirname),

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "clsx", "tailwind-merge"],
    serverActions: {
      allowedOrigins: [
        "laundro-hub.co.za",
        "www.laundro-hub.co.za",
        "localhost:3000",
      ],
    },
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/sport-events",
        destination: "/schools",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/what-we-offer",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/what-we-offer",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/(img|icons|videos)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Render-Engine",
            value: "Next.js SSR",
          },
          {
            key: "X-SSR",
            value: "1",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
