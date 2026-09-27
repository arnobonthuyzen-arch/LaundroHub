import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Sparkles, Clock, ShieldCheck, HeartHandshake, CheckCircle2, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { MyWashForm } from "@/components/my-wash/MyWashForm";
import { getSuburbs, BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "My Wash | Book Doorstep Laundry Pickup & Delivery in Bloemfontein",
  description:
    "Schedule your laundry pickup with Laundro-Hub's Express Van. Doorstep collection, individual drum washing, crisp steam ironing, and fast delivery in Bloemfontein.",
};

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Schedule Your Pickup",
    description: "Choose your preferred date, time window, and Bloemfontein suburb. Tell us your detergent and packaging preferences.",
    icon: Truck,
  },
  {
    step: "02",
    title: "Doorstep Collection",
    description: "Our friendly driver arrives at your home, complex, or office with dedicated sealed laundry bags. We tag and weigh your items.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Individual Wash & Press",
    description: "Your laundry is washed solo in commercial washers — never mixed with anyone else's garments. Steam ironed or folded crisp.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Fresh Delivery to Your Door",
    description: "Returned fresh, stacked or hung on wire hangers, ready to wear straight into your wardrobe within 24–48h or same-day express.",
    icon: HeartHandshake,
  },
];

const FAQS = [
  {
    q: "How does billing and weighing work?",
    a: "No advance payment is needed! When our driver collects your laundry, it is weighed either on our calibrated portable scale or upon arrival at our Langenhovenpark hub. An itemised digital quote is sent to your WhatsApp for approval before washing begins.",
  },
  {
    q: "Do you ever wash my clothes with other people's clothes?",
    a: "Never. We enforce a strict Individual Drum Policy. Every customer's order is washed, dried, and folded separately in sanitized commercial machines.",
  },
  {
    q: "What suburbs do you collect from?",
    a: "We collect across greater Bloemfontein, including Langenhovenpark, Woodland Hills Wildlife Estate, Universitas, Brandwag, Westdene, Dan Pienaar, Pentagon Park, Bayswater, Waverley, and Fichardtpark.",
  },
  {
    q: "How can I pay for my wash?",
    a: "We accept Speedpoint Card Tap upon return delivery, instant EFT, SnapScan / Zapper, or cash.",
  },
];

export default async function MyWashPage() {
  const suburbs = await getSuburbs();

  return (
    <div className="flex flex-col">
      {/* Hero Header with brand purple gradient */}
      <section className="relative overflow-hidden hero-purple-gradient border-b border-brand-line/70 py-14 sm:py-20">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-teal mb-3">
              <Truck className="h-3.5 w-3.5" />
              <span>Doorstep Laundry Concierge</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
              My <span className="text-brand-purple">Wash.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
              Book your laundry collection in under 60 seconds. Our express van collects from your door in Bloemfontein, washes with care, and returns your clothes crisp, fresh, and neatly folded.
            </p>

            {/* Quick feature pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-brand-deep">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-line px-3 py-1 shadow-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal" />
                Solo Drum Wash Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-line px-3 py-1 shadow-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal" />
                Real-time WhatsApp ETA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-line px-3 py-1 shadow-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal" />
                Same-Day Express Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Container */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Booking Form (Isolated Leaf Client Component) */}
          <MyWashForm suburbs={suburbs} />

          {/* 4-Step How It Works Section */}
          <div className="mt-24 pt-16 border-t border-brand-line">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Effortless Doorstep Process
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-deep">
                How My Wash Works
              </h2>
              <p className="mt-2 text-sm text-brand-muted">
                From your laundry basket back into your wardrobe, without setting foot outside.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="relative rounded-2xl border border-brand-line bg-white p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-2xl font-black text-brand-lav text-brand-purple/30">
                          {step.step}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lav text-brand-purple">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-bold text-brand-deep">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Suburb Route Coverage Grid */}
          <div className="mt-20 rounded-3xl border border-brand-line bg-gradient-to-br from-white via-brand-ground/40 to-brand-lav/30 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  Service Area
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-brand-deep">
                  Daily Express Routes Across Bloemfontein
                </h3>
                <p className="mt-2 text-sm text-brand-body leading-relaxed">
                  Our vans run morning, midday, and late afternoon schedules. Free doorstep pickup and drop-off is available for orders over 10 kg across all covered suburbs.
                </p>
              </div>

              <div className="flex-1 flex flex-wrap gap-2">
                {suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="rounded-xl border border-brand-line bg-white px-3.5 py-2 text-xs font-semibold text-brand-deep shadow-sm"
                  >
                    📍 {suburb}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-deep">
                Doorstep Laundry FAQs
              </h3>
              <p className="mt-1 text-sm text-brand-muted">
                Everything you need to know about our collection and delivery service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm"
                >
                  <h4 className="font-bold text-sm text-brand-deep mb-2 flex items-start gap-2">
                    <span className="text-brand-purple font-mono">Q:</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-brand-body leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Need a quote instead banner */}
            <div className="mt-10 p-6 rounded-2xl border border-brand-line bg-white text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-sm font-bold text-brand-deep">
                  Need a quote for bulk commercial or guesthouse laundry first?
                </p>
                <p className="text-xs text-brand-muted">
                  Use our quote calculator or message us on WhatsApp with your questions.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="rounded-xl border border-brand-line bg-brand-lav px-4 py-2.5 text-xs font-bold text-brand-deep hover:bg-brand-lav/80 transition-all"
                >
                  Contact Us
                </Link>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand-teal px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-teal/90 transition-all"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
