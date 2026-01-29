import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full gradient-hero opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full gradient-hero opacity-15 blur-3xl" />
      
      <div className="relative z-10 section-container text-center pt-20">
        {/* Main Content */}
        <div className="animate-fade-in-up">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Calet Lobo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground mb-6 flex flex-wrap justify-center gap-2">
            <span>Engineering Student</span>
            <span className="text-primary">•</span>
            <span>Developer</span>
            <span className="text-primary">•</span>
            <span>Traveller</span>
            <span className="text-primary">•</span>
            <span>Creator</span>
          </p>
          
          <p className="text-secondary-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            I am an engineering student who enjoys blending technology with creativity. 
            From building innovative software solutions to expressing ideas through art 
            and exploration, I strive to learn, create, and grow every day.
          </p>
          
          {/* Tagline */}
          <div className="inline-block px-6 py-3 rounded-full bg-card shadow-soft border border-border/50 mb-10">
            <p className="text-sm md:text-base font-medium italic text-secondary-foreground">
              "Engineering Ideas with Creativity & Purpose"
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#about" 
          className="inline-flex flex-col items-center text-secondary-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
