
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ready to collaborate? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex flex-col gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 group-hover:scale-110">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{link.name}</div>
                    <div className="text-sm text-muted-foreground">{link.label}</div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
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
