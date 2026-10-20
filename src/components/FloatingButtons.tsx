import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Sun } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface FloatingButtonsProps {
  language: Language;
  onOpenSolarModal: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  language,
  onOpenSolarModal,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Bottom-Right Buttons Stack */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-brand-navy/90 hover:bg-brand-navy text-white shadow-xl transition-all duration-300 transform hover:scale-110 border border-white/20 focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-amber-400" />
          </button>
        )}

        {/* Floating Solar Quick Action */}
        <button
          onClick={onOpenSolarModal}
          className="pointer-events-auto hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-brand-navy-dark font-extrabold px-3.5 py-2.5 rounded-full shadow-2xl transition transform hover:scale-105 border-2 border-white text-xs"
        >
          <Sun className="w-4 h-4 text-brand-navy-dark animate-spin-slow" />
          <span>{language === 'hi' ? 'सोलर सब्सिडी चेक' : 'Solar Subsidy'}</span>
        </button>

        {/* Floating WhatsApp Action with Ping */}
        <div className="relative pointer-events-auto">
          {/* Subtle Attention Ping */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition transform hover:scale-105 active:scale-95 focus:outline-none border-2 border-white"
            aria-label="Chat on WhatsApp with Shubh Rajpoot"
          >
            <MessageSquare className="w-6 h-6 fill-white" />
            <span className="hidden sm:inline text-sm">
              {language === 'hi' ? 'व्हाट्सएप चैट' : 'Chat on WhatsApp'}
            </span>
          </a>
        </div>

      </div>

      {/* Mobile Bottom Fixed Sticky Contact Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-navy-dark/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-brand-red text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow active:scale-95 text-center"
        >
          <Phone className="w-4 h-4 animate-bounce-gentle" />
          <span>{language === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow active:scale-95 text-center"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenSolarModal}
          className="flex-1 flex items-center justify-center gap-1 bg-amber-500 text-brand-navy-dark py-2.5 px-3 rounded-xl text-xs font-black shadow active:scale-95 text-center"
        >
          <Sun className="w-4 h-4" />
          <span>{language === 'hi' ? 'सोलर' : 'Solar'}</span>
        </button>
      </div>
    </>
  );
};
