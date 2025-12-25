import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center section-padding pt-32">
      <div className="content-width">
        <motion.p
          className="mono-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Computer Engineering Student
        </motion.p>
        
        <motion.h1
          className="serif-display mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Miguel Baptista
        </motion.h1>
        
        <motion.p
          className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building strong foundations in software development with a focus on 
          problem-solving, technical rigor, and cybersecurity. Based in Portugal.
        </motion.p>

        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#work"
            className="group flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <span className="font-mono">View Work</span>
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      {/* Subtle decorative element */}
      <motion.div
        className="absolute bottom-12 left-6 hidden text-muted-foreground/20 md:block md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col gap-1 font-mono text-[10px]">
          <span>// scroll</span>
          <span>// to explore</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
