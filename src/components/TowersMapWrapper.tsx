"use client";

import dynamic from "next/dynamic";

const TowersMap = dynamic(() => import("./TowersMap"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[420px] sm:h-[520px] rounded-3xl overflow-hidden border-2 border-brand-purple/20 shadow-elevated bg-slate-100 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 text-brand-muted">
        <span className="h-7 w-7 animate-spin rounded-full border-2 border-brand-purple border-t-transparent" />
        <span className="text-xs font-semibold text-brand-deep">Loading interactive map...</span>
      </div>
    </div>
  ),
});

export default function TowersMapWrapper() {
  return <TowersMap />;
}
