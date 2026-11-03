import React from 'react';
import { PageId } from '../components/Navbar';
import {
  CUSTOMER_SOLUTIONS_PILLARS,
  INGREDIENT_CATEGORIES,
  IngredientCategoryReference,
} from '../data/companyData';
import {
  ArrowRight,
  Sparkles,
  Search,
  FlaskConical,
  Clock,
  HeartHandshake,
} from 'lucide-react';

interface CustomerSolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: (initialApplication?: string, initialCategory?: string) => void;
}

export const CustomerSolutionsPage: React.FC<CustomerSolutionsPageProps> = ({
  onNavigate,
  onOpenConnectModal,
}) => {
  const pillarIcons = [Search, FlaskConical, Sparkles, Clock, HeartHandshake];

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Header */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
          Customer Solutions
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102743] tracking-tight">
          More Than a Conventional Distributor
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          INGRELIA works closely with brands, manufacturers and R&D teams to understand their product objectives and technical requirements. We go beyond ingredient supply by identifying relevant ingredient solutions, providing technical insights and ensuring responsive, reliable and consistent support throughout the sourcing process.
        </p>
      </div>

      {/* Five Core Customer Solution Stages */}
      <div className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
            Our Service Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102743]">
            From Ingredient Selection to Reliable Supply
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            From understanding your requirements and identifying suitable ingredients to product evaluation and commercial supply, our approach is built around technical understanding, responsive coordination and dependable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_SOLUTIONS_PILLARS.map((pillar, index) => {
            const Icon = pillarIcons[index] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Authentic AI Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102743]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-8 h-8 rounded-lg bg-[#009999]/90 text-white flex items-center justify-center shadow-sm backdrop-blur-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Pillar Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#102743] tracking-tight">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1">
                  <button
                    onClick={() => onOpenConnectModal(undefined, pillar.title)}
                    className="w-full py-2.5 px-3 rounded-lg border border-slate-200 hover:border-[#102743] hover:bg-[#102743] hover:text-white text-[#102743] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Connect for {pillar.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- INGREDIENT CATEGORIES WE WORK WITH ---------------- */}
      {/* Category-level reference only, strictly not a product catalogue */}
      <div className="space-y-8 pt-6 border-t border-slate-200">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              Portfolio Overview
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">Category-Level Reference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102743]">
            Ingredient Categories We Work With
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            A focused portfolio of functional and active specialty ingredients tailored to your formulation benchmarks.
          </p>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INGREDIENT_CATEGORIES.map((cat: IngredientCategoryReference, idx: number) => (
            <div
              key={cat.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102743]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-base font-bold text-white tracking-wide">{cat.title}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3 text-left">
                  <p className="text-xs font-semibold text-[#009999]">{cat.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Common Applications
                    </p>
                    <div className="flex flex-wrap gap-1 text-[11px] text-[#102743] font-medium">
                      {cat.commonApplications.map((app, aIdx) => (
                        <span key={app}>
                          {app}
                          {aIdx < cat.commonApplications.length - 1 && (
                            <span className="text-slate-300 mx-1.5">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <button
                  onClick={() => onOpenConnectModal(undefined, cat.title)}
                  className="w-full py-2.5 px-3 rounded-lg border border-slate-200 hover:border-[#102743] hover:bg-[#102743] hover:text-white text-[#102743] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enquire for {cat.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Call to Action */}
      <div className="rounded-2xl bg-gradient-to-r from-[#102743] to-[#18375e] text-white p-8 sm:p-12 border border-[#18375e] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#00b3b3] uppercase">
            Formulation Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Discuss Your Ingredient Sourcing Needs
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us about your formulation benchmark, active claims, or volume requirements.
            We will help identify the most relevant ingredient options.
          </p>
        </div>

        <button
          onClick={() => onOpenConnectModal()}
          className="shrink-0 px-6 py-3.5 rounded-lg bg-[#009999] hover:bg-[#007f7f] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap"
        >
          Discuss Your Requirements
        </button>
      </div>
    </div>
  );
};
