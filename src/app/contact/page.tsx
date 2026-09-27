import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck, Sparkles, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ContactForm } from "@/components/ContactForm";
import { BUSINESS_INFO, getSuburbs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Laundro-Hub Bloemfontein",
  description:
    "Get in touch with Laundro-Hub Bloemfontein. Inquiries, upfront quotes, commercial accounts, hostel/residence laundry, B2B contracts, and restaurant/hotel service. WhatsApp 064 830 8785.",
};

export default async function ContactPage() {
  const suburbs = await getSuburbs();

  return (
    <div className="flex flex-col">
      {/* Hero Header with brand purple gradient */}
      <section className="relative overflow-hidden hero-purple-gradient border-b border-brand-line/70 py-14 sm:py-20">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple mb-3">
              Contact Us &amp; Inquiries
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
              Contact <span className="text-brand-purple">Us.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
              Have a question, need a quote, or want to set up a commercial, hostel, B2B, or hospitality laundry account? Reach out to our team or send us a message below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-brand-line bg-brand-teal p-5 text-white shadow-sm hover:bg-brand-teal/90 transition-all hover:scale-[1.01]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <WhatsAppIcon className="h-6 w-6 shrink-0" />
              </div>
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-white/80">WhatsApp</p>
                <p className="text-base font-bold">{BUSINESS_INFO.phone}</p>
                <p className="text-xs text-white/80">Quickest response for quotes</p>
              </div>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-4 rounded-2xl border border-brand-line bg-white p-5 text-brand-deep shadow-sm hover:border-brand-purple/40 transition-all hover:scale-[1.01]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lav text-brand-purple">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-brand-muted">Call us</p>
                <p className="text-base font-bold">{BUSINESS_INFO.phone}</p>
                <p className="text-xs text-brand-muted">Speak to our shop team</p>
              </div>
            </a>

            <Link
              href="/my-wash"
              className="flex items-center gap-4 rounded-2xl border border-brand-purple/20 bg-brand-purple p-5 text-white shadow-sm hover:bg-brand-deep transition-all hover:scale-[1.01]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-brand-mint">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-brand-mint">Doorstep Van</p>
                <p className="text-base font-bold">Book a Pickup</p>
                <p className="text-xs text-white/80">Schedule on My Wash →</p>
              </div>
            </Link>
          </div>

          {/* Form & Info Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Form Column */}
            <div className="lg:col-span-7 rounded-2xl border border-brand-line bg-white p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-brand-lav/70 px-2.5 py-1 text-xs font-bold text-brand-purple uppercase tracking-wider mb-2">
                  <Sparkles className="h-3 w-3 text-brand-teal" />
                  <span>Prompt Response</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-brand-deep">
                  Send a Message or Business Inquiry
                </h2>
                <p className="mt-1 text-sm text-brand-muted">
                  Choose your account or service type below. Whether you need a quote, commercial laundry contract, hostel rates, or general information, we are here to help.
                </p>
              </div>

              {/* Isolated Client Boundary */}
              <ContactForm />
            </div>

            {/* Info Sidebar Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* My Wash Dedicated Pickup Feature Callout */}
              <div className="rounded-2xl border border-brand-teal/30 bg-gradient-to-br from-brand-tealbg to-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-wider mb-2">
                  <Truck className="h-4 w-4" />
                  <span>Express Collection</span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-deep">
                  Want us to collect your laundry?
                </h3>
                <p className="mt-2 text-sm text-brand-body leading-relaxed">
                  Skip the drive to Langenhovenpark. Our express van collects your laundry bags directly from your home, office, or guesthouse, and returns them clean &amp; folded.
                </p>
                <div className="mt-5">
                  <Link
                    href="/my-wash"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-brand-teal/90 transition-all"
                  >
                    <span>Schedule Pickup on My Wash</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Visit Store Card */}
              <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-wider mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Visit our store</span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-deep">
                  {BUSINESS_INFO.address.name}
                </h3>
                <p className="mt-1 text-sm text-brand-body">
                  {BUSINESS_INFO.address.street}
                  <br />
                  {BUSINESS_INFO.address.suburb}, {BUSINESS_INFO.address.city}
                </p>

                <div className="mt-4 space-y-2 border-t border-brand-line pt-4">
                  <div className="flex items-center gap-2 text-xs text-brand-deep font-semibold">
                    <Clock className="h-4 w-4 text-brand-purple" />
                    <span>Opening Hours</span>
                  </div>
                  {BUSINESS_INFO.hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-xs text-brand-body">
                      <span>{h.days}</span>
                      <span className="font-mono text-brand-muted">{h.times}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={BUSINESS_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-brand-purple py-2.5 text-xs font-bold text-white hover:bg-brand-deep transition-all"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    Get Google Maps Directions
                  </a>
                </div>
              </div>

              {/* Suburb Collection Coverage */}
              <div className="rounded-2xl border border-brand-line bg-brand-lav/50 p-6">
                <div className="flex items-center gap-2 text-brand-purple font-bold text-xs uppercase tracking-wider mb-3">
                  <Truck className="h-4 w-4 text-brand-teal" />
                  <span>Doorstep Service Suburbs</span>
                </div>
                <p className="text-xs text-brand-body leading-relaxed mb-4">
                  Our van runs daily collection routes across Bloemfontein:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suburbs.map((suburb) => (
                    <span
                      key={suburb}
                      className="rounded-lg bg-white border border-brand-line px-2.5 py-1 text-xs font-medium text-brand-deep"
                    >
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
