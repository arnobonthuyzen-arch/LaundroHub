"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  GraduationCap,
  Sparkles,
  Building2,
  Trophy,
  Truck,
  ArrowRight,
  HeartPulse,
  Heart,
  Medal,
  LucideIcon,
} from "lucide-react";

interface SectorMenuItem {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  colorClass: string;
  badge?: string;
}

const SECTOR_ITEMS: SectorMenuItem[] = [
  {
    title: "Students & Residences",
    subtitle: "Monthly kg bundles & res runs (UFS/CUT)",
    href: "/students",
    icon: GraduationCap,
    colorClass: "bg-brand-lav text-brand-purple",
    badge: "Packages",
  },
  {
    title: "Airbnb Hosts",
    subtitle: "Fast turnover linens, crisp bedding & towels",
    href: "/airbnb",
    icon: Sparkles,
    colorClass: "bg-brand-tealbg text-brand-teal",
    badge: "Turnover",
  },
  {
    title: "Hotels & Guesthouses",
    subtitle: "Commercial batch laundry & table linen",
    href: "/hospitality",
    icon: Building2,
    colorClass: "bg-brand-lav text-brand-purple",
    badge: "Commercial",
  },
  {
    title: "Schools & Hostels",
    subtitle: "Team sports kits, blazer pressing & bags",
    href: "/schools",
    icon: Trophy,
    colorClass: "bg-brand-tealbg text-brand-teal",
  },
  {
    title: "Sport Events & Teams",
    subtitle: "Overnight match kit runs & mud removal",
    href: "/sport-events",
    icon: Medal,
    colorClass: "bg-brand-tealbg text-brand-teal",
    badge: "Match Day",
  },
  {
    title: "Healthcare Sector",
    subtitle: "Disinfected scrubs, lab coats & clinic linen",
    href: "/healthcare",
    icon: HeartPulse,
    colorClass: "bg-brand-lav text-brand-purple",
    badge: "Hygiene",
  },
  {
    title: "Retirement Villages",
    subtitle: "Gentle senior wash & frail care bedding",
    href: "/retirement-villages",
    icon: Heart,
    colorClass: "bg-brand-tealbg text-brand-teal",
    badge: "Care",
  },
  {
    title: "Laundro-Hub Express",
    subtitle: "Doorstep van collection & delivery in 1–2 days",
    href: "/express",
    icon: Truck,
    colorClass: "bg-brand-lav text-brand-purple",
    badge: "1–2 Days",
  },
];

export function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isSectorActive =
    pathname.startsWith("/students") ||
    pathname.startsWith("/airbnb") ||
    pathname.startsWith("/hospitality") ||
    pathname.startsWith("/schools") ||
    pathname.startsWith("/sport-events") ||
    pathname.startsWith("/healthcare") ||
    pathname.startsWith("/retirement-villages") ||
    pathname.startsWith("/express");

  // Keep dropdown open during mouse hover with generous leave grace period
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 280);
  }, []);

  // Toggle on click
  const handleToggleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Keyboard navigation support (Escape to close)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown on route changes automatically
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 80);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Primary Trigger Button */}
      <button
        type="button"
        onClick={handleToggleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Who We Serve menu"
        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[14px] font-semibold tracking-tight transition-all duration-150 cursor-pointer ${
          isOpen || isSectorActive
            ? "bg-brand-lav text-brand-purple shadow-sm ring-1 ring-brand-purple/20"
            : "text-brand-body hover:bg-brand-lav/70 hover:text-brand-deep"
        }`}
      >
        <span>Who We Serve</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-brand-muted transition-transform duration-200 ${
            isOpen ? "rotate-180 text-brand-purple" : ""
          }`}
        />
      </button>

      {/* Dropdown Container */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-full z-[100] pt-2 w-[560px] animate-in fade-in slide-in-from-top-1.5 duration-150">
          <div className="overflow-hidden rounded-2xl border border-brand-line bg-white p-3 shadow-[0_20px_50px_rgba(43,15,72,0.22)]">
            {/* Top link to all offerings */}
            <div className="px-2 py-1.5 mb-1.5 border-b border-brand-line/60 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Industries &amp; Audiences We Assist
              </span>
              <Link
                href="/what-we-offer"
                onClick={handleLinkClick}
                className="text-[11px] font-bold text-brand-purple hover:underline"
              >
                What We Offer &rarr;
              </Link>
            </div>

            {/* Sector Items 2-Column Grid */}
            <div className="grid grid-cols-2 gap-1.5">
              {SECTOR_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`group flex items-start gap-2.5 rounded-xl p-2.5 transition-all duration-150 ${
                      isActive
                        ? "bg-brand-lav text-brand-purple font-semibold"
                        : "hover:bg-brand-lav/60"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg mt-0.5 transition-transform duration-150 group-hover:scale-105 ${item.colorClass}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[12.5px] font-bold text-brand-deep group-hover:text-brand-purple transition-colors truncate">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[10.5px] text-brand-muted line-clamp-1 leading-tight mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Link to What We Offer */}
            <div className="mt-2.5 border-t border-brand-line/80 pt-2">
              <Link
                href="/what-we-offer"
                onClick={handleLinkClick}
                className="flex items-center justify-between rounded-xl bg-brand-deep px-3.5 py-2.5 text-xs font-bold text-white transition-all hover:bg-brand-plum"
              >
                <span>Looking for standard services? View What We Offer</span>
                <span className="inline-flex items-center gap-1 text-brand-mint text-[11px]">
                  Explore all <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
