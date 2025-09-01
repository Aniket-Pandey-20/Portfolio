
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "CRM Integration and Workflow Automation Platform",
      shortDescription: "Microservices-based CRM and workflow system built on .NET Framework",
      fullDescription: "Maintained a microservices-based CRM and Workflow platform using ASP.NET, MVC, Web APIs, REST APIs, and gRPC technologies. Upgraded legacy codebase from .NET Framework to .NET Core 8.0, enhancing performance, maintainability, and system compatibility. Collaborated with the team to restructure old REST API-based architecture into a gRPC service-oriented model, boosting system speed, agility, and resilience.",
      technologies: ["ASP.NET", "MVC", "Web APIs", "REST APIs", "gRPC", ".NET Core 8.0"],
      role: "Backend Developer & System Architect",
      impact: "Enhanced performance, maintainability, and system compatibility through modernization"
    },
    {
      title: "Exam Centre Management System",
      shortDescription: "Responsive exam registration and management website with dashboard",
      fullDescription: "Responsive exam centre registration and management website built using React.js, Express.js, and PostgreSQL. Implemented JWT token-based authorization for robust security and seamless session management. Created a data-driven admin dashboard with Chart.js and a centre listing page with advanced filters and search options.",
      technologies: ["React.js", "Express.js", "PostgreSQL", "JWT", "Chart.js"],
      role: "Full-Stack Developer",
      impact: "50% reduction in administrative overhead through process optimization"
    },
    {
      title: "Life Science Project (SAP)",
      shortDescription: "SAP SD testing for Order-to-Cash cycle validation",
      fullDescription: "Tested the complete Order-to-Cash (O2C) cycle in SAP SD, validating business flows including sales orders, deliveries, billing, and payments. Performed IDoc testing during middleware upgrade, validating end-to-end system integration.",
      technologies: ["SAP SD", "IDoc", "Order-to-Cash", "System Integration"],
      role: "QA Tester & Business Flow Validator",
      impact: "Ensured seamless business process flow during system upgrades"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                {project.shortDescription}
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full text-center"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full text-center col-span-2">
                      +{project.technologies.length - 4} more technologies
                    </span>
                  )}
                </div>
                
                <Button 
                  onClick={() => setSelectedProject(project)}
                  variant="outline"
                  className="w-full mt-auto"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
