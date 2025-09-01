
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    style={{ animationDelay: `${(categoryIndex * 0.1 + skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
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
