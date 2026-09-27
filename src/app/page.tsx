import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Truck,
  CheckCircle2,
  Scale,
  MapPin,
  Star,
  GraduationCap,
  Building2,
  Trophy,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getServices, getPricingPlans, getSuburbs, BUSINESS_INFO } from "@/lib/data";
import { HeroBubbles } from "@/components/HeroBubbles";
import { HeroVideoPlayer } from "@/components/HeroVideoPlayer";

export const metadata: Metadata = {
  title: "Laundro-Hub | Premium Laundry, Ironing & Collection in Bloemfontein",
  description:
    "We care for the clothes you wear. Professional washing, gentle drying, steam ironing, bedding and doorstep pickup in Langenhovenpark and throughout Bloemfontein.",
};

export default async function HomePage() {
  const [services, plans, suburbs] = await Promise.all([
    getServices(),
    getPricingPlans(),
    getSuburbs(),
  ]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-deep text-white py-12 sm:py-16 lg:py-24">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/fabric-bg.jpg"
            alt="Soft premium folded towels"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/95 to-brand-purple/70" />
        </div>

        {/* Ambient Soap Bubble Animations (Hero Only) */}
        <HeroBubbles />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
              <div className="flex items-center gap-2.5 text-brand-mint">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-brand-mint shrink-0" />
                <span className="font-cursive text-2xl sm:text-3xl text-brand-mint tracking-wide select-none">
                  Bloemfontein&apos;s Trusted Laundry
                </span>
              </div>

              <h1 className="font-display text-[2.15rem] leading-[1.12] sm:text-5xl lg:text-7xl font-extrabold tracking-tight sm:leading-[1.04] text-white">
                We care for the clothes{" "}
                <span className="text-brand-mint whitespace-nowrap">you wear.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-brand-lav/90 max-w-xl font-normal leading-relaxed">
                Pristine washing, crisp steam ironing, and heavy bedding care. Drop off at The Towers in Langenhovenpark or book our Express van right to your door.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto relative z-30">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand-teal px-5 py-3.5 sm:px-6 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02] text-center"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  <span>WhatsApp us on {BUSINESS_INFO.phone}</span>
                </a>
                <Link
                  href="/my-wash"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/20 px-5 py-3.5 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-all text-center"
                >
                  <span>Book a collection (My Wash)</span>
                  <ArrowRight className="h-4 w-4 text-brand-mint shrink-0" />
                </Link>
              </div>

              {/* Quick Trust badges */}
              <div className="mt-2 sm:mt-4 w-full border-t border-white/15 pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-brand-lav/85">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-mint shrink-0" />
                    <span>Individual wash cycles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-mint shrink-0" />
                    <span>Same-day turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-brand-mint shrink-0" />
                    <span>Langenhovenpark &amp; surrounds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Looping Video Showcase */}
            <div className="lg:col-span-5 relative">
              <HeroVideoPlayer />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 z-30 rounded-2xl bg-white p-4 shadow-elevated text-brand-deep border border-brand-line flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lav text-brand-purple">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                    Transparent Weigh-in
                  </p>
                  <p className="text-sm font-extrabold text-brand-deep">
                    Fair, honest kg-based rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-teal">
                What We Offer
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">
                Everything taken care of.
              </h2>
            </div>
            <Link
              href="/what-we-offer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-deep transition-colors"
            >
              Explore What We Offer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-brand-line bg-white p-6 shadow-sm hover:shadow-card hover:border-brand-purple/30 transition-all"
              >
                <div>
                  <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl bg-brand-lav">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-brand-deep">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-body leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-brand-line/60 pt-4">
                    {service.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-brand-muted">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-brand-line">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wide">
                    {service.priceStartingAt}
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-purple group-hover:text-brand-deep"
                  >
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Packages Preview */}
      <section className="py-20 bg-brand-lav/40 border-y border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-purple">
              Monthly Subscriptions
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">
              Laundry on autopilot.
            </h2>
            <p className="mt-4 text-base text-brand-body">
              Save up to 25% with dedicated monthly kilograms. Weekly doorstep collections, priority turnaround, and zero laundry stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all ${
                  plan.popular
                    ? "bg-brand-deep text-white shadow-elevated scale-105 border-2 border-brand-mint"
                    : "bg-white text-brand-ink border border-brand-line shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-deep shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3
                    className={`font-display text-2xl font-bold ${
                      plan.popular ? "text-white" : "text-brand-deep"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {plan.pricePerMonth}
                    </span>
                  </div>
                  <span
                    className={`inline-block mt-1 text-xs font-semibold uppercase tracking-wider ${
                      plan.popular ? "text-brand-mint" : "text-brand-teal"
                    }`}
                  >
                    {plan.weightLimit}
                  </span>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      plan.popular ? "text-brand-lav/80" : "text-brand-body"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-brand-line/20 pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2
                          className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-brand-mint" : "text-brand-teal"
                          }`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/contact"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
                      plan.popular
                        ? "bg-brand-mint text-brand-deep hover:bg-brand-mint/90 shadow-md"
                        : "bg-brand-purple text-white hover:bg-brand-deep"
                    }`}
                  >
                    Sign up for {plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve: Sector & Audience Highlights */}
      <section className="py-20 bg-white border-b border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-purple">
                Who We Serve
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">
                Tailored for your specific needs.
              </h2>
            </div>
            <p className="text-sm text-brand-muted max-w-md">
              From UFS &amp; CUT student residences to high-turnover Airbnb units, boutique guesthouses, and school rugby kits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/students"
              className="group flex flex-col justify-between rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/40 hover:shadow-card transition-all"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lav text-brand-purple mb-4 group-hover:scale-105 transition-transform">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Students &amp; Residences
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Monthly kg packages, UFS &amp; CUT hostel collection points, and hassle-free wash &amp; fold.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Student Plans &rarr;
              </span>
            </Link>

            <Link
              href="/airbnb"
              className="group flex flex-col justify-between rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/40 hover:shadow-card transition-all"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tealbg text-brand-teal mb-4 group-hover:scale-105 transition-transform">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Airbnb Hosts
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Rapid turnover washing, hotel-crisp bedding, fluffy white towels, and doorstep drop-off.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Airbnb Services &rarr;
              </span>
            </Link>

            <Link
              href="/hospitality"
              className="group flex flex-col justify-between rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/40 hover:shadow-card transition-all"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lav text-brand-purple mb-4 group-hover:scale-105 transition-transform">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Guesthouses &amp; Hotels
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Commercial batch volumes, dining table linens, chef jackets, and regular scheduled delivery.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Hospitality &rarr;
              </span>
            </Link>

            <Link
              href="/schools"
              className="group flex flex-col justify-between rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/40 hover:shadow-card transition-all"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tealbg text-brand-teal mb-4 group-hover:scale-105 transition-transform">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Schools &amp; Hostels
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Deep mud removal for rugby &amp; sports kits, blazer steam pressing, and boarding house runs.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore School Plans &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Collection & Delivery Suburb Coverage */}
      <section className="py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-brand-deep text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint">
                Laundro-Hub Express
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                We pick up &amp; deliver across Bloemfontein.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-brand-lav/90 leading-relaxed">
                Daily scheduled routes through Langenhovenpark, Woodland Hills, Universitas, Brandwag and beyond. Free collection on qualifying orders.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-brand-mint border border-white/15"
                  >
                    <MapPin className="h-3 w-3" />
                    {suburb}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-brand-teal/90 transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  Book Collection on WhatsApp
                </a>
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
                >
                  Book on My Wash &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Visit us Section */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-teal">
                Drop-in Store
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
                Visit us at The Towers Shopping Centre
              </h2>
              <p className="mt-4 text-base text-brand-body leading-relaxed">
                Conveniently located in Langenhovenpark, Bloemfontein (opposite the car wash, old Panarottis location). Ample secure parking and friendly counter staff ready to weigh and receive your laundry.
              </p>

              <div className="mt-6 space-y-3">
                {BUSINESS_INFO.hours.map((h) => (
                  <div key={h.days} className="flex items-center justify-between border-b border-brand-line/60 pb-2 text-sm">
                    <span className="font-semibold text-brand-deep">{h.days}</span>
                    <span className="font-mono text-brand-muted">{h.times}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <MapPin className="h-4 w-4" />
                  Get Google Maps Directions
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line shadow-card">
              <Image
                src="/img/laundry-interior.jpg"
                alt="Laundro-Hub store interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
