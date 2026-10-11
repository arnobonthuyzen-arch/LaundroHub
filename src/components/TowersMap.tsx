"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Navigation, Clock, ExternalLink, Layers, Globe } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

const TOWERS_COORDINATES: [number, number] = [-29.0978, 26.1434];
const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=The+Towers+Shopping+Centre,+Langenhovenpark,+Bloemfontein&t=&z=16&ie=UTF8&iwloc=&output=embed";

// Custom brand-aligned Leaflet divIcon using purple and teal brand tokens
function createTowersIcon() {
  return L.divIcon({
    className: "towers-brand-marker",
    html: `
      <div style="position:relative;display:flex;align-items:center;justify-content:center;width:52px;height:52px;">
        <span style="position:absolute;inset:-6px;border-radius:9999px;background:rgba(11,110,113,0.35);animation:ping 2s cubic-bezier(0,0,0.2,1) infinite;"></span>
        <span style="position:absolute;inset:-2px;border-radius:9999px;background:rgba(74,22,119,0.3);filter:blur(3px);"></span>
        <div style="position:relative;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:18px;background:linear-gradient(135deg,#4A1677 0%,#2B0F48 100%);color:#ffffff;box-shadow:0 12px 28px rgba(43,15,72,0.35);border:3px solid #8FE0DC;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3" fill="#8FE0DC" stroke="none"/>
          </svg>
        </div>
        <div style="position:absolute;bottom:-3px;width:10px;height:10px;background:#2B0F48;transform:rotate(45deg);border-right:2px solid #8FE0DC;border-bottom:2px solid #8FE0DC;"></div>
      </div>
    `,
    iconSize: [52, 52],
    iconAnchor: [26, 52],
    popupAnchor: [0, -50],
  });
}

export default function TowersMap() {
  const [markerIcon, setMarkerIcon] = useState<L.DivIcon | null>(null);
  const [mapMode, setMapMode] = useState<"google" | "brand">("google");

  useEffect(() => {
    setMarkerIcon(createTowersIcon());
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[520px] rounded-3xl overflow-hidden border-2 border-brand-purple/20 shadow-elevated bg-brand-ground">
      {/* Top Floating Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-[1000] flex flex-wrap items-center justify-between gap-2.5 pointer-events-none">
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

        {/* Map Engine Toggle + External Navigation Link */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Switcher: Google Map vs Brand Map */}
          <div className="inline-flex items-center rounded-xl bg-white/95 backdrop-blur-md p-1 border border-brand-line shadow-md text-xs font-bold">
            <button
              type="button"
              onClick={() => setMapMode("google")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all cursor-pointer ${
                mapMode === "google"
                  ? "bg-brand-purple text-white shadow-sm"
                  : "text-brand-deep hover:text-brand-purple hover:bg-brand-lav/50"
              }`}
              title="View on Google Maps"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Google Map</span>
            </button>
            <button
              type="button"
              onClick={() => setMapMode("brand")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all cursor-pointer ${
                mapMode === "brand"
                  ? "bg-brand-purple text-white shadow-sm"
                  : "text-brand-deep hover:text-brand-purple hover:bg-brand-lav/50"
              }`}
              title="View on Brand Vector Map"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Brand Map</span>
            </button>
          </div>

          {/* Direct Google Maps Link */}
          <a
            href={BUSINESS_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-teal hover:bg-brand-teal/90 text-white px-3 py-2 text-xs font-bold shadow-md transition-all hover:scale-[1.02]"
            title="Open directions in Google Maps app"
          >
            <Navigation className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Directions</span>
            <ExternalLink className="h-3 w-3 opacity-80" />
          </a>
        </div>
      </div>

      {/* Map Content: Google Maps Embed (Active Default) */}
      {mapMode === "google" ? (
        <div className="relative w-full h-full bg-slate-100">
          <iframe
            title="Google Map of Laundro-Hub at The Towers Shopping Centre, Langenhovenpark"
            src={GOOGLE_MAPS_EMBED_URL}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        /* Leaflet Brand Vector Map with Custom Brand Icons */
        <MapContainer
          center={TOWERS_COORDINATES}
          zoom={16}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markerIcon && (
            <Marker position={TOWERS_COORDINATES} icon={markerIcon}>
              <Popup className="towers-custom-leaflet-popup" autoPanPadding={[20, 20]}>
                <div className="p-3 text-brand-deep max-w-[260px]">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-brand-line">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple text-brand-mint font-bold text-sm shrink-0">
                      LH
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-brand-deep leading-tight">
                        Laundro-Hub
                      </h4>
                      <span className="text-[11px] font-semibold text-brand-teal">
                        The Towers Shopping Centre
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-brand-body mb-3">
                    <p className="flex items-start gap-1.5 leading-snug">
                      <MapPin className="h-3.5 w-3.5 text-brand-purple shrink-0 mt-0.5" />
                      <span>Langenhovenpark, Bloemfontein (Opposite the car wash)</span>
                    </p>
                    <p className="flex items-center gap-1.5 text-[11px] text-brand-muted">
                      <Clock className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                      <span>Mon–Fri: 07:00–18:00 &bull; Weekends: 09:00–13:00</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={BUSINESS_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-purple px-2.5 py-1.5 text-[11px] font-bold text-white hover:bg-brand-deep transition-colors text-center"
                    >
                      <Navigation className="h-3 w-3 text-brand-mint" />
                      <span>Directions</span>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=27648308785&text=Hello%20Laundro-Hub,%20I'm%20navigating%20to%20The%20Towers%20store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-brand-teal px-2.5 py-1.5 text-[11px] font-bold text-white hover:bg-brand-teal/90 transition-colors"
                      aria-label="WhatsApp The Towers store"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      )}

      {/* Decorative Bottom Info Ribbon */}
      <div className="absolute bottom-3 left-3 right-3 z-[1000] pointer-events-none">
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
