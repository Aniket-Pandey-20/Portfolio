import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      credentialUrl: "https://www.credly.com/badges/your-aws-badge-id"
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      credentialUrl: "https://www.hackerrank.com/certificates/your-certificate-id"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                >
                  View
                  <ExternalLink className="h-3 w-3" />
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