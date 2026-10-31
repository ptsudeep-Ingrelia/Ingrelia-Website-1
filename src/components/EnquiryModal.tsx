import React, { useEffect } from 'react';
import { CustomerEnquiryForm } from './CustomerEnquiryForm';
import { X, Sparkles } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialApplication?: string;
  initialCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialApplication = '',
  initialCategory = '',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102743]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="text-left">
            <span className="text-[11px] font-bold tracking-widest text-[#009999] uppercase">
              Formulation & Ingredient Inquiries
            </span>
            <h2 id="enquiry-modal-title" className="text-xl sm:text-2xl font-bold text-[#102743]">
              Discuss Your Requirements
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Connect with INGRELIA’s technical and commercial specialists for personal-care solutions.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#102743] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 10-Field Customer Enquiry Form */}
        <CustomerEnquiryForm
          initialApplication={initialApplication}
          initialCategory={initialCategory}
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
};
