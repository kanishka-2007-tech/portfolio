import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects?: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onViewAllProjects
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'APIs & Systems', 'Mobile & FinTech'];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filterCategory);

  return (
    <section id="work" className="mb-[80px] md:mb-[120px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-[#3b494b]/30 pb-4 gap-4">
        <div>
          <h2 className="font-geist text-2xl md:text-3xl font-bold text-[#d4e4fa]">Featured Projects</h2>
          <p className="font-body-md text-sm text-[#b9cacb] mt-1">Enterprise systems, scalable backends, and full-stack solutions</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`font-label-sm text-[11px] px-3 py-1.5 rounded transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#00f0ff] text-[#010f1f] font-semibold'
                    : 'bg-[#0d1c2d] text-[#b9cacb] hover:text-[#d4e4fa]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={onViewAllProjects}
            className="font-label-sm text-xs text-[#00f0ff] hover:text-[#5ceeff] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="glass-card card-laser-border rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.01] cursor-pointer group"
          >
            {/* Project Banner Image / Code Box */}
            <div className="w-full h-48 rounded-lg mb-6 overflow-hidden relative bg-[#0d1c2d] border border-[#3b494b]/30 group-hover:border-[#00f0ff]/40 transition-colors">
              {project.isCodeSnippet ? (
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <div className="bg-[#000000] w-full h-full rounded border border-[#3b494b]/30 p-3.5 font-label-sm text-xs text-[#7df4ff]/80 overflow-hidden shadow-inner">
                    <pre className="font-mono-code leading-relaxed">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              )}
              <div className="absolute top-3 right-3 bg-[#010f1f]/80 backdrop-blur-md border border-[#3131c0]/50 px-2 py-0.5 rounded text-[10px] font-label-sm text-[#00f0ff]">
                {project.category}
              </div>
            </div>

            {/* Tag Chips */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="chip font-label-sm text-[11px] px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="font-body-lg text-lg font-bold text-[#d4e4fa] mb-2 group-hover:text-[#00f0ff] transition-colors">
              {project.title}
            </h3>
            <p className="font-body-md text-sm text-[#b9cacb] flex-grow mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Link Action */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject(project);
              }}
              className="font-label-sm text-xs text-[#00f0ff] hover:text-[#5ceeff] transition-colors flex items-center gap-1 mt-auto w-fit font-semibold"
            >
              <span>{project.linkText}</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                arrow_outward
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
