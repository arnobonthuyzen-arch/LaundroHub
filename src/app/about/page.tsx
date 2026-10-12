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

        {/* Our Fleet & Dedicated Team Section */}
        <div className="mt-20">
          <div className="rounded-3xl border border-brand-line bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                  <Image
                    src="/img/van.jpg"
                    alt="Laundro-Hub Express branded collection van in Bloemfontein"
                    fill
                    className="object-cover object-[center_38%]"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-md p-3 border border-brand-line/80 shadow-md">
                    <span className="block text-xs font-bold text-brand-deep">Express Collection Fleet</span>
                    <span className="text-[11px] text-brand-teal font-medium">Daily doorstep runs across Bloemfontein</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Our Fleet &amp; People
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
                  Our own vehicles, drivers, and a team of 15+ who care.
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  Behind every fresh, neatly folded order is our dedicated Bloemfontein operation — our own branded Express vans on the road daily, backed by experienced washers, ironers, drivers, and friendly counter staff at The Towers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-brand-deep">Branded Express collection vans on the road daily</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-brand-deep">Doorstep service for homes, schools &amp; guesthouses</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-brand-deep">15+ trained laundry specialists handling each load</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-brand-deep">Hands-on, experienced management on site</span>
                  </div>
                </div>
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal px-5 py-3 min-h-[44px] text-sm font-bold text-white hover:bg-brand-teal/90 active:scale-[0.98] transition-all shadow-sm"
                >
                  Inquire About a Business Account
                </Link>
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'd%20like%20to%20inquire%20about%20a%20commercial%20account`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 min-h-[44px] text-sm font-bold text-white hover:bg-white/20 active:scale-[0.98] transition-all"
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

