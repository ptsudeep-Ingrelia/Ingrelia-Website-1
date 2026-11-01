import React, { useState } from 'react';
import {
  CustomerEnquiryPayload,
  EnquirySubmissionResult,
  submitCustomerEnquiry,
  generateEnquiryReceiptText,
} from '../services/enquiryService';
import {
  COMPANY_DETAILS,
  INGREDIENT_CATEGORIES,
  APPLICATION_AREAS,
} from '../data/companyData';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Download,
  MessageSquare,
  Send,
} from 'lucide-react';

interface CustomerFormProps {
  initialApplication?: string;
  initialCategory?: string;
  onSuccess?: (result: EnquirySubmissionResult) => void;
}

export const CustomerEnquiryForm: React.FC<CustomerFormProps> = ({
  initialApplication = '',
  initialCategory = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<CustomerEnquiryPayload>({
    name: '',
    companyName: '',
    businessEmail: '',
    contactNumber: '',
    applicationOfInterest: initialApplication || initialCategory || 'General Formulation Support',
    requirementDetails: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<EnquirySubmissionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await submitCustomerEnquiry(formData);
      setSubmissionResult(result);
      if (onSuccess) onSuccess(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please verify your inputs.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadReceipt = () => {
    if (!submissionResult) return;
    const text = generateEnquiryReceiptText(submissionResult);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${submissionResult.referenceNumber}_Acknowledgement.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (submissionResult) {
    return (
      <div className="bg-[#F5F7F9] border border-slate-200 rounded-xl p-5 sm:p-6 text-center space-y-4 animate-in fade-in">
        <div className="w-12 h-12 bg-[#009999]/15 text-[#009999] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-[#009999] tracking-wider uppercase">
            Inquiry Received
          </span>
          <h3 className="text-xl font-bold text-[#102743]">
            Thank You, {submissionResult.payload.name}
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Your inquiry has been recorded. Our team will review your requirements and reach out shortly.
          </p>
        </div>

        {/* Reference Box */}
        <div className="inline-block bg-white border border-slate-200 rounded-lg px-4 py-2 shadow-2xs">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Reference ID
          </p>
          <p className="text-base font-mono font-bold text-[#102743] tracking-wide">
            {submissionResult.referenceNumber}
          </p>
        </div>

        <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
              `Hello INGRELIA team, I submitted an inquiry [Ref: ${submissionResult.referenceNumber}] for ${submissionResult.payload.companyName || submissionResult.payload.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#009999] hover:bg-[#007f7f] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={handleDownloadReceipt}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-300 hover:border-[#102743] text-[#102743] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#009999]" />
            <span>Save Slip</span>
          </button>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setSubmissionResult(null);
              setFormData({
                name: '',
                companyName: '',
                businessEmail: '',
                contactNumber: '',
                applicationOfInterest: 'General Formulation Support',
                requirementDetails: '',
                honeypot: '',
              });
            }}
            className="text-xs text-[#009999] hover:underline font-medium cursor-pointer"
          >
            + Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
      {/* Bot honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_input">Do not fill</label>
        <input
          id="hp_input"
          type="text"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-[#102743] mb-1 uppercase tracking-wider">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-xs text-[#263442] outline-none transition-colors bg-white"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-[#102743] mb-1 uppercase tracking-wider">
            Company / Brand
          </label>
          <input
            type="text"
            placeholder="e.g. Apex Cosmetics"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-xs text-[#263442] outline-none transition-colors bg-white"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-[#102743] mb-1 uppercase tracking-wider">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-xs text-[#263442] outline-none transition-colors bg-white"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-[#102743] mb-1 uppercase tracking-wider">
            Phone / Mobile
          </label>
          <input
            type="tel"
            placeholder="+91 98000 00000"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-xs text-[#263442] outline-none transition-colors bg-white"
          />
        </div>
      </div>

      {/* Row 3: Area of Interest */}
      <div>
        <label className="block text-[11px] font-semibold text-[#102743] mb-1 uppercase tracking-wider">
          Area of Interest
        </label>
        <select
          value={formData.applicationOfInterest}
          onChange={(e) => setFormData({ ...formData, applicationOfInterest: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-xs text-[#263442] outline-none transition-colors bg-white cursor-pointer"
        >
          <option value="General Formulation Support">General Ingredient Sourcing & Support</option>
          <optgroup label="Application Areas">
            {APPLICATION_AREAS.map((app) => (
              <option key={app.id} value={app.title}>
                {app.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Ingredient Categories">
            {INGREDIENT_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Row 4: Requirement Details */}
      <div>
        <label className="block text-[11px] font-semibold text-[#102743] mb-1 uppercase tracking-wider">
          Requirement / Inquiry <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={3}
          required
          placeholder="Tell us about the ingredients, target sensory texture, benchmark, or formulation requirements you need..."
          value={formData.requirementDetails}
          onChange={(e) => setFormData({ ...formData, requirementDetails: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-xs text-[#263442] outline-none transition-colors bg-white resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-sm"
        >
          {loading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#009999]" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Inquiry</span>
              <Send className="w-3.5 h-3.5 text-[#009999]" />
            </>
          )}
        </button>
      </div>

      <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
        <span>Direct: sales@ingrelia.in</span>
        <span>WhatsApp: +91 9820300401</span>
      </div>
    </form>
  );
};
