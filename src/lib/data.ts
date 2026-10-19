import type { PricingPlan, ServiceItem, PriceListItem, PricingPolicy } from "./types";

export const BUSINESS_INFO = {
  name: "Laundro-Hub",
  tagline: "We care for the clothes you wear.",
  phone: "064 830 8785",
  phoneRaw: "+27648308785",
  officePhone: "060 982 0494",
  officePhoneRaw: "+27609820494",
  officePhoneLabel: "Maritza (Office)",
  whatsappUrl: "https://api.whatsapp.com/send?phone=27648308785&text=Hello%20Laundro-Hub,%20I'd%20like%20to%20inquire%20about%20your%20laundry%20services",
  officeWhatsappUrl: "https://api.whatsapp.com/send?phone=27609820494&text=Hello%20Laundro-Hub,%20I'd%20like%20to%20inquire%20about%20your%20laundry%20services",
  email: "info@laundro-hub.co.za",
  vatStatus: "Laundro Hub is not VAT registered (all prices are net, no VAT added).",
  isVatRegistered: false,
  minimumOrder: "No minimum order amount applies.",
  paymentMethods: "EFT or Card payments only (Strictly NO CASH).",
  paymentPolicy: "Card Speedpoint tap or instant EFT only. For security reasons, strictly NO CASH is handled on premises or by drivers.",
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
    { days: "Monday – Friday", times: "07:00 – 18:00" },
    { days: "Saturday", times: "09:00 – 13:00" },
    { days: "Sunday", times: "09:00 – 13:00" },
  ],
};

export const PRICING_POLICY: PricingPolicy = {
  effectiveDate: "1 September 2026",
  vatStatus: "Laundro Hub is not VAT registered (all prices are net, no VAT added).",
  isVatRegistered: false,
  minimumOrder: "No minimum order amount applies.",
  paymentMethods: ["Card (Speedpoint Tap / Insert)", "Instant EFT"],
  strictlyNoCash: true,
  paymentPolicyNotice: "EFT or Card payments only — Strictly NO CASH accepted.",
};

