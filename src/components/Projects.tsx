
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CRM Integration and Workflow Automation Platform",
      description: "An Enterprise Integration and Experience Optimization Platform with microservices-based CRM and workflow system built on .NET Framework.",
      techStack: ["ASP.NET", "MVC", "Web APIs", "RestAPIs", "gRPC"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Exam Centre Management System",
      description: "Responsive team exam registration and management website built using React.js, Express.js and PostgreSQL with JWT token-based authorization and Chart.js dashboard.",
      techStack: ["React.js", "Express.js", "PostgreSQL", "JWT", "Chart.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AI-Powered Data Processing Platform",
      description: "Full-stack Node.js application integrating OpenAI API using React and TypeScript, implementing API calls, filter-based outputs, and advanced AI chaining for dynamic data handling.",
      techStack: ["Node.js", "React", "TypeScript", "OpenAI API"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Life Science Project (SAP)",
      description: "Tested the complete Order-to-Cash (O2C) cycle in SAP SD, validating business flows including sales orders, deliveries, bills, and payments. Performed IDoc testing during middleware upgrade.",
      techStack: ["SAP SD", "IDoc", "Order-to-Cash", "Testing"],
      liveLink: "#",
      githubLink: "#"
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
