export type Language = 'ar' | 'en';

export type Theme = 'light' | 'dark';

export interface LegalService {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  featuresAr: string[];
  featuresEn: string[];
  category: 'litigation' | 'administrative' | 'contracts' | 'consultation' | 'drafting';
}

export interface Review {
  id: string;
  authorAr: string;
  authorEn: string;
  rating: number;
  dateAr: string;
  dateEn: string;
  textAr: string;
  textEn: string;
  source: 'Google Maps';
  verified: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  serviceId: string;
  preferredShift: 'morning' | 'evening' | 'office_visit';
  consultationType: 'office' | 'whatsapp_call' | 'written';
  details: string;
}

export interface OfficeStatus {
  isOpen: boolean;
  currentShift: 'morning' | 'evening' | 'closed';
  nextShiftTimeAr: string;
  nextShiftTimeEn: string;
  makkahTimeFormatted: string;
}
