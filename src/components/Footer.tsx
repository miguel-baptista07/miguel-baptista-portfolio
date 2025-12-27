import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-border px-6 py-8 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground/60">
          © {currentYear} Miguel Baptista
        </p>
        <p className="font-mono text-xs text-muted-foreground/40">
          Built with discipline
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
