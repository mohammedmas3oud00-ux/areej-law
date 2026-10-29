/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme, LegalService } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BoardOfGrievancesSection } from './components/BoardOfGrievancesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  // Language State: default Arabic
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('areej_law_lang');
    return saved === 'en' ? 'en' : 'ar';
  });

  // Theme State: default light (Warm ivory/marble)
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('areej_law_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  // Modals & Navigation States
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [activeDetailService, setActiveDetailService] = useState<LegalService | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<LegalService | null>(null);

  // Sync Language and Direction on DOM
  useEffect(() => {
    localStorage.setItem('areej_law_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Sync Theme on DOM
  useEffect(() => {
    localStorage.setItem('areej_law_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectServiceForBooking = (service: LegalService) => {
    setPreselectedBookingService(service);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#181818] dark:bg-[#121212] dark:text-[#E7E5E4] transition-colors duration-300 font-sans-ar selection:bg-[#9A784E]/25 selection:text-[#86673E]">
      
      {/* 1. Sticky Navigation Header */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section with Trust Badges & Statistics Bar */}
        <Hero
          language={language}
          onOpenBooking={() => {
            const bookingEl = document.getElementById('booking');
            if (bookingEl) {
              bookingEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              setIsConsultationModalOpen(true);
            }
          }}
        />

        {/* 3. Comprehensive Legal Services Grid */}
        <ServicesSection
          language={language}
          onSelectService={handleSelectServiceForBooking}
          onViewServiceDetails={(service) => setActiveDetailService(service)}
        />

        {/* 4. Board of Grievances Cases Spotlight */}
        <BoardOfGrievancesSection
          language={language}
          onOpenBooking={() => {
            const bookingEl = document.getElementById('booking');
            if (bookingEl) {
              bookingEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 5. Social Proof & Google Reviews */}
        <ReviewsSection language={language} />

        {/* 6. Smart Booking & Live Working Hours Funnel */}
        <BookingSection
          language={language}
          preselectedService={preselectedBookingService}
        />

        {/* 7. Headquarters Location & Direct Channels */}
        <LocationSection language={language} />

        {/* 8. Frequently Asked Questions */}
        <FAQSection language={language} />
      </main>

      {/* 9. Footer */}
      <Footer language={language} />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp language={language} />

      {/* Service Details Modal */}
      <ServiceDetailModal
        service={activeDetailService}
        language={language}
        onClose={() => setActiveDetailService(null)}
        onRequestService={handleSelectServiceForBooking}
      />

      {/* Quick Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        language={language}
      />

    </div>
  );
}
