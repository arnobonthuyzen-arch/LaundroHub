import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, MapPin, Clock, Truck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";
import { NavDropdown } from "./NavDropdown";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-brand-deep text-white text-[12px] font-medium border-b border-white/10">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-lav/80">
            <MapPin className="h-3.5 w-3.5 text-brand-mint" />
            <span>The Towers Shopping Centre, Langenhovenpark, Bloemfontein</span>
          </div>
          <div className="flex items-center gap-6 text-brand-lav/90">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-brand-mint" />
              Mon–Fri 07:00–17:30 &middot; Sat 08:00–14:00
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-brand-mint transition-colors"
            >
              <Phone className="h-3 w-3 text-brand-mint" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full border-b border-brand-line/80 bg-white/90 backdrop-blur-md shadow-[0_4px_25px_rgba(43,15,72,0.03)]">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3.5 flex-shrink-0 group py-1"
            aria-label="Laundro-Hub home"
          >
            <div className="relative h-12 w-12 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/img/logo.png"
                alt="Laundro-Hub logo"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="font-display text-2xl font-extrabold tracking-tight text-brand-plum whitespace-nowrap leading-tight">
                Laundro&#8209;Hub
              </span>
              <span className="text-[11px] font-bold text-brand-teal tracking-[0.18em] uppercase whitespace-nowrap mt-0.5">
                Bloemfontein
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Clean, Centered, Aesthetic) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-brand-ground/90 p-1.5 rounded-full border border-brand-line/80 shadow-[0_2px_8px_rgba(43,15,72,0.04)]">
            <Link
              href="/"
              className="rounded-full px-4 py-1.5 text-[14px] font-semibold text-brand-body hover:bg-brand-lav/70 hover:text-brand-deep transition-all"
            >
              Home
            </Link>

            <Link
              href="/what-we-offer"
              className="rounded-full px-4 py-1.5 text-[14px] font-semibold text-brand-body hover:bg-brand-lav/70 hover:text-brand-deep transition-all"
            >
              What We Offer
            </Link>

            {/* Who We Serve Dropdown */}
            <NavDropdown />

            <Link
              href="/about"
              className="rounded-full px-4 py-1.5 text-[14px] font-semibold text-brand-body hover:bg-brand-lav/70 hover:text-brand-deep transition-all"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="rounded-full px-4 py-1.5 text-[14px] font-semibold text-brand-body hover:bg-brand-lav/70 hover:text-brand-deep transition-all"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-brand-teal/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/my-wash"
              className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-brand-deep transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Truck className="h-3.5 w-3.5 text-brand-mint" />
              <span>My Wash</span>
            </Link>
          </div>

          {/* Mobile Navigation Toggle (Leaf Client Boundary) */}
          <MobileNav
            whatsappUrl={BUSINESS_INFO.whatsappUrl}
            phone={BUSINESS_INFO.phone}
          />
        </div>
      </div>
    </header>
  );
}
