import React from 'react';
import { X, Download, ExternalLink, Calendar, MapPin, User, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PosterModal: React.FC<PosterModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-navy-dark text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-brand-navy-dark font-extrabold text-[10px] uppercase tracking-wider">
                Official Invitation
              </span>
              <span className="text-xs text-slate-300">Shubh Enterprises</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
              {language === 'hi'
                ? 'शुभ उद्घाटन समारोह आमंत्रण पत्र'
                : 'Grand Opening Ceremony Invitation Poster'}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/images/poster.png"
              download="Shubh-Enterprises-Grand-Opening.png"
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
              title="Download Poster"
            >
              <Download className="w-5 h-5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Poster Viewer */}
        <div className="flex-1 overflow-auto p-2 sm:p-4 bg-black/60 flex items-center justify-center">
          <img
            src="/images/poster.png"
            alt="Shubh Enterprises & Internet Cafe Grand Opening Invitation"
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Poster Key Highlights Footer */}
        <div className="bg-brand-navy p-3 sm:p-4 border-t border-white/10 text-white text-xs grid grid-cols-1 sm:grid-cols-3 gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <User className="w-4 h-4 text-amber-400" />
            <span>
              <strong>Organizer:</strong> {BUSINESS_INFO.owner}
            </span>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <MapPin className="w-4 h-4 text-red-400" />
            <span>Lok Nagar, Jurakhan Kheda, Unnao</span>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-end">
            <span className="text-amber-300 font-bold">Mo. 7007235826, 7081971550</span>
          </div>
        </div>
      </div>
    </div>
  );
};
