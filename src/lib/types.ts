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
