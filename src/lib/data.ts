import type { PricingPlan, ServiceItem, PriceListItem, PricingPolicy, StoreLocation } from "./types";

export const BUSINESS_INFO = {
  name: "Laundro-Hub",
  tagline: "We care for the clothes you wear.",
  phone: "(064) 830-8785",
  phoneRaw: "+27648308785",
  phoneSecondary: "(064) 830-8785",
  phoneSecondaryRaw: "+27648308785",
  secondaryPhone: "(064) 830-8785",
  secondaryPhoneRaw: "+27648308785",
  centralNumbers: "(064) 830-8785",
  whatsappUrl: "https://api.whatsapp.com/send?phone=27648308785&text=Hello%20Laundro-Hub,%20I'd%20like%20to%20arrange%20laundry%20collection%20and%20return",
  whatsappSecondaryUrl: "https://api.whatsapp.com/send?phone=27648308785&text=Hello%20Laundro-Hub,%20I'd%20like%20to%20arrange%20laundry%20collection%20and%20return",
  email: "info@laundro-hub.co.za",
  serviceArea: "Entire Bloemfontein area",
  schedulingPolicy: "No fixed delivery time slots. Pick-ups are scheduled dynamically with the driver throughout the day upon request.",
  bookingProcess: "Simple direct phone call or WhatsApp to (064) 830-8785 to arrange collection and return.",
  vatStatus: "Prices include VAT. Special rates available for bulk & contract clients.",
  isVatRegistered: true,
  minimumOrder: "No minimum order amount applies.",
  paymentMethods: "EFT or Card payments only (Strictly NO CASH).",
  billingPolicy: "Strictly EFT or card payment; no open monthly accounts.",
  paymentPolicy: "Card Speedpoint tap or instant EFT only. For security reasons, strictly NO CASH is handled on premises or by drivers. No open monthly accounts.",
  // Primary Store (The Towers)
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
    { days: "Saturday", times: "09:00 – 13:00" },
    { days: "Sunday", times: "09:00 – 13:00" },
    { days: "Public Holidays", times: "09:00 – 14:00" },
  ],
  // All Drop-Off Locations
  locations: [
    {
      id: "towers",
      name: "The Towers Hub (Langenhovenpark)",
      street: "Opposite the car wash — old Panarottis location",
      suburb: "Langenhovenpark",
      city: "Bloemfontein",
      googleMapsUrl: "https://maps.google.com/?q=The+Towers+Shopping+Centre+Langenhovenpark+Bloemfontein",
      hours: [
        { days: "Monday – Friday", times: "07:00 – 17:30" },
        { days: "Saturday", times: "09:00 – 13:00" },
        { days: "Sunday", times: "09:00 – 13:00" },
        { days: "Public Holidays", times: "09:00 – 14:00" },
      ],
      badge: "Main Store & Hub",
      isMainHub: true,
    },
    {
      id: "bains-lodge",
      name: "Bains Lodge Drop-Off Point",
      street: "Main entrance, directly opposite security",
      suburb: "Bains Lodge",
      city: "Bloemfontein",
      googleMapsUrl: "https://maps.google.com/?q=Bains+Lodge+Bloemfontein",
      hours: [
        { days: "Monday – Friday", times: "07:00 – 17:30" },
        { days: "Saturdays & Public Holidays", times: "09:00 – 14:00" },
        { days: "Sundays", times: "Closed" },
      ],
      badge: "Drop-Off Point",
      isMainHub: false,
    },
  ] as StoreLocation[],
};

export const PRICING_POLICY: PricingPolicy = {
  effectiveDate: "1 September 2026",
  vatStatus: "Prices include VAT. Special rates available for bulk & contract clients.",
  isVatRegistered: true,
  minimumOrder: "No minimum order amount applies.",
  paymentMethods: ["Card (Speedpoint Tap / Insert)", "Instant EFT"],
  strictlyNoCash: true,
  billingPolicy: "Strictly EFT or card payment; no open monthly accounts.",
  serviceArea: "Entire Bloemfontein area.",
  scheduling: "No fixed delivery time slots. Pick-ups are scheduled dynamically with the driver throughout the day upon request.",
  bookingProcess: "Simple direct phone call or WhatsApp to (064) 830-8785 to arrange collection and return.",
  paymentPolicyNotice: "EFT or Card payments only — Strictly NO CASH accepted. No open monthly accounts.",
};

