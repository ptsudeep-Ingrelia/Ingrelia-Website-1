import React from 'react';
import { Logo } from './Logo';
import { PageId } from './Navbar';
import { COMPANY_DETAILS, APPLICATION_AREAS } from '../data/companyData';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: (initialApplication?: string, initialCategory?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConnectModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102743] text-white pt-16 pb-12 border-t border-[#18375e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 text-left">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009999] rounded cursor-pointer"
            >
              <Logo variant="dark-bg" size="lg" showTagline={false} />
            </button>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-1">
              {COMPANY_DETAILS.tagline} Connecting market requirements with relevant speciality
              ingredient solutions for India's evolving personal care and cosmetic industry.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 border border-white/10 transition-colors"
                aria-label="INGRELIA on LinkedIn"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#009999]" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                  'Hello INGRELIA Ingredients team, I would like to enquire about personal-care ingredient solutions.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#009999]/20 hover:bg-[#009999]/30 text-xs font-medium text-[#00b3b3] border border-[#009999]/40 transition-colors"
                aria-label="Direct WhatsApp Enquiry"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#009999]">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('applications')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Customer Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Applications We Serve (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#009999]">
              Applications
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              {APPLICATION_AREAS.map((app) => (
                <li key={app.id}>
                  <button
                    onClick={() => handleNavClick('applications')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {app.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Requirement CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#009999]">
              Contact Details
            </p>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#009999] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#009999] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConnectModal()}
                className="w-full py-2.5 px-4 rounded-lg bg-[#009999] hover:bg-[#007f7f] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-sm cursor-pointer"
              >
                Discuss Formulation Needs
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Mumbai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
