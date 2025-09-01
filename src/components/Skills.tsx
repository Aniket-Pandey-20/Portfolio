
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["C/C++", "C#", "JavaScript", "Python", "SQL"]
    },
    {
      title: "Technologies & Frameworks",
      icon: "⚡",
      skills: ["ASP.NET (MVC & Web API)", "React", "TypeScript", "Node.js", "HTML5", "CSS3"]
    },
    {
      title: "Database & APIs",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB", "RESTful APIs", "gRPC"]
    },
    {
      title: "Cloud & Tools",
      icon: "☁️",
      skills: ["AWS", "Git", "GitHub"]
    },
    {
      title: "Functional",
      icon: "🎯",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-muted/30 rounded-lg px-4 py-2 text-center text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1 + skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
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
