import React, { useState } from 'react';
import { GOOGLE_REVIEWS, FIRM_DETAILS } from '../data/lawFirmData';
import { Language } from '../types';
import { Star, CheckCircle2, ExternalLink, Quote, ThumbsUp } from 'lucide-react';
import { GOOGLE_MAPS_URL } from '../utils/whatsapp';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [activeRatingFilter, setActiveRatingFilter] = useState<number | 'all'>('all');

  const filteredReviews =
    activeRatingFilter === 'all'
      ? GOOGLE_REVIEWS
      : GOOGLE_REVIEWS.filter((r) => r.rating === activeRatingFilter);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#EFECE6]/40 dark:bg-[#161412]/50 border-y border-[#E7E2D8] dark:border-[#242220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#9A784E] dark:text-[#C2A273] uppercase mb-2 block font-sans-ar">
              {isAr ? 'شهادات الثقة والتقييمات الحقيقية' : 'VERIFIED SOCIAL PROOF'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] dark:text-[#FAF8F5] font-sans-ar tracking-tight">
              {isAr ? 'آراء العملاء على خرائط جوجل' : 'Client Reviews on Google Maps'}
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] dark:text-[#A8A29E] mt-3 max-w-2xl leading-relaxed">
              {isAr
                ? 'ثقة موكلينا هي ركيزتنا الأولى؛ نفخر بتقييمات حقيقية تعكس حرصنا على الإتقان والصدق والنتائج المشرفة في ساحات القضاء.'
                : 'Client trust is our primary foundation; documented reviews reflect our relentless dedication to meticulous advocacy and honorable outcomes.'}
            </p>
          </div>

          {/* Google Maps Score Badge & Direct Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl bg-[#F7F5F0] dark:bg-[#1C1A17] border border-[#E7E2D8] dark:border-[#2E2A27] shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                <span className="text-xl font-black text-[#181818] dark:text-[#FAF8F5] tabular-nums">
                  {FIRM_DETAILS.stats.rating}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-[#78716C] dark:text-[#A8A29E] mt-1 font-medium">
                  {isAr ? 'بناءً على +131 مراجعة معتمدة' : 'Based on +131 verified reviews'}
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#86673E] dark:text-[#C2A273] hover:text-[#181818] dark:hover:text-white bg-white dark:bg-[#252220] rounded-xl border border-[#DDD7CC] dark:border-[#38332E] hover:border-[#9A784E] transition-all shadow-2xs whitespace-nowrap"
            >
              <span>{isAr ? 'عرض موقع المكتب والتقييمات على Google' : 'View on Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl p-6 bg-[#F7F5F0] dark:bg-[#1A1816] border border-[#E7E2D8] dark:border-[#2C2926] flex flex-col justify-between hover:border-[#C2A273]/60 dark:hover:border-[#9A784E]/40 transition-all shadow-xs"
            >
              <div>
                {/* Author Info & Verified Mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#9A784E]/15 border border-[#9A784E]/30 flex items-center justify-center font-bold text-xs text-[#86673E] dark:text-[#C2A273]">
                      {(isAr ? review.authorAr : review.authorEn).slice(0, 1)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#181818] dark:text-[#FAF8F5] leading-tight">
                        {isAr ? review.authorAr : review.authorEn}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-[#78716C] dark:text-[#A8A29E] mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>{isAr ? 'تقييم موثق على Google' : 'Verified Google Review'}</span>
                      </div>
                    </div>
                  </div>

                  <Quote className="w-5 h-5 text-[#9A784E]/30 shrink-0" />
                </div>

                {/* Star Rating & Time */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                    {isAr ? review.dateAr : review.dateEn}
                  </span>
                </div>

                {/* Quoted Text */}
                <p className="text-xs sm:text-sm text-[#44403C] dark:text-[#D6D3D1] leading-relaxed">
                  "{isAr ? review.textAr : review.textEn}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-5 border-t border-[#E7E2D8] dark:border-[#272522] flex items-center justify-between text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ThumbsUp className="w-3 h-3" />
                  {isAr ? 'تجربة حقيقية ناجحة' : 'Authentic Case Experience'}
                </span>
                <span>{isAr ? 'مكتب الشوقية' : 'Al-Shawqiyyah HQ'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout below reviews */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#78716C] dark:text-[#A8A29E] max-w-xl mx-auto">
            {isAr
              ? 'نحرص على الاستماع الدائم لملاحظات موكلينا لتقديم أفضل تمثيل قانوني يرتقي لتطلعاتكم.'
              : 'We continually listen to our clients to deliver highest caliber legal advocacy.'}
          </p>
        </div>

      </div>
    </section>
  );
};
