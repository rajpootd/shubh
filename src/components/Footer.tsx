import React from 'react';
import { 
  Phone, MessageSquare, MapPin, Clock, Sun, Printer, ShieldCheck, 
  Heart, ArrowUp, Lock, ExternalLink 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAdmin: () => void;
  onOpenChecklist: () => void;
  onOpenSolarModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAdmin,
  onOpenChecklist,
  onOpenSolarModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-amber-500 p-0.5 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-brand-navy-dark flex items-center justify-center font-black text-sm">
                  <span className="text-blue-400">S</span>
                  <span className="text-amber-400">E</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base tracking-wide">
                  SHUBH ENTERPRISES
                </h3>
                <p className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                  & INTERNET CAFE • UNNAO
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'आपकी सभी ऑनलाइन सेवाओं, सरकारी भर्ती फॉर्म, पासपोर्ट फोटो, लेमिनेशन, जेरॉक्स एवं पीएम सूर्य घर रूफटॉप सोलर का विश्वसनीय स्थानीय केंद्र।'
                : 'Your trusted one-stop destination for digital services, online government exam applications, laser printing, photocopies, passport photos, and PM Surya Ghar rooftop solar consultation in Unnao.'}
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <p>
                <span className="text-slate-400">{language === 'hi' ? 'संचालक:' : 'Proprietor:'}</span>{' '}
                <strong className="text-white">{BUSINESS_INFO.owner}</strong>
              </p>
              <p>
                <span className="text-slate-400">{language === 'hi' ? 'स्थान:' : 'Location:'}</span>{' '}
                <span>{BUSINESS_INFO.addressEn}</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-slate-800 pb-2">
              {language === 'hi' ? 'मुख्य पृष्ठ' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition">
                  {language === 'hi' ? 'होम (Home)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition">
                  {language === 'hi' ? 'सभी सेवाएँ' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#solar" className="hover:text-amber-400 transition text-amber-300 font-semibold flex items-center gap-1">
                  <Sun className="w-3 h-3" />
                  <span>PM Surya Ghar</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition">
                  {language === 'hi' ? 'विशेषताएँ' : 'Why Choose Us'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition">
                  {language === 'hi' ? 'परिचय' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition">
                  {language === 'hi' ? 'फोटो गैलरी' : 'Gallery'}
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-400 transition">
                  {language === 'hi' ? 'सवाल-जवाब' : 'FAQs'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition">
                  {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-slate-800 pb-2">
              {language === 'hi' ? 'लोकप्रिय सेवाएँ' : 'Key Services'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Govt Exam Forms (Police, SSC, Railway)</li>
              <li>• High Quality Colour & B/W Printing</li>
              <li>• 5-Minute Instant Passport Photos</li>
              <li>• Document Scanning & Heavy Lamination</li>
              <li>• Income, Caste & Domicile Certificates</li>
              <li>• Railway & Air Ticket Assistance</li>
              <li>• PM Surya Ghar Rooftop Solar Setup</li>
              <li>• CSC Digital Citizen Facilitation</li>
            </ul>
          </div>

          {/* Direct Contact & Visiting Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase border-b border-slate-800 pb-2">
              {language === 'hi' ? 'संपर्क एवं समय' : 'Contact & Hours'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition"
              >
                <Phone className="w-4 h-4" />
                <span>+91 {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneAlt}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+91 {BUSINESS_INFO.phoneAlt} (Alt)</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 7007235826</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">8:00 AM – 9:00 PM</p>
                  <p className="text-[11px]">Open 7 Days a Week (Mon-Sun)</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenChecklist}
                  className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Check documents to bring along</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} <strong>SHUBH ENTERPRISES & INTERNET CAFE</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Proprietor: Shubh Rajpoot • Lok Nagar, Jurakhan Kheda, Unnao, Uttar Pradesh.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 transition underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-200 transition underline-offset-2 hover:underline"
            >
              Terms of Service
            </button>
            <span>•</span>
            {/* Owner Portal Shortcut */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition"
              title="Business Owner Dashboard for Received Enquiries"
            >
              <Lock className="w-3 h-3" />
              <span>Owner Portal</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
