
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Go"]
    },
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: ["Node.js", "Express.js", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "Docker", "AWS", "Linux", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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
