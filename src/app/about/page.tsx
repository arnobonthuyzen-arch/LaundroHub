import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, HeartHandshake, Sparkles, MapPin, Users, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Laundro-Hub Bloemfontein",
  description:
    "Learn about Laundro-Hub in Langenhovenpark, Bloemfontein. Dedicated to spotless laundry, honest service, and caring for the clothes you wear.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header with brand purple gradient */}
      <section className="relative overflow-hidden hero-purple-gradient border-b border-brand-line/70 py-14 sm:py-20">
        {/* Ambient subtle glow circles */}
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple mb-3">
              Our Story &amp; Values
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
              About Laundro-Hub
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
              Founded with a simple mission in Bloemfontein: to make clean, fresh, neatly folded laundry effortless for families, students, and businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Media */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-base text-brand-body leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-brand-deep">
              &ldquo;We care for the clothes you wear.&rdquo;
            </h2>
            <p>
              Located centrally at The Towers Shopping Centre in Langenhovenpark, Laundro-Hub is more than just a laundromat. We believe the clothes you wear represent who you are — whether it&apos;s crisp Monday morning work shirts, soft family bedding, or spotless school blazers.
            </p>
            <p>
              We run industrial-grade commercial washers and dryers that protect delicate fibers while delivering deep sanitisation. Our individual wash policy ensures your garments never share a drum with anyone else.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl border border-brand-line bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-brand-purple font-bold">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <span>Quality Guarantee</span>
                </div>
                <p className="mt-1 text-xs text-brand-muted">
                  Thorough stain pre-treatment, fabric softener, and gentle moisture-controlled drying.
                </p>
              </div>

              <div className="rounded-xl border border-brand-line bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-brand-purple font-bold">
                  <HeartHandshake className="h-5 w-5 text-brand-teal" />
                  <span>Community Centered</span>
                </div>
                <p className="mt-1 text-xs text-brand-muted">
                  Proudly serving local Mangaung families, guesthouses, clinics, and university students.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line shadow-elevated">
              <Image
                src="/img/folding.jpg"
                alt="Neat and crisp garment folding at Laundro-Hub"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>

        {/* Storefront at The Towers Showcase */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Physical Location
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep">
              Visit Us at The Towers Shopping Centre
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
              Located conveniently in Langenhovenpark, Bloemfontein (opposite the car wash). Drop in 7 days a week or arrange a doorstep collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card transition-all hover:shadow-elevated">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-ground">
                <Image
                  src="/img/storefront-window1.jpg"
                  alt="Laundro-Hub storefront at The Towers Shopping Centre"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-brand-deep">
                  The Towers Storefront
                </h3>
                <p className="mt-1 text-xs text-brand-body leading-relaxed">
                  Full wash, dry, and iron services available 7 days a week with friendly walk-in counter service.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card transition-all hover:shadow-elevated">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-ground">
                <Image
                  src="/img/store-sign.jpg"
                  alt="Laundro-Hub circular illuminated sign"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-brand-deep">
                  Illuminated Lightbox Sign
                </h3>
                <p className="mt-1 text-xs text-brand-body leading-relaxed">
                  Easily spot our purple Laundro-Hub emblem right on the main entrance facade opposite the car wash.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-brand-line bg-white shadow-card transition-all hover:shadow-elevated">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-ground">
                <Image
                  src="/img/dropoff-point.jpg"
                  alt="Laundro-Hub office and drop off collection point"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-brand-deep">
                  Office &amp; Drop-Off Point
                </h3>
                <p className="mt-1 text-xs text-brand-body leading-relaxed">
                  Quick, dedicated drop-off and collection counter. In and out in 2 minutes with secure bagging.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business accounts callout */}
        <div className="mt-20 rounded-3xl bg-brand-deep text-white p-8 sm:p-12 overflow-hidden relative shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint">
                Commercial &amp; Bulk
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white">
                Guesthouses, Schools &amp; Corporate Accounts
              </h2>
              <p className="mt-3 text-sm sm:text-base text-brand-lav/80 leading-relaxed">
                Dedicated daily collection routes and monthly invoicing for Bloemfontein Airbnbs, hostels, guesthouses, clinics, and hotels.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-5 py-3 text-sm font-bold text-white hover:bg-brand-teal/90 transition-all shadow-sm"
                >
                  Inquire About a Business Account
                </Link>
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'd%20like%20to%20inquire%20about%20a%20commercial%20account`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  WhatsApp Business Chat
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <Image
                  src="/img/storefront-window2.jpg"
                  alt="Laundro-Hub pick up and delivery service for schools, hostels, Airbnbs and guesthouses"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

