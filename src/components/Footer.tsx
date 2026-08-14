import React from 'react';
import { USER_BIO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <footer className="bg-[#051424] border-t border-[#3b494b]/30 w-full py-8 px-4 sm:px-8 md:px-16 mt-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="font-headline-md text-xl md:text-2xl font-bold text-[#d4e4fa]">
          Kanishka Gupta
        </div>

        {/* Copyright */}
        <div className="font-label-sm text-xs text-[#b9cacb] text-center">
          © {new Date().getFullYear()} Kanishka Gupta. Built with precision.
        </div>

        {/* Social Nav */}
        <nav className="flex gap-6 font-label-sm text-xs">
          <a
            href={USER_BIO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={USER_BIO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
          >
            GitHub
          </a>
          <a
            href={USER_BIO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
          >
            Twitter
          </a>
        </nav>

      </div>
    </footer>
  );
};
