import { motion } from "framer-motion";

interface LandingScreenProps {
  onEnter: () => void;
}

const LandingScreen = ({ onEnter }: LandingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-background"
      onClick={onEnter}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.button
        className="font-serif text-2xl tracking-[0.3em] text-foreground/80 transition-colors duration-300 hover:text-primary md:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onClick={onEnter}
      >
        START
      </motion.button>
      
      <motion.p
        className="absolute bottom-12 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        click anywhere to enter
      </motion.p>
    </motion.div>
  );
};

export default LandingScreen;
