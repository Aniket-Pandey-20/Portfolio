
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:aniketpandey658@gmail.com",
      label: "aniketpandey658@gmail.com"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Aniket-Pandey-20",
      label: "github.com/Aniket-Pandey-20"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/AniketPandey0",
      label: "linkedin.com/in/AniketPandey0"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Connect with me</h3>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{link.name}</div>
                    <div className="text-sm text-muted-foreground break-all">{link.label}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
