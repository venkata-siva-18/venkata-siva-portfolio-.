import React, { useState } from 'react';
import { Award, ExternalLink, Check, Copy, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certification: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCertModal, setActiveCertModal] = useState<any | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certification" className="py-20 sm:py-28 border-b border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#080c14] to-[#0a0f1d]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-cyan-400 mb-2 font-medium">
            <span>06</span>
            <span className="text-slate-600">/</span>
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-slate-100 font-normal tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <p className="text-xs sm:text-sm font-mono-code text-slate-400 mt-2 max-w-xl">
            Verified industry certifications and professional training credentials earned by Venkata Siva.
          </p>
        </div>

        {/* Stacked Certifications: 1. Pinnacle Labs Certificate, 2. TAP Academy Below It */}
        <div className="max-w-3xl space-y-8">
          
          {PORTFOLIO_DATA.certifications.map((cert, index) => {
            const isPinnacle = cert.id === 'pinnacle-certificate';

            return (
              <div
                key={cert.id}
                className={`p-6 sm:p-8 rounded-2xl bg-[#0f172a] border transition-all duration-300 shadow-xl relative overflow-hidden group ${
                  isPinnacle 
                    ? 'border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-950/20' 
                    : 'border-slate-800 hover:border-sky-500/40 hover:shadow-sky-950/20'
                }`}
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800/80 text-[11px] font-mono-code">
                  <span className="text-slate-400 font-medium">
                    Credential #{index + 1} · {cert.category}
                  </span>
                  <span className="text-cyan-400 font-semibold">
                    {cert.date}
                  </span>
                </div>

                {/* Top Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 text-cyan-400 shadow-md group-hover:scale-105 transition-transform">
                      {isPinnacle ? (
                        <Briefcase className="w-7 h-7 text-cyan-400" />
                      ) : (
                        <Award className="w-7 h-7 text-sky-400" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
                          {cert.organization}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-[11px] font-mono-code text-slate-400">
                          {cert.issued}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono-code text-slate-300">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center shrink-0 self-start sm:self-auto">
                    <span className="text-[10px] font-mono-code text-slate-400 block">Verification</span>
                    <span className="text-xs font-mono-code font-bold text-cyan-400 flex items-center gap-1 justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      {cert.badgeText}
                    </span>
                  </div>
                </div>

                {/* Curriculum & Key Competency Areas */}
                <div className="py-5 space-y-3">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-slate-300 font-semibold block">
                    Curriculum & Core Competencies
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cert.curriculumAreas.map((area, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono-code text-slate-200 flex items-center gap-2.5 hover:border-slate-700 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action & Credential ID Footer */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
                    <span>ID: <code className="text-slate-200">{cert.credentialId}</code></span>
                    <button
                      onClick={() => handleCopy(cert.id, cert.credentialId)}
                      className="p-1 text-cyan-400 hover:text-white transition-colors"
                      title="Copy Credential ID"
                    >
                      {copiedId === cert.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <button
                    onClick={() => setActiveCertModal(cert)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-code rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all self-start sm:self-auto shadow-sm"
                  >
                    <span>View Certificate Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Certificate Details Modal */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0f172a] border border-slate-700 rounded-2xl p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>{activeCertModal.organization} Credential Details</span>
              </div>
              <button
                onClick={() => setActiveCertModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 text-sm font-mono-code"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono-code text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="text-slate-400 text-[10px] uppercase">Certificate Program</div>
                <div className="text-white text-sm font-semibold">{activeCertModal.title}</div>
                <div className="text-cyan-400">{activeCertModal.category}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Issued To</span>
                  <span className="text-white font-medium">{PORTFOLIO_DATA.personal.name}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Credential ID</span>
                  <span className="text-cyan-300 font-mono-code">{activeCertModal.credentialId}</span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed pt-1">
                This verified accreditation confirms completion of rigorous coursework, hands-on programming projects, and technical evaluation.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <button
                onClick={() => handleCopy('modal', activeCertModal.verifyUrl)}
                className="text-xs font-mono-code text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                {copiedId === 'modal' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy Verification URL</span>
              </button>

              <button
                onClick={() => setActiveCertModal(null)}
                className="px-4 py-2 text-xs font-mono-code rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
