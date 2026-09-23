import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Database, Server, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onTriggerPlaceholder: (type: 'github' | 'demo') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onTriggerPlaceholder }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#16191b] border border-[#252525] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#252525]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#646e71] mb-1">
              <span>PROJECT {project.number}</span>
              <span className="text-[#444444]">·</span>
              <span className="text-[#828b8d]">{project.category}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#e0e0e0] font-normal">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#828b8d] hover:text-[#e0e0e0] hover:bg-[#1f1f23] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div>
          <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#646e71] mb-2">
            Overview
          </h4>
          <p className="text-sm sm:text-base text-[#828b8d] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Architectural Highlights */}
        <div>
          <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#646e71] mb-3">
            Core Architectural Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1f1f23]/60 border border-[#252525] text-xs text-[#e0e0e0]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Stack Concept Breakdown */}
        <div className="p-4 rounded-xl bg-[#0f1112] border border-[#252525] space-y-3">
          <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#828b8d] flex items-center gap-2">
            <Server className="w-3.5 h-3.5 text-[#e0e0e0]" />
            Full-Stack Architectural Implementation
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-code">
            <div className="p-3 rounded-lg bg-[#16191b] border border-[#252525]">
              <span className="text-[#646e71] block mb-1">Frontend Layer</span>
              <span className="text-[#e0e0e0] font-medium block">HTML5 / CSS3 / JS</span>
              <span className="text-[11px] text-[#828b8d]">Responsive, component-driven UI</span>
            </div>
            <div className="p-3 rounded-lg bg-[#16191b] border border-[#252525]">
              <span className="text-[#646e71] block mb-1">Backend Runtime</span>
              <span className="text-[#e0e0e0] font-medium block">Python Core Logic</span>
              <span className="text-[11px] text-[#828b8d]">RESTful endpoints & handlers</span>
            </div>
            <div className="p-3 rounded-lg bg-[#16191b] border border-[#252525]">
              <span className="text-[#646e71] block mb-1">Data & Intelligence</span>
              <span className="text-[#e0e0e0] font-medium block">MySQL / Relational SQL</span>
              <span className="text-[11px] text-[#828b8d]">
                {project.tags.includes('GenAI') ? 'GenAI contextual inference' : 'Normalized schema design'}
              </span>
            </div>
          </div>
        </div>

        {/* Technology Tags */}
        <div>
          <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#646e71] mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono-code rounded-md bg-[#1f1f23] text-[#e0e0e0] border border-[#252525]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions / Repos */}
        <div className="pt-4 border-t border-[#252525] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono-code rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/50 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Open GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <button
                onClick={() => onTriggerPlaceholder('github')}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono-code rounded-lg bg-[#1f1f23] hover:bg-[#252525] text-[#e0e0e0] border border-[#252525] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{project.githubPlaceholder}</span>
              </button>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono-code rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live Project</span>
              </a>
            ) : (
              <button
                onClick={() => onTriggerPlaceholder('demo')}
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono-code rounded-lg bg-[#1f1f23] hover:bg-[#252525] text-[#e0e0e0] border border-[#252525] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{project.demoPlaceholder}</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono-code rounded-lg bg-[#e0e0e0] text-[#010101] font-medium hover:bg-white transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
