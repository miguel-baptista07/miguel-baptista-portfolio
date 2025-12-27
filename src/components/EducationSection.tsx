import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    degree: "Computer Engineering",
    institution: "Universidade Lusófona",
    period: "2024 – Present",
    status: "Currently pursuing",
    icon: GraduationCap,
  },
  {
    degree: "High School",
    institution: "Agrupamento de Escolas Frei Gonçalo de Azevedo",
    period: "2021 – 2024",
    status: "Completed",
    icon: School,
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

        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon size={18} className="text-primary/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {edu.institution}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground/60">
                    {edu.period}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
