import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const techStack = [
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: DiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: DiNodejs, label: "Node.js" },
  { icon: DiPython, label: "Python" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: DiGit, label: "Git" },
  { icon: SiDocker, label: "Docker" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-16"
        >
          LET ME <span className="text-gradient">INTRODUCE</span> MYSELF
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-foreground/80 text-lg leading-relaxed"
          >
            <p>
              I'm a Software Engineer who loves transforming ideas into reliable,
              scalable products. Over time, I've explored several technologies
              and found my passion in building high-performance systems.
            </p>
            <p>
              I'm proficient in <span className="text-gradient font-semibold">JavaScript, TypeScript, Python, and Node.js</span> — and I enjoy
              working across both backend and frontend stacks.
            </p>
            <p>
              My key areas of interest include developing{" "}
              <span className="text-gradient font-semibold">Web Applications</span> and exploring modern frameworks like{" "}
              <span className="text-gradient font-semibold">React.js and Next.js</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-7xl md:text-8xl">🧑‍💻</span>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-mono font-bold text-center mb-12"
        >
          PROFESSIONAL <span className="text-gradient">SKILLSET</span>
        </motion.h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/20 hover:border-primary/60 transition-colors card-hover"
            >
              <tech.icon className="text-4xl md:text-5xl text-primary" />
              <span className="text-xs text-muted-foreground">{tech.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
