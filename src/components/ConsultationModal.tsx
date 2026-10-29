import React, { useState } from 'react';
import { Language, BookingFormData } from '../types';
import { LEGAL_SERVICES, FIRM_DETAILS } from '../data/lawFirmData';
import { generateWhatsAppConsultationUrl, OFFICIAL_PHONE } from '../utils/whatsapp';
import { X, Send, PhoneCall, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;
  const isAr = language === 'ar';

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    serviceId: 'diwan-al-mazalim',
    preferredShift: 'evening',
    consultationType: 'office',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert(isAr ? 'يرجى إكمال الاسم ورقم الجوال' : 'Please complete name and phone number');
      return;
    }

    const selectedServiceObj = LEGAL_SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = selectedServiceObj
      ? (isAr ? selectedServiceObj.titleAr : selectedServiceObj.titleEn)
      : 'استشارة قانونية';

    const url = generateWhatsAppConsultationUrl(formData, serviceName, language);
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] p-6 sm:p-7 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E2D8] dark:border-[#2A2825]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#9A784E]/15 border border-[#9A784E]/30 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-[#9A784E]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#181818] dark:text-[#FAF8F5]">
                {isAr ? 'حجز موعد استشارة قانونية' : 'Book Legal Consultation'}
              </h3>
              <p className="text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                {isAr ? 'مكتب المحامية أريج المجنوني - مكة المكرمة' : 'Areej Al-Majnuni Law Firm - Makkah'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#181818] dark:hover:text-white rounded-lg hover:bg-[#EAE6DE] dark:hover:bg-[#252220] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-[#181818] dark:text-[#FAF8F5]">
                {isAr ? 'تم فتح تطبيق الواتساب بنجاح' : 'WhatsApp opened successfully'}
              </h4>
              <p className="text-xs text-[#78716C] dark:text-[#A8A29E]">
                {isAr ? 'جاري تحويلك للمحادثة مع المحامية...' : 'Connecting you with the advocate...'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                  {isAr ? 'الخدمة المطلوبة' : 'Service'}
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                >
                  {LEGAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {isAr ? s.titleAr : s.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                    {isAr ? 'الاسم الكريم *' : 'Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isAr ? 'اسمك الكريم' : 'Your name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                    {isAr ? 'رقم الجوال *' : 'Phone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="05XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                  {isAr ? 'الفترة المفضلة' : 'Preferred Shift'}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredShift: 'morning' })}
                    className={`p-2 rounded-lg border text-center transition-all ${
                      formData.preferredShift === 'morning'
                        ? 'bg-[#9A784E]/15 border-[#9A784E] font-bold text-[#9A784E]'
                        : 'bg-white dark:bg-[#201E1C] border-[#DDD7CC] dark:border-[#333]'
                    }`}
                  >
                    {isAr ? 'الصباحية (9ص-12ظ)' : 'Morning (9-12)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredShift: 'evening' })}
                    className={`p-2 rounded-lg border text-center transition-all ${
                      formData.preferredShift === 'evening'
                        ? 'bg-[#9A784E]/15 border-[#9A784E] font-bold text-[#9A784E]'
                        : 'bg-white dark:bg-[#201E1C] border-[#DDD7CC] dark:border-[#333]'
                    }`}
                  >
                    {isAr ? 'المسائية (5م-11م)' : 'Evening (5-11)'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                  {isAr ? 'نبذة عن الموضوع' : 'Case Brief'}
                </label>
                <textarea
                  rows={2}
                  placeholder={isAr ? 'اكتب نبذة مختصرة...' : 'Short details...'}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>{isAr ? 'إرسال عبر الواتساب ومتابعة الموعد' : 'Send via WhatsApp'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#E7E2D8] dark:border-[#2A2825] flex items-center justify-between text-[11px] text-[#78716C] dark:text-[#A8A29E]">
          <span>{isAr ? 'أو تواصل هاتفياً مباشرة:' : 'Or call directly:'}</span>
          <a
            href={`tel:${OFFICIAL_PHONE}`}
            className="font-bold text-[#9A784E] dark:text-[#C2A273] hover:underline tabular-nums"
            dir="ltr"
          >
            {FIRM_DETAILS.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
