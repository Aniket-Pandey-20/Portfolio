
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import IntroScreen from "../components/IntroScreen";
import Chatbox from "../components/Chatbox";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Show intro screen first
  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-16 right-6 z-50 p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-foreground" />
        ) : (
          <Moon className="h-5 w-5 text-foreground" />
        )}
      </button>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Chatbox */}
      <Chatbox />
    </div>
  );
};

export default Index;
