import React, { useState, useEffect } from 'react';
import { FIRM_DETAILS, LEGAL_SERVICES } from '../data/lawFirmData';
import { Language, BookingFormData, LegalService } from '../types';
import { getMakkahOfficeStatus } from '../utils/workingHours';
import { generateWhatsAppConsultationUrl, OFFICIAL_PHONE, OFFICIAL_EMAIL } from '../utils/whatsapp';
import { Clock, Send, CheckCircle2, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

interface BookingSectionProps {
  language: Language;
  preselectedService?: LegalService | null;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  language,
  preselectedService,
}) => {
  const isAr = language === 'ar';
  
  // Real-time Makkah office status
  const [officeStatus, setOfficeStatus] = useState(getMakkahOfficeStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setOfficeStatus(getMakkahOfficeStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    serviceId: preselectedService ? preselectedService.id : 'diwan-al-mazalim',
    preferredShift: 'evening',
    consultationType: 'office',
    details: '',
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedService.id }));
    }
  }, [preselectedService]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, phone: val }));
    if (phoneError) setPhoneError('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, name: val }));
    if (nameError) setNameError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setNameError(isAr ? 'يرجى إدخال الاسم الكريم' : 'Please enter your full name');
      return;
    }

    if (!formData.phone.trim()) {
      setPhoneError(isAr ? 'يرجى إدخال رقم الجوال للتواصل' : 'Please provide your mobile number');
      return;
    }

    const selectedServiceObj = LEGAL_SERVICES.find((s) => s.id === formData.serviceId);
    const serviceName = selectedServiceObj
      ? (isAr ? selectedServiceObj.titleAr : selectedServiceObj.titleEn)
      : (isAr ? 'استشارة قانونية عامة' : 'General Legal Consultation');

    const whatsappUrl = generateWhatsAppConsultationUrl(formData, serviceName, language);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section id="booking" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] uppercase mb-1.5 sm:mb-2 block font-sans-ar">
            {isAr ? 'حجز موعد واستشارة فورية' : 'APPOINTMENT & CONSULTATION FUNNEL'}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight leading-tight">
            {isAr ? 'مواعيد الدوام الرسمية ونموذج الحجز المباشر' : 'Official Working Hours & Direct Booking'}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#57534E] dark:text-[#A8A29E] mt-2 sm:mt-3 leading-relaxed">
            {isAr
              ? 'احجز جلستك القانونية حضورياً بمقر المكتب في حي الشوقية بمكة المكرمة، أو حدد موعداً هاتفياً للاستشارة عبر الواتساب مع المحامية أريج المجنوني.'
              : 'Schedule an in-person session at our Al-Shawqiyyah office in Makkah, or book a phone consultation with Advocate Areej Al-Majnuni.'}
          </p>
        </div>

        {/* 2-Column Split: Working Hours & Live Status (5 cols) + Booking Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Working Hours Card & Office Live Status */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full">
            
            {/* Live Office Status Card */}
            <div className="rounded-2xl p-4 sm:p-7 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E2D8] dark:border-[#2A2825] gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#9A784E] shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-[#181818] dark:text-[#FAF8F5]">
                    {isAr ? 'حالة المكتب المباشرة الآن' : 'Live Office Status'}
                  </h3>
                </div>
                <div className="text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] tabular-nums font-medium whitespace-nowrap">
                  {isAr ? 'توقيت مكة:' : 'Makkah:'} {officeStatus.makkahTimeFormatted}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="py-4">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className={`w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 ${officeStatus.isOpen ? 'bg-emerald-500 ring-4 ring-emerald-500/20 animate-pulse' : 'bg-amber-500'}`} />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#181818] dark:text-[#FAF8F5]">
                      {officeStatus.isOpen
                        ? (isAr ? 'المكتب مفتوح لاستقبالكم حالياً' : 'Office Is Currently Open')
                        : (isAr ? 'المكتب مغلق حالياً (استقبال الرسائل متاح)' : 'Office Closed - WhatsApp Open')}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                      {isAr ? officeStatus.nextShiftTimeAr : officeStatus.nextShiftTimeEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shift Schedule Table */}
              <div className="space-y-2.5 pt-2 border-t border-[#E7E2D8] dark:border-[#2A2825]">
                {/* Morning Shift */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825] gap-2">
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5] block truncate">
                      {isAr ? 'الفترة الصباحية' : 'Morning Shift'}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-[#A8A29E] block truncate">
                      {isAr ? 'استشارات حضورية ومتابعة قضايا' : 'In-person consultations'}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#9A784E] dark:text-[#C2A273] tabular-nums whitespace-nowrap">
                      {isAr ? '9:00 ص – 12:00 ظ' : '9:00 AM – 12:00 PM'}
                    </span>
                  </div>
                </div>

                {/* Evening Shift */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825] gap-2">
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5] block truncate">
                      {isAr ? 'الفترة المسائية' : 'Evening Shift'}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-[#A8A29E] block truncate">
                      {isAr ? 'استقبال المراجعين وجلسات الاستشارة' : 'Client meetings'}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#9A784E] dark:text-[#C2A273] tabular-nums whitespace-nowrap">
                      {isAr ? '5:00 م – 11:00 م' : '5:00 PM – 11:00 PM'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location Quick Summary */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#9A784E]/10 dark:bg-[#9A784E]/15 border border-[#9A784E]/25">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#9A784E] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#44403C] dark:text-[#D6D3D1] leading-relaxed">
                    <strong className="text-[#181818] dark:text-[#FAF8F5] block mb-0.5">
                      {isAr ? 'مقر المكتب بمكة المكرمة:' : 'Office Location in Makkah:'}
                    </strong>
                    {isAr ? FIRM_DETAILS.addressDetailedAr : FIRM_DETAILS.addressDetailedEn}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="rounded-2xl p-4 sm:p-6 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] space-y-2.5">
              <h4 className="text-[11px] sm:text-xs font-bold tracking-wider text-[#78716C] dark:text-[#A8A29E] uppercase">
                {isAr ? 'قنوات الاتصال المباشر' : 'Direct Channels'}
              </h4>

              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825] hover:border-[#9A784E] transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#9A784E] shrink-0" />
                  <span className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5] tabular-nums" dir="ltr">
                    {FIRM_DETAILS.phoneDisplay}
                  </span>
                </div>
                <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                  {isAr ? 'اتصال مباشر' : 'Direct Call'}
                </span>
              </a>

              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825] hover:border-[#9A784E] transition-colors min-h-[44px]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#9A784E] shrink-0" />
                  <span className="text-xs font-medium text-[#181818] dark:text-[#FAF8F5] truncate">
                    {OFFICIAL_EMAIL}
                  </span>
                </div>
                <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E] shrink-0">
                  {isAr ? 'مراسلة' : 'Email'}
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: WhatsApp Interactive Consultation Booking Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl p-4 sm:p-7 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] shadow-sm">
              
              <div className="pb-4 sm:pb-5 border-b border-[#E7E2D8] dark:border-[#2A2825] mb-5">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar leading-tight">
                  {isAr ? 'نموذج طلب الخدمة والاستشارة (مربوط بالواتساب)' : 'Service & Consultation Request Form'}
                </h3>
                <p className="text-xs text-[#78716C] dark:text-[#A8A29E] mt-1 leading-relaxed">
                  {isAr
                    ? 'املأ البيانات وسيقوم النظام بتنسيق رسالة حجز رسمية تفتح محادثة واتساب مباشرة مع المحامية.'
                    : 'Fill in details to generate a structured booking message sent directly to Advocate Areej via WhatsApp.'}
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300">
                      {isAr ? 'تم فتح تطبيق الواتساب بنجاح!' : 'WhatsApp opened successfully!'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                      {isAr
                        ? 'إذا لم تفتح المحادثة تلقائياً، يمكنك إرسال الرسالة مباشرة على الرقم +966548989025.'
                        : 'If WhatsApp did not trigger, you can reach out directly to +966548989025.'}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Field 1: Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                    {isAr ? 'نوع الخدمة القانونية المطلوبة *' : 'Requested Legal Service *'}
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                  >
                    {LEGAL_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {isAr ? `${s.titleAr} (${s.number})` : s.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 2 & 3: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                      {isAr ? 'الاسم الكريم *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? 'أدخل اسمك الكريم' : 'Your full name'}
                      value={formData.name}
                      onChange={handleNameChange}
                      className={`w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-[#201E1C] border rounded-xl text-[#181818] dark:text-[#FAF8F5] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#9A784E] ${
                        nameError ? 'border-red-500' : 'border-[#DDD7CC] dark:border-[#333333]'
                      }`}
                    />
                    {nameError && (
                      <span className="text-[11px] text-red-600 mt-1 block">{nameError}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                      {isAr ? 'رقم الجوال (واتساب) *' : 'Mobile Number (WhatsApp) *'}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="05XXXXXXXX / +966..."
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-[#201E1C] border rounded-xl text-[#181818] dark:text-[#FAF8F5] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#9A784E] ${
                        phoneError ? 'border-red-500' : 'border-[#DDD7CC] dark:border-[#333333]'
                      }`}
                    />
                    {phoneError && (
                      <span className="text-[11px] text-red-600 mt-1 block">{phoneError}</span>
                    )}
                  </div>
                </div>

                {/* Field 4: Preferred Shift / Slot */}
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                    {isAr ? 'فترة التواصل أو الزيارة المفضلة *' : 'Preferred Shift / Time Slot *'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {
                        id: 'morning',
                        titleAr: 'الفترة الصباحية',
                        subAr: '9:00 ص – 12:00 ظ',
                        titleEn: 'Morning Shift',
                        subEn: '9:00 AM – 12:00 PM',
                      },
                      {
                        id: 'evening',
                        titleAr: 'الفترة المسائية',
                        subAr: '5:00 م – 11:00 م',
                        titleEn: 'Evening Shift',
                        subEn: '5:00 PM – 11:00 PM',
                      },
                      {
                        id: 'office_visit',
                        titleAr: 'زيارة مقر الشوقية',
                        subAr: 'الدور الثاني - مكتب B9',
                        titleEn: 'Office HQ Visit',
                        subEn: '2nd Floor - Office B9',
                      },
                    ].map((shift) => (
                      <button
                        type="button"
                        key={shift.id}
                        onClick={() => setFormData({ ...formData, preferredShift: shift.id as any })}
                        className={`p-2.5 text-right rtl:text-right ltr:text-left rounded-xl border transition-all cursor-pointer min-h-[44px] ${
                          formData.preferredShift === shift.id
                            ? 'bg-[#9A784E]/15 border-[#9A784E] text-[#181818] dark:text-[#FAF8F5] ring-1 ring-[#9A784E]'
                            : 'bg-white dark:bg-[#201E1C] border-[#DDD7CC] dark:border-[#333333] text-[#57534E] dark:text-[#A8A29E]'
                        }`}
                      >
                        <span className="text-xs font-bold block">
                          {isAr ? shift.titleAr : shift.titleEn}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-[#A8A29E] block mt-0.5 tabular-nums">
                          {isAr ? shift.subAr : shift.subEn}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 5: Consultation Type */}
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                    {isAr ? 'صيغة الاستشارة' : 'Consultation Mode'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'office', labelAr: 'حضور بمقر المكتب', labelEn: 'In-person at Office' },
                      { id: 'whatsapp_call', labelAr: 'هاتفية / عبر الواتساب', labelEn: 'Phone / WhatsApp' },
                      { id: 'written', labelAr: 'مذكرة رأي نظامي مكتوبة', labelEn: 'Written Legal Memo' },
                    ].map((mode) => (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() => setFormData({ ...formData, consultationType: mode.id as any })}
                        className={`p-2.5 text-center text-xs font-semibold rounded-xl border transition-all cursor-pointer min-h-[40px] flex items-center justify-center ${
                          formData.consultationType === mode.id
                            ? 'bg-[#9A784E] text-white border-[#9A784E]'
                            : 'bg-white dark:bg-[#201E1C] border-[#DDD7CC] dark:border-[#333333] text-[#57534E] dark:text-[#A8A29E]'
                        }`}
                      >
                        {isAr ? mode.labelAr : mode.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 6: Brief Case Details */}
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1">
                    {isAr ? 'ملخص مختصر للموضوع أو القضية' : 'Case / Subject Brief'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      isAr
                        ? 'وضح بإيجاز طبيعة الاستشارة أو النزاع أو العقد المطلوب صياغته...'
                        : 'Briefly state your legal inquiry, dispute, or contract need...'
                    }
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-md shadow-emerald-700/20 transition-all cursor-pointer min-h-[44px] text-center"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>
                      {isAr
                        ? 'إرسال طلب الحجز عبر الواتساب (+966548989025)'
                        : 'Submit Booking via WhatsApp (+966548989025)'}
                    </span>
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-[#A8A29E] text-center mt-2 leading-relaxed">
                    {isAr
                      ? 'الرسالة تتولد منسقة ومجهزة؛ يمكنك مراجعتها وتعديلها في تطبيق الواتساب قبل الإرسال.'
                      : 'The message is automatically structured; you can review it before sending.'}
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
