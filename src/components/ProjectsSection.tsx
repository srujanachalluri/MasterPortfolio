import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Resume Builder",
    subtitle: "Land your dream job with AI",
    description:
      "Paste a job description and your resume — Groq AI rewrites it to perfectly match the role. Features ATS scoring, keyword gap analysis, PDF export, and Firebase-powered history. Used by job seekers to increase interview callbacks.",
    tech: ["React", "Groq AI", "Llama 3.3", "Firebase", "PDF.js", "Vite"],
    github: "https://github.com/srujanachalluri/ai-resume-builder",
    demo: "https://ai-resume-builder-iota-five.vercel.app/",
    image: "/build-ta.png",
    featured: true,
    badge: "🔥 Most Popular",
    badgeColor: "#ea580c",
    stats: ["ATS Scoring", "PDF Export", "AI Powered"],
  },
  {
    title: "AI Interview Coach",
    subtitle: "Practice interviews with real AI feedback",
    description:
      "Full-stack app with Python FastAPI backend and React frontend. Generates role-specific interview questions across 6 categories, scores answers 1-10 with detailed feedback, keyword analysis, model answers, session summaries, and downloadable PDF reports.",
    tech: ["React", "Python", "FastAPI", "Groq AI", "Firebase", "Render"],
    github: "https://github.com/srujanachalluri/ai-interview-coach",
    demo: "https://ai-interview-coach-roan.vercel.app/",
    image: "/guide-res.png",
    featured: true,
    badge: "⚡ Full Stack",
    badgeColor: "#7c3aed",
    stats: ["Python Backend", "6 Categories", "AI Scoring"],
  },
  {
    title: "ChatSuite",
    subtitle: "Real-time team collaboration platform",
    description:
      "Slack-like real-time chat application with Google OAuth, group channels, direct messaging, emoji reactions, and an AI assistant powered by Gemini. Built with Firebase Firestore for real-time sync across all connected clients.",
    tech: ["React", "Firebase", "Firestore", "Gemini AI", "Framer Motion"],
    github: "https://github.com/srujanachalluri/ChatSuite",
    demo: "https://chatsuite-psi.vercel.app/",
    image: "/chatsuite.png",
    featured: false,
    badge: "💬 Real-time",
    badgeColor: "#0891b2",
    stats: ["Real-time Sync", "Google Auth", "AI Assistant"],
  },
  {
    title: "AI Chat Interface",
    subtitle: "Multi-session AI conversation platform",
    description:
      "A production-ready AI chat UI with persistent multi-session management, conversation history stored in Firestore, smooth streaming responses, and a clean modern interface. Supports multiple concurrent chat sessions with context preservation.",
    tech: ["Next.js", "React", "TypeScript", "Firebase", "Gemini AI", "Prisma"],
    github: "https://github.com/srujanachalluri/aichatuitype",
    demo: "https://aichatuitype.vercel.app/",
    image: "/chatsuite.png",
    featured: false,
    badge: "🤖 AI/ML",
    badgeColor: "#16a34a",
    stats: ["Multi-session", "Streaming", "TypeScript"],
  },
  {
    title: "Master Portfolio",
    subtitle: "This portfolio — built from scratch",
    description:
      "A modern developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Features particle animations, typewriter effects, glassmorphism design, smooth scroll transitions, and a fully responsive layout.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/srujanachalluri/MasterPortfolio",
    demo: "https://master-portfolio-rho.vercel.app/",
    image: "/portfolio.png",
    featured: false,
    badge: "🎨 Design",
    badgeColor: "#db2777",
    stats: ["Animations", "TypeScript", "Responsive"],
  },
];

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">
            — What I've Built —
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-foreground mb-4"
            style={{ letterSpacing: "-1.5px" }}
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Real-world AI applications built and deployed — not just tutorials.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Featured projects — large 2 col cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden bg-muted">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold"
                  style={{
                    background: project.badgeColor,
                    boxShadow: `0 4px 14px ${project.badgeColor}60`,
                  }}
                >
                  {project.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3
                    className="text-xl font-black text-foreground mb-1"
                    style={{ letterSpacing: "-0.5px" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-semibold">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stats pills */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="text-xs font-bold px-2 py-1 rounded-full"
                      style={{
                        background: `${project.badgeColor}15`,
                        color: project.badgeColor,
                        border: `1px solid ${project.badgeColor}30`,
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-bold transition-all hover:opacity-80 hover:-translate-y-0.5"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary text-sm font-bold transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of projects — 3 col smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-36 overflow-hidden bg-muted">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-white text-xs font-bold"
                  style={{ background: project.badgeColor }}
                >
                  {project.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-lg font-black text-foreground mb-1"
                  style={{ letterSpacing: "-0.4px" }}
                >
                  {project.title}
                </h3>
                <p className="text-primary text-xs font-semibold mb-2">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                  {project.description.slice(0, 120)}...
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-semibold border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-semibold">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-bold transition-all hover:opacity-80"
                  >
                    <Github size={12} />
                    <span>Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary text-primary text-xs font-bold transition-all hover:bg-primary hover:text-white"
                    >
                      <ExternalLink size={12} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/srujanachalluri"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm font-bold transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
          >
            <Github size={16} />
            <span>View all projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
