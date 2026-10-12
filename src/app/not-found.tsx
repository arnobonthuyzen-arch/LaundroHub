import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <span className="text-sm font-bold uppercase tracking-wider text-brand-teal">
        404 — Page Not Found
      </span>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
        This laundry load went missing.
      </h1>
      <p className="mt-4 max-w-lg text-base text-brand-body">
        The page you are looking for doesn’t exist or might have been moved. Let’s get you back on track.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-5 py-2.5 min-h-[44px] text-sm font-bold text-white shadow-sm hover:bg-brand-deep active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/what-we-offer"
          className="inline-flex items-center gap-2 rounded-xl border border-brand-line bg-white px-5 py-2.5 min-h-[44px] text-sm font-semibold text-brand-body hover:bg-brand-lav active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
        >
          <Sparkles className="h-4 w-4 text-brand-teal" />
          View All Services
        </Link>
      </div>
    </div>
  );
}
