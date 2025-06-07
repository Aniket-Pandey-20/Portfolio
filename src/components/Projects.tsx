
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1563013544-824ae1b704d3"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team features.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1611224923853-80b023f02d71"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and data visualizations.",
      techStack: ["Vue.js", "Python", "FastAPI", "Chart.js", "OpenWeather API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1504608524841-42fe6f032b4b"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking and insights generation.",
      techStack: ["React", "D3.js", "Node.js", "Redis", "Docker"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1460925895917-afdab827c52f"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my development skills and problem-solving approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
