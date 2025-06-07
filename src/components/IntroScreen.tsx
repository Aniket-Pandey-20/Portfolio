
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          // Start exit animation after progress completes
          setTimeout(() => {
            setIsExiting(true);
            // Complete transition after fade out
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 800);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-700 ease-out ${
      isExiting ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Name Animation */}
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          {/* Name with letter animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.5s' }}>A</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>n</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.7s' }}>i</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.8s' }}>k</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.9s' }}>e</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1s' }}>t</span>
            <span className="inline-block mx-4"></span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.1s' }}>P</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.2s' }}>a</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.3s' }}>n</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.4s' }}>d</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.5s' }}>e</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.6s' }}>y</span>
          </h1>

          {/* Portfolio text */}
          <p className={`text-2xl text-muted-foreground font-light tracking-wider transition-all duration-1000 ease-out delay-1500 ${
            showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            Portfolio
          </p>
        </div>

        {/* Progress Bar */}
        <div className={`transition-all duration-1000 ease-out delay-2000 ${
          showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="w-80 h-1 bg-muted rounded-full mx-auto mb-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Skip Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSkip}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Skip Intro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
