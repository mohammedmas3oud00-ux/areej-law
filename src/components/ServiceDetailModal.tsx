import React from 'react';
import { LegalService, Language } from '../types';
import { X, CheckCircle2, ChevronLeft, ChevronRight, Scale, ShieldCheck } from 'lucide-react';

interface ServiceDetailModalProps {
  service: LegalService | null;
  language: Language;
  onClose: () => void;
  onRequestService: (service: LegalService) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  language,
  onClose,
  onRequestService,
}) => {
  if (!service) return null;
  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-5 border-b border-[#E7E2D8] dark:border-[#2A2825]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] bg-[#9A784E]/10 px-2.5 py-1 rounded-md">
              {service.number}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar">
              {isAr ? service.titleAr : service.titleEn}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#181818] dark:hover:text-white rounded-lg hover:bg-[#EAE6DE] dark:hover:bg-[#252220] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="py-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#44403C] dark:text-[#D6D3D1] leading-relaxed">
          <div>
            <h4 className="text-xs font-bold text-[#86673E] dark:text-[#C2A273] uppercase mb-1.5">
              {isAr ? 'نطاق الخدمة والتمثيل' : 'Scope of Service'}
            </h4>
            <p className="text-[#33302C] dark:text-[#E7E5E4] font-medium leading-relaxed">
              {isAr ? service.fullDescAr : service.fullDescEn}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#86673E] dark:text-[#C2A273] uppercase mb-2">
              {isAr ? 'أبرز ما تشمله الخدمة:' : 'Key Deliverables & Protections:'}
            </h4>
            <div className="space-y-2">
              {(isAr ? service.featuresAr : service.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EAE6DE] dark:border-[#2C2926]">
                  <CheckCircle2 className="w-4 h-4 text-[#9A784E] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#9A784E]/10 dark:bg-[#9A784E]/15 border border-[#9A784E]/25 text-xs text-[#57534E] dark:text-[#A8A29E] flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#9A784E] shrink-0" />
            <span>
              {isAr
                ? 'مكتب معتمد ومرخص من وزارة العدل برقم 42691، يحافظ على سرية بياناتك بالكامل.'
                : 'Licensed by the Saudi Ministry of Justice #42691. Complete confidentiality guaranteed.'}
            </span>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-5 border-t border-[#E7E2D8] dark:border-[#2A2825] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-white rounded-xl transition-colors"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
          
          <button
            onClick={() => {
              onClose();
              onRequestService(service);
            }}
            className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#9A784E] hover:bg-[#86673E] active:bg-[#735632] rounded-xl transition-all shadow-sm"
          >
            <span>{isAr ? 'طلب هذه الخدمة الآن' : 'Request This Service'}</span>
            {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </div>
  );
};
