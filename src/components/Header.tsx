import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Language, Theme } from '../types';
import { Moon, Sun, Globe, Menu, X, PhoneCall } from 'lucide-react';
import { FIRM_DETAILS } from '../data/lawFirmData';

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
    <header className="sticky top-0 z-40 w-full bg-[#F7F5F0]/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-[#E7E2D8] dark:border-[#262626] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark & Emblem */}
        <a
          href="#hero"
          className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] rounded-md transition-opacity hover:opacity-95"
          aria-label={isAr ? FIRM_DETAILS.nameAr : FIRM_DETAILS.nameEn}
        >
          <BrandLogo language={language} size="md" />
        </a>

        {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#44403C] dark:text-[#D6D3D1]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="whitespace-nowrap shrink-0 hover:text-[#9A784E] dark:hover:text-[#C2A273] transition-colors py-1 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E] rounded"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9A784E] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-200" />
            </button>
          ))}
        </nav>

        {/* Zone 3: Controls (Lang, Theme) + 1 Primary CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAFAF9] rounded-lg border border-[#E7E2D8] dark:border-[#2E2E2E] hover:bg-[#EFECE6] dark:hover:bg-[#1E1E1E] transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E]"
            title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            aria-label={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#9A784E]" />
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAFAF9] rounded-lg border border-[#E7E2D8] dark:border-[#2E2E2E] hover:bg-[#EFECE6] dark:hover:bg-[#1E1E1E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E]"
            title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#C2A273]" />
            ) : (
              <Moon className="w-4 h-4 text-[#9A784E]" />
            )}
          </button>

          {/* Primary Action CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#9A784E] hover:bg-[#86673E] active:bg-[#735632] rounded-lg transition-all shadow-sm shadow-[#9A784E]/20 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9A784E]"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>{isAr ? 'احجز استشارتك' : 'Book Consultation'}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#57534E] dark:text-[#A8A29E] hover:text-[#181818] dark:hover:text-[#FAFAF9] rounded-lg border border-[#E7E2D8] dark:border-[#2E2E2E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9A784E]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E2D8] dark:border-[#262626] bg-[#F7F5F0] dark:bg-[#161616] px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-right rtl:text-right ltr:text-left px-3 py-2.5 text-sm font-medium text-[#44403C] dark:text-[#D6D3D1] hover:text-[#9A784E] dark:hover:text-[#C2A273] hover:bg-[#EFECE6] dark:hover:bg-[#202020] rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#9A784E] hover:bg-[#86673E] rounded-lg transition-all shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{isAr ? 'احجز استشارتك الآن' : 'Book Consultation Now'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
