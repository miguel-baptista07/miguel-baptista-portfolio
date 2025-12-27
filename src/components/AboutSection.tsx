import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
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
            I approach learning and work with the same discipline I developed 
            playing handball for years—understanding when to push forward and 
            when to support the team.
          </p>
          
          <p className="text-base leading-relaxed text-muted-foreground">
            Currently building a strong foundation in software engineering, with 
            a focus on understanding systems deeply rather than just making things 
            work. I believe in writing code that others can read and maintain.
          </p>
          
          <p className="text-base leading-relaxed text-muted-foreground">
            Based in Portugal, I'm committed to long-term growth in this field—taking 
            the time to learn properly, one concept at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
