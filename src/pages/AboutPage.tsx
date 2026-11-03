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
          About Ingrelia
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102743] tracking-tight">
          Connecting Ingredients. Enabling Innovation.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          At Ingrelia Ingredients Pvt. Ltd., we believe that the right ingredients can make a meaningful difference to the way personal-care products are developed and experienced.
        </p>
      </div>

      {/* Suggested Positioning Statement Blockquote */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#102743] text-white border border-[#18375e] shadow-sm relative overflow-hidden">
        <div className="max-w-4xl space-y-5">
          <span className="text-xs font-bold tracking-widest text-[#00b3b3] uppercase">
            Our Purpose & Vision
          </span>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-slate-100">
            "We are building a specialty ingredients distribution business focused on serving India's personal-care industry with a carefully selected portfolio of ingredients, responsive service and a strong understanding of customer needs."
          </blockquote>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
            Our focus spans skin care, hair care, sun care and personal hygiene, connecting ingredient manufacturers with the brands, formulators and businesses that turn ideas into finished products.
          </p>
          <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-white">Ingrelia Ingredients Pvt. Ltd.</span>
            <span>·</span>
            <span>Connecting Ingredients. Enabling Innovation.</span>
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
            Beyond Ingredients. Understanding Formulations.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Creating successful products goes beyond sourcing the right raw materials. It requires a clear understanding of formulation objectives, desired product characteristics, performance expectations, processing requirements and commercial considerations.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At INGRELIA, we believe that the right ingredient solution begins with understanding the customer's needs. We work closely with manufacturers and formulators to evaluate technical requirements, identify suitable specialty ingredients and develop reliable sourcing solutions that align with their formulation goals.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our approach is built on technical understanding, responsible sourcing, quality assurance and dependable supply. We aim to be a knowledgeable, customer-focused distribution partner, bringing together the right ingredients and the right solutions to support our customers' product development and business objectives.
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
            <h3 className="text-lg font-bold text-[#102743]">A Trusted Partner in Specialty Ingredients</h3>
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
            <h3 className="text-lg font-bold text-[#102743]">Delivering Value Through Understanding and Expertise</h3>
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
            The Principles Behind Every Partnership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Technical Alignment */}
          <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/assets/images/technical_alignment_clean_1793523276151.jpg"
                  alt="Technical Alignment - Formulation texture evaluation and skin feel benchmarks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 text-left">
                <h3 className="text-base font-bold text-[#102743]">Technical Alignment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Understanding requirements and identifying the right ingredient solutions.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Customer-First Approach */}
          <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/assets/images/customer_first_setup_1793523387065.jpg"
                  alt="Customer-First Approach - Client formulation brief notebook, ingredient specification sheet, and cosmetic oil samples"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 text-left">
                <h3 className="text-base font-bold text-[#102743]">Customer-First Approach</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Transparent communication and practical, commercially relevant recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Long-Term Partnerships */}
          <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#009999]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/assets/images/enduring_partnership_folio_1793523387341.jpg"
                  alt="Long-Term Partnerships - Corporate partnership agreement folio and premium cosmetic product portfolio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 text-left">
                <h3 className="text-base font-bold text-[#102743]">Long-Term Partnerships</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Building trust through consistency, commitment and mutual growth.
                </p>
              </div>
            </div>
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
