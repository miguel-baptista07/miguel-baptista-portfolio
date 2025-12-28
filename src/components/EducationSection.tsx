import { motion } from "framer-motion";

const education = [
  {
    degree: "Computer Engineering",
    institution: "Universidade Lusófona",
    period: "2024 — Present",
  },
  {
    degree: "High School",
    institution: "Agrupamento de Escolas Frei Gonçalo de Azevedo",
    period: "2021 — 2024",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card">
      <div className="content-width">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="group flex items-start justify-between gap-8 py-4 border-b border-border/50 last:border-0 transition-colors hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex-1">
                <h3 className="font-serif text-lg text-foreground mb-1 transition-colors group-hover:text-primary">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution}
                </p>
              </div>
              <p className="font-mono text-xs text-muted-foreground/70 whitespace-nowrap">
                {edu.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
