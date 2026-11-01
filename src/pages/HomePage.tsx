import React from 'react';
import { PageId } from '../components/Navbar';
import {
  COMPANY_DETAILS,
  APPLICATION_AREAS,
  INGREDIENT_CATEGORIES,
  CUSTOMER_SOLUTIONS_PILLARS,
  ApplicationArea,
  IngredientCategoryReference,
} from '../data/companyData';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: (initialApplication?: string, initialCategory?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConnectModal }) => {
  return (
    <div className="space-y-20 sm:space-y-24 pb-20">
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F5F7F9] via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102743] leading-[1.18] text-balance">
                Ingredients That Inspire Better Formulations
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Connecting Indian cosmetic brands and formulators with high-performance speciality raw
                materials, technical clarity, and dependable batch supply.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenConnectModal()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
                >
                  <span>Submit Requirement</span>
                  <ArrowRight className="w-4 h-4 text-[#009999]" />
                </button>

                <button
                  onClick={() => onNavigate('applications')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-[#009999] hover:bg-[#009999]/5 text-[#102743] hover:text-[#009999] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Applications</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Metrics / Trust Points */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#102743]">7</p>
                  <p className="text-xs text-slate-500 font-medium">Personal-Care Areas</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#102743]">6</p>
                  <p className="text-xs text-slate-500 font-medium">Core Chemistries</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#009999]">Prompt</p>
                  <p className="text-xs text-slate-500 font-medium">Bench Sampling</p>
                </div>
              </div>
            </div>

            {/* Right Visual Carrier (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/src/assets/images/hero_ingrelia_formulation_1793459990633.jpg"
                  alt="Personal care cosmetic science and active formulation chemistry"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102743]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <p className="text-[11px] font-semibold tracking-wider text-[#00b3b3] uppercase">
                    Formulation Partnership
                  </p>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Aligning customer benchmarks with dependable ingredient chemistries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. VALUE AT A GLANCE (CLEAN 4-PILLAR GRID) ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              Why Formulators Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102743] tracking-tight mt-1">
              Precision Sourcing for Indian Personal Care
            </h2>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102743] hover:text-[#009999] transition-colors cursor-pointer shrink-0"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Application Fit */}
          <div className="group rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/application_fit_texture_1793522696722.jpg"
                  alt="Application Fit - Cosmetic emulsion texture and botanical actives"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 space-y-1.5 text-left">
                <h3 className="text-sm font-bold text-[#102743]">Application Fit</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Targeted actives, emollients, and polymers aligned to your target viscosity, texture, and benchmark claims.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Product Sampling */}
          <div className="group rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/product_sampling_clean_1793522991832.jpg"
                  alt="Product Sampling - Amber dropper bottles and cosmetic sample jars"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 space-y-1.5 text-left">
                <h3 className="text-sm font-bold text-[#102743]">Product Sampling</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prompt delivery of bench-scale samples with complete TDS and regulatory documentation for testing.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Quality & Compliance */}
          <div className="group rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/quality_compliance_docs_1793522849219.jpg"
                  alt="Quality & Compliance - Cosmetic regulatory compliance dossier, certification seal, and tamper-sealed QC samples"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 space-y-1.5 text-left">
                <h3 className="text-sm font-bold text-[#102743]">Quality & Compliance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified raw materials meeting strict cosmetic safety, purity, and domestic regulatory standards.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Supply Continuity */}
          <div className="group rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/supply_continuity_dispatch_1793522699569.jpg"
                  alt="Supply Continuity - Modern organized warehouse dispatching cosmetic ingredients"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 space-y-1.5 text-left">
                <h3 className="text-sm font-bold text-[#102743]">Supply Continuity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dependable batch fulfillment, buffer stock, and commercial delivery directly from Cine Wonder, Thane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. APPLICATIONS WE SERVE ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              Applications We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102743] tracking-tight mt-1">
              Chemistries Engineered for Seven Key Segments
            </h2>
          </div>
          <button
            onClick={() => onNavigate('applications')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102743] hover:text-[#009999] transition-colors cursor-pointer shrink-0"
          >
            <span>View All Applications</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#009999]" />
          </button>
        </div>

        {/* Clean, Symmetrical 7 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {APPLICATION_AREAS.map((app: ApplicationArea) => (
            <div
              key={app.id}
              onClick={() => onNavigate('applications')}
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102743]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-base font-bold text-white tracking-wide">{app.title}</h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {app.tagline}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-xs font-semibold text-[#009999] group-hover:text-[#102743] transition-colors border-t border-slate-100">
                <span>Explore Chemistries</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 4. CORE INGREDIENT CHEMISTRIES ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              Ingredient Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102743] tracking-tight mt-1">
              Six Core Cosmetic Chemistries
            </h2>
          </div>
          <button
            onClick={() => onOpenConnectModal()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#009999] hover:text-[#102743] transition-colors cursor-pointer shrink-0"
          >
            <span>Inquire by Category</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INGREDIENT_CATEGORIES.map((cat: IngredientCategoryReference) => (
            <div
              key={cat.id}
              onClick={() => onOpenConnectModal('', cat.title)}
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#009999] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 text-left">
                <h4 className="text-xs font-bold text-[#102743] group-hover:text-[#009999] transition-colors leading-snug">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-tight">
                  {cat.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 5. THE FORMULATION JOURNEY ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              Customer Support Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102743] tracking-tight mt-1">
              How We Support Your Formulation
            </h2>
          </div>
          <button
            onClick={() => onNavigate('solutions')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102743] hover:text-[#009999] transition-colors cursor-pointer shrink-0"
          >
            <span>View Full Journey</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#009999]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CUSTOMER_SOLUTIONS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 space-y-1.5 text-left">
                  <h3 className="text-xs font-bold text-[#102743] leading-snug">{pillar.title}</h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-3 pt-1 border-t border-slate-100">
                <span className="text-[10px] font-medium text-[#009999] block truncate">
                  {pillar.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 6. BOTTOM INVITATION / INQUIRY BANNER ---------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#102743] text-white rounded-2xl p-8 sm:p-12 space-y-6 shadow-sm border border-[#18375e]">
          <span className="text-xs font-bold tracking-widest text-[#00b3b3] uppercase">
            Let’s Connect
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-xl mx-auto">
            Ready to Discuss Your Next Formulation?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Share your target sensory benchmark, active requirement, or upcoming project brief.
            Our team will coordinate samples and technical support promptly.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenConnectModal()}
              className="px-6 py-3 rounded-lg bg-[#009999] hover:bg-[#00b3b3] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Submit Inquiry
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Contact Details
            </button>
          </div>

          <div className="pt-3 text-[11px] text-slate-400">
            <span>{COMPANY_DETAILS.email}</span>
            <span className="mx-2">·</span>
            <span>{COMPANY_DETAILS.phone}</span>
            <span className="mx-2">·</span>
            <span>{COMPANY_DETAILS.website}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
