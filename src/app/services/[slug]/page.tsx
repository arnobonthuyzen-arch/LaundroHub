import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Shield, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getServices, getServiceBySlug, BUSINESS_INFO } from "@/lib/data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Laundro-Hub Bloemfontein`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Laundro-Hub Bloemfontein`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Header with brand purple gradient */}
      <section className="relative overflow-hidden hero-purple-gradient border-b border-brand-line/70 py-12 sm:py-16">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-brand-muted">
            <Link href="/" className="hover:text-brand-purple transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-purple transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="font-semibold text-brand-deep">{service.title}</span>
          </nav>

          {/* Hero Section for Service */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <span className="rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple">
                {service.tagline}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep tracking-tight">
                {service.title}
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-brand-body/90 leading-relaxed font-normal">
                {service.description}
              </p>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-brand-teal/90 transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  Book via WhatsApp
                </a>
                <Link
                  href="/my-wash"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-brand-deep transition-all"
                >
                  Book Pickup (My Wash)
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-line bg-white px-5 py-3.5 text-sm font-semibold text-brand-body hover:bg-brand-lav transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line shadow-elevated">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Key benefits list */}
          <div className="w-full rounded-2xl border border-brand-line bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-deep font-sans mb-4">
              What&apos;s Included &amp; Guarantees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {service.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-sm text-brand-body">
                  <CheckCircle2 className="h-4 w-4 text-brand-teal flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Pillars */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-brand-line pt-12">
            <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-brand-lav text-brand-purple flex items-center justify-center mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-deep">Separate Hygiene Wash</h3>
              <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                Your garments are never mixed with anyone else&apos;s laundry. Dedicated machines and individual detergent cycles.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-brand-lav text-brand-purple flex items-center justify-center mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-deep">Prompt Turnaround</h3>
              <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                Drop off in the morning and pick up crisp, fresh bundles the same afternoon or next morning.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-brand-lav text-brand-purple flex items-center justify-center mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-deep">Gentle Fabric Care</h3>
              <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                Premium fabric softeners and temperature-controlled drying prevent garment shrinkage and preserve colors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
