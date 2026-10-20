import React from 'react';
import { 
  LayoutGrid, CheckCircle2, MapPin, Zap, Sun, HeartHandshake, 
  Sparkles, ShieldCheck 
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/content';
import { Language } from '../types';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-navy group-hover:text-brand-red transition-colors" };
    switch (iconName) {
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'hi' ? 'हमारी विशेषताएँ' : 'The Shubh Advantage'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {language === 'hi'
              ? 'शुभ एंटरप्राइजेज को ही क्यों चुनें?'
              : 'Why Choose Shubh Enterprises & Internet Cafe?'}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'hi'
              ? 'उन्नाव में छात्रों, नागरिकों एवं परिवारों के लिए समर्पित, ईमानदार और त्वरित डिजिटल सेवा केंद्र।'
              : 'Dedicated, transparent and dependable digital assistance crafted for the citizens and students of Unnao.'}
          </p>
        </div>

        {/* 6 Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="group p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-400/60 shadow-sm hover:shadow-xl transition-all duration-300 card-hover-lift flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 group-hover:border-amber-300 flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                  {language === 'hi' ? item.titleHi : item.titleEn}
                </h3>

                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {language === 'hi' ? item.descHi : item.descEn}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'hi' ? 'विश्वसनीय सेवा' : 'Verified Local Hub'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
