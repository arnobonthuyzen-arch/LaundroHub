import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Shirt,
  Tags,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "School Uniforms, Sports Kits & Hostel Laundry | Laundro-Hub Bloemfontein",
  description:
    "Specialised laundry services for Bloemfontein schools, sports teams, and boarding hostels. Deep mud removal for rugby/hockey kits, crisp blazers, and weekly hostel bag runs.",
};

export default function SchoolsPage() {
  const schoolServices = [
    {
      title: "Team Sports Kits & Jerseys",
      desc: "Rugby, hockey, soccer, netball, athletics, and cricket whites. Deep stain pre-treatment for red dirt, mud, and grass while preserving club badges and sublimated prints.",
      icon: Trophy,
    },
    {
      title: "Boarding House & Hostel Batches",
      desc: "Weekly scheduled collections for school boarding houses. Each student's bag is tagged, washed in an individual drum, and returned folded and fresh.",
      icon: Tags,
    },
    {
      title: "Blazers & Formal Wear Pressing",
      desc: "Crisp commercial steam finishing for school blazers, formal white collared shirts, pleated skirts, and school trousers.",
      icon: Shirt,
    },
    {
      title: "Express Campus Van Runs",
      desc: "Prompt pickup and delivery to school hostels, sports pavilions, or administrative offices anywhere in Bloemfontein within 1–2 days.",
      icon: Truck,
    },
  ];

  const sportsHighlights = [
    "Dedicated wash programmes that remove heavy Bloemfontein mud and red dust",
    "Color-protecting detergents that stop kit fading across long seasons",
    "Individual drum policy — kits and hostel bags are never mixed",
    "Fast weekend tournament turnarounds (Friday to Monday delivery)",
    "Hygienic high-temperature sanitisation for contact sports kits",
    "Custom seasonal contracts or per-tournament billing",
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
                Schools &bull; Sports Teams &bull; Boarding Hostels
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Pristine Kits for <span className="text-brand-purple">Schools &amp; Teams.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                From muddy rugby jerseys and weekend tournament kits to weekly boarding hostel bags and sharp Monday blazers. Handled with pride in Bloemfontein.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20we%20are%20a%20school/team%20interested%20in%20sports%20kit%20or%20hostel%20laundry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Schools Desk</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <GraduationCap className="h-4 w-4 text-brand-mint" />
                  <span>Request School Rate Card</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/uniforms.jpg"
                  alt="School sports uniforms and boarding hostel laundry"
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
              Academic &amp; Athletic Excellence
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Trusted by coaches &amp; hostel masters
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Save coaching staff and hostel supervisors hours of laundry administration with reliable batch turnarounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolServices.map((service, idx) => {
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

      {/* Mud & Stain Defense */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Tough on Mud, Gentle on Fabrics
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Engineered for rugby, hockey &amp; athletics
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  Bloemfontein fields are known for stubborn red mud and dry grass stains. Our specialised enzyme formulations break down heavy soil while safeguarding team logos, sponsor prints, and moisture-wicking technical fabrics.
                </p>
              </div>

              <div className="space-y-3">
                {sportsHighlights.map((item, idx) => (
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
                  <span>Inquire for Your Team or Hostel</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/hostel.jpg"
                  alt="School boarding house laundry collections"
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
                Get a Custom School or Sports Proposal
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                Speak directly with our team to arrange tournament emergency washing, seasonal team packages, or hostel batch collections.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'm%20contacting%20you%20on%20behalf%20of%20a%20school/sports%20team`}
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
                  <span>Contact Our Commercial Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
