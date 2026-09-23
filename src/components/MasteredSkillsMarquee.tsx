import React from 'react';
import { Sparkles } from 'lucide-react';

export const MasteredSkillsMarquee: React.FC = () => {
  const items = [
    { text: 'Venkata Siva', highlight: true, icon: <Sparkles className="w-3.5 h-3.5 text-sky-400 inline mr-1" /> },
    { text: 'Python & Django Architecture' },
    { text: 'REST APIs & Microservices' },
    { text: 'React.js 19 Frontends' },
    { text: 'Generative AI Workflows' },
    { text: 'MySQL Relational Schemas' },
    { text: 'B.Tech ECE (7.85 CGPA)' },
    { text: 'JavaScript (ES6+)' },
    { text: 'Git & Version Control' },
    { text: 'Clean Code & OOP Rigor' }
  ];

  // Repeat items for seamless horizontal scroll
  const fullList = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-3.5 border-y border-slate-800/80 bg-[#090e1a]/90 backdrop-blur-sm">
      {/* Edge Gradients for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#080c14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#080c14] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee">
        {fullList.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 text-xs font-mono-code whitespace-nowrap px-3"
          >
            <span
              className={`transition-colors font-medium flex items-center ${
                item.highlight
                  ? 'text-sky-300 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.icon}
              {item.text}
            </span>
            <span className="text-slate-700 font-bold" aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
