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
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS_INFO, getPricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Student Laundry Service Bloemfontein",
  description:
    "Affordable student & residence laundry in Bloemfontein for UFS, CUT, and communes. Individual machine washes, steam folding, and doorstep pickup.",
  alternates: {
    canonical: "https://laundro-hub.co.za/students",
  },
  openGraph: {
    title: "Student Laundry Service Bloemfontein | Laundro-Hub",
    description:
      "Monthly student & residence laundry packages and walk-in R40/kg wash, dry & fold across Universitas, Brandwag, and Bloemfontein.",
    url: "https://laundro-hub.co.za/students",
    images: [{ url: "/img/student.jpg", alt: "Student laundry service in Bloemfontein at Laundro-Hub" }],
  },
};

export default async function StudentsPage() {
  const plans = await getPricingPlans();
  const studentPlan = plans.find((p) => p.id === "student-res") || plans[0];

  const studentBenefits = [
    {
      title: "Predictable Term or Monthly Budget",
      desc: "No coin machines, broken residence washers, or unexpected expenses. Clear per-student or commune pricing.",
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
    "University on-campus & off-campus residences",
    "Student housing and private communes",
    "Private student accommodations in Universitas, Brandwag & Willows",
    "School boarding hostels and sports residences",
  ];

  const studentFaqs = [
    {
      question: "How does student laundry pickup work in Universitas and Brandwag?",
      answer:
        "WhatsApp or call us on (064) 830-8785, or book via My Wash. Our Express driver schedules dynamic doorstep collection from your UFS residence, commune, or student accommodation across Bloemfontein and returns your folded clothes in 1–2 days.",
    },
    {
      question: "Are my clothes washed separately from other students' laundry?",
      answer:
        "Yes. Every student bag is washed in its own dedicated commercial machine cycle and never mixed with another customer's garments.",
    },
    {
      question: "What does the Student & Res monthly plan cost vs walk-in rates?",
      answer: `Our ${studentPlan.name} plan is ${studentPlan.pricePerMonth} for ${studentPlan.weightLimit} of wash, dry and fold each month (packages update starting January 2027). Standard walk-in wash, dry and fold is R40/kg with no minimum order.`,
    },
    {
      question: "How do I pay for student or residence laundry?",
      answer:
        "We accept card (Speedpoint tap/insert), instant EFT, and SAMBA only. For security reasons, strictly no cash is handled and we do not offer open monthly credit accounts.",
    },
  ];

  const studentsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://laundro-hub.co.za/students#service",
        name: "Student & Residence Laundry Service Bloemfontein",
        serviceType: "Student & Residence Laundry",
        provider: {
          "@id": "https://laundro-hub.co.za/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Bloemfontein",
        },
        description:
          "Individual-machine wash, dry, and fold laundry service for university students, communes, and residences in Universitas, Brandwag, Willows, and Bloemfontein.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://laundro-hub.co.za/students#faq",
        mainEntity: studentFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <JsonLd id="students-jsonld" data={studentsJsonLd} />
      {/* Hero Header with Brand Purple Gradient */}
      <section className="relative overflow-hidden hero-purple-gradient border-b border-brand-line/70 py-14 sm:py-20">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple">
                <GraduationCap className="h-4 w-4 text-brand-teal" />
                Universities &bull; Colleges &bull; Student Residences
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                Student Laundry Service in <span className="text-brand-purple">Bloemfontein.</span>
              </h1>
              <p className="text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                Dedicated monthly student and residence laundry packages for UFS, CUT, communes, and boarding hostels, alongside standard R40/kg walk-in rates (Packages update starting January 2027). Drop off at The Towers in Langenhovenpark or Bains Lodge, or schedule dynamic driver collection across Universitas, Brandwag, and Bloemfontein.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'm%20a%20student%20interested%20in%20your%20student%20res%20laundry%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-card hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp: {BUSINESS_INFO.phone}</span>
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
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-block rounded-full bg-brand-purple px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                  Official Student Bundle
                </span>
                <span className="inline-block rounded-full bg-brand-tealbg text-brand-teal-dark border border-brand-teal/20 px-2.5 py-0.5 text-[11px] font-bold">
                  Packages Update Jan 2027 &bull; Walk-Ins Welcome
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-deep">
                {studentPlan.name} Plan &mdash; {studentPlan.pricePerMonth}
              </h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                Includes <strong className="text-brand-deep">{studentPlan.weightLimit}</strong> wash, dry &amp; fold each month. Standard walk-in rates also available at R40/kg anytime. Billing strictly EFT, card, or SAMBA (no open monthly accounts).
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
                  <h3 className="font-display text-lg font-bold text-brand-deep">
                    {item.title}
                  </h3>
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
                <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
                  Live in a residence or commune?
                </h2>
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

      {/* Student Laundry FAQs */}
      <section className="py-16 bg-brand-ground border-t border-brand-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Student &amp; Hostel FAQs
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-deep">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {studentFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-brand-deep">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-brand-body leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-brand-purple">
            <Link href="/what-we-offer" className="underline hover:text-brand-deep">
              Compare official per-kg laundry prices
            </Link>
            <span aria-hidden="true">&bull;</span>
            <Link href="/express" className="underline hover:text-brand-deep">
              See Express pickup suburbs in Bloemfontein
            </Link>
            <span aria-hidden="true">&bull;</span>
            <Link href="/schools" className="underline hover:text-brand-deep">
              Boarding school &amp; sports kit laundry
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-brand-deep p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h2 className="font-display text-3xl font-extrabold text-white">
                Get Your Laundry Sorted Today
              </h2>
              <p className="text-brand-lav/90 text-sm sm:text-base max-w-xl mx-auto">
                WhatsApp our team or sign up online. Drop off at The Towers (Langenhovenpark) or Bains Lodge (opp. security), or schedule our driver dynamically across Bloemfontein. Strictly EFT, card, or SAMBA payment.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://api.whatsapp.com/send?phone=27648308785&text=Hi%20Laundro-Hub,%20I'm%20a%20student%20looking%20for%20laundry%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 min-h-[44px] text-xs font-bold text-white hover:bg-brand-teal-dark active:scale-[0.98] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>WhatsApp {BUSINESS_INFO.phone}</span>
                </a>
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 min-h-[44px] text-xs font-bold text-white hover:bg-white/20 active:scale-[0.98] transition-all"
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
