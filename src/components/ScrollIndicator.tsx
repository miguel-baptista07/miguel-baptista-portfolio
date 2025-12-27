import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  const handleClick = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="absolute bottom-16 left-1/2 -translate-x-1/2"
      style={{ opacity }}
    >
      <motion.button
        onClick={handleClick}
        className="flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <ChevronDown 
            size={20} 
            className="text-muted-foreground/50 group-hover:text-foreground/70 transition-colors duration-300" 
            strokeWidth={1}
          />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ScrollIndicator;
