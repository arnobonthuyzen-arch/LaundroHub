import { BUSINESS_INFO, OFFICIAL_PRICE_LIST, PRICING_POLICY, getServices } from "@/lib/data";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://laundro-hub.co.za";
  const services = await getServices();

  const priceSummary = OFFICIAL_PRICE_LIST.map(
    (item) => `- ${item.name}: ${item.formattedPrice} (${item.unit})`
  ).join("\n");

  const serviceLinks = services
    .map((s) => `- [${s.title}](${baseUrl}/services/${s.slug}): ${s.tagline}`)
    .join("\n");

  const markdown = `# ${BUSINESS_INFO.name}

> ${BUSINESS_INFO.tagline} Commercial and residential laundry, steam ironing, duvet cleaning, and doorstep collection & delivery across Bloemfontein, Free State, South Africa.

## Business Overview
- **Main Hub:** ${BUSINESS_INFO.address.name}, ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.suburb}, ${BUSINESS_INFO.address.city}
- **Secondary Drop-Off:** Bains Lodge Drop-Off Point, Main entrance, directly opposite security, Bloemfontein
- **Phone / WhatsApp:** ${BUSINESS_INFO.centralNumbers}
- **Email:** ${BUSINESS_INFO.email}
- **Service Area:** ${BUSINESS_INFO.serviceArea}
- **Booking & Scheduling:** ${BUSINESS_INFO.schedulingPolicy}
- **Payment Policy:** ${PRICING_POLICY.paymentPolicyNotice} ${PRICING_POLICY.vatStatus} ${PRICING_POLICY.minimumOrder}

## Core Pages & Pricing
- [Home](${baseUrl}): Overview of Laundro-Hub laundry, ironing, bedding care, and doorstep Express pickup in Bloemfontein.
- [What We Offer & Official Price List](${baseUrl}/what-we-offer): Complete per-kg and per-item tariffs effective ${PRICING_POLICY.effectiveDate}, monthly plans, and payment policies.
- [Laundro-Hub Express](${baseUrl}/express): 1–2 day doorstep collection and delivery across Langenhovenpark, Universitas, Westdene, Brandwag, Dan Pienaar, Fichardtpark, and Woodland Hills.
- [My Wash (Book Pickup)](${baseUrl}/my-wash): Interactive wash calculator and doorstep Express pickup booking form.
- [About Laundro-Hub](${baseUrl}/about): Our story, commercial hygiene standards, and individual-drum washing commitment in Bloemfontein.
- [Contact & Drop-Off Points](${baseUrl}/contact): Store addresses, opening hours, Google Maps links, and direct WhatsApp/phone contact.

## Core Services
${serviceLinks}

## Dedicated Sector Solutions
- [Student Laundry & Residence Packages](${baseUrl}/students): Monthly student & res laundry plans and walk-in rates for UFS, CUT, and Universitas/Brandwag communes.
- [School Uniforms, Sports Kits & Boarding Hostels](${baseUrl}/schools): Heavy mud stain removal for rugby/hockey kits, blazer pressing, and weekly boarding hostel runs.
- [Airbnb & Short-Stay Linen](${baseUrl}/airbnb): Same-day and next-day turnaround for Airbnb Superhosts, holiday rentals, and turnover linen.
- [Hospitality, Guesthouses & B&Bs](${baseUrl}/hospitality): Commercial linen, towel, and dining room laundry with scheduled van routes.
- [Retirement Villages & Frail Care](${baseUrl}/retirement-villages): Gentle cycles, individual name-tagging, and dignified weekly pickup for senior residences.
- [Healthcare & Clinic Laundry](${baseUrl}/healthcare): High-temperature sanitisation for medical scrubs, doctor coats, and examination room linen.

## Official Price List (Effective ${PRICING_POLICY.effectiveDate})
${priceSummary}
`;

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
