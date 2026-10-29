import React, { useState, useEffect } from 'react';
import { FIRM_DETAILS, LEGAL_SERVICES } from '../data/lawFirmData';
import { Language, BookingFormData, LegalService } from '../types';
import { getMakkahOfficeStatus } from '../utils/workingHours';
import { generateWhatsAppConsultationUrl, OFFICIAL_PHONE, OFFICIAL_EMAIL } from '../utils/whatsapp';
import { Clock, Send, CheckCircle2, MapPin, Phone, Mail, Calendar, MessageSquare, AlertCircle } from 'lucide-react';

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
    // Update every minute to keep Makkah clock and status accurate
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, phone: val }));
    if (phoneError) setPhoneError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert(isAr ? 'يرجى إدخال الاسم الكريم' : 'Please enter your full name');
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
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] uppercase mb-2 block font-sans-ar">
            {isAr ? 'حجز موعد واستشارة فورية' : 'APPOINTMENT & CONSULTATION FUNNEL'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight">
            {isAr ? 'مواعيد الدوام الرسمية ونموذج الحجز المباشر' : 'Official Working Hours & Direct Booking'}
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] dark:text-[#A8A29E] mt-3 leading-relaxed">
            {isAr
              ? 'احجز جلستك القانونية حضورياً بمقر المكتب في حي الشوقية بمكة المكرمة، أو حدد موعداً هاتفياً للاستشارة عبر الواتساب مع المحامية أريج المجنوني.'
              : 'Schedule an in-person session at our Al-Shawqiyyah office in Makkah, or book a phone consultation with Advocate Areej Al-Majnuni.'}
          </p>
        </div>

        {/* 2-Column Split: Working Hours & Live Status (5 cols) + Booking Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Working Hours Card & Office Live Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Office Status Card */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] shadow-sm">
              <div className="flex items-center justify-between pb-5 border-b border-[#E7E2D8] dark:border-[#2A2825]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#9A784E]" />
                  <h3 className="text-base font-bold text-[#181818] dark:text-[#FAF8F5]">
                    {isAr ? 'حالة المكتب المباشرة الآن' : 'Live Office Status'}
                  </h3>
                </div>
                <div className="text-xs text-[#78716C] dark:text-[#A8A29E] tabular-nums font-medium">
                  {isAr ? 'توقيت مكة:' : 'Makkah Time:'} {officeStatus.makkahTimeFormatted}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="py-5">
                <div className="flex items-center gap-3">
                  <div className={`w-3.5 h-3.5 rounded-full ${officeStatus.isOpen ? 'bg-emerald-500 ring-4 ring-emerald-500/20 animate-pulse' : 'bg-amber-500'}`} />
                  <div>
                    <h4 className="text-sm font-bold text-[#181818] dark:text-[#FAF8F5]">
                      {officeStatus.isOpen
                        ? (isAr ? 'المكتب مفتوح لاستقبالكم حالياً' : 'Office Is Currently Open')
                        : (isAr ? 'المكتب مغلق حالياً (استقبال الرسائل متاح)' : 'Office Closed - WhatsApp Open')}
                    </h4>
                    <p className="text-xs text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                      {isAr ? officeStatus.nextShiftTimeAr : officeStatus.nextShiftTimeEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shift Schedule Table */}
              <div className="space-y-3 pt-3 border-t border-[#E7E2D8] dark:border-[#2A2825]">
                {/* Morning Shift */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825]">
                  <div>
                    <span className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5] block">
                      {isAr ? 'الفترة الصباحية' : 'Morning Shift'}
                    </span>
                    <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                      {isAr ? 'استشارات حضورية ومتابعة قضايا' : 'In-person consultations & hearings'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#9A784E] dark:text-[#C2A273] tabular-nums">
                      {isAr ? '9:00 ص – 12:00 ظ' : '9:00 AM – 12:00 PM'}
                    </span>
                  </div>
                </div>

                {/* Evening Shift */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825]">
                  <div>
                    <span className="text-xs font-bold text-[#181818] dark:text-[#FAF8F5] block">
                      {isAr ? 'الفترة المسائية' : 'Evening Shift'}
                    </span>
                    <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                      {isAr ? 'استقبال المراجعين وجلسات الاستشارة' : 'Client meetings & consultations'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#9A784E] dark:text-[#C2A273] tabular-nums">
                      {isAr ? '5:00 م – 11:00 م' : '5:00 PM – 11:00 PM'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location Quick Summary */}
              <div className="mt-5 p-4 rounded-xl bg-[#9A784E]/10 dark:bg-[#9A784E]/15 border border-[#9A784E]/25">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#9A784E] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#44403C] dark:text-[#D6D3D1]">
                    <strong className="text-[#181818] dark:text-[#FAF8F5] block mb-0.5">
                      {isAr ? 'مقر المكتب بمكة المكرمة:' : 'Office Location in Makkah:'}
                    </strong>
                    {isAr ? FIRM_DETAILS.addressDetailedAr : FIRM_DETAILS.addressDetailedEn}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="rounded-2xl p-6 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-[#78716C] dark:text-[#A8A29E] uppercase">
                {isAr ? 'قنوات الاتصال المباشر' : 'Direct Channels'}
              </h4>

              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825] hover:border-[#9A784E] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#9A784E]" />
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
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#201E1C] border border-[#EBE7DF] dark:border-[#2B2825] hover:border-[#9A784E] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#9A784E]" />
                  <span className="text-xs font-medium text-[#181818] dark:text-[#FAF8F5]">
                    {OFFICIAL_EMAIL}
                  </span>
                </div>
                <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                  {isAr ? 'مراسلة' : 'Email'}
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: WhatsApp Interactive Consultation Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] shadow-sm">
              
              <div className="pb-6 border-b border-[#E7E2D8] dark:border-[#2A2825] mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar">
                  {isAr ? 'نموذج طلب الخدمة والاستشارة (مربوط بالواتساب)' : 'Service & Consultation Request Form'}
                </h3>
                <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#A8A29E] mt-1">
                  {isAr
                    ? 'املأ البيانات وسيقوم النظام بتنسيق رسالة حجز رسمية تفتح محادثة واتساب مباشرة مع المحامية.'
                    : 'Fill in details to generate a structured booking message sent directly to Advocate Areej via WhatsApp.'}
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                      {isAr ? 'تم فتح تطبيق الواتساب بنجاح!' : 'WhatsApp opened successfully!'}
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                      {isAr
                        ? 'إذا لم تفتح المحادثة تلقائياً، يمكنك إرسال الرسالة مباشرة على الرقم +966548989025.'
                        : 'If WhatsApp did not trigger, you can reach out directly to +966548989025.'}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Field 1: Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1.5">
                    {isAr ? 'نوع الخدمة القانونية المطلوبة *' : 'Requested Legal Service *'}
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                  >
                    {LEGAL_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {isAr ? `${s.titleAr} (${s.number})` : s.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 2 & 3: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1.5">
                      {isAr ? 'الاسم الكريم *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? 'أدخل اسمك الكريم' : 'Your full name'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1.5">
                      {isAr ? 'رقم الجوال (واتساب) *' : 'Mobile Number (WhatsApp) *'}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="05XXXXXXXX / +966..."
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#201E1C] border rounded-xl text-[#181818] dark:text-[#FAF8F5] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#9A784E] ${
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
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1.5">
                    {isAr ? 'فترة التواصل أو الزيارة المفضلة *' : 'Preferred Shift / Time Slot *'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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
                        className={`p-3 text-right rtl:text-right ltr:text-left rounded-xl border transition-all ${
                          formData.preferredShift === shift.id
                            ? 'bg-[#9A784E]/10 border-[#9A784E] text-[#181818] dark:text-[#FAF8F5] ring-1 ring-[#9A784E]'
                            : 'bg-white dark:bg-[#201E1C] border-[#DDD7CC] dark:border-[#333333] text-[#57534E] dark:text-[#A8A29E]'
                        }`}
                      >
                        <span className="text-xs font-bold block">
                          {isAr ? shift.titleAr : shift.titleEn}
                        </span>
                        <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E] block mt-0.5 tabular-nums">
                          {isAr ? shift.subAr : shift.subEn}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 5: Consultation Type */}
                <div>
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1.5">
                    {isAr ? 'صيغة الاستشارة' : 'Consultation Mode'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'office', labelAr: 'حضور بمقر المكتب', labelEn: 'In-person at Office' },
                      { id: 'whatsapp_call', labelAr: 'هاتفية / عبر الواتساب', labelEn: 'Phone / WhatsApp' },
                      { id: 'written', labelAr: 'مذكرة رأي نظامي مكتوبة', labelEn: 'Written Legal Memo' },
                    ].map((mode) => (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() => setFormData({ ...formData, consultationType: mode.id as any })}
                        className={`p-2.5 text-center text-xs font-semibold rounded-xl border transition-all ${
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
                  <label className="block text-xs font-bold text-[#44403C] dark:text-[#D6D3D1] mb-1.5">
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
                    className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-[#201E1C] border border-[#DDD7CC] dark:border-[#333333] rounded-xl text-[#181818] dark:text-[#FAF8F5] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#9A784E]"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-md shadow-emerald-700/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>
                      {isAr
                        ? 'إرسال طلب الحجز وفتح الواتساب مباشرة (+966548989025)'
                        : 'Submit Booking & Open WhatsApp (+966548989025)'}
                    </span>
                  </button>
                  <p className="text-[11px] text-[#78716C] dark:text-[#A8A29E] text-center mt-2.5">
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
