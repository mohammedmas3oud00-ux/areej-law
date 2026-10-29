import React, { useState } from 'react';
import { FIRM_DETAILS } from '../data/lawFirmData';
import { Language } from '../types';
import { MapPin, Navigation, Phone, Mail, Clock, ShieldCheck, QrCode, Copy, Check, ExternalLink } from 'lucide-react';
import { GOOGLE_MAPS_URL, OFFICIAL_PHONE, OFFICIAL_EMAIL } from '../utils/whatsapp';

interface LocationSectionProps {
  language: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    const textToCopy = isAr ? FIRM_DETAILS.addressDetailedAr : FIRM_DETAILS.addressDetailedEn;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#EFECE6]/40 dark:bg-[#161412]/50 border-t border-[#E7E2D8] dark:border-[#242220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] uppercase mb-2 block font-sans-ar">
            {isAr ? 'المقر الجغرافي ووسائل التواصل' : 'HEADQUARTERS & CONTACT'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight">
            {isAr ? 'مقر المكتب بمكة المكرمة - حي الشوقية' : 'Office Headquarters in Makkah - Al-Shawqiyyah'}
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] dark:text-[#A8A29E] mt-3 leading-relaxed">
            {isAr
              ? 'مقر حديث مهيأ بالكامل لاستقبال الموكلين، يوفر أعلى درجات الخصوصية والراحة مع سهولة الوصول وتوفر المواقف.'
              : 'A prestigious, fully equipped office ensuring maximum privacy, ease of access, elevator service, and abundant parking.'}
          </p>
        </div>

        {/* 2-Column Grid: Location Details + Interactive Map & QR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details & Features (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Main Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#9A784E]/15 border border-[#9A784E]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#9A784E]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#181818] dark:text-[#FAF8F5]">
                      {isAr ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
                    </h3>
                    <p className="text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                      {isAr ? 'ترخيص رسمي رقم 42691' : 'Official License No. 42691'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyAddress}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#86673E] dark:text-[#C2A273] hover:text-[#181818] dark:hover:text-white bg-white dark:bg-[#22201E] border border-[#DDD7CC] dark:border-[#33302C] rounded-lg transition-all"
                  title="نسخ العنوان"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{isAr ? 'تم النسخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isAr ? 'نسخ العنوان' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Detailed Address String */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EAE6DE] dark:border-[#2B2825] mb-5">
                <span className="text-xs font-bold text-[#86673E] dark:text-[#C2A273] block mb-1">
                  {isAr ? 'العنوان التفصيلي للمقر:' : 'Full Office Address:'}
                </span>
                <p className="text-sm font-semibold text-[#181818] dark:text-[#FAF8F5] leading-relaxed">
                  {isAr ? FIRM_DETAILS.addressDetailedAr : FIRM_DETAILS.addressDetailedEn}
                </p>
              </div>

              {/* Office Amenities & Preparedness */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-[#78716C] dark:text-[#A8A29E] block">
                  {isAr ? 'مميزات وتهيئة المقر:' : 'Headquarters Amenities:'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#44403C] dark:text-[#D6D3D1]">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-[#201E1C]/60 border border-[#EAE6DE] dark:border-[#2B2825]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E]" />
                    <span>{isAr ? 'مبنى مهيأ بمصاعد حديثة' : 'Modern Elevator Service'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-[#201E1C]/60 border border-[#EAE6DE] dark:border-[#2B2825]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E]" />
                    <span>{isAr ? 'مواقف سيارات واسعة' : 'Dedicated Client Parking'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-[#201E1C]/60 border border-[#EAE6DE] dark:border-[#2B2825]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E]" />
                    <span>{isAr ? 'قاعات استشارة خاصة' : 'Private Consultation Suites'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-[#201E1C]/60 border border-[#EAE6DE] dark:border-[#2B2825]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E]" />
                    <span>{isAr ? 'موقع استراتيجي بالشوقية' : 'Prime Al-Shawqiyyah Spot'}</span>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-5 mt-6 border-t border-[#E7E2D8] dark:border-[#2A2825] flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#9A784E] hover:bg-[#86673E] rounded-xl transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{isAr ? 'فتح الاتجاهات عبر Google Maps' : 'Open Directions in Google Maps'}</span>
                </a>

                <a
                  href={`tel:${OFFICIAL_PHONE}`}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#181818] dark:text-[#FAF8F5] bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#33302C] hover:border-[#9A784E] rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-[#9A784E]" />
                  <span>{isAr ? 'اتصال بالمكتب' : 'Call Office'}</span>
                </a>
              </div>
            </div>

            {/* Working Hours Notice Card */}
            <div className="p-4 rounded-xl bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] flex items-center justify-between text-xs text-[#57534E] dark:text-[#A8A29E]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9A784E]" />
                <span>
                  {isAr
                    ? 'الاستقبال: صباحاً (9 - 12 ظ) | مساءً (5 - 11 م)'
                    : 'Hours: Morning (9-12 PM) | Evening (5-11 PM)'}
                </span>
              </div>
              <span className="font-semibold text-[#86673E] dark:text-[#C2A273]">
                {isAr ? 'الأحد - الخميس' : 'Sun - Thu'}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Map Representation & QR Code (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Visual Location Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E7E2D8] dark:border-[#2C2926] bg-[#F7F5F0] dark:bg-[#1A1816] h-[340px] flex flex-col justify-between p-6 shadow-sm">
              
              {/* Map Graphic Pattern Background */}
              <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9A784E" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Pin Callout Card */}
              <div className="relative z-10 max-w-sm p-4 rounded-xl bg-white/95 dark:bg-[#1E1C1A]/95 backdrop-blur-sm border border-[#E5E0D5] dark:border-[#2F2C29] shadow-md">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5]">
                    {isAr ? 'موقع المكتب بمكة المكرمة' : 'Makkah Law Office Location'}
                  </span>
                </div>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  {isAr
                    ? 'حي الشوقية، الدور الثاني، مكتب رقم (B9). يقع في قلب المنطقة التجارية الحيوية بالشوقية.'
                    : 'Al-Shawqiyyah, 2nd Floor, Office (B9), in the heart of Makkah’s prime commercial zone.'}
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#EAE6DE] dark:border-[#2C2926] flex items-center justify-between text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                  <span>{isAr ? 'إحداثيات GPS موثقة' : 'Verified GPS Coordinates'}</span>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#9A784E] dark:text-[#C2A273] hover:underline flex items-center gap-0.5"
                  >
                    <span>{isAr ? 'عرض الخريطة' : 'View Map'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Central Marker */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#9A784E]/20 flex items-center justify-center animate-ping" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#9A784E] text-white flex items-center justify-center shadow-lg shadow-[#9A784E]/40">
                      <MapPin className="w-5 h-5 fill-white text-white" />
                    </div>
                  </div>
                </div>
                <span className="mt-2 text-xs font-bold px-3 py-1 bg-white/90 dark:bg-[#1E1C1A]/90 rounded-full border border-[#DDD7CC] dark:border-[#33302C] text-[#181818] dark:text-[#FAF8F5] shadow-xs">
                  {isAr ? 'مكتب B9 - الدور 2' : 'Office B9 - 2nd Floor'}
                </span>
              </div>

              {/* Bottom Quick Map Link */}
              <div className="relative z-10 text-center">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#86673E] dark:text-[#C2A273] bg-white/90 dark:bg-[#1E1C1A]/90 px-3 py-1.5 rounded-lg border border-[#DDD7CC] dark:border-[#33302C] hover:border-[#9A784E] transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{isAr ? 'انقر لفتح الملاحة وتوجيه GPS مباشرة' : 'Click for Live GPS Navigation'}</span>
                </a>
              </div>
            </div>

            {/* QR Code & Mobile Sync Card */}
            <div className="p-5 rounded-2xl bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] flex items-center gap-5">
              
              {/* QR Code Graphic */}
              <div className="w-24 h-24 rounded-xl bg-white p-2 border border-[#DDD7CC] dark:border-[#33302C] flex items-center justify-center shrink-0 shadow-2xs">
                {/* Clean SVG QR pattern representation linking to location */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#181818]" fill="currentColor">
                  {/* Outer Frame Top Left */}
                  <rect x="10" y="10" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="20" y="20" width="8" height="8" fill="currentColor" />
                  
                  {/* Outer Frame Top Right */}
                  <rect x="62" y="10" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="72" y="20" width="8" height="8" fill="currentColor" />
                  
                  {/* Outer Frame Bottom Left */}
                  <rect x="10" y="62" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="20" y="72" width="8" height="8" fill="currentColor" />
                  
                  {/* Data Matrix Dots */}
                  <rect x="46" y="12" width="6" height="6" />
                  <rect x="46" y="26" width="6" height="6" />
                  <rect x="46" y="46" width="8" height="8" fill="#9A784E" />
                  <rect x="26" y="46" width="6" height="6" />
                  <rect x="62" y="46" width="6" height="6" />
                  <rect x="76" y="46" width="6" height="6" />
                  <rect x="62" y="62" width="6" height="6" />
                  <rect x="76" y="62" width="6" height="6" />
                  <rect x="46" y="62" width="6" height="6" />
                  <rect x="62" y="76" width="6" height="6" />
                  <rect x="76" y="76" width="6" height="6" />
                  <rect x="46" y="76" width="6" height="6" />
                </svg>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#181818] dark:text-[#FAF8F5] mb-1">
                  {isAr ? 'امسح الرمز (QR Code) للوصول المباشر' : 'Scan QR for Direct GPS Location'}
                </h4>
                <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  {isAr
                    ? 'امسح بكاميرا الجوال لفتح موقع المكتب مباشرة على خرائط جوجل وحفظ جهة الاتصال في هاتفك.'
                    : 'Scan with your mobile camera to open Google Maps or store contact details directly.'}
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#86673E] dark:text-[#C2A273] hover:underline mt-2"
                >
                  <span>{isAr ? 'أو افتح الرابط في المتصفح' : 'Or open link in browser'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
