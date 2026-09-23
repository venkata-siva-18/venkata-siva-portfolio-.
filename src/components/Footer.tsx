import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c14] border-t border-slate-800/80 py-12 text-slate-400 font-mono-code text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Tier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-mono-code font-bold text-xs">
                VS
              </div>
              <span className="font-display text-2xl font-normal text-white">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs text-sky-400 mt-1">
              {PORTFOLIO_DATA.personal.headline}
            </p>
          </div>

          {/* Social / Channel Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-all"
              title="Email (Placeholder: YOUR_EMAIL)"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-all"
              title="GitHub (Placeholder: YOUR_GITHUB_URL)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-all"
              title="LinkedIn (Placeholder: YOUR_LINKEDIN_URL)"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-white transition-all ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Quick Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <span>© 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.</span>
            <span className="mx-2">·</span>
            <span className="text-slate-400">Python Full Stack & GenAI</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-slate-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
