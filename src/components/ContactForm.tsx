"use client";

import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import {
  CheckCircle2,
  Send,
  RotateCcw,
  Truck,
  Sparkles,
  Building2,
  Briefcase,
  Utensils,
  GraduationCap,
  Shirt,
  HeartPulse,
  Heart,
  Trophy,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { submitContactForm } from "@/actions/contact";
import type { ActionState } from "@/lib/types";
import { BUSINESS_INFO } from "@/lib/data";

const ACCOUNT_CATEGORIES = [
  {
    id: "Commercial / Industrial",
    title: "Commercial & Industrial",
    question: "Is it commercial?",
    desc: "Clinics, industrial workwear, volume contracts, and batch operations.",
    icon: Building2,
  },
  {
    id: "Hostel / Residence / Res-based",
    title: "Hostel & Residence-based",
    question: "Is it hostel or res-based?",
    desc: "University student residences, school boarding hostels, sports clubs, or camp accommodation.",
    icon: GraduationCap,
  },
  {
    id: "Restaurant, Hotel, or B&B",
    title: "Restaurant, Hotel, or B&B",
    question: "Is it restaurant-, hotel-, or B&B-based?",
    desc: "Hospitality table linen, chef aprons, guest towels, bedsheets, and guesthouse care.",
    icon: Utensils,
  },
  {
    id: "Healthcare & Clinics",
    title: "Healthcare & Clinics",
    question: "Is it healthcare or clinic-based?",
    desc: "Medical practices, dental clinics, scrubs, patient gowns, and disinfected examination linen.",
    icon: HeartPulse,
  },
  {
    id: "Retirement Villages",
    title: "Retirement Villages & Frail Care",
    question: "Is it a retirement village or frail care?",
    desc: "Senior resident personal clothing, delicate woollens, frail care bedding, and weekly van runs.",
    icon: Heart,
  },
  {
    id: "Sport Events & Tournaments",
    title: "Sport Events & Tournaments",
    question: "Is it a sports event or team tournament?",
    desc: "Overnight match kit washing, mud/grass stain treatment, squad bundles, and hotel delivery.",
    icon: Trophy,
  },
  {
    id: "Business-to-Business (B2B)",
    title: "Business-to-Business (B2B)",
    question: "Is it business-to-business based?",
    desc: "Corporate office uniforms, regular employee workwear, and monthly company accounts.",
    icon: Briefcase,
  },
  {
    id: "Personal / Household",
    title: "Personal / Household",
    question: "Is it private household laundry?",
    desc: "Everyday family wash & fold, steam ironing, or personal duvet cleaning.",
    icon: Shirt,
  },
];

const initialState: ActionState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-purple px-8 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-brand-deep hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Sending Inquiry...
        </>
      ) : (
        <>
          <span>Send Message</span>
          <Send className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Commercial / Industrial"
  );

  if (state.success) {
    return (
      <div className="rounded-2xl border border-brand-mint/40 bg-brand-tealbg/50 p-8 sm:p-10 text-center animate-in fade-in duration-300">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-white shadow-md">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-deep">
          Message Received!
        </h3>
        <p className="mt-3 text-base text-brand-body max-w-lg mx-auto leading-relaxed">
          {state.message}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-brand-teal/90 transition-all"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            Instant WhatsApp Chat
          </a>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-line bg-white px-5 py-2.5 text-sm font-semibold text-brand-body hover:bg-brand-lav transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            Send another message
          </button>
        </div>
      </div>
    );
  }

  const errors = !state.success ? state.fieldErrors : undefined;

  return (
    <div className="space-y-8">
      {/* Notice Banner to redirect users seeking Doorstep Pickups to My Wash */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-brand-teal/20 bg-brand-tealbg/70 p-4 sm:p-5">
        <div className="flex items-center gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal text-white">
            <Truck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-brand-deep">
              Need doorstep collection in Bloemfontein?
            </p>
            <p className="text-xs text-brand-body">
              Schedule your pickup time, address, and garment care preferences in our dedicated booking portal.
            </p>
          </div>
        </div>
        <Link
          href="/my-wash"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-brand-teal px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-brand-teal/90 transition-all"
        >
          <span>Go to My Wash</span>
          <Sparkles className="h-3.5 w-3.5 text-brand-mint" />
        </Link>
      </div>

      <form action={formAction} className="space-y-7">
        {state.error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {state.error}
          </div>
        )}

        {/* Hidden input to sync category */}
        <input type="hidden" name="accountType" value={selectedCategory} />

        {/* CATEGORY LISTINGS (Commercial, Hostel/Res-based, B2B, Restaurant/Hotel/B&B, Personal) */}
        <div>
          <label className="block text-sm font-bold text-brand-deep mb-1.5">
            What type of service or account is this? *
          </label>
          <p className="text-xs text-brand-muted mb-3">
            Select your organization type so our dispatch team can provide tailored rates:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ACCOUNT_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                    isSelected
                      ? "border-brand-purple bg-brand-purple/5 ring-1 ring-brand-purple/40"
                      : "border-brand-line bg-white hover:border-brand-purple/30"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isSelected
                        ? "bg-brand-purple text-white shadow-sm"
                        : "bg-brand-lav text-brand-deep"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-deep">
                        {cat.title}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-brand-teal block mt-0.5">
                      {cat.question}
                    </span>
                    <p className="text-[11px] text-brand-muted mt-1 leading-snug">
                      {cat.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          {errors?.accountType && (
            <p className="mt-1.5 text-xs font-medium text-red-600">{errors.accountType[0]}</p>
          )}
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-deep mb-1.5">
              Contact person / Full name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Johan van der Merwe"
              className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            />
            {errors?.name && (
              <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name[0]}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-brand-deep mb-1.5">
              Phone / WhatsApp number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              required
              autoComplete="tel"
              placeholder="064 830 8785"
              className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            />
            {errors?.phone && (
              <p className="mt-1.5 text-xs font-medium text-red-600">{errors.phone[0]}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-deep mb-1.5">
            Email address (for formal quotation or invoice)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="johan@company.co.za"
            className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          />
          {errors?.email && (
            <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email[0]}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Service to Quote */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-brand-deep mb-1.5">
              Primary service required *
            </label>
            <select
              id="service"
              name="service"
              defaultValue="Everyday Wash, Dry & Fold"
              className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            >
              <option value="Everyday Wash, Dry & Fold">Wash, Dry &amp; Fold</option>
              <option value="Steam Ironing & Pressing">Professional Steam Ironing</option>
              <option value="Bedding, Duvets & Linen">Heavy Bedding &amp; Blankets</option>
              <option value="Commercial / Hospitality Linen">Hospitality &amp; Guesthouse Linen</option>
              <option value="Workwear & Uniform Batches">Workwear &amp; Uniform Batches</option>
              <option value="Monthly Contract Package">Monthly Contract / Subscription</option>
              <option value="Other Custom Request">Other Custom Requirement</option>
            </select>
            {errors?.service && (
              <p className="mt-1.5 text-xs font-medium text-red-600">{errors.service[0]}</p>
            )}
          </div>

          {/* Estimated Volume */}
          <div>
            <label htmlFor="estimatedVolume" className="block text-sm font-semibold text-brand-deep mb-1.5">
              Estimated volume / frequency *
            </label>
            <select
              id="estimatedVolume"
              name="estimatedVolume"
              defaultValue="Regular Weekly Commercial Batches"
              className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            >
              <option value="Daily Hospitality / Restaurant Linen">Daily Hospitality / Restaurant Linen</option>
              <option value="Weekly Commercial Batches (20–50 kg)">Weekly Commercial Batches (20–50 kg)</option>
              <option value="Large Hostel / Residence Bulk (50+ kg)">Large Hostel / Residence Bulk (50+ kg)</option>
              <option value="1–2 Regular Baskets (~5–10 kg)">1–2 Regular Baskets (~5–10 kg)</option>
              <option value="3–4 Baskets (~15–20 kg)">3–4 Baskets (~15–20 kg)</option>
              <option value="Once-Off Deep Sanitization">Once-Off Deep Sanitization</option>
              <option value="Unsure / Need Custom Assessment">Unsure / Need Custom Assessment</option>
            </select>
            {errors?.estimatedVolume && (
              <p className="mt-1.5 text-xs font-medium text-red-600">{errors.estimatedVolume[0]}</p>
            )}
          </div>
        </div>

        {/* Message / Special Details */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-brand-deep mb-1.5">
            Details, requirements or questions
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about collection frequency, billing preferences (monthly invoicing vs card), specific fabric requirements, or hostel/business location."
            className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          />
          {errors?.message && (
            <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message[0]}</p>
          )}
        </div>

        {/* Footer / Submit */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
          <p className="text-xs text-brand-muted">
            We respond promptly to all business and private inquiries. Prefer instant chat?{" "}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-brand-teal underline"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 inline" />
              WhatsApp us
            </a>
          </p>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
