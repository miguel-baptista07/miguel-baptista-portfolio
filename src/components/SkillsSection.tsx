import { motion } from "framer-motion";

const languages = ["Kotlin", "Java", "C", "Python"];

const softSkills = [
  {
    skill: "Teamwork",
    description: "Years of handball developed my ability to collaborate effectively, knowing when to lead and when to support teammates.",
  },
  {
    skill: "Adaptability",
    description: "Transitioning between various sports environments developed my ability to quickly adjust to new situations and requirements.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="content-width">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono-sm mb-2">
            <span className="text-primary/50">05.</span> Technical
          </p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Skills
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mono-sm mb-6 text-foreground">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <motion.span
                  key={lang}
                  className="border border-border px-4 py-2 font-mono text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mono-sm mb-6 text-foreground">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((item) => (
                <div key={item.skill}>
                  <h4 className="mb-1 text-sm text-foreground">{item.skill}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
