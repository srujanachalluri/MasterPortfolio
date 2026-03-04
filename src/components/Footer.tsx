import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-hero-gradient">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          Designed & Built with 💜 by <span className="text-gradient font-semibold">Your Name</span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-primary/30 text-foreground/70 hover:text-primary hover:border-primary transition-all"
          >
            <AiFillGithub className="text-lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-primary/30 text-foreground/70 hover:text-primary hover:border-primary transition-all"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-primary/30 text-foreground/70 hover:text-primary hover:border-primary transition-all"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
