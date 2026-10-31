import React from 'react';
import { CustomerEnquiryForm } from '../components/CustomerEnquiryForm';
import { COMPANY_DETAILS } from '../data/companyData';
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  MessageSquare,
  Clock,
  Building2,
  ShieldCheck,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Header */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
          Contact Us
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102743] tracking-tight">
          Connect With INGRELIA
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Reach our commercial team and technical formulation advisors. We welcome discussions with
          formulators, R&D chemists, brand creators, and procurement professionals across India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Company Contact Details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#102743] text-white p-8 rounded-2xl border border-[#18375e] space-y-6">
            <div>
              <span className="text-[11px] font-bold text-[#00b3b3] uppercase tracking-wider">
                Corporate Details
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                {COMPANY_DETAILS.name}
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                {COMPANY_DETAILS.positioning}
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-200 pt-2 border-t border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Registered & Corporate Office</p>
                  <p className="text-slate-300 mt-0.5">{COMPANY_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email Contact Option</p>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-[#00b3b3] hover:underline"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Telephone Contact Option</p>
                  <p className="text-slate-300 mt-0.5">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p className="text-slate-300 mt-0.5">www.ingrelia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Business Hours</p>
                  <p className="text-slate-300 mt-0.5">Monday to Friday: 09:30 – 18:30 IST</p>
                </div>
              </div>
            </div>

            {/* Direct Connect Options: WhatsApp & LinkedIn */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                  'Hello INGRELIA Ingredients team, I would like to connect regarding speciality personal-care ingredients.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#009999] hover:bg-[#007f7f] text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry Option</span>
              </a>

              <a
                href={COMPANY_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-white/20 transition-colors cursor-pointer"
              >
                <span>LinkedIn Company Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#00b3b3]" />
              </a>
            </div>
          </div>

          {/* Location Map Placeholder */}
          <div className="bg-[#F5F7F9] rounded-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#102743] uppercase tracking-wider">
                  Location Overview
                </p>
                <p className="text-[11px] text-slate-500">Corporate & Distribution Base</p>
              </div>
              <MapPin className="w-5 h-5 text-[#009999]" />
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-200 border border-slate-300 flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 bg-[#102743]/5" />
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#102743] text-white flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-5 h-5 text-[#009999]" />
                </div>
                <p className="text-xs font-bold text-[#102743]">Andheri East, Mumbai, India</p>
                <p className="text-[10px] text-slate-500 max-w-xs">
                  Proximity to western logistics corridors and manufacturing zones.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              Note: Contact details and location placeholders will be updated with confirmed physical premises documentation.
            </p>
          </div>
        </div>

        {/* Right Column: Customer Enquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#009999] uppercase">
              Business Enquiry Desk
            </span>
            <h2 className="text-2xl font-bold text-[#102743] mt-1">
              Customer Enquiry Form
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Please share your formulation requirements below. Submissions are reviewed directly by our technical and procurement specialists.
            </p>
          </div>

          {/* 10-Field Form */}
          <div className="pt-1">
            <CustomerEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};
