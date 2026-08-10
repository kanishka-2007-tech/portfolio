import React, { useState } from 'react';
import { USER_BIO, EXPERIENCE_DATA, CERTIFICATIONS_DATA, SKILLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_BIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#010f1f]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card card-laser-border rounded-xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden">

        {/* Modal Header */}
        <div className="p-6 border-b border-[#3b494b]/40 flex justify-between items-center bg-[#051424]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
              <span className="material-symbols-outlined">badge</span>
            </div>
            <div>
              <h3 className="font-geist text-xl font-bold text-[#d4e4fa]">Resume / Curriculum Vitae</h3>
              <p className="font-label-sm text-xs text-[#00f0ff]">{USER_BIO.name} • {USER_BIO.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print or Save PDF"
              className="p-2 text-[#b9cacb] hover:text-[#00f0ff] rounded-lg hover:bg-[#1c2b3c] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#b9cacb] hover:text-[#00f0ff] rounded-lg hover:bg-[#1c2b3c] transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div id="printable-resume" className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6 text-[#d4e4fa]">

          {/* Header Contact Block */}
          <div className="border-b border-[#3b494b]/40 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="font-geist text-2xl sm:text-3xl font-bold text-[#d4e4fa] mb-1">{USER_BIO.name}</h1>
              <p className="font-label-sm text-xs text-[#00f0ff] uppercase tracking-wider">{USER_BIO.tagline}</p>
            </div>
            <div className="font-label-sm text-xs space-y-1 text-[#b9cacb]">
              <div>Email: <span className="text-[#00f0ff]">{USER_BIO.email}</span></div>
              <div>Location: India • Remote Ready</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="font-label-sm text-xs text-[#00f0ff] font-bold uppercase tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-[#b9cacb] leading-relaxed">
              {USER_BIO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-label-sm text-xs text-[#00f0ff] font-bold uppercase tracking-wider mb-3">
              Education
            </h2>
            <div className="p-4 rounded-lg bg-[#0d1c2d] border border-[#3b494b]/30 flex justify-between items-start">
              <div>
                <h3 className="font-body-md text-sm font-bold text-[#d4e4fa]">Bachelor of Technology (BTech) in Computer Science & Engineering</h3>
                <p className="font-label-sm text-xs text-[#b9cacb] mt-1">Core Focus: Data Structures, Algorithms, Distributed Systems, Software Engineering</p>
              </div>
              <span className="font-label-sm text-xs text-[#00f0ff] bg-[#1c2b3c] px-2.5 py-1 rounded whitespace-nowrap">
                Current Student
              </span>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="font-label-sm text-xs text-[#00f0ff] font-bold uppercase tracking-wider mb-3">
              Technical Competencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.map((s) => (
                <span key={s.id} className="chip font-label-sm text-xs px-2.5 py-1 rounded">
                  {s.name} ({s.level})
                </span>
              ))}
            </div>
          </div>

          {/* Open Source & Work Experience */}
          <div>
            <h2 className="font-label-sm text-xs text-[#00f0ff] font-bold uppercase tracking-wider mb-3">
              Experience & Contributions
            </h2>
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="p-4 rounded-lg bg-[#0d1c2d] border border-[#3b494b]/30 mb-3 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-body-md text-sm font-bold text-[#d4e4fa]">{exp.title}</h3>
                  <span className="font-label-sm text-xs text-[#b9cacb]">{exp.duration}</span>
                </div>
                <p className="font-label-sm text-xs text-[#00f0ff]">{exp.role} • {exp.company}</p>
                <p className="font-body-md text-xs text-[#b9cacb]">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-label-sm text-xs text-[#00f0ff] font-bold uppercase tracking-wider mb-3">
              Certifications & Industry Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-[#0d1c2d] border border-[#3b494b]/30 text-xs">
                  <div className="font-body-md font-bold text-[#d4e4fa]">{cert.title}</div>
                  <div className="font-label-sm text-[10px] text-[#00f0ff] mt-1">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#3b494b]/40 bg-[#051424] flex justify-between items-center">
          <button
            onClick={handleCopyEmail}
            className="btn-ghost font-label-sm text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">content_copy</span>
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>

          <button
            onClick={onClose}
            className="btn-primary font-label-sm text-xs px-5 py-2 rounded-lg"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
