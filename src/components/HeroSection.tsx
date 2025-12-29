import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center section-padding pt-32">
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
          Focused on building strong technical foundations through disciplined 
          problem-solving and an engineering mindset. Developing expertise in{" "}
          <strong className="text-foreground font-medium">software development</strong>,{" "}
          <strong className="text-foreground font-medium">frontend systems</strong>, and{" "}
          <strong className="text-foreground font-medium">object-oriented design</strong>.
        </motion.p>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
