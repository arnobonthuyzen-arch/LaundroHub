import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-brand-line bg-brand-foot text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/img/logo.png"
                  alt="Laundro-Hub logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-display text-2xl font-extrabold tracking-tight text-white whitespace-nowrap leading-tight">
                  Laundro&#8209;Hub
                </span>
                <span className="text-[11px] font-bold text-brand-mint tracking-[0.18em] uppercase whitespace-nowrap mt-0.5">
                  Bloemfontein
                </span>
              </div>
            </div>
            <p className="text-sm text-brand-lav/80 leading-relaxed">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo; Premium laundry, dry cleaning, steam ironing, and express collection across Bloemfontein.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-teal/90 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                WhatsApp us on {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* What We Offer */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-mint font-sans">
              What We Offer
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-brand-lav/80">
              <li>
                <Link href="/what-we-offer#washing-drying" className="hover:text-white transition-colors">
                  Washing &amp; Drying
                </Link>
              </li>
              <li>
                <Link href="/what-we-offer#ironing-pressing" className="hover:text-white transition-colors">
                  Ironing &amp; Steam Pressing
                </Link>
              </li>
              <li>
                <Link href="/what-we-offer#bedding-linen" className="hover:text-white transition-colors">
                  Bedding &amp; Bulky Linen
                </Link>
              </li>
              <li>
                <Link href="/express" className="hover:text-white transition-colors">
                  Laundro-Hub Express (1–2 Days)
                </Link>
              </li>
              <li>
                <Link href="/my-wash" className="hover:text-brand-mint text-brand-mint font-semibold transition-colors flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5" />
                  <span>My Wash (Book Pickup)</span>
                </Link>
              </li>
              <li>
                <Link href="/what-we-offer" className="hover:text-white font-medium transition-colors">
                  All Services &amp; Pricing &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-mint font-sans">
              Who We Serve
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-brand-lav/80">
              <li>
                <Link href="/students" className="hover:text-white transition-colors">
                  Students &amp; Residences (UFS/CUT)
                </Link>
              </li>
              <li>
                <Link href="/airbnb" className="hover:text-white transition-colors">
                  Airbnb &amp; Short-Stay Hosts
                </Link>
              </li>
              <li>
                <Link href="/hospitality" className="hover:text-white transition-colors">
                  Hospitality, B&amp;Bs &amp; Hotels
                </Link>
              </li>
              <li>
                <Link href="/schools" className="hover:text-white transition-colors">
                  Schools &amp; Boarding Hostels
                </Link>
              </li>
              <li>
                <Link href="/sport-events" className="hover:text-white transition-colors">
                  Sport Events &amp; Tournaments
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="hover:text-white transition-colors">
                  Healthcare &amp; Clinic Practices
                </Link>
              </li>
              <li>
                <Link href="/retirement-villages" className="hover:text-white transition-colors">
                  Retirement Villages &amp; Frail Care
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-mint text-xs font-semibold transition-colors">
                  Commercial Accounts &amp; Quote &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-mint font-sans">
              Store &amp; Hours
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-brand-lav/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-mint flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">{BUSINESS_INFO.address.name}</p>
                  <p className="text-xs text-brand-lav/70">{BUSINESS_INFO.address.street}</p>
                  <p className="text-xs text-brand-lav/70">
                    {BUSINESS_INFO.address.suburb}, {BUSINESS_INFO.address.city}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1">
                {BUSINESS_INFO.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-xs text-brand-lav/70">
                    <span>{h.days}</span>
                    <span className="font-mono text-white/90">{h.times}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-mint hover:underline"
                >
                  <span>Directions &amp; Contact Us</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-xs text-brand-lav/60 sm:flex-row">
          <span>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">Part of Cleaning Professionals &middot; Bloemfontein</span>
        </div>
      </div>
    </footer>
  );
}
