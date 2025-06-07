
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
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-primary/3 via-transparent to-primary/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Logo/Name Animation */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          {/* Animated initials */}
          <div className="relative mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-2xl flex items-center justify-center transform rotate-12 animate-float">
                <span className="text-2xl font-bold text-primary-foreground">A</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40 rounded-2xl flex items-center justify-center transform -rotate-12 animate-float delay-500">
                <span className="text-2xl font-bold text-primary-foreground">P</span>
              </div>
            </div>
          </div>

          {/* Name with letter animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1s' }}>A</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.1s' }}>n</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.2s' }}>i</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.3s' }}>k</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.4s' }}>e</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.5s' }}>t</span>
            <span className="inline-block mx-4"></span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.6s' }}>P</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.7s' }}>a</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.8s' }}>n</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '1.9s' }}>d</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '2s' }}>e</span>
            <span className="inline-block animate-fade-in" style={{ animationDelay: '2.1s' }}>y</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg text-muted-foreground transition-all duration-1000 ease-out delay-1000 ${
            showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            Software Developer & Creative Thinker
          </p>

          {/* Decorative line */}
          <div className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 transition-all duration-1000 ease-out delay-1500 ${
            showContent ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        {/* Loading Progress */}
        <div className={`transition-all duration-1000 ease-out delay-2000 ${
          showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="mb-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-400"></div>
            </div>
            <p className="text-sm text-muted-foreground">Loading Portfolio</p>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-muted rounded-full mx-auto mb-8 overflow-hidden">
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-1 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-primary/40 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float delay-1500"></div>
      </div>
    </div>
  );
};

export default IntroScreen;
