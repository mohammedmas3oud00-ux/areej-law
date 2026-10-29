import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Language, Theme } from '../types';
import { Moon, Sun, Globe, Menu, X, PhoneCall, MessageCircle } from 'lucide-react';
import { FIRM_DETAILS } from '../data/lawFirmData';
import { generateDirectWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = language === 'ar';
  const whatsappUrl = generateDirectWhatsAppUrl();

  const navLinks = isAr
    ? [
        { label: 'الرئيسية', href: '#hero' },
        { label: 'الخدمات القانونية', href: '#services' },
        { label: 'ديوان المظالم', href: '#diwan' },
        { label: 'آراء العملاء', href: '#reviews' },
        { label: 'مواعيد الدوام والموقع', href: '#booking' },
      ]
    : [
        { label: 'Home', href: '#hero' },
        { label: 'Legal Services', href: '#services' },
        { label: 'Board of Grievances', href: '#diwan' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Hours & Location', href: '#booking' },
      ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F5F0]/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-[#E7E2D8] dark:border-[#262626] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6">
        
        {/* Zone 1: Brand Wordmark & Emblem (Shrinkable/Truncated on mobile) */}
        <a
          href="#hero"
          className="min-w-0 flex-1 sm:flex-initial focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] rounded-md transition-opacity hover:opacity-95"
          aria-label={isAr ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
        >
          <BrandLogo language={language} size="md" showBadge={false} />
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#44403C] dark:text-[#D6D3D1]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="whitespace-nowrap shrink-0 hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors py-1 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] rounded cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9A784E] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-200" />
            </button>
          ))}
        </nav>

        {/* Zone 3: Controls (Lang, Theme) + Primary CTA Button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Language Toggle */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAFAF9] rounded-lg border border-[#E7E2D8] dark:border-[#2E2E2E] hover:bg-[#EFECE6] dark:hover:bg-[#1E1E1E] transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] cursor-pointer"
            title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            aria-label={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#9A784E]" />
            <span className="text-[11px] sm:text-xs">{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAFAF9] rounded-lg border border-[#E7E2D8] dark:border-[#2E2E2E] hover:bg-[#EFECE6] dark:hover:bg-[#1E1E1E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] cursor-pointer"
            title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#C2A273]" />
            ) : (
              <Moon className="w-4 h-4 text-[#9A784E]" />
            )}
          </button>

          {/* Primary Action CTA (Visible on md+) */}
          <button
            onClick={onOpenConsultation}
            className="hidden md:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#9A784E] hover:bg-[#86673E] active:bg-[#735632] rounded-lg transition-all shadow-sm shadow-[#9A784E]/20 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9A784E] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>{isAr ? 'احجز استشارتك' : 'Book Consultation'}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAFAF9] rounded-lg border border-[#E7E2D8] dark:border-[#2E2E2E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Touch-optimized & fully responsive) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E2D8] dark:border-[#262626] bg-[#F7F5F0] dark:bg-[#161616] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-right rtl:text-right ltr:text-left px-3 py-3 text-sm font-semibold text-[#44403C] dark:text-[#D6D3D1] hover:text-[#9A784E] dark:hover:text-[#C2A273] hover:bg-[#EFECE6] dark:hover:bg-[#202020] rounded-xl transition-colors cursor-pointer min-h-[44px] flex items-center"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#9A784E] hover:bg-[#86673E] rounded-xl transition-all shadow-sm min-h-[44px] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{isAr ? 'حجز موعد استشارة' : 'Book Consultation'}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-sm min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isAr ? 'محادثة واتساب سريعة' : 'Quick WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
