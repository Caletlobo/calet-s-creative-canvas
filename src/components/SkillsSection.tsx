import { Code2, Palette } from "lucide-react";
import FlipCard from "./FlipCard";

// Import creative skill images
import stonePainting from "@/assets/stone-painting.jpg";
import crochet from "@/assets/crochet.jpg";
import cooking from "@/assets/cooking.jpg";
import mandalaArt from "@/assets/mandala-art.jpg";
import piano from "@/assets/piano.jpg";
import photography from "@/assets/photography.jpg";
import travel from "@/assets/travel.jpg";

const SkillsSection = () => {
  const programmingSkills = [
    { name: "C / C++", level: 90 },
    { name: "Java", level: 75 },
    { name: "HTML", level: 70 },
    { name: "Python", level: 60 },
    { name: "CSS", level: 50 },
  ];

  const creativeSkills = [
    { 
      image: cooking, 
      title: "Cooking", 
      message: "Exploring flavors from around the world - cooking is my way of sharing joy and love through food." 
    },
    { 
      image: mandalaArt, 
      title: "Mandala Art", 
      message: "Finding peace in symmetry - intricate geometric patterns that calm the soul and inspire creativity." 
    },
    { 
      image: stonePainting, 
      title: "Stone Painting", 
      message: "Each stone tells a story - dotted mandalas, sunsets, and nature transformed into colorful art." 
    },
    { 
      image: crochet, 
      title: "Crochet", 
      message: "Handcrafted with love - from delicate flowers to intricate patterns, every stitch matters." 
    },
    { 
      image: piano, 
      title: "Piano", 
      message: "Music speaks where words fail - expressing emotions through beautiful keys and melodies." 
    },
    { 
      image: photography, 
      title: "Photography", 
      message: "Capturing moments that tell stories - through my lens, the world becomes timeless art." 
    },
    { 
      image: travel, 
      title: "Travel & Exploration", 
      message: "Wandering through cultures, collecting memories, and learning from every journey I take." 
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

        {/* Programming Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="p-3 rounded-xl gradient-hero">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Programming Skills</h3>
          </div>

          <div className="max-w-2xl mx-auto space-y-5">
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

        {/* Creative Skills */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-3 rounded-xl gradient-hero">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Creative & Other Skills</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {creativeSkills.map((skill, index) => (
              <FlipCard
                key={skill.title}
                image={skill.image}
                title={skill.title}
                message={skill.message}
                delay={index * 80}
                className="creative-flip-card"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
