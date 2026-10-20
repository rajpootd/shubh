import React from 'react';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA, BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'स्थानीय ग्राहकों का अनुभव' : 'Verified Local Community Feedback'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            {language === 'hi' ? 'उन्नाव के नागरिकों का हम पर भरोसा' : 'Trusted by the Residents of Unnao'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {language === 'hi'
              ? 'सोलर परामर्श, भर्ती फॉर्म और प्रिंटिंग सेवाओं पर हमारे स्थानीय ग्राहकों की सच्ची राय।'
              : 'Genuine feedback from local students and homeowners in Lok Nagar, Jurakhan Kheda & Unnao.'}
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Customer</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{language === 'hi' ? t.commentHi : t.commentEn}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-slate-500 text-[11px]">{t.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-medium text-brand-navy bg-slate-100 px-2 py-0.5 rounded block">
                    {language === 'hi' ? t.serviceUsedHi : t.serviceUsedEn}
                  </span>
                  <span className="text-[10px] text-slate-400">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Option to share your experience on WhatsApp */}
        <div className="text-center mt-10">
          <a
            href={`https://wa.me/917007235826?text=${encodeURIComponent(
              'Hello Shubh Rajpoot, I would like to share my feedback / review for Shubh Enterprises.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-brand-navy transition"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'hi' ? 'क्या आपने हमारी सेवा ली है? अपना अनुभव साझा करें' : 'Visited Shubh Enterprises? Share your genuine feedback'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
