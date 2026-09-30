import React, { useState } from 'react';
import { USER_BIO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [photoAvailable, setPhotoAvailable] = useState(true);

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
        {/* Professional Photograph */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-br from-[#00f0ff] via-[#3131c0] to-transparent shadow-2xl shadow-[#00f0ff]/20">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#051424] bg-[#0d1c2d] flex items-center justify-center">
              {photoAvailable ? (
                <img
                  src="/professional-photo.jpg"
                  alt="Professional portrait of Kanishka Gupta"
                  className="w-full h-full object-cover"
                  onError={() => setPhotoAvailable(false)}
                />
              ) : (
                <span className="font-geist text-4xl sm:text-5xl font-bold text-[#00f0ff]">KG</span>
              )}
            </div>
            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#00f0ff] border-4 border-[#051424]" />
          </div>
          <span className="font-label-sm text-[10px] uppercase tracking-[0.22em] text-[#7df4ff]/70 mt-4">
            Professional Profile
          </span>
        </div>

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
