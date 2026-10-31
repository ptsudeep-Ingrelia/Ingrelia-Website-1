import React from 'react';
import { PageId } from '../components/Navbar';
import {
  COMPANY_DETAILS,
  APPLICATION_AREAS,
  CUSTOMER_SOLUTIONS_PILLARS,
  WHY_INGRELIA_STRENGTHS,
  ApplicationArea,
} from '../data/companyData';
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Check,
  ChevronRight,
  Sparkles,
  Search,
  MessageSquare,
  Compass,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: (initialApplication?: string, initialCategory?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConnectModal }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F7F9] via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Main Hero Headline */}

              {/* Main Hero Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102743] leading-[1.15] text-balance">
                {COMPANY_DETAILS.heroHeadline}
              </h1>

              {/* Supporting Statement */}
              <p className="text-base sm:text-lg font-medium text-[#102743]/85 leading-relaxed max-w-xl">
                {COMPANY_DETAILS.heroSupportingStatement}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConnectModal()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 text-[#009999]" />
                </button>

                <button
                  onClick={() => onNavigate('applications')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-[#009999] hover:bg-[#009999]/5 text-[#009999] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Our Applications</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-500">
                <div>
                  <p className="font-semibold text-[#102743] text-sm">Personal Care Focus</p>
                  <p className="text-[11px] text-slate-400">100% cosmetic raw materials</p>
                </div>
                <div>
                  <p className="font-semibold text-[#102743] text-sm">Formulation Insights</p>
                  <p className="text-[11px] text-slate-400">Application-aligned solutions</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-semibold text-[#102743] text-sm">Responsive Support</p>
                  <p className="text-[11px] text-slate-400">Prompt sampling & coordination</p>
                </div>
              </div>
            </div>

            {/* Right Visual Carrier (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/src/assets/images/hero_ingrelia_formulation_1793459990633.jpg"
                  alt="Personal care cosmetic science and active formulation chemistry"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102743]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <p className="text-[11px] font-semibold tracking-widest text-[#00b3b3] uppercase">
                    Formulation Partnership
                  </p>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Connecting customer benchmarks with dependable ingredient chemistries.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden sm:block bg-white p-4 rounded-xl border border-slate-200 shadow-lg text-left max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#009999]/10 text-[#009999] flex items-center justify-center shrink-0">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#102743]">Customer-First Sourcing</p>
                    <p className="text-[11px] text-slate-500">Supporting R&D, formulators & procurement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. WHO WE ARE ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-[#F5F7F9] rounded-2xl border border-slate-200 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102743] tracking-tight">
                A Dedicated Personal Care Ingredients Partner
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                INGRELIA is a customer-focused speciality ingredients distribution company serving
                the Indian personal-care and cosmetics industry. We operate with an acute understanding
                of domestic formulator requirements, shifting consumer preferences, and the critical
                importance of reliable, high-integrity ingredient sourcing.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than acting as a transactional trader, we position ourselves as an extension of
                your product development pipeline—bringing relevant ingredient knowledge, responsive
                commercial coordination, and dependable supply consistency to every customer engagement.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102743] hover:text-[#009999] transition-colors cursor-pointer group"
                >
                  <span>Learn more about our philosophy and team</span>
                  <ArrowRight className="w-4 h-4 text-[#009999] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#102743]">Customer Commitments</p>
                <p className="text-xs text-slate-500 mt-0.5">Built on Trust & Technical Clarity</p>
              </div>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                  <span>Deep understanding of customer formulation benchmarks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                  <span>Proactive alignment with market and regulatory needs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                  <span>Dependable ingredient sourcing for Indian production batches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. WHAT WE DO ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102743] tracking-tight">
              Bridging Customer Needs with the Right Ingredient Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              INGRELIA connects personal-care and cosmetic manufacturers with relevant speciality ingredient
              solutions across seven distinct application categories.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We work across the entire product creation cycle—assisting R&D formulators in selecting
              the optimal emollient, active, surfactant, or functional polymer, supporting laboratory
              sampling, and coordinating reliable commercial supply for regular production.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('solutions')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Discover Customer Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <p className="text-xs font-bold text-[#102743]">Targeted Sourcing</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identifying ingredient options that match target sensory profiles, claims, and budgets.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <p className="text-xs font-bold text-[#102743]">Application Alignment</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailoring ingredient chemistries to Skin, Hair, Sun, Body, Makeup, and Toiletries.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <p className="text-xs font-bold text-[#102743]">Evaluation Coordination</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Responsive lab sample dispatch and technical documentation for swift bench testing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <p className="text-xs font-bold text-[#102743]">Consistent Execution</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disciplined commercial coordination ensuring production continuity and reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. APPLICATIONS WE SERVE ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
            Applications We Serve
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102743] tracking-tight">
            Tailored Chemistries for Seven Personal-Care Segments
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From high-potency facial skincare to gentle everyday personal hygiene, explore the application
            segments INGRELIA supports.
          </p>
        </div>

        {/* 7 Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {APPLICATION_AREAS.map((app: ApplicationArea, index: number) => {
            const isFeatured = index === 0;
            return (
              <div
                key={app.id}
                className={`group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102743]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#00b3b3]">
                        Application 0{index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-wide">{app.title}</h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">{app.tagline}</p>
                    <p className="text-xs text-slate-500 line-clamp-2">{app.description}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <button
                    onClick={() => onNavigate('applications')}
                    className="w-full py-2 px-3 rounded-lg border border-slate-200 hover:border-[#102743] hover:bg-[#102743] hover:text-white text-[#102743] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View {app.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- 5. OUR APPROACH ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
            Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102743] tracking-tight">
            How We Engage with Formulation & Procurement Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A structured, customer-first approach that transforms ingredient requirements into successful,
            market-ready personal-care formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CUSTOMER_SOLUTIONS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-xl bg-[#F5F7F9] border border-slate-200 hover:border-[#009999]/50 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-2xl font-mono font-bold text-[#009999]">
                  {pillar.stepNumber}.
                </span>
                <h3 className="text-base font-bold text-[#102743] leading-snug">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <span className="text-[10px] font-semibold text-[#009999] uppercase tracking-wider">
                  {pillar.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 6. WHY INGRELIA ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-[#102743] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#18375e] space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#00b3b3] uppercase">
              Why INGRELIA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Your Trusted Personal Care Ingredients Partner
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Formulation teams and procurement managers rely on INGRELIA for our customer-first mindset,
              deep Indian market familiarity, focused ingredient categories, and consistent execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INGRELIA_STRENGTHS.map((strength) => (
              <div
                key={strength.number}
                className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3 text-left"
              >
                <span className="text-lg font-mono font-bold text-[#00b3b3]">
                  {strength.number}.
                </span>
                <h3 className="text-base font-bold text-white">{strength.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{strength.description}</p>
              </div>
            ))}

            <div className="p-6 rounded-xl bg-[#009999]/20 border border-[#009999]/40 space-y-3 text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Next Step
                </span>
                <h3 className="text-base font-bold text-white mt-1">Ready to explore solutions?</h3>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Share your target application, desired sensory benchmark, or active claims with us.
                </p>
              </div>
              <button
                onClick={() => onOpenConnectModal()}
                className="w-full py-2.5 px-4 rounded-lg bg-white text-[#102743] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Discuss Requirements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 7. BOTTOM CONTACT CTA ---------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-white to-[#F5F7F9] border border-slate-200 rounded-2xl p-8 sm:p-14 space-y-6 shadow-sm">
          <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
            Let’s Connect
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#102743] tracking-tight">
            Connect With Your Personal Care Ingredients Partner
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Whether you are formulating a new skincare serum, developing a sulfate-free shampoo,
            or optimizing a broad-spectrum sunscreen, INGRELIA is here to help.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConnectModal()}
              className="px-6 py-3.5 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
            >
              Submit Formulation Requirement
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-lg border border-[#009999] text-[#009999] hover:bg-[#009999]/5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              View Contact Details
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-400">
            <span>Speciality Personal Care Ingredients</span>
            <span className="mx-2">·</span>
            <span>Indian Personal-Care & Cosmetics Industry</span>
          </div>
        </div>
      </section>
    </div>
  );
};
