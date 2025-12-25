import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="content-width">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono-sm mb-2">
            <span className="text-primary/50">07.</span> Connect
          </p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Get in Touch
          </h2>
        </motion.div>

        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            I'm always open to discussing new opportunities, projects, or just 
            having a conversation about technology and cybersecurity.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:miguelkevlin23@gmail.com"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm link-hover">miguelkevlin23@gmail.com</span>
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm link-hover">GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm link-hover">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
