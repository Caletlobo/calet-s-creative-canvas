import { Code2, Palette, Music, Camera, Utensils, Plane } from "lucide-react";

const SkillsSection = () => {
  const programmingSkills = [
    { name: "C / C++", level: 90 },
    { name: "Java", level: 75 },
    { name: "HTML", level: 70 },
    { name: "Python", level: 60 },
    { name: "CSS", level: 50 },
  ];

  const otherSkills = [
    { 
      icon: Utensils, 
      name: "Cooking", 
      description: "Continental dishes" 
    },
    { 
      icon: Palette, 
      name: "Drawing", 
      description: "Elementary & Intermediate certified" 
    },
    { 
      icon: Palette, 
      name: "Crochet & Stone Painting", 
      description: "Handcrafted art creations" 
    },
    { 
      icon: Palette, 
      name: "Mandala Art", 
      description: "Intricate geometric patterns" 
    },
    { 
      icon: Music, 
      name: "Piano", 
      description: "Musical expression" 
    },
    { 
      icon: Camera, 
      name: "Photography", 
      description: "Capturing moments" 
    },
    { 
      icon: Plane, 
      name: "Travel & Exploration", 
      description: "Learning through cultures" 
    },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        {/* Section Header */}
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          A blend of technical expertise and creative abilities that define my versatility.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl gradient-hero">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Programming Skills</h3>
            </div>

            <div className="space-y-5">
              {programmingSkills.map((skill, index) => (
                <div key={skill.name} className="skill-card">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-secondary-foreground">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 150}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl gradient-hero">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Creative & Other Skills</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className="skill-card flex items-start gap-4 hover-glow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{skill.name}</h4>
                      <p className="text-xs text-secondary-foreground mt-1">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
