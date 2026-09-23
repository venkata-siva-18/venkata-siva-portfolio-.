export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  badge?: string;
  featured?: boolean;
  status?: 'completed' | 'in-progress' | 'pipeline';
  description: string;
  highlights: string[];
  tags: string[];
  githubPlaceholder: string;
  githubUrl?: string; // Optional real GitHub URL: e.g. "https://github.com/..."
  demoPlaceholder: string;
  demoUrl?: string;   // Optional real Live Demo URL: e.g. "https://..."
  mockType: 'food-delivery' | 'ecommerce' | 'microservices' | 'genai-doc';
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    isLearning?: boolean;
    type: 'core' | 'learning';
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Venkata Siva",
    initials: "VS",
    headline: "Python Full Stack Developer with GenAI | B.Tech ECE Fresher",
    eyebrow: "PYTHON FULL STACK DEVELOPER • GENAI",
    heroHeading: "Building practical web experiences with Python, JavaScript & GenAI.",
    heroBio: "I’m Venkata Siva, a 2026 B.Tech ECE graduate specializing in Python full-stack engineering, Django, REST APIs, React.js, and GenAI-powered web applications.",
    availability: "Open to Entry-Level Opportunities",
    careerGoal: "Entry-level Software / Python Full Stack Developer opportunities, with interest in building practical web applications and AI-powered solutions.",
    careerObjective: "Dedicated and results-oriented 2026 B.Tech graduate in Electronics and Communication Engineering (CGPA 7.85) seeking an entry-level Software Engineer / Python Full Stack Developer role. Passionate about architecting resilient backend services with Python & Django REST Framework, building dynamic responsive interfaces in React.js, designing optimized MySQL relational databases, and integrating modern Generative AI workflows. Committed to writing clean, maintainable code, solving complex architectural challenges, and contributing immediately to high-growth engineering teams.",
    languages: ["English", "Telugu"],
    fastFacts: [
      { label: "Education", value: "B.Tech – ECE" },
      { label: "College", value: "QIS College of Engg. & Tech." },
      { label: "Graduation", value: "2026" },
      { label: "CGPA", value: "7.85" },
      { label: "Primary Focus", value: "Python Full Stack + GenAI" }
    ]
  },

  about: {
    summary: "I am a 2026 B.Tech Electronics and Communication Engineering graduate from QIS College of Engineering and Technology, Ongole. My technical expertise spans end-to-end Python full-stack engineering, Django, REST APIs, React.js, relational database architecture with SQL and MySQL, modern JavaScript, and rigorous problem solving. I build clean, high-performance, full-lifecycle web applications.",
    careerObjective: "To launch my software engineering career within a forward-thinking technology organization as a Python Full Stack Developer. I aim to leverage my skills in Django, React, RESTful architectures, and Generative AI to design reliable digital products, optimize user experiences, and continuously evolve into an impactful engineering leader.",
    stats: [
      { label: "Degree", value: "B.Tech – ECE" },
      { label: "Graduation", value: "2026" },
      { label: "Academic CGPA", value: "7.85" },
      { label: "Core Specialty", value: "Python + GenAI Full Stack" }
    ]
  },

  education: {
    institution: "QIS College of Engineering and Technology",
    location: "Ongole, Andhra Pradesh",
    degree: "B.Tech – Electronics and Communication Engineering (ECE)",
    graduationYear: "2026",
    cgpa: "7.85",
    focusAreas: [
      "Electronics & Communication Engineering Fundamentals",
      "Programming Logic & Computer Architecture",
      "Problem Solving & Analytical Thinking",
      "Signals, Systems & Algorithmic Problem Solving"
    ]
  },

  internship: {
    company: "Pinnacle Labs",
    position: "Intern — Software Engineering",
    summary: "Professional software engineering internship at Pinnacle Labs focusing on full-stack application development, API services, and modern development lifecycles.",
    note: "Internship Certificate issued by Pinnacle Labs."
  },

  certifications: [
    {
      id: "pinnacle-certificate",
      organization: "Pinnacle Labs",
      title: "Software Engineering & Full Stack Internship Certificate",
      category: "Industry Internship Certification",
      issued: "Completed & Verified",
      date: "2025",
      badgeText: "Pinnacle Labs Verified",
      credentialId: "PL-INT-2025-VS",
      description: "Hands-on software development exposure focusing on full-stack architecture, API integration, debugging workflows, and agile team development cycles.",
      curriculumAreas: [
        "Full-Stack Web Development Workflows",
        "API Integration & Backend Endpoint Consumption",
        "Code Debugging, Unit Testing & Quality Assurance",
        "Git Version Control & Agile Team Practices"
      ],
      verifyUrl: "https://pinnaclelabs.com/verify/PL-INT-2025-VS"
    },
    {
      id: "tap-academy-certificate",
      organization: "TAP Academy",
      title: "Python Full Stack Developer with GenAI Certification",
      category: "Professional Technical Accreditation",
      issued: "Certified & Verified",
      date: "2025 – 2026",
      badgeText: "TAP Academy Certified",
      credentialId: "TAP-PY-FS-GENAI-VS",
      description: "Rigorous full-stack mastery covering core & advanced Python, OOP paradigms, Django REST Framework, React.js client architectures, MySQL relational databases, and Generative AI application engineering.",
      curriculumAreas: [
        "Python Programming & OOP Foundations",
        "Full Stack Web Development & Database Integration (SQL/MySQL)",
        "Generative AI Concepts & Intelligent Application Patterns",
        "Git/GitHub Workflows & Modern Engineering Practices"
      ],
      verifyUrl: "https://tapacademy.com/verify/TAP-PY-FS-GENAI-VS"
    }
  ],

  certification: {
    organization: "TAP Academy",
    title: "Python Full Stack Developer with GenAI",
    buttonLabel: "Certificate Link — Add URL",
    placeholderKey: "CERTIFICATE_URL",
    curriculumAreas: [
      "Python Programming & OOP Foundations",
      "Full Stack Web Development & Database Integration (SQL/MySQL)",
      "Generative AI Concepts & Intelligent Application Patterns",
      "Git/GitHub Workflows & Modern Engineering Practices"
    ]
  },

  currentlyLearning: {
    heading: "Advanced Engineering Focus",
    quote: "Focused on end-to-end Python, Django, REST APIs, React.js, and SQL, building scalable web architectures and integrating modern AI capabilities.",
    topics: [
      { name: "Django", description: "Production-ready backend architectures, robust ORM modeling, auth systems, and middleware." },
      { name: "REST APIs", description: "Designing secure, high-throughput JSON API endpoints, JWT authentication, and microservice interfaces." },
      { name: "React.js", description: "Modern component architectures, custom hooks, reactive state workflows, and responsive UI engineering." },
      { name: "Generative AI", description: "Prompt engineering, agentic patterns, LLM orchestration, and contextual intelligent applications." },
      { name: "Cloud Deployment", description: "Production cloud hosting, CI/CD automation, containerized microservices, and performance monitoring." }
    ]
  },

  skillCategories: [
    {
      category: "Programming",
      description: "Core algorithmic thinking and language syntax",
      items: [
        { name: "Python", type: "core" },
        { name: "JavaScript", type: "core" }
      ]
    },
    {
      category: "Frontend",
      description: "User interface structure, styling, and interactive component systems",
      items: [
        { name: "HTML5", type: "core" },
        { name: "CSS3 / Modern CSS", type: "core" },
        { name: "JavaScript (ES6+)", type: "core" },
        { name: "React.js", type: "core" }
      ]
    },
    {
      category: "Backend",
      description: "Server runtime, business logic, and API architecture",
      items: [
        { name: "Python", type: "core" },
        { name: "Django", type: "core" },
        { name: "REST APIs", type: "core" }
      ]
    },
    {
      category: "Database",
      description: "Relational data modeling, schema optimization, and querying",
      items: [
        { name: "MySQL", type: "core" },
        { name: "SQL", type: "core" }
      ]
    },
    {
      category: "Tools & Version Control",
      description: "Workflow management and collaborative development",
      items: [
        { name: "Git", type: "core" },
        { name: "GitHub", type: "core" }
      ]
    },
    {
      category: "Artificial Intelligence",
      description: "Intelligent application patterns and generative workflows",
      items: [
        { name: "Generative AI", type: "core" },
        { name: "AI-powered application development", type: "core" }
      ]
    },
    {
      category: "Problem Solving",
      description: "Software engineering logic and clean code discipline",
      items: [
        { name: "Python Programming & Problem Solving", type: "core" },
        { name: "Object-Oriented Programming (OOP)", type: "core" },
        { name: "Logical Problem Solving", type: "core" }
      ]
    }
  ] as SkillCategory[],

  // =========================================================================
  // PROJECTS LIST (Easily add more projects or update your details here!)
  // =========================================================================
  projects: [
    {
      id: "project-01",
      number: "01",
      title: "AI-Powered Food Delivery Platform",
      category: "AI + Full Stack",
      badge: "⭐ Featured Flagship",
      featured: true,
      status: "completed",
      description: "A high-performance food delivery web application engineered with intelligent recommendations, interactive calorie & diet filtering, and responsive cart checkout connected to a relational SQL schema.",
      highlights: [
        "AI-powered recommendation engine for personalized meal preferences",
        "Dynamic flavor, calorie & macro dietary filters (Keto, Vegan, High-Protein)",
        "Real-time interactive ordering interface with instant cart recalculations",
        "Cross-platform responsive design optimized for mobile and desktop screens",
        "Relational MySQL database schema design with normalized indexes"
      ],
      tags: ["Python", "Django REST", "React.js", "JavaScript", "MySQL", "GenAI"],
      githubPlaceholder: "Add GitHub Link",
      githubUrl: "", // Paste your GitHub repository URL here whenever ready
      demoPlaceholder: "Add Live Demo",
      demoUrl: "",   // Paste your live deployment URL here whenever ready
      mockType: "food-delivery"
    },
    {
      id: "project-02",
      number: "02",
      title: "E-Commerce Full Stack Storefront",
      category: "Full Stack Web Application",
      badge: "⚡ Live Interactive Demo",
      featured: true,
      status: "completed",
      description: "A scalable e-commerce application focused on seamless product catalog discovery, categorized shopping flows, instant cart mutation, and structured customer order pipelines.",
      highlights: [
        "Dynamic product catalog with instant category switching & search",
        "Frictionless shopping cart state management and checkout workflow",
        "Modern responsive interface adhering to mobile-first UX standards",
        "Normalized relational database modeling for inventory & customer orders",
        "Modular backend architecture with clean separation of concerns"
      ],
      tags: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "MySQL"],
      githubPlaceholder: "Add GitHub Link",
      githubUrl: "", // Paste your GitHub repository URL here whenever ready
      demoPlaceholder: "Add Live Demo",
      demoUrl: "",   // Paste your live deployment URL here whenever ready
      mockType: "ecommerce"
    }
  ] as Project[],

  contact: {
    heading: "Let's build something useful.",
    body: "I’m open to entry-level opportunities, internships, and software development roles where I can contribute, learn, and grow.",
    placeholders: {
      email: "YOUR_EMAIL",
      github: "YOUR_GITHUB_URL",
      linkedin: "YOUR_LINKEDIN_URL",
      resume: "YOUR_RESUME_URL"
    }
  }
};
