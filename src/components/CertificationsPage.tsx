import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

interface CertificationsPageProps {
  onBack: () => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onBack }) => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <div className="min-h-screen px-4 py-8 sm:px-8 md:px-16">
      <header className="max-w-[1280px] mx-auto flex items-center justify-between border-b border-[#3b494b]/30 pb-6">
        <button onClick={onBack} className="btn-ghost font-label-sm text-xs px-4 py-2 rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to portfolio
        </button>
        <span className="font-label-sm text-xs text-[#6f8589]">CERTIFICATION ARCHIVE</span>
      </header>

      <main className="max-w-[1280px] mx-auto pt-16 pb-24">
        <div className="mb-10">
          <p className="font-label-sm text-xs text-[#00f0ff] mb-3">VERIFIED CREDENTIALS</p>
          <h1 className="font-geist text-4xl md:text-6xl font-bold text-[#d4e4fa]">Certifications</h1>
          <p className="font-body-md text-base text-[#b9cacb] mt-4 max-w-2xl">
            A complete archive of technical, leadership, and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActiveCert(cert)}
              className="glass-card card-laser-border rounded-xl p-6 min-h-48 text-left cursor-pointer group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="material-symbols-outlined text-[#00f0ff] text-3xl group-hover:scale-110 transition-transform">verified</span>
                <span className="font-label-sm text-[10px] text-[#6f8589]">{cert.issueDate}</span>
              </div>
              <h2 className="font-body-md text-lg font-bold text-[#d4e4fa] group-hover:text-[#00f0ff] transition-colors mt-5">{cert.title}</h2>
              <p className="font-label-sm text-xs text-[#b9cacb] mt-2">{cert.issuer}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {cert.skillsVerified.map((skill) => (
                  <span key={skill} className="chip font-label-sm text-[10px] px-2 py-1 rounded">{skill}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </main>

      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/80 backdrop-blur-sm">
          <div className="glass-card card-laser-border rounded-xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setActiveCert(null)} className="absolute top-4 right-4 text-[#b9cacb] hover:text-[#00f0ff] p-1 rounded-lg" aria-label="Close certification details">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-3 mb-6 pr-8">
              <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div>
                <h3 className="font-geist text-xl font-bold text-[#d4e4fa]">{activeCert.title}</h3>
                <p className="font-label-sm text-xs text-[#00f0ff]">{activeCert.issuer}</p>
              </div>
            </div>
            <div className="bg-[#0d1c2d] rounded-lg p-4 border border-[#3b494b]/40 mb-6 space-y-2">
              <div className="flex justify-between text-xs gap-4"><span className="font-label-sm text-[#b9cacb]">Credential ID:</span><span className="font-mono-code text-[#00f0ff] font-semibold text-right">{activeCert.credentialId}</span></div>
              <div className="flex justify-between text-xs gap-4"><span className="font-label-sm text-[#b9cacb]">Issue Date:</span><span className="font-body-md text-[#d4e4fa]">{activeCert.issueDate}</span></div>
              <div className="flex justify-between text-xs"><span className="font-label-sm text-[#b9cacb]">Status:</span><span className="font-label-sm text-emerald-400 font-bold">Official / Active</span></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeCert.skillsVerified.map((skill) => <span key={skill} className="chip font-label-sm text-xs px-3 py-1 rounded">{skill}</span>)}
            </div>
            <div className="flex justify-end gap-3">
              {activeCert.credentialUrl && <a href={activeCert.credentialUrl} target="_blank" rel="noreferrer" className="btn-ghost font-label-sm text-xs px-5 py-2.5 rounded-lg">View credential</a>}
              <button onClick={() => setActiveCert(null)} className="btn-primary font-label-sm text-xs px-5 py-2.5 rounded-lg">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
