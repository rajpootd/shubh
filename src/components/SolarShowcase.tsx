import React, { useState } from 'react';
import { 
  Sun, Zap, Calculator, CheckCircle2, ShieldCheck, ArrowRight, 
  MessageSquare, Phone, Sparkles, Home, IndianRupee, Layers, FileCheck
} from 'lucide-react';
import { SOLAR_PLANS_DATA, BUSINESS_INFO } from '../data/content';
import { Language } from '../types';

interface SolarShowcaseProps {
  language: Language;
  onOpenSolarModal: (customCapacity?: string) => void;
}

export const SolarShowcase: React.FC<SolarShowcaseProps> = ({
  language,
  onOpenSolarModal,
}) => {
  // Interactive Calculator State
  const [monthlyBill, setMonthlyBill] = useState<number>(2500);

  // Dynamic recommendations based on monthly bill
  const calculatedCapacity = monthlyBill <= 1200 ? 1 : monthlyBill <= 2800 ? 2 : monthlyBill <= 4500 ? 3 : 4;
  const subsidyAmount = calculatedCapacity === 1 ? 30000 : calculatedCapacity === 2 ? 60000 : 78000;
  const estimatedSavings = Math.round(monthlyBill * 0.85);
  const estimatedRoofArea = calculatedCapacity * 105;

  return (
    <section id="solar" className="py-16 lg:py-24 bg-gradient-to-b from-brand-navy-dark via-[#091E3A] to-brand-navy text-white relative overflow-hidden">
      
      {/* Background Solar Ray / Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Headings */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/30 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow">
            <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>PM Surya Ghar: Muft Bijli Yojana Facilitation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            “Switch to Solar. Save Energy. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
              Build a Brighter Future.
            </span>”
          </h2>

          <p className="mt-4 text-lg sm:text-xl font-bold text-amber-300 font-hindi">
            “पीएम सूर्य घर योजना के अंतर्गत सोलर समाधान की जानकारी प्राप्त करें।”
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            {language === 'hi'
              ? 'केंद्र सरकार की पीएम सूर्य घर मुफ्त बिजली योजना के तहत 300 यूनिट तक मुफ्त बिजली एवं ₹78,000 तक की सीधी बैंक सब्सिडी का लाभ उठाएं।'
              : 'Save massive electricity costs and receive up to ₹78,000 central government direct bank subsidy under the PM Surya Ghar scheme.'}
          </p>
        </div>

        {/* Visual Hero Feature Card: Rooftop Solar & Modern Home */}
        <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-slate-900/60 backdrop-blur-md shadow-2xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
                alt="Rooftop solar panels on modern home under bright sunlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark lg:bg-gradient-to-r lg:from-transparent lg:to-brand-navy-dark/95"></div>
              
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-brand-navy font-bold text-xs rounded-full shadow mb-2">
                  <Sun className="w-3.5 h-3.5" />
                  <span>300 Units Free Power Monthly</span>
                </span>
                <p className="text-white font-bold text-sm sm:text-base drop-shadow-md">
                  {language === 'hi'
                    ? 'छत पर सोलर पैनल लगाएं, जीवन भर बिजली बिल बचाएं।'
                    : 'Clean energy, high efficiency panels with 25-year performance warranty.'}
                </p>
              </div>
            </div>

            {/* Right Benefits & Scheme Details Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                  {language === 'hi' ? 'मुख्य लाभ एवं विशेषताएँ' : 'Key Scheme Advantages'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {language === 'hi'
                    ? 'पीएम सूर्य घर योजना क्यों अपनाएं?'
                    : 'Why Adopt PM Surya Ghar Rooftop Solar?'}
                </h3>

                <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/40">
                      <IndianRupee className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">
                        {language === 'hi' ? 'सीधी बैंक सब्सिडी (DBT)' : 'Direct Bank Transfer (DBT) Subsidy'}
                      </p>
                      <p className="text-slate-300 text-xs mt-0.5">
                        {language === 'hi'
                          ? '1 kW पर ₹30,000, 2 kW पर ₹60,000 और 3 kW पर ₹78,000 की केंद्रीय सब्सिडी सीधे खाते में।'
                          : '₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW and above.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/40">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">
                        {language === 'hi' ? 'बिजली बिल में 80% से 95% तक की कमी' : '80% - 95% Electricity Bill Cut'}
                      </p>
                      <p className="text-slate-300 text-xs mt-0.5">
                        {language === 'hi'
                          ? 'दिन के समय सूरज की रोशनी से आपके पंखे, एसी, फ्रिज व मोटर सीधे सोलर बिजली से चलेंगे।'
                          : 'Generate your own power during daylight hours and export surplus power to the grid via Net Meter.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-500/40">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">
                        {language === 'hi' ? '25 साल की पैनल वारंटी' : '25-Year Long-Term Panel Performance'}
                      </p>
                      <p className="text-slate-300 text-xs mt-0.5">
                        {language === 'hi'
                          ? 'एक बार लगाने के बाद मात्र 3 वर्षों में पूरी लागत की भरपाई, फिर अगले 22 साल मुफ्त बिजली।'
                          : 'System cost typically pays back within 3 to 3.5 years through regular monthly bill savings.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenSolarModal(`${calculatedCapacity} kW`)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-brand-navy-dark font-extrabold px-5 py-2.5 rounded-xl shadow-lg transition active:scale-95 text-xs sm:text-sm"
                >
                  <Sun className="w-4 h-4" />
                  <span>{language === 'hi' ? 'सोलर परामर्श बुक करें' : 'Get Solar Consultation'}</span>
                </button>

                <a
                  href={`https://wa.me/917007235826?text=${encodeURIComponent(
                    `Hello Shubh Enterprises, I want information about PM Surya Ghar Rooftop Solar installation in Unnao. My approx monthly bill is ₹${monthlyBill}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl shadow transition text-xs sm:text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Solar Savings & Subsidy Calculator */}
        <div className="bg-gradient-to-br from-slate-900 to-brand-navy p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-500/30 shadow-2xl mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>{language === 'hi' ? 'सोलर बचत एवं सब्सिडी कैलकुलेटर' : 'Solar Savings & Subsidy Calculator'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {language === 'hi' ? 'जानिए आपको कितना लाभ और सब्सिडी मिलेगी' : 'Calculate Your Subsidy & Monthly Savings'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {language === 'hi'
                ? 'अपना अनुमानित मासिक बिजली बिल चुनें और तुरंत उपयुक्त सोलर क्षमता देखें।'
                : 'Select your average monthly electricity bill to calculate recommended plant size & subsidy.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Slider Control Column */}
            <div className="lg:col-span-5 bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-200">
                    {language === 'hi' ? 'मासिक बिजली बिल (Monthly Bill):' : 'Average Monthly Bill:'}
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-amber-400">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="8000"
                  step="250"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                  <span>₹500</span>
                  <span>₹2,500</span>
                  <span>₹5,000</span>
                  <span>₹8,000+</span>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="space-y-1.5">
                <span className="text-xs text-slate-400">Quick Select:</span>
                <div className="grid grid-cols-4 gap-2">
                  {[1000, 2000, 3500, 5000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setMonthlyBill(amt)}
                      className={`py-1.5 text-xs font-semibold rounded-lg border transition ${
                        monthlyBill === amt
                          ? 'bg-amber-400 text-brand-navy-dark border-amber-300 font-bold'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200">
                <p>
                  <span className="font-bold">Recommendation:</span> For a bill of ₹{monthlyBill.toLocaleString('en-IN')}, a <span className="font-extrabold text-amber-300">{calculatedCapacity} kW Rooftop Solar System</span> is ideal.
                </p>
              </div>
            </div>

            {/* Calculated Results Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-4">
              
              {/* Subsidy Box */}
              <div className="bg-gradient-to-br from-emerald-950/60 to-emerald-900/40 p-5 rounded-2xl border border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                  <IndianRupee className="w-4 h-4" />
                  <span>Central Govt Subsidy</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-300">
                  ₹{subsidyAmount.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-emerald-200/80 mt-1">
                  {language === 'hi' ? 'सीधे आपके बैंक खाते में (DBT)' : 'Directly credited into your bank account'}
                </p>
              </div>

              {/* Monthly Bill Savings Box */}
              <div className="bg-gradient-to-br from-amber-950/60 to-amber-900/40 p-5 rounded-2xl border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Estimated Bill Savings</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-amber-300">
                  ₹{estimatedSavings.toLocaleString('en-IN')} <span className="text-xs font-normal">/ month</span>
                </div>
                <p className="text-[11px] text-amber-200/80 mt-1">
                  {language === 'hi' ? 'लगभग 85% बिजली बिल की बचत' : 'Approx 85% reduction in electricity bill'}
                </p>
              </div>

              {/* Roof Area Required Box */}
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1">
                  <Home className="w-4 h-4 text-blue-400" />
                  <span>Roof Area Required</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  ~{estimatedRoofArea} <span className="text-xs font-normal text-slate-300">sq. ft.</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {language === 'hi' ? 'छाया-मुक्त पक्की या टीन की छत' : 'Shadow-free RCC or tin sheet roof'}
                </p>
              </div>

              {/* Payback Period Box */}
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Cost Payback Period</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  ~3.2 <span className="text-xs font-normal text-slate-300">Years</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {language === 'hi' ? 'उसके बाद 22 साल मुफ्त बिजली' : '22+ years of free energy thereafter'}
                </p>
              </div>

            </div>

          </div>

          {/* Calculator Bottom CTA */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              <span>* Figures calculated as per official MNRE PM Surya Ghar guidelines. Final subsidy is subject to DISCOM inspection & portal rules.</span>
            </div>

            <button
              onClick={() => onOpenSolarModal(`${calculatedCapacity} kW (Bill: ₹${monthlyBill})`)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-brand-navy-dark font-extrabold px-6 py-3 rounded-xl shadow-lg transition active:scale-95 text-xs sm:text-sm"
            >
              <span>{language === 'hi' ? `इस ${calculatedCapacity} kW सिस्टम के लिए संपर्क करें` : `Consult for this ${calculatedCapacity} kW System`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Tier System Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLAR_PLANS_DATA.map((plan) => (
            <div
              key={plan.capacityKw}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                plan.capacityKw === 3
                  ? 'bg-gradient-to-b from-slate-900 to-brand-navy border-amber-400/60 shadow-xl ring-2 ring-amber-400/40'
                  : 'bg-white/5 border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {plan.capacityKw} kW Capacity
                  </span>
                  {plan.capacityKw === 3 && (
                    <span className="px-2.5 py-0.5 bg-amber-400 text-brand-navy-dark font-black text-[10px] rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white">
                  {language === 'hi' ? plan.labelHi : plan.labelEn}
                </h4>

                <p className="text-xs text-slate-300 mt-2">
                  {language === 'hi' ? plan.suitableForHi : plan.suitableForEn}
                </p>

                <div className="my-5 py-4 border-y border-white/10 space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'hi' ? 'केंद्रीय सब्सिडी:' : 'Central Subsidy:'}</span>
                    <span className="font-extrabold text-emerald-400 text-sm">{plan.centralSubsidyInr}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'hi' ? 'मासिक बिजली बचत:' : 'Monthly Savings:'}</span>
                    <span className="font-bold text-amber-300">{plan.monthlyBillSavingsInr}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'hi' ? 'आवश्यक छत क्षेत्र:' : 'Roof Area:'}</span>
                    <span className="font-medium text-slate-200">{plan.approxRoofAreaSqFt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'hi' ? 'वारंटी अवधि:' : 'Warranty:'}</span>
                    <span className="font-medium text-slate-200">{plan.warrantyYears}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenSolarModal(`${plan.capacityKw} kW Plan`)}
                className={`w-full py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 ${
                  plan.capacityKw === 3
                    ? 'bg-amber-400 hover:bg-amber-300 text-brand-navy-dark shadow'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                }`}
              >
                <span>{language === 'hi' ? 'योजना पूछताछ करें' : 'Enquire About This Plan'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
