import React, { useState } from 'react';
import { X, FileText, CheckCircle2, AlertCircle, Sparkles, Printer } from 'lucide-react';
import { SERVICE_DOCUMENT_CHECKLISTS } from '../data/content';
import { Language } from '../types';

interface DocumentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const DocumentGuideModal: React.FC<DocumentGuideModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    SERVICE_DOCUMENT_CHECKLISTS[0].serviceId
  );

  if (!isOpen) return null;

  const currentChecklist = SERVICE_DOCUMENT_CHECKLISTS.find(
    (c) => c.serviceId === selectedServiceId
  ) || SERVICE_DOCUMENT_CHECKLISTS[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-navy-dark to-brand-navy p-6 text-white flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500 text-brand-navy text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Citizen Helper</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              {language === 'hi'
                ? 'दुकान आने से पहले क्या दस्तावेज लाएं?'
                : 'Documents Checklist to Bring Along'}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {language === 'hi'
                ? 'समय बचाने के लिए सेवा का चयन करें और आवश्यक कागजातों की सूची देखें।'
                : 'Select the service you need to view the exact checklist before visiting.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Service Selector Tabs */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-2">
          {SERVICE_DOCUMENT_CHECKLISTS.map((item) => (
            <button
              key={item.serviceId}
              onClick={() => setSelectedServiceId(item.serviceId)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedServiceId === item.serviceId
                  ? 'bg-brand-red text-white shadow-sm font-bold'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {language === 'hi' ? item.nameHi : item.nameEn}
            </button>
          ))}
        </div>

        {/* Selected Checklist Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="flex items-center gap-2 text-brand-navy font-bold text-base border-b border-slate-100 pb-2">
            <FileText className="w-5 h-5 text-amber-500" />
            <span>
              {language === 'hi' ? currentChecklist.nameHi : currentChecklist.nameEn}
            </span>
          </div>

          <ul className="space-y-3">
            {(language === 'hi' ? currentChecklist.docsHi : currentChecklist.docsEn).map(
              (doc, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-slate-50 hover:bg-amber-50/50 rounded-xl border border-slate-200 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">{doc}</span>
                </li>
              )
            )}
          </ul>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p>
              {language === 'hi'
                ? 'यदि आपके पास मूल दस्तावेज नहीं हैं, तो आप अपने मोबाइल फोन या व्हाट्सएप पर फोटो/पीडीएफ भी ला सकते हैं। हम सीधे प्रिंट कर सकते हैं।'
                : 'Tip: If you do not have physical copies, you can also bring clear photos or PDFs on your smartphone or WhatsApp for immediate printing.'}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500">
            Shubh Enterprises • Lok Nagar, Jurakhan Kheda, Unnao
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-navy text-white rounded-lg font-semibold hover:bg-brand-navy-light transition"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
