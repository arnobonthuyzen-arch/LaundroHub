import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree, Caveat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/data";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2B0F48",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://laundro-hub.co.za"),
  title: {
    default: "Laundro-Hub | Premium Laundry & Ironing in Bloemfontein",
    template: "%s | Laundro-Hub Bloemfontein",
  },
  description:
    "Professional washing, drying, steam ironing, bedding and doorstep collection & delivery in Langenhovenpark, Bloemfontein. Fast turnaround and flexible monthly packages.",
  keywords: [
    "laundry Bloemfontein",
    "laundromat Langenhovenpark",
    "dry cleaning Bloemfontein",
    "ironing service Bloemfontein",
    "bedding laundry",
    "laundry pickup Bloemfontein",
    "Laundro-Hub",
  ],
  authors: [{ name: "Laundro-Hub Bloemfontein" }],
  creator: "Laundro-Hub",
  publisher: "Cleaning Professionals",
  openGraph: {
    title: "Laundro-Hub | Premium Laundry & Ironing in Bloemfontein",
    description: "We care for the clothes you wear. Fast turnaround, pristine folding, and doorstep collection across Bloemfontein.",
    url: "https://laundro-hub.co.za",
    siteName: "Laundro-Hub",
    images: [
      {
        url: "/img/fabric-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Laundro-Hub Bloemfontein",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laundro-Hub | Bloemfontein Laundry & Ironing",
    description: "We care for the clothes you wear. Doorstep collection & premium laundry in Bloemfontein.",
    images: ["/img/fabric-bg.jpg"],
  },
  icons: {
    icon: "/img/logo.png",
    apple: "/img/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: BUSINESS_INFO.name,
  description: BUSINESS_INFO.tagline,
  url: "https://laundro-hub.co.za",
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS_INFO.address.name}, ${BUSINESS_INFO.address.street}`,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.province,
    addressCountry: "ZA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "R50 - R2000",
  image: "https://laundro-hub.co.za/img/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.whatsapp.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="flex min-h-screen flex-col font-sans bg-brand-ground text-brand-ink antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
