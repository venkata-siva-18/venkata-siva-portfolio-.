import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileDown, Copy, Check, Send, Sparkles, Settings2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CircularText } from './CircularText';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Editable Placeholders state (with defaults from PORTFOLIO_DATA)
  const [placeholders, setPlaceholders] = useState({
    email: PORTFOLIO_DATA.contact.placeholders.email,
    github: PORTFOLIO_DATA.contact.placeholders.github,
    linkedin: PORTFOLIO_DATA.contact.placeholders.linkedin,
    resume: PORTFOLIO_DATA.contact.placeholders.resume
  });

  // Recruiter quick message builder
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [recruiterRole, setRecruiterRole] = useState('Python Full Stack Developer');
  const [recruiterNote, setRecruiterNote] = useState(
    'Hi Venkata Siva, I reviewed your portfolio and educational background (B.Tech ECE 2026, CGPA 7.85) along with your Python, Django, REST APIs, React, and GenAI skill set. We would like to discuss an opportunity.'
  );
  const [copiedDraft, setCopiedDraft] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCopyDraft = () => {
    const fullDraft = `Subject: Opportunity for Venkata Siva - ${recruiterRole} at ${recruiterCompany || '[Company]'}\n\n${recruiterNote}\n\nBest regards,\n${recruiterName || '[Your Name]'}\n${recruiterCompany || '[Your Company]'}`;
    navigator.clipboard.writeText(fullDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (placeholders.email === 'YOUR_EMAIL') {
      copyToClipboard('YOUR_EMAIL', 'email');
      alert('Email placeholder is currently set to "YOUR_EMAIL". Use the "Customize Placeholders" button or copy the generated draft.');
      return;
    }
    const subject = encodeURIComponent(`Opportunity for Venkata Siva - ${recruiterRole}`);
    const body = encodeURIComponent(`${recruiterNote}\n\nBest regards,\n${recruiterName}\n${recruiterCompany}`);
    window.location.href = `mailto:${placeholders.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#080c14] via-[#090d16] to-[#080c14]">
      {/* Background Soft Color Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-cyan-400 mb-2">
              <span>08</span>
              <span className="text-slate-600">/</span>
              <span>Initiate Contact</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-slate-100 font-normal tracking-tight mb-4">
              {PORTFOLIO_DATA.contact.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {PORTFOLIO_DATA.contact.body}
            </p>
          </div>

          <div className="hidden sm:block">
            <CircularText
              text="• GET IN TOUCH • OPEN FOR HIRE • B.TECH ECE 2026 • VENKATA SIVA • "
              size={110}
              radius={42}
              speed="slow"
              centerIcon={<Mail className="w-5 h-5 text-cyan-400" />}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Action Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#111827]/90 border border-slate-700/70 space-y-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono-code uppercase tracking-wider text-cyan-400 font-semibold">
                  Direct Channels
                </span>
                <button
                  onClick={() => setShowConfigModal(true)}
                  className="flex items-center gap-1.5 text-xs font-mono-code text-cyan-300 hover:text-white transition-colors"
                  title="Configure personal links"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>Edit Links</span>
                </button>
              </div>

              {/* 1. Email Me */}
              <div className="p-3.5 rounded-xl bg-[#162032]/80 border border-slate-700/60 flex items-center justify-between gap-3 shadow-sm hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-cyan-300" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-white block">Email Me</span>
                    <span className="text-[11px] font-mono-code text-slate-400 truncate block">
                      {placeholders.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => copyToClipboard(placeholders.email, 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy email placeholder"
                  >
                    {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={placeholders.email === 'YOUR_EMAIL' ? '#contact' : `mailto:${placeholders.email}`}
                    onClick={(e) => {
                      if (placeholders.email === 'YOUR_EMAIL') {
                        e.preventDefault();
                        copyToClipboard('YOUR_EMAIL', 'email');
                        alert('Placeholder: YOUR_EMAIL. Click "Edit Links" to update.');
                      }
                    }}
                    className="px-3 py-1 text-xs font-mono-code rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition-colors"
                  >
                    Send
                  </a>
                </div>
              </div>

              {/* 2. GitHub */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 shadow-sm hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-white block">GitHub Profile</span>
                    <span className="text-[11px] font-mono-code text-slate-400 truncate block">
                      {placeholders.github}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => copyToClipboard(placeholders.github, 'github')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy GitHub URL placeholder"
                  >
                    {copiedKey === 'github' ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={placeholders.github === 'YOUR_GITHUB_URL' ? '#contact' : placeholders.github}
                    target={placeholders.github === 'YOUR_GITHUB_URL' ? '_self' : '_blank'}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (placeholders.github === 'YOUR_GITHUB_URL') {
                        e.preventDefault();
                        copyToClipboard('YOUR_GITHUB_URL', 'github');
                        alert('Placeholder: YOUR_GITHUB_URL. Click "Edit Links" to enter your real URL.');
                      }
                    }}
                    className="px-3 py-1 text-xs font-mono-code rounded-md bg-slate-800 text-slate-200 border border-slate-700 hover:border-sky-400 transition-colors"
                  >
                    Open
                  </a>
                </div>
              </div>

              {/* 3. LinkedIn */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 shadow-sm hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-white block">LinkedIn</span>
                    <span className="text-[11px] font-mono-code text-slate-400 truncate block">
                      {placeholders.linkedin}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => copyToClipboard(placeholders.linkedin, 'linkedin')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy LinkedIn URL placeholder"
                  >
                    {copiedKey === 'linkedin' ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={placeholders.linkedin === 'YOUR_LINKEDIN_URL' ? '#contact' : placeholders.linkedin}
                    target={placeholders.linkedin === 'YOUR_LINKEDIN_URL' ? '_self' : '_blank'}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (placeholders.linkedin === 'YOUR_LINKEDIN_URL') {
                        e.preventDefault();
                        copyToClipboard('YOUR_LINKEDIN_URL', 'linkedin');
                        alert('Placeholder: YOUR_LINKEDIN_URL. Click "Edit Links" to enter your real URL.');
                      }
                    }}
                    className="px-3 py-1 text-xs font-mono-code rounded-md bg-slate-800 text-slate-200 border border-slate-700 hover:border-sky-400 transition-colors"
                  >
                    Open
                  </a>
                </div>
              </div>

              {/* 4. Download Resume */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 shadow-sm hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <FileDown className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-white block">Download Resume</span>
                    <span className="text-[11px] font-mono-code text-slate-400 truncate block">
                      {placeholders.resume}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => copyToClipboard(placeholders.resume, 'resume')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Resume URL placeholder"
                  >
                    {copiedKey === 'resume' ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={onOpenResume}
                    className="px-3 py-1 text-xs font-mono-code rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>

            </div>

            {/* Recruiter Guarantee Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/30 border border-slate-800 text-xs font-mono-code text-slate-300 space-y-1 shadow-md">
              <span className="text-cyan-300 block font-semibold">Authenticity Guarantee:</span>
              <span>All academic records (QIS College of Engg., CGPA 7.85) and certifications (TAP Academy Python Full Stack & GenAI) are verifiable upon request.</span>
            </div>
          </div>

          {/* Right Column: Interactive Recruiter Message Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827]/90 border border-slate-700/70 space-y-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-sm font-semibold text-white font-mono-code flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    Recruiter Quick-Reach
                  </h3>
                  <span className="text-xs text-slate-400">
                    Generate an instant interview invite or outreach message
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono-code rounded-md bg-[#162032] text-cyan-300 hover:text-white border border-cyan-500/30 transition-colors shadow-sm"
                >
                  {copiedDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedDraft ? 'Copied Draft' : 'Copy Draft'}</span>
                </button>
              </div>

              <form onSubmit={handleMailto} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      value={recruiterName}
                      onChange={(e) => setRecruiterName(e.target.value)}
                      placeholder="e.g. Talent Acquisition"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={recruiterCompany}
                      onChange={(e) => setRecruiterCompany(e.target.value)}
                      placeholder="e.g. Technology Studio"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1">
                    Role In Discussion
                  </label>
                  <input
                    type="text"
                    value={recruiterRole}
                    onChange={(e) => setRecruiterRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1">
                    Message Body
                  </label>
                  <textarea
                    rows={4}
                    value={recruiterNote}
                    onChange={(e) => setRecruiterNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono-code text-slate-400">
                    Target: Venkata Siva ({placeholders.email})
                  </span>

                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-mono-code rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-md shadow-sky-500/20 transition-all flex items-center gap-2 hover:scale-[1.02]"
                  >
                    <span>Send via Email Client</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Edit Placeholders Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#111827] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-semibold text-white font-mono-code">
                  Configure Contact Placeholders
                </h4>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Replace the placeholder tokens below with your actual contact information. Changes will reflect instantly on all buttons and cards.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono-code text-slate-400 mb-1">
                  Email (Currently: YOUR_EMAIL)
                </label>
                <input
                  type="text"
                  value={placeholders.email}
                  onChange={(e) => setPlaceholders({ ...placeholders, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-code text-slate-400 mb-1">
                  GitHub URL (Currently: YOUR_GITHUB_URL)
                </label>
                <input
                  type="text"
                  value={placeholders.github}
                  onChange={(e) => setPlaceholders({ ...placeholders, github: e.target.value })}
                  placeholder="https://github.com/your-username"
                  className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-code text-slate-400 mb-1">
                  LinkedIn URL (Currently: YOUR_LINKEDIN_URL)
                </label>
                <input
                  type="text"
                  value={placeholders.linkedin}
                  onChange={(e) => setPlaceholders({ ...placeholders, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/your-profile"
                  className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-code text-slate-400 mb-1">
                  Resume URL (Currently: YOUR_RESUME_URL)
                </label>
                <input
                  type="text"
                  value={placeholders.resume}
                  onChange={(e) => setPlaceholders({ ...placeholders, resume: e.target.value })}
                  placeholder="https://drive.google.com/... or #resume"
                  className="w-full px-3 py-2 rounded-lg bg-[#090d16] border border-slate-700 text-xs font-mono-code text-white"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => {
                  setPlaceholders({
                    email: PORTFOLIO_DATA.contact.placeholders.email,
                    github: PORTFOLIO_DATA.contact.placeholders.github,
                    linkedin: PORTFOLIO_DATA.contact.placeholders.linkedin,
                    resume: PORTFOLIO_DATA.contact.placeholders.resume
                  });
                }}
                className="px-3 py-1.5 text-xs font-mono-code rounded-lg text-slate-400 hover:text-white"
              >
                Reset to Placeholders
              </button>

              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-1.5 text-xs font-mono-code rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-medium shadow-sm"
              >
                Save & Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
