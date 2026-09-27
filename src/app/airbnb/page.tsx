import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Layers,
  HeartHandshake,
  KeyRound,
  FileCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Airbnb & Short-Stay Laundry Solutions | Laundro-Hub Bloemfontein",
  description:
    "Fast-turnaround laundry for Airbnb Superhosts and short-stay rentals in Bloemfontein. Crisp white linens, fluffy towels, duvet sanitisation, and doorstep delivery.",
};

export default function AirbnbPage() {
  const hostPerks = [
    {
      title: "Rapid Turnover Ready",
      desc: "Same-day or next-day turnaround to meet tight check-out (10:00) to check-in (14:00) windows without stressful delays.",
      icon: Clock,
    },
    {
      title: "Hotel-Grade Crisp Linens",
      desc: "Rotary steam pressed sheets and pillowcases that look immaculate on arrival and elevate your 5-star guest reviews.",
      icon: Sparkles,
    },
    {
      title: "Bulky Duvet & Protector Care",
      desc: "Deep thermal sanitisation for inner duvets, quilted mattress protectors, extra fleece blankets, and bath mats.",
      icon: Layers,
    },
    {
      title: "Doorstep Express Van Delivery",
      desc: "Our van collects bagged turnover linen straight from your property or lockbox and returns it bagged and ready for housekeeping.",
      icon: Truck,
    },
  ];

  const linenChecklist = [
    "Fitted & flat sheets (King, Queen, Three-Quarter, Single)",
    "Pillowcases & quilted pillow protectors",
    "Fluffy white bath sheets, hand towels & face cloths",
    "Heavy bath mats & kitchen tea towels",
    "Inner duvets, comforters, and fleece throws",
    "Waterproof & quilted mattress protectors",
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
                <KeyRound className="h-4 w-4 text-brand-teal" />
                Short-Stay Rentals &bull; Airbnb Superhosts
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Guest-Ready Laundry for <span className="text-brand-purple">Airbnb Hosts.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Never stress over turnover day again. We wash, sanitise, steam press, and neatly pack your rental linens so your property is always pristine for your next guest.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20I'm%20an%20Airbnb%20host%20in%20Bloemfontein%20interested%20in%20your%20turnover%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Host Partner Line</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <HeartHandshake className="h-4 w-4 text-brand-mint" />
                  <span>Request Host Pricing</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/guesthouse.jpg"
                  alt="Crisp Airbnb bed linen and towels"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Designed For High Ratings
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Protect your 5-star cleanliness review
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Guests notice scratchy towels or creased bedsheets immediately. We deliver hotel-grade perfection every single turnover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostPerks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tealbg text-brand-teal mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-brand-deep">
                    {perk.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Linen Checklist & Workflow */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Complete Inventory Care
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Everything your short-stay property uses
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  Whether you operate a 1-bedroom studio in Westdene or a luxury 4-bedroom villa in Woodland Hills Wildlife Estate, we handle all turnover items in one seamless cycle.
                </p>
              </div>

              <div className="space-y-3">
                {linenChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-brand-deep font-medium">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3 text-xs font-bold text-white hover:bg-brand-deep transition-all shadow-sm"
                >
                  <Truck className="h-3.5 w-3.5 text-brand-mint" />
                  <span>Book Express Host Collection</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/folding.jpg"
                  alt="Neatly folded and packed linen for Airbnb units"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Hosts */}
      <section className="py-16 sm:py-20 bg-brand-ground border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Streamlined Logistics
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              How our Airbnb service works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-brand-line bg-white p-6 sm:p-8 space-y-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lav text-brand-purple font-mono font-bold text-lg">
                01
              </div>
              <h4 className="font-display text-lg font-bold text-brand-deep">
                Checkout &amp; Bagging
              </h4>
              <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                When your guest checks out, your cleaner strips the beds and bags all used linen. Send us a quick WhatsApp ping or book via My Wash.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-line bg-white p-6 sm:p-8 space-y-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lav text-brand-purple font-mono font-bold text-lg">
                02
              </div>
              <h4 className="font-display text-lg font-bold text-brand-deep">
                Van Pickup &amp; Wash
              </h4>
              <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                Our Express van collects from your property. Linens undergo high-temp antibacterial washing, stain pre-treatment, and crisp steam pressing.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-line bg-white p-6 sm:p-8 space-y-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lav text-brand-purple font-mono font-bold text-lg">
                03
              </div>
              <h4 className="font-display text-lg font-bold text-brand-deep">
                Delivered Guest-Ready
              </h4>
              <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                Within 1–2 days (or faster by turnover agreement), fresh, protected bundles arrive back at your doorstep, ready for immediate bed-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-brand-deep p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="font-display text-3xl font-extrabold">
                Partner with Bloemfontein&apos;s Trusted Airbnb Laundry
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                Join local Superhosts who trust Laundro-Hub for immaculate guest turnarounds. Flexible invoicing, volume discounts, and reliable van collections.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20I%20host%20an%20Airbnb%20and%20want%20to%20set%20up%20a%20turnover%20account`}
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
