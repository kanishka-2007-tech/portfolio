import React, { useState } from 'react';
import { EXPERIENCE_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const ExperienceAndAchievements: React.FC = () => {
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const [expandedAch, setExpandedAch] = useState<string | null>(null);

  return (
    <section id="experience" className="mb-[80px] md:mb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Experience Column */}
        <div>
          <h2 className="font-geist text-2xl md:text-3xl font-bold text-[#d4e4fa] mb-8 border-b border-[#3b494b]/30 pb-4">
            Experience
          </h2>
          <div className="space-y-6">
            {EXPERIENCE_DATA.map((exp) => {
              const isExpanded = expandedExp === exp.id;
              return (
                <div
                  key={exp.id}
                  className="glass-card card-laser-border rounded-xl p-6 transition-all duration-300 hover:border-[#00f0ff]/40"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-body-lg text-lg font-bold text-[#d4e4fa]">
                      {exp.title}
                    </h3>
                    <span className="font-label-sm text-[11px] text-[#b9cacb] bg-[#0d1c2d] px-2.5 py-1 rounded border border-[#3b494b]/40">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="font-label-sm text-xs text-[#00f0ff] mb-4">
                    {exp.role} • {exp.company}
                  </p>

                  <p className="font-body-md text-sm text-[#b9cacb] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#3b494b]/30 space-y-2 animate-in fade-in duration-200">
                      <div className="font-label-sm text-xs text-[#00f0ff] font-semibold mb-2">
                        Key Contributions & Impact:
                      </div>
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-body-md text-[#b9cacb]">
                          <span className="text-[#00f0ff] font-bold mt-0.5">›</span>
                          <span>{item}</span>
                        </div>
                      ))}
                      <div className="flex flex-wrap gap-2 pt-3">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="chip font-label-sm text-[10px] px-2 py-0.5 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedExp(isExpanded ? null : exp.id)}
                    className="mt-4 font-label-sm text-xs text-[#00f0ff] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'View Impact & Highlights'}</span>
                    <span className="material-symbols-outlined text-sm">
                      {isExpanded ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <h2 className="font-geist text-2xl md:text-3xl font-bold text-[#d4e4fa] mb-8 border-b border-[#3b494b]/30 pb-4">
            Achievements
          </h2>
          <div className="space-y-6">
            {ACHIEVEMENTS_DATA.map((ach) => {
              const isExpanded = expandedAch === ach.id;
              return (
                <div
                  key={ach.id}
                  className="glass-card card-laser-border rounded-xl p-6 transition-all duration-300 hover:border-[#00f0ff]/40"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-body-lg text-lg font-bold text-[#d4e4fa]">
                      {ach.title}
                    </h3>
                    <span className="font-label-sm text-[11px] text-[#00f0ff] bg-[#0d1c2d] px-2.5 py-1 rounded border border-[#3131c0]/50">
                      {ach.date}
                    </span>
                  </div>

                  <p className="font-label-sm text-xs text-[#00f0ff] mb-4">
                    {ach.role} • {ach.organization}
                  </p>

                  <p className="font-body-md text-sm text-[#b9cacb] leading-relaxed mb-4">
                    {ach.description}
                  </p>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#3b494b]/30 space-y-2 animate-in fade-in duration-200">
                      <div className="font-label-sm text-xs text-[#00f0ff] font-semibold mb-2">
                        Earned Cloud Badges & Competencies:
                      </div>
                      {ach.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-body-md text-[#b9cacb]">
                          <span className="material-symbols-outlined text-[#00f0ff] text-sm">verified</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedAch(isExpanded ? null : ach.id)}
                    className="mt-4 font-label-sm text-xs text-[#00f0ff] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'View Cloud Badges'}</span>
                    <span className="material-symbols-outlined text-sm">
                      {isExpanded ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
