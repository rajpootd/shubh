import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Trash2, Download, Search, ShieldCheck, Inbox } from 'lucide-react';
import { EnquiryData, Language } from '../types';

interface AdminEnquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AdminEnquiriesModal: React.FC<AdminEnquiriesModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [enquiries, setEnquiries] = useState<EnquiryData[]>([]);
  const [search, setSearch] = useState('');

  const loadEnquiries = () => {
    try {
      const stored = localStorage.getItem('shubh_enterprises_enquiries');
      if (stored) {
        setEnquiries(JSON.parse(stored));
      } else {
        setEnquiries([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadEnquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this enquiry record?')) {
      const updated = enquiries.filter(item => item.id !== id);
      setEnquiries(updated);
      localStorage.setItem('shubh_enterprises_enquiries', JSON.stringify(updated));
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all stored customer enquiries?')) {
      setEnquiries([]);
      localStorage.removeItem('shubh_enterprises_enquiries');
    }
  };

  const filteredEnquiries = enquiries.filter(item =>
    item.fullName.toLowerCase().includes(search.toLowerCase()) ||
    item.mobile.includes(search) ||
    item.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-navy-dark text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-brand-navy-dark flex items-center justify-center font-bold">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                Shubh Enterprises • Customer Enquiries Dashboard
              </h3>
              <p className="text-xs text-amber-400">
                Proprietor: Shubh Rajpoot | Total Inquiries: {enquiries.length}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar: Search and Clear */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, mobile, service..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-1 focus:ring-brand-navy bg-white"
            />
          </div>

          {enquiries.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs text-red-600 hover:text-red-800 font-semibold flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-red-50 border border-red-200 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Stored Enquiries</span>
            </button>
          )}
        </div>

        {/* Enquiries List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredEnquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Inbox className="w-12 h-12 mx-auto text-slate-300" />
              <p className="text-sm font-semibold text-slate-600">No customer enquiries received yet.</p>
              <p className="text-xs">When users submit the website enquiry form, their details will instantly appear here.</p>
            </div>
          ) : (
            filteredEnquiries.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-amber-400 transition space-y-2.5"
              >
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-300">
                      Ref: {item.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-1">
                      {item.fullName}
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 p-2 rounded-lg">
                    <span className="text-slate-500 block text-[10px] font-semibold uppercase">Mobile Number:</span>
                    <span className="font-bold text-slate-800 font-mono text-xs sm:text-sm">
                      +91 {item.mobile}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2 rounded-lg">
                    <span className="text-slate-500 block text-[10px] font-semibold uppercase">Service Required:</span>
                    <span className="font-semibold text-brand-navy">
                      {item.service}
                    </span>
                  </div>
                </div>

                <div className="text-xs bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/60 text-slate-700">
                  <span className="font-bold text-amber-900 block text-[11px] mb-0.5">Message / Requirement:</span>
                  <p>{item.message}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 gap-2">
                  <div className="flex gap-2">
                    <a
                      href={`tel:${item.mobile}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-brand-red text-white rounded-lg text-xs font-semibold shadow-sm hover:bg-brand-red-hover transition"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Client</span>
                    </a>

                    <a
                      href={`https://wa.me/91${item.mobile}?text=${encodeURIComponent(
                        `Hello ${item.fullName}, regarding your enquiry for ${item.service} at Shubh Enterprises...`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold shadow-sm hover:bg-emerald-500 transition"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Client</span>
                    </a>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-slate-400 hover:text-red-600 p-1 rounded transition"
                    title="Delete record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Confidential Owner Tool • Shubh Enterprises Unnao</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-brand-navy text-white rounded-lg font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
