import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Utensils, 
  Plus, 
  Minus, 
  Database,
  Check,
  Copy,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { CircularText } from './CircularText';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'fullstack'>('all');
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Interactive Mock State for Project 01 (Food Delivery)
  const [foodQuery, setFoodQuery] = useState('High-protein recovery bowl');
  const [activeDietTag, setActiveDietTag] = useState<'all' | 'high-protein' | 'keto' | 'vegan'>('high-protein');
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Quinoa Avocado Protein Bowl', cal: '520 kcal', price: 14.50, tag: 'high-protein', count: 1 },
    { id: 2, name: 'Grilled Herb Chicken Greens', cal: '440 kcal', price: 16.00, tag: 'high-protein', count: 0 },
    { id: 3, name: 'Mediterranean Falafel Wrap', cal: '390 kcal', price: 12.00, tag: 'vegan', count: 0 },
  ]);

  // Interactive Mock State for Project 02 (E-Commerce)
  const [activeCategory, setActiveCategory] = useState<'All' | 'Tech' | 'Studio'>('All');
  const [cartCount, setCartCount] = useState(2);
  const [products, setProducts] = useState([
    { id: 1, name: 'Minimalist Mechanical Keyboard', price: 129, cat: 'Tech', inCart: true },
    { id: 2, name: 'Precision CNC Aluminum Stand', price: 79, cat: 'Studio', inCart: true },
    { id: 3, name: 'Matte Desk Mat (Extended 900x400)', price: 39, cat: 'Studio', inCart: false },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleTriggerPlaceholder = (type: 'github' | 'demo', project?: Project) => {
    if (type === 'github') {
      if (project?.githubUrl) {
        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
      } else {
        showToast('Link placeholder: Add your GitHub URL in src/data/portfolioData.ts.');
      }
    } else {
      if (project?.demoUrl) {
        window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
      } else {
        showToast('Link placeholder: Add your Live Demo URL in src/data/portfolioData.ts.');
      }
    }
  };

  const toggleFoodItem = (id: number, delta: number) => {
    setFoodItems(prev => prev.map(item => {
      if (item.id === id) {
        const newCount = Math.max(0, item.count + delta);
        return { ...item, count: newCount };
      }
      return item;
    }));
  };

  const foodSubtotal = foodItems.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  const toggleProductCart = (id: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        const nextState = !p.inCart;
        setCartCount(c => nextState ? c + 1 : Math.max(0, c - 1));
        return { ...p, inCart: nextState };
      }
      return p;
    }));
  };

  const handleCopyProjectTemplate = () => {
    const template = `    {
      id: "project-03",
      number: "03",
      title: "Your New Project Title",
      category: "Full Stack Web Application",
      badge: "⭐ Featured Project",
      featured: true,
      status: "completed",
      description: "Concise description of the system architecture, features, and business impact.",
      highlights: [
        "Feature 1: REST API with Python & Django / FastAPI",
        "Feature 2: Responsive React.js frontend interface",
        "Feature 3: Relational MySQL database schema design",
        "Feature 4: Secure authentication and unit test suite"
      ],
      tags: ["Python", "Django", "React.js", "MySQL", "Git"],
      githubPlaceholder: "Add GitHub Link",
      githubUrl: "https://github.com/your-username/your-repo",
      demoPlaceholder: "Add Live Demo",
      demoUrl: "https://your-live-deployment.vercel.app",
      mockType: "ecommerce"
    },`;

    navigator.clipboard.writeText(template);
    setCopiedTemplate(true);
    showToast('Project template copied! Paste it into projects: [...] in src/data/portfolioData.ts');
    setTimeout(() => setCopiedTemplate(false), 3000);
  };

  // Filter projects
  const filteredProjects = PORTFOLIO_DATA.projects.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return p.category.toLowerCase().includes('ai') || p.tags.includes('GenAI');
    if (activeFilter === 'fullstack') return p.category.toLowerCase().includes('full stack');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#0a0f1d] via-[#090d16] to-[#080c14]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code tracking-[0.16em] uppercase text-cyan-400 mb-2 font-medium">
              <span>03</span>
              <span className="text-slate-600">/</span>
              <span>Case Studies & Systems</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-slate-100 font-normal tracking-tight">
              Featured Full Stack Projects
            </h2>
            <p className="text-xs sm:text-sm font-mono-code text-slate-400 mt-2 max-w-xl">
              Production-ready web architectures built with Python, Django REST, React.js, MySQL, and GenAI workflows. Easily add more projects anytime.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <CircularText
                text="• VENKATA SIVA • FULL STACK PROJECTS • CASE STUDIES • "
                size={95}
                radius={36}
                speed="normal"
                centerIcon={<Database className="w-4 h-4 text-cyan-400" />}
              />
            </div>
          </div>
        </div>

        {/* Filter Controls & Project Counters */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl bg-[#0d1424] border border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-code">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-cyan-400" />
              Filter:
            </span>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PORTFOLIO_DATA.projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeFilter === 'ai'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI + GenAI (1)
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeFilter === 'fullstack'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Stack Web (1)
            </button>
          </div>

          <div className="text-xs font-mono-code text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Showing <strong className="text-white">{filteredProjects.length}</strong> case studies</span>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            const isFood = project.mockType === 'food-delivery';
            const isEcommerce = project.mockType === 'ecommerce';

            return (
              <div
                key={project.id}
                className="rounded-3xl border border-slate-800 bg-[#0f172a] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all hover:border-cyan-500/40 shadow-xl group relative"
              >
                {/* Glowing Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Left Column: Project Overview & Specs (5 cols) */}
                <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6">
                  <div>
                    {/* Badge & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-4xl sm:text-5xl text-slate-600 group-hover:text-slate-400 transition-colors font-normal">
                        {project.number}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.badge && (
                          <span className="text-[11px] font-mono-code text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 font-medium">
                            {project.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider mb-2 font-medium">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl text-slate-100 font-normal tracking-tight mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Tags */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-mono-code rounded-md bg-slate-900 text-slate-200 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 text-xs font-mono-code rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                    >
                      <span>View Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 text-xs font-mono-code rounded-full bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/40 transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => handleTriggerPlaceholder('github', project)}
                        className="px-3.5 py-2 text-xs font-mono-code rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.githubPlaceholder}</span>
                      </button>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 text-xs font-mono-code rounded-full bg-transparent hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/40 transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => handleTriggerPlaceholder('demo', project)}
                        className="px-3.5 py-2 text-xs font-mono-code rounded-full bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.demoPlaceholder}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: High-Fidelity Interactive Mock UI (7 cols) */}
                <div className="p-4 sm:p-6 lg:p-8 lg:col-span-7 bg-[#090d16] flex flex-col justify-center">
                  <div className="w-full rounded-2xl bg-[#111827] border border-slate-700/80 overflow-hidden shadow-2xl">
                    
                    {/* Simulated App Header */}
                    <div className="px-4 py-3 bg-[#0d1424] border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-[11px] font-mono-code text-cyan-300 ml-2">
                          {isFood && 'food_delivery_engine // preview'}
                          {isEcommerce && 'ecommerce_storefront // preview'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono-code text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40">
                        Interactive Simulation
                      </span>
                    </div>

                    {/* MOCK UI CONTENT */}
                    {isFood && (
                      /* Food Delivery Mock UI */
                      <div className="p-4 sm:p-5 space-y-4">
                        {/* AI Query bar */}
                        <div className="p-2.5 rounded-xl bg-[#0a0f1d] border border-cyan-500/30 flex items-center justify-between gap-2 shadow-inner">
                          <div className="flex items-center gap-2 flex-1">
                            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                            <input
                              type="text"
                              value={foodQuery}
                              onChange={(e) => setFoodQuery(e.target.value)}
                              className="bg-transparent text-xs text-white font-mono-code w-full focus:outline-none placeholder-slate-500"
                              placeholder="Describe your dietary preference..."
                            />
                          </div>
                          <span className="text-[10px] font-mono-code text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 shrink-0">
                            AI Search
                          </span>
                        </div>

                        {/* Dietary Filter chips */}
                        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono-code">
                          <span className="text-slate-400 mr-1">Intent:</span>
                          {(['all', 'high-protein', 'keto', 'vegan'] as const).map((tag) => (
                            <button
                              key={tag}
                              onClick={() => setActiveDietTag(tag)}
                              className={`px-2.5 py-0.5 rounded-md transition-all ${
                                activeDietTag === tag
                                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold'
                                  : 'bg-[#1a2234] text-slate-300 hover:text-white'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>

                        {/* Meal Cards */}
                        <div className="space-y-2">
                          {foodItems.map((item) => (
                            <div
                              key={item.id}
                              className="p-3 rounded-xl bg-[#162032]/80 border border-slate-700/60 flex items-center justify-between gap-3 shadow-sm hover:border-cyan-500/40 transition-colors"
                            >
                              <div className="space-y-0.5">
                                <div className="text-xs font-medium text-slate-100 flex items-center gap-1.5">
                                  <Utensils className="w-3 h-3 text-cyan-400" />
                                  <span>{item.name}</span>
                                </div>
                                <div className="text-[11px] font-mono-code text-slate-400">
                                  {item.cal} · <span className="text-emerald-400 font-semibold">${item.price.toFixed(2)}</span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => toggleFoodItem(item.id, -1)}
                                  className="w-6 h-6 rounded bg-[#111827] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-mono-code text-cyan-300 w-4 text-center font-bold">
                                  {item.count}
                                </span>
                                <button
                                  onClick={() => toggleFoodItem(item.id, 1)}
                                  className="w-6 h-6 rounded bg-[#111827] border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Order Summary & Cart Bar */}
                        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono-code">
                          <div>
                            <span className="text-slate-400">Order Subtotal:</span>
                            <span className="text-emerald-300 font-bold ml-2">${foodSubtotal.toFixed(2)}</span>
                          </div>
                          <button
                            onClick={() => showToast('Dispatched to Django REST Backend & MySQL Database!')}
                            disabled={foodSubtotal === 0}
                            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:opacity-90 disabled:opacity-40 transition-all shadow-md"
                          >
                            Checkout ({foodItems.reduce((a, b) => a + b.count, 0)})
                          </button>
                        </div>
                      </div>
                    )}

                    {isEcommerce && (
                      /* E-Commerce Mock UI */
                      <div className="p-4 sm:p-5 space-y-4">
                        {/* Storefront Nav Bar */}
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div className="flex items-center gap-1.5 text-xs font-mono-code">
                            {(['All', 'Tech', 'Studio'] as const).map(cat => (
                              <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-2.5 py-1 rounded-md transition-all ${
                                  activeCategory === cat
                                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-mono-code text-cyan-200 bg-[#162032] px-2.5 py-1 rounded-lg border border-cyan-500/30">
                            <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Cart: {cartCount}</span>
                          </div>
                        </div>

                        {/* Product Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {products
                            .filter(p => activeCategory === 'All' || p.cat === activeCategory)
                            .map((prod) => (
                              <div
                                key={prod.id}
                                className="p-3 rounded-xl bg-[#162032]/80 border border-slate-700/60 flex flex-col justify-between space-y-3 hover:border-cyan-500/40 transition-colors shadow-sm"
                              >
                                <div>
                                  <div className="text-[10px] font-mono-code text-cyan-400 uppercase">
                                    {prod.cat}
                                  </div>
                                  <div className="text-xs font-medium text-slate-100 line-clamp-2 mt-1">
                                    {prod.name}
                                  </div>
                                </div>

                                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                                  <span className="text-xs font-mono-code text-emerald-300 font-bold">
                                    ${prod.price}
                                  </span>
                                  <button
                                    onClick={() => toggleProductCart(prod.id)}
                                    className={`px-2 py-1 text-[11px] font-mono-code rounded transition-colors ${
                                      prod.inCart
                                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600/50 font-semibold'
                                        : 'bg-[#111827] text-slate-300 hover:text-white border border-slate-700'
                                    }`}
                                  >
                                    {prod.inCart ? 'Added' : '+ Add'}
                                  </button>
                                </div>
                              </div>
                            ))}
                        </div>

                        {/* Architecture Verification Strip */}
                        <div className="pt-2 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                          <span className="text-cyan-300">Stack: Python + Django + React.js + MySQL</span>
                          <span className="text-emerald-300">✓ Production Architecture</span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* DEDICATED ADD YOUR FUTURE PROJECTS HELPER (Easily expand after a few days) */}
        {/* ========================================================================= */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#0d1424] border border-dashed border-cyan-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code font-semibold">
                <Plus className="w-3.5 h-3.5 text-cyan-400" />
                <span>Extensible Project Engine · Add More Projects Anytime</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white font-normal">
                Ready to add your full project data after a few days?
              </h3>
              <p className="text-xs sm:text-sm font-mono-code text-slate-300 leading-relaxed">
                You can easily add new projects, GitHub repositories, live demo links, and architectural notes anytime in <code className="text-cyan-300 px-1 py-0.5 rounded bg-slate-900 border border-slate-700">src/data/portfolioData.ts</code> under <code className="text-cyan-300">projects: [...]</code>. Each new entry automatically displays with full interactivity!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={handleCopyProjectTemplate}
                className="px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono-code font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
              >
                {copiedTemplate ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedTemplate ? 'Template Copied!' : 'Copy Project JSON Template'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-[#111827] border border-cyan-500/50 text-xs font-mono-code text-white shadow-2xl flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onTriggerPlaceholder={handleTriggerPlaceholder}
      />
    </section>
  );
};
