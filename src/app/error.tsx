"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors to reporting service
    console.error("Application Error caught by error boundary:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
        <AlertCircle className="h-8 w-8" />
      </div>

      <h1 className="font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-base text-brand-body">
        We encountered an unexpected error while loading this page. Our team has been notified.
      </p>

      {error.digest && (
        <span className="mt-2 text-xs font-mono text-brand-muted">
          Error ID: {error.digest}
        </span>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-deep transition-all"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-brand-line bg-white px-5 py-2.5 text-sm font-semibold text-brand-body hover:bg-brand-lav transition-all"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
