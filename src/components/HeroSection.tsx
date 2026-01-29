import { ArrowDown } from "lucide-react";
import FlipCard from "./FlipCard";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full gradient-hero opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full gradient-hero opacity-15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full gradient-hero opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 section-container pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Flip Card */}
          <div className="animate-fade-in-up">
            <FlipCard
              image={profilePhoto}
              title="Calet Lobo"
              message="Engineering student with a passion for technology and creativity. Welcome to my world!"
              className="w-72 h-80 sm:w-80 sm:h-96 hero-flip-card"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl animate-fade-in-up">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Welcome to my portfolio
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Calet Lobo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-foreground mb-4 flex flex-wrap justify-center lg:justify-start gap-2">
              <span>Engineering Student</span>
              <span className="text-primary">•</span>
              <span>Developer</span>
              <span className="text-primary">•</span>
              <span>Traveller</span>
              <span className="text-primary">•</span>
              <span>Creator</span>
            </p>

            <p className="text-secondary-foreground mb-6 leading-relaxed">
              I am an engineering student who enjoys blending technology with creativity. 
              From building innovative software solutions to expressing ideas through art 
              and exploration, I strive to learn, create, and grow every day.
            </p>
            
            <div className="inline-block px-6 py-3 rounded-full bg-card shadow-soft border border-border/50 mb-8">
              <p className="text-sm md:text-base font-medium italic text-secondary-foreground">
                "Engineering Ideas with Creativity & Purpose"
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <a 
            href="#about" 
            className="inline-flex flex-col items-center text-secondary-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
