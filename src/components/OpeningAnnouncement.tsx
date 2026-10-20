import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Eye, X, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface OpeningAnnouncementProps {
  language: Language;
  onViewPoster: () => void;
}

export const OpeningAnnouncement: React.FC<OpeningAnnouncementProps> = ({
  language,
  onViewPoster,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-brand-red via-brand-navy-dark to-brand-navy text-white py-3 px-4 shadow-md border-b border-amber-500/30 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        
        {/* Left Side: Badge & Festive Announcement */}
        <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-brand-navy-dark font-extrabold text-xs uppercase tracking-wider rounded-full shadow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'शुभ उद्घाटन समारोह' : 'Grand Opening Milestone'}</span>
          </span>

          <p className="font-medium text-slate-100 flex items-center gap-2 flex-wrap justify-center">
            <span>
              {language === 'hi'
                ? 'नये डिजिटल कार्यालय एवं इंटरनेट कैफे का शुभारंभ! आप सादर आमंत्रित हैं।'
                : 'Welcome to our modern digital service center in Unnao! Visit us for all online services & solar guidance.'}
            </span>
          </p>
        </div>

        {/* Right Side: Poster View Button & Dismiss */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onViewPoster}
            className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-amber-300 hover:text-white px-3 py-1 rounded-md text-xs font-semibold border border-amber-400/30 transition shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'आमंत्रण पोस्टर देखें' : 'View Original Poster'}</span>
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white p-1 rounded transition"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
