import FlipCard from "./FlipCard";
import projectHershield from "@/assets/project-hershield.jpg";
import projectSmartindia from "@/assets/project-smartindia.jpg";
import projectCultural1 from "@/assets/project-cultural1.jpg";
import projectCultural2 from "@/assets/project-cultural2.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      image: projectHershield,
      title: "24/7 HerShield",
      subtitle: "Women Safety Initiative",
      message: "Empowering women with innovative safety wearables for real-time emergency support and security.",
      tags: ["Safety Tech", "IoT", "Wearables"],
    },
    {
      image: projectSmartindia,
      title: "Smart India Hackathon 2025",
      subtitle: "AI/ML Project",
      message: "AI-powered CCTV automation for smart city surveillance and enhanced security monitoring.",
      tags: ["AI/ML", "Computer Vision", "Smart City"],
    },
    {
      image: projectCultural1,
      title: "Cultural Heritage App",
      subtitle: "Creative Coding Contest",
      message: "Preserving Indian traditions through interactive digital storytelling and Python creativity.",
      tags: ["Python", "Creative Coding", "Heritage"],
    },
    {
      image: projectCultural2,
      title: "Cultural Visualization",
      subtitle: "Creative Coding Contest",
      message: "Visual celebration of cultural heritage with moodboards, artwork and interactive elements.",
      tags: ["UI Design", "Digital Art", "Culture"],
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

        {/* Projects Grid with Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="flex flex-col">
              <FlipCard
                image={project.image}
                title={project.title}
                message={project.message}
                delay={index * 100}
                className="project-flip-card"
              />
              <div className="mt-4 text-center">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                  {project.subtitle}
                </p>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
