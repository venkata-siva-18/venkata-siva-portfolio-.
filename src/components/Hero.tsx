import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Copy, Check, Terminal, Play, Sparkles, Target, Award, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RotatingWords } from './RotatingWords';
import { OrbitingTechRound } from './OrbitingTechRound';
import { VsEmblem } from './VsEmblem';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'django' | 'react' | 'sql' | 'ai'>('django');
  const [copied, setCopied] = useState(false);
  const [simulatedRun, setSimulatedRun] = useState(false);

  const dynamicWords = [
    "Python & Django Backends",
    "RESTful APIs & Microservices",
    "Modern React.js Interfaces",
    "Intelligent GenAI Solutions",
    "Robust MySQL Architectures"
  ];

  const codeSnippets = {
    django: `# views.py - Django REST Framework Backend
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class PortfolioOrderService(APIView):
    """Production REST API endpoint for web applications."""
    
    def get(self, request):
        return Response({
            "engineer": "Venkata Siva",
            "degree": "B.Tech ECE 2026 (CGPA 7.85)",
            "credentials": ["Pinnacle Labs Intern", "TAP Academy Certified"],
            "stack": ["Python", "Django REST", "React.js", "MySQL", "GenAI"],
            "status": "Ready for high-velocity software engineering"
        }, status=status.HTTP_200_OK)

# Scalable modular architecture ready for production`,

    react: `// AppOrderPipeline.tsx - React.js Client Layer
import React, { useState } from 'react';

export const InteractiveStore = () => {
  const [cart, setCart] = useState<{ id: string; name: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Dispatched to Django REST backend with fast response
    await fetch('/api/orders/checkout', { method: 'POST' });
    setIsProcessing(false);
  };

  return <div>Component UI with reactive state & hooks</div>;
};`,

    sql: `-- schema.sql - Relational MySQL Database Architecture
CREATE TABLE IF NOT EXISTS food_catalog (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    category ENUM('Bowls', 'Salads', 'Entrees', 'Desserts') NOT NULL,
    price DECIMAL(6, 2) NOT NULL,
    dietary_tags JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    total_amount DECIMAL(8, 2) NOT NULL,
    order_status VARCHAR(40) DEFAULT 'Delivered'
);

-- Normalized indexing for sub-second retrieval
CREATE INDEX idx_food_category ON food_catalog(category);`,

    ai: `# genai_pipeline.py - Assistive LLM Intelligence Core
import os
from typing import List, Dict

class GenerativePipeline:
    def __init__(self, temperature: float = 0.2):
        self.context = "Autonomous Recommendation Engine"

    def synthesize_suggestion(self, preferences: List[str]) -> Dict[str, any]:
        # Contextual prompt engineering & zero-shot matching
        return {
            "query": preferences,
            "matched_intent": "Clean Architecture & Scalability",
            "candidate": "Venkata Siva",
            "status": "Ready for client rendering"
        }

pipeline = GenerativePipeline()
result = pipeline.synthesize_suggestion(["python", "genai"])`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setSimulatedRun(true);
    setTimeout(() => setSimulatedRun(false), 3000);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-slate-800/80 overflow-hidden">
      {/* Background Subtle Gradient Field */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 15%, rgba(56, 189, 248, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 60%, rgba(14, 165, 233, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 60%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, #090e18 0%, #0a0f1d 50%, #080c14 100%)
          `
        }}
      />

      {/* Decorative Subtle Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Recruiter Fast-Check Availability Banner */}
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-1.5 px-4 rounded-full bg-[#0d1424] border border-slate-800 text-xs font-mono-code text-slate-300 shadow-md">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {PORTFOLIO_DATA.personal.availability}
          </span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span className="text-slate-200 font-medium">B.Tech ECE 2026</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span className="text-slate-300">CGPA: <strong className="text-white font-bold">{PORTFOLIO_DATA.education.cgpa}</strong></span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span className="text-cyan-300 font-medium">Python Full Stack & GenAI</span>
        </div>

        {/* 1. VS EMBLEM NICELY STYLED IN THE CENTER */}
        <div className="flex justify-center mb-6">
          <VsEmblem size="lg" />
        </div>

        {/* 2. HIGHLIGHTED NAME AT THE CENTER WITH COME-AND-DISPLAY ANIMATION */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Python Full Stack Developer & GenAI Architect</span>
          </div>
          
          {/* Highlighted Name with Come and Display Entrance Effect */}
          <h1 className="animate-name-display font-display text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-tight leading-[1.04] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-sky-400 drop-shadow-[0_0_40px_rgba(56,189,248,0.35)]">
            {PORTFOLIO_DATA.personal.name}
          </h1>

          {/* Dynamic Rotating Sub-Headline */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[32px] leading-snug tracking-tight text-slate-200 font-light">
            Engineering robust scalable systems with{' '}
            <br className="hidden sm:inline" />
            <RotatingWords words={dynamicWords} className="min-w-[280px] font-medium text-cyan-300" />
          </h2>
        </div>

        {/* Quick Credentials / Status Tagline */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono-code text-slate-400">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1525] border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">B.Tech ECE (7.85 CGPA)</span>
            <span className="text-slate-600">·</span>
            <span className="text-cyan-300 font-medium">Pinnacle Labs Intern</span>
            <span className="text-slate-600">·</span>
            <span className="text-sky-300 font-medium">TAP Academy Certified</span>
          </div>
        </div>

        {/* CALL TO ACTION BUTTONS */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="px-6 py-3 text-xs sm:text-sm font-mono-code font-bold rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] group"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Explore Featured Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#certification"
            className="px-5 py-3 text-xs sm:text-sm font-mono-code font-semibold rounded-full bg-[#162032] hover:bg-[#1f2d47] text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 flex items-center gap-2"
          >
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pinnacle & TAP Credentials</span>
          </a>

          <button
            onClick={onOpenResume}
            className="px-5 py-3 text-xs sm:text-sm font-mono-code rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-all duration-200 flex items-center gap-1.5"
            title="View Resume Document"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </button>

          <a
            href="#contact"
            className="px-5 py-3 text-xs sm:text-sm font-mono-code rounded-full bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all duration-200 flex items-center gap-2"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Core Tech Stack Footprint Chips */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2 text-xs font-mono-code">
          <span className="text-slate-400 font-medium">Core Stack:</span>
          {[
            'Python',
            'Django REST',
            'React.js',
            'JavaScript',
            'MySQL Database',
            'Generative AI',
            'Git / GitHub'
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full border border-slate-800 bg-[#0f172a] text-slate-300 text-[11px] font-medium hover:border-cyan-500/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 5. MULTI-FILE CODE STUDIO CONSOLE */}
        <div className="mt-12 max-w-3xl mx-auto text-left">
          <div className="rounded-2xl border border-slate-800 bg-[#0f172a] overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Window Header */}
            <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <span className="ml-2 text-[11px] font-mono-code text-slate-300 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  venkata_siva_workspace
                </span>
              </div>

              {/* Tab Controls */}
              <div className="flex items-center gap-1 bg-[#131b2e] p-0.5 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab('django')}
                  className={`px-2.5 py-1 text-[11px] font-mono-code rounded transition-colors ${
                    activeTab === 'django' ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  django.py
                </button>
                <button
                  onClick={() => setActiveTab('react')}
                  className={`px-2.5 py-1 text-[11px] font-mono-code rounded transition-colors ${
                    activeTab === 'react' ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  react.tsx
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`px-2.5 py-1 text-[11px] font-mono-code rounded transition-colors ${
                    activeTab === 'sql' ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  schema.sql
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-2.5 py-1 text-[11px] font-mono-code rounded transition-colors ${
                    activeTab === 'ai' ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  genai.py
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleRun}
                  className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-[11px] font-mono-code text-cyan-300 border border-cyan-500/30 flex items-center gap-1 transition-colors"
                  title="Simulate execution"
                >
                  <Play className="w-2.5 h-2.5 fill-current text-cyan-400" />
                  <span>Run</span>
                </button>
              </div>
            </div>

            {/* Code Display Area */}
            <div className="p-4 sm:p-5 bg-[#080d18] text-xs font-mono-code overflow-x-auto min-h-[240px] max-h-[270px]">
              <pre className="text-slate-300 leading-relaxed">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Execution Feedback / Console Drawer */}
            <div className="px-4 py-2.5 bg-[#0a0f1d] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono-code">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${simulatedRun ? 'bg-cyan-400 animate-ping' : 'bg-cyan-400'}`} />
                <span className="text-slate-300">
                  {simulatedRun ? 'Execution OK: 0 errors · Verified clean architecture' : 'Ready for test execution'}
                </span>
              </div>
              <span className="text-slate-400 font-medium">Django 5 + React 19 + GenAI</span>
            </div>
          </div>
        </div>

        {/* 6. ORBITING 360° TECH WHEEL WITH VS EMBLEM IN CENTER */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-widest block mb-1">
              Continuous Rotation · Full Stack Ecosystem
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-slate-100 font-normal">
              Full Stack Technologies in Motion
            </h3>
            <p className="text-xs sm:text-sm font-mono-code text-slate-400 mt-2">
              Continuous orbit around the engineering core — Python, Django, React, MySQL, and GenAI.
            </p>
          </div>

          <OrbitingTechRound />
        </div>

      </div>
    </section>
  );
};
