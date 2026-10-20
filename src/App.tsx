import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { OpeningAnnouncement } from './components/OpeningAnnouncement';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SolarShowcase } from './components/SolarShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { DocumentGuideModal } from './components/DocumentGuideModal';
import { SolarModal } from './components/SolarModal';
import { PosterModal } from './components/PosterModal';
import { AdminEnquiriesModal } from './components/AdminEnquiriesModal';
import { LegalModals } from './components/LegalModals';
import { Language } from './types';

export const App: React.FC = () => {
  // Language State with LocalStorage Persistence (defaulting to Hindi for Indian digital centre audience)
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('shubh_lang');
    return (saved === 'en' || saved === 'hi') ? saved : 'hi';
  });

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('shubh_lang', lang);
  };

  // Modals
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isSolarModalOpen, setIsSolarModalOpen] = useState(false);
  const [solarModalCapacity, setSolarModalCapacity] = useState('2 kW Rooftop Solar System');
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Prefilled service for enquiry form
  const [prefilledService, setPrefilledService] = useState('');

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSolarModalWithCapacity = (capacity?: string) => {
    if (capacity) {
      setSolarModalCapacity(capacity);
    }
    setIsSolarModalOpen(true);
  };

  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-brand-red selection:text-white pb-14 sm:pb-0">
      
      {/* 1. Header with Sticky Nav, Language Switch & Contacts */}
      <Header
        language={language}
        setLanguage={handleLanguageChange}
        onOpenChecklistModal={() => setIsChecklistOpen(true)}
        onOpenSolarModal={() => handleOpenSolarModalWithCapacity()}
      />

      {/* 2. Opening Milestone Announcement (Honoring Grand Opening Poster) */}
      <OpeningAnnouncement
        language={language}
        onViewPoster={() => setIsPosterModalOpen(true)}
      />

      {/* 3. Hero Section */}
      <main className="flex-1">
        <Hero
          language={language}
          onExploreClick={handleExploreClick}
          onOpenSolarModal={() => handleOpenSolarModalWithCapacity()}
          onOpenChecklistModal={() => setIsChecklistOpen(true)}
        />

        {/* 4. Services Section (Icon-based cards, live search, categories, disclaimers) */}
        <ServicesSection
          language={language}
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
          onOpenChecklistModal={() => setIsChecklistOpen(true)}
        />

        {/* 5. Solar Energy Showcase (PM Surya Ghar scheme, calculator, subsidy plans) */}
        <SolarShowcase
          language={language}
          onOpenSolarModal={handleOpenSolarModalWithCapacity}
        />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs language={language} />

        {/* 7. About Shubh Enterprises Section (Owner Shubh Rajpoot & Location) */}
        <AboutSection
          language={language}
          onOpenChecklistModal={() => setIsChecklistOpen(true)}
        />

        {/* 8. Visual Gallery (Equipment, Workstations, Solar & Invitation Poster) */}
        <GallerySection language={language} />

        {/* 9. Verified Customer Feedback & Community Trust */}
        <TestimonialsSection language={language} />

        {/* 10. Frequently Asked Questions (FAQ Accordion) */}
        <FAQSection language={language} />

        {/* 11. Contact & Location (Address, Map, Live Open status & Working Enquiry Form) */}
        <ContactSection
          language={language}
          prefilledService={prefilledService}
        />
      </main>

      {/* 12. Footer with Quick Directory, Legal Links & Owner Portal */}
      <Footer
        language={language}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenSolarModal={() => handleOpenSolarModalWithCapacity()}
      />

      {/* 13. Floating Action Buttons (WhatsApp Pulse, Solar Quick Pill, Back to Top) */}
      <FloatingButtons
        language={language}
        onOpenSolarModal={() => handleOpenSolarModalWithCapacity()}
      />

      {/* Interactive Modals */}
      <DocumentGuideModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        language={language}
      />

      <SolarModal
        isOpen={isSolarModalOpen}
        onClose={() => setIsSolarModalOpen(false)}
        language={language}
        preselectedCapacity={solarModalCapacity}
      />

      <PosterModal
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
        language={language}
      />

      <AdminEnquiriesModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        language={language}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        language={language}
      />

    </div>
  );
};

export default App;
