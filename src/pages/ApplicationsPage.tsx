import React from 'react';
import { PageId } from '../components/Navbar';
import { APPLICATION_AREAS, ApplicationArea } from '../data/companyData';
import { ArrowRight } from 'lucide-react';

interface ApplicationsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: (initialApplication?: string, initialCategory?: string) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({
  onNavigate,
  onOpenConnectModal,
}) => {
  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Header */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
          Application Focus
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102743] tracking-tight">
          Specialty Ingredients. Diverse Applications.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          INGRELIA offers a focused range of specialty ingredients designed to meet evolving performance, stability and sensory requirements across diverse application areas. We bring together ingredient expertise, reliable sourcing and technical understanding to support manufacturers and formulators.
        </p>
      </div>

      {/* Seven Application Cards (Crisp & Professional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {APPLICATION_AREAS.map((app: ApplicationArea) => (
          <div
            key={app.id}
            className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={app.image}
                  alt={`${app.title} personal care formulation`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-[#102743] tracking-tight">
                  {app.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {app.tagline}
                </p>

                {/* Core Solutions (Crisp Badges) */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <p className="text-[10px] font-bold text-[#102743] uppercase tracking-wider">
                    Core Solutions
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {app.categoryOpportunities.map((opp) => (
                      <span
                        key={opp}
                        className="px-2.5 py-1 rounded-md bg-[#F5F7F9] border border-slate-200/80 text-[11px] text-[#102743] font-medium"
                      >
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2">
              <button
                onClick={() => onOpenConnectModal(app.title)}
                className="w-full py-2.5 px-4 rounded-lg border border-slate-200 hover:border-[#102743] hover:bg-[#102743] hover:text-white text-[#102743] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Discuss {app.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 rounded-2xl bg-[#F5F7F9] border border-slate-200 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#102743]">
          Working on a Specific Formulation Brief?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Share your target sensory profile, performance benchmarks or stability requirements with INGRELIA. Our team assists R&D and procurement teams with relevant ingredient possibilities.
        </p>
        <button
          onClick={() => onOpenConnectModal()}
          className="px-6 py-3 rounded-lg bg-[#009999] hover:bg-[#007f7f] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Discuss Your Application Needs
        </button>
      </div>
    </div>
  );
};
