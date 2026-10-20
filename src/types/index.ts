export type Language = 'en' | 'hi';

export interface ServiceItem {
  id: string;
  category: 'printing' | 'online_forms' | 'travel' | 'computer' | 'solar';
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  iconName: string;
  highlightsEn: string[];
  highlightsHi: string[];
  docsRequiredEn?: string[];
  docsRequiredHi?: string[];
  featured?: boolean;
}

export interface SolarPlan {
  capacityKw: number;
  labelEn: string;
  labelHi: string;
  suitableForEn: string;
  suitableForHi: string;
  monthlySavingsUnits: string;
  monthlyBillSavingsInr: string;
  centralSubsidyInr: string;
  approxRoofAreaSqFt: string;
  paybackPeriodYears: string;
  warrantyYears: string;
}

export interface EnquiryData {
  id: string;
  createdAt: string;
  fullName: string;
  mobile: string;
  service: string;
  datePreference?: string;
  message: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceUsedEn: string;
  serviceUsedHi: string;
  commentEn: string;
  commentHi: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
  category: 'general' | 'forms' | 'printing' | 'solar';
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: string;
  imageUrl: string;
  captionEn: string;
  captionHi: string;
}