export const OFFICIAL_PRICE_LIST: PriceListItem[] = [
  // Everyday Laundry & Ironing
  {
    id: "wash-dry-iron",
    name: "Wash / Dry / Iron",
    price: 43,
    unit: "per kg",
    formattedPrice: "R43 / kg",
    category: "everyday",
    badge: "Full Care",
    note: "Washed, tumble dried, and professionally steam ironed",
  },
  {
    id: "wash-dry-fold",
    name: "Wash / Dry / Fold",
    price: 40,
    unit: "per kg",
    formattedPrice: "R40 / kg",
    category: "everyday",
    badge: "Most Popular",
    note: "Washed, tumble dried, and crisply folded into bundles",
  },
  {
    id: "iron-only",
    name: "Iron ONLY",
    price: 40,
    unit: "per kg",
    formattedPrice: "R40 / kg",
    category: "everyday",
    note: "Professional steam pressing for shirts, trousers & garments",
  },
  {
    id: "dry-fold",
    name: "Dry / Fold",
    price: 38,
    unit: "per kg",
    formattedPrice: "R38 / kg",
    category: "everyday",
    note: "Tumble dry and neat folding",
  },
  {
    id: "hand-wash",
    name: "Hand-Wash (on request)",
    price: 42,
    unit: "per kg",
    formattedPrice: "R42 / kg",
    category: "everyday",
    badge: "Gentle Care",
    note: "Delicate fabrics, woollens, and fine garments",
  },
  {
    id: "tumble-dry-only",
    name: "Tumble Dry ONLY",
    price: 38,
    unit: "per kg",
    formattedPrice: "R38 / kg",
    category: "everyday",
    note: "High-capacity moisture-controlled drying",
  },
  {
    id: "wash-only",
    name: "Wash ONLY",
    price: 36,
    unit: "per kg",
    formattedPrice: "R36 / kg",
    category: "everyday",
    note: "Commercial wash cycle with premium detergent",
  },

  // Bedding & Linen
  {
    id: "duvet-queen-king-flat",
    name: "Duvet (Queen & King)",
    price: 150,
    unit: "each",
    formattedPrice: "R150 each",
    category: "bedding",
    badge: "Flat Rate",
    note: "Dedicated high-capacity industrial drum wash & deep thermal dry",
  },
  {
    id: "duvets-quilts-bedspreads",
    name: "Duvets / Quilts / Bedspreads",
    price: 100,
    unit: "per kg",
    formattedPrice: "R100 / kg",
    category: "bedding",
    note: "Single / 3/4 duvets, quilted bedspreads & comforters",
  },
  {
    id: "blankets-queen-king",
    name: "Blankets (Queen & King)",
    price: 95,
    unit: "per kg",
    formattedPrice: "R95 / kg",
    category: "bedding",
    note: "Heavy large winter blankets & thick throws",
  },
  {
    id: "blankets-single-double",
    name: "Blankets (Single & Double)",
    price: 75,
    unit: "per kg",
    formattedPrice: "R75 / kg",
    category: "bedding",
    note: "Standard size winter blankets & fleece throws",
  },
  {
    id: "linen-sheets",
    name: "Linen – Sheets / Fitted sheets / Flats",
    price: 60,
    unit: "per kg",
    formattedPrice: "R60 / kg",
    category: "bedding",
    note: "Fitted sheets, flat sheets, pillowcases & hospitality linen",
  },
  {
    id: "cushions-pillows",
    name: "Cushions / Pillows",
    price: 43,
    unit: "per kg",
    formattedPrice: "R43 / kg",
    category: "bedding",
    note: "Bed pillows, scatter cushions & cushion inners",
  },

  // Speciality & Footwear
  {
    id: "tekkies-sneakers",
    name: '"Tekkies" / Sneakers',
    price: 60,
    unit: "per pair",
    formattedPrice: "R60 / pair",
    category: "speciality",
    badge: "Footwear Revive",
    note: "Careful hand scrub, deodorisation & safe air-dry finish",
  },
  {
    id: "curtains-washable",
    name: "Curtains (if washable)",
    price: 120,
    unit: "per kg",
    formattedPrice: "R120 / kg",
    category: "speciality",
    note: "Subject to fabric care label inspection",
  },

  // Transport & Delivery
  {
    id: "transport-lhp",
    name: "Langenhovenpark Express Van",
    price: 35,
    unit: "per trip",
    formattedPrice: "R35 / trip",
    category: "transport",
    note: "R35 pickup, R35 drop-off (R70 round-trip). No minimum order required.",
  },
  {
    id: "transport-bloem",
    name: "Greater Bloemfontein Express Van",
    price: 65,
    unit: "per trip",
    formattedPrice: "R65 / trip",
    category: "transport",
    note: "R65 pickup, R65 drop-off (R130 round-trip). No minimum order required.",
  },
];

