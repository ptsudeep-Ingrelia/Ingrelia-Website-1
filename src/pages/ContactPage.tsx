import React from 'react';
import { CustomerEnquiryForm } from '../components/CustomerEnquiryForm';
import { COMPANY_DETAILS } from '../data/companyData';
import {
  MapPin,
  Mail,
  Globe,
  ExternalLink,
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
          Reach out to our commercial team and technical specialists. We welcome discussions with formulators, R&D chemists, brand creators, manufacturers and procurement professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Company Contact Details & Google Map (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#102743] text-white p-7 rounded-2xl border border-[#18375e] space-y-6 shadow-sm">
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

            <div className="space-y-3.5 text-xs text-slate-200 pt-2 border-t border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Registered & Corporate Office</p>
                  <p className="text-slate-300 mt-0.5 leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-[#00b3b3] hover:underline"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#00b3b3] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <a
                    href={COMPANY_DETAILS.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00b3b3] hover:underline mt-0.5 inline-block"
                  >
                    {COMPANY_DETAILS.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Connect Options: LinkedIn */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={COMPANY_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 border border-white/20 transition-colors cursor-pointer"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#00b3b3]" />
              </a>
            </div>
          </div>

          {/* Location in Google Map */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-3 p-4">
            <div className="flex items-center justify-between px-1">
              <div>
                <p className="text-xs font-bold text-[#102743] uppercase tracking-wider">
                  Location Map
                </p>
                <p className="text-[11px] text-slate-500">Cine Wonder Complex, Thane, Maharashtra</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Cine+Wonder+Complex+Thane+Maharashtra+400607"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#102743] hover:text-white text-[#102743] text-[11px] font-semibold transition-colors"
                title="Open in Google Maps app or new tab"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 text-[#009999]" />
              </a>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
              <iframe
                title="INGRELIA Office Location - Cine Wonder Complex, Thane"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.9690%2C19.2140%2C72.9850%2C19.2290&layer=mapnik&marker=19.2215%2C72.9774"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-full"
              />
            </div>

            <div className="px-1 pt-1 flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
              <span>1st Floor, 53, Cine Wonder Complex, Thane, Maharashtra, 400607, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Customer Enquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#009999] uppercase">
              Quick Inquiry Desk
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#102743] mt-1">
              Customer Inquiry Form
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Share your formulation or ingredient requirement. Our team will review and respond promptly.
            </p>
          </div>

          {/* Simple & Small Form */}
          <div className="pt-1">
            <CustomerEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};
