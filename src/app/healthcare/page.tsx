import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Sparkles,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck,
  Stethoscope,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Healthcare & Clinic Laundry Services | Laundro-Hub Bloemfontein",
  description:
    "Compliant medical and clinic laundry in Bloemfontein. High-temperature sanitisation for medical scrubs, doctor coats, patient gowns, and clinical examination linen.",
};

export default function HealthcarePage() {
  const healthcareFeatures = [
    {
      title: "Medical Scrubs & Lab Coats",
      desc: "Specialised detergent cycles for doctor coats, nurse scrubs, surgical theatre gowns, and clinical uniforms that remove stains while preserving fabric integrity.",
      icon: Stethoscope,
    },
    {
      title: "Clinical & Examination Linen",
      desc: "High-heat sanitisation for examination table sheets, treatment towels, pillowcases, and patient draping fabrics.",
      icon: Sparkles,
    },
    {
      title: "Thermal & Chemical Sanitisation",
      desc: "Washed at temperature protocols that destroy pathogens, bacteria, and viral contaminants, meeting health and safety benchmarks.",
      icon: ShieldCheck,
    },
    {
      title: "Sealed Bag Doorstep Dispatch",
      desc: "Laundro-Hub Express collects bagged clinical laundry and returns everything heat-sealed in poly-protective packaging to avoid contamination.",
      icon: Truck,
    },
  ];

  const clientTypes = [
    "Private medical practices & specialist consulting rooms",
    "Dental surgeries and oral health clinics",
    "Physiotherapy, biokinetics & chiropractic practices",
    "Day clinics, cosmetic surgery & wellness spas",
    "Diagnostic laboratories & medical testing centres",
    "Emergency response and paramedic support units",
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
                <HeartPulse className="h-4 w-4 text-brand-teal" />
                Clinics &bull; Medical Practices &bull; Healthcare
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Sanitised Laundry for the <span className="text-brand-purple">Healthcare Sector.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Strict hygiene standards for Bloemfontein&apos;s doctors, clinics, dentists, and physio practices. High-temperature sanitisation, protective sealed packaging, and reliable van collection.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20I'm%20inquiring%20about%20healthcare/clinic%20laundry%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Healthcare Desk</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
                >
                  <ShieldCheck className="h-4 w-4 text-brand-mint" />
                  <span>Request Clinic Account</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line/80 shadow-elevated">
                <Image
                  src="/img/laundry-interior.jpg"
                  alt="Commercial sanitary medical laundry in Bloemfontein"
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
              Clinical Hygiene Standards
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
              Hygiene and compliance first
            </h2>
            <p className="mt-3 text-base text-brand-body">
              Healthcare laundry demands more than standard domestic washing. We apply strict thermal disinfection and barrier handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthcareFeatures.map((item, idx) => {
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

      {/* Who We Support in Healthcare */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Comprehensive Medical Support
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Who we assist in Bloemfontein
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-body leading-relaxed">
                  From single-doctor consultation rooms to multidisciplinary health complexes, we offer customizable collection schedules that fit seamlessly around your patient appointments.
                </p>
              </div>

              <div className="space-y-3">
                {clientTypes.map((client, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-brand-deep font-medium">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0" />
                    <span>{client}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-deep px-6 py-3 text-xs font-bold text-white hover:bg-brand-purple transition-all"
                >
                  <span>Set Up a Healthcare Account</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-line shadow-elevated">
                <Image
                  src="/img/hero-towels.jpg"
                  alt="Sterile clinical towels and linens"
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
                Schedule a Consultation for Your Practice
              </h3>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                Contact our commercial desk to discuss scheduled collection days, chemical certifications, and itemised monthly invoicing.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/27648308785?text=Hi%20Laundro-Hub,%20we%20are%20a%20medical/health%20practice%20inquiring%20about%20laundry%20rates`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 text-xs font-bold text-white hover:bg-brand-teal/90 transition-all shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp Healthcare Desk</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/30 transition-all"
                >
                  <span>Request Corporate Invoicing</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
