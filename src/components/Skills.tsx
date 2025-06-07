
import { Code, Database, Globe, Wrench, Star, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "JavaScript", level: 90, color: "bg-yellow-400" },
        { name: "TypeScript", level: 85, color: "bg-blue-500" },
        { name: "Python", level: 80, color: "bg-green-500" },
        { name: "Java", level: 75, color: "bg-red-500" },
        { name: "Go", level: 70, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "React", level: 90, color: "bg-cyan-400" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "Vue.js", level: 75, color: "bg-green-400" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "Django", level: 75, color: "bg-green-700" },
        { name: "PostgreSQL", level: 80, color: "bg-blue-600" },
        { name: "MongoDB", level: 80, color: "bg-green-800" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-6 w-6" />,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Git", level: 90, color: "bg-orange-600" },
        { name: "Docker", level: 75, color: "bg-blue-400" },
        { name: "AWS", level: 70, color: "bg-yellow-600" },
        { name: "Linux", level: 80, color: "bg-gray-600" },
        { name: "Figma", level: 85, color: "bg-purple-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-primary animate-spin-slow" />
            <h2 className="text-4xl font-bold text-foreground">Skills & Technologies</h2>
            <TrendingUp className="h-8 w-8 text-primary animate-bounce" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical arsenal - constantly evolving and battle-tested across diverse projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              style={{ 
                animationDelay: `${categoryIndex * 150}ms`,
                background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card))/80 100%)`
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Category Header */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
              </div>
              
              {/* Skills List */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="group/skill space-y-2 p-2 rounded-lg hover:bg-muted/30 transition-all duration-300"
                    style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-200">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                        <div className={`w-2 h-2 rounded-full ${skill.color} opacity-60 group-hover/skill:opacity-100 group-hover/skill:scale-125 transition-all duration-300`}></div>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover/skill:shadow-lg"
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color.replace('bg-', 'rgb(var(--')} 0%, ${skill.color.replace('bg-', 'rgb(var(--')}/80 100%)`,
                            animationDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                          }}
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover/skill:animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
