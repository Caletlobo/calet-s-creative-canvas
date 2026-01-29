import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-card">
      <div className="section-container">
        {/* Section Header */}
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Get to know me better — my journey, passions, and what drives me forward.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 gradient-hero rounded-2xl transform rotate-6 scale-105 opacity-20" />
              
              {/* Image Container */}
              <div className="relative animate-float">
                <img
                  src={profilePhoto}
                  alt="Calet Lobo - Engineering Student"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-elevated"
                />
                
                {/* Decorative Border */}
                <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl -z-10" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 md:order-2">
            <h3 className="text-2xl font-semibold mb-4">
              Hello! I'm <span className="gradient-text">Calet Lobo</span>
            </h3>
            
            <div className="space-y-4 text-secondary-foreground leading-relaxed">
              <p>
                I'm an engineering student with a strong interest in technology, 
                creativity, and innovation. I enjoy developing software solutions, 
                exploring problem-solving approaches, and participating in hackathons 
                and technical competitions.
              </p>
              
              <p>
                Beyond academics, I express creativity through crochet making, stone 
                painting, mandala art, and playing the piano. I also have a deep passion 
                for travel and photography, as I love capturing unique moments and 
                learning from different cultures.
              </p>
              
              <p>
                I believe creativity and engineering go hand in hand, and I constantly 
                work towards improving both my technical and artistic skills.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-background border border-border/50">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-secondary-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border/50">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-secondary-foreground">Skills</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border/50">
                <div className="text-2xl font-bold gradient-text">∞</div>
                <div className="text-sm text-secondary-foreground">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
