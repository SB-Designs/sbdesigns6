import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "Companies", href: "#subsidiaries" },
];

const scrollToSection = (href: string) => {
  window.location.href = "/?scroll=" + href.slice(1);
};

const navigateHome = () => {
  window.location.href = "/";
};

export default function NotFound(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white font-['Kumbh_Sans'] overflow-x-hidden">
      {/* Fixed Header with Liquid Glass Effect */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex items-center justify-between max-w-sm lg:max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <div className="flex items-center gap-2">
            <img
              className="w-4 h-6"
              alt="SB Designs Logo"
              src="/assets/icon.png"
            />
            <span className="text-sm font-medium">SB Designs</span>
          </div>
          <div className="flex gap-1">
            {navigationItems.map((item, index) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`text-xs px-3 py-1 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-slide-in-right' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`nav-${item.href.slice(1)}`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section - Full Height */}
      <section className="min-h-screen flex items-center justify-center px-4 text-center relative overflow-hidden">
        <div className={`max-w-lg lg:max-w-xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className={`text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white transition-all duration-1200 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            404
          </h1>
          <h2 className={`text-2xl lg:text-4xl font-bold text-white/90 transition-all duration-1200 delay-100 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            Page Not Found
          </h2>
          <p className={`text-base lg:text-xl text-white/80 font-medium transition-all duration-1200 delay-200 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            Oops! It looks like you've wandered off the map. Let's get you back on track.
          </p>
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            data-testid="button-back"
            onClick={navigateHome}
          >
            Back to Home
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12">
        <div className="max-w-sm lg:max-w-md mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
            <img
              className="w-5 h-8"
              alt="SB Designs Logo"
              src="/assets/icon2.png"
            />
            <span className="text-xl font-medium text-white">SB Designs</span>
          </div>
          <p className="text-white/80 text-sm animate-fade-in-up delay-200" data-testid="text-copyright">© SB Designs {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
