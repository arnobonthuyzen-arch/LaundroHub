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
  GraduationCap,
  Home,
  Hotel,
  School,
  Trophy,
  Stethoscope,
  HeartHandshake,
  CreditCard,
  Ban,
  Receipt,
  Footprints,
  Tag,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  BUSINESS_INFO,
  getServices,
  getPricingPlans,
  getOfficialPriceList,
  getPricingPolicy,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "What We Offer & Official Price List | Laundro-Hub Bloemfontein",
  description:
    "Official price list & services for Laundro-Hub in Bloemfontein. Wash, dry & fold from R40/kg, steam pressing from R40/kg, duvets from R150 each. No minimum order, strictly no cash (Card & EFT only), and no VAT.",
};

export default async function WhatWeOfferPage() {
  const [services, plans, priceList, pricingPolicy] = await Promise.all([
    getServices(),
    getPricingPlans(),
    getOfficialPriceList(),
    getPricingPolicy(),
  ]);

  const coreOfferings = [
    {
      id: "washing-drying",
      title: "Washing & Drying",
      tagline: "Everyday wash, gentle dry & crisp fold",
      description:
        "Your weekly clothes washed in commercial-grade, sanitary drums with premium detergents and fabric softeners. We separate whites, colors, and delicates, dry them at fabric-safe temperatures, and fold them neatly into ready-to-pack bundles.",
      price: "Wash/Dry/Fold: R40 / kg (Wash Only: R36 / kg)",
      badge: "From R40 / kg",
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
      price: "Iron ONLY: R40 / kg (Wash/Dry/Iron: R43 / kg)",
      badge: "From R40 / kg",
      image: "/img/steam-pressing.jpg",
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
      price: "Queen & King Duvets: R150 each • Linen: R60 / kg",
      badge: "Duvets R150 each",
      image: "/img/bedding.jpg",
      icon: Layers,
      highlights: [
        "King & Queen duvets washed in commercial drums (R150 each flat rate)",
        "Feather, down, microfiber, and thick winter wool blankets (from R75/kg)",
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
              From everyday wash &amp; fold to professional steam ironing and bulky duvets. Drop off at our 2 convenient locations — <strong className="text-brand-deep">The Towers (Langenhovenpark)</strong> or <strong className="text-brand-deep">Bains Lodge (opp. security)</strong> — or enjoy express doorstep collection across the entire Bloemfontein area.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>WhatsApp Quote: {BUSINESS_INFO.phone} / {BUSINESS_INFO.secondaryPhone}</span>
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
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lav text-brand-purple">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-deep">
                            {service.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-tealbg px-2.5 py-0.5 text-xs font-bold text-brand-teal-dark border border-brand-teal/20">
                            <Tag className="h-3 w-3" />
                            <span>{service.badge}</span>
                          </span>
                        </div>
                        <p className="text-xs text-brand-teal font-semibold tracking-wide mt-0.5">
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
                        className="inline-flex items-center gap-1.5 rounded-xl bg-brand-purple px-5 py-2.5 min-h-[44px] text-xs font-bold text-white hover:bg-brand-deep active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
                      >
                        <Truck className="h-3.5 w-3.5 text-brand-mint" />
                        <span>Book Collection (My Wash)</span>
                      </Link>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-brand-line bg-white px-5 py-2.5 min-h-[44px] text-xs font-bold text-brand-deep hover:bg-brand-lav active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
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

      {/* Official Tariff / Price List Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-white border-y border-brand-line scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tealbg border border-brand-teal/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal-dark mb-3">
              <Receipt className="h-3.5 w-3.5 text-brand-teal" />
              <span>Official Tariff &bull; Effective {pricingPolicy.effectiveDate}</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-tight">
              Transparent, Simple <span className="text-brand-purple">Pricing.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-body leading-relaxed">
              Weighed accurately before washing begins. Zero hidden surcharges, no surprises.
            </p>
          </div>

          {/* Business & Payment Policy Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {/* VAT Card */}
            <div className="rounded-2xl border border-brand-line bg-brand-ground/60 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brand-teal font-bold text-sm mb-2">
                  <Receipt className="h-4.5 w-4.5 shrink-0" />
                  <span className="uppercase tracking-wider text-xs font-extrabold">VAT Status</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-deep">
                  Net Prices (No VAT Added)
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  {pricingPolicy.vatStatus} The price you see is the final price you pay.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-line/60">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-teal">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  All Prices Net &bull; 0% VAT Added
                </span>
              </div>
            </div>

            {/* Minimum Order Card */}
            <div className="rounded-2xl border border-brand-line bg-brand-ground/60 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brand-purple font-bold text-sm mb-2">
                  <Scale className="h-4.5 w-4.5 shrink-0" />
                  <span className="uppercase tracking-wider text-xs font-extrabold">Minimum Order</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-deep">
                  No Minimum Order Amount
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  {pricingPolicy.minimumOrder} Bring in as little as 1 kg or a single duvet — every load is handled with identical care.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-line/60">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-purple">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Zero Minimum kg or Value
                </span>
              </div>
            </div>

            {/* Payment Methods Card (Strictly No Cash & No Open Accounts) */}
            <div className="rounded-2xl border-2 border-brand-purple/20 bg-brand-lav/40 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brand-deep font-bold text-sm mb-2">
                  <CreditCard className="h-4.5 w-4.5 shrink-0 text-brand-purple" />
                  <span className="uppercase tracking-wider text-xs text-brand-purple font-extrabold">Payment &amp; Billing Policy</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-deep flex items-center gap-2 flex-wrap">
                  <span>EFT or Card Only</span>
                  <span className="rounded-md bg-red-100 text-red-700 text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-wide border border-red-200">
                    Strictly NO CASH
                  </span>
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  We accept Speedpoint Card Tap upon collection/delivery and instant EFT. Strictly EFT or card payment; no open monthly accounts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-line/60">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-deep">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-teal" />
                  Speedpoint Card Tap &bull; Instant EFT &bull; No Open Accounts
                </span>
              </div>
            </div>
          </div>

          {/* Pricing Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Table 1: Everyday Laundry & Ironing */}
            <div className="rounded-3xl border border-brand-line bg-white shadow-sm overflow-hidden">
              <div className="bg-brand-lav/50 p-5 border-b border-brand-line flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-purple text-white shadow-xs">
                    <Shirt className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-deep">
                      Everyday Laundry &amp; Ironing
                    </h3>
                    <p className="text-[11px] text-brand-muted">Individual machine cycles &bull; Weighed per kg</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-brand-purple uppercase tracking-wider">
                  Per kg
                </span>
              </div>

              <div className="divide-y divide-brand-line">
                {priceList
                  .filter((item) => item.category === "everyday")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-brand-ground/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm sm:text-base text-brand-deep">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="rounded-full bg-brand-teal text-white text-[10px] font-bold px-2 py-0.5">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.note && (
                          <p className="text-xs text-brand-muted mt-0.5">{item.note}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display text-lg sm:text-xl font-extrabold text-brand-deep">
                          {item.formattedPrice}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Table 2: Bedding, Blankets & Linen */}
            <div className="rounded-3xl border border-brand-line bg-white shadow-sm overflow-hidden">
              <div className="bg-brand-tealbg/60 p-5 border-b border-brand-line flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-teal text-white shadow-xs">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-deep">
                      Bedding, Blankets &amp; Linen
                    </h3>
                    <p className="text-[11px] text-brand-muted">Commercial drums &bull; Deep thermal moisture dry</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider">
                  Bulk Care
                </span>
              </div>

              <div className="divide-y divide-brand-line">
                {priceList
                  .filter((item) => item.category === "bedding")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-brand-ground/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm sm:text-base text-brand-deep">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="rounded-full bg-brand-purple text-white text-[10px] font-bold px-2 py-0.5">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.note && (
                          <p className="text-xs text-brand-muted mt-0.5">{item.note}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display text-lg sm:text-xl font-extrabold text-brand-deep">
                          {item.formattedPrice}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Second Row: Speciality Footwear/Curtains & Express Logistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
            {/* Table 3: Footwear & Speciality */}
            <div className="rounded-3xl border border-brand-line bg-white shadow-sm overflow-hidden">
              <div className="bg-brand-lav/50 p-5 border-b border-brand-line flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-purple text-white shadow-xs">
                    <Footprints className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-deep">
                      Footwear &amp; Speciality Care
                    </h3>
                    <p className="text-[11px] text-brand-muted">Hand scrubbed &bull; Sanitised &bull; Safe air drying</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-brand-purple uppercase tracking-wider">
                  Speciality
                </span>
              </div>

              <div className="divide-y divide-brand-line">
                {priceList
                  .filter((item) => item.category === "speciality")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-brand-ground/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm sm:text-base text-brand-deep">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="rounded-full bg-brand-teal text-white text-[10px] font-bold px-2 py-0.5">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.note && (
                          <p className="text-xs text-brand-muted mt-0.5">{item.note}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display text-lg sm:text-xl font-extrabold text-brand-deep">
                          {item.formattedPrice}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Table 4: Express Van Logistics */}
            <div className="rounded-3xl border border-brand-line bg-white shadow-sm overflow-hidden">
              <div className="bg-brand-tealbg/60 p-5 border-b border-brand-line flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-teal text-white shadow-xs">
                    <Truck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-deep">
                      Express Van Collection &amp; Delivery
                    </h3>
                    <p className="text-[11px] text-brand-muted">Dynamic driver scheduling &bull; Entire Bloemfontein area</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider">
                  Logistics
                </span>
              </div>

              <div className="divide-y divide-brand-line">
                {priceList
                  .filter((item) => item.category === "transport")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-brand-ground/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-sm sm:text-base text-brand-deep block">
                          {item.name}
                        </span>
                        {item.note && (
                          <p className="text-xs text-brand-muted mt-0.5">{item.note}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display text-lg sm:text-xl font-extrabold text-brand-deep">
                          {item.formattedPrice}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Price List Bottom Action Callout */}
          <div className="mt-12 rounded-3xl bg-brand-deep p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated">
            <div className="max-w-xl text-center sm:text-left">
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                Ready to have your laundry taken care of?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-brand-lav/80 leading-relaxed">
                Drop off at The Towers (Langenhovenpark) or Bains Lodge (opp. security), or schedule our driver dynamically for doorstep collection across the entire Bloemfontein area.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/my-wash"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-mint px-5 py-3 text-xs font-bold text-brand-deep hover:bg-white active:scale-[0.98] transition-all shadow-sm"
              >
                <Truck className="h-3.5 w-3.5" />
                <span>Book Pickup (My Wash)</span>
              </Link>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>WhatsApp {BUSINESS_INFO.phone}</span>
              </a>
            </div>
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
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Laundro-Hub Express: Collected &amp; Delivered in 1–2 Days
                </h3>
                <p className="text-base text-brand-lav/90 leading-relaxed max-w-xl">
                  Don&apos;t have time to drop off your laundry at The Towers or Bains Lodge? Our driver collects your bags dynamically throughout the day upon request from your home, school hostel, Airbnb, guesthouse, or business across the entire Bloemfontein area and returns them clean and folded within 1–2 business days.
                </p>

                {/* Rates Callout Badges */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-xs">
                    <span className="text-brand-mint font-bold">Langenhovenpark: </span>
                    <span className="text-white">R35 Pickup &middot; R35 Drop-off (R70 Both)</span>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-xs">
                    <span className="text-brand-mint font-bold">Greater Bloemfontein: </span>
                    <span className="text-white">R65 Pickup &middot; R65 Drop-off (R130 Both)</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/express"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-mint px-6 py-3 min-h-[44px] text-xs font-bold text-brand-deep hover:bg-white active:scale-[0.98] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                  >
                    <span>Learn About Express Logistics</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/my-wash"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 min-h-[44px] text-xs font-bold text-white hover:bg-white/20 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>Schedule Pickup Online</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/img/express-delivery.jpg"
                    alt="Laundro-Hub Express Doorstep Delivery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Hostels & Student Living */}
      <section className="py-16 sm:py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Hostels &amp; Student Living
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              School Hostels &amp; Student Accommodation
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Dedicated monthly packages available for students and schools, alongside standard walk-in rates (Packages update starting January 2027). Serving secondary school boarding hostels, university residences, and student accommodation across Bloemfontein.
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
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug">
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-brand-mint" : "text-brand-teal"
                          }`}
                        />
                        <span className={plan.popular ? "text-white/90" : "text-brand-body"}>
                          {feat}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/students"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-lav text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                  <GraduationCap className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Students &amp; Residences
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Budget monthly kg bundles, university residence collections, and hassle-free laundry bags.
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tealbg text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                  <Home className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-lav text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                  <Hotel className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Hotels &amp; Guesthouses
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Quoted on request (RFQ basis) tailored to specific linen volumes and frequency. Crisp bedding, fluffy towels, and dynamic driver collections.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Request Guesthouse RFQ &rarr;
              </span>
            </Link>

            <Link
              href="/schools"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tealbg text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                  <School className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-purple transition-colors">
                  Schools, Sports &amp; Hostels
                </h4>
                <p className="mt-2 text-xs text-brand-body leading-relaxed">
                  Rugged team sports kits (rugby, hockey), tournament derbies, school blazers, and weekly boarding house collections.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
                Explore School Plans &rarr;
              </span>
            </Link>

            <Link
              href="/healthcare"
              className="group rounded-2xl border border-brand-line bg-brand-ground p-6 hover:bg-brand-lav/40 hover:border-brand-purple/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tealbg text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                  <Stethoscope className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-lav text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                  <HeartHandshake className="h-6 w-6 transition-transform group-hover:scale-110" />
                </div>
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
