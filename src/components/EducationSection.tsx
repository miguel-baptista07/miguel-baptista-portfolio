import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Computer Engineering",
    institution: "Universidade Lusófona",
    institutionUrl: "https://www.ulusofona.pt/servicos/netpa",
    period: "2024 — Present",
  },
  {
    degree: "High School",
    institution: "Agrupamento de Escolas Frei Gonçalo de Azevedo",
    institutionUrl: "https://esfga.pt/expsitenovo/",
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
                <span className="text-sm text-muted-foreground">
                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                  >
                    {edu.institution}
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </span>
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
