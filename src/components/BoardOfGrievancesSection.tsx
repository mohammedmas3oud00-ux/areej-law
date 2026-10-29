import React from 'react';
import { Language } from '../types';
import { Landmark, CheckCircle, AlertTriangle, ArrowRight, ArrowLeft, Clock, ShieldCheck, FileCheck } from 'lucide-react';
import { generateDirectWhatsAppUrl } from '../utils/whatsapp';

interface BoardOfGrievancesSectionProps {
  language: Language;
  onOpenBooking: () => void;
}

export const BoardOfGrievancesSection: React.FC<BoardOfGrievancesSectionProps> = ({
  language,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const whatsappUrl = generateDirectWhatsAppUrl('السلام عليكم، أود استشارة المحامية أريج المجنوني بخصوص دعوى إدارية / قضية أمام ديوان المظالم.');

  const pillars = isAr
    ? [
        {
          title: 'دعاوى إلغاء القرارات الإدارية',
          desc: 'الطعن في القرارات الصادرة عن الوزارات والهيئات واللجان الحكومية المشوبة بعيب عدم الاختصاص أو مخالفة الأنظمة واللوائح أو إساءة استعمال السلطة.',
          stat: 'مواعيد نظامية حاسمة',
        },
        {
          title: 'منازعات العقود الحكومية والمشتريات',
          desc: 'المرافعة في منازعات عقود المقاولات والتوريد مع الجهات العامة، والمطالبة بمستحقات المقاولين وتمديد مدد التنفيذ ورفع غرامات التأخير غير المحقة.',
          stat: 'حفظ مستحقات المنشآت',
        },
        {
          title: 'دعاوى التعويض عن أضرار الإدارة',
          desc: 'المطالبة بالتعويضات العادلة عن الأضرار المادية والمعنوية الناتجة عن أعمال وتصرفات الجهات الحكومية أو نزع الملكيات للمنفعة العامة دون تقدير عادل.',
          stat: 'استرداد الحقوق المالية',
        },
        {
          title: 'قضايا التأديب والتظلمات الوظيفية',
          desc: 'الدفاع عن موظفي الخدمة المدنية والجهات الحكومية في قرارات الترقية والإنهاء والتأديب، وإعداد لوائح التظلم النظامي ضمن المدد المحددة قانوناً.',
          stat: 'حماية المسار الوظيفي',
        },
      ]
    : [
        {
          title: 'Administrative Decision Annulment',
          desc: 'Challenging illegal decisions issued by ministries, authorities, or administrative bodies based on lack of jurisdiction, procedural violations, or abuse of discretion.',
          stat: 'Strict Statutory Deadlines',
        },
        {
          title: 'Public Procurement & Government Contracts',
          desc: 'Litigating disputes under public tenders, supply and construction contracts with public entities, seeking delayed dues, and disputing penalty deductions.',
          stat: 'Protecting Contractor Rights',
        },
        {
          title: 'Tortious Administrative Restitution',
          desc: 'Demanding fair financial compensation for damages caused by unlawful administrative actions, expropriation without just valuation, or administrative delays.',
          stat: 'Financial Restitution',
        },
        {
          title: 'Civil Service & Disciplinary Grievances',
          desc: 'Representing public sector personnel in promotion disputes, disciplinary citations, and arbitrary termination, filing formal pre-suit administrative grievances.',
          stat: 'Career Protection',
        },
      ];

  return (
    <section id="diwan" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#86673E] dark:text-[#C2A273] tracking-widest uppercase mb-2">
            <Landmark className="w-4 h-4 text-[#9A784E]" />
            <span>{isAr ? 'القضاء الإداري السعودي' : 'SAUDI ADMINISTRATIVE JUDICIARY'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight">
            {isAr ? 'الترافع المتخصص أمام محاكم ديوان المظالم' : 'Specialized Advocacy Before the Board of Grievances'}
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] dark:text-[#A8A29E] mt-3 leading-relaxed">
            {isAr
              ? 'تتطلب قضايا ديوان المظالم دراية دقيقة بالمواعيد الإجرائية الحتمية، وإجراءات التظلم الوجوبي، وقواعد المرافعات أمام المحاكم الإدارية ومحكمة الاستئناف الإدارية والمحكمة الإدارية العليا.'
              : 'Administrative litigation before the Board of Grievances requires stringent adherence to mandatory pre-suit grievance windows, strict appeal limits, and specialized administrative procedure laws.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] flex flex-col justify-between hover:border-[#9A784E]/50 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#86673E] dark:text-[#C2A273] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pillar.stat}</span>
                  </span>
                  <FileCheck className="w-5 h-5 text-[#9A784E]/70" />
                </div>
                <h3 className="text-lg font-bold text-[#181818] dark:text-[#FAF8F5] mb-2 font-sans-ar">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E7E2D8] dark:border-[#282624] flex items-center justify-between">
                <span className="text-xs text-[#78716C] dark:text-[#A8A29E]">
                  {isAr ? 'تمثيل أمام الدوائر الابتدائية والاستئناف' : 'Trial & Appellate Circuits'}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-[#86673E] dark:text-[#C2A273] hover:underline flex items-center gap-1"
                >
                  {isAr ? 'استشر في قضيتك' : 'Consult on Case'}
                  {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Crucial Notice on Statutory Time Limits */}
        <div className="mt-8 rounded-2xl p-6 bg-[#9A784E]/10 dark:bg-[#9A784E]/15 border border-[#9A784E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#86673E] dark:text-[#C2A273] shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-[#44403C] dark:text-[#D6D3D1]">
              <strong className="text-[#181818] dark:text-[#FAF8F5]">
                {isAr ? 'تنبيه نظامي هام: ' : 'Crucial Statutory Notice: '}
              </strong>
              {isAr
                ? 'الدعاوى الإدارية أمام ديوان المظالم محكومة بمدد ومواعيد سقوط حتمية للتظلم ورفع الدعوى (60 إلى 90 يوماً). لا تؤجل استشارتك لتفادي فوات الميعاد القانوني.'
                : 'Administrative claims before the Board of Grievances are subject to strict limitation periods (60 to 90 days). Consult without delay to safeguard your procedural rights.'}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-[#9A784E] hover:bg-[#86673E] rounded-lg text-center transition-all shadow-sm"
            >
              {isAr ? 'استشارة إدارية عاجلة' : 'Urgent Case Counsel'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
