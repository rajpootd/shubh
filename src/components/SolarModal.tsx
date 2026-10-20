import React, { useState, useEffect } from 'react';
import { X, Sun, IndianRupee, ShieldCheck, CheckCircle2, MessageSquare, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/content';
import { Language, EnquiryData } from '../types';

interface SolarModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  preselectedCapacity?: string;
}

export const SolarModal: React.FC<SolarModalProps> = ({
  isOpen,
  onClose,
  language,
  preselectedCapacity = '2 kW Rooftop Solar System',
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(preselectedCapacity);
  const [electricityBillAmt, setElectricityBillAmt] = useState('');
  const [locality, setLocality] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (preselectedCapacity) {
      setSelectedPlan(preselectedCapacity);
    }
  }, [preselectedCapacity]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = mobile.replace(/\D/g, '');

    if (!fullName.trim() || fullName.trim().length < 2) {
      setError(language === 'hi' ? 'कृपया अपना पूरा नाम लिखें।' : 'Please enter your full name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      setError(language === 'hi' ? 'कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');

    const newEnquiry: EnquiryData = {
      id: `SOLAR-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      mobile: phoneDigits,
      service: `PM Surya Ghar Solar Consultation - ${selectedPlan}`,
      datePreference: 'Immediate / Solar Survey',
      message: `Solar Enquiry for ${selectedPlan}. Monthly Bill: ₹${electricityBillAmt || 'N/A'}. Locality: ${locality || 'Unnao'}.`,
      status: 'new'
    };

    // Genuine storage
    try {
      const existing = localStorage.getItem('shubh_enterprises_enquiries');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newEnquiry);
      localStorage.setItem('shubh_enterprises_enquiries', JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }

    try {
      confetti({ particleCount: 70, spread: 60 });
    } catch (e) {}

    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*PM Surya Ghar Solar Enquiry - Shubh Enterprises*\n` +
      `--------------------------------\n` +
      `*Name:* ${fullName}\n` +
      `*Mobile:* ${mobile}\n` +
      `*Selected System:* ${selectedPlan}\n` +
      `*Approx Monthly Bill:* ₹${electricityBillAmt || 'N/A'}\n` +
      `*Locality / Address:* ${locality || 'Unnao'}\n` +
      `--------------------------------\n` +
      `Requesting solar consultation & subsidy guidance in Unnao.`;

    window.open(`https://wa.me/917007235826?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-6 text-brand-navy-dark flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy text-amber-400 flex items-center justify-center flex-shrink-0 shadow">
              <Sun className="w-7 h-7" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-navy text-white text-[10px] font-extrabold uppercase tracking-wider">
                PM Surya Ghar Scheme
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-navy leading-tight mt-1">
                {language === 'hi' ? 'सोलर सब्सिडी एवं परामर्श फॉर्म' : 'Solar Subsidy & Consultation'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-brand-navy/70 hover:text-brand-navy rounded-lg hover:bg-black/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-slate-800">
                {language === 'hi' ? 'सोलर परामर्श अनुरोध दर्ज हो गया!' : 'Solar Consultation Request Sent!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {language === 'hi'
                  ? `धन्यवाद ${fullName}! आपकी जानकारी सुरक्षित हो चुकी है। तुरंत जानकारी प्राप्त करने के लिए नीचे दिए गए बटन से व्हाट्सएप पर भी संपर्क कर सकते हैं।`
                  : `Thank you, ${fullName}! Your request is received. You can also chat directly on WhatsApp.`}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-xl text-xs hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Subsidy Highlight Note */}
              <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <span className="font-bold">Govt Direct Subsidy:</span>
                <span className="font-extrabold text-emerald-700 bg-white px-2.5 py-0.5 rounded border border-emerald-300">
                  Up to ₹78,000 (Central DBT)
                </span>
              </div>

              {error && (
                <div className="p-2.5 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs">
                  {error}
                </div>
              )}

              {/* Full Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    10-Digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="7007235826"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Plan Choice & Monthly Bill */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Rooftop System Capacity
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                  >
                    <option value="1 kW Rooftop Solar System">1 kW System (₹30,000 Subsidy)</option>
                    <option value="2 kW Rooftop Solar System">2 kW System (₹60,000 Subsidy)</option>
                    <option value="3 kW Rooftop Solar System">3 kW System (₹78,000 Subsidy - Popular)</option>
                    <option value="4 kW+ Rooftop Solar System">4 kW+ System (₹78,000 Subsidy)</option>
                    <option value="Commercial / Custom Solar Setup">Commercial / Custom Solar Setup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Approx Monthly Power Bill
                  </label>
                  <input
                    type="text"
                    value={electricityBillAmt}
                    onChange={(e) => setElectricityBillAmt(e.target.value)}
                    placeholder="e.g. ₹2,500"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              </div>

              {/* Locality in Unnao */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  House Location / Area in Unnao
                </label>
                <input
                  type="text"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="e.g. Lok Nagar, Jurakhan Kheda, Civil Lines, etc."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-brand-navy-dark font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition"
              >
                Book Solar Consultation & Subsidy Check
              </button>

            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500">
          Shubh Enterprises • Near Sukh Dev Ata Chakki, Lok Nagar, Unnao
        </div>
      </div>
    </div>
  );
};
