"use client";

import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  Truck,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  RotateCcw,
  Shirt,
  Layers,
  HeartHandshake,
  Info,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { submitPickupRequest, type PickupSuccessData } from "@/actions/pickup";
import type { ActionState } from "@/lib/types";
import { BUSINESS_INFO } from "@/lib/data";

interface MyWashFormProps {
  suburbs: string[];
}

const AVAILABLE_SERVICES = [
  {
    id: "Wash, Dry & Fold",
    label: "Wash, Dry & Fold",
    description: "Everyday clothes, activewear, bundled crisp",
    icon: Shirt,
    recommended: true,
  },
  {
    id: "Steam Ironing & Pressing",
    label: "Steam Ironing & Pressing",
    description: "Work shirts, trousers, wrinkle-free garments",
    icon: Sparkles,
    recommended: false,
  },
  {
    id: "Bedding, Duvets & Blankets",
    label: "Bedding, Duvets & Blankets",
    description: "Heavy winter blankets, quilts, down duvets",
    icon: Layers,
    recommended: false,
  },
  {
    id: "Delicates & Gentle Handwash",
    label: "Delicates & Gentle Handwash",
    description: "Wool, silk, embellished fabrics, gentle cycles",
    icon: HeartHandshake,
    recommended: false,
  },
];

const INITIAL_STATE: ActionState<PickupSuccessData> = {
  success: false,
};

function SubmitPickupButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-teal px-8 py-4 text-base font-bold text-white shadow-card hover:bg-brand-teal-dark active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <span>Booking Express Van...</span>
        </>
      ) : (
        <>
          <Truck className="h-5 w-5" />
          <span>Confirm Doorstep Pickup Request</span>
        </>
      )}
    </button>
  );
}

