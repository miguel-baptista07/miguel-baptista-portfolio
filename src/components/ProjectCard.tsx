import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  index: number;
  highlights?: string[];
}

const ProjectCard = ({ title, description, tech, index, highlights }: ProjectCardProps) => {
  return (
    <motion.article
      className="group border-t border-border py-8 md:py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex items-start gap-4 md:w-1/3">
          <span className="mono-sm text-primary/50">0{index + 1}</span>
          <h3 className="font-serif text-xl text-foreground md:text-2xl">
            {title}
          </h3>
        </div>
        
        <div className="md:w-2/3">
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
          
          {highlights && highlights.length > 0 && (
            <ul className="mb-4 space-y-2">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/60" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
