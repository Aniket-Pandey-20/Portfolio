import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Education */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  B.Tech in Computer Science
                </h3>
                <p className="text-primary font-medium mb-2">
                  Shri Shankaracharya Technical Campus, Bhilai, India
                </p>
                <p className="text-muted-foreground text-sm mb-2">Aug 2019 – June 2023</p>
                <p className="text-foreground font-medium">GPA: 8.41/10</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">AWS Cloud Practitioner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Problem Solving (Intermediate) – HackerRank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;