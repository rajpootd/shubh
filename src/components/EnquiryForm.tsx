import React, { useState } from 'react';
import { 
  Send, Phone, User, MessageSquare, CheckCircle2, AlertCircle, 
  Sparkles, Calendar, ShieldCheck, ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';
import { Language, EnquiryData } from '../types';

interface EnquiryFormProps {
  language: Language;
  prefilledService?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  language,
  prefilledService = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState(prefilledService || 'Govt & Non-Govt Online Form Filling');
  const [datePreference, setDatePreference] = useState('');
  const [message, setMessage] = useState('');
  
  // Anti-spam Honeypot field
  const [websiteUrlHoneypot, setWebsiteUrlHoneypot] = useState('');

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submissionSuccess, setSubmissionSuccess] = useState<EnquiryData | null>(null);

  // Update prefilled service if changed from props
  React.useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errors.fullName = language === 'hi' 
        ? 'कृपया अपना पूरा नाम दर्ज करें।' 
        : 'Please enter your full name (minimum 2 characters).';
    }

    // Indian mobile phone regex: 10 digits starting with 6, 7, 8, or 9
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = mobile.replace(/\D/g, '');
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.mobile = language === 'hi'
        ? 'कृपया वैध 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें (उदा. 9876543210)।'
        : 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
    }

    if (!service) {
      errors.service = language === 'hi' 
        ? 'कृपया आवश्यक सेवा का चयन करें।' 
        : 'Please select the service required.';
    }

    if (!message.trim() || message.trim().length < 4) {
      errors.message = language === 'hi'
        ? 'कृपया अपनी आवश्यकता या पूछताछ का संक्षिप्त विवरण लिखें।'
        : 'Please describe your requirement (at least 4 characters).';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check Honeypot spam field
    if (websiteUrlHoneypot) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const refId = `SE-${Date.now().toString().slice(-6)}`;
    const newEnquiry: EnquiryData = {
      id: refId,
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      mobile: mobile.replace(/\D/g, ''),
      service,
      datePreference: datePreference || 'Flexible / Today',
      message: message.trim(),
      status: 'new'
    };

    // 1. Save genuinely to LocalStorage
    try {
      const existing = localStorage.getItem('shubh_enterprises_enquiries');
      const enquiriesList: EnquiryData[] = existing ? JSON.parse(existing) : [];
      enquiriesList.unshift(newEnquiry);
      localStorage.setItem('shubh_enterprises_enquiries', JSON.stringify(enquiriesList));
    } catch (err) {
      console.error('Failed to save enquiry in storage', err);
    }

    // 2. Trigger festive confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    // 3. Mark success
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(newEnquiry);
    }, 600);
  };

  const handleWhatsAppForward = () => {
    if (!submissionSuccess) return;

    const text = `*New Service Enquiry - Shubh Enterprises*\n` +
      `--------------------------------\n` +
      `*Ref ID:* ${submissionSuccess.id}\n` +
      `*Name:* ${submissionSuccess.fullName}\n` +
      `*Mobile:* ${submissionSuccess.mobile}\n` +
      `*Service Required:* ${submissionSuccess.service}\n` +
      `*Preferred Date:* ${submissionSuccess.datePreference}\n` +
      `*Details:* ${submissionSuccess.message}\n` +
      `--------------------------------\n` +
      `Sent via Shubh Enterprises Website (Unnao)`;

    const waUrl = `https://wa.me/917007235826?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const resetForm = () => {
    setFullName('');
    setMobile('');
    setDatePreference('');
    setMessage('');
    setSubmissionSuccess(null);
    setFormErrors({});
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200">
      
      {/* Form Top Title */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'त्वरित पूछताछ एवं बुकिंग' : 'Quick Service Enquiry'}</span>
        </div>
        <h3 className="text-2xl font-black text-brand-navy">
          {language === 'hi' ? 'अपनी ऑनलाइन सेवा या सोलर जानकारी हेतु लिखें' : 'Send Your Enquiry or Service Request'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {language === 'hi'
            ? 'हम तुरंत आपके नंबर पर संपर्क करेंगे अथवा आप सीधे व्हाट्सएप पर भेज सकते हैं।'
            : 'Fill in your details below and our team will get back to you promptly.'}
        </p>
      </div>

      {/* Success State View */}
      {submissionSuccess ? (
        <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-black text-emerald-900">
              {language === 'hi' ? 'पूछताछ सफलतापूर्वक दर्ज की गई!' : 'Enquiry Successfully Registered!'}
            </h4>
            <p className="text-xs font-bold text-emerald-700">
              Reference ID: <span className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-300">{submissionSuccess.id}</span>
            </p>
            <p className="text-xs sm:text-sm text-emerald-800 pt-1">
              {language === 'hi'
                ? `धन्यवाद ${submissionSuccess.fullName}! आपकी पूछताछ हमारे सिस्टम में सुरक्षित कर ली गई है। शीघ्र ही संचालक शुभ राजपूत आपसे संपर्क करेंगे।`
                : `Thank you, ${submissionSuccess.fullName}! Your enquiry is registered. Proprietor Shubh Rajpoot will connect with you soon.`}
            </p>
          </div>

          {/* Direct WhatsApp Forward Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleWhatsAppForward}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl shadow-md transition active:scale-95 text-xs sm:text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'hi' ? 'शुभ राजपूत जी को व्हाट्सएप भेजें' : 'Send Copy Directly via WhatsApp'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={resetForm}
              className="px-4 py-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-300 transition text-xs sm:text-sm"
            >
              {language === 'hi' ? 'अन्य पूछताछ भेजें' : 'Submit Another Enquiry'}
            </button>
          </div>
        </div>
      ) : (
        /* The Actual Input Form */
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Honeypot field for spam bots (invisible to real humans) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Leave empty</label>
            <input
              type="text"
              id="website_url"
              tabIndex={-1}
              autoComplete="off"
              value={websiteUrlHoneypot}
              onChange={(e) => setWebsiteUrlHoneypot(e.target.value)}
            />
          </div>

          {/* Full Name & Mobile Number Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'आपका पूरा नाम (Full Name) *' : 'Full Name *'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                  }}
                  placeholder={language === 'hi' ? 'उदा. अमित कुमार' : 'e.g. Amit Kumar'}
                  className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm transition focus:outline-none focus:ring-2 ${
                    formErrors.fullName
                      ? 'border-red-500 focus:ring-red-300 bg-red-50/30'
                      : 'border-slate-300 focus:ring-brand-navy/30 focus:border-brand-navy bg-white'
                  }`}
                />
              </div>
              {formErrors.fullName && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{formErrors.fullName}</span>
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'मोबाइल नंबर (10-Digit Mobile) *' : 'Mobile Number *'}
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-500 text-xs font-bold border-r pr-2 border-slate-200">
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    if (formErrors.mobile) setFormErrors({ ...formErrors, mobile: '' });
                  }}
                  placeholder="7007235826"
                  className={`w-full pl-16 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm font-mono tracking-wider transition focus:outline-none focus:ring-2 ${
                    formErrors.mobile
                      ? 'border-red-500 focus:ring-red-300 bg-red-50/30'
                      : 'border-slate-300 focus:ring-brand-navy/30 focus:border-brand-navy bg-white'
                  }`}
                />
              </div>
              {formErrors.mobile && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{formErrors.mobile}</span>
                </p>
              )}
            </div>

          </div>

          {/* Service Required Dropdown & Date Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Service Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'आवश्यक सेवा (Select Service) *' : 'Service Required *'}
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
              >
                <optgroup label="Government & Online Forms">
                  <option value="Govt & Non-Govt Online Form Filling">Govt & Exam Form (Police, SSC, Railway)</option>
                  <option value="Income, Caste, Domicile Certificates">Income / Caste / Domicile (ई-डिस्ट्रिक्ट)</option>
                  <option value="Aadhaar Related Assistance">Aadhaar Related Assistance</option>
                  <option value="UP Scholarship Application">UP Scholarship Application</option>
                </optgroup>

                <optgroup label="Solar Energy (PM Surya Ghar)">
                  <option value="PM Surya Ghar 1 kW Solar Consultation">PM Surya Ghar 1 kW Solar Setup</option>
                  <option value="PM Surya Ghar 2 kW Solar Consultation">PM Surya Ghar 2 kW Solar Setup</option>
                  <option value="PM Surya Ghar 3 kW Solar Consultation">PM Surya Ghar 3 kW Solar Setup</option>
                  <option value="Solar Feasibility & Subsidy Guidance">Solar Feasibility & Subsidy Guidance</option>
                </optgroup>

                <optgroup label="Printing, Photos & Cafe">
                  <option value="High Quality Colour / BW Printing">Laser Colour / B&W Printing</option>
                  <option value="Photocopy & Document Scanning">Photocopy (Xerox) & Scanning</option>
                  <option value="Passport Size Photographs">Instant Passport Size Photos</option>
                  <option value="Lamination Services">Marksheet / Card Lamination</option>
                  <option value="Computer & Internet Access">Computer & High-Speed Internet Access</option>
                </optgroup>

                <optgroup label="Travel & Utility">
                  <option value="Railway Ticket Booking Assistance">Railway (Train) Ticket Assistance</option>
                  <option value="Air Flight Ticket Booking Assistance">Air Flight Ticket Assistance</option>
                  <option value="Electricity Bill & CSC Services">Electricity Bill & Utility Payment</option>
                  <option value="Other Service Enquiry">Other General Enquiry</option>
                </optgroup>
              </select>
            </div>

            {/* Date Preference */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'hi' ? 'दुकान आने की प्राथमिकता (Preferred Date)' : 'Preferred Date / Time'}
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  value={datePreference}
                  onChange={(e) => setDatePreference(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                />
              </div>
            </div>

          </div>

          {/* Message / Requirement Details */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {language === 'hi' ? 'पूछताछ विवरण या संदेश (Message) *' : 'Message or Enquiry Details *'}
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
              }}
              placeholder={
                language === 'hi'
                  ? 'अपनी आवश्यकता के बारे में बताएं (उदा. मुझे यूपी पुलिस भर्ती फॉर्म भरवाना है / मुझे 2 किलोवाट सोलर लगवाने की जानकारी चाहिए)...'
                  : 'Tell us what you need assistance with (e.g., UP Police exam form, 2 kW rooftop solar details, passport photo copies)...'
              }
              className={`w-full p-3 rounded-xl border text-xs sm:text-sm transition focus:outline-none focus:ring-2 ${
                formErrors.message
                  ? 'border-red-500 focus:ring-red-300 bg-red-50/30'
                  : 'border-slate-300 focus:ring-brand-navy/30 focus:border-brand-navy bg-white'
              }`}
            ></textarea>
            {formErrors.message && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{formErrors.message}</span>
              </p>
            )}
          </div>

          {/* Privacy Note */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>
              {language === 'hi'
                ? 'आपकी जानकारी 100% सुरक्षित है। इसका उपयोग केवल आपकी सहायता हेतु किया जाएगा।'
                : 'Your contact details are strictly confidential and used solely to assist your query.'}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 active:scale-[0.99] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{language === 'hi' ? 'पूछताछ सबमिट करें' : 'Submit Service Enquiry'}</span>
              </>
            )}
          </button>

        </form>
      )}

    </div>
  );
};
