import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Sparkles,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Layers,
  UtensilsCrossed,
  Receipt,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commercial Laundry for Guesthouses, B&Bs & Hotels | Laundro-Hub Bloemfontein",
  description:
    "Commercial laundry solutions for Bloemfontein guesthouses, boutique hotels, and dining rooms. High-capacity linen sanitisation, steam pressing, and scheduled van routes.",
};

export default function HospitalityPage() {
  const hospitalityServices = [
    {
      title: "Commercial Bed & Bath Linen",
      desc: "Bedding, fitted sheets, duvets, and thick luxury bath sheets processed in commercial washers with high-temperature sanitisation.",
      icon: Layers,
    },
    {
      title: "Restaurant & Banquet Table Linen",
      desc: "Flawless stain treatment and steam pressing for dining tablecloths, cloth napkins, runners, and banquet skirting.",
      icon: UtensilsCrossed,
    },
    {
      title: "Chef Whites & Staff Uniforms",
      desc: "Grease and food stain pre-treatment for chef jackets, kitchen aprons, and front-of-house staff uniforms.",
      icon: Sparkles,
    },
    {
      title: "Scheduled Van Pickup Routes",
      desc: "Fixed weekly collection and delivery schedules anywhere in Bloemfontein, with guaranteed 1–2 day turnaround.",
      icon: Truck,
    },
  ];

  const standards = [
    "Hospitality-grade detergent & oxygen-safe brightening agents",
    "Thermal sanitisation cycles meeting commercial hygiene codes",
    "Industrial rotary steam pressing for crisp, flat presentation",
    "Moisture-controlled drying to preserve thread counts and fabric longevity",
    "Individual batch processing — your linen is never mixed with other clients",
    "Itemised commercial delivery manifests and monthly B2B billing",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Header with Brand Purple Gradient */}
      <section className="relative overflow-hidden hero-purple-gradient border-b border-brand-line/70 py-14 sm:py-20">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple">
                <Building2 className="h-4 w-4 text-brand-teal" />
                Guesthouses &bull; Boutique Hotels &bull; Lodges
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Commercial Laundry for <span className="text-brand-purple">Hospitality.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Reliable linen management for Bloemfontein&apos;s leading guesthouses, B&amp;Bs, and dining establishments. Impeccable hygiene, steam-pressed bedding, and scheduled doorstep delivery.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20I'm%20inquiring%20about%20commercial%20laundry%20rates%20for%20a%20guesthouse/hotel`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Commercial Desk</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <Receipt className="h-4 w-4 text-brand-mint" />
                  <span>Request Corporate Quote</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/hero-towels.jpg"
                  alt="Commercial hospitality towels and bedding in Bloemfontein"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Hospitality-Grade Execution
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Tailored for lodging &amp; dining businesses
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Outsource your heavy laundry overhead and ensure your guests sleep on crisp, sterile, fresh-scented linens every night.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalityServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lav text-brand-purple mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-brand-deep">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & Invoicing */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Quality &amp; Compliance
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  The standards your guests deserve
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  We use commercial chemical dosing systems that protect high-thread-count Egyptian cotton while effectively dissolving body oils, makeup, coffee, and wine stains.
                </p>
              </div>

              <div className="space-y-3">
                {standards.map((std, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-brand-deep font-medium">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-deep px-6 py-3 text-xs font-bold text-white hover:bg-brand-purple transition-all"
                >
                  <span>Open a Commercial Account</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/bedding.jpg"
                  alt="Freshly pressed commercial hotel bedding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Invoicing & B2B Billing CTA */}
      <section className="py-16 bg-brand-ground border-t border-brand-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-brand-deep p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="font-display text-3xl font-extrabold">
                Schedule a Site Visit or Quote Consultation
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                We can assess your current volume, provide test washes, and prepare a custom tier proposal tailored to your monthly linen cycles.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20we%20are%20a%20guesthouse/hotel%20and%20want%20a%20commercial%20quote`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 text-xs font-bold text-white hover:bg-brand-teal/90 transition-all shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/30 transition-all"
                >
                  <span>Send Inquiry via Contact Form</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
