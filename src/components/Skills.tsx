import React, { useState } from 'react';
import { Code, Database, Sparkles, Cpu, Layers, GitBranch, Lightbulb, Check } from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { CircularText } from './CircularText';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools & Version Control', 'Artificial Intelligence', 'Problem Solving'];

  const filteredCategories: SkillCategory[] = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-4 h-4 text-sky-400" />;
      case 'Frontend':
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 'Backend':
        return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-sky-400" />;
      case 'Tools & Version Control':
        return <GitBranch className="w-4 h-4 text-sky-400" />;
      case 'Artificial Intelligence':
        return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'Problem Solving':
        return <Lightbulb className="w-4 h-4 text-sky-400" />;
      default:
        return <Code className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#090e18] to-[#080c14]">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-sky-400 mb-2 font-medium">
              <span>02</span>
              <span className="text-slate-600">/</span>
              <span>Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight">
              Technical Skills
            </h2>
            <p className="text-xs sm:text-sm font-mono-code text-slate-400 mt-2 max-w-xl">
              Core technologies and tools applied across full-stack engineering, databases, and AI workflows.
            </p>
          </div>

          {/* Rotating Circular Emblem with Venkata Siva */}
          <div className="hidden sm:block">
            <CircularText
              text="• VENKATA SIVA • TECHNICAL SKILLS • FULL STACK • "
              size={110}
              radius={42}
              speed="normal"
              reverse={true}
            />
          </div>
        </div>

        {/* Filter Controls (clean segmented control) */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-slate-800 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono-code rounded-full transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-[#111827] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - unified sleek cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 hover:bg-[#111c33] transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-sky-400">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-100">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono-code text-slate-400 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                    {group.items.length} {group.items.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Items List - clean text, no repetitive 'Mastered' badges */}
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-xs font-mono-code p-2 rounded-lg bg-slate-900/60 border border-slate-800/60 text-slate-200"
                    >
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="font-medium text-slate-200">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footnote */}
        <div className="mt-10 p-4 rounded-xl bg-[#0f172a] border border-slate-800 text-xs font-mono-code text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Python, Django, REST APIs, React.js, MySQL, JavaScript, and GenAI.</span>
          </div>
          <span className="text-slate-400">Practical Application & Production Clean Code</span>
        </div>

      </div>
    </section>
  );
};
