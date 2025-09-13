
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
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-primary/5 via-transparent to-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">Let's Connect</h2>
          <p className="text-muted-foreground">Ready to collaborate? Let's create something amazing together.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3"
              title={link.label}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <link.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {link.name}
              </span>
              <span className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300 max-w-[150px] text-center break-all">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
