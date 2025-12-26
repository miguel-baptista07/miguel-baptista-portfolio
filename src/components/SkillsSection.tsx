import { motion } from "framer-motion";

const expertise = [
  {
    title: "Programming Languages",
    description: "Kotlin, Java, C, Python — building strong foundations across different paradigms and use cases.",
  },
  {
    title: "Problem Solving",
    description: "Algorithmic thinking and systematic debugging. Breaking down complex problems into manageable solutions.",
  },
  {
    title: "Game Logic & AI",
    description: "Designing strategic AI opponents and implementing win-detection algorithms in console-based games.",
  },
  {
    title: "Physics Simulation",
    description: "Mathematical modeling of real-world phenomena. Trajectory calculations and visualization of projectile motion.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="content-width">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Expertise
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              className="group border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="mb-3 font-serif text-lg text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
