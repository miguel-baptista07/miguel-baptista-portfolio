import { motion } from "framer-motion";
import connectFourImg from "@/assets/connect-four.png";
import ballisticImg from "@/assets/ballistic-simulator.png";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Connect Four AI (Console Game)",
    description: "A console-based strategy game developed in Kotlin that enhances the classic 'Connect 4' concept with unique gameplay mechanics. Players strategically place colored balloons in columns while competing against an AI opponent.",
    tech: ["Kotlin", "Game Logic", "AI"],
    highlights: [
      "Implemented win-detection algorithms for all directions",
      "Built strategic AI opponent capable of defensive and offensive moves",
    ],
    image: connectFourImg,
  },
  {
    title: "Ballistic Trajectory Simulator",
    description: "A Kotlin-based program that calculates and visualizes projectile motion. Users can simulate launches by adjusting velocity, angle, and flight time, making it a valuable tool for studying physics.",
    tech: ["Kotlin", "Physics", "Mathematics"],
    highlights: [
      "Precise trajectory calculations using physics equations",
      "Computes velocity, angle, flight time, and range parameters",
    ],
    image: ballisticImg,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section-padding">
      <div className="content-width">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Image */}
                <div className="relative overflow-hidden rounded-sm border border-border bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-foreground md:text-2xl mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                  
                  <ul className="mb-6 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/60 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-muted-foreground border border-border px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.p
          className="mt-16 font-mono text-xs text-muted-foreground"
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
