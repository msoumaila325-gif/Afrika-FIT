/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GymStat {
  id: string;
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string; // Used to dynamically map Lucide icons
  description: string;
  benefits: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'all' | 'workout' | 'cardio' | 'crossfit' | 'facilities' | 'yoga';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isRecommended: boolean;
  accentText?: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  imageUrl: string;
  certifications: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimetableDay {
  day: string;
  hours: string;
  classes: string[];
  note?: string;
}
