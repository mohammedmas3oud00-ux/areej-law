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
        return <Landmark className="w-6 h-6 text-[#9A784E]" />;
      case 'litigation-defense':
        return <Scale className="w-6 h-6 text-[#9A784E]" />;
      case 'drafting-pleadings':
        return <FileText className="w-6 h-6 text-[#9A784E]" />;
      case 'legal-consultations':
        return <ShieldCheck className="w-6 h-6 text-[#9A784E]" />;
      case 'contract-drafting':
        return <FileText className="w-6 h-6 text-[#9A784E]" />;
      default:
        return <Scale className="w-6 h-6 text-[#9A784E]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#EFECE6]/40 dark:bg-[#161412]/50 border-y border-[#E7E2D8] dark:border-[#242220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] uppercase mb-2 block font-sans-ar">
              {isAr ? 'منظومة الخدمات المتكاملة' : 'COMPREHENSIVE LEGAL PRACTICE'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight">
              {isAr ? 'جميع الخدمات القانونية والتمثيل القضائي' : 'Complete Legal Services & Judicial Representation'}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] dark:text-[#A8A29E] mt-3 leading-relaxed">
              {isAr
                ? 'خدمات نظامية شاملة تُبنى على أسس شرعية وأنظمة سعودية حديثة، مصممة لحفظ الحقوق وصون الأموال والمصالح بدقة متناهية.'
                : 'Thorough legal services grounded in contemporary Saudi statutes, crafted to protect rights, assets, and strategic interests.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Permitted Segmented Control per Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#E7E2D8] dark:bg-[#201E1C] rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] ${
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

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isFeatured = service.id === 'diwan-al-mazalim' && activeFilter === 'all';
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] transition-all hover:border-[#C2A273] dark:hover:border-[#9A784E]/70 group hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#F7F5F0] via-[#F4EFE6] to-[#EDE7DA] dark:from-[#1C1A17] dark:to-[#171513]' : ''
                }`}
              >
                {/* Top Row: Editorial Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273]">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#9A784E]/10 dark:bg-[#9A784E]/15 border border-[#9A784E]/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar mb-3 group-hover:text-[#9A784E] dark:group-hover:text-[#C2A273] transition-colors">
                    {isAr ? service.titleAr : service.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed mb-6">
                    {isAr ? service.shortDescAr : service.shortDescEn}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {(isAr ? service.featuresAr : service.featuresEn).slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#44403C] dark:text-[#D6D3D1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9A784E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Actions: "اطلب الخدمة الآن" & "تفاصيل الخدمة" */}
                <div className="pt-5 border-t border-[#E7E2D8] dark:border-[#2A2825] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-white bg-[#9A784E] hover:bg-[#86673E] active:bg-[#735632] rounded-xl transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E]"
                  >
                    <span>{isAr ? 'اطلب الخدمة الآن' : 'Request Service'}</span>
                    {isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onViewServiceDetails(service)}
                    className="flex items-center gap-1 px-3 py-2.5 text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAF8F5] hover:bg-[#EFECE6] dark:hover:bg-[#242220] rounded-xl border border-[#E0DBD0] dark:border-[#2F2C29] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E]"
                  >
                    <span>{isAr ? 'التفاصيل' : 'Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-[#F7F5F0] dark:bg-[#181614] border border-[#E7E2D8] dark:border-[#2C2926] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#9A784E]/15 border border-[#9A784E]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#9A784E]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#181818] dark:text-[#FAF8F5]">
                {isAr ? 'تعهد الأمانة والسرية والاحترافية' : 'Pledge of Integrity & Absolute Confidentiality'}
              </h4>
              <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                {isAr
                  ? 'كافة الاستشارات والملفات تخضع للسرية المهنية المشددة وفق أنظمة وزارة العدل والمحاماة السعودية.'
                  : 'All client communications and documents are protected under professional legal privilege.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#booking"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#86673E] dark:text-[#C2A273] hover:text-[#181818] dark:hover:text-white border border-[#9A784E]/30 hover:border-[#9A784E] rounded-xl transition-all"
            >
              {isAr ? 'مواعيد الاستقبال بالمكتب' : 'Office Reception Hours'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
