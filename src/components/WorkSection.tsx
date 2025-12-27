import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    title: "React & Next.js — Frontend Labs & E-Commerce Platform",
    description: "Modern web application built with React and Next.js, focused on component architecture, state management, and real-world frontend patterns.",
    bullets: [
      "Product listing with search and sorting functionality",
      "Dynamic routes for product details and navigation",
      "Shopping cart with persistent state using localStorage",
      "Favorites system synchronized across pages",
      "Countries explorer with filtering and ordering"
    ],
    tech: ["React", "Next.js", "TypeScript", "SWR", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://lab11part1.vercel.app/",
    githubUrl: "https://github.com/miguel-baptista-a22405192/diw-lab8",
    images: [
      { src: "/placeholder.svg", alt: "E-Commerce Platform - Product Listing" },
      { src: "/placeholder.svg", alt: "E-Commerce Platform - Product Details" },
      { src: "/placeholder.svg", alt: "E-Commerce Platform - Shopping Cart" }
    ]
  },
  {
    title: "HTML, CSS & JavaScript — Frontend Labs Collection",
    description: "Collection of frontend labs developed incrementally to practice web fundamentals and browser-side interactivity.",
    bullets: [
      "Semantic HTML structure and accessibility",
      "Responsive layouts with CSS Flexbox and Grid",
      "Dynamic rendering with vanilla JavaScript",
      "Filtering and sorting of data collections",
      "State persistence using localStorage"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/miguel-baptista-a22405192/miguelbaptista1.github.io",
    images: [
      { src: "/placeholder.svg", alt: "Frontend Labs Collection" }
    ]
  },
  {
    title: "Java — The Great Programming Journey (OOP Game Engine)",
    description: "Educational board game engine developed in Java 17 to apply strong Object-Oriented Programming principles in a complex rule-based system.",
    bullets: [
      "Turn-based board game logic with modular design",
      "Multiple obstacle and protection systems",
      "Pure polymorphism implementation (no instanceof)",
      "Persistent save/load of game state",
      "Fully validated with automated tests"
    ],
    tech: ["Java 17", "OOP", "Polymorphism", "File Persistence"],
    githubUrl: "https://github.com/miguel-baptista-a22405192/LP2-22405192-22408651",
    images: [
      { src: "/placeholder.svg", alt: "Java Game Engine - Game Board" },
      { src: "/placeholder.svg", alt: "Java Game Engine - Game Logic" }
    ]
  }
];

interface ImageGalleryProps {
  images: ProjectImage[];
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

const ImageGallery = ({ images, isOpen, onClose, projectTitle }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl mx-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {/* Project title */}
            <p className="absolute -top-12 left-0 font-mono text-xs text-muted-foreground">
              {projectTitle}
            </p>

            {/* Image container */}
            <div className="relative overflow-hidden rounded-sm border border-primary/30">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-auto"
              />
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots indicator */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <motion.article
        className="group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div 
            className="relative overflow-hidden rounded-sm border border-primary/30 cursor-pointer"
            onClick={() => setGalleryOpen(true)}
          >
            <img
              src={project.images[0].src}
              alt={project.images[0].alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {project.images.length > 1 && (
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-sm">
                <Images size={14} className="text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">{project.images.length}</span>
              </div>
            )}
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
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/60 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-muted-foreground border border-border px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-foreground border border-border px-4 py-2 transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Live Demo
                  <ExternalLink size={12} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-foreground border border-border px-4 py-2 transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  GitHub
                  <Github size={12} />
                </a>
              )}
              {project.images.length > 1 && (
                <button
                  onClick={() => setGalleryOpen(true)}
                  className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground border border-border px-4 py-2 transition-all duration-300 hover:border-primary/50 hover:text-foreground"
                >
                  View Gallery
                  <Images size={12} />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.article>

      <ImageGallery
        images={project.images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        projectTitle={project.title}
      />
    </>
  );
};

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

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <motion.p
          className="mt-20 font-mono text-xs text-muted-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          // More projects will be added as my journey continues
        </motion.p>
      </div>
    </section>
  );
};

export default WorkSection;
