import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Wallpapers",
    description: "Explore the SB Designs wallpaper collection.",
    status: null,
    statusColor: null,
    link: "https://sbdev.zone.id/wallpapers",
  },
];

const socialIcons = [
  {
    src: "/assets/dc.png",
    alt: "Discord",
    className: "w-6 h-6",
    link: "https://discord.gg/dPGjJt4p",
  },
  {
    src: "/assets/github.png",
    alt: "GitHub",
    className: "w-6 h-6",
    link: "https://github.com/sb-designs",
  },
  {
    src: "/assets/instagram.png",
    alt: "Instagram",
    className: "w-6 h-6 object-cover",
    link: "https://instagram.com/sbdesigns.dev",
  },
  {
    src: "/assets/yt.png",
    alt: "YouTube",
    className: "w-6 h-6 object-cover",
    link: "https://youtube.com/@sbdesignsdev",
  },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Frame = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...Array.from(prev), entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white font-['Kumbh_Sans'] overflow-x-hidden">
      {/* Fixed Header with Liquid Glass Effect */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex items-center justify-between max-w-sm lg:max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <a href="/"><div className="flex items-center gap-2">
            <img
              className="w-4 h-6"
              alt="SB Designs Logo"
              src="/assets/icon.png"
            />
            <span className="text-sm font-medium">SB Designs</span>
          </div></a>
        </div>
      </header>
      {/* Projects Section */}
      <div className="h-16" aria-hidden="true" />
      <section id="projects" className="px-4 py-12">
        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('projects') ? 'animate-slide-in-left' : ''}`} data-testid="heading-projects">Media</h2>
          <div className="grid grid-cols-1 gap-4">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className={`bg-slate-700/80 border-slate-600/60 overflow-hidden backdrop-blur-sm cursor-pointer hover:bg-slate-700/90 hover:border-slate-500/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${visibleSections.has('projects') ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-project-${index}`}
                onClick={() => window.open(project.link, '_blank')}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base mb-1 text-white" data-testid={`text-title-${index}`}>
                        {project.title}
                      </h3>
                      <p className="text-white/85 text-sm mb-2" data-testid={`text-description-${index}`}>
                        {project.description}
                      </p>
                      {project.status && (
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${project.statusColor} animate-pulse`}
                          data-testid={`status-${index}`}
                        >
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
          <div className="flex justify-center gap-4 animate-fade-in-up delay-400" data-testid="social-icons">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className={`${icon.className} cursor-pointer hover:opacity-80 hover:scale-125 hover:rotate-12 transition-all duration-300 animate-bounce-in`}
                style={{ animationDelay: `${index * 100 + 600}ms` }}
                alt={icon.alt}
                src={icon.src}
                onClick={() => window.open(icon.link, '_blank')}
                data-testid={`social-icon-${index}`}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
