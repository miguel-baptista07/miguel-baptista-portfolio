import { motion } from "framer-motion";

const expertise = [
  {
    title: "Programming Foundations",
    description: "Strong fundamentals in algorithms, data structures, and computational thinking. Building reliable solutions through disciplined problem-solving and clean code practices.",
  },
  {
    title: "Frontend Engineering",
    description: "Creating responsive, accessible user interfaces with modern web technologies. Experience with React, Next.js, and component-based architecture patterns.",
  },
  {
    title: "Engineering Mindset",
    description: "Applying OOP principles to build maintainable, extensible systems. Emphasis on polymorphism, encapsulation, and design patterns for complex applications.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding">
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

        <div className="grid gap-8 md:grid-cols-3">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              className="group p-6 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="font-serif text-lg text-foreground mb-4 transition-colors group-hover:text-primary">
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

export default ExpertiseSection;
