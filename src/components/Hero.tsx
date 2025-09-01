
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = [
    "Aniket Pandey",
    "Software Developer", 
    "Problem Solver",
    "Innovation Driver"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-primary/5 via-transparent to-primary/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8">
          {/* Greeting with Animated Wave */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl animate-bounce">👋</span>
            <p className="text-xl text-muted-foreground">Hi, I'm</p>
          </div>

          {/* Typing Animation for Name and Titles */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight min-h-[1.2em]">
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              <TypingAnimation 
                texts={typingTexts}
                speed={120}
                className="inline-block"
              />
            </span>
          </h1>

          {/* Mission Statement with Fade-in Effect */}
          <div className="animate-fade-in delay-1000">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Passionate about building innovative solutions that make a difference.
            </p>
            <p className="text-md text-muted-foreground/80 max-w-xl mx-auto">
              I create clean, efficient code and meaningful user experiences that drive business success.
            </p>
          </div>
        </div>

        {/* CTA Buttons with Enhanced Animations */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-1500">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="mr-2">📄</span>
            Download Resume
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
          >
            <span className="mr-2">🚀</span>
            Let's Connect
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Button>
        </div>

        {/* Simplified Scroll Indicator */}
        <div className="animate-fade-in delay-2000">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 animate-bounce mx-auto" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-primary/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <div className="w-2 h-2 bg-primary/40 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float delay-2000">
        <div className="w-4 h-4 bg-primary/20 rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
