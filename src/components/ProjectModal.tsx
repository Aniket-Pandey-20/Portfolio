import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: {
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    role?: string;
    impact?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" 
      onClick={handleBackdropClick}
    >
      <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {project.role && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">My Role</h4>
                <p className="text-muted-foreground">{project.role}</p>
              </div>
            )}

            {project.impact && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                <p className="text-muted-foreground">{project.impact}</p>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;