import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

export type PageId = 'home' | 'about' | 'applications' | 'solutions' | 'careers' | 'contact';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConnectModal: (initialApplication?: string, initialCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenConnectModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation sections
  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'applications', label: 'Applications' },
    { id: 'solutions', label: 'Customer Solutions' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/70 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Single element brand mark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009999] rounded-md transition-opacity hover:opacity-95 cursor-pointer"
            aria-label="INGRELIA Home"
          >
            <Logo variant="light-bg" size="md" showTagline={false} />
          </button>

          {/* Zone 2: Navigation Links (Exact 5 items, single-line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#263442]">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009999] rounded ${
                    isActive
                      ? 'text-[#009999] font-semibold'
                      : 'text-[#263442]/85 hover:text-[#102743]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009999] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action - Discuss Your Requirements */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConnectModal()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#102743] hover:bg-[#18375e] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#009999]"
            >
              <span>Discuss Requirements</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenConnectModal()}
              className="sm:hidden px-3 py-1.5 rounded-md bg-[#102743] text-white text-xs font-semibold tracking-wider uppercase"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#102743] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009999] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl transition-all animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#F5F7F9] text-[#009999] font-semibold'
                      : 'text-[#263442] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#009999]" />}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConnectModal();
                }}
                className="w-full py-3 px-4 rounded-lg bg-[#102743] text-white text-xs font-semibold uppercase tracking-wider text-center cursor-pointer"
              >
                Discuss Your Requirements
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
