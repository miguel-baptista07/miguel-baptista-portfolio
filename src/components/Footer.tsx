const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {currentYear} Miguel Baptista
        </p>
        <p className="font-mono text-xs text-muted-foreground/50">
          Built with purpose
        </p>
      </div>
    </footer>
  );
};

export default Footer;