const SERVICES: ServiceItem[] = [
  {
    id: "wash-dry",
    slug: "washing-drying",
    title: "Washing & Drying",
    tagline: "Everyday wash, tumble dry and neat fold.",
    description: "Drop off your daily clothes, gym gear, and casual wear. Washed with premium detergents and fabric softeners, gently dried and folded crisp.",
    priceStartingAt: "From R40 / kg",
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
    priceStartingAt: "From R40 / kg",
    features: [
      "Industrial steam irons",
      "Hanger or flat-fold delivery",
      "Collar and cuff precision",
      "Delicate fabrics handled with care",
      "Fast 24-hour turnaround",
    ],
    icon: "/icons/iron.svg",
    image: "/img/steam-pressing.jpg",
    href: "/services/ironing",
  },
  {
    id: "bedding",
    slug: "bedding-linen",
    title: "Bedding & Linen",
    tagline: "Duvets, blankets, sheets and heavy curtains.",
    description: "Commercial-grade capacity for large duvets, heavy winter blankets, hospitality sheets, and pillow covers. Deep sanitised freshness.",
    priceStartingAt: "From R60 / kg (Duvets R150 each)",
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
    priceStartingAt: "From R35 per trip",
    features: [
      "R35 Pickup / R35 Drop-off in Langenhovenpark",
      "R65 Pickup / R65 Drop-off Greater Bloemfontein",
      "Choose collection only, delivery only, or both",
      "WhatsApp driver tracking & status updates",
      "Flexible morning, midday & afternoon windows",
    ],
    icon: "/icons/truck.svg",
    image: "/img/express-delivery.jpg",
    href: "/services/collection-delivery",
  },
  {
    id: "hostels",
    slug: "school-hostels",
    title: "School Hostels & Student Living",
    tagline: "Dedicated bulk laundry for school boarding houses & student communes.",
    description: "Reliable bulk laundry collections for school boarding hostels, university residences, and student accommodation across Bloemfontein. Tagged laundry bags, uniform pressing, sports kits, and bulk bedding.",
    priceStartingAt: "Tailored hostel & student rates",
    features: [
      "Weekly scheduled batch collections",
      "Individually tagged student laundry bags",
      "School uniform washing & crisp steam pressing",
      "Sports team kits and mud stain removal",
      "Consolidated school billing or parent EFT",
    ],
    icon: "/icons/calendar.svg",
    image: "/img/hostel.jpg",
    href: "/services/school-hostels",
  },
];

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "school-hostel",
    name: "School Boarding Hostel",
    weightLimit: "Per learner / term batches",
    pricePerMonth: "Custom hostel rates",
    popular: true,
    description: "Turnkey weekly laundry solution for primary and high school boarding houses across Bloemfontein.",
    features: [
      "Dedicated weekly batch collection & delivery",
      "Individual tagged student bags (no mixed loads)",
      "Uniform washing & precision steam pressing",
      "Sports kits & heavy mud stain pre-treatment",
      "Consolidated term invoice or parent billing",
    ],
  },
  {
    id: "school-sports",
    name: "School Sports & Tournaments",
    weightLimit: "Per tournament / fixture",
    pricePerMonth: "Custom tournament rates",
    description: "Rapid turnaround service for school sports derbies, visiting tournament teams, and training clinics.",
    features: [
      "High-capacity overnight / daily tournament turnaround",
      "Heavy-duty grass & Free State red mud wash",
      "Full match day jerseys, bibs & tracksuits",
      "Returned sorted, packed & ready for next game",
      "Express collection from sports pavilions & fields",
    ],
  },
  {
    id: "student-res",
    name: "University Res & Communes",
    weightLimit: "Doorstep res pickup",
    pricePerMonth: "Affordable student rates",
    description: "Designed for university and college students, residence houses, and shared student communes.",
    features: [
      "Pickups at residence gate or commune address",
      "Wash, dry & fold within 24–48 hours",
      "Bedding, duvet inners & blankets handled",
      "Discounted rates for group & roommate bookings",
      "Direct WhatsApp booking & status updates",
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
  const service = SERVICES.find(
    (s) => s.slug === slug || (slug === "monthly-packages" && s.slug === "school-hostels")
  );
  return Promise.resolve(service ?? null);
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  return Promise.resolve(PRICING_PLANS);
}

export async function getOfficialPriceList(): Promise<PriceListItem[]> {
  return Promise.resolve(OFFICIAL_PRICE_LIST);
}

export async function getPricingPolicy(): Promise<PricingPolicy> {
  return Promise.resolve(PRICING_POLICY);
}

export async function getSuburbs(): Promise<string[]> {
  return Promise.resolve(SUBURBS);
}

export type LogisticsOptionType = "both" | "pickup" | "dropoff";

export interface LogisticsRate {
  pickup: number;
  dropoff: number;
  both: number;
  areaLabel: string;
}

export const COLLECTION_DELIVERY_PRICING: Record<"langenhovenpark" | "otherBloemfontein", LogisticsRate> = {
  langenhovenpark: {
    areaLabel: "Langenhovenpark",
    pickup: 35,
    dropoff: 35,
    both: 70,
  },
  otherBloemfontein: {
    areaLabel: "Everywhere else in Bloemfontein",
    pickup: 65,
    dropoff: 65,
    both: 130,
  },
};

export function getLogisticsFee(suburb: string, option: LogisticsOptionType): number {
  const isLhp = suburb.toLowerCase().includes("langenhoven");
  const rates = isLhp
    ? COLLECTION_DELIVERY_PRICING.langenhovenpark
    : COLLECTION_DELIVERY_PRICING.otherBloemfontein;

  if (option === "both") return rates.both;
  if (option === "pickup") return rates.pickup;
  return rates.dropoff;
}
