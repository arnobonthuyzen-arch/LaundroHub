import Link from "next/link";
import { Truck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { BUSINESS_INFO } from "@/lib/data";

export function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-brand-line/90 bg-white/95 backdrop-blur-md px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(43,15,72,0.08)]"
    >
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-brand-teal text-white h-11 px-3 text-xs font-bold shadow-sm active:scale-[0.98] hover:bg-brand-teal/90 transition-all"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/my-wash"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-brand-purple text-white h-11 px-3 text-xs font-bold shadow-sm active:scale-[0.98] hover:bg-brand-deep transition-all"
        >
          <Truck className="h-4 w-4 text-brand-mint shrink-0" />
          <span>My Wash Pickup</span>
        </Link>
      </div>
    </aside>
  );
}
