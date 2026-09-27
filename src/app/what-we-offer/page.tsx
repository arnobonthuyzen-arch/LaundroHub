import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shirt,
  Sparkles,
  Layers,
  Truck,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO, getServices, getPricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "What We Offer | Complete Laundry & Ironing Services",
  description:
    "Explore our complete range of laundry services in Bloemfontein: Washing & Drying, Steam Ironing & Pressing, Bulky Bedding & Linen, and Laundro-Hub Express 1–2 day collection & delivery.",
};

export default async function WhatWeOfferPage() {
  const [services, plans] = await Promise.all([getServices(), getPricingPlans()]);

  const coreOfferings = [
    {
      id: "washing-drying",
      title: "Washing & Drying",
      tagline: "Everyday wash, gentle dry & crisp fold",
      description:
        "Your weekly clothes washed in commercial-grade, sanitary drums with premium detergents and fabric softeners. We separate whites, colors, and delicates, dry them at fabric-safe temperatures, and fold them neatly into ready-to-pack bundles.",
      price: "From R 38 / kg",
      image: "/img/washing.jpg",
      icon: Shirt,
      highlights: [
        "Sorted carefully: whites, lights, and darks kept separate",
        "Individual machine wash — garments never mixed with other customers",
        "Gentle, moisture-controlled tumble drying to preserve fibers",
        "Neatly folded and bundled ready for your wardrobe",
        "Turnaround within 24 hours (or same-day on request)",
      ],
    },
    {
      id: "ironing-pressing",
      title: "Ironing & Steam Pressing",
      tagline: "Professional crisp steam pressing for shirts, trousers & uniforms",
      description:
        "Skip the weekend iron board. Our commercial steam stations press out every crease on business shirts, school blazers, trousers, and delicate fabrics. Returned hung on hangers or crisply folded to your preference.",
      price: "From R 18 / item",
      image: "/img/ironing.jpg",
      icon: Sparkles,
      highlights: [
        "Commercial steam stations with adjustable pressure",
        "Crisp shirt collars, smooth cuffs, and sharp trouser pleats",
        "Available hung in protective covers or folded flat",
        "Delicate fabrics & formal school blazers handled with care",
        "Combine with wash & dry for a complete end-to-end service",
      ],
    },
    {
      id: "bedding-linen",
      title: "Bedding & Bulky Linen",
      tagline: "Heavy duvets, blankets, pillows & hospitality linen",
      description:
        "Domestic home washers can't thoroughly wash or rinse heavy feather duvets and thick winter blankets. Our large-volume commercial extractors provide deep sanitisation, thorough rinsing, and complete thermal drying to eliminate dust mites and allergens.",
      price: "From R 140 / duvet",
      image: "/img/bedding.jpg",
      icon: Layers,
      highlights: [
        "King, Queen, Double & Single size duvets & comforters",
        "Feather, down, microfiber, and thick winter wool blankets",
        "Sanitary high-temperature wash cycle for thorough hygiene",
        "Deep moisture extraction so fillings remain soft and lofty",
        "Returned shrink-wrapped or protected in clean poly-bags",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Header with Brand Purple Gradient */}
      <section className="relative overflow-hidden hero-purple-gradient border-b border-brand-line/70 py-14 sm:py-20">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple mb-3">
              All Services in One Place
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
              What We <span className="text-brand-purple">Offer.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
              From everyday wash &amp; fold to professional steam ironing and bulky duvets. Drop off at The Towers Shopping Centre in Langenhovenpark or enjoy Laundro-Hub Express 1–2 day doorstep collection.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>WhatsApp Quote on {BUSINESS_INFO.phone}</span>
              </a>
              <Link
                href="/my-wash"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
              >
                <Truck className="h-4 w-4 text-brand-mint" />
                <span>Schedule Express Pickup</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="border-b border-brand-line bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lav text-brand-purple mb-2">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold text-brand-deep">100% Individual Wash</p>
              <p className="text-xs text-brand-muted mt-0.5">Garments never mixed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tealbg text-brand-teal mb-2">
                <Truck className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold text-brand-deep">Express 1–2 Day Delivery</p>
              <p className="text-xs text-brand-muted mt-0.5">Doorstep pickup &amp; return</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lav text-brand-purple mb-2">
                <Scale className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold text-brand-deep">Upfront Transparent Pricing</p>
              <p className="text-xs text-brand-muted mt-0.5">Weighed before we wash</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tealbg text-brand-teal mb-2">
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold text-brand-deep">Fast Turnaround</p>
              <p className="text-xs text-brand-muted mt-0.5">Clean, fresh &amp; folded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 sm:py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Our Core Services
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Handled with precision &amp; care
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Every item is inspected, processed in dedicated commercial machines, and returned fresh and ready.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-12">
            {coreOfferings.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-brand-line bg-white p-6 sm:p-10 shadow-sm ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-brand-lav shadow-sm group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute bottom-4 left-4 rounded-xl bg-brand-deep/85 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-brand-mint">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lav text-brand-purple">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-deep">
                          {service.title}
                        </h3>
                        <p className="text-xs text-brand-teal font-semibold tracking-wide">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 border-t border-brand-line/70 pt-4">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-body">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href="/my-wash"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-brand-purple px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-deep transition-all"
                      >
                        <Truck className="h-3.5 w-3.5 text-brand-mint" />
                        <span>Book Collection (My Wash)</span>
                      </Link>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-brand-line bg-white px-5 py-2.5 text-xs font-bold text-brand-deep hover:bg-brand-lav transition-all"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        <span>Instant WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Laundro-Hub Express Highlight Section */}
      <section className="py-16 bg-white border-y border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-brand-deep to-brand-plum text-white p-8 sm:p-12 shadow-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-mint">
                  <Truck className="h-3.5 w-3.5" />
                  Express Doorstep Van
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Laundro-Hub Express: Collected &amp; Delivered in 1–2 Days
                </h3>
                <p className="text-base text-brand-lav/90 leading-relaxed max-w-xl">
                  Don&apos;t have time to drop off your laundry at The Towers? Our express van collects your bags directly from your home, school hostel, Airbnb, or business anywhere in Mangaung and returns them clean and folded within 1–2 business days.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/express"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-mint px-6 py-3 text-xs font-bold text-brand-deep hover:bg-white transition-all shadow-sm"
                  >
                    <span>Learn About Express Logistics</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/my-wash"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-6 py-3 text-xs font-bold text-white hover:bg-white/25 transition-all"
                  >
                    <span>Schedule Pickup Online</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/img/collection.jpg"
                    alt="Laundro-Hub Express Van Collection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Packages & Subscriptions */}
      <section className="py-16 sm:py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Save Up to 25%
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Monthly Laundry Packages
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Ideal for students, couples, and busy families who want predictable monthly pricing and priority weekly collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 border transition-all ${
                  plan.popular
                    ? "bg-white border-brand-purple ring-2 ring-brand-purple/20 shadow-elevated"
                    : "bg-white border-brand-line shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-purple px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-display text-2xl font-bold text-brand-deep">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-brand-deep">
                      {plan.pricePerMonth}
                    </span>
                  </div>
                  <span className="inline-block mt-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
                    {plan.weightLimit}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-brand-body">
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-brand-line/60 pt-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-body">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/contact"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all ${
                      plan.popular
                        ? "bg-brand-mint text-brand-deep hover:bg-brand-mint/90 shadow-sm"
                        : "bg-brand-purple text-white hover:bg-brand-deep"
                    }`}
                  >
                    <span>Sign up for {plan.name}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences Quick Selector Section */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Tailored Solutions
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Looking for specialized solutions?
            </h2>
            <p className="mt-3 text-base text-brand-body">
              We offer dedicated contract rates, pickup schedules, and custom invoicing for schools, residences, Airbnb hosts, and hotels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/students"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">🎓</span>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Students &amp; Residences
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Budget monthly kg bundles, UFS &amp; CUT res collections, and hassle-free laundry bags.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Student Plans &rarr;
              </span>
            </Link>

            <Link
              href="/airbnb"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">🏡</span>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Airbnb Hosts
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Same-day turnover wash &amp; press, sparkling white sheets, fluffy towels, and guest-ready packaging.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Airbnb Services &rarr;
              </span>
            </Link>

            <Link
              href="/hospitality"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">🏨</span>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Hotels &amp; Guesthouses
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Commercial batch laundry, crisp table linen, chef aprons, and reliable scheduled van delivery.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Hospitality &rarr;
              </span>
            </Link>

            <Link
              href="/schools"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">🏫</span>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Schools &amp; Hostels
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Rugged team sports kits (rugby, hockey), school blazers, and weekly boarding house collections.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore School Plans &rarr;
              </span>
            </Link>

            <Link
              href="/sport-events"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">🏆</span>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Sport Events &amp; Tournaments
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Overnight match kit turnarounds, deep red mud removal, squad sorting, and hotel delivery.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Sports Logistics &rarr;
              </span>
            </Link>

            <Link
              href="/healthcare"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">🏥</span>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Healthcare &amp; Clinics
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  High-temperature sanitisation for medical scrubs, doctor coats, patient gowns, and examination linen.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Healthcare Plans &rarr;
              </span>
            </Link>

            <Link
              href="/retirement-villages"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">👵</span>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Retirement Villages
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Dignified senior clothing wash, delicate woollen care, frail care bedding, and individual name tags.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore Senior Living Plans &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
