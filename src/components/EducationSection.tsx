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
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="group flex items-start gap-4 border-l-2 border-border pl-6 transition-colors hover:border-primary/40 md:flex-row md:items-center md:justify-between md:border-l-0 md:border-b md:border-border md:pb-6 md:pl-0 md:hover:border-primary/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary/70">
                <edu.icon size={18} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
              </div>
              <div className="md:text-right">
                <p className="font-mono text-xs text-primary">{edu.period}</p>
                <p className="font-mono text-xs text-muted-foreground">{edu.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
