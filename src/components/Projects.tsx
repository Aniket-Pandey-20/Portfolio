
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates and team features.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and data visualizations.",
      techStack: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking.",
      techStack: ["React", "D3.js", "Node.js", "Redis"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
