import React from 'react';
import { HACKATHONS_DATA } from '../data/portfolioData';

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="mb-[80px] md:mb-[120px]">
      <div className="flex justify-between items-end mb-8 border-b border-[#3b494b]/30 pb-4">
        <div>
          <h2 className="font-geist text-2xl md:text-3xl font-bold text-[#d4e4fa]">Hackathons</h2>
          <p className="font-body-md text-sm text-[#b9cacb] mt-1">Innovation challenges & competitive coding events</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HACKATHONS_DATA.map((hackathon) => (
          <div
            key={hackathon.id}
            className="glass-card card-laser-border rounded-xl p-6 flex flex-col h-full group hover:scale-[1.02] transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[#00f0ff] mb-2 text-3xl group-hover:scale-110 transition-transform">
              emoji_events
            </span>
            <h3 className="font-body-md text-base font-bold text-[#d4e4fa] group-hover:text-[#00f0ff] transition-colors">
              {hackathon.title}
            </h3>
            <span className="font-label-sm text-[11px] text-[#00f0ff] mt-1">
              {hackathon.event}
            </span>
            <span className="font-label-sm text-[11px] text-[#b9cacb] mt-1">
              {hackathon.organizer} • {hackathon.date}
            </span>
            <p className="font-body-md text-sm text-[#b9cacb] mt-3 flex-grow">
              {hackathon.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
