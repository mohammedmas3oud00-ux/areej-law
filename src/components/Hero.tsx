import React from 'react';
import { FIRM_DETAILS } from '../data/lawFirmData';
import { Language } from '../types';
import { ShieldCheck, Scale, Award, MessageCircle, CalendarCheck, MapPin, ChevronLeft, ChevronRight, Star } from 'lucide-react';
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
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6 w-full">
            
            {/* Trust Marker (Unboxed text with subtle separator per zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-semibold text-[#86673E] dark:text-[#C2A273] tracking-wide leading-relaxed">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9A784E] shrink-0" />
                <span>{isAr ? 'مرخصة من وزارة العدل' : 'Licensed by Saudi MOJ'}</span>
              </span>
              <span aria-hidden="true" className="text-[#9A784E]/60">·</span>
              <span>{isAr ? 'ترخيص رقم 42691' : 'License #42691'}</span>
              <span aria-hidden="true" className="text-[#9A784E]/60">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9A784E] shrink-0" />
                <span>{isAr ? 'مكة المكرمة' : 'Makkah'}</span>
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#181818] dark:text-[#FAF8F5] leading-snug sm:leading-[1.28] tracking-tight font-sans-ar text-balance">
              {isAr ? (
                <>
                  تقديم جميع الخدمات القانونية بدقة ومهنية عالية،{' '}
                  <span className="text-[#9A784E] dark:text-[#C2A273] underline decoration-[#9A784E]/40 underline-offset-4 sm:underline-offset-8">
                    وحماية حقوقكم
                  </span>{' '}
                  أمام كافة الجهات القضائية
                </>
              ) : (
                <>
                  Delivering premier legal advocacy with precision and integrity,{' '}
                  <span className="text-[#9A784E] dark:text-[#C2A273] underline decoration-[#9A784E]/40 underline-offset-4 sm:underline-offset-8">
                    safeguarding your interests
                  </span>{' '}
                  across all Saudi courts
                </>
              )}
            </h1>

            {/* Subtitle / Value Explanation */}
            <p className="text-sm sm:text-base lg:text-lg text-[#57534E] dark:text-[#A8A29E] leading-relaxed max-w-2xl font-normal">
              {isAr
                ? 'مكتب المحامية أريج بنت عويض المجنوني يقدم تمثيلاً قضائياً راسخاً، وترافعاً متخصصاً في قضايا ديوان المظالم، وصياغة محكمة للمذكرات واللوائح والعقود، واستشارات نظامية تضمن سلامة قراراتكم.'
                : 'Areej Aweid Al-Majnuni Law Firm provides authoritative judicial representation, specialized litigation before the Board of Grievances, expert drafting of defense briefs and commercial contracts, and preventative counsel in Makkah.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold text-white bg-[#9A784E] hover:bg-[#86673E] active:bg-[#735632] rounded-xl shadow-md shadow-[#9A784E]/25 transition-all transform active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9A784E] cursor-pointer min-h-[44px]"
              >
                <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>{isAr ? 'حجز موعد أو استشارة فورية' : 'Book a Consultation Now'}</span>
                {isAr ? <ChevronLeft className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold text-[#181818] dark:text-[#F5F5F4] bg-[#EFECE6] dark:bg-[#1E1E1E] hover:bg-[#E5E0D5] dark:hover:bg-[#282828] border border-[#DDD7CC] dark:border-[#333333] rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{isAr ? 'تواصل مباشر عبر الواتساب' : 'Direct WhatsApp Chat'}</span>
              </a>
            </div>

            {/* Quick Micro-Assurance Notes */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E] shrink-0" />
                {isAr ? 'سرية وخصوصية تامة' : 'Strict Confidentiality'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E] shrink-0" />
                {isAr ? 'مقر مهيأ بحي الشوقية' : 'Executive Makkah Office'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A784E] shrink-0" />
                {isAr ? 'ترافع بكافة محاكم المملكة' : 'Nationwide Representation'}
              </span>
            </div>

          </div>

          {/* Focal Visual Carrier (5 cols on lg) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl p-4 sm:p-7 bg-gradient-to-b from-[#FAF8F5] to-[#F1EDE4] dark:from-[#1A1816] dark:to-[#141210] border border-[#E7E2D8] dark:border-[#2C2926] shadow-xl shadow-black/5 dark:shadow-black/40 overflow-hidden">
              
              {/* Gold Ambient Corner Accent */}
              <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-bl from-[#9A784E]/20 to-transparent rounded-tr-2xl pointer-events-none" />

              {/* Header of the Official Firm Card */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#E7E2D8] dark:border-[#2A2825] gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#9A784E]/15 border border-[#9A784E]/30 flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-sm sm:text-base font-bold text-[#181818] dark:text-[#F5F5F4] leading-tight truncate">
                      {isAr ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5 truncate">
                      {isAr ? 'ترخيص وزارة العدل رقم 42691' : 'Ministry of Justice License #42691'}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-[#86673E] dark:text-[#C2A273] bg-[#9A784E]/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#9A784E]/20 whitespace-nowrap">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>{isAr ? 'معتمد رسمياً' : 'Verified'}</span>
                  </span>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="py-4 sm:py-5 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 dark:bg-[#1E1C1A]/80 border border-[#EBE7DF] dark:border-[#2E2A27]">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#9A784E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#181818] dark:text-[#E7E5E4]">
                      {isAr ? 'خبرة قضائية ممتدة وترافع رصين' : 'Distinguished Judicial Advocacy'}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5 leading-relaxed">
                      {isAr
                        ? 'تمثيل مخلص ومرافعة نظامية حكيمة أمام المحاكم العامة والتجارية والعمالية.'
                        : 'Dedicated representation before Commercial, General, and Labor courts.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 dark:bg-[#1E1C1A]/80 border border-[#EBE7DF] dark:border-[#2E2A27]">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-[#9A784E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#181818] dark:text-[#E7E5E4]">
                      {isAr ? 'تخصص متعمق بديوان المظالم' : 'Board of Grievances Mastery'}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5 leading-relaxed">
                      {isAr
                        ? 'إلغاء القرارات الإدارية ومنازعات العقود الحكومية واسترداد الحقوق المشروعة.'
                        : 'Administrative disputes, contract nullification, and compensation.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 dark:bg-[#1E1C1A]/80 border border-[#EBE7DF] dark:border-[#2E2A27]">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#9A784E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#181818] dark:text-[#E7E5E4]">
                      {isAr ? 'مقر راقٍ ومجهز بمكة المكرمة' : 'Executive Headquarters in Makkah'}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5 leading-relaxed">
                      {isAr
                        ? 'حي الشوقية، الدور الثاني، مكتب (B9) - مواقف متوفرة ومصعد وراحة تامة.'
                        : 'Al-Shawqiyyah, 2nd Floor, Office B9 with parking & private meeting suites.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="pt-3 sm:pt-4 border-t border-[#E7E2D8] dark:border-[#2A2825] flex items-center justify-between text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>{isAr ? 'استقبال الاستشارات متاح' : 'Consultations Available'}</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="font-semibold text-[#86673E] dark:text-[#C2A273] hover:underline flex items-center gap-0.5 sm:gap-1 cursor-pointer"
                >
                  <span>{isAr ? 'احجز جلستك الآن' : 'Schedule Session'}</span>
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
