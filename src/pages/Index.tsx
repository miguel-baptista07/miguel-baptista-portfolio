import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingScreen from "@/components/LandingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <LandingScreen onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navigation />
          <main>
            <HeroSection />
            <WorkSection />
            <EducationSection />
            <ExpertiseSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
