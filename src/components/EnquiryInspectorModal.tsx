import React, { useState } from 'react';
import { getStoredCustomerEnquiries, EnquirySubmissionResult } from '../services/enquiryService';
import { X, ShieldCheck, Terminal, Copy, Check, Trash2 } from 'lucide-react';

interface EnquiryInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryInspectorModal: React.FC<EnquiryInspectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [enquiries, setEnquiries] = useState<EnquirySubmissionResult[]>(getStoredCustomerEnquiries());

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    localStorage.removeItem('ingrelia_customer_enquiries');
    setEnquiries([]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102743]/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#009999]" />
              <h2 className="text-xl font-bold text-[#102743]">
                Customer Enquiry Integration & Dispatch Queue
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Inspection desk: All 10-field customer requirements validated, recorded, and formatted for CRM/ERP integration.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#102743] hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Integration Architecture summary */}
        <div className="p-4 rounded-xl bg-[#F5F7F9] border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#102743]">
            <Terminal className="w-4 h-4 text-[#009999]" />
            <span>Documented API Dispatch Contract</span>
          </div>
          <p>
            Form submissions capture all 10 required fields and multiple ingredient categories. Ready to connect to backend endpoint:
          </p>
          <div className="font-mono text-[11px] bg-white p-2.5 rounded border border-slate-200 text-slate-700">
            <span className="text-emerald-600 font-bold">POST</span> /api/enquiries/customer
          </div>
        </div>

        {/* Records list */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#102743]">
              Queued Enquiries ({enquiries.length})
            </span>
            {enquiries.length > 0 && (
              <button
                onClick={handleClear}
                className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:underline cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Local Queue</span>
              </button>
            )}
          </div>

          {enquiries.length === 0 ? (
            <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-xl space-y-2">
              <p className="text-sm font-semibold text-slate-600">No customer enquiries submitted yet.</p>
              <p className="text-xs text-slate-400">
                Submit an enquiry through the Contact Us page or Discuss Requirements modal to view the captured payload here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {enquiries.map((enq) => {
                const payloadJson = JSON.stringify(enq, null, 2);
                return (
                  <div
                    key={enq.referenceNumber}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#009999] transition-colors space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#102743]">
                          {enq.referenceNumber}
                        </span>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#009999]/10 text-[#009999]">
                          {enq.payload.industrySegment}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        {new Date(enq.timestamp).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Name</span>
                        <span className="font-medium text-[#102743]">{enq.payload.name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Company</span>
                        <span className="font-medium text-[#102743]">{enq.payload.companyName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Application</span>
                        <span className="font-medium text-[#102743]">{enq.payload.applicationOfInterest}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Categories</span>
                        <span className="truncate block font-medium text-[#009999]">
                          {enq.payload.ingredientCategoriesOfInterest?.join(', ') || 'N/A'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => handleCopy(payloadJson, enq.referenceNumber)}
                        className="inline-flex items-center gap-1.5 text-xs text-[#009999] hover:underline cursor-pointer"
                      >
                        {copiedId === enq.referenceNumber ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">Payload Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy JSON Payload</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
