import React from 'react';
import { Compass, TrendingUp, Layers, Cpu, Globe, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CircularText } from './CircularText';

export const CurrentFocus: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Django':
        return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'REST APIs':
        return <Globe className="w-4 h-4 text-sky-400" />;
      case 'React.js':
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 'Generative AI':
        return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'Cloud Deployment':
        return <TrendingUp className="w-4 h-4 text-sky-400" />;
      default:
        return <Compass className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="learning" className="py-20 sm:py-28 border-b border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#0a0f1d] to-[#080c14]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-sky-400 mb-2 font-medium">
              <span>07</span>
              <span className="text-slate-600">/</span>
              <span>Advanced Engineering</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight">
              {PORTFOLIO_DATA.currentlyLearning.heading}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs sm:text-sm font-mono-code text-slate-400 max-w-lg">
              "{PORTFOLIO_DATA.currentlyLearning.quote}"
            </p>
            <div className="hidden sm:block">
              <CircularText
                text="• ADVANCED FOCUS • ARCHITECTURE • FULL STACK • "
                size={95}
                radius={36}
                speed="slow"
              />
            </div>
          </div>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.currentlyLearning.topics.map((topic) => (
            <div
              key={topic.name}
              className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800">
                      {getIcon(topic.name)}
                    </div>
                    <h3 className="text-base font-semibold text-slate-100">
                      {topic.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono-code text-slate-400">
                <span>Production Architecture & Best Practices</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
