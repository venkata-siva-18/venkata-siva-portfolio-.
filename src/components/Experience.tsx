import React, { useState } from 'react';
import { Briefcase, Info } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [copiedNote, setCopiedNote] = useState(false);

  const handleCopyNote = () => {
    navigator.clipboard.writeText("Pinnacle Labs - Intern");
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2000);
  };

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#080c14] via-[#090d16] to-[#0a0f1d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-sky-400 mb-2 font-medium">
            <span>04</span>
            <span className="text-slate-600">/</span>
            <span>Industry Exposure</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight">
            Experience
          </h2>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l border-slate-700/80 space-y-8">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-4 hover:border-slate-700 transition-all shadow-xl">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 shadow-sm">
                    <Briefcase className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {PORTFOLIO_DATA.internship.company}
                    </h3>
                    <span className="text-xs font-mono-code text-sky-300">
                      Position: {PORTFOLIO_DATA.internship.position}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 text-xs font-mono-code text-sky-400 border border-slate-700 self-start sm:self-center font-medium shadow-sm">
                  Internship
                </div>
              </div>

              {/* Verified Text */}
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
                {PORTFOLIO_DATA.internship.summary}
              </p>

              {/* Developer Note */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs font-mono-code text-slate-400">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span>{PORTFOLIO_DATA.internship.note}</span>
                </div>
                <a
                  href="#certification"
                  className="text-[11px] text-cyan-400 hover:text-white transition-colors shrink-0 underline"
                >
                  View Certificate
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
