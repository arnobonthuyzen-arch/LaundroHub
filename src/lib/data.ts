import type { PricingPlan, ServiceItem } from "./types";

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
    description: "Designed for UFS Kovsies and CUT students, residence houses, and shared student communes.",
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

export async function getSuburbs(): Promise<string[]> {
  return Promise.resolve(SUBURBS);
}
