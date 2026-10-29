import React, { useState } from 'react';
import { Language } from '../types';
import { generateDirectWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = generateDirectWhatsAppUrl();

  return (
    <div
      className={`fixed bottom-6 ${
        isAr ? 'left-6' : 'right-6'
      } z-40 flex items-center gap-3`}
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-[#1C1A17] border border-[#DDD7CC] dark:border-[#2E2A27] shadow-lg text-xs font-medium text-[#181818] dark:text-[#FAF8F5] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>{isAr ? 'تواصل فوري مع المحامية أريج' : 'Direct Chat with Advocate Areej'}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#A8A29E] hover:text-[#181818] dark:hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-600/35 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
        aria-label={isAr ? 'محادثة مباشرة عبر الواتساب' : 'Chat directly via WhatsApp'}
        title="+966548989025"
      >
        {/* Soft pulse wave */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 group-hover:animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Small active badge */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </span>
      </a>
    </div>
  );
};
