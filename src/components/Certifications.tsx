import { Award, ExternalLink, Shield, Code } from "lucide-react";

const Certifications = () => {
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
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Certifications</h2>
        </div>

        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name} 
              className="group relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${cert.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium group-hover:scale-105"
                >
                  View <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;