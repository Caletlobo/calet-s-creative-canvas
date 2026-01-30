import { ArrowDown, Sparkles, Code2, Palette, Globe } from "lucide-react";
import FlipCard from "./FlipCard";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-5 animate-gradient-flow" />
      
      {/* Animated Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full gradient-hero opacity-25 blur-3xl animate-orb-1" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full gradient-hero opacity-20 blur-3xl animate-orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full gradient-hero opacity-10 blur-3xl animate-pulse" />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-accent/10 blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 section-container pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Flip Card with Enhanced Animation */}
          <div className="animate-slide-in-left">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 gradient-hero opacity-30 blur-2xl rounded-3xl animate-pulse-glow" />
              
              <FlipCard
                image={profilePhoto}
                title="Calet Lobo"
                message="Engineering student with a passion for technology and creativity. Welcome to my world!"
                className="w-72 h-80 sm:w-80 sm:h-96 hero-flip-card animate-float-rotate"
              />
            </div>
          </div>

          {/* Text Content with Staggered Animations */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Animated badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-medium text-sm tracking-wide">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
              Hi, I'm{" "}
              <span className="gradient-text animate-shimmer inline-block">Calet Lobo</span>
            </h1>
            
            {/* Animated role badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 animate-fade-in-up delay-200">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border/50 hover-lift">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Developer</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border/50 hover-lift">
                <Palette className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Creator</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border/50 hover-lift">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Traveller</span>
              </span>
            </div>

            <p className="text-secondary-foreground mb-6 leading-relaxed animate-fade-in-up delay-300">
              I am an engineering student who enjoys blending technology with creativity. 
              From building innovative software solutions to expressing ideas through art 
              and exploration, I strive to learn, create, and grow every day.
            </p>
            
            {/* Animated tagline */}
            <div className="inline-block px-6 py-3 rounded-full bg-card shadow-soft border border-border/50 mb-8 animate-fade-in-up delay-400 hover-glow transition-all duration-300">
              <p className="text-sm md:text-base font-medium italic gradient-text">
                "Engineering Ideas with Creativity & Purpose"
              </p>
            </div>

            {/* CTA Buttons with hover animations */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-500">
              <a href="#projects" className="btn-primary group">
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary hover:shadow-glow">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="text-center mt-16 animate-fade-in-up delay-700">
          <a 
            href="#about" 
            className="inline-flex flex-col items-center text-secondary-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
