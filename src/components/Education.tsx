import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Education</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>
          
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 ml-12 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute -left-14 top-8 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="h-3 w-3 text-primary-foreground" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                B.Tech in Computer Science
              </h3>
              <p className="text-primary font-semibold">
                Shri Shankaracharya Technical Campus, Bhilai
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Aug 2019 – June 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </div>
              </div>
              
              <div className="pt-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  GPA: 8.41/10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;