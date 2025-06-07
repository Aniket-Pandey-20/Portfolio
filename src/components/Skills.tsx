
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "C/C++", "Python", "JavaScript", "C#", "React", "ASP.NET", 
    "Node.js", "Express.js", "SQL", "MongoDB", "AWS", "Git", 
    "REST API", "gRPC"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <Badge 
              key={skill}
              variant="outline"
              className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
