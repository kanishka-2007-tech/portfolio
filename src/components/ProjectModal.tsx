import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'demo'>('overview');

  // Simulated API tester state for Distributed Core API
  const [apiEndpoint, setApiEndpoint] = useState<string>('/api/v1/health');
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [loadingApi, setLoadingApi] = useState<boolean>(false);

  // Simulated FinTech state for Aura
  const [cardFrozen, setCardFrozen] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(14830.50);

  if (!project) return null;

  const handleSimulateApi = (endpoint: string) => {
    setApiEndpoint(endpoint);
    setLoadingApi(true);
    setApiResponse(null);

    setTimeout(() => {
      setLoadingApi(false);
      if (endpoint.includes('health')) {
        setApiResponse(JSON.stringify({ status: 'ok', uptime: '99.99%', activeNodes: 4, clusterRegion: 'asia-southeast1' }, null, 2));
      } else if (endpoint.includes('boot')) {
        setApiResponse(JSON.stringify({ event: 'CLUSTER_BOOT_SUCCESS', mode: 'distributed', primaryNodeId: 'node-01', timestamp: new Date().toISOString() }, null, 2));
      } else {
        setApiResponse(JSON.stringify({ latency: '14ms', memoryUsage: '42.8MB', requestsProcessed: 1492080, errorRate: '0.001%' }, null, 2));
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#010f1f]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card card-laser-border rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">

        {/* Modal Header */}
        <div className="p-6 border-b border-[#3b494b]/40 flex justify-between items-start bg-[#051424]/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="chip font-label-sm text-[10px] px-2 py-0.5 rounded text-[#00f0ff]">
                {project.category}
              </span>
              <span className="font-label-sm text-xs text-[#b9cacb]">• {project.tags.join(', ')}</span>
            </div>
            <h3 className="font-geist text-2xl font-bold text-[#d4e4fa]">{project.title}</h3>
            <p className="font-body-md text-sm text-[#b9cacb]">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#b9cacb] hover:text-[#00f0ff] rounded-lg hover:bg-[#1c2b3c] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-[#3b494b]/40 bg-[#0d1c2d] px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 font-label-sm text-xs border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#00f0ff] text-[#00f0ff] font-bold'
                : 'border-transparent text-[#b9cacb] hover:text-[#d4e4fa]'
            }`}
          >
            Overview & Features
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 font-label-sm text-xs border-b-2 transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-[#00f0ff] text-[#00f0ff] font-bold'
                : 'border-transparent text-[#b9cacb] hover:text-[#d4e4fa]'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 px-4 font-label-sm text-xs border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-[#00f0ff] text-[#00f0ff] font-bold'
                : 'border-transparent text-[#b9cacb] hover:text-[#d4e4fa]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            <span>Interactive Demo</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">

          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Media Preview */}
              {project.image && (
                <div className="w-full h-56 rounded-lg overflow-hidden border border-[#3b494b]/40">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Stats Metrics Grid */}
              {project.stats && (
                <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-[#0d1c2d] border border-[#3b494b]/40">
                  {project.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-geist text-lg font-bold text-[#00f0ff]">{s.value}</div>
                      <div className="font-label-sm text-[10px] text-[#b9cacb] uppercase mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-geist text-lg font-bold text-[#d4e4fa] mb-2">Description</h4>
                <p className="font-body-md text-sm text-[#b9cacb] leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="font-geist text-lg font-bold text-[#d4e4fa] mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-[#1c2b3c]/50 border border-[#3b494b]/30">
                      <span className="material-symbols-outlined text-[#00f0ff] text-sm mt-0.5">check_circle</span>
                      <span className="font-body-md text-xs text-[#d4e4fa]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h4 className="font-geist text-lg font-bold text-[#d4e4fa] mb-2">System Design & Stack Highlights</h4>
                <p className="font-body-md text-sm text-[#b9cacb]">
                  Architected with clean separation of concerns, high-concurrency event loops, and strict automated test coverage.
                </p>
              </div>

              <div className="space-y-3">
                {project.architecture?.map((arch, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#0d1c2d] border border-[#3131c0]/50 flex items-start gap-3">
                    <span className="font-mono-code text-xs font-bold text-[#00f0ff] bg-[#1c2b3c] px-2 py-1 rounded">
                      0{idx + 1}
                    </span>
                    <span className="font-body-md text-xs text-[#d4e4fa] pt-0.5">{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {project.id === 'distributed-core-api' ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-geist text-base font-bold text-[#d4e4fa]">Live API Endpoint Simulator</h4>
                    <span className="font-label-sm text-[10px] text-[#00f0ff] bg-[#3131c0]/20 px-2 py-0.5 rounded border border-[#3131c0]">
                      Node.js v20.x Worker Cluster
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleSimulateApi('/api/v1/health')}
                      className="btn-ghost font-label-sm text-xs px-3 py-1.5 rounded"
                    >
                      GET /api/v1/health
                    </button>
                    <button
                      onClick={() => handleSimulateApi('/api/v1/cluster/boot')}
                      className="btn-ghost font-label-sm text-xs px-3 py-1.5 rounded"
                    >
                      POST /api/v1/cluster/boot
                    </button>
                    <button
                      onClick={() => handleSimulateApi('/api/v1/metrics')}
                      className="btn-ghost font-label-sm text-xs px-3 py-1.5 rounded"
                    >
                      GET /api/v1/metrics
                    </button>
                  </div>

                  <div className="bg-[#000000] p-4 rounded-lg border border-[#3b494b]/50 font-mono-code text-xs">
                    <div className="text-[#b9cacb] mb-2 flex justify-between">
                      <span>Endpoint: <span className="text-[#00f0ff]">{apiEndpoint}</span></span>
                      <span>Status: {loadingApi ? 'Executing...' : '200 OK'}</span>
                    </div>
                    {loadingApi ? (
                      <div className="text-[#00f0ff] animate-pulse">Running cluster query...</div>
                    ) : (
                      <pre className="text-emerald-400 overflow-x-auto">
                        <code>{apiResponse || '// Select an endpoint above to send live query.'}</code>
                      </pre>
                    )}
                  </div>
                </div>
              ) : project.id === 'aura-fintech-app' ? (
                <div className="space-y-4">
                  <h4 className="font-geist text-base font-bold text-[#d4e4fa]">FinTech Card & Account Simulator</h4>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#1c2b3c] to-[#0d1c2d] border border-[#00f0ff]/30 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-label-sm text-xs text-[#b9cacb]">Aura Platinum Card</span>
                      <span className="font-mono-code text-xs text-[#00f0ff]">•••• 8829</span>
                    </div>
                    <div>
                      <div className="font-label-sm text-[10px] text-[#b9cacb]">Current Balance</div>
                      <div className="font-geist text-2xl font-bold text-[#d4e4fa]">
                        ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => setCardFrozen(!cardFrozen)}
                        className={`font-label-sm text-xs px-4 py-2 rounded-lg transition-all cursor-pointer ${
                          cardFrozen ? 'bg-rose-500 text-white' : 'btn-primary'
                        }`}
                      >
                        {cardFrozen ? 'Card Frozen (Click to Unlock)' : 'Freeze Card'}
                      </button>
                      <button
                        onClick={() => setBalance(prev => prev + 250)}
                        className="btn-ghost font-label-sm text-xs px-4 py-2 rounded-lg"
                      >
                        + Deposit $250
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-[#0d1c2d] border border-[#3b494b]/40 space-y-4">
                  <h4 className="font-geist text-base font-bold text-[#d4e4fa]">SmartCampusHub Dashboard Preview</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#1c2b3c] rounded border border-[#3b494b]/30">
                      <div className="text-[#b9cacb] font-label-sm">Active Semester</div>
                      <div className="text-[#00f0ff] font-bold mt-1">Fall 2026 - BTech CSE</div>
                    </div>
                    <div className="p-3 bg-[#1c2b3c] rounded border border-[#3b494b]/30">
                      <div className="text-[#b9cacb] font-label-sm">GPA Progression</div>
                      <div className="text-emerald-400 font-bold mt-1">3.92 / 4.00</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-[#3b494b]/40 bg-[#051424]/90 flex justify-between items-center">
          <span className="font-label-sm text-xs text-[#b9cacb]">
            Designed with Cybernetic Precision
          </span>
          <button
            onClick={onClose}
            className="btn-primary font-label-sm text-xs px-5 py-2 rounded-lg"
          >
            Close Project
          </button>
        </div>

      </div>
    </div>
  );
};
