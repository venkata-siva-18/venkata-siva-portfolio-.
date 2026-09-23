import React from 'react';
import { GraduationCap, Languages, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CircularText } from './CircularText';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#080c14] to-[#0a0f1d]">
      {/* Background Soft Accent */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-sky-400 mb-2 font-medium">
              <span>01</span>
              <span className="text-slate-600">/</span>
              <span>Background & Profile</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight">
              About Me & Journey
            </h2>
          </div>

          <div className="hidden sm:block">
            <CircularText
              text="• VENKATA SIVA • B.TECH ECE 2026 • CGPA 7.85 • FULL STACK • "
              size={110}
              radius={42}
              speed="slow"
              centerIcon={<GraduationCap className="w-5 h-5 text-sky-400" />}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-[17px] leading-relaxed">
            <p>
              I am a <strong className="text-white font-medium">2026 B.Tech graduate in Electronics and Communication Engineering (ECE)</strong> from <strong className="text-sky-300 font-medium">QIS College of Engineering and Technology, Ongole</strong> with an academic standing of <strong className="text-white font-semibold">7.85 CGPA</strong>.
            </p>

            <p>
              Having dedicated myself to practical engineering, <strong className="text-white font-medium">I build across the full-stack software cycle</strong>: <strong className="text-sky-300 font-medium">Python, Django, REST APIs, React.js, modern JavaScript, and MySQL</strong>. I write structured, modular code with clean architectural separation and object-oriented rigor.
            </p>

            <p>
              With comprehensive training from <strong className="text-slate-200 font-medium">TAP Academy</strong> in Python Full Stack Development & Generative AI, I design intelligent, responsive web applications that combine robust relational data modeling with frictionless, reactive interfaces.
            </p>
          </div>

          {/* Compact Information Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Academic & Profile Specs */}
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-5 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono-code text-sky-400 uppercase tracking-wider font-semibold">Key Credentials</span>
                <span className="text-xs font-mono-code text-slate-400 font-medium">Academic Records</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-xs font-mono-code text-slate-400 block">Education</span>
                  <span className="text-sm font-semibold text-slate-100 mt-0.5 block">B.Tech – ECE</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-xs font-mono-code text-slate-400 block">Graduation</span>
                  <span className="text-sm font-semibold text-sky-300 mt-0.5 block">2026</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-xs font-mono-code text-slate-400 block">CGPA</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">7.85 / 10.0</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-xs font-mono-code text-slate-400 block">Core Stack</span>
                  <span className="text-sm font-semibold text-sky-300 mt-0.5 block">Python + React + AI</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono-code text-slate-400 block mb-1">Institution</span>
                <span className="text-sm text-slate-100 font-medium block">
                  QIS College of Engineering and Technology
                </span>
                <span className="text-xs text-slate-400">Ongole, Andhra Pradesh</span>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono-code text-slate-400 block mb-1">Spoken Languages</span>
                  <div className="flex items-center gap-2 text-xs font-mono-code text-slate-200">
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">English</span>
                    <span className="text-slate-600">·</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Telugu</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 shadow-sm">
                  <Languages className="w-4 h-4 text-sky-400" />
                </div>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
              <div className="text-xs text-slate-300 leading-snug">
                <span className="text-white font-medium">Ready for Opportunities:</span> Full-stack developer prepared for entry-level engineering roles.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
