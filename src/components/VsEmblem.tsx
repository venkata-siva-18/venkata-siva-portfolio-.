import React from 'react';
import { Sparkles } from 'lucide-react';

interface VsEmblemProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const VsEmblem: React.FC<VsEmblemProps> = ({ size = 'lg', className = '' }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const containerSize = isLarge 
    ? 'w-36 h-36 sm:w-44 sm:h-44' 
    : isSmall 
    ? 'w-20 h-20' 
    : 'w-28 h-28';

  const coreSize = isLarge 
    ? 'w-24 h-24 sm:w-28 sm:h-28' 
    : isSmall 
    ? 'w-14 h-14' 
    : 'w-20 h-20';

  const fontSize = isLarge 
    ? 'text-3xl sm:text-4xl' 
    : isSmall 
    ? 'text-xl' 
    : 'text-2xl';

  return (
    <div className={`relative flex items-center justify-center select-none ${containerSize} ${className}`}>
      {/* 1. Ambient Radial Plasma Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl opacity-60 pointer-events-none animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(14,165,233,0.2) 50%, transparent 75%)'
        }}
      />

      {/* 2. Outer Ring with Micro Star Accents - Clockwise Orbit */}
      <div 
        className="absolute inset-0 rounded-full border border-sky-500/20 animate-spin-slow pointer-events-none"
        style={{ animationDuration: '28s' }}
      >
        {/* Orbital nodes on the outer ring */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_#38bdf8]" />
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
      </div>

      {/* 3. Middle Concentric Dashed Ring - Counter-Clockwise Orbit */}
      <div 
        className="absolute inset-2 sm:inset-2.5 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-reverse pointer-events-none"
        style={{ animationDuration: '20s' }}
      />

      {/* 4. Third Glowing Thin Ring with Gradient Accent */}
      <div className="absolute inset-4 sm:inset-5 rounded-full border border-cyan-300/30 shadow-[inset_0_0_15px_rgba(56,189,248,0.15)] pointer-events-none" />

      {/* 5. Core Monogram Disc Container */}
      <div className={`relative z-10 ${coreSize} rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0e172a] via-[#090e1a] to-[#060a12] border-2 border-cyan-400/60 shadow-[0_0_25px_rgba(56,189,248,0.35),inset_0_0_15px_rgba(56,189,248,0.2)] group transition-all duration-300 hover:scale-105 hover:border-cyan-300`}>
        {/* Subtle glass reflection sheen */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-400/5 to-white/10 pointer-events-none" />

        {/* The VS Monogram */}
        <div className="flex items-center justify-center relative">
          <span className={`font-display font-bold tracking-wider ${fontSize} bg-gradient-to-b from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.5)]`}>
            VS
          </span>
          <Sparkles className="w-3 h-3 text-cyan-400 absolute -top-1 -right-3 animate-pulse" />
        </div>

        {/* Micro Labels below VS */}
        {isLarge && (
          <div className="flex flex-col items-center -mt-0.5">
            <span className="text-[9px] font-mono-code font-bold uppercase tracking-[0.2em] text-cyan-300">
              VENKATA SIVA
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[7.5px] font-mono-code uppercase tracking-widest text-slate-400 font-semibold">
                FULL STACK
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
