import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS_DATA, BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-navy text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {language === 'hi' ? 'आपके प्रश्नों के स्पष्ट उत्तर' : 'Clear Answers to Common Questions'}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'hi'
              ? 'सोलर योजना, सरकारी परीक्षा फॉर्म, प्रिंटिंग और खुलने के समय से जुड़े मुख्य सवाल।'
              : 'Everything you need to know about our services, PM Surya Ghar solar subsidies, exam forms, and visiting hours.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {language === 'hi' ? faq.questionHi : faq.questionEn}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-navy text-white' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{language === 'hi' ? faq.answerHi : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-sm sm:text-base">
              {language === 'hi' ? 'क्या आपका कोई अन्य सवाल है?' : 'Still have questions?'}
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              {language === 'hi'
                ? 'संचालक शुभ राजपूत जी से सीधे फोन या व्हाट्सएप पर बात करें।'
                : 'Call or WhatsApp proprietor Shubh Rajpoot directly.'}
            </p>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'hi' ? 'व्हाट्सएप पर पूछें' : 'Ask on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
