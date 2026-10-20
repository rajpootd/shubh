import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageSquare, MapPin, Clock, Mail, Navigation, 
  ExternalLink, CheckCircle2, User, Sparkles, ShieldCheck 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';
import { EnquiryForm } from './EnquiryForm';

interface ContactSectionProps {
  language: Language;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  prefilledService,
}) => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check current time against opening hours (8:00 AM to 9:00 PM)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      // Open between 8 and 21 (8 AM to 9 PM)
      setIsOpenNow(currentHour >= 8 && currentHour < 21);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'संपर्क एवं स्थान' : 'Contact & Location'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {language === 'hi' ? 'हमसे मिलें या तुरंत संपर्क करें' : 'Get in Touch with Shubh Enterprises'}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'hi'
              ? 'लोक नगर, जुराखन खेड़ा, उन्नाव (सुख देव आटा चक्की के पास)। सीधे कॉल करें, व्हाट्सएप भेजें या फॉर्म भरें।'
              : 'Located at Lok Nagar, Jurakhan Kheda, Unnao. Reach us directly by phone, WhatsApp, or send an enquiry below.'}
          </p>
        </div>

        {/* Main Grid: Left Column Details & Map, Right Column Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts, Hours, Address & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Contact Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h3 className="font-extrabold text-brand-navy text-lg sm:text-xl">
                    Shubh Enterprises & Internet Cafe
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {language === 'hi' ? 'संचालक: शुभ राजपूत' : 'Proprietor: Shubh Rajpoot'}
                  </p>
                </div>

                {/* Real-time Open Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    isOpenNow
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                    }`}
                  ></span>
                  <span>{isOpenNow ? (language === 'hi' ? 'अभी खुला है' : 'Open Now') : (language === 'hi' ? 'अभी बंद है' : 'Closed Now')}</span>
                </span>
              </div>

              {/* Direct Actions: Call & WhatsApp */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover active:scale-95 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow transition"
                >
                  <Phone className="w-4 h-4 animate-bounce-gentle" />
                  <span>{language === 'hi' ? 'कॉल: 7007235826' : 'Call 7007235826'}</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Contact Information List */}
              <div className="space-y-3.5 text-xs sm:text-sm pt-2">
                
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-semibold">
                      {language === 'hi' ? 'दुकान का पता:' : 'Physical Address:'}
                    </span>
                    <p className="font-semibold text-slate-800 leading-snug">
                      {language === 'hi' ? BUSINESS_INFO.addressHi : BUSINESS_INFO.addressEn}
                    </p>
                    <p className="text-xs text-brand-red font-bold mt-0.5">
                      Landmark: {language === 'hi' ? BUSINESS_INFO.landmarkHi : BUSINESS_INFO.landmark}
                    </p>
                  </div>
                </div>

                {/* Primary & Alternate Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-semibold">
                      {language === 'hi' ? 'संपर्क नंबर (Mobile Numbers):' : 'Phone Numbers:'}
                    </span>
                    <div className="flex items-center gap-3 font-bold text-slate-800">
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-red transition">
                        +91 {BUSINESS_INFO.phone}
                      </a>
                      <span className="text-slate-300">|</span>
                      <a href={`tel:${BUSINESS_INFO.phoneAlt}`} className="hover:text-brand-red transition">
                        +91 {BUSINESS_INFO.phoneAlt}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Confirmed Opening Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-semibold">
                      {language === 'hi' ? 'खुलने का समय (Confirmed Opening Hours):' : 'Confirmed Opening Hours:'}
                    </span>
                    <p className="font-bold text-slate-800">
                      {language === 'hi' ? BUSINESS_INFO.hoursHi : BUSINESS_INFO.hoursEn}
                    </p>
                    <span className="text-[11px] text-slate-500 block">
                      {language === 'hi' ? 'रविवार सहित सातों दिन खुला है' : 'Open 7 days a week including Sundays'}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  <span>Unnao, Uttar Pradesh</span>
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Lok Nagar, Jurakhan Kheda, Unnao, Uttar Pradesh')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="h-64 w-full">
                <iframe
                  title="Shubh Enterprises Location Map"
                  src={BUSINESS_INFO.mapCoordinates.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm language={language} prefilledService={prefilledService} />
          </div>

        </div>

      </div>
    </section>
  );
};
