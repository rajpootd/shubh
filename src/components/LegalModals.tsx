import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { Language } from '../types';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  language: Language;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose, language }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-navy p-5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            ) : (
              <FileText className="w-5 h-5 text-amber-400" />
            )}
            <h3 className="font-bold text-base sm:text-lg">
              {type === 'privacy'
                ? language === 'hi'
                  ? 'गोपनीयता नीति (Privacy Policy)'
                  : 'Privacy Policy'
                : language === 'hi'
                ? 'नियम एवं शर्तें (Terms of Service)'
                : 'Terms of Service'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Shubh Enterprises & Internet Cafe</strong> (Lok Nagar, Jurakhan Kheda, Unnao, Uttar Pradesh) is committed to protecting your personal information and privacy.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Information We Collect</h4>
              <p>
                When you submit an enquiry form or visit our centre for services such as online examination forms, printing, ticket bookings, or PM Surya Ghar solar consultation, we may collect your full name, mobile number, requirement details, and necessary documents.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. How Your Information Is Used</h4>
              <p>
                Your details are used solely to process your requested online services, communicate application status, confirm ticket reservations, or provide solar consultation. We never sell, rent, or distribute your private data to third-party telemarketers.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Data Security</h4>
              <p>
                All digital print files and soft copies provided by customers are safely deleted from our public workstations upon completion of printing, scanning, or application submission to ensure student and citizen privacy.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Contact Proprietor</h4>
              <p>
                If you have questions regarding your data, contact Shubh Rajpoot at +91 7007235826 or visit our center in Unnao.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to the official website of <strong>Shubh Enterprises & Internet Cafe</strong>. By accessing this website or using our local center services, you agree to the following terms:
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Nature of Services</h4>
              <p>
                Shubh Enterprises operates as an independent private digital facilitation hub. We assist customers with data entry, online form submissions, printing, photocopy, scanning, travel booking assistance, and solar consultation.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. No Official Government Affiliation</h4>
              <p>
                We do not claim official government affiliation or recruitment board representation. Application approvals, admit card generations, exam results, and PM Surya Ghar subsidy disbursements are governed solely by the respective government authorities and DISCOMs.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Applicant Verification Responsibility</h4>
              <p>
                Customers are responsible for reviewing their application preview, spelling of names, marks, category, and fee confirmation before final submission.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Jurisdiction</h4>
              <p>
                Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Unnao, Uttar Pradesh, India.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-navy text-white text-xs font-semibold rounded-lg hover:bg-brand-navy-light transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
