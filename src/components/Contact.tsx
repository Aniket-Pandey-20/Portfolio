
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

        <div className="inline-flex items-center gap-6 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-500">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title={link.label}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
