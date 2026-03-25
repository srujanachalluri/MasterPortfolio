import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

const experiences = [
  {
    role: "Graduate Assistant",
    company: "Concordia Bible Institute | Mequon, Milwaukee, WI",
    period: "Aug 2025 – Present",
    points: [
      "Developed Python automation scripts to extract IDs from websites and YouTube, retrieve transcripts, and process 1,000+ podcast episodes, reducing manual effort by 70%.",
      "Managed 300+ items via RSS feeds with structured metadata and built efficient content-processing workflows.",
    ],
  },
  {
    role: "Software Engineer Analyst",
    company: "Accenture",
    period: "May 2021 – July 2024",
    points: [
      "Engineered and automated 50+ cloud-native microservices and RESTful APIs using Java and IBM App Connect Enterprise, achieving 99.9% data consistency.",

      "Developed reusable Java and Python components leveraging data structures, algorithms, and OOP, improving code maintainability and efficiency by 30%.",

      "Led end-to-end IBM ACE v11 → v12 migration, owning design, deployment, monitoring, and post-production support with 100% successful go-live.",

      "Collaborated in a cross-functional team to develop a machine learning-based recommendation system, increasing user engagement by 42%.",

      "Implemented advanced Agile methodologies, reducing project delivery time by 37% and improving code quality by 25%.",

      "Built a real-time data analytics dashboard, boosting operational efficiency by 53%.",

      "Developed and maintained CI/CD pipelines using GitHub Actions and AWS CodePipeline, reducing deployment time by 35%.",
    ],
  },
  {
    role: "Technical Trainee",
    company: "Taletnio | Hyderabad, India",
    period: "Jan 2021 – April 2021",
    points: [
      "Trained 1,000+ engineering students in Python, Java, SQL, web development, and data structures & algorithms.",
      "Designed 50+ mock tests, increasing placement readiness by 45%.",
    ],
  },
];

const education = [
  {
    degree: "Master's in Computer Science",
    school: "Concordia University Wisconsin | Mequon, Milwaukee, WI USA",
    grade: "4.0/4.0",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Indian Institute Of Technology(IIIT BASAR)",
    grade: "9.6/10",
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
            href="https://drive.google.com/file/d/1gfDCWmH45DlWTlMGvVNxySApDKrViQkA/view?usp=drive_link"
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
          PROFESSIONAL EXPERIENCE
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
                  <li
                    key={j}
                    className="text-foreground/70 text-sm flex items-start gap-2"
                  >
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
            <p className="text-muted-foreground text-sm">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
