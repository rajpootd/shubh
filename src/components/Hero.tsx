import React from 'react';
import { Phone, MessageSquare, ArrowDown, MapPin, User, CheckCircle2, Sun, Printer, FileText, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onExploreClick: () => void;
  onOpenSolarModal: () => void;
  onOpenChecklistModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreClick,
  onOpenSolarModal,
  onOpenChecklistModal
}) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-brand-navy-dark via-brand-navy to-[#132A4A] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      
      {/* Background Animated Gradient Mesh and Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-red rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-amber-500 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges: Location & Owner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-amber-400">
              {language === 'hi' ? 'उन्नाव का विश्वसनीय डिजिटल केंद्र' : 'Trusted Digital Service Hub in Unnao'}
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-400" />
              <span>Lok Nagar, Jurakhan Kheda</span>
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy-dark/80 border border-slate-700 text-xs text-slate-300">
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'संचालक: शुभ राजपूत' : 'Proprietor: Shubh Rajpoot'}</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-medium">{language === 'hi' ? 'खुला है' : 'Open Today'}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Tagline, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black tracking-tight leading-tight">
                <span className="block text-slate-100">
                  {language === 'hi' ? 'स्वागत है' : 'Welcome to'}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
                  SHUBH ENTERPRISES
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-amber-400 font-extrabold tracking-wide">
                  & INTERNET CAFE
                </span>
              </h1>

              {/* Hindi Tagline */}
              <div className="inline-block bg-white/5 border-l-4 border-amber-400 px-4 py-2 rounded-r-lg">
                <p className="text-lg sm:text-xl font-bold text-amber-300 tracking-wide font-hindi">
                  “आपकी सभी ऑनलाइन सेवाओं का भरोसेमंद केंद्र”
                </p>
              </div>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                <span className="font-semibold text-white">Digital Services, Online Forms, Printing, Internet Cafe & Solar Solutions</span>
                <span className="text-amber-300 font-bold ml-1.5">— सब एक ही जगह।</span>
                <span className="block text-xs sm:text-sm text-slate-400 mt-1">
                  {language === 'hi'
                    ? 'बिना किसी परेशानी के सभी सरकारी व गैर-सरकारी फॉर्म, उच्च गुणवत्ता प्रिंटिंग, फोटोकॉपी एवं पीएम सूर्य घर योजना परामर्श।'
                    : 'Fast & dependable assistance with government recruitment forms, sharp color laser prints, instant passport photos, and rooftop solar subsidy guidance.'}
                </span>
              </p>
            </div>

            {/* Prominent CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/30 transition transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 animate-bounce-gentle" />
                <span>{language === 'hi' ? 'कॉल करें: 7007235826' : 'Call: 7007235826'}</span>
              </a>

              {/* WhatsApp Us */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'hi' ? 'व्हाट्सएप पर बात करें' : 'WhatsApp Us'}</span>
              </a>

              {/* Explore Our Services */}
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 transition transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>{language === 'hi' ? 'सभी सेवाएँ देखें' : 'Explore Our Services'}</span>
                <ArrowDown className="w-4 h-4 text-amber-400 animate-pulse" />
              </button>
            </div>

            {/* Quick Micro-Features Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0 text-xs">
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">100% Error-Free Forms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/10">
                <Sun className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">₹78,000 Solar Subsidy</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/10 col-span-2 sm:col-span-1">
                <Printer className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">5 Min Passport Photos</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composite (Workstation + Solar + Digital Badges) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Visual Showcase */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-br from-slate-900 to-brand-navy p-1">
                
                {/* Visual Imagery */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80"
                    alt="Modern computer workstation and digital services"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent"></div>

                  {/* Overlaid Pill Badge */}
                  <div className="absolute top-3 left-3 bg-brand-navy-dark/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 shadow">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Digital Hub & Internet Cafe</span>
                  </div>

                  {/* Solar Highlight Pill */}
                  <div className="absolute top-3 right-3 bg-amber-500/90 text-brand-navy-dark font-extrabold px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow">
                    <Sun className="w-3.5 h-3.5" />
                    <span>PM Surya Ghar</span>
                  </div>

                  {/* Bottom Image Overlay Content */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-brand-navy/90 backdrop-blur-md rounded-lg border border-white/10">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-white text-sm">Shubh Enterprises</p>
                        <p className="text-amber-400 text-[11px] font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>Lok Nagar, Jurakhan Kheda, Unnao</span>
                        </p>
                      </div>
                      <button
                        onClick={onOpenChecklistModal}
                        className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-[11px] font-medium transition border border-white/20"
                      >
                        Docs Checklist
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub Features Grid below image */}
                <div className="p-4 grid grid-cols-2 gap-3 text-xs bg-brand-navy-dark/80 rounded-b-xl mt-1">
                  
                  {/* Digital Services Box */}
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-amber-400/40 transition">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'ऑनलाइन सेवाएँ' : 'Online Services'}</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-snug">
                      {language === 'hi' ? 'भर्ती फॉर्म, फोटोकॉपी, एडमिट कार्ड, टिकट व मार्कशीट लेमिनेशन।' : 'Recruitment forms, xerox, admit cards, tickets & lamination.'}
                    </p>
                  </div>

                  {/* Solar Energy Box */}
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-emerald-400/40 transition">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                      <Sun className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'सोलर समाधान' : 'Solar Solutions'}</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-snug">
                      {language === 'hi' ? 'रूफटॉप सोलर से ₹78,000 तक की सब्सिडी और भारी बिजली बचत।' : 'Save huge on electricity bills with PM Surya Ghar Yojana.'}
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Verified Stamp */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-brand-navy-dark px-4 py-2.5 rounded-xl shadow-xl border-2 border-white flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-navy-dark flex-shrink-0" />
                <div className="text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-navy">100% Genuine Assistance</p>
                  <p className="text-xs font-black text-brand-navy-dark">
                    {language === 'hi' ? 'विश्वसनीय स्थानीय सेवा केंद्र' : 'Trusted Local Service Centre'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
