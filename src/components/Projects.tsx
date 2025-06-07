
import { Github, ArrowRight, ExternalLink, Zap, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built for scalability and performance.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1563013544-824ae1b704d3",
      stats: { views: "2.5k", likes: "180", commits: "145" },
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team features.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1611224923853-80b023f02d71",
      stats: { views: "1.8k", likes: "120", commits: "98" },
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and data visualizations.",
      techStack: ["Vue.js", "Python", "FastAPI", "Chart.js", "OpenWeather API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1504608524841-42fe6f032b4b",
      stats: { views: "1.2k", likes: "85", commits: "67" },
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking and insights generation.",
      techStack: ["React", "D3.js", "Node.js", "Redis", "Docker"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      image: "photo-1460925895917-afdab827c52f",
      stats: { views: "950", likes: "65", commits: "89" },
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>
            <Heart className="h-8 w-8 text-red-500 animate-bounce" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked projects that demonstrate my problem-solving approach and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
                project.featured ? 'ring-2 ring-primary/20 hover:ring-primary/40' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  ⭐ FEATURED
                </div>
              )}

              {/* Project Image with Overlay Effects */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Stats */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${
                  hoveredProject === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
                }`}>
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {project.stats.views}
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    <Heart className="h-3 w-3 text-red-400" />
                    {project.stats.likes}
                  </div>
                </div>

                {/* Hover Overlay with Quick Actions */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button 
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary/80 backdrop-blur-sm hover:bg-primary text-primary-foreground rounded-full"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>{project.stats.commits}</span>
                    <span>commits</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tech Stack with Hover Effects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 border-primary/30"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground hover:scale-105 transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View More Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
