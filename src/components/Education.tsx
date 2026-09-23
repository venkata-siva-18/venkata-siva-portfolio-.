import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-b border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#0a0f1d] to-[#080c14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-sky-400 mb-2 font-medium">
            <span>05</span>
            <span className="text-slate-600">/</span>
            <span>Academic Background</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-6 hover:border-slate-700 transition-all shadow-xl">
            
            {/* Top row with degree & year */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono-code text-sky-400 uppercase tracking-wider font-semibold">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                  <span>Undergraduate Degree</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {PORTFOLIO_DATA.education.degree}
                </h3>
                <p className="text-base text-slate-300">
                  {PORTFOLIO_DATA.education.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PORTFOLIO_DATA.education.location}</span>
                </div>
              </div>

              {/* CGPA & Graduation Pills */}
              <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center shadow-sm">
                  <span className="text-[10px] font-mono-code text-slate-400 block">Cumulative CGPA</span>
                  <span className="text-lg font-mono-code font-bold text-white">
                    {PORTFOLIO_DATA.education.cgpa}
                  </span>
                </div>

                <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-sky-400" />
                  <span>Class of {PORTFOLIO_DATA.education.graduationYear}</span>
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="space-y-3">
              <span className="text-xs font-mono-code uppercase tracking-wider text-sky-400 font-semibold block">
                Foundational Coursework & Analytical Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PORTFOLIO_DATA.education.focusAreas.map((area, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono-code text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiter Note */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Official Transcripts Available
              </span>
              <span className="text-sky-400 font-medium">B.Tech ECE Fresher</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
