import React from 'react';
import { PageId } from '../components/Navbar';
import { COMPANY_DETAILS } from '../data/companyData';
import {
  Compass,
  Target,
  Sparkles,
  Users2,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConnectModal }) => {
  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Header */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
          About INGRELIA
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102743] tracking-tight">
          Your Personal Care Ingredients Partner
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          INGRELIA Ingredients Pvt. Ltd. is an Indian B2B speciality ingredients distribution company
          dedicated exclusively to the personal-care and cosmetics industry.
        </p>
      </div>

      {/* Suggested Positioning Statement Blockquote */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#102743] text-white border border-[#18375e] shadow-sm relative overflow-hidden">
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#00b3b3] uppercase">
            Our Business Philosophy
          </span>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-100">
            "{COMPANY_DETAILS.aboutPositioningStatement}"
          </blockquote>
          <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-white">INGRELIA Ingredients Pvt. Ltd.</span>
            <span>·</span>
            <span>Customer-Focused Speciality Ingredients Distribution</span>
          </div>
        </div>
      </div>

      {/* Company Overview & Approach to the Industry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
            Company Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102743] tracking-tight">
            Understanding the Formulation Behind Every Product
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In the rapidly evolving personal-care and beauty landscape, product success depends
            on far more than acquiring raw material volumes. It begins with a granular understanding
            of the formulation brief: the target skin feel, stability benchmarks, active claims,
            processing ease, and consumer price expectations.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            INGRELIA was formed with a singular, dedicated purpose: to serve as a knowledgeable,
            customer-centric distribution partner that listens first, evaluates technical requirements
            accurately, and coordinates relevant speciality ingredient solutions tailored to Indian
            formulations.
          </p>
        </div>

        <div className="lg:col-span-5 bg-[#F5F7F9] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#102743]">
              Our Industry Focus
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Speciality Personal Care & Cosmetics</p>
          </div>
          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
              <span>100% focused on personal care, cosmetics, and derma raw materials</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
              <span>Active engagement with R&D, formulators, and procurement teams</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
              <span>Attuned to Indian climatic, sensory, and regulatory realities</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
              <span>Dependable coordination from bench-scale samples to recurring batches</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#009999]/10 text-[#009999] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              Our Vision
            </span>
            <h3 className="text-lg font-bold text-[#102743]">Trusted & Knowledgeable Partner</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              "{COMPANY_DETAILS.vision}"
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#102743]/10 text-[#102743] flex items-center justify-center">
              <Target className="w-6 h-6 text-[#102743]" />
            </div>
            <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
              Our Mission
            </span>
            <h3 className="text-lg font-bold text-[#102743]">Customer-Centric Sourcing & Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              "{COMPANY_DETAILS.mission}"
            </p>
          </div>
        </div>
      </div>

      {/* Customer-Centric Business Philosophy & Long-Term Relationships */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
            Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102743]">
            How We Build Long-Term Customer Relationships
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#F5F7F9] border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#009999] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#102743]">Technical Alignment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We converse directly with chemists, formulators, and founders, ensuring that ingredient discussions focus on technical parameters, skin feel, and stability requirements.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F5F7F9] border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#009999] flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#102743]">Customer-First Mindset</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your formulation success is our top benchmark. We advise with commercial transparency, realistic timelines, and consistent sample follow-through.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F5F7F9] border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#009999] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#102743]">Enduring Partnership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We aim to remain your preferred ingredient partner across multiple product launches, range refreshes, and long-term brand expansions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-2xl bg-[#F5F7F9] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-[#102743]">Explore Ingredient Solutions with INGRELIA</h3>
          <p className="text-xs text-slate-600 mt-1">
            Connect with our team to discuss your current formulation requirements or upcoming personal-care projects.
          </p>
        </div>
        <button
          onClick={onOpenConnectModal}
          className="px-6 py-3 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
        >
          Discuss Your Requirements
        </button>
      </div>
    </div>
  );
};
