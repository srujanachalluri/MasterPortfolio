import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-hero-gradient">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          Designed & Built with 💜 by{" "}
          <span className="text-gradient font-semibold">Srujana Challuri</span>
        </p>
        <div className="flex gap-4">
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
            Visit Python Hub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
