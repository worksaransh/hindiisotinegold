
export interface Ingredient {
  name: string;
  benefit: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  isBestSeller: boolean;
  contents: string;
}
