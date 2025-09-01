
const Experience = () => {
  const experiences = [
    {
      role: "Programmer Analyst",
      company: "Cognizant",
      duration: "June 2024 – Present",
      location: "Pune",
      achievements: [
        "Managed and maintained a microservices-based CRM and workflow system built on the .NET Framework",
        "Contributed to restructuring the backend architecture from REST API to gRPC, significantly reducing latency and delivering high-impact backend solutions",
        "Executed end-to-end testing of Domestic Sales processes within the Order-to-Cash (O2C) cycle along with IDoc re-triggers for SAP SD implementation as well as middleware upgrade projects"
      ],
      type: "Full-time"
    },
    {
      role: "Software Developer",
      company: "IdeoActiv Software Pvt Ltd",
      duration: "Aug 2023 – May 2024",
      location: "Bangalore",
      achievements: [
        "Developed a full-stack feature integrating the OpenAI API using React and TypeScript, implementing API calls, filter-based outputs, and advanced API chaining for dynamic data handling",
        "Led frontend development using React within Gatsby for a website-building platform"
      ],
      type: "Full-time"
    },
    {
      role: "Software Developer Intern",
      company: "C-DAC",
      duration: "Feb 2023 – Apr 2023",
      location: "Pune",
      achievements: [
        "Improved operational efficiency by optimizing the center registration process using PERN stack",
        "Integrated a dashboard with 5+ graphs using Chart.js, resulting in a 50% reduction in administrative overhead"
      ],
      type: "Internship"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.duration}`}
                className="relative md:pl-20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <div className="text-sm text-muted-foreground mb-1">
                        {exp.duration}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.location}
                      </div>
                      <span className="inline-block mt-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
