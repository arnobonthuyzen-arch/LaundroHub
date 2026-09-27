import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
  Home,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO, getSuburbs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Laundro-Hub Express | 1–2 Day Collection & Delivery in Bloemfontein",
  description:
    "We collect your laundry and deliver it back fresh, clean, and neatly folded within 1–2 days. Doorstep service across Langenhovenpark, Woodland Hills, and all Bloemfontein suburbs.",
};

export default async function ExpressPage() {
  const suburbs = await getSuburbs();

  const steps = [
    {
      num: "01",
      title: "Schedule via My Wash or WhatsApp",
      desc: "Choose a collection date and time that fits your day using our online booking tool or send us a quick WhatsApp.",
      icon: Calendar,
    },
    {
      num: "02",
      title: "Doorstep Van Collection",
      desc: "Our friendly driver arrives at your doorstep in our dedicated Express van, weighs your bags, and gives you your exact rate.",
      icon: Truck,
    },
    {
      num: "03",
      title: "Individual Wash & Steam Press",
      desc: "Garments are washed exclusively in dedicated commercial machines with premium detergents, gentle drying, and crisp folding.",
      icon: Sparkles,
    },
    {
      num: "04",
      title: "Returned Within 1–2 Days",
      desc: "Your fresh, neatly packed laundry is delivered back to your home, office, res, or guesthouse within 24 to 48 hours.",
      icon: Clock,
    },
  ];

  const whoUsesExpress = [
    {
      title: "Busy Households & Families",
      desc: "No more spending Saturday sitting in a laundromat. Keep work shirts, bedding, and kids' school clothes permanently on schedule.",
      icon: Home,
    },
    {
      title: "Airbnb & Guesthouse Hosts",
      desc: "Hassle-free turnaround between guests. We collect soiled linens and return crisp, hotel-grade bedding before the next check-in.",
      icon: Building2,
    },
    {
      title: "Students & Residences",
      desc: "Weekly doorstep collection at student communes and university residences across Universitas, Brandwag, and Willows.",
      icon: GraduationCap,
    },
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
                <Truck className="h-4 w-4 text-brand-teal" />
                Laundro-Hub Express Doorstep Service
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Collected &amp; Delivered in <span className="text-brand-purple">1–2 Days.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Never haul laundry bags across town again. Our Express van picks up directly from your home, residence, Airbnb, or business and delivers everything clean, crisp, and folded within 1–2 days.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-deep transition-all hover:scale-[1.02]"
                >
                  <Truck className="h-4 w-4 text-brand-mint" />
                  <span>Book Pickup Online (My Wash)</span>
                </Link>
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20I'd%20like%20to%20book%20an%20Express%20pickup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-teal/90 transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp 064 830 8785</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/collection.jpg"
                  alt="Laundro-Hub Express van collection in Bloemfontein"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 sm:py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Simple &amp; Reliable
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              How Express Pickup Works
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Four easy steps from your dirty laundry basket to pristine, folded clothes in your cupboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative rounded-2xl border border-brand-line bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lav text-brand-purple">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-2xl font-extrabold text-brand-line/90">
                        {step.num}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-brand-deep">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Express is Built For */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Tailored For You
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Who uses Laundro-Hub Express?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoUsesExpress.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-line bg-brand-ground p-8 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lav text-brand-purple">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-deep">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Suburb Coverage Map & List */}
      <section className="py-16 sm:py-20 bg-brand-ground border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  Wide Bloemfontein Coverage
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Our Express van runs daily routes
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  Whether you live inside a secure estate, a suburban home, a student flat, or run a guesthouse, our driver brings the convenience of Laundro-Hub right to your gate.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-deep">
                  <MapPin className="h-4 w-4 text-brand-purple" />
                  <span>Primary Collection Suburbs:</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {suburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="rounded-xl border border-brand-line bg-white px-3 py-1.5 text-xs font-semibold text-brand-deep shadow-2xs"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3 text-xs font-bold text-white hover:bg-brand-deep transition-all shadow-sm"
                >
                  <Truck className="h-4 w-4 text-brand-mint" />
                  <span>Book Your Suburb Collection</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/van.jpg"
                  alt="Laundro-Hub delivery van"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Express CTA */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-brand-deep p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="font-display text-3xl font-extrabold">
                Experience Laundro-Hub Express Today
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                Ready to skip laundry day entirely? Use our My Wash scheduler to request your doorstep pickup, or drop us a quick WhatsApp.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-mint px-6 py-3 text-xs font-bold text-brand-deep hover:bg-white transition-all shadow-sm"
                >
                  <Truck className="h-4 w-4" />
                  <span>Schedule on My Wash</span>
                </Link>
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20I'd%20like%20to%20book%20an%20Express%20pickup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/30 transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
