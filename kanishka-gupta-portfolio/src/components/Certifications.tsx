import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="mb-[80px] md:mb-[120px]">
      <div className="flex justify-between items-end mb-8 border-b border-[#3b494b]/30 pb-4">
        <div>
          <h2 className="font-geist text-2xl md:text-3xl font-bold text-[#d4e4fa]">Certifications</h2>
          <p className="font-body-md text-sm text-[#b9cacb] mt-1">Industry-recognized technical accreditations & verified skill credentials</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActiveCert(cert)}
            className="glass-card card-laser-border rounded-xl p-6 flex flex-col justify-center items-center text-center h-36 cursor-pointer group hover:scale-[1.02] transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[#00f0ff] mb-2 text-3xl group-hover:scale-110 transition-transform">
              verified
            </span>
            <h3 className="font-body-md text-base font-bold text-[#d4e4fa] group-hover:text-[#00f0ff] transition-colors">
              {cert.title}
            </h3>
            <span className="font-label-sm text-[11px] text-[#b9cacb] mt-1">
              {cert.issuer} • {cert.issueDate}
            </span>
          </div>
        ))}
      </div>

      {/* Certification Verification Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-card card-laser-border rounded-xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-[#b9cacb] hover:text-[#00f0ff] p-1 rounded-lg"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div>
                <h3 className="font-geist text-xl font-bold text-[#d4e4fa]">{activeCert.title}</h3>
                <p className="font-label-sm text-xs text-[#00f0ff]">{activeCert.issuer}</p>
              </div>
            </div>

            <div className="bg-[#0d1c2d] rounded-lg p-4 border border-[#3b494b]/40 mb-6 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-label-sm text-[#b9cacb]">Credential ID:</span>
                <span className="font-mono-code text-[#00f0ff] font-semibold">{activeCert.credentialId}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-label-sm text-[#b9cacb]">Issue Date:</span>
                <span className="font-body-md text-[#d4e4fa]">{activeCert.issueDate}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-label-sm text-[#b9cacb]">Verification Status:</span>
                <span className="font-label-sm text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Official / Active
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-label-sm text-xs text-[#00f0ff] font-semibold mb-3">Verified Competencies:</h4>
              <div className="flex flex-wrap gap-2">
                {activeCert.skillsVerified.map((skill) => (
                  <span key={skill} className="chip font-label-sm text-xs px-3 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveCert(null)}
                className="btn-primary font-label-sm text-xs px-5 py-2.5 rounded-lg"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
