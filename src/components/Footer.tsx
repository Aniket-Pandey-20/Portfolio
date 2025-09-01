
import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/AniketPandey0',
      icon: Linkedin
    },
    {
      name: 'GitHub', 
      url: 'https://github.com/Aniket-Pandey-20',
      icon: Github
    },
    {
      name: 'Email',
      url: 'mailto:aniketpandey658@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Aniket Pandey</h3>
            <p className="text-muted-foreground">
              Programmer Analyst • Available for new opportunities
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-sm">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-border w-full">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Aniket Pandey. All rights reserved.
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
              aria-label="Scroll to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
