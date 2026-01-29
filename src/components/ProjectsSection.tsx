import { ExternalLink } from "lucide-react";
import projectHershield from "@/assets/project-hershield.jpg";
import projectSmartindia from "@/assets/project-smartindia.jpg";
import projectCultural from "@/assets/project-cultural.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "24/7 HerShield – Women Safety Solution",
      subtitle: "Women Safety Initiative",
      description:
        "A women safety initiative designed to provide quick access to emergency support through discreet wearable or keychain-based safety devices. The project focuses on empowering women by integrating technology with everyday accessories for real-time assistance and security.",
      image: projectHershield,
      tags: ["Safety Tech", "IoT", "Wearables"],
    },
    {
      id: 2,
      title: "Intelligent CCTV Smart Automation",
      subtitle: "Smart India Hackathon 2025",
      description:
        "Developed as part of Smart India Hackathon 2025, this project focuses on AI/ML-powered CCTV automation to detect suspicious activities, enhance surveillance efficiency, and support smart city infrastructure. The system aims to reduce manual monitoring while improving accuracy and response time.",
      image: projectSmartindia,
      tags: ["AI/ML", "Computer Vision", "Smart City"],
    },
    {
      id: 3,
      title: "Interactive Cultural Exploration",
      subtitle: "Creative Coding Design Contest",
      description:
        "A Python-based interactive application designed to document, preserve, and celebrate Indian cultural heritage. The project uses creative coding to allow users to explore traditions, share cultural knowledge, and express heritage through digital storytelling and visual elements.",
      image: projectCultural,
      tags: ["Python", "Creative Coding", "Cultural Heritage"],
    },
  ];

  return (
    <section id="projects" className="bg-card">
      <div className="section-container">
        {/* Section Header */}
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Explore some of my recent work that showcases my skills and passion for technology.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="portfolio-card group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="btn-primary flex items-center gap-2 text-sm">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Subtitle/Category */}
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                  {project.subtitle}
                </p>
                
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-secondary-foreground line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
