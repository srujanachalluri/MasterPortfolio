import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";

import { AiOutlineApi, AiOutlineRobot } from "react-icons/ai"; // For REST API & cloud-related

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiPostman,
  SiCanva,
} from "react-icons/si";

const techStack = [
  { icon: DiPython, label: "Python" },
  { icon: DiJava, label: "Java" },
  { icon: DiMysql, label: "MySQL" },
  { icon: AiOutlineApi, label: "Enterprise Integrations" },
  { icon: AiOutlineApi, label: "IBM ACE / IIB / MQ" },
  { icon: AiOutlineRobot, label: "Machine Learning" },
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: DiReact, label: "React" },
  { icon: DiNodejs, label: "Node.js" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: DiGit, label: "Git" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiPostman, label: "Postman" },
  { icon: SiCanva, label: "Canva" },
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
          A <span className="text-gradient">LITTLE ABOUT</span> ME
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
              I'm a Software Developer and Machine Learning enthusiast who
              enjoys transforming ideas into reliable and scalable systems that
              solve real-world problems.
            </p>

            <p>
              I'm currently pursuing a Master's in Computer Science working as a
              Graduate Assistant, where I manage university websites and develop
              automation tools using{" "}
              <span className="text-gradient font-semibold">
                Python Scripts and OpenAI APIs
              </span>
              .
            </p>

            <p>
              Previously, I worked at{" "}
              <span className="text-gradient font-semibold">Accenture</span> as
              a Backend Developer, contributing to enterprise integration
              systems for{" "}
              <span className="text-gradient font-semibold">Sony LIV</span>. I
              built RESTful APIs and backend services using{" "}
              <span className="text-gradient font-semibold">
                Java, .NET, and enterprise integration technologies
              </span>
              , and independently designed and migrated{" "}
              <span className="text-gradient font-semibold">
                50+ enterprise interfaces
              </span>{" "}
              to production.
            </p>

            <p>
              My key areas of interest include{" "}
              <span className="text-gradient font-semibold">
                Machine Learning, AI-powered automation, and scalable backend
                systems
              </span>
              , along with exploring modern technologies,and building
              high-performance applications.
            </p>

            <p>
              Outside of work and academics, I actively build projects and
              maintain a personal platform featuring{" "}
              <span className="text-gradient font-semibold">
                1000+ Python projects
              </span>
              , an ongoing initiative focused on helping developers learn
              through practical implementations.
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
              <span className="text-xs text-muted-foreground">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
