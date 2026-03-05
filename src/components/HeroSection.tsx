import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-4">
            Hi There! <span className="inline-block animate-float">👋🏻</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-6">
            I'M{" "}
            <span className="text-gradient glow-text">Srujana Challuri</span>
          </h2>
          <div className="mb-8">
            <Typewriter
              texts={[
                "Software Engineer",
                "Full Stack Developer",
                "Machine Learning Enthusiast",
                "Open Source Enthusiast",
                "Problem Solver",
              ]}
            />
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/srujanachalluri"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <AiFillGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/srujanachalluri"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://srujanachalluri.github.io/python-projects-site/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Resume
            </a>
            <a
              href="https://srujanachalluri.github.io/python-projects-site/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Visit Python Hub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="z-10 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-primary/5 flex items-center justify-center">
              <span className="text-8xl md:text-9xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
