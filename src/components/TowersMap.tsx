"use client";

import { useState } from "react";
import { MapPin, Navigation, ExternalLink, Loader2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function TowersMap() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInteractive, setIsInteractive] = useState(false);

  // Standard roadmap ('t=m') - fast vector tiles, no heavy satellite imagery
  const embedSrc =
    "https://maps.google.com/maps?q=The+Towers+Shopping+Centre,+Langenhovenpark,+Bloemfontein&t=m&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="relative w-full h-[420px] sm:h-[520px] rounded-3xl overflow-hidden border-2 border-brand-purple/20 shadow-elevated bg-slate-100">
      {/* Top Floating Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-10 flex flex-wrap items-center justify-between gap-2.5 pointer-events-none">
        {/* Location Identity Pill */}
        <div className="pointer-events-auto flex items-center gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2 border border-brand-line shadow-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple text-brand-mint shrink-0 shadow-sm">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-extrabold text-brand-deep tracking-tight">The Towers Shopping Centre</span>
              <span className="rounded-full bg-brand-teal/15 px-2 py-0.5 text-[9px] font-bold text-brand-teal uppercase tracking-wider">
                Opposite Car Wash
              </span>
            </div>
            <p className="text-[11px] text-brand-muted font-medium">Langenhovenpark, Bloemfontein</p>
          </div>
        </div>

        {/* Directions Link (Direct Google Maps Action) */}
        <div className="pointer-events-auto flex items-center gap-2">
          <a
            href={BUSINESS_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-teal hover:bg-brand-teal/90 text-white px-3.5 py-2 text-xs font-bold shadow-md transition-all hover:scale-[1.02]"
            title="Open turn-by-turn directions in Google Maps app"
          >
            <Navigation className="h-3.5 w-3.5" />
            <span>Get Directions</span>
            <ExternalLink className="h-3 w-3 opacity-80" />
          </a>
        </div>
      </div>

      {/* Loading Placeholder Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-[5] flex flex-col items-center justify-center bg-slate-100/90 backdrop-blur-xs text-brand-muted gap-2.5">
          <Loader2 className="h-7 w-7 animate-spin text-brand-purple" />
          <span className="text-xs font-semibold text-brand-deep">Loading interactive map...</span>
        </div>
      )}

      {/* Mobile Scroll Guard: requires tap to activate pan/zoom so page scrolling is not trapped */}
      {!isInteractive && (
        <button
          type="button"
          onClick={() => setIsInteractive(true)}
          className="sm:hidden absolute inset-0 z-[4] flex items-center justify-center bg-brand-deep/5 backdrop-blur-[1px] transition-all"
          aria-label="Tap to interact with map"
        >
          <span className="rounded-full bg-brand-deep/90 text-white px-4 py-2 text-xs font-bold shadow-lg border border-white/20 flex items-center gap-2">
            <Navigation className="h-3.5 w-3.5 text-brand-mint" />
            <span>Tap to pan or zoom map</span>
          </span>
        </button>
      )}

      {/* Google Maps Fast Roadmap Frame */}
      <iframe
        title="Google Map of The Towers Shopping Centre, Langenhovenpark"
        src={embedSrc}
        className={`w-full h-full border-0 ${
          isInteractive ? "pointer-events-auto" : "pointer-events-none sm:pointer-events-auto"
        }`}
        onLoad={() => setIsLoading(false)}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Decorative Bottom Info Ribbon */}
      <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
        <div className="pointer-events-auto inline-flex flex-wrap items-center gap-2 sm:gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2 border border-brand-line shadow-md text-xs text-brand-deep font-semibold">
          <span className="flex items-center gap-1.5 text-brand-purple font-bold">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Drop-off &amp; Collection Counter
          </span>
          <span className="text-brand-line">&bull;</span>
          <span className="text-brand-muted">Opposite the car wash (old Panarottis location)</span>
          <span className="text-brand-line hidden sm:inline">&bull;</span>
          <span className="text-brand-teal font-bold hidden sm:inline">Ample Free Parking</span>
        </div>
      </div>
    </div>
  );
}
