import React from 'react';
import { User, MapPin, Phone, ShieldCheck, CheckCircle2, HeartHandshake, Sparkles, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onOpenChecklistModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onOpenChecklistModal,
}) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Visual Frame */}
              <div className="rounded-3xl overflow-hidden bg-brand-navy p-2 shadow-2xl border border-slate-200">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
                    alt="Digital documentation and customer service in Unnao"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 bg-brand-navy-dark/95 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500 text-brand-navy font-black flex items-center justify-center text-sm">
                        SR
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{BUSINESS_INFO.owner}</p>
                        <p className="text-amber-400 text-xs">{language === 'hi' ? 'संचालक एवं मुख्य परामर्शदाता' : 'Proprietor & Digital Consultant'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 text-slate-800 max-w-xs">
                <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase mb-1">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <span>Unnao, Uttar Pradesh</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Lok Nagar, Jurakhan Kheda (Near Sukh Dev Ata Chakki)
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-navy text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{language === 'hi' ? 'हमारे बारे में' : 'About Us'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                About Shubh Enterprises & Internet Cafe
              </h2>

              <p className="text-base sm:text-lg font-bold text-amber-700 font-hindi">
                “आपके भरोसे और सहूलियत का एक मात्र ठिकाना”
              </p>
            </div>

            {/* Description Text */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                {language === 'hi' ? (
                  <>
                    <strong className="text-slate-900">शुभ एंटरप्राइजेज एंड इंटरनेट कैफे</strong> लोक नगर, जुराखन खेड़ा, उन्नाव में स्थित एक आधुनिक और विश्वसनीय डिजिटल सेवा केंद्र है। हमारा उद्देश्य स्थानीय नागरिकों, विद्यार्थियों, व्यापारियों और परिवारों को सभी प्रकार की ऑनलाइन, कंप्यूटर, प्रिंटिंग और सरकारी दस्तावेजीकरण सेवाएँ एक ही स्थान पर सुलभ कराना है।
                  </>
                ) : (
                  <>
                    <strong className="text-slate-900">Shubh Enterprises & Internet Cafe</strong> is a modern, dependable local service centre situated at Lok Nagar, Jurakhan Kheda, Unnao, Uttar Pradesh. We are established with a clear mission: to provide convenient digital, computer, printing, and documentation services, along with solar energy consultation and related services where available.
                  </>
                )}
              </p>

              <p>
                {language === 'hi' ? (
                  <>
                    चाहे प्रतियोगी परीक्षाओं (जैसे यूपी पुलिस, एसएससी, रेलवे) के फॉर्म बिना किसी गलती के भरना हो, मात्र 5 मिनट में साफ पासपोर्ट फोटो प्राप्त करना हो, मार्कशीट का मजबूत लेमिनेशन कराना हो, या केंद्र सरकार की <strong className="text-slate-900">पीएम सूर्य घर मुफ्त बिजली योजना</strong> के तहत छत पर सोलर पैनल लगाकर भारी बिजली बिल बचाना हो—संचालक <strong className="text-brand-navy">शुभ राजपूत</strong> और हमारी टीम हर कदम पर आपका मार्गदर्शन करती है।
                  </>
                ) : (
                  <>
                    Whether you need error-free competitive examination submissions (UP Police, SSC, UPSSSC, Railway), instant 5-minute passport photos with compliant backgrounds, high-speed document printing and lamination, or expert consultation on the central government's <strong className="text-slate-900">PM Surya Ghar Muft Bijli Yojana</strong> to slash your monthly electricity bills—proprietor <strong className="text-brand-navy">Shubh Rajpoot</strong> and our local team are here to help.
                  </>
                )}
              </p>
            </div>

            {/* Business Details Box */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">{language === 'hi' ? 'संचालक / संस्थापक:' : 'Owner / Founder:'}</span>
                  <span className="font-bold text-slate-800">{BUSINESS_INFO.owner}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">{language === 'hi' ? 'स्थान / पता:' : 'Location:'}</span>
                  <span className="font-semibold text-slate-800">{BUSINESS_INFO.addressEn}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow transition"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'बात करें: 7007235826' : 'Call Shubh Rajpoot'}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm transition"
              >
                <Navigation className="w-4 h-4 text-brand-red" />
                <span>{language === 'hi' ? 'दुकान का रास्ता देखें' : 'View Location on Map'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
