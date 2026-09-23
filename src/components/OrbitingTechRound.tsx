import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  Globe, 
  Code2, 
  GitBranch, 
  Workflow
} from 'lucide-react';
import { VsEmblem } from './VsEmblem';

export const OrbitingTechRound: React.FC = () => {
  const innerOrbitTech = [
    { name: 'Python', icon: <Terminal className="w-3.5 h-3.5" /> },
    { name: 'JavaScript', icon: <Code2 className="w-3.5 h-3.5" /> },
    { name: 'Django', icon: <Cpu className="w-3.5 h-3.5" /> },
    { name: 'React.js', icon: <Layers className="w-3.5 h-3.5" /> },
  ];

  const outerOrbitTech = [
    { name: 'MySQL', icon: <Database className="w-3.5 h-3.5" /> },
    { name: 'REST APIs', icon: <Globe className="w-3.5 h-3.5" /> },
    { name: 'GenAI', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { name: 'Git & GitHub', icon: <GitBranch className="w-3.5 h-3.5" /> },
    { name: 'SQL Schema', icon: <Database className="w-3.5 h-3.5" /> },
    { name: 'OOP Logic', icon: <Workflow className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center p-4">
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none bg-sky-500/10" />

      {/* Outer Orbit Track */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-800 shadow-[0_0_20px_rgba(56,189,248,0.05)] pointer-events-none" />
      {/* Inner Orbit Track */}
      <div className="absolute w-[240px] h-[240px] rounded-full border border-slate-700/60 border-dashed pointer-events-none" />
      {/* Innermost Ring */}
      <div className="absolute w-[140px] h-[140px] rounded-full border border-slate-800 pointer-events-none" />

      {/* Central Hub with beautifully styled VS Emblem */}
      <div className="relative z-20 flex items-center justify-center">
        <VsEmblem size="md" />
      </div>

      {/* Rotating Ring 1: Inner Orbit (Clockwise) */}
      <div
        className="absolute w-[240px] h-[240px] animate-spin-slow pointer-events-auto"
        style={{ animationDuration: '24s' }}
      >
        {innerOrbitTech.map((item, idx) => {
          const angle = (idx * 360) / innerOrbitTech.length;
          const rad = (angle * Math.PI) / 180;
          const x = 120 + 120 * Math.cos(rad) - 20;
          const y = 120 + 120 * Math.sin(rad) - 20;

          return (
            <div
              key={item.name}
              className="absolute group cursor-pointer"
              style={{ left: `${x}px`, top: `${y}px` }}
              title={item.name}
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f172a] border border-slate-700 text-slate-200 shadow-lg shadow-black/40 group-hover:scale-105 group-hover:border-sky-400/60 group-hover:text-white transition-all">
                <span className="text-sky-400">{item.icon}</span>
                <span className="text-[11px] font-mono-code font-medium whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rotating Ring 2: Outer Orbit (Counter-Clockwise) */}
      <div
        className="absolute w-[360px] h-[360px] animate-spin-reverse pointer-events-auto"
        style={{ animationDuration: '32s' }}
      >
        {outerOrbitTech.map((item, idx) => {
          const angle = (idx * 360) / outerOrbitTech.length;
          const rad = (angle * Math.PI) / 180;
          const x = 180 + 180 * Math.cos(rad) - 24;
          const y = 180 + 180 * Math.sin(rad) - 16;

          return (
            <div
              key={item.name}
              className="absolute group cursor-pointer"
              style={{ left: `${x}px`, top: `${y}px` }}
              title={item.name}
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b1120] border border-slate-800 text-slate-300 shadow-md group-hover:scale-105 group-hover:border-sky-400/50 group-hover:text-white transition-all">
                <span className="text-slate-400 group-hover:text-sky-400 transition-colors">{item.icon}</span>
                <span className="text-[11px] font-mono-code font-normal whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
