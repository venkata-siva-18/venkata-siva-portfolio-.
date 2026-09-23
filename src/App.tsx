import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MasteredSkillsMarquee } from './components/MasteredSkillsMarquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certification } from './components/Certification';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      {/* Persistent Sticky Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" role="main">
        {/* 1. HERO SECTION (With rotating words & circular 360 tech wheel) */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Mastered Skills Rotating Ribbon */}
        <MasteredSkillsMarquee />

        {/* 2. ABOUT SECTION */}
        <About />

        {/* 3. SKILLS SECTION (All learned/core) */}
        <Skills />

        {/* 4. PROJECTS SECTION */}
        <Projects />

        {/* 5. EXPERIENCE / INTERNSHIP SECTION */}
        <Experience />

        {/* 6. EDUCATION SECTION */}
        <Education />

        {/* 7. CERTIFICATION SECTION */}
        <Certification />

        {/* 8. ADVANCED FOCUS SECTION */}
        <CurrentFocus />

        {/* 9. CONTACT SECTION */}
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* Quick Resume View Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
