import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, USER_BIO } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenContact
}) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'system.boot',
      output: `Kanishka Gupta Terminal CLI [Version 1.0.4]\nType "help" to view available terminal commands.`
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    let output: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono-code text-[#b9cacb]">
            <div><span className="text-[#00f0ff] font-bold">whoami</span> - Display developer bio & summary</div>
            <div><span className="text-[#00f0ff] font-bold">skills</span> - List technical arsenal & proficiencies</div>
            <div><span className="text-[#00f0ff] font-bold">projects</span> - View featured projects</div>
            <div><span className="text-[#00f0ff] font-bold">experience</span> - View open source & background</div>
            <div><span className="text-[#00f0ff] font-bold">contact</span> - Open contact message prompt</div>
            <div><span className="text-[#00f0ff] font-bold">resume</span> - Open curriculum vitae</div>
            <div><span className="text-[#00f0ff] font-bold">clear</span> - Clear terminal window</div>
          </div>
        );
        break;

      case 'whoami':
        output = `${USER_BIO.headline}\n${USER_BIO.bio}`;
        break;

      case 'skills':
        output = SKILLS_DATA.map(s => `• ${s.name} [${s.category}] - ${s.level}`).join('\n');
        break;

      case 'projects':
        output = PROJECTS_DATA.map(p => `• ${p.title} (${p.category}) - Tags: ${p.tags.join(', ')}`).join('\n');
        break;

      case 'experience':
        output = EXPERIENCE_DATA.map(e => `• ${e.title} (${e.role}) @ ${e.company} [${e.duration}]`).join('\n');
        break;

      case 'contact':
        onOpenContact();
        output = `Opening contact form... Direct email: ${USER_BIO.email}`;
        break;

      case 'resume':
        onOpenResume();
        output = `Opening curriculum vitae modal...`;
        break;

      default:
        output = `Command not recognized: "${trimmed}". Type "help" for a list of available commands.`;
    }

    setLogs(prev => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card card-laser-border rounded-xl max-w-2xl w-full h-[500px] flex flex-col shadow-2xl overflow-hidden">

        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#051424] border-b border-[#3b494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="font-mono-code text-xs text-[#b9cacb] ml-2">kanishka@terminal:~</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#b9cacb] hover:text-[#00f0ff] p-1"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="p-4 overflow-y-auto flex-grow font-mono-code text-xs space-y-4 bg-[#000000]/90">
          {logs.map((log, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#00f0ff]">
                <span>kanishka@portfolio:~$</span>
                <span className="text-[#d4e4fa] font-bold">{log.command}</span>
              </div>
              <div className="text-[#b9cacb] whitespace-pre-wrap leading-relaxed pl-4 border-l-2 border-[#3131c0]/40">
                {log.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="p-3 bg-[#0d1c2d] border-t border-[#3b494b]/40 flex items-center gap-2 font-mono-code text-xs">
          <span className="text-[#00f0ff]">›</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommand(inputVal);
            }}
            placeholder="Type command (e.g. help, skills, projects, contact)..."
            className="w-full bg-transparent text-[#d4e4fa] focus:outline-none placeholder-[#3b494b]"
          />
        </div>

      </div>
    </div>
  );
};
