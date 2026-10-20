import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Sun, Globe, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenChecklistModal: () => void;
  onOpenSolarModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onOpenChecklistModal,
  onOpenSolarModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelEn: 'Home', labelHi: 'होम' },
    { href: '#services', labelEn: 'Services', labelHi: 'सेवाएँ' },
    { href: '#solar', labelEn: 'PM Surya Ghar (Solar)', labelHi: 'पीएम सूर्य घर (सोलर)', badge: 'Govt Scheme' },
    { href: '#why-us', labelEn: 'Why Choose Us', labelHi: 'विशेषताएँ' },
    { href: '#about', labelEn: 'About', labelHi: 'परिचय' },
    { href: '#gallery', labelEn: 'Gallery', labelHi: 'गैलरी' },
    { href: '#faqs', labelEn: 'FAQs', labelHi: 'सवाल-जवाब' },
    { href: '#contact', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Informational Strip */}
      <div className="bg-brand-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'लोक नगर, जुराखन खेड़ा, उन्नाव (सुख देव आटा चक्की के पास)' : 'Lok Nagar, Jurakhan Kheda, Unnao (Near Sukh Dev Ata Chakki)'}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'hi' ? 'प्रतिदिन: प्रात: 8:00 - रात्रि 9:00' : 'Open: 8:00 AM - 9:00 PM Daily'}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <span className="text-slate-400">{language === 'hi' ? 'संचालक:' : 'Owner:'}</span>
              <span className="font-semibold text-white">{BUSINESS_INFO.owner}</span>
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy/95 backdrop-blur-md shadow-xl py-2.5 border-b border-brand-navy-light/40'
            : 'bg-brand-navy py-3.5 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo and Brand Title */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              {/* Circular Emblem / Monogram Logo inspired by poster */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-brand-navy-dark flex items-center justify-center border border-white/20">
                  <div className="flex items-baseline font-black text-lg tracking-tight">
                    <span className="text-blue-400 font-extrabold">S</span>
                    <span className="text-amber-400 font-extrabold ml-0.5">E</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-brand-red text-white text-[9px] font-bold px-1 rounded-full uppercase">
                  UNN
                </div>
              </div>

              {/* Title Text */}
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-sm sm:text-base lg:text-lg tracking-wide leading-tight group-hover:text-amber-400 transition">
                  SHUBH ENTERPRISES
                </span>
                <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-1.5">
                  <span>& INTERNET CAFE</span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="hidden sm:inline-block text-[11px] font-medium text-slate-300">Unnao</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition relative group"
                >
                  <span>{language === 'hi' ? link.labelHi : link.labelEn}</span>
                  {link.badge && (
                    <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 bg-gradient-to-r from-amber-500 to-red-500 text-white text-[9px] font-bold rounded-full shadow">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded"></span>
                </button>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher Pill */}
              <div className="flex items-center bg-brand-navy-dark border border-slate-700 rounded-full p-0.5 shadow-inner">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                    language === 'en'
                      ? 'bg-brand-red text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                    language === 'hi'
                      ? 'bg-amber-500 text-brand-navy-dark shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="हिंदी में देखें"
                >
                  हिन्दी
                </button>
              </div>

              {/* Quick Call Action (Desktop) */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden sm:inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-hover text-white px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition transform active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 animate-bounce-gentle" />
                <span>{language === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
              </a>

              {/* WhatsApp Action (Desktop) */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-navy-dark/98 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            {/* Mobile Owner & Address info */}
            <div className="bg-brand-navy p-3 rounded-lg border border-slate-700/60 mb-3 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>{language === 'hi' ? 'संचालक: शुभ राजपूत' : 'Proprietor: Shubh Rajpoot'}</span>
                <span className="text-amber-400 font-bold">{BUSINESS_INFO.phone}</span>
              </div>
              <p className="text-slate-400 text-[11px] mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <span>Lok Nagar, Jurakhan Kheda, Unnao</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-brand-red text-white py-2 px-3 rounded-lg text-xs font-bold shadow text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-2 px-3 rounded-lg text-xs font-bold shadow text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 divide-y divide-slate-800/80">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full flex items-center justify-between py-2.5 px-3 text-slate-200 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition"
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                    <span>{language === 'hi' ? link.labelHi : link.labelEn}</span>
                  </span>
                  {link.badge && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-red-500 text-white text-[10px] font-bold rounded-full">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Quick helper shortcuts */}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSolarModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-brand-navy-dark font-bold text-xs py-2.5 rounded-lg shadow"
              >
                <Sun className="w-4 h-4 text-brand-navy-dark" />
                <span>{language === 'hi' ? 'सोलर सब्सिडी चेक करें' : 'Check Solar Subsidy'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChecklistModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-xs py-2 rounded-lg"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'दस्तावेज चेकलिस्ट (क्या लेकर आएं)' : 'Documents Checklist'}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
