import React, { useState, useMemo } from 'react';
import { 
  Printer, Copy, Camera, ShieldCheck, HardDrive, FileCheck2, 
  Award, FileText, Train, Plane, Globe, Cpu, SunMedium, Zap, 
  Sparkles, ShieldAlert, Search, Filter, MessageSquare, ArrowRight, 
  HelpCircle, CheckCircle, AlertCircle
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/content';
import { Language, ServiceItem } from '../types';

interface ServicesSectionProps {
  language: Language;
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
  onOpenChecklistModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onSelectServiceForEnquiry,
  onOpenChecklistModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelEn: 'All Services', labelHi: 'सभी सेवाएँ' },
    { id: 'printing', labelEn: 'Printing & Xerox', labelHi: 'प्रिंटिंग व जेरॉक्स' },
    { id: 'online_forms', labelEn: 'Govt & Online Forms', labelHi: 'ऑनलाइन फॉर्म' },
    { id: 'travel', labelEn: 'Travel & Tickets', labelHi: 'रेलवे / एयर टिकट' },
    { id: 'computer', labelEn: 'Internet & CSC', labelHi: 'इंटरनेट व कंप्यूटर' },
    { id: 'solar', labelEn: 'Solar Solutions', labelHi: 'सोलर समाधान' }
  ];

  // Filtered Services based on Category and Search Query
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      
      if (!query) return matchesCategory;

      const matchesSearch = 
        service.titleEn.toLowerCase().includes(query) ||
        service.titleHi.includes(query) ||
        service.descriptionEn.toLowerCase().includes(query) ||
        service.descriptionHi.includes(query) ||
        service.highlightsEn.some(h => h.toLowerCase().includes(query)) ||
        service.highlightsHi.some(h => h.includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Icon Resolver
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-navy" };
    switch (iconName) {
      case 'Printer': return <Printer {...props} />;
      case 'Copy': return <Copy {...props} />;
      case 'Camera': return <Camera {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'FileCheck2': return <FileCheck2 {...props} />;
      case 'Award': return <Award {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Train': return <Train {...props} />;
      case 'Plane': return <Plane {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'SunMedium': return <SunMedium {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      default: return <FileText {...props} />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'solar': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'online_forms': return 'bg-red-100 text-red-800 border-red-300';
      case 'printing': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'travel': return 'bg-purple-100 text-purple-800 border-purple-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'हमारी सम्पूर्ण सेवाएँ' : 'Our Comprehensive Services'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {language === 'hi'
              ? 'डिजिटल सेवाएँ, फॉर्म एवं सोलर समाधान'
              : 'Digital Services, Online Forms & Solar Energy'}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {language === 'hi'
              ? 'प्रतियोगी परीक्षा फॉर्म, तत्काल प्रिंटिंग, फोटोकॉपी से लेकर पीएम सूर्य घर योजना तक—सभी सुविधाएँ आधुनिक उपकरणों के साथ।'
              : 'From high-speed printing & error-free exam applications to PM Surya Ghar rooftop solar consultation in Unnao.'}
          </p>
        </div>

        {/* Search Bar & Category Tabs */}
        <div className="mb-10 space-y-4">
          
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'hi'
                    ? 'सेवा खोजें (उदा. पुलिस फॉर्म, फोटोकॉपी, सोलर, टिकट, आधार)...'
                    : 'Search any service (e.g. Police Form, Solar, Passport Photo, Ticket)...'
                }
                className="w-full pl-11 pr-10 py-3 rounded-full border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy shadow-sm transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const count = cat.id === 'all' 
                ? SERVICES_DATA.length 
                : SERVICES_DATA.filter(s => s.category === cat.id).length;

              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 shadow-sm ${
                    isSelected
                      ? 'bg-brand-navy text-white shadow-md ring-2 ring-amber-400 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{language === 'hi' ? cat.labelHi : cat.labelEn}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-amber-400 text-brand-navy font-bold' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & Checklist Helper Button */}
        <div className="flex flex-wrap justify-between items-center mb-6 text-xs sm:text-sm text-slate-600 gap-2">
          <p>
            {language === 'hi'
              ? `${filteredServices.length} सेवाएँ प्रदर्शित हैं`
              : `Showing ${filteredServices.length} verified services`}
            {searchQuery && ` for "${searchQuery}"`}
          </p>

          <button
            onClick={onOpenChecklistModal}
            className="inline-flex items-center gap-1.5 text-brand-red font-semibold hover:text-brand-red-dark underline underline-offset-2"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{language === 'hi' ? 'दुकान आने से पहले क्या दस्तावेज लाएं? (चेकलिस्ट देखें)' : 'Documents to bring along (View Checklist)'}</span>
          </button>
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">
              {language === 'hi' ? 'कोई सेवा नहीं मिली' : 'No Services Found'}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {language === 'hi'
                ? 'कृपया दूसरा शब्द खोजें या श्रेणी बदलें।'
                : 'Try searching with a different keyword or category.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-brand-navy text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden card-hover-lift group"
              >
                {/* Card Top Banner / Ribbon if Featured */}
                <div className="p-6 pb-4">
                  
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-2 transition-transform shadow-sm">
                      {renderIcon(service.iconName)}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {service.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-black uppercase tracking-wider shadow">
                          Popular
                        </span>
                      )}
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getCategoryBadgeClass(service.category)}`}>
                        {service.category === 'solar' ? 'Solar Energy' : service.category === 'printing' ? 'Printing & Xerox' : service.category === 'travel' ? 'Travel Booking' : 'Online Forms'}
                      </span>
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors leading-snug">
                    {language === 'hi' ? service.titleHi : service.titleEn}
                  </h3>

                  <p className="text-xs font-medium text-amber-700 mt-1">
                    {language === 'hi' ? service.subtitleHi : service.subtitleEn}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {language === 'hi' ? service.descriptionHi : service.descriptionEn}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {(language === 'hi' ? service.highlightsHi : service.highlightsEn).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  
                  {/* WhatsApp Quick Direct Enquiry */}
                  <a
                    href={`https://wa.me/917007235826?text=${encodeURIComponent(
                      `Hello Shubh Enterprises, I would like to inquire about: ${service.titleEn} (${service.titleHi}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-lg text-xs font-semibold transition"
                    title="Send instant WhatsApp enquiry"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Book / Fill Enquiry Modal */}
                  <button
                    onClick={() => onSelectServiceForEnquiry(service.titleEn)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-navy hover:bg-brand-navy-light text-white rounded-lg text-xs font-semibold shadow hover:shadow-md transition active:scale-95"
                  >
                    <span>{language === 'hi' ? 'पूछताछ करें' : 'Enquire'}</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regulatory & Authorisation Disclaimer (Strict adherence to guidelines) */}
        <div className="mt-14 bg-amber-50 border border-amber-300/80 rounded-2xl p-5 sm:p-6 text-amber-950 text-xs sm:text-sm shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900">
                {language === 'hi' ? 'पारदर्शिता एवं आधिकारिक नियम स्पष्टीकरण:' : 'Transparency & Regulatory Compliance Notice:'}
              </h4>
              <p className="text-amber-900/90 leading-relaxed text-xs">
                {language === 'hi'
                  ? 'शुभ एंटरप्राइजेज एंड इंटरनेट कैफे एक निजी एवं स्वतंत्र ग्राहक सुविधा केंद्र है, जो नागरिकों व छात्रों को ऑनलाइन फॉर्म भरने, प्रिंटिंग, टिकट बुकिंग मार्गदर्शन एवं सोलर सिस्टम परामर्श में सहायता प्रदान करता है। हम किसी सरकारी विभाग, भर्ती बोर्ड या सब्सिडी का मालिकाना दावा नहीं करते। अंतिम परीक्षा परिणाम, सरकारी स्वीकृति एवं सब्सिडी वितरण संबंधित सरकारी विभागों / डिस्कॉम (DISCOM) के नियमों के अधीन है।'
                  : 'Shubh Enterprises & Internet Cafe operates as an independent local digital facilitation centre assisting applicants with typing, documentation, online form submissions, travel booking guidance, and PM Surya Ghar solar consultation. We do not claim official government affiliation, guaranteed exam selections, or guaranteed subsidy disbursements. All subsidy and portal approvals are governed by official DISCOM and government regulations.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
