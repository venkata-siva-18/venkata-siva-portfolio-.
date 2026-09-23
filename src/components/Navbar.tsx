import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090e18]/95 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-xl'
          : 'bg-[#090e18]/80 backdrop-blur-sm border-b border-slate-800/50 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Zone - Venkata Siva */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-slate-100 group focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-b from-slate-900 to-[#0c1322] border border-cyan-400/60 flex items-center justify-center text-cyan-300 font-display font-bold text-xs shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:border-cyan-300 transition-all">
            <span className="relative z-10">VS</span>
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping opacity-20 pointer-events-none" />
          </div>
          <span className="font-display text-xl sm:text-2xl font-normal tracking-tight text-white group-hover:text-sky-300 transition-colors">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono-code text-slate-400 px-2 py-0.5 rounded-full border border-slate-800 bg-slate-900 font-medium">
            B.Tech ECE '26
          </span>
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-1.5 text-xs font-mono-code tracking-wide rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-slate-800 text-sky-400 font-medium border border-slate-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Zone: Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all shadow-sm focus:outline-none"
            title="Preview Resume"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-sky-400" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="hidden lg:inline-flex items-center px-4 py-1.5 text-xs font-mono-code rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all hover:scale-105"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090e18]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2 text-sm font-mono-code rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-800 text-sky-400 border border-slate-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono-code rounded-lg bg-slate-900 text-slate-200 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-mono-code rounded-lg bg-sky-500 text-slate-950 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
