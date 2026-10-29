import React from 'react';
import { FIRM_DETAILS } from '../data/lawFirmData';
import { Language } from '../types';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, Phone, Mail, MapPin, Scale } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_EMAIL, GOOGLE_MAPS_URL } from '../utils/whatsapp';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAr = language === 'ar';
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#EFECE6] dark:bg-[#0E0D0C] border-t border-[#DDD7CC] dark:border-[#22201E] pt-10 sm:pt-14 pb-20 sm:pb-12 transition-colors duration-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#DDD7CC] dark:border-[#22201E]">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo language={language} size="md" />
            <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed max-w-sm mt-3">
              {isAr
                ? 'مكتب محاماة واستشارات قانونية مرخص ومعتمد من وزارة العدل برقم (42691) بمكة المكرمة. ترافع شامل أمام المحاكم وديوان المظالم وصياغة مهنية للعقود واللوائح.'
                : 'A licensed law firm and legal consultancy authorized by the Saudi Ministry of Justice (#42691) in Makkah. Specialized litigation before courts, Board of Grievances, and contract drafting.'}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#86673E] dark:text-[#C2A273] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#9A784E]" />
              <span>{isAr ? 'ترخيص وزارة العدل رقم 42691' : 'Ministry of Justice License #42691'}</span>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5] uppercase tracking-wider">
              {isAr ? 'روابط الوصول السريع' : 'Navigation Links'}
            </h4>
            <ul className="space-y-2 text-xs text-[#57534E] dark:text-[#A8A29E]">
              <li>
                <a href="#hero" className="hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors">
                  {isAr ? 'الخدمات القانونية والمرافعات' : 'Legal Services & Litigation'}
                </a>
              </li>
              <li>
                <a href="#diwan" className="hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors">
                  {isAr ? 'قضايا ديوان المظالم الإدارية' : 'Board of Grievances Cases'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors">
                  {isAr ? 'آراء العملاء وتقييمات Google' : 'Google Reviews'}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors">
                  {isAr ? 'مواعيد العمل وحجز الاستشارة' : 'Working Hours & Booking'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors">
                  {isAr ? 'مقر المكتب بالشوقية' : 'Al-Shawqiyyah Headquarters'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5] uppercase tracking-wider">
              {isAr ? 'بيانات التواصل الرسمي' : 'Official Contact Info'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#57534E] dark:text-[#A8A29E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9A784E] shrink-0 mt-0.5" />
                <span>
                  {isAr ? FIRM_DETAILS.addressDetailedAr : FIRM_DETAILS.addressDetailedEn}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9A784E] shrink-0" />
                <a href={`tel:${OFFICIAL_PHONE}`} className="hover:text-[#9A784E] tabular-nums" dir="ltr">
                  {FIRM_DETAILS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9A784E] shrink-0" />
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-[#9A784E]">
                  {OFFICIAL_EMAIL}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#86673E] dark:text-[#C2A273] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isAr ? 'موقع المكتب على خرائط Google' : 'Office Location on Google Maps'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Professional Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C] dark:text-[#88837E]">
          <p>
            {isAr
              ? `جميع الحقوق محفوظة © ${currentYear} مكتب المحامية أريج بنت عويض المجنوني`
              : `All rights reserved © ${currentYear} Areej Aweid Al-Majnuni Law Firm`}
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-[#9A784E]" />
              <span>{isAr ? 'مرخص بموجب أنظمة وزارة العدل السعودية' : 'Licensed under Saudi MOJ Regulations'}</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
