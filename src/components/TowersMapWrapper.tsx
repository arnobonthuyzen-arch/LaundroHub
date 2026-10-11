"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

// In Next.js App Router, dynamic imports with `ssr: false` are hosted inside a client component
const TowersMap = dynamic(() => import("@/components/TowersMap"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[460px] sm:h-[500px] rounded-3xl border-2 border-brand-purple/20 bg-brand-lav/40 flex flex-col items-center justify-center gap-3 animate-pulse text-brand-purple shadow-elevated">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple text-brand-mint shadow-md">
        <MapPin className="h-7 w-7 animate-bounce" />
      </div>
      <div className="text-center px-4">
        <p className="font-display font-extrabold text-base text-brand-deep">Loading The Towers Interactive Map...</p>
        <p className="text-xs text-brand-teal font-medium mt-1">Langenhovenpark, Bloemfontein &bull; Opposite the car wash</p>
      </div>
    </div>
  ),
});

export default function TowersMapWrapper() {
  return <TowersMap />;
}
