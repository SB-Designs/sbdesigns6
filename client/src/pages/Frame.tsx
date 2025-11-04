import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "Companies", href: "#companies" },
];

const projectsData = [
  {
    title: "AeroMix",
    description: "Portable in-flight entertainment.",
    image: "/assets/aeromix.png",
    status: "IN DEVELOPMENT",
    statusColor: "bg-orange-500",
    link: "https://aeromix.pages.dev",
  },
  {
    title: "Duneb",
    description: "The most private browser. Ever.",
    image: "/assets/duneb.png",
    status: "IN DEVELOPMENT",
    statusColor: "bg-orange-500",
    link: "https://duneb.netlify.app",
  },
  {
    title: "JetCast",
    description: "An aviation podcast and talk show",
    image: "/assets/jetcast.png",
    status: null,
    statusColor: null,
    link: "https://jetcastpodcast.pages.dev",
  },
  {
    title: "Pixl",
    description: "Desktop and mobile wallpapers.",
    image: "/assets/pixl.png",
    status: null,
    statusColor: null,
    link: "https://gopixl.pages.dev",
  },
  {
    title: "SB Photos",
    description: "Aviation and wildlife photography.",
    image: "/assets/sbphotos.png",
    status: null,
    statusColor: null,
    link: "https://sbphotos.pages.dev",
  },
  {
    title: "ThrustByte",
    description: "An aviation and tech blog.",
    image: "/assets/thrustbyte.png",
    status: null,
    statusColor: null,
    link: "https://thrustbyte.pages.dev",
  },
  {
    title: "Trackle",
    description: "The UK railway station game.",
    image: "/assets/trackle.png",
    status: "BETA PROGRAMME",
    statusColor: "bg-green-500",
    link: "https://trackle.pages.dev",
  },
];

const subsidiariesData = [
  {
    title: "Point 2 Point",
    description: "Joint venture with TurquoiseTNT.",
    image: "/assets/point2point.png",
    link: "https://point2point.pages.dev",
  },
  {
    title: "Duneb Browser",
    description: "A private browser subsidiary, wholly owned by SB Designs.",
    image: "/assets/duneb.png",
    link: "https://duneb.netlify.app",
  },
  {
    title: "JetCast",
    description: "Joint venture with Sean FH and TurquoiseTNT.",
    image: "/assets/jetcast.png",
    link: "https://jetcastpodcast.pages.dev",
  },
  {
    title: "HeadQR",
    description: "Developer for HeadQR. COMING SOON",
    image: "/assets/headqr.png",
    link: "#",
  },
  {
    title: "Zenity",
    description: "Developer for Zenity. COMING SOON",
    image: "/assets/zenity.png",
    link: "#",
  },
];

const contactData = [
  {
    title: "Email",
    info: "hello@sbdesigns.is-a.dev",
    link: "mailto:hello@sbdesigns.is-a.dev",
  },
  {
    title: "Feedback Hub",
    info: "Send us your feedback and suggestions.",
    link: "https://sbdesigns.userjot.com",
  },
  {
    title: "Status",
    info: "See which services are up (or sadly down).",
    link: "https://status.sbdesigns.is-a.dev",
  },
  {
    title: "Media",
    info: "Explore brand media made by us, for your use.",
    link: "https://sbdesigns.is-a.dev/media",
  },
];

const socialIcons = [
  {
    src: "/assets/dev.png",
    alt: "DEV",
    className: "w-6 h-6",
    link: "https://dev.to/sbdesigns",
  },
  {
    src: "/assets/github.png",
    alt: "GitHub",
    className: "w-6 h-6",
    link: "https://github.com/sb-designs",
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
            App Development & Graphic Design
          </h1>
          <p className={`text-base lg:text-xl text-white/90 font-medium transition-all duration-1200 delay-300 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            A small technology company from London
          </p>
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            data-testid="button-explore"
            onClick={() => scrollToSection('#about')}
          >
            Explore
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="px-4 py-12">
        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('about') ? 'animate-slide-in-left' : ''}`} data-testid="heading-about">About Us</h2>
          <p className={`text-white/90 text-base lg:text-lg leading-relaxed font-medium transition-all duration-800 delay-200 ${visibleSections.has('about') ? 'animate-slide-in-right' : ''}`}>
            Founded in 2022, we are SB Designs, a small technology company from
            London, United Kingdom. We specialise in app/website development, as
            well as graphic design. Most of our projects are based on travel and
            aviation, as well as user-friendly apps to try to help improve your
            life.
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="px-4 py-12">
        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('projects') ? 'animate-slide-in-left' : ''}`} data-testid="heading-projects">Projects</h2>
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
                    <img
                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      alt={project.title}
                      src={project.image}
                    />
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
      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="px-4 py-12">
        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('subsidiaries') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('subsidiaries') ? 'animate-slide-in-left' : ''}`} data-testid="heading-subsidiaries">Companies</h2>
          <div className="grid grid-cols-1 gap-4">
            {subsidiariesData.map((subsidiary, index) => (
              <Card
                key={index}
                className={`bg-slate-700/80 border-slate-600/60 overflow-hidden backdrop-blur-sm cursor-pointer hover:bg-slate-700/90 hover:border-slate-500/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${visibleSections.has('subsidiaries') ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 150}ms` }}
                data-testid={`card-subsidiary-${index}`}
                onClick={() => window.open(subsidiary.link, '_blank')}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      alt={subsidiary.title}
                      src={subsidiary.image}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base mb-1 text-white" data-testid={`text-subsidiary-title-${index}`}>
                        {subsidiary.title}
                      </h3>
                      <p className="text-white/85 text-sm" data-testid={`text-subsidiary-description-${index}`}>
                        {subsidiary.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="px-4 py-12">
        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('contact') ? 'animate-slide-in-left' : ''}`} data-testid="heading-contact">More</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {contactData.map((contact, index) => (
              <Card
                key={index}
                className={`bg-slate-700/80 border-slate-600/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer ${visibleSections.has('contact') ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
                data-testid={`card-contact-${index}`}
                onClick={() => window.open(contact.link, '_blank')}
              >
                <CardContent className="p-5 text-center">
                  <h3 className="font-bold text-base mb-3 text-white" data-testid={`text-contact-title-${index}`}>
                    {contact.title}
                  </h3>
                  <p className="text-white/85 text-sm" data-testid={`text-contact-info-${index}`}>
                    {contact.info}
                  </p>
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
