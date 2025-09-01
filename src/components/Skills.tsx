
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C/C++", "C#", "JavaScript", "Python", "SQL"]
    },
    {
      title: "Technologies & Frameworks",
      skills: ["ASP.NET (MVC & Web API)", "React", "TypeScript", "Node.js", "HTML5", "CSS3"]
    },
    {
      title: "Database & APIs",
      skills: ["MySQL", "MongoDB", "RESTful APIs", "gRPC"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Git", "GitHub"]
    },
    {
      title: "Functional",
      skills: ["SAP SD"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
