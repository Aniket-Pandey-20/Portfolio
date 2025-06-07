
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Aniket Pandey
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light mb-8">
            Software Engineer
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative solutions that make a difference. 
            I create clean, efficient code and meaningful user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