export function MyWashForm({ suburbs }: MyWashFormProps) {
  const [state, formAction] = useActionState(submitPickupRequest, INITIAL_STATE);

  // Interactive local states for interactive pill toggles & live preview
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Wash, Dry & Fold",
  ]);
  const [selectedVolume, setSelectedVolume] = useState<string>(
    "1 Regular Basket (~5–7 kg)"
  );
  const [detergent, setDetergent] = useState<"standard" | "hypoallergenic" | "extra-softener">(
    "standard"
  );
  const [packaging, setPackaging] = useState<"folded" | "hangers" | "mixed">(
    "folded"
  );
  const [speed, setSpeed] = useState<"standard" | "express">("standard");
  const [timeSlot, setTimeSlot] = useState<"morning" | "midday" | "afternoon">(
    "morning"
  );
  const [selectedSuburb, setSelectedSuburb] = useState<string>(
    suburbs[0] ?? "Langenhovenpark"
  );

  // Tomorrow as default date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split("T")[0];
  const [pickupDate, setPickupDate] = useState<string>(defaultDateStr);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        if (prev.length === 1) return prev; // keep at least 1
        return prev.filter((s) => s !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  // SUCCESS STATE
  if (state.success && state.data) {
    const confirmation = state.data;
    return (
      <div className="rounded-3xl border border-brand-mint/50 bg-white p-8 sm:p-12 shadow-elevated text-center animate-in fade-in duration-300">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-teal text-white shadow-md">
          <CheckCircle2 className="h-10 w-10 text-brand-mint" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-brand-tealbg px-4 py-1.5 text-xs font-bold text-brand-teal uppercase tracking-wider mb-3">
          <span>Booking Ref: {confirmation.referenceNumber}</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-deep">
          Pickup Scheduled!
        </h2>

        <p className="mt-3 text-base sm:text-lg text-brand-body max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-brand-deep">{confirmation.name}</span>! Our Bloemfontein collection driver has received your booking.
        </p>

        {/* Scheduled summary card */}
        <div className="mt-8 mx-auto max-w-md rounded-2xl border border-brand-line bg-brand-ground/60 p-5 text-left text-sm space-y-2.5">
          <div className="flex justify-between items-center pb-2 border-b border-brand-line text-xs font-bold text-brand-muted uppercase">
            <span>Collection Details</span>
            <span className="text-brand-teal">Confirmed</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted">Suburb:</span>
            <span className="font-semibold text-brand-deep">{confirmation.suburb}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted">Pickup Date:</span>
            <span className="font-semibold text-brand-deep">{confirmation.pickupDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted">Time Window:</span>
            <span className="font-semibold text-brand-deep">{confirmation.timeSlot}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted">Speed:</span>
            <span className="font-semibold text-brand-purple">{confirmation.speed}</span>
          </div>
        </div>

        {/* Direct WhatsApp Confirmation Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={confirmation.whatsappConfirmationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-teal/90 transition-all hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            <span>Notify Dispatch on WhatsApp (1-Tap)</span>
          </a>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-brand-line bg-white px-5 py-3.5 text-sm font-semibold text-brand-body hover:bg-brand-lav transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Book Another Pickup</span>
          </button>
        </div>

        <p className="mt-6 text-xs text-brand-muted max-w-sm mx-auto">
          Need to modify your pickup or gate instructions? Call or WhatsApp our store directly on {BUSINESS_INFO.phone}.
        </p>
      </div>
    );
  }

  const errors = !state.success ? state.fieldErrors : undefined;
  const generalError = !state.success ? state.error : undefined;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Form Interactive Area */}
      <div className="lg:col-span-8 rounded-3xl border border-brand-line bg-white p-6 sm:p-10 shadow-sm">
        <form action={formAction} className="space-y-10">
          {generalError && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
              {generalError}
            </div>
          )}

          {/* Hidden inputs to sync component states with standard FormData */}
          <input type="hidden" name="services" value={selectedServices.join(", ")} />
          <input type="hidden" name="estimatedBags" value={selectedVolume} />
          <input type="hidden" name="detergentPreference" value={detergent} />
          <input type="hidden" name="packagingPreference" value={packaging} />
          <input type="hidden" name="speed" value={speed} />
          <input type="hidden" name="timeSlot" value={timeSlot} />

          {/* SECTION 1: SERVICES & LAUNDRY TYPES */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-purple text-xs font-bold text-white">
                1
              </span>
              <h3 className="font-display text-xl font-bold text-brand-deep">
                Select Your Wash Services
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted mb-4 ml-8.5">
              Select one or more services you would like our team to handle:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AVAILABLE_SERVICES.map((srv) => {
                const isSelected = selectedServices.includes(srv.id);
                const Icon = srv.icon;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => toggleService(srv.id)}
                    className={`flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-brand-purple bg-brand-purple/5 ring-1 ring-brand-purple/30"
                        : "border-brand-line bg-white hover:border-brand-purple/40"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isSelected
                          ? "bg-brand-purple text-white shadow-sm"
                          : "bg-brand-lav text-brand-deep"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-brand-deep">
                          {srv.label}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="h-4 w-4 text-brand-purple" />
                        )}
                      </div>
                      <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                        {srv.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
            {errors?.services && (
              <p className="mt-2 text-xs font-medium text-red-600">{errors.services[0]}</p>
            )}
          </div>

          {/* SECTION 2: VOLUME & CARE PREFERENCES */}
          <div className="border-t border-brand-line pt-8">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-purple text-xs font-bold text-white">
                2
              </span>
              <h3 className="font-display text-xl font-bold text-brand-deep">
                Volume &amp; Wash Preferences
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted mb-4 ml-8.5">
              Approximate load size and how you like your clothes treated:
            </p>

            {/* Volume selector */}
            <div className="space-y-2 mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">
                Estimated Volume
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "1 Regular Basket (~5–7 kg)",
                  "2–3 Baskets (~10–18 kg)",
                  "4+ Large Baskets (20+ kg)",
                  "Heavy Duvets & Blankets only",
                ].map((vol) => (
                  <button
                    key={vol}
                    type="button"
                    onClick={() => setSelectedVolume(vol)}
                    className={`rounded-xl border px-3.5 py-2.5 text-xs font-semibold text-left transition-all ${
                      selectedVolume === vol
                        ? "border-brand-teal bg-brand-tealbg text-brand-teal-dark font-bold ring-1 ring-brand-teal"
                        : "border-brand-line bg-white text-brand-body hover:bg-brand-ground"
                    }`}
                  >
                    {vol}
                  </button>
                ))}
              </div>
            </div>

            {/* Detergent & Packaging toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                  Detergent Preference
                </label>
                <div className="flex flex-col gap-2">
                  {[
                    { id: "standard", label: "Premium Fresh Scent" },
                    { id: "hypoallergenic", label: "Hypoallergenic (Sensitive Skin)" },
                    { id: "extra-softener", label: "Extra Fabric Softener" },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2.5 rounded-xl border min-h-[44px] py-3 px-3.5 text-xs font-medium cursor-pointer transition-colors ${
                        detergent === item.id
                          ? "border-brand-purple bg-brand-lav/40 text-brand-deep font-semibold"
                          : "border-brand-line bg-white text-brand-body hover:bg-brand-ground"
                      }`}
                    >
                      <input
                        type="radio"
                        name="detergentOpt"
                        checked={detergent === item.id}
                        onChange={() => setDetergent(item.id as typeof detergent)}
                        className="text-brand-purple focus:ring-brand-purple h-4 w-4"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                  Finish &amp; Packaging
                </label>
                <div className="flex flex-col gap-2">
                  {[
                    { id: "folded", label: "Neatly Folded in Protective Poly-Bags" },
                    { id: "hangers", label: "Hung on Wire Hangers (Ironed Items)" },
                    { id: "mixed", label: "Mixed (Shirts on Hangers, Rest Folded)" },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2.5 rounded-xl border min-h-[44px] py-3 px-3.5 text-xs font-medium cursor-pointer transition-colors ${
                        packaging === item.id
                          ? "border-brand-purple bg-brand-lav/40 text-brand-deep font-semibold"
                          : "border-brand-line bg-white text-brand-body hover:bg-brand-ground"
                      }`}
                    >
                      <input
                        type="radio"
                        name="packOpt"
                        checked={packaging === item.id}
                        onChange={() => setPackaging(item.id as typeof packaging)}
                        className="text-brand-purple focus:ring-brand-purple h-4 w-4"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Turnaround speed pill */}
            <div className="mt-6 rounded-2xl border border-brand-line bg-brand-ground/50 p-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                Turnaround Speed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpeed("standard")}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    speed === "standard"
                      ? "border-brand-purple bg-white shadow-sm ring-1 ring-brand-purple"
                      : "border-transparent bg-white/60 hover:bg-white"
                  }`}
                >
                  <p className="text-xs font-bold text-brand-deep">Standard Service</p>
                  <p className="text-[11px] text-brand-muted">24 to 48 hours &middot; Standard rates</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSpeed("express")}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    speed === "express"
                      ? "border-brand-teal bg-brand-tealbg shadow-sm ring-1 ring-brand-teal"
                      : "border-transparent bg-white/60 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-brand-teal-dark">Same-Day Express</p>
                    <span className="rounded bg-brand-teal px-1.5 py-0.5 text-[10px] font-bold text-white">
                      Fast Track
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-teal-dark/80">Collected morning, returned evening</p>
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 3: PICKUP LOGISTICS & ADDRESS */}
          <div className="border-t border-brand-line pt-8">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-purple text-xs font-bold text-white">
                3
              </span>
              <h3 className="font-display text-xl font-bold text-brand-deep">
                Collection Address &amp; Schedule
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted mb-4 ml-8.5">
              Where and when our express van should collect:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Suburb */}
              <div>
                <label htmlFor="suburb" className="block text-sm font-semibold text-brand-deep mb-1.5">
                  Bloemfontein Suburb *
                </label>
                <select
                  id="suburb"
                  name="suburb"
                  value={selectedSuburb}
                  onChange={(e) => setSelectedSuburb(e.target.value)}
                  className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                >
                  {suburbs.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                  <option value="Other Bloemfontein Suburb">Other Bloemfontein Area</option>
                </select>
                {errors?.suburb && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.suburb[0]}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="pickupDate" className="block text-sm font-semibold text-brand-deep mb-1.5">
                  Collection Date *
                </label>
                <input
                  id="pickupDate"
                  name="pickupDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                  className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                />
                {errors?.pickupDate && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.pickupDate[0]}</p>
                )}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                Preferred Time Slot *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "morning", title: "Morning", time: "08:00 – 11:00" },
                  { id: "midday", title: "Midday", time: "11:00 – 14:00" },
                  { id: "afternoon", title: "Afternoon", time: "14:00 – 17:30" },
                ].map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setTimeSlot(slot.id as typeof timeSlot)}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      timeSlot === slot.id
                        ? "border-brand-teal bg-brand-tealbg text-brand-deep ring-1 ring-brand-teal"
                        : "border-brand-line bg-white hover:border-brand-purple/30 text-brand-body"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <Clock className="h-3.5 w-3.5 text-brand-teal" />
                      <span>{slot.title}</span>
                    </div>
                    <p className="text-[11px] text-brand-muted mt-0.5">{slot.time}</p>
                  </button>
                ))}
              </div>
              {errors?.timeSlot && (
                <p className="mt-1.5 text-xs font-medium text-red-600">{errors.timeSlot[0]}</p>
              )}
            </div>

            {/* Street Address */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-semibold text-brand-deep mb-1.5">
                  Street Address &amp; House/Building Name *
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="e.g. 14 Paul Kruger Avenue, Unit 12"
                  className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                />
                {errors?.address && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.address[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="accessCode" className="block text-sm font-semibold text-brand-deep mb-1.5">
                  Gate / Intercom Code
                </label>
                <input
                  id="accessCode"
                  name="accessCode"
                  type="text"
                  placeholder="e.g. #4829 or Guardhouse"
                  className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                />
              </div>
            </div>
          </div>

          {/* SECTION 4: CONTACT INFORMATION */}
          <div className="border-t border-brand-line pt-8">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-purple text-xs font-bold text-white">
                4
              </span>
              <h3 className="font-display text-xl font-bold text-brand-deep">
                Your Contact Details
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted mb-4 ml-8.5">
              The driver will send arrival updates via WhatsApp to this number:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-deep mb-1.5">
                  Your Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Thabo Maseko"
                  className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
                />
                {errors?.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name[0]}</p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-deep mb-1.5">
                  Phone / WhatsApp Number *
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
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-brand-deep mb-1.5">
                Email Address (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="thabo@example.com"
                className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
              />
            </div>

            {/* Special Instructions */}
            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-brand-deep mb-1.5">
                Special Driver or Garment Care Instructions
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="e.g. 'Leave laundry bag on front porch if not home', 'Stain treatment on white shirts', or 'Call on arrival'."
                className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-base sm:text-sm text-brand-ink outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <SubmitPickupButton />
          </div>
        </form>
      </div>

      {/* Live Order Summary & Reassurance Column */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-4">
          {/* Dynamic Summary Card */}
          <div className="rounded-3xl border border-brand-line bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-brand-line">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-teal" />
                <h4 className="font-display text-base font-bold text-brand-deep">
                  My Wash Summary
                </h4>
              </div>
              <span className="rounded-full bg-brand-tealbg px-2.5 py-0.5 text-[10px] font-bold text-brand-teal uppercase">
                Step 1 of 1
              </span>
            </div>

            <div className="mt-4 space-y-3.5 text-xs">
              <div>
                <span className="text-brand-muted block mb-1">Selected Services:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedServices.map((srv) => (
                    <span
                      key={srv}
                      className="rounded-md bg-brand-lav px-2 py-0.5 text-[11px] font-semibold text-brand-deep"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between py-1.5 border-t border-brand-line/60">
                <span className="text-brand-muted">Volume:</span>
                <span className="font-bold text-brand-deep text-right">{selectedVolume}</span>
              </div>

              <div className="flex justify-between py-1.5 border-t border-brand-line/60">
                <span className="text-brand-muted">Suburb:</span>
                <span className="font-bold text-brand-deep">{selectedSuburb}</span>
              </div>

              <div className="flex justify-between py-1.5 border-t border-brand-line/60">
                <span className="text-brand-muted">Pickup Window:</span>
                <span className="font-bold text-brand-deep">
                  {timeSlot === "morning"
                    ? "08:00 – 11:00"
                    : timeSlot === "midday"
                    ? "11:00 – 14:00"
                    : "14:00 – 17:30"}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-t border-brand-line/60">
                <span className="text-brand-muted">Speed:</span>
                <span className="font-bold text-brand-purple">
                  {speed === "express" ? "Same-Day Express" : "Standard (24–48h)"}
                </span>
              </div>
            </div>

            {/* How Billing Works Reassurance */}
            <div className="mt-5 rounded-2xl bg-brand-tealbg/70 p-4 border border-brand-teal/20 text-xs text-brand-body leading-relaxed space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-brand-teal-dark">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>Zero Pre-Payment Required</span>
              </div>
              <p>
                Your laundry is weighed upon arrival at our Langenhovenpark hub. An itemised digital invoice is WhatsApped to you with exact weights before washing begins.
              </p>
            </div>

            {/* Quick WhatsApp Question */}
            <div className="mt-4 pt-4 border-t border-brand-line flex items-center justify-between text-xs">
              <span className="text-brand-muted">Prefer to book by voice/chat?</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-brand-teal hover:underline"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                WhatsApp us
              </a>
            </div>
          </div>

          {/* 3 Promises Badge */}
          <div className="rounded-2xl border border-brand-line/80 bg-brand-ground p-4 shadow-sm space-y-2.5">
            <div className="flex items-center gap-2 text-brand-purple text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-brand-teal" />
              <span>The Laundro-Hub Guarantee</span>
            </div>
            <ul className="text-xs text-brand-body space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal shrink-0 mt-0.5" />
                <span><strong className="text-brand-deep">Individual Drum Wash:</strong> Your garments are never combined with another household&apos;s laundry.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal shrink-0 mt-0.5" />
                <span><strong className="text-brand-deep">Free Delivery on Qualifying Loads:</strong> Enjoy free collection within service suburbs for loads over 10 kg.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal shrink-0 mt-0.5" />
                <span><strong className="text-brand-deep">Real-Time WhatsApp Tracking:</strong> Live status updates from pickup to drop-off.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
