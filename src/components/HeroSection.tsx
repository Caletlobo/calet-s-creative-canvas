import { ArrowDown } from "lucide-react";
import FlipCard from "./FlipCard";

// Import all images
import profilePhoto from "@/assets/profile-photo.jpg";
import projectHershield from "@/assets/project-hershield.jpg";
import projectSmartindia from "@/assets/project-smartindia.jpg";
import projectCultural1 from "@/assets/project-cultural1.jpg";
import projectCultural2 from "@/assets/project-cultural2.jpg";
import stonePainting from "@/assets/stone-painting.jpg";
import crochet from "@/assets/crochet.jpg";
import cooking from "@/assets/cooking.jpg";
import mandalaArt from "@/assets/mandala-art.jpg";
import piano from "@/assets/piano.jpg";
import photography from "@/assets/photography.jpg";
import travel from "@/assets/travel.jpg";

const HeroSection = () => {
  const flipCards = [
    {
      image: profilePhoto,
      title: "Calet Lobo",
      message: "Engineering student with a passion for technology and creativity. Welcome to my world!",
    },
    {
      image: projectHershield,
      title: "24/7 HerShield",
      message: "Empowering women with innovative safety wearables for real-time emergency support.",
    },
    {
      image: projectSmartindia,
      title: "Smart India Hackathon",
      message: "AI-powered CCTV automation for smart city surveillance and security enhancement.",
    },
    {
      image: projectCultural1,
      title: "Cultural Heritage App",
      message: "Preserving Indian traditions through interactive digital storytelling and creativity.",
    },
    {
      image: projectCultural2,
      title: "Creative Coding Contest",
      message: "Python-based application celebrating cultural heritage with visual elements.",
    },
    {
      image: stonePainting,
      title: "Stone Painting",
      message: "Each stone tells a story - dotted mandalas, sunsets, and nature transformed into art.",
    },
    {
      image: crochet,
      title: "Crochet Creations",
      message: "Handcrafted with love - from delicate flowers to intricate patterns, every stitch matters.",
    },
    {
      image: cooking,
      title: "Culinary Adventures",
      message: "Exploring flavors from around the world - cooking is my way of sharing joy.",
    },
    {
      image: mandalaArt,
      title: "Mandala Art",
      message: "Finding peace in symmetry - intricate geometric patterns that calm the soul.",
    },
    {
      image: piano,
      title: "Piano Melodies",
      message: "Music speaks where words fail - expressing emotions through keys and melodies.",
    },
    {
      image: photography,
      title: "Photography",
      message: "Capturing moments that tell stories - through my lens, the world becomes art.",
    },
    {
      image: travel,
      title: "Travel & Exploration",
      message: "Wandering through cultures, collecting memories, and learning from every journey.",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full gradient-hero opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full gradient-hero opacity-15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full gradient-hero opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 section-container pt-24 pb-12">
        {/* Header Text */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Calet Lobo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground mb-4 flex flex-wrap justify-center gap-2">
            <span>Engineering Student</span>
            <span className="text-primary">•</span>
            <span>Developer</span>
            <span className="text-primary">•</span>
            <span>Traveller</span>
            <span className="text-primary">•</span>
            <span>Creator</span>
          </p>
          
          <div className="inline-block px-6 py-3 rounded-full bg-card shadow-soft border border-border/50">
            <p className="text-sm md:text-base font-medium italic text-secondary-foreground">
              "Engineering Ideas with Creativity & Purpose"
            </p>
          </div>
        </div>

        {/* Flip Cards Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          {flipCards.map((card, index) => (
            <FlipCard
              key={card.title}
              image={card.image}
              title={card.title}
              message={card.message}
              delay={index * 80}
              className={`animate-fade-in-up ${
                index === 0 
                  ? "col-span-2 row-span-2" 
                  : ""
              }`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center">
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
