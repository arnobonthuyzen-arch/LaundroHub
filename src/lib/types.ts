export type ActionState<T = void> =
  | {
      success: true;
      data?: T;
      message: string;
    }
  | {
      success: false;
      error?: string;
      fieldErrors?: Record<string, string[]>;
    };

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  priceStartingAt?: string;
  features: string[];
  icon: string;
  image: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  weightLimit: string;
  pricePerMonth: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface SuburbCoverage {
  suburb: string;
  freeCollectionMin?: string;
}

export interface PriceListItem {
  id: string;
  name: string;
  price: number;
  unit: "per kg" | "per pair" | "each" | "per trip";
  flyerUnit?: string;
  order?: number;
  formattedPrice: string;
  category: "everyday" | "bedding" | "speciality" | "transport";
  note?: string;
  badge?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  street: string;
  suburb: string;
  city: string;
  googleMapsUrl: string;
  hours: { days: string; times: string }[];
  badge?: string;
  isMainHub?: boolean;
}

export interface PricingPolicy {
  effectiveDate: string;
  vatStatus: string;
  isVatRegistered: boolean;
  minimumOrder: string;
  paymentMethods: string[];
  strictlyNoCash: boolean;
  billingPolicy: string;
  serviceArea: string;
  scheduling: string;
  bookingProcess: string;
  paymentPolicyNotice: string;
}
