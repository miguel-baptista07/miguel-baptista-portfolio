import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "home", href: "#hero" },
  { label: "projects", href: "#work" },
  { label: "education", href: "#education" },
  { label: "expertise", href: "#expertise" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-12">
        <button 
          onClick={handleRefresh}
          className="mono-sm text-foreground hover:text-primary transition-colors relative group cursor-pointer"
        >
          MB_
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mono-sm link-hover text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-primary/50 mr-1 group-hover:text-primary transition-colors">0{index + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-foreground md:hidden hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-30 bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col items-center gap-8 pt-20">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="font-serif text-2xl text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary/50 mr-2 text-lg">0{index + 1}.</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
