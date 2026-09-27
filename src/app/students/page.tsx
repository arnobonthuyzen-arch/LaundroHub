import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  Truck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Scale,
  Shirt,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO, getPricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Student Laundry & Residence Packages | Laundro-Hub Bloemfontein",
  description:
    "Affordable monthly laundry packages for UFS Kovsies, CUT, college students, and residences. Scheduled doorstep pickup, individual bag washing, and fresh folding.",
};

export default async function StudentsPage() {
  const plans = await getPricingPlans();
  const studentPlan = plans.find((p) => p.id === "student-single") || plans[0];

  const studentBenefits = [
    {
      title: "Predictable Monthly Budget",
      desc: "No coin machines, broken residence washers, or unexpected expenses. Pay a fixed monthly bundle rate for your kilograms.",
      icon: Calendar,
    },
    {
      title: "Res & Commune Doorstep Collection",
      desc: "Our Express van picks up your laundry bag from your student residence, commune, or hostel in Universitas, Brandwag, or Westdene.",
      icon: Truck,
    },
    {
      title: "100% Individual Machine Washes",
      desc: "Your clothes are washed strictly on their own in commercial machines. Never mixed with another student's garments.",
      icon: ShieldCheck,
    },
    {
      title: "Fresh, Clean & Ready to Wear",
      desc: "Washed with premium detergents, gentle moisture-controlled drying, and neatly folded so you can unpack directly into your cupboard.",
      icon: Shirt,
    },
  ];

  const residenceOptions = [
    "UFS (Kovsies) on-campus & off-campus residences",
    "CUT (Central University of Technology) student housing",
    "Private student communes in Universitas, Brandwag & Willows",
    "School boarding hostels and sports residences",
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
                <GraduationCap className="h-4 w-4 text-brand-teal" />
                UFS Kovsies &bull; CUT &bull; Student Residences
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Student Laundry Made <span className="text-brand-purple">Effortless.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Focus on tests, assignments, and campus life — we take care of the washing, drying, and folding. Monthly packages with weekly residence pickup across Bloemfontein.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'm%20a%20student%20interested%20in%20your%20monthly%20package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Student Desk</span>
                </a>
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <Truck className="h-4 w-4 text-brand-mint" />
                  <span>Schedule Res Pickup</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/student.jpg"
                  alt="Student laundry assistance in Bloemfontein"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Student Package Banner */}
      <section className="py-12 bg-white border-b border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-purple/20 bg-gradient-to-r from-brand-lav/70 via-white to-brand-tealbg/40 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block rounded-full bg-brand-purple px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                Official Student Bundle
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-deep">
                {studentPlan.name} Plan &mdash; {studentPlan.pricePerMonth}
              </h3>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                Includes <strong className="text-brand-deep">{studentPlan.weightLimit}</strong> wash, dry &amp; fold each month. Comes with scheduled collections, free branded bag, and quick turnaround.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
              >
                <span>Activate Student Plan</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/what-we-offer"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-line bg-white px-5 py-3 text-xs font-bold text-brand-deep hover:bg-brand-lav transition-all"
              >
                <span>View All Bundles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Love Laundro-Hub */}
      <section className="py-16 sm:py-20 bg-brand-ground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Designed For Campus Life
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Why Bloemfontein students choose us
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Say goodbye to lost socks in crowded residence basements and queues for broken dryers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentBenefits.map((item, idx) => {
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

      {/* Residence Batch Service & Coverage */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Hostel &amp; Residence Group Accounts
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Live in a residence or commune?
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  We partner with house committees, residence management, and student communes to set up fixed collection points. Students drop their tagged bag at reception or their corridor collection spot, and we return everything fresh in 1–2 days.
                </p>
              </div>

              <div className="space-y-3">
                {residenceOptions.map((res, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-brand-deep font-medium">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-deep px-6 py-3 text-xs font-bold text-white hover:bg-brand-purple transition-all"
                >
                  <span>Request Residence Group Rates</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/hostel.jpg"
                  alt="Student residence laundry collections"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-ground border-t border-brand-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-brand-deep p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="font-display text-3xl font-extrabold">
                Get Your Laundry Sorted Today
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                WhatsApp our team or sign up online. Drop off at The Towers Shopping Centre in Langenhovenpark or book your res pickup.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'm%20a%20student%20looking%20for%20laundry%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 text-xs font-bold text-white hover:bg-brand-teal/90 transition-all shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Student Desk</span>
                </a>
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/30 transition-all"
                >
                  <span>Book Express Van (My Wash)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
