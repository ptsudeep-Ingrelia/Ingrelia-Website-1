import React from 'react';
import { PageId } from '../components/Navbar';
import { APPLICATION_AREAS, ApplicationArea } from '../data/companyData';
import { ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

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
          Personal-Care Applications We Serve
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          INGRELIA delivers targeted speciality raw materials engineered to address the specific performance,
          stability, and sensory requirements across seven core personal-care and cosmetic application sectors in India.
        </p>
      </div>

      {/* Seven Application Sections */}
      <div className="space-y-12">
        {APPLICATION_AREAS.map((app: ApplicationArea, index: number) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={app.id}
              className={`rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#009999]">
                    0{index + 1}.
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Application Sector
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#102743] tracking-tight">
                    {app.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-[#009999] mt-1">
                    {app.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {app.description}
                </p>

                {/* Typical Formulation Requirements */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-bold text-[#102743] uppercase tracking-wider">
                    Typical Formulation Requirements
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    {app.formulationRequirements.map((req) => (
                      <div key={req} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#009999] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relevant Ingredient Solution Opportunities */}
                <div className="pt-2">
                  <p className="text-[11px] font-bold text-[#102743] uppercase tracking-wider mb-2">
                    Ingredient Solution Opportunities (Category Level)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {app.categoryOpportunities.map((opp) => (
                      <div
                        key={opp}
                        className="p-2.5 rounded-lg bg-[#F5F7F9] border border-slate-200/80 text-xs text-[#102743] font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#009999] shrink-0" />
                        <span>{opp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onOpenConnectModal(app.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Discuss {app.title} Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
                  </button>
                </div>
              </div>

              {/* Visual Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100 shadow-inner relative group">
                  <img
                    src={app.image}
                    alt={`${app.title} personal care formulation`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102743]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold text-white">{app.title} Solutions</p>
                    <p className="text-[10px] text-slate-300">Formulation-aligned ingredient selection</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 rounded-2xl bg-[#F5F7F9] border border-slate-200 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#102743]">
          Working on a Specific Formulation Brief?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Share your target sensory feel, active benchmark, or stability specifications with INGRELIA.
          Our team assists R&D chemists and procurement teams with relevant ingredient possibilities.
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