export const OFFICIAL_PRICE_LIST: PriceListItem[] = [
  // 1. Wash only
  {
    id: "wash-only",
    name: "Wash Only",
    price: 38,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 1,
    formattedPrice: "R 38",
    category: "everyday",
    note: "Commercial wash cycle with premium detergent",
  },
  // 2. Tumble dry only
  {
    id: "tumble-dry-only",
    name: "Tumble Dry Only",
    price: 40,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 2,
    formattedPrice: "R 40",
    category: "everyday",
    note: "High-capacity moisture-controlled drying",
  },
  // 3. Wash, dry and fold (NEW PRICE!)
  {
    id: "wash-dry-fold",
    name: "Wash, Dry & Fold",
    price: 40,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 3,
    formattedPrice: "R 40",
    category: "everyday",
    badge: "New Price!",
    note: "Washed, tumble dried, and crisply folded into bundles",
  },
  // 4. Wash, dry and iron
  {
    id: "wash-dry-iron",
    name: "Wash, Dry & Iron",
    price: 43,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 4,
    formattedPrice: "R 43",
    category: "everyday",
    badge: "Full Care",
    note: "Washed, tumble dried, and professionally steam ironed",
  },
  // 5. Iron only
  {
    id: "iron-only",
    name: "Iron Only",
    price: 42,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 5,
    formattedPrice: "R 42",
    category: "everyday",
    note: "Professional steam pressing for shirts, trousers & garments",
  },
  // 6. Hand wash
  {
    id: "hand-wash",
    name: "Hand Wash",
    price: 60,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 6,
    formattedPrice: "R 60",
    category: "everyday",
    badge: "Gentle Care",
    note: "Delicate fabrics, woollens, and fine garments",
  },
  // 7. Tacky / Sneakers
  {
    id: "tekkies-sneakers",
    name: "Tacky / Sneakers",
    price: 60,
    unit: "per pair",
    flyerUnit: "P/PAIR",
    order: 7,
    formattedPrice: "R 60",
    category: "speciality",
    badge: "Footwear Revive",
    note: "Careful hand scrub, deodorisation & safe air-dry finish",
  },
  // 8. Bains Standard Pillow
  {
    id: "bains-standard-pillow",
    name: "Bains Standard Pillow",
    price: 35,
    unit: "each",
    flyerUnit: "EACH",
    order: 8,
    formattedPrice: "R 35",
    category: "bedding",
    note: "Standard bed pillows washed, sanitised & dried",
  },
  // 9. Bains Continental Pillow
  {
    id: "bains-continental-pillow",
    name: "Bains Continental Pillow",
    price: 55,
    unit: "each",
    flyerUnit: "EACH",
    order: 9,
    formattedPrice: "R 55",
    category: "bedding",
    note: "Large continental pillows deep-cleaned & fluffed",
  },
  // 10. Bains Blanket Single & Double
  {
    id: "blankets-single-double",
    name: "Bains Blanket Single & Double",
    price: 75,
    unit: "each",
    flyerUnit: "EACH",
    order: 10,
    formattedPrice: "R 75",
    category: "bedding",
    note: "Standard size winter blankets & fleece throws",
  },
  // 11. Blankets Queen & King
  {
    id: "blankets-queen-king",
    name: "Blankets Queen & King",
    price: 90,
    unit: "each",
    flyerUnit: "EACH",
    order: 11,
    formattedPrice: "R 90",
    category: "bedding",
    note: "Heavy large winter blankets & thick throws",
  },
  // 12. Bains Duvet Single & Double
  {
    id: "duvets-quilts-bedspreads",
    name: "Bains Duvet Single & Double",
    price: 120,
    unit: "each",
    flyerUnit: "EACH",
    order: 12,
    formattedPrice: "R 120",
    category: "bedding",
    note: "Single & double duvets, quilts & comforters",
  },
  // 13. Bains Duvet Queen & King
  {
    id: "duvet-queen-king-flat",
    name: "Bains Duvet Queen & King",
    price: 130,
    unit: "each",
    flyerUnit: "EACH",
    order: 13,
    formattedPrice: "R 130",
    category: "bedding",
    badge: "Hotel Care",
    note: "Dedicated high-capacity industrial drum wash & deep thermal dry",
  },
  // 14. Bains Curtains per kilogram
  {
    id: "curtains-washable",
    name: "Bains Curtains",
    price: 120,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 14,
    formattedPrice: "R 120",
    category: "speciality",
    note: "Subject to fabric care label inspection",
  },
  // 15. Linen-Sheets/Fitted sheets/flats P/KG
  {
    id: "linen-sheets",
    name: "Linen-Sheets / Fitted sheets / flats",
    price: 60,
    unit: "per kg",
    flyerUnit: "P/KG",
    order: 15,
    formattedPrice: "R 60",
    category: "bedding",
    note: "Fitted sheets, flat sheets, pillowcases & hospitality linen",
  },

  // Transport & Delivery Logistics
  {
    id: "transport-lhp",
    name: "Langenhovenpark Express Van",
    price: 35,
    unit: "per trip",
    flyerUnit: "PER TRIP",
    order: 16,
    formattedPrice: "R 35 / trip",
    category: "transport",
    badge: "Local Hub",
    note: "R35 pickup, R35 drop-off (R70 round-trip). No minimum order required.",
  },
  {
    id: "transport-bloem",
    name: "Greater Bloemfontein Express Van",
    price: 65,
    unit: "per trip",
    flyerUnit: "PER TRIP",
    order: 17,
    formattedPrice: "R 65 / trip",
    category: "transport",
    badge: "City-Wide",
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
    priceStartingAt: "From R42 / kg",
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
    priceStartingAt: "From R35 (Duvets R120–R130)",
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
    name: "School Boarding Hostel Batch Care",
    weightLimit: "Per learner / term packages",
    pricePerMonth: "Monthly Packages & Walk-In Rates",
    popular: true,
    description: "Dedicated monthly packages available for students and schools, alongside standard walk-in rates. (Note: Packages update starting January 2027). Currently serving Grey College Secondary, Jim Fouché Secondary, and Eunice Secondary hostels (pending final client approval to publish names).",
    features: [
      "Dedicated weekly batch collection & delivery across Bloemfontein",
      "Individually tagged student bags (no mixed loads)",
      "School uniform washing & precision steam pressing",
      "Sports team kits & heavy red mud stain pre-treatment",
      "Dedicated monthly packages or standard walk-in rates (Packages update starting Jan 2027)",
      "Strictly EFT or card payment; no open monthly accounts",
    ],
  },
  {
    id: "guesthouse-rfq",
    name: "Guest Houses, B&Bs & Hospitality",
    weightLimit: "Custom linen volume",
    pricePerMonth: "Quoted on Request (RFQ)",
    description: "Tailored to specific linen volumes and frequency on an RFQ basis. High-capacity commercial washing, rotary steam pressing, and dynamic van delivery across Bloemfontein.",
    features: [
      "Quoted on request (RFQ basis) tailored to your exact linen inventory",
      "Commercial rotary steam pressing for crisp bedding & flat sheets",
      "High-temperature hygiene sanitisation for bath sheets & towels",
      "Dynamic driver collection throughout the day upon request",
      "Strictly EFT or card payment; no open monthly accounts",
    ],
  },
  {
    id: "student-res",
    name: "University Res & Communes",
    weightLimit: "Doorstep res pickup",
    pricePerMonth: "Monthly Student Packages",
    description: "Dedicated monthly packages available for university students and communes, alongside standard walk-in rates. (Note: Packages update starting January 2027).",
    features: [
      "Dynamic driver pickup at residence gate or commune address",
      "Wash, dry & fold within 24–48 hours",
      "Bedding, duvet inners & blankets handled",
      "Dedicated monthly packages or standard walk-in rates (Packages update starting Jan 2027)",
      "Direct WhatsApp booking ((064) 830-8785)",
      "Strictly EFT or card payment; no open monthly accounts",
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
