import React from 'react';
import { FIRM_DETAILS } from '../data/lawFirmData';
import { Language } from '../types';
import { ShieldCheck, Scale, Award, Landmark, MessageCircle, CalendarCheck, MapPin, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  const isAr = language === 'ar';
  const whatsappUrl = generateDirectWhatsAppUrl();

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 overflow-hidden w-full max-w-full">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 flex justify-center items-center overflow-hidden">
        <div className="w-[300px] sm:w-[500px] lg:w-[650px] h-[300px] sm:h-[500px] lg:h-[650px] rounded-full bg-gradient-to-tr from-[#9A784E]/10 via-[#C2A273]/15 to-transparent blur-2xl sm:blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Main Headline & Value Proposition (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6 w-full">
            
            {/* Trust Marker (Unboxed quiet text with typographic separators per zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#86673E] dark:text-[#C2A273]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#9A784E]" />
                <span>{isAr ? 'ترخيص وزارة العدل رقم 42691' : 'Saudi MOJ License #42691'}</span>
              </span>
              <span aria-hidden="true" className="text-[#9A784E]/50">·</span>
              <span>{isAr ? 'مكة المكرمة - حي الشوقية' : 'Makkah - Al-Shawqiyyah'}</span>
              <span aria-hidden="true" className="text-[#9A784E]/50">·</span>
              <span>{isAr ? 'محاكم ديوان المظالم والعامة' : 'Board of Grievances & General Courts'}</span>
            </div>

            {/* Display Headline with balanced typography pairing */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-[#181818] dark:text-[#FAF8F5] leading-tight sm:leading-[1.25] tracking-tight font-sans-ar text-balance">
              {isAr ? (
                <>
                  تمثيل قضائي رصين وحماية للحقوق{' '}
                  <span className="font-serif-legal font-bold text-[#9A784E] dark:text-[#C2A273] italic">
                    بحجة نظامية قاطعة
                  </span>{' '}
                  أمام كافة المحاكم والجهات الإدارية
                </>
              ) : (
                <>
                  Authoritative judicial defense & legal advocacy with{' '}
                  <span className="font-serif-legal font-bold text-[#9A784E] dark:text-[#C2A273]">
                    unwavering statutory precision
                  </span>{' '}
                  across all Saudi courts
                </>
              )}
            </h1>

            {/* Subtitle / Value Explanation */}
            <p className="text-sm sm:text-base lg:text-lg text-[#57534E] dark:text-[#A8A29E] leading-relaxed max-w-2xl font-normal">
              {isAr
                ? 'مكتب المحامية أريج بنت عويض المجنوني بمكة المكرمة؛ خبرة متعمقة في دعاوى ديوان المظالم والقرارات الإدارية، والترافع الجنائي والتجاري والعمالي، وصياغة العقود وتوثيق الاتفاقيات.'
                : 'Areej Aweid Al-Majnuni Law Firm provides seasoned advocacy before the Board of Grievances, expert civil and corporate litigation, authoritative contract drafting, and preventative legal opinions in Makkah.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold text-white bg-[#9A784E] hover:bg-[#86673E] active:bg-[#735632] rounded-xl shadow-md shadow-[#9A784E]/25 transition-all transform active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9A784E] cursor-pointer min-h-[44px]"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>{isAr ? 'حجز موعد استشارة بمقر المكتب' : 'Book Office Consultation'}</span>
                {isAr ? <ChevronLeft className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold text-[#181818] dark:text-[#F5F5F4] bg-[#EFECE6] dark:bg-[#1E1E1E] hover:bg-[#E5E0D5] dark:hover:bg-[#282828] border border-[#DDD7CC] dark:border-[#333333] rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{isAr ? 'محادثة فورية مع المحامية' : 'Direct WhatsApp Counsel'}</span>
              </a>
            </div>

            {/* Quiet Trust Footnotes */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#78716C] dark:text-[#A8A29E] pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E] shrink-0" />
                {isAr ? 'سرية مهنية تامة ومطلقة' : 'Absolute Attorney-Client Privilege'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E] shrink-0" />
                {isAr ? 'جلسات استشارة حضورية وهاتفية' : 'In-Person & Remote Consultations'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E] shrink-0" />
                {isAr ? 'تغطية قضائية لكافة مدن المملكة' : 'Kingdom-Wide Judicial Reach'}
              </span>
            </div>

          </div>

          {/* Focal Visual Carrier: Judicial Credential & Official Chamber Seal (5 cols on lg) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-[#FFFFFF] dark:bg-[#1B1917] border border-[#E5DFD5] dark:border-[#2C2926] shadow-xl shadow-black/5 dark:shadow-black/40 overflow-hidden">
              
              {/* Subtle Arabesque Watermark in Corner */}
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#9A784E]/10 blur-2xl pointer-events-none" />

              {/* Top Header of Credential Plate */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EAE4D9] dark:border-[#2A2724]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#9A784E]/15 border border-[#9A784E]/30 flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-[#9A784E]" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#181818] dark:text-[#FAF8F5] leading-tight">
                      {isAr ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
                    </h2>
                    <p className="text-xs text-[#86673E] dark:text-[#C2A273] mt-0.5 font-medium">
                      {isAr ? 'محامية ومستشارة قانونية مرخصة' : 'Licensed Advocate & Legal Consultant'}
                    </p>
                  </div>
                </div>

                {/* Verified MOJ Official Seal Badge */}
                <div className="shrink-0 text-right">
                  <span className="text-[11px] font-mono font-bold text-[#9A784E] dark:text-[#C2A273] bg-[#9A784E]/10 px-2.5 py-1 rounded-md border border-[#9A784E]/25 tabular-nums block">
                    {FIRM_DETAILS.licenseNumber}
                  </span>
                  <span className="text-[10px] text-[#78716C] dark:text-[#A8A29E] block mt-0.5">
                    {isAr ? 'وزارة العدل' : 'Saudi MOJ'}
                  </span>
                </div>
              </div>

              {/* Editorial Judicial Pillars (Clean whitespace, no cards-in-cards) */}
              <div className="py-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] dark:bg-[#24211E] border border-[#EAE4D9] dark:border-[#332E2A] flex items-center justify-center shrink-0 text-[#9A784E]">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#181818] dark:text-[#FAF8F5]">
                      {isAr ? 'تخصص متعمق بديوان المظالم' : 'Board of Grievances Specialization'}
                    </h3>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-0.5 leading-relaxed">
                      {isAr
                        ? 'إلغاء القرارات الإدارية الجائرة، منازعات عقود المشاريع الحكومية، والتعويضات.'
                        : 'Annulment of administrative decisions, public procurement claims, and restitution.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] dark:bg-[#24211E] border border-[#EAE4D9] dark:border-[#332E2A] flex items-center justify-center shrink-0 text-[#9A784E]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#181818] dark:text-[#FAF8F5]">
                      {isAr ? 'مرافعات قضائية وصياغة لوائح محكمة' : 'Rigorous Courtroom Pleadings & Defense'}
                    </h3>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-0.5 leading-relaxed">
                      {isAr
                        ? 'إعداد المذكرات الجوابية والطعون بالاستئناف والنقض بصياغة نظامية رصينة.'
                        : 'Formulation of appellate petitions, cassation briefs, and commercial defense.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] dark:bg-[#24211E] border border-[#EAE4D9] dark:border-[#332E2A] flex items-center justify-center shrink-0 text-[#9A784E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#181818] dark:text-[#FAF8F5]">
                      {isAr ? 'مقر مهيأ بالكامل في مكة المكرمة' : 'Prime Makkah Executive Chambers'}
                    </h3>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] mt-0.5 leading-relaxed">
                      {isAr
                        ? 'حي الشوقية، الدور الثاني، مكتب رقم (B9) - قاعات استشارة خاصة ومواقف متوفرة.'
                        : 'Al-Shawqiyyah, 2nd Floor, Office B9 with elevator and client parking.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Status & Appointment Hook */}
              <div className="pt-4 border-t border-[#EAE4D9] dark:border-[#2A2724] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-[#57534E] dark:text-[#A8A29E] font-medium">
                    {isAr ? 'استقبال الاستشارات متاح' : 'Consultations Active'}
                  </span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="font-bold text-[#9A784E] dark:text-[#C2A273] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{isAr ? 'تحديد موعد' : 'Schedule'}</span>
                  {isAr ? <ChevronLeft className="w-3.5 h-3.5 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency Statistics Strip */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#E7E2D8] dark:border-[#262626]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Stat 1: Google Reviews Rating */}
            <div className="p-3 sm:p-0 rounded-xl bg-white/50 sm:bg-transparent dark:bg-[#1A1816]/50 sm:dark:bg-transparent border border-[#E7E2D8]/60 sm:border-0 dark:border-[#2C2926]/60 flex flex-col">
              <div className="flex items-center gap-1 text-[#9A784E] mb-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#181818] dark:text-[#FAF8F5] tabular-nums">
                  4.7
                </span>
                <span className="text-[10px] sm:text-xs text-[#78716C] dark:text-[#A8A29E]">/ 5.0</span>
                <div className="flex items-center mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#9A784E] text-[#9A784E]" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#44403C] dark:text-[#D6D3D1] leading-tight">
                {isAr ? '+131 مراجعة على Google Maps' : '+131 Verified Google Reviews'}
              </span>
              <span className="text-[10px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                {isAr ? 'تقييمات موثقة من عملاء وموكلين' : 'Documented real feedback'}
              </span>
            </div>

            {/* Stat 2: Legal Experience */}
            <div className="p-3 sm:p-0 rounded-xl bg-white/50 sm:bg-transparent dark:bg-[#1A1816]/50 sm:dark:bg-transparent border border-[#E7E2D8]/60 sm:border-0 dark:border-[#2C2926]/60 flex flex-col">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#181818] dark:text-[#FAF8F5] tabular-nums">
                  +5
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#9A784E]">
                  {isAr ? 'سنوات' : 'Years'}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#44403C] dark:text-[#D6D3D1] leading-tight">
                {isAr ? 'خبرة وتمثيل قضائي متواصل' : 'Judicial Experience'}
              </span>
              <span className="text-[10px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                {isAr ? 'ترافع وصياغة بحجة نظامية راسخة' : 'Comprehensive courtroom advocacy'}
              </span>
            </div>

            {/* Stat 3: Ministry of Justice License */}
            <div className="p-3 sm:p-0 rounded-xl bg-white/50 sm:bg-transparent dark:bg-[#1A1816]/50 sm:dark:bg-transparent border border-[#E7E2D8]/60 sm:border-0 dark:border-[#2C2926]/60 flex flex-col">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#181818] dark:text-[#FAF8F5] tabular-nums">
                  42691
                </span>
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#44403C] dark:text-[#D6D3D1] leading-tight">
                {isAr ? 'ترخيص رسمي معتمد' : 'Official Ministry License'}
              </span>
              <span className="text-[10px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                {isAr ? 'معتمدة للمرافعة والاستشارات' : 'Authorized for litigation'}
              </span>
            </div>

            {/* Stat 4: Dual Working Shifts */}
            <div className="p-3 sm:p-0 rounded-xl bg-white/50 sm:bg-transparent dark:bg-[#1A1816]/50 sm:dark:bg-transparent border border-[#E7E2D8]/60 sm:border-0 dark:border-[#2C2926]/60 flex flex-col">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#181818] dark:text-[#FAF8F5] tabular-nums">
                  2
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#9A784E]">
                  {isAr ? 'فترتان يومياً' : 'Daily Shifts'}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#44403C] dark:text-[#D6D3D1] leading-tight">
                {isAr ? 'صباحية ومسائية' : 'Morning & Evening'}
              </span>
              <span className="text-[10px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                {isAr ? 'تواصل وتنسيق سريع عبر الواتساب' : 'Continuous client communication'}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
