import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

const experiences = [
  {
    role: "Software Engineer",
    company: "Your Company",
    period: "2023 - Present",
    points: [
      "Developed and maintained full-stack web applications",
      "Collaborated with cross-functional teams to deliver features",
      "Optimized application performance and scalability",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Previous Company",
    period: "2021 - 2023",
    points: [
      "Built responsive UI components with React and TypeScript",
      "Implemented state management and API integrations",
      "Mentored junior developers on best practices",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Your University",
    period: "2017 - 2021",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="relative py-24 bg-hero-gradient">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-mono font-bold text-center mb-6"
        >
          MY <span className="text-gradient">RESUME</span>
        </motion.h2>

        <div className="flex justify-center mb-16">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <AiOutlineDownload className="text-xl" />
            Download Resume
          </a>
        </div>

        {/* Experience */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-mono font-bold text-gradient mb-8"
        >
          EXPERIENCE
        </motion.h3>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/40"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
              <ul className="space-y-1">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-foreground/70 text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-mono font-bold text-gradient mb-8"
        >
          EDUCATION
        </motion.h3>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary/40"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
            <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
            <p className="text-primary font-medium">{edu.school}</p>
            <p className="text-muted-foreground text-sm">{edu.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
