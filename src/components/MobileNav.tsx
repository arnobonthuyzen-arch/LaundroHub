"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Sparkles,
  Truck,
  GraduationCap,
  Building2,
  Trophy,
  HeartPulse,
  Heart,
  Medal,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

interface MobileNavProps {
  whatsappUrl: string;
  phone: string;
}

export function MobileNav({ whatsappUrl, phone }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(true);
  const pathname = usePathname();

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => {
    setIsOpen(false);
  };

  // Lock background scrolling when mobile navigation drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on route changes
  useEffect(() => {
    close();
  }, [pathname]);

  // Support Escape key to dismiss drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggle}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-line/80 bg-white text-brand-deep shadow-sm hover:bg-brand-lav transition-all"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[76px] z-50 bg-brand-deep/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={close}
        >
          <div
            className="flex flex-col bg-brand-ground p-6 shadow-elevated border-b border-brand-line max-w-sm ml-auto h-[calc(100dvh-76px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1.5">
              <Link
                href="/"
                onClick={close}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  pathname === "/" ? "bg-brand-lav text-brand-purple" : "text-brand-body hover:bg-brand-lav"
                }`}
              >
                Home
              </Link>

              <Link
                href="/what-we-offer"
                onClick={close}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  pathname === "/what-we-offer"
                    ? "bg-brand-lav text-brand-purple"
                    : "text-brand-body hover:bg-brand-lav"
                }`}
              >
                What We Offer
              </Link>

              {/* Collapsible Who We Serve */}
              <div>
                <button
                  type="button"
                  onClick={() => setSectorsOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold text-brand-body hover:bg-brand-lav transition-colors"
                >
                  <span>Who We Serve</span>
                  <ChevronDown
                    className={`h-4 w-4 text-brand-muted transition-transform duration-200 ${
                      sectorsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {sectorsOpen && (
                  <div className="ml-2 mt-1 space-y-0.5 border-l-2 border-brand-line pl-3 py-1">
                    <Link
                      href="/students"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <GraduationCap className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                      Students &amp; Accommodation
                    </Link>
                    <Link
                      href="/airbnb"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      Airbnb &amp; Short-Stay
                    </Link>
                    <Link
                      href="/hospitality"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <Building2 className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                      Hospitality &amp; Guesthouses
                    </Link>
                    <Link
                      href="/schools"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <Trophy className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      Schools &amp; Hostels
                    </Link>
                    <Link
                      href="/sport-events"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <Medal className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                      Sport Events &amp; Tournaments
                    </Link>
                    <Link
                      href="/healthcare"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <HeartPulse className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      Healthcare Sector
                    </Link>
                    <Link
                      href="/retirement-villages"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <Heart className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                      Retirement Villages
                    </Link>
                    <Link
                      href="/express"
                      onClick={close}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-brand-body hover:text-brand-purple hover:bg-brand-lav/70 transition-colors"
                    >
                      <Truck className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      Laundro-Hub Express (1–2 Days)
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/my-wash"
                onClick={close}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  pathname === "/my-wash"
                    ? "bg-brand-purple text-white"
                    : "bg-brand-lav/70 text-brand-purple hover:bg-brand-lav"
                }`}
              >
                <Truck className="h-4 w-4 text-brand-teal" />
                <span>My Wash (Book Pickup)</span>
              </Link>

              <Link
                href="/about"
                onClick={close}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  pathname === "/about" ? "bg-brand-lav text-brand-purple" : "text-brand-body hover:bg-brand-lav"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={close}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  pathname === "/contact" ? "bg-brand-lav text-brand-purple" : "text-brand-body hover:bg-brand-lav"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            <div className="mt-auto flex flex-col gap-2.5 pt-4 border-t border-brand-line">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-teal px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-teal/90 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>WhatsApp us</span>
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-brand-line bg-white px-4 py-2.5 text-sm font-bold text-brand-deep hover:bg-brand-lav transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
