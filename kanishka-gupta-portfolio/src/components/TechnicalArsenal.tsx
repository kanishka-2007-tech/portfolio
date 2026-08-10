import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';

interface TechnicalArsenalProps {
  onSelectSkill?: (skill: Skill) => void;
}

export const TechnicalArsenal: React.FC<TechnicalArsenalProps> = ({ onSelectSkill }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalSkill, setActiveModalSkill] = useState<Skill | null>(null);

  const categories = ['All', 'Languages', 'Frameworks & Libraries', 'AI & Computer Vision', 'Databases & Infrastructure'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  const handleSkillClick = (skill: Skill) => {
    setActiveModalSkill(skill);
    if (onSelectSkill) onSelectSkill(skill);
  };

  return (
    <section id="technical-arsenal" className="mb-[80px] md:mb-[120px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-[#3b494b]/30 pb-4 gap-4">
        <div>
          <h2 className="font-geist text-2xl md:text-3xl font-bold text-[#d4e4fa]">Technical Arsenal</h2>
          <p className="font-body-md text-sm text-[#b9cacb] mt-1">Core technologies, frameworks, and engineering capabilities</p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-label-sm text-[11px] px-3 py-1.5 rounded transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#00f0ff] text-[#010f1f] font-semibold shadow-sm shadow-[#00f0ff]/30'
                  : 'bg-[#0d1c2d] text-[#b9cacb] hover:text-[#d4e4fa] hover:bg-[#1c2b3c] border border-[#3b494b]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Chips Grid */}
      <div className="flex flex-wrap gap-3">
        {filteredSkills.map((skill) => (
          <button
            key={skill.id}
            onClick={() => handleSkillClick(skill)}
            className="chip font-label-sm text-xs md:text-sm px-4 py-2.5 rounded text-[#d4e4fa] hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all cursor-pointer flex items-center gap-2 group"
          >
            <span>{skill.name}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1c2b3c] text-[#00f0ff] opacity-80 group-hover:opacity-100">
              {skill.level}
            </span>
          </button>
        ))}
      </div>

      {/* Modal / Popover when clicking a skill */}
      {activeModalSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-card card-laser-border rounded-xl p-6 md:p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setActiveModalSkill(null)}
              className="absolute top-4 right-4 text-[#b9cacb] hover:text-[#00f0ff] p-1 rounded-lg"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#3131c0]/20 border border-[#3131c0] flex items-center justify-center text-[#00f0ff]">
                <span className="material-symbols-outlined text-xl">terminal</span>
              </div>
              <div>
                <h3 className="font-geist text-xl font-bold text-[#d4e4fa]">{activeModalSkill.name}</h3>
                <span className="font-label-sm text-xs text-[#00f0ff]">{activeModalSkill.category}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center text-xs font-label-sm text-[#b9cacb] mb-1">
                <span>Proficiency</span>
                <span className="text-[#00f0ff]">{activeModalSkill.level}</span>
              </div>
              <div className="w-full h-2 bg-[#0d1c2d] rounded-full overflow-hidden border border-[#3b494b]/40">
                <div
                  className="h-full bg-gradient-to-r from-[#3131c0] to-[#00f0ff]"
                  style={{
                    width: activeModalSkill.level === 'Expert' ? '95%' : activeModalSkill.level === 'Advanced' ? '82%' : '70%'
                  }}
                />
              </div>
            </div>

            <p className="font-body-md text-sm text-[#b9cacb] leading-relaxed mb-6">
              {activeModalSkill.description}
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveModalSkill(null)}
                className="btn-primary font-label-sm text-xs px-4 py-2 rounded-lg"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
