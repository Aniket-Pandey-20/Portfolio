import { GraduationCap, Calendar, MapPin, Award, ExternalLink, Shield, Code } from "lucide-react";

const EducationCertifications = () => {
  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      credentialUrl: "https://www.credly.com/badges/d8793a30-d478-4821-837b-21861c2ef8d4",
      icon: Shield,
      color: "from-orange-500/20 to-yellow-500/20"
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      credentialUrl: "https://www.hackerrank.com/certificates/06c12c2f17bd",
      icon: Code,
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that demonstrate my commitment to continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  B.Tech in Computer Science
                </h4>
                <p className="text-primary font-medium">
                  Shri Shankaracharya Technical Campus, Bhilai
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Aug 2019 – June 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>India</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    GPA: 8.41/10
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name} 
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`bg-gradient-to-br ${cert.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <cert.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium group-hover:scale-105"
                    >
                      View <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;