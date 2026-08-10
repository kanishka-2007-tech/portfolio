import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenTerminal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenResume,
  onOpenContact,
  onOpenTerminal,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 border-b ${
        scrolled
          ? 'bg-[#051424]/90 backdrop-blur-md border-[#3b494b]/40 shadow-lg shadow-[#010f1f]/50'
          : 'bg-[#051424]/50 backdrop-blur-md border-[#3b494b]/30'
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-8 md:px-16 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-headline-md text-xl sm:text-2xl font-bold text-[#d4e4fa] hover:text-[#00f0ff] transition-colors tracking-tight flex items-center gap-2 group"
        >
          <span>Kanishka Gupta</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#00f0ff] group-hover:animate-ping" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('work')}
            className={`font-body-md text-base transition-all duration-200 cursor-pointer ${
              activeSection === 'work'
                ? 'text-[#00f0ff] font-bold border-b-2 border-[#00f0ff] pb-1'
                : 'text-[#b9cacb] hover:text-[#00f0ff]'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`font-body-md text-base transition-all duration-200 cursor-pointer ${
              activeSection === 'experience'
                ? 'text-[#00f0ff] font-bold border-b-2 border-[#00f0ff] pb-1'
                : 'text-[#b9cacb] hover:text-[#00f0ff]'
            }`}
          >
            About
          </button>
          <button
            onClick={onOpenContact}
            className={`font-body-md text-base transition-all duration-200 cursor-pointer ${
              activeSection === 'contact'
                ? 'text-[#00f0ff] font-bold border-b-2 border-[#00f0ff] pb-1'
                : 'text-[#b9cacb] hover:text-[#00f0ff]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenTerminal}
            title="Open Developer CLI (Cmd+K)"
            className="p-2 rounded-lg bg-[#0d1c2d] border border-[#3131c0]/50 text-[#b9cacb] hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all flex items-center gap-2 text-xs font-mono-code"
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span className="hidden lg:inline">CLI</span>
            <span className="bg-[#1c2b3c] px-1.5 py-0.5 rounded text-[10px]">⌘K</span>
          </button>

          <button
            onClick={onOpenResume}
            className="btn-ghost font-label-sm text-xs px-4 py-2 rounded-lg cursor-pointer"
          >
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            title="Open Terminal"
            className="p-2 text-[#00f0ff]"
          >
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#00f0ff] p-2 rounded-lg hover:bg-[#1c2b3c] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#051424]/95 backdrop-blur-xl border-b border-[#3b494b]/50 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-200">
          <button
            onClick={() => scrollToSection('work')}
            className="text-left py-2 font-headline-md text-lg text-[#d4e4fa] hover:text-[#00f0ff]"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-left py-2 font-headline-md text-lg text-[#d4e4fa] hover:text-[#00f0ff]"
          >
            About & Experience
          </button>
          <button
            onClick={() => scrollToSection('technical-arsenal')}
            className="text-left py-2 font-headline-md text-lg text-[#d4e4fa] hover:text-[#00f0ff]"
          >
            Technical Arsenal
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="text-left py-2 font-headline-md text-lg text-[#d4e4fa] hover:text-[#00f0ff]"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-[#3b494b]/30 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-ghost font-label-sm text-xs px-5 py-2.5 rounded-lg w-full text-center"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
