import type { PricingPlan, ServiceItem } from "./types";

export const BUSINESS_INFO = {
  name: "Laundro-Hub",
  tagline: "We care for the clothes you wear.",
  phone: "064 830 8785",
  phoneRaw: "+27648308785",
  whatsappUrl: "https://wa.me/27648308785",
  email: "info@laundro-hub.co.za",
  address: {
    name: "The Towers Shopping Centre",
    street: "Opposite the car wash — old Panarottis location",
    suburb: "Langenhovenpark",
    city: "Bloemfontein",
    province: "Free State",
    country: "South Africa",
    googleMapsUrl: "https://maps.google.com/?q=The+Towers+Shopping+Centre+Langenhovenpark+Bloemfontein",
  },
  hours: [
    { days: "Monday – Friday", times: "07:00 – 17:30" },
    { days: "Saturday", times: "08:00 – 14:00" },
    { days: "Sunday & Public Holidays", times: "Closed" },
  ],
};

const SERVICES: ServiceItem[] = [
  {
    id: "wash-dry",
    slug: "washing-drying",
    title: "Washing & Drying",
    tagline: "Everyday wash, tumble dry and neat fold.",
    description: "Drop off your daily clothes, gym gear, and casual wear. Washed with premium detergents and fabric softeners, gently dried and folded crisp.",
    priceStartingAt: "Per kg pricing",
    features: [
      "Colour-sorted cycles",
      "Hypoallergenic detergents available",
      "Gentle tumble drying",
      "Neatly folded and bundled",
      "Same-day collection available",
    ],
    icon: "/icons/washer.svg",
    image: "/img/washing.jpg",
    href: "/services/washing-drying",
  },
  {
    id: "ironing",
    slug: "ironing",
    title: "Ironing & Pressing",
    tagline: "Steam pressing and crisp hanger finishes.",
    description: "Professional steam ironing for office shirts, trousers, dresses, and school uniforms. Wrinkle-free perfection ready for the wardrobe.",
    priceStartingAt: "Per garment / per kg",
    features: [
      "Industrial steam irons",
      "Hanger or flat-fold delivery",
      "Collar and cuff precision",
      "Delicate fabrics handled with care",
      "Fast 24-hour turnaround",
    ],
    icon: "/icons/iron.svg",
    image: "/img/ironing.jpg",
    href: "/services/ironing",
  },
  {
    id: "bedding",
    slug: "bedding-linen",
    title: "Bedding & Linen",
    tagline: "Duvets, blankets, sheets and heavy curtains.",
    description: "Commercial-grade capacity for large duvets, heavy winter blankets, hospitality sheets, and pillow covers. Deep sanitised freshness.",
    priceStartingAt: "Flat fee per item size",
    features: [
      "King, Queen, Double & Single duvets",
      "Feather and down specialised washing",
      "Thorough deep moisture extraction",
      "Anti-bacterial rinse cycle",
      "Shrink-wrapped for storage",
    ],
    icon: "/icons/bed.svg",
    image: "/img/bedding.jpg",
    href: "/services/bedding-linen",
  },
  {
    id: "express",
    slug: "collection-delivery",
    title: "Drop-Off & Collection",
    tagline: "Laundro-Hub Express van to your doorstep.",
    description: "Busy schedule? We collect your bags from your home, office, or guesthouse and return them fresh, clean, and neatly bundled.",
    priceStartingAt: "Free on qualifying orders",
    features: [
      "Regular scheduled route pickups",
      "Langenhovenpark & Woodland Hills daily",
      "WhatsApp status updates",
      "Contactless handoff option",
      "Flexible collection times",
    ],
    icon: "/icons/truck.svg",
    image: "/img/collection.jpg",
    href: "/services/collection-delivery",
  },
  {
    id: "packages",
    slug: "monthly-packages",
    title: "Monthly Packages",
    tagline: "Predictable, hassle-free laundry plans.",
    description: "Save up to 25% with subscription laundry bundles for students, busy professionals, and families. Weekly pickups included.",
    priceStartingAt: "Discounted bundle rates",
    features: [
      "Fixed monthly kg allowance",
      "Free priority collection & delivery",
      "Rollover unused kilograms",
      "Dedicated laundry bag included",
      "No long-term contracts",
    ],
    icon: "/icons/calendar.svg",
    image: "/img/packages.jpg",
    href: "/services/monthly-packages",
  },
];

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "student-single",
    name: "Student / Single",
    weightLimit: "20 kg / month",
    pricePerMonth: "R 599 / mo",
    description: "Ideal for students and single professionals who want weekend laundry taken off their plate.",
    features: [
      "Up to 20 kg wash, dry & fold",
      "2 collections & deliveries per month",
      "Same-day turnaround priority",
      "Free branded laundry bag",
    ],
  },
  {
    id: "couple",
    name: "Couple / Duo",
    weightLimit: "40 kg / month",
    pricePerMonth: "R 999 / mo",
    popular: true,
    description: "The most popular plan for two adults with regular work and active lifestyle loads.",
    features: [
      "Up to 40 kg wash, dry & fold",
      "4 collections (weekly) per month",
      "Light steam pressing included for 10 items",
      "Priority customer WhatsApp channel",
    ],
  },
  {
    id: "family",
    name: "Family Plus",
    weightLimit: "75 kg / month",
    pricePerMonth: "R 1,699 / mo",
    description: "Full household coverage for school uniforms, everyday clothes, and sports kits.",
    features: [
      "Up to 75 kg wash, dry & fold",
      "Weekly scheduled doorstep pickup",
      "Includes 2 large duvets / blankets per month",
      "Free stain pre-treatment",
      "Rollover up to 10 kg unused allowance",
    ],
  },
];

const SUBURBS = [
  "Langenhovenpark",
  "Woodland Hills Wildlife Estate",
  "Universitas",
  "Brandwag",
  "Westdene",
  "Dan Pienaar",
  "Pentagon Park",
  "Bayswater",
  "Waverley",
  "Fichardtpark",
];

// Direct Server Fetching Services (React Server Component Data Layer)
export async function getServices(): Promise<ServiceItem[]> {
  // In future: direct database or cache access
  return Promise.resolve(SERVICES);
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | null> {
  const service = SERVICES.find((s) => s.slug === slug);
  return Promise.resolve(service ?? null);
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  return Promise.resolve(PRICING_PLANS);
}

export async function getSuburbs(): Promise<string[]> {
  return Promise.resolve(SUBURBS);
}
