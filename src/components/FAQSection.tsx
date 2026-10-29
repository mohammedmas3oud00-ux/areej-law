import React, { useState } from 'react';
import { FAQS } from '../data/lawFirmData';
import { Language } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] uppercase mb-2 block font-sans-ar">
            {isAr ? 'إجابات واضحة لأسئلتكم' : 'COMMON INQUIRIES & FAQ'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight">
            {isAr ? 'الأسئلة الشائعة حول الاستشارات والقضايا' : 'Frequently Asked Legal Questions'}
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] mt-3">
            {isAr
              ? 'توضيحات هامة بشأن آليات العمل، قضايا ديوان المظالم، والسرية المهنية للموكلين.'
              : 'Key explanations regarding legal practice methods, administrative claims, and client confidentiality.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E7E2D8] dark:border-[#2C2926] bg-[#F7F5F0] dark:bg-[#1A1816] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-right rtl:text-right ltr:text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E]"
                >
                  <span className="text-sm sm:text-base font-bold text-[#181818] dark:text-[#FAF8F5] leading-snug font-sans-ar">
                    {isAr ? faq.questionAr : faq.questionEn}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white dark:bg-[#242220] border border-[#DDD7CC] dark:border-[#33302C] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#9A784E]' : 'text-[#78716C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 animate-in fade-in duration-200">
                    <div className="pt-3 border-t border-[#EAE6DE] dark:border-[#282522]">
                      <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                        {isAr ? faq.answerAr : faq.answerEn}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
