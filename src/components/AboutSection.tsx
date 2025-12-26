import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="content-width">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            About
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-base leading-relaxed text-secondary-foreground md:text-lg">
            I'm a first-year Computer Engineering student at Universidade Lusófona, 
            based in Carcavelos, Portugal. My focus is on building a strong technical 
            foundation while exploring my interest in cybersecurity.
          </p>
          
          <p className="text-base leading-relaxed text-muted-foreground">
            With determination and focus, I'm ready to take on technical challenges. 
            My goal is to develop solid skills throughout my academic career and pursue 
            a specialized path in Cybersecurity after completing my degree.
          </p>
          
          <p className="text-base leading-relaxed text-muted-foreground">
            Outside of coding, my years in handball have shaped my approach to 
            teamwork and problem-solving—knowing when to lead and when to support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
