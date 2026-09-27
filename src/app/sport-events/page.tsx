import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Sparkles,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Medal,
  Calendar,
  Flame,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sports Events, Tournaments & Visiting Teams Laundry | Laundro-Hub Bloemfontein",
  description:
    "Fast tournament match kit turnaround for visiting sports teams, school festivals, and athletic championships in Bloemfontein. Overnight washing, deep mud removal, and stadium delivery.",
};

export default function SportEventsPage() {
  const eventPerks = [
    {
      title: "Overnight Match Turnarounds",
      desc: "Playing back-to-back tournament fixtures? We collect Friday evening and deliver fresh, dry kits before Saturday morning kickoff.",
      icon: Clock,
    },
    {
      title: "Red Mud & Turf Stain Removal",
      desc: "Specialised enzyme treatments formulated specifically for Bloemfontein's infamous red dust, turf marks, and heavy grass stains.",
      icon: Flame,
    },
    {
      title: "Full Squad Sorting & Packing",
      desc: "Jerseys, shorts, and socks kept organized by squad number and bundled so team managers can unpack directly into match lockers.",
      icon: Medal,
    },
    {
      title: "Hotel & Stadium Van Logistics",
      desc: "Our Express van picks up directly from team hotels, guest lodges, or stadium changerooms anywhere in Bloemfontein.",
      icon: Truck,
    },
  ];

  const sportsCovered = [
    "Rugby squads (1st XV, provincial tournaments, Craven Week & youth derbies)",
    "Field hockey teams (astroturf mud, shin guards & tournament bibs)",
    "Soccer & athletics clubs (sublimated jerseys & track singlets)",
    "Cricket squads (deep grass and red pitch clay removal for whites)",
    "Netball, basketball & indoor sports teams",
    "Visiting university varsity cup & college teams",
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
                <Trophy className="h-4 w-4 text-brand-teal" />
                Tournaments &bull; Visiting Teams &bull; Sports Events
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Match-Ready Laundry for <span className="text-brand-purple">Sport Events.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Rapid tournament kit washing for visiting squads, school derbies, and provincial championships in Bloemfontein. Overnight turnaround, deep stain removal, and hotel delivery.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20we%20have%20a%20sports%20team/tournament%20in%20Bloemfontein%20needing%20match%20kit%20laundry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Tournament Coordinator</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <Medal className="h-4 w-4 text-brand-mint" />
                  <span>Book Tournament Support</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/uniforms.jpg"
                  alt="Sports tournament match kit laundry in Bloemfontein"
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
              Championship Reliability
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Built for high-stakes competition
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Coaches and team managers trust us to get their first-choice kits spotless, dry, and ready before the whistle blows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventPerks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tealbg text-brand-teal mb-4">
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

      {/* Codes Covered & Logistics */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  All Sporting Disciplines
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Tournaments &amp; fixtures we cater for
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  Whether your squad is staying at a local guesthouse, school boarding hostel, or central hotel, we collect directly from your accommodation and return kits in pristine condition.
                </p>
              </div>

              <div className="space-y-3">
                {sportsCovered.map((item, idx) => (
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
                  <span>Book Fixture Support</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/collection.jpg"
                  alt="Sports event kit collection and delivery van"
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
                Heading to Bloemfontein for a Tournament?
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                Pre-book your team laundry slots in advance so our machines are reserved exclusively for your match schedule.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20our%20sports%20team%20is%20traveling%20to%20Bloemfontein%20for%20a%20tournament`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 text-xs font-bold text-white hover:bg-brand-teal/90 transition-all shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Emergency Match Desk</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/30 transition-all"
                >
                  <span>Submit Team Schedule</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
