import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-foreground"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default NavLink;
