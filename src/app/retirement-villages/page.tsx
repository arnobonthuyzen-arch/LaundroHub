import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building,
  Tag,
  Smile,
  Home,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Retirement Village & Frail Care Laundry | Laundro-Hub Bloemfontein",
  description:
    "Caring, dignified laundry services for Bloemfontein retirement villages, frail care centres, and senior residents. Gentle wash cycles, individual name-tagging, and weekly doorstep van pickup.",
};

export default function RetirementVillagesPage() {
  const villageFeatures = [
    {
      title: "Individual Name-Tagged Wash",
      desc: "Each resident's clothing is washed in a dedicated drum and tracked by name tag so treasured garments are never misplaced or mixed with others.",
      icon: Tag,
    },
    {
      title: "Gentle on Sensitive Skin & Wool",
      desc: "Hypoallergenic, dermatologist-safe detergents and gentle cycles designed specifically for delicate knits, cardigans, and sensitive aging skin.",
      icon: Heart,
    },
    {
      title: "Frail Care Bedding & Protectors",
      desc: "Thorough thermal sanitisation for hospital-style draw sheets, waterproof mattress protectors, bulky duvets, and warm winter fleece blankets.",
      icon: Sparkles,
    },
    {
      title: "Scheduled Village Van Runs",
      desc: "Our Express van collects from retirement village reception, nurse stations, or individual cottage gates in Langenhovenpark, Bayswater, and across Bloemfontein.",
      icon: Truck,
    },
  ];

  const benefits = [
    "Dignified, respectful handling of personal resident clothing",
    "Individual drum washing — strictly separated per resident",
    "Crisp steam pressing for Sunday best, collared shirts, and dresses",
    "Full sanitisation for waterproof bedding and mattress covers",
    "Consolidated monthly invoicing for village management or family accounts",
    "Reliable 1–2 day return schedule so residents are never without essentials",
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
                <Heart className="h-4 w-4 text-brand-teal" />
                Senior Living &bull; Frail Care &bull; Retirement Villages
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Caring Laundry for <span className="text-brand-purple">Retirement Villages.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Dignified, gentle laundry care for Bloemfontein&apos;s senior living communities and frail care centres. Hypoallergenic detergents, individual name-tagging, and weekly doorstep van collection.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'm%20inquiring%20about%20laundry%20services%20for%20a%20retirement%20village/resident`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Senior Care Desk</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <Home className="h-4 w-4 text-brand-mint" />
                  <span>Request Village Proposal</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/folding.jpg"
                  alt="Neatly folded and cared-for laundry for senior citizens"
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
              Compassionate &amp; Reliable
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Gentle care tailored for seniors
            </h2>
            <p className="mt-3 text-base text-brand-body">
              We treat every garment with respect and patience, providing peace of mind to residents, caregivers, and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {villageFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lav text-brand-purple mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-brand-deep">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Details */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Family Peace of Mind
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Support for residents &amp; management
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  Managing laundry in a senior community shouldn&apos;t be a burden for nursing staff or out-of-town children. We handle the weekly routine smoothly with dedicated collection routes.
                </p>
              </div>

              <div className="space-y-3">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-brand-deep font-medium">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-deep px-6 py-3 text-xs font-bold text-white hover:bg-brand-purple transition-all"
                >
                  <span>Inquire for a Retirement Village</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/bedding.jpg"
                  alt="Senior care and frail care bedding sanitisation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-ground border-t border-brand-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-brand-deep p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="font-display text-3xl font-extrabold">
                Arrange a Care Package or Facility Plan
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                Whether you need individual cottage pickup or bulk frail care linen contracts, our Bloemfontein team is ready to assist.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'm%20interested%20in%20laundry%20services%20for%20a%20retirement%20village`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 text-xs font-bold text-white hover:bg-brand-teal/90 transition-all shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Senior Desk</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/30 transition-all"
                >
                  <span>Request Account Setup</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
