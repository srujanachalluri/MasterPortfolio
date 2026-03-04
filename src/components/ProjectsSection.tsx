import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const projects = [
  {
    title: "AI Chat Application",
    description: "A real-time chat application powered by AI with natural language processing capabilities and a modern UI.",
    tech: ["React", "Node.js", "OpenAI", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, drag-and-drop boards, and team features.",
    tech: ["React", "TypeScript", "Supabase", "DnD Kit"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that generates beautiful developer portfolios from GitHub profiles automatically.",
    tech: ["Next.js", "GitHub API", "Tailwind", "Vercel"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-4"
        >
          MY RECENT <span className="text-gradient">WORKS</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Here are a few projects I've worked on recently
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-primary/20 bg-card/50 p-6 card-hover"
            >
              <h3 className="text-xl font-mono font-bold text-gradient mb-3">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <AiFillGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  <BsGlobe /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
