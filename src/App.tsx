/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { CustomerSolutionsPage } from './pages/CustomerSolutionsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { PAGE_PATHS, parsePathToPage, type PageId } from './types/routes';
import { EnquiryModal } from './components/EnquiryModal';
import { EnquiryInspectorModal } from './components/EnquiryInspectorModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      return parsePathToPage(window.location.pathname, window.location.hash).page;
    }
    return 'home';
  });
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [initialApplication, setInitialApplication] = useState<string>('');
  const [initialCategory, setInitialCategory] = useState<string>('');
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize with URL path on mount & popstate
  useEffect(() => {
    const syncRouteFromLocation = () => {
      const { page, shouldReplace, cleanPath } = parsePathToPage(
        window.location.pathname,
        window.location.hash
      );
      setActivePage(page);

      // Clean up legacy hash or trailing slash in address bar without reload
      if (shouldReplace || window.location.hash) {
        window.history.replaceState(null, '', cleanPath + window.location.search);
      }
    };

    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    window.addEventListener('hashchange', syncRouteFromLocation);
    return () => {
      window.removeEventListener('popstate', syncRouteFromLocation);
      window.removeEventListener('hashchange', syncRouteFromLocation);
    };
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
    const targetPath = PAGE_PATHS[page] || '/';
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState(null, '', targetPath);
    }
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
        {activePage === 'careers' && (
          <CareersPage
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
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white text-[#102743] border border-slate-200 shadow-md hover:bg-slate-50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#009999]"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
