import React from 'react';
import { USER_BIO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[640px] md:min-h-[716px] flex flex-col justify-center items-center text-center mb-[80px] md:mb-[120px] relative pt-12 md:pt-20">
      <div className="z-10 max-w-3xl">
        {/* Available for Innovation Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1c2d] border border-[#3131c0]/50 mb-6 text-xs font-label-sm text-[#00f0ff]">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span>BTech Computer Science & Engineering • Open for Roles</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-geist text-3xl sm:text-5xl lg:text-6xl font-bold text-[#d4e4fa] tracking-tight leading-[1.15] mb-6">
          {USER_BIO.headline}
        </h1>

        {/* Bio Body */}
        <p className="font-body-lg text-base sm:text-lg text-[#b9cacb] leading-relaxed mb-8 max-w-2xl">
          {USER_BIO.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={scrollToWork}
            className="btn-primary font-label-sm text-xs sm:text-sm px-6 py-3.5 rounded-lg flex items-center gap-2 cursor-pointer group"
          >
            <span>View Work</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          <button
            onClick={scrollToContact}
            className="btn-ghost font-label-sm text-xs sm:text-sm px-6 py-3.5 rounded-lg cursor-pointer text-[#d4e4fa] border-[#d4e4fa]/40 hover:border-[#00f0ff] hover:text-[#00f0ff]"
          >
            Contact Me
          </button>

          <button
            onClick={onOpenResume}
            className="text-xs font-label-sm text-[#b9cacb] hover:text-[#00f0ff] underline underline-offset-4 ml-2 transition-colors cursor-pointer"
          >
            Read Credentials →
          </button>
        </div>
      </div>

      {/* Abstract decorative background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square rounded-full bg-[#7df4ff]/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 rounded-full bg-[#3131c0]/10 blur-[80px] pointer-events-none -z-10" />
    </section>
  );
};
