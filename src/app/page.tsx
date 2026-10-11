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
import TowersMapWrapper from "@/components/TowersMapWrapper";

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

      {/* School Hostels & Student Living Preview */}
      <section className="py-20 bg-brand-lav/40 border-y border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-purple">
              Hostels &amp; Student Living
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-brand-deep tracking-tight">
              Boarding school &amp; hostel laundry made simple.
            </h2>
            <p className="mt-4 text-base text-brand-body">
              Scheduled weekly batch runs for school boarding hostels, sports derbies &amp; tournament kits, university residences, and student communes in Bloemfontein. Tagged bags, uniform pressing, and zero mix-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all h-full ${
                  plan.popular
                    ? "bg-brand-deep text-white shadow-elevated border-2 border-brand-mint ring-4 ring-brand-purple/10"
                    : "bg-white text-brand-ink border border-brand-line shadow-sm hover:shadow-md hover:border-brand-purple/30"
                }`}
              >
                <div>
                  {/* Category Badge & Weight Tag Row */}
                  <div className="flex items-center justify-between gap-2 min-h-[1.75rem] mb-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${
                        plan.popular
                          ? "bg-brand-mint text-brand-deep"
                          : "bg-brand-lav text-brand-purple"
                      }`}
                    >
                      {plan.popular ? "★ Most Popular" : "Bulk Batch Care"}
                    </span>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        plan.popular ? "text-brand-mint/90" : "text-brand-teal"
                      }`}
                    >
                      {plan.weightLimit}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3
                    className={`font-display text-xl sm:text-2xl font-bold min-h-[3.5rem] flex items-center leading-snug ${
                      plan.popular ? "text-white" : "text-brand-deep"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Rate / Price Display */}
                  <div className="mt-3 min-h-[3.75rem] flex items-center">
                    <span
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight ${
                        plan.popular ? "text-brand-mint" : "text-brand-deep"
                      }`}
                    >
                      {plan.pricePerMonth}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`mt-3 text-sm leading-relaxed min-h-[4.5rem] flex items-start ${
                      plan.popular ? "text-brand-lav/80" : "text-brand-body"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div
                    className={`my-6 border-t ${
                      plan.popular ? "border-white/15" : "border-brand-line/60"
                    }`}
                  />

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug">
                        <CheckCircle2
                          className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-brand-mint" : "text-brand-teal"
                          }`}
                        />
                        <span className={plan.popular ? "text-white/90" : "text-brand-body"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4">
                  <Link
                    href="/contact"
                    className={`flex w-full h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all shadow-sm ${
                      plan.popular
                        ? "bg-brand-mint text-brand-deep hover:bg-brand-mint/90 hover:scale-[1.01]"
                        : "bg-brand-purple text-white hover:bg-brand-deep hover:scale-[1.01]"
                    }`}
                  >
                    <span>Inquire about {plan.name}</span>
                    <ArrowRight className="h-4 w-4" />
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
              From university student residences to high-turnover Airbnb units, boutique guesthouses, and school rugby kits.
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
                  Batch laundry runs, university residence pickups, and hassle-free wash &amp; fold.
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
          <div className="rounded-3xl bg-brand-deep text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-mint">
                  New · Laundro-Hub Express
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  We collect. We clean.<br />
                  <span className="text-brand-mint">We deliver.</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-brand-lav/90 leading-relaxed">
                  Your home, your office or anywhere in the Mangaung area — we fetch your laundry and bring it back fresh within a day or two, depending on volume and collection time.
                </p>

                {/* Suburb Coverage Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
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

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
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

              {/* Branded Delivery Van Photo Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-white shadow-elevated border-4 border-white/20 group">
                  <Image
                    src="/img/van.jpg"
                    alt="Laundro-Hub branded delivery van"
                    fill
                    className="object-cover object-[center_32%] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute left-4 bottom-4 z-10">
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-4 py-2.5 text-xs font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all"
                    >
                      <WhatsAppIcon className="h-4 w-4 shrink-0" />
                      <span>Book a collection</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Visit us Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal">
                <MapPin className="h-3.5 w-3.5" />
                Drop-in Store &bull; Langenhovenpark
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
                Visit us at The Towers Shopping Centre
              </h2>
              <p className="text-base text-brand-body leading-relaxed">
                Conveniently located in <strong className="text-brand-deep">Langenhovenpark, Bloemfontein</strong> &mdash; right <strong className="text-brand-purple">opposite the car wash</strong> (old Panarottis location). Easy ground-floor access, ample free parking, and friendly counter staff ready to weigh and receive your laundry.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="rounded-xl border border-brand-line bg-brand-ground p-3 text-left">
                  <span className="block text-[11px] font-bold text-brand-muted uppercase tracking-wider">Location</span>
                  <strong className="text-sm text-brand-deep">Opposite Car Wash</strong>
                </div>
                <div className="rounded-xl border border-brand-line bg-brand-ground p-3 text-left">
                  <span className="block text-[11px] font-bold text-brand-muted uppercase tracking-wider">Parking</span>
                  <strong className="text-sm text-brand-teal">Ample Free Parking</strong>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {BUSINESS_INFO.hours.map((h) => (
                  <div key={h.days} className="flex items-center justify-between border-b border-brand-line/60 pb-2 text-sm">
                    <span className="font-semibold text-brand-deep">{h.days}</span>
                    <span className="font-mono text-brand-muted">{h.times}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <a
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all hover:scale-[1.02]"
                >
                  <MapPin className="h-4 w-4 text-brand-mint" />
                  <span>Get Google Maps Directions</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hello%20Laundro-Hub,%20I%20have%20a%20question%20about%20visiting%20your%20Towers%20store`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp The Counter</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-brand-line shadow-elevated group">
                <Image
                  src="/img/storefront-window1.jpg"
                  alt="Laundro-Hub storefront at The Towers Shopping Centre"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 pr-4 border border-brand-line/80 shadow-lg">
                  <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-brand-line shrink-0">
                    <Image
                      src="/img/store-sign.jpg"
                      alt="Laundro-Hub store sign"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-brand-deep leading-tight">The Towers Store</span>
                    <span className="text-[11px] text-brand-teal font-bold">Opposite car wash</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-brand-deep/90 backdrop-blur-md p-3.5 text-white border border-white/10 shadow-lg">
                  <p className="text-xs font-semibold leading-snug">
                    The Towers Shopping Centre &bull; Langenhovenpark &bull; Bloemfontein
                  </p>
                  <p className="text-[11px] text-brand-mint/90 mt-0.5">
                    Drop your basket at the counter in under 2 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Leaflet Map Component (Client-Side with SSR Disabled) */}
          <div className="pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal">
                  <MapPin className="h-3.5 w-3.5 text-brand-purple" />
                  Interactive Location Map
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-deep tracking-tight mt-1">
                  Find us opposite the car wash at The Towers
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted font-medium">
                Du Plessis Road &amp; Koppie Road, Langenhovenpark, Bloemfontein
              </p>
            </div>

            <TowersMapWrapper />
          </div>
        </div>
      </section>
    </div>
  );
}
