import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import {
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Users,
  Lightbulb,
  Mail,
  Send,
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: (initialApplication?: string, initialCategory?: string) => void;
}

const CAREER_ASPECTS = [
  {
    attribute: 'Growth Opportunities',
    message: 'Grow professionally while contributing to the journey of a developing business.',
    icon: TrendingUp,
  },
  {
    attribute: 'Ownership & Responsibility',
    message: 'Take initiative, make decisions and create meaningful impact.',
    icon: ShieldCheck,
  },
  {
    attribute: 'Continuous Learning',
    message: 'Gain exposure to specialty ingredients, industry knowledge and evolving markets.',
    icon: BookOpen,
  },
  {
    attribute: 'Collaboration',
    message: 'Work closely with customers, suppliers and colleagues to achieve shared goals.',
    icon: Users,
  },
  {
    attribute: 'Innovation & Initiative',
    message: 'Share ideas, explore opportunities and contribute to better ways of working.',
    icon: Lightbulb,
  },
];

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigate,
  onOpenConnectModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('careers@ingrelia.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* 1. Header Section */}
      <div className="border-b border-slate-200 pb-10 space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102743] tracking-tight">
          Be Part of Something Growing
        </h1>
        <div className="space-y-4 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
          <p>
            At INGRELIA, we believe that great businesses are built by passionate people. As we grow,
            we are looking for individuals who bring curiosity, initiative and a commitment to learning.
          </p>
          <p>
            We offer an environment where people can take ownership, develop their capabilities and
            contribute meaningfully to building a growing specialty ingredients business.
          </p>
        </div>
      </div>

      {/* 2. Employer Brand Banner */}
      <div className="rounded-2xl bg-[#102743] text-white p-8 sm:p-10 border border-[#18375e] shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <span className="text-xs font-bold tracking-widest text-[#00b3b3] uppercase">
            Our Culture
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Build With Us. Grow With Us.
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            Be part of a growing team where your ideas, initiative and contributions make a difference.
          </p>
          <p className="text-xs sm:text-sm text-[#00b3b3] font-semibold tracking-wider uppercase pt-1">
            Grow With Us · Build With Purpose
          </p>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#009999]/10 blur-3xl pointer-events-none" />
      </div>

      {/* 3. Five Core Aspects */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#009999] uppercase">
            WHY JOIN US
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102743] tracking-tight mt-1">
            What You Can Expect
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CAREER_ASPECTS.map((aspect) => {
            const Icon = aspect.icon;
            return (
              <div
                key={aspect.attribute}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#009999]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#009999]/10 text-[#009999] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#102743] tracking-tight">
                      {aspect.attribute}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {aspect.message}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Simple Get in Touch Section */}
      <div className="rounded-2xl border border-slate-200 bg-[#F5F7F9] p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="w-10 h-10 rounded-xl bg-[#009999]/10 text-[#009999] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#102743]">
            Start a Conversation With Us
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Interested in building with us? Share your profile and tell us about your experience, interests and what excites you about joining a growing specialty ingredients business.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-700">
            <span className="font-semibold text-[#102743]">Email:</span>
            <a
              href="mailto:careers@ingrelia.in?subject=Careers%20at%20INGRELIA%20-%20Introduction"
              className="font-medium text-[#009999] hover:underline"
            >
              careers@ingrelia.in
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <a
            href="mailto:careers@ingrelia.in?subject=Careers%20at%20INGRELIA%20-%20Introduction"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            <Send className="w-4 h-4 text-[#009999]" />
            <span>Email Your Profile</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-[#102743] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
          >
            <span>{copiedEmail ? 'Copied Email!' : 'Copy Email Address'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
