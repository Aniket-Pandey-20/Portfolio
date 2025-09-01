
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Programmer Analyst with <strong>1.5+ years of experience</strong> in 
              developing robust, scalable applications using .NET Framework, React, and modern web technologies. 
              Currently working at Cognizant, I specialize in microservices architecture and backend optimization.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans full-stack development with strong focus on backend systems, 
              API development (REST & gRPC), and database management. I have hands-on experience 
              with cloud technologies, particularly AWS, and SAP SD implementation.
            </p>

            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">1.5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-border">
              <div className="w-64 h-64 bg-card rounded-full flex items-center justify-center shadow-lg">
                <div className="text-6xl text-muted-foreground">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
