import React, { useRef } from 'react';
import { X, Printer, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPlaceholder = () => {
    alert('Resume placeholder: YOUR_RESUME_URL. You can download or print this profile view directly via the "Print / Save PDF" button.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#0a0f1d] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code text-sky-400 uppercase tracking-wider font-semibold">
              Document Preview
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-mono-code text-white">
              Venkata Siva — Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadPlaceholder}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div ref={resumeRef} className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090e18] text-slate-100 font-sans print:bg-white print:text-black print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 print:border-gray-300">
            <h1 className="font-display text-3xl sm:text-4xl font-normal text-white print:text-black">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-sm font-mono-code text-sky-300 mt-1 print:text-gray-700">
              {PORTFOLIO_DATA.personal.headline}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs font-mono-code text-slate-400 print:text-gray-600">
              <span>Ongole, Andhra Pradesh</span>
              <span>·</span>
              <span>Email: YOUR_EMAIL</span>
              <span>·</span>
              <span>GitHub: YOUR_GITHUB_URL</span>
              <span>·</span>
              <span>LinkedIn: YOUR_LINKEDIN_URL</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-sky-400 mb-3 font-semibold print:text-gray-500">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 print:border-gray-300 print:bg-gray-50 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-white print:text-black">
                <span>{PORTFOLIO_DATA.education.degree}</span>
                <span className="text-xs font-mono-code text-sky-300 print:text-gray-600">
                  Graduation: {PORTFOLIO_DATA.education.graduationYear}
                </span>
              </div>
              <div className="text-xs text-slate-400 print:text-gray-700">
                {PORTFOLIO_DATA.education.institution}, {PORTFOLIO_DATA.education.location}
              </div>
              <div className="text-xs font-mono-code text-white print:text-black pt-1 font-semibold">
                Cumulative CGPA: {PORTFOLIO_DATA.education.cgpa} / 10.0
              </div>
            </div>
          </div>

          {/* Professional Certification */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-sky-400 mb-3 font-semibold print:text-gray-500">
              Certification
            </h2>
            <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 print:border-gray-300 print:bg-gray-50 space-y-1">
              <div className="text-sm font-semibold text-white print:text-black">
                {PORTFOLIO_DATA.certification.title}
              </div>
              <div className="text-xs text-slate-400 print:text-gray-700">
                Issued by {PORTFOLIO_DATA.certification.organization}
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-sky-400 mb-3 font-semibold print:text-gray-500">
              Experience / Internship
            </h2>
            <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 print:border-gray-300 print:bg-gray-50 space-y-1">
              <div className="flex items-center justify-between text-sm font-semibold text-white print:text-black">
                <span>{PORTFOLIO_DATA.internship.company}</span>
                <span className="text-xs font-mono-code text-sky-300 print:text-gray-600">
                  Role: {PORTFOLIO_DATA.internship.position}
                </span>
              </div>
              <p className="text-xs text-slate-300 print:text-black pt-1">
                {PORTFOLIO_DATA.internship.summary}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-sky-400 mb-3 font-semibold print:text-gray-500">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs print:text-black">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 shrink-0">Backend:</strong>
                <span className="text-slate-300 print:text-gray-700 font-medium">Python, Django, REST APIs, Microservice Endpoints</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 shrink-0">Frontend:</strong>
                <span className="text-slate-300 print:text-gray-700 font-medium">React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 shrink-0">Database:</strong>
                <span className="text-slate-300 print:text-gray-700 font-medium">MySQL, Relational SQL, Schema Optimization</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 shrink-0">AI Capabilities:</strong>
                <span className="text-slate-300 print:text-gray-700 font-medium">Generative AI, AI-powered application development, Prompt Engineering</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 shrink-0">Tools & Control:</strong>
                <span className="text-slate-300 print:text-gray-700 font-medium">Git, GitHub, VS Code</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="text-white print:text-black sm:w-36 shrink-0">Languages:</strong>
                <span className="text-slate-300 print:text-gray-700">English, Telugu</span>
              </div>
            </div>
          </div>

          {/* Academic & Full Stack Projects */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-sky-400 mb-3 font-semibold print:text-gray-500">
              Projects Showcase
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 print:border-gray-300 print:bg-gray-50 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono-code text-sky-300 print:text-gray-500">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono-code text-slate-400 print:text-slate-700 pt-1">
                    Technologies: {proj.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
