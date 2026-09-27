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

        {/* Business accounts callout */}
        <div className="mt-20 rounded-2xl bg-brand-deep text-white p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-mint">
              Commercial &amp; Bulk
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white">
              Guesthouses, Clinics &amp; Corporate Accounts
            </h2>
            <p className="mt-3 text-sm text-brand-lav/80 leading-relaxed">
              We offer dedicated monthly invoicing, daily collection routes, and rapid batch turnarounds for Bloemfontein hospitality and corporate clients.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-teal/90 transition-all"
              >
                Inquire About a Business Account
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

