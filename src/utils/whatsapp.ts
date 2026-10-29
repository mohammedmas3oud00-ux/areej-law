import { BookingFormData } from '../types';

export const OFFICIAL_PHONE = '+966548989025';
export const WHATSAPP_RAW_NUMBER = '966548989025';
export const OFFICIAL_EMAIL = 'lawyer.7areej@gmail.com';
export const LICENSE_NUMBER = '42691';
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=21.3668,39.7905+(مكتب+المحامية+أريج+بنت+عويض+المجنوني)';

export function generateWhatsAppConsultationUrl(data: BookingFormData, serviceName: string, lang: 'ar' | 'en' = 'ar'): string {
  const shiftLabelsAr: Record<string, string> = {
    morning: 'الفترة الصباحية (9:00 ص - 12:00 ظ)',
    evening: 'الفترة المسائية (5:00 م - 11:00 م)',
    office_visit: 'زيارة مقر المكتب بالشوقية'
  };

  const shiftLabelsEn: Record<string, string> = {
    morning: 'Morning Shift (9:00 AM - 12:00 PM)',
    evening: 'Evening Shift (5:00 PM - 11:00 PM)',
    office_visit: 'Office Visit at Al-Shawqiyyah'
  };

  const typeLabelsAr: Record<string, string> = {
    office: 'حضورية بمقر المكتب (مكة المكرمة - الشوقية)',
    whatsapp_call: 'هاتفية / عبر الواتساب',
    written: 'رأي نظامي مكتوب وموثق'
  };

  const typeLabelsEn: Record<string, string> = {
    office: 'In-Person at Office (Makkah - Al-Shawqiyyah)',
    whatsapp_call: 'Phone / WhatsApp Call',
    written: 'Written Formal Legal Opinion'
  };

  let message = '';

  if (lang === 'ar') {
    message = `السلام عليكم ورحمة الله وبركاته
سعادة المحامية أريج بنت عويض المجنوني،

أود طلب استشارة / موعد قانوني وفق التفاصيل التالية:

• الاسم الكريم: ${data.name.trim() || 'غير محدد'}
• رقم الجوال: ${data.phone.trim() || 'غير محدد'}
• الخدمة المطلوبة: ${serviceName}
• نوع الاستشارة: ${typeLabelsAr[data.consultationType] || data.consultationType}
• الفترة المفضلة: ${shiftLabelsAr[data.preferredShift] || data.preferredShift}

• نبذة عن الموضوع:
${data.details.trim() || 'يرجى التنسيق لبحث التفاصيل.'}

شاكر ومقدر لجهودكم الكريمة.`;
  } else {
    message = `Peace be upon you,
Dear Advocate Areej Aweid Al-Majnuni,

I would like to request a legal consultation / appointment:

• Full Name: ${data.name.trim() || 'Not specified'}
• Mobile Number: ${data.phone.trim() || 'Not specified'}
• Requested Service: ${serviceName}
• Consultation Type: ${typeLabelsEn[data.consultationType] || data.consultationType}
• Preferred Shift: ${shiftLabelsEn[data.preferredShift] || data.preferredShift}

• Case / Inquiry Brief:
${data.details.trim() || 'Looking forward to discussing details.'}

Best regards.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodedMessage}`;
}

export function generateDirectWhatsAppUrl(text?: string): string {
  const defaultText = encodeURIComponent('السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن الخدمات القانونية وحجز موعد استشارة لدى مكتب المحامية أريج المجنوني.');
  const query = text ? encodeURIComponent(text) : defaultText;
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${query}`;
}
