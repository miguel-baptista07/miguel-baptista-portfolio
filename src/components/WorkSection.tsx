import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "4 Balões em Linha",
    description: "A console-based strategy game developed in Kotlin that enhances the classic 'Connect 4' concept with unique gameplay mechanics. Players strategically place colored balloons in columns while competing against an AI opponent.",
    tech: ["Kotlin", "Game Logic", "AI"],
    highlights: [
      "Implemented win-detection algorithms for all directions",
      "Built strategic AI opponent capable of defensive and offensive moves",
    ],
  },
  {
    title: "Ballistic Trajectory Simulator",
    description: "A Kotlin-based program that calculates and visualizes projectile motion. Users can simulate launches by adjusting velocity, angle, and flight time, making it a valuable tool for studying physics.",
    tech: ["Kotlin", "Physics", "Mathematics"],
    highlights: [
      "Precise trajectory calculations using physics equations",
      "Computes velocity, angle, flight time, and range parameters",
    ],
  },
  {
    title: "CyberSafe Application",
    description: "Developed a professional cover letter and video application for CyberSafe, a Portuguese cybersecurity company. This project demonstrates my commitment to the cybersecurity field.",
    tech: ["Professional Writing", "Video Production"],
    highlights: [
      "Research-driven approach to company values and requirements",
      "Clear articulation of career goals in cybersecurity",
    ],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding">
      <div className="content-width">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono-sm mb-2">
            <span className="text-primary/50">03.</span> Selected Work
          </p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Projects
          </h2>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              index={index}
              highlights={project.highlights}
            />
          ))}
        </div>
        
        <motion.p
          className="mt-8 font-mono text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          // More projects coming as I progress through my studies
        </motion.p>
      </div>
    </section>
  );
};

export default WorkSection;
