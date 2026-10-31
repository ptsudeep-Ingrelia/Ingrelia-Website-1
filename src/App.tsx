/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { CustomerSolutionsPage } from './pages/CustomerSolutionsPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryModal } from './components/EnquiryModal';
import { EnquiryInspectorModal } from './components/EnquiryInspectorModal';
import { COMPANY_DETAILS } from './data/companyData';
import { MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [initialApplication, setInitialApplication] = useState<string>('');
  const [initialCategory, setInitialCategory] = useState<string>('');
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize with URL hash on mount & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'applications', 'solutions', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConnectModal = (appOfInterest: string = '', catOfInterest: string = '') => {
    setInitialApplication(appOfInterest);
    setInitialCategory(catOfInterest);
    setIsConnectModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#263442] selection:bg-[#009999]/20 selection:text-[#102743]">
      {/* Sticky Top Navigation (Only the 5 approved sections) */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConnectModal={handleOpenConnectModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConnectModal={handleOpenConnectModal}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConnectModal={() => handleOpenConnectModal()}
          />
        )}
        {activePage === 'applications' && (
          <ApplicationsPage
            onNavigate={handleNavigate}
            onOpenConnectModal={handleOpenConnectModal}
          />
        )}
        {activePage === 'solutions' && (
          <CustomerSolutionsPage
            onNavigate={handleNavigate}
            onOpenConnectModal={handleOpenConnectModal}
          />
        )}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConnectModal={handleOpenConnectModal}
      />

      {/* Customer Requirement Modal */}
      <EnquiryModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        initialApplication={initialApplication}
        initialCategory={initialCategory}
      />

      {/* Integration & Developer Queue Inspector */}
      <EnquiryInspectorModal
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-white text-[#102743] border border-slate-200 shadow-md hover:bg-slate-50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#009999]"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Direct Connect */}
        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
            'Hello INGRELIA Ingredients team, I would like to enquire about personal-care ingredient solutions.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#009999] hover:bg-[#007f7f] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          aria-label="Enquire on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">WhatsApp Enquiry</span>
        </a>

        {/* Queue Inspector Discrete Trigger */}
        <button
          onClick={() => setIsInspectorOpen(true)}
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#102743]/90 hover:bg-[#102743] text-white/90 text-[10px] font-medium tracking-wider uppercase shadow-md transition-all cursor-pointer"
          title="Inspect Form Dispatch Queue & API Payloads"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#00b3b3]" />
          <span>Queue Inspector</span>
        </button>
      </div>
    </div>
  );
}
