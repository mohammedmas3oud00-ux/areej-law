import React from 'react';
import { FIRM_DETAILS } from '../data/lawFirmData';
import { Language } from '../types';

interface BrandLogoProps {
  language: Language;
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  language,
  showBadge = true,
  size = 'md',
  className = ''
}) => {
  const isAr = language === 'ar';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Bespoke Scales of Justice Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className={
            size === 'sm'
              ? 'w-9 h-9'
              : size === 'lg'
              ? 'w-14 h-14'
              : 'w-11 h-11'
          }
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle Outer Arch Circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#bronzeGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            className="opacity-70"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="url(#bronzeGradient)"
            strokeWidth="1"
            className="opacity-40"
          />

          {/* Central Pillar of Justice & Finial */}
          <path
            d="M50 14 L50 78"
            stroke="url(#bronzeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="14" r="3.5" fill="url(#bronzeGradient)" />

          {/* Horizontal Beam */}
          <path
            d="M22 32 C34 30, 66 30, 78 32"
            stroke="url(#bronzeGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="31" r="2.5" fill="url(#bronzeGradient)" />

          {/* Left Pan Chains & Scale Pan */}
          <line
            x1="24"
            y1="32"
            x2="15"
            y2="50"
            stroke="url(#bronzeGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="32"
            x2="33"
            y2="50"
            stroke="url(#bronzeGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M13 50 C16 58, 32 58, 35 50 Z"
            fill="url(#bronzeGradientSoft)"
            stroke="url(#bronzeGradient)"
            strokeWidth="1.4"
          />

          {/* Right Pan Chains & Scale Pan */}
          <line
            x1="76"
            y1="32"
            x2="67"
            y2="50"
            stroke="url(#bronzeGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <line
            x1="76"
            y1="32"
            x2="85"
            y2="50"
            stroke="url(#bronzeGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M65 50 C68 58, 84 58, 87 50 Z"
            fill="url(#bronzeGradientSoft)"
            stroke="url(#bronzeGradient)"
            strokeWidth="1.4"
          />

          {/* Solid Base Pedestal */}
          <path
            d="M38 78 L62 78 L58 84 L42 84 Z"
            fill="url(#bronzeGradient)"
          />
          <line
            x1="32"
            y1="86"
            x2="68"
            y2="86"
            stroke="url(#bronzeGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="bronzeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A575" />
              <stop offset="50%" stopColor="#9A784E" />
              <stop offset="100%" stopColor="#71542F" />
            </linearGradient>
            <linearGradient id="bronzeGradientSoft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9A784E" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#9A784E" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col">
        <span className="font-bold tracking-tight text-[#181818] dark:text-[#F5F5F4] leading-tight font-sans-ar text-base sm:text-lg">
          {isAr ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
        </span>
        {showBadge && (
          <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E] font-medium tracking-normal mt-0.5 flex items-center gap-1.5">
            <span>{isAr ? 'ترخيص رقم' : 'License No.'} {FIRM_DETAILS.licenseNumber}</span>
            <span aria-hidden="true" className="text-[#9A784E]">·</span>
            <span>{isAr ? 'مكة المكرمة' : 'Makkah Al-Mukarramah'}</span>
          </span>
        )}
      </div>
    </div>
  );
};
