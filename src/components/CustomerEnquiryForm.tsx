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
  INDUSTRY_SEGMENTS,
} from '../data/companyData';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Download,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building,
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
    designation: '',
    businessEmail: '',
    contactNumber: '',
    industrySegment: INDUSTRY_SEGMENTS[0],
    applicationOfInterest: initialApplication || APPLICATION_AREAS[0].title,
    ingredientCategoriesOfInterest: initialCategory ? [initialCategory] : ['Actives'],
    requirementDetails: '',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<EnquirySubmissionResult | null>(null);

  const toggleCategory = (catTitle: string) => {
    setFormData((prev) => {
      const exists = prev.ingredientCategoriesOfInterest.includes(catTitle);
      if (exists) {
        return {
          ...prev,
          ingredientCategoriesOfInterest: prev.ingredientCategoriesOfInterest.filter((c) => c !== catTitle),
        };
      } else {
        return {
          ...prev,
          ingredientCategoriesOfInterest: [...prev.ingredientCategoriesOfInterest, catTitle],
        };
      }
    });
  };

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
      <div className="bg-[#F5F7F9] border border-slate-200 rounded-xl p-6 sm:p-8 text-center space-y-5 animate-in fade-in">
        <div className="w-14 h-14 bg-[#009999]/15 text-[#009999] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#009999] tracking-wider uppercase">
            Enquiry Recorded Successfully
          </span>
          <h3 className="text-2xl font-bold text-[#102743]">
            Thank You, {submissionResult.payload.name}
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Your formulation requirement has been recorded in the INGRELIA business development queue.
            Our team will review your specifications and contact you shortly.
          </p>
        </div>

        {/* Reference Box */}
        <div className="inline-block bg-white border border-slate-200 rounded-lg px-6 py-3.5 shadow-xs">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Requirement Reference ID
          </p>
          <p className="text-lg font-mono font-bold text-[#102743] tracking-wider">
            {submissionResult.referenceNumber}
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleDownloadReceipt}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-[#102743] text-[#102743] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#009999]" />
            <span>Download Slip (.txt)</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
              `Hello INGRELIA team, I have submitted an enquiry [Ref: ${submissionResult.referenceNumber}] for ${submissionResult.payload.companyName} regarding ${submissionResult.payload.applicationOfInterest}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#009999] hover:bg-[#007f7f] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Follow-up on WhatsApp</span>
          </a>
        </div>

        {/* Integration-ready disclosure */}
        <div className="pt-4 border-t border-slate-200/80 text-left bg-white/80 p-4 rounded-lg text-xs text-slate-500 space-y-1">
          <div className="flex items-center gap-2 font-semibold text-[#102743]">
            <ShieldCheck className="w-4 h-4 text-[#009999]" />
            <span>Integration Status</span>
          </div>
          <p>
            {submissionResult.statusNote} Payload is formatted and ready for API endpoint connection at{' '}
            <code className="text-[#102743] font-mono text-[11px]">{submissionResult.integrationTarget}</code>.
          </p>
        </div>

        <button
          onClick={() => {
            setSubmissionResult(null);
            setFormData({
              name: '',
              companyName: '',
              designation: '',
              businessEmail: '',
              contactNumber: '',
              industrySegment: INDUSTRY_SEGMENTS[0],
              applicationOfInterest: APPLICATION_AREAS[0].title,
              ingredientCategoriesOfInterest: ['Actives'],
              requirementDetails: '',
              message: '',
              honeypot: '',
            });
          }}
          className="text-xs text-[#009999] hover:underline font-medium cursor-pointer"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Field 1 & 2: Name & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
            1. Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Dr. Rajesh Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
            2. Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Apex Cosmetics Ltd."
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white"
          />
        </div>
      </div>

      {/* Field 3, 4, 5: Designation, Business Email, Contact Number */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
            3. Designation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Head of R&D / Procurement"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
            4. Business Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
            5. Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98000 00000"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white"
          />
        </div>
      </div>

      {/* Field 6 & 7: Industry Segment & Application of Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
            6. Industry Segment <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.industrySegment}
            onChange={(e) => setFormData({ ...formData, industrySegment: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white"
          >
            {INDUSTRY_SEGMENTS.map((seg) => (
              <option key={seg} value={seg}>
                {seg}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
            7. Application of Interest <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.applicationOfInterest}
            onChange={(e) => setFormData({ ...formData, applicationOfInterest: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white"
          >
            {APPLICATION_AREAS.map((app) => (
              <option key={app.id} value={app.title}>
                {app.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Field 8: Ingredient Category of Interest (Multi-select from the 6 approved categories) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-semibold text-[#102743] uppercase tracking-wider">
            8. Ingredient Category of Interest <span className="text-red-500">*</span>
          </label>
          <span className="text-[11px] text-slate-400">Select all that apply</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-3 bg-[#F5F7F9] rounded-lg border border-slate-200">
          {INGREDIENT_CATEGORIES.map((cat) => {
            const isSelected = formData.ingredientCategoriesOfInterest.includes(cat.title);
            return (
              <label
                key={cat.id}
                className={`flex items-center gap-2.5 p-2 rounded-md text-xs cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-white text-[#102743] font-medium shadow-xs border border-[#009999]/30'
                    : 'text-slate-600 hover:bg-white/60'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCategory(cat.title)}
                  className="rounded text-[#009999] focus:ring-[#009999] h-4 w-4 border-slate-300"
                />
                <span className="truncate">{cat.title}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Field 9: Requirement Details */}
      <div>
        <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
          9. Requirement Details <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={3}
          required
          placeholder="Specify your target formulation outcome, benchmark product, required sensory texture, or sample volume needs..."
          value={formData.requirementDetails}
          onChange={(e) => setFormData({ ...formData, requirementDetails: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white resize-none"
        />
      </div>

      {/* Field 10: Message */}
      <div>
        <label className="block text-xs font-semibold text-[#102743] mb-1.5 uppercase tracking-wider">
          10. Message <span className="text-slate-400 font-normal">(Optional comments or timeline)</span>
        </label>
        <textarea
          rows={2}
          placeholder="Any additional information, expected launch timeline, or specific queries..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-[#009999] focus:ring-1 focus:ring-[#009999] text-sm text-[#263442] outline-none transition-colors bg-white resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-sm"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#009999]" />
              <span>Registering Requirement...</span>
            </>
          ) : (
            <>
              <span>Submit Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#009999]" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
