import { Github, Linkedin, Instagram } from "lucide-react";

const Navigation = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <input type="checkbox" id="nav-toggle" className="hidden" />
      
      <div className="nav-header max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold gradient-text">
          Calet Lobo
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <label htmlFor="nav-toggle" className="hamburger md:hidden">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu md:hidden">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => {
                const toggle = document.getElementById('nav-toggle') as HTMLInputElement;
                if (toggle) toggle.checked = false;
              }}
            >
              {link.label}
            </a>
          ))}
          
          {/* Social Icons in Mobile Menu */}
          <div className="flex items-center gap-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
