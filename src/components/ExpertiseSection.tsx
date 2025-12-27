import { motion } from "framer-motion";
import { Code, Layers, Box } from "lucide-react";

const expertise = [
  {
    title: "Programming Foundations",
    description: "Strong fundamentals in algorithms, data structures, and computational thinking. Building reliable solutions through disciplined problem-solving and clean code practices.",
    icon: Code,
  },
  {
    title: "Frontend Development",
    description: "Creating responsive, accessible user interfaces with modern web technologies. Experience with React, Next.js, and component-based architecture patterns.",
    icon: Layers,
  },
  {
    title: "Object-Oriented Design",
    description: "Applying OOP principles to build maintainable, extensible systems. Emphasis on polymorphism, encapsulation, and design patterns for complex applications.",
    icon: Box,
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
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon size={18} className="text-primary/70" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
