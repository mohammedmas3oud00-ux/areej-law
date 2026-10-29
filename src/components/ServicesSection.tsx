import React, { useState } from 'react';
import { LEGAL_SERVICES } from '../data/lawFirmData';
import { LegalService, Language } from '../types';
import { Scale, FileText, Landmark, ShieldCheck, ArrowUpRight, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface ServicesSectionProps {
  language: Language;
  onSelectService: (service: LegalService) => void;
  onViewServiceDetails: (service: LegalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onSelectService,
  onViewServiceDetails,
}) => {
  const isAr = language === 'ar';
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = isAr
    ? [
        { id: 'all', label: 'جميع الخدمات' },
        { id: 'administrative', label: 'ديوان المظالم' },
        { id: 'litigation', label: 'المرافعات القضائية' },
        { id: 'drafting', label: 'صياغة اللوائح' },
        { id: 'consultation', label: 'الاستشارات' },
        { id: 'contracts', label: 'صياغة العقود' },
      ]
    : [
        { id: 'all', label: 'All Services' },
        { id: 'administrative', label: 'Board of Grievances' },
        { id: 'litigation', label: 'Litigation' },
        { id: 'drafting', label: 'Pleadings & Briefs' },
        { id: 'consultation', label: 'Consultations' },
        { id: 'contracts', label: 'Contracts' },
      ];

  const filteredServices =
    activeFilter === 'all'
      ? LEGAL_SERVICES
      : LEGAL_SERVICES.filter((s) => s.category === activeFilter);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'diwan-al-mazalim':
        return <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />;
      case 'litigation-defense':
        return <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />;
      case 'drafting-pleadings':
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />;
      case 'legal-consultations':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />;
      case 'contract-drafting':
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />;
      default:
        return <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 bg-[#EFECE6]/40 dark:bg-[#161412]/50 border-y border-[#E7E2D8] dark:border-[#242220] overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] uppercase mb-1.5 sm:mb-2 block font-sans-ar">
              {isAr ? 'منظومة الخدمات المتكاملة' : 'COMPREHENSIVE LEGAL PRACTICE'}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight leading-tight">
              {isAr ? 'جميع الخدمات القانونية والتمثيل القضائي' : 'Complete Legal Services & Judicial Representation'}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#57534E] dark:text-[#A8A29E] mt-2 sm:mt-3 leading-relaxed">
              {isAr
                ? 'خدمات نظامية شاملة تُبنى على أسس شرعية وأنظمة سعودية حديثة، مصممة لحفظ الحقوق وصون الأموال والمصالح بدقة متناهية.'
                : 'Thorough legal services grounded in contemporary Saudi statutes, crafted to protect rights, assets, and strategic interests.'}
            </p>
          </div>

          {/* Horizontally scrollable on mobile, compact on desktop */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 p-1 sm:p-1.5 bg-[#E7E2D8] dark:bg-[#201E1C] rounded-xl w-max">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] cursor-pointer min-h-[36px] flex items-center ${
                    activeFilter === tab.id
                      ? 'bg-white dark:bg-[#2C2926] text-[#181818] dark:text-[#FAF8F5] shadow-sm'
                      : 'text-[#66615C] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAFAF9]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const isFeatured = service.id === 'diwan-al-mazalim' && activeFilter === 'all';
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-7 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] transition-all hover:border-[#C2A273] dark:hover:border-[#9A784E]/70 group hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#F7F5F0] via-[#F4EFE6] to-[#EDE7DA] dark:from-[#1C1A17] dark:to-[#171513]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273]">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#9A784E]/10 dark:bg-[#9A784E]/15 border border-[#9A784E]/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar mb-2.5 group-hover:text-[#9A784E] dark:group-hover:text-[#C2A273] transition-colors leading-tight">
                    {isAr ? service.titleAr : service.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed mb-5">
                    {isAr ? service.shortDescAr : service.shortDescEn}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {(isAr ? service.featuresAr : service.featuresEn).slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#44403C] dark:text-[#D6D3D1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9A784E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-[#E7E2D8] dark:border-[#2A2825] flex items-center justify-between gap-2.5">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2.5 text-xs font-bold text-white bg-[#9A784E] hover:bg-[#86673E] active:bg-[#735632] rounded-xl transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] cursor-pointer min-h-[40px]"
                  >
                    <span>{isAr ? 'اطلب الخدمة الآن' : 'Request Service'}</span>
                    {isAr ? <ChevronLeft className="w-3.5 h-3.5 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                  </button>

                  <button
                    onClick={() => onViewServiceDetails(service)}
                    className="flex items-center justify-center gap-1 px-3 py-2.5 text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAF8F5] hover:bg-[#EFECE6] dark:hover:bg-[#242220] rounded-xl border border-[#E0DBD0] dark:border-[#2F2C29] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] cursor-pointer min-h-[40px]"
                  >
                    <span>{isAr ? 'التفاصيل' : 'Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-8 sm:mt-12 rounded-2xl p-4 sm:p-7 bg-[#F7F5F0] dark:bg-[#181614] border border-[#E7E2D8] dark:border-[#2C2926] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#9A784E]/15 border border-[#9A784E]/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#9A784E]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#181818] dark:text-[#FAF8F5]">
                {isAr ? 'تعهد الأمانة والسرية والاحترافية' : 'Pledge of Integrity & Absolute Confidentiality'}
              </h4>
              <p className="text-[11px] sm:text-xs md:text-sm text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                {isAr
                  ? 'كافة الاستشارات والملفات تخضع للسرية المهنية المشددة وفق أنظمة وزارة العدل والمحاماة السعودية.'
                  : 'All client communications and documents are protected under professional legal privilege.'}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <a
              href="#booking"
              className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#86673E] dark:text-[#C2A273] hover:text-[#181818] dark:hover:text-white border border-[#9A784E]/30 hover:border-[#9A784E] rounded-xl transition-all"
            >
              {isAr ? 'مواعيد الاستقبال بالمكتب' : 'Office Reception Hours'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
