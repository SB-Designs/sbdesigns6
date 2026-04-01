import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "Companies", href: "#subsidiaries" },
  { label: "Wallpapers", href: "#wallpapers" },
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
    title: "Chelmsford Bus Simulator",
    description: "Drive a bus in a to-scale replica of Chelmsford, Essex.",
    image: "/assets/cbs.png",
    status: "IN DEVELOPMENT",
    statusColor: "bg-orange-500",
    link: "https://chelmsford.pages.dev",
  },
  {
    title: "Duneb Browser",
    description: "The most private browser. Ever.",
    image: "/assets/duneb.png",
    status: "IN DEVELOPMENT",
    statusColor: "bg-orange-500",
    link: "https://duneb.netlify.app",
  },
  {
    title: "Echoes of a Dying World",
    description: "An all new video game. (by HeadQR)",
    image: "/assets/headqr.png",
    status: "IN DEVELOPMENT",
    statusColor: "bg-orange-500",
    link: "https://github.com/headqr",
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
    title: "ticketnow",
    description: "A bus ticketing system.",
    image: "/assets/ticketnow.png",
    status: "IN DEVELOPMENT",
    statusColor: "bg-orange-500",
    link: "https://github.com/point2pointuk",
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
  {
    title: "Wallpaper Collection",
    description: "Desktop and mobile wallpapers with our branding.",
    image: "/assets/wallpaper.png",
    status: null,
    statusColor: null,
    link: "https://sbdev.zone.id/wallpapers",
  },
  {
    title: "Zenity",
    description: "A wellbeing and mental health app. (by Zenity Team)",
    image: "/assets/zenity.png",
    status: "IN DEVELOPMENT",
    statusColor: "bg-orange-500",
    link: "https://github.com/zenitydevs",
  },
];

const subsidiariesData = [
  {
    title: "Point 2 Point",
    description: "Joint venture with TurquoiseTNT.",
    image: "/assets/point2point.png",
    link: "https://point2point.is-a.dev",
  },
  {
    title: "HeadQR",
    description: "Developer of HeadQR.",
    image: "/assets/headqr.png",
    link: "https://headqr.pages.dev",
  },
  {
    title: "Lev868 Studios",
    description: "Developer and partner of Lev868 Studios.",
    image: "/assets/lev868.png",
    link: "http://lev868.dynv6.net",
  },
  {
    title: "TurquoiseTNT",
    description: "Partner of TurquoiseTNT.",
    image: "/assets/tnt.png",
    link: "https://turquoisetnt.one",
  },
  {
    title: "Zenity",
    description: "Developer of Zenity.",
    image: "/assets/zenity.png",
    link: "https://github.com/ZenityDevs",
  },
];

const wallpapersData = [
  {
    title: "Sunset Aviation",
    description: "Beautiful sunset with aircraft silhouette.",
    image: "/assets/wallpaper-sunset.png",
    link: "https://sbdev.zone.id/wallpapers/sunset-aviation",
  },
  {
    title: "Urban Transport",
    description: "Modern city transportation theme.",
    image: "/assets/wallpaper-transport.png",
    link: "https://sbdev.zone.id/wallpapers/urban-transport",
  },
  {
    title: "Digital Horizon",
    description: "Tech-inspired minimalist design.",
    image: "/assets/wallpaper-horizon.png",
    link: "https://sbdev.zone.id/wallpapers/digital-horizon",
  },
  {
    title: "Railway Dreams",
    description: "Scenic railway landscape wallpaper.",
    image: "/assets/wallpaper-railway.png",
    link: "https://sbdev.zone.id/wallpapers/railway-dreams",
  },
  {
    title: "Sky & Mountains",
    description: "Majestic mountain peaks at sunrise.",
    image: "/assets/wallpaper-mountains.png",
    link: "https://sbdev.zone.id/wallpapers/sky-mountains",
  },
];

const contactData = [
  {
    title: "Email",
    info: "hello@sbdesigns.is-a.dev",
    link: "mailto:hello@sbdesigns.is-a.dev",
  },
  {
    title: "Whatsapp",
    info: "+447484828585",
    link: "https://wa.me/+447484828585",
  },
  {
    title: "Status",
    info: "See which services are up (or sadly down).",
    link: "https://status.sbdesigns.is-a.dev",
  },
  {
    title: "Become a Beta Tester",
    info: "Help test our new apps, games, and more!",
    link: "https://sbdev.zone.id/tester",
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
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>\n        <div className="flex items-center justify-between max-w-sm lg:max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
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
        <div className={`max-w-lg lg:max-w-xl mx-auto space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>\n          <h1 className={`text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white transition-all duration-1200 ${isVisible ? 'animate-fade-in-up' : ''}`}>\n            Coding From Track to Taxiway\n          </h1>\n          <p className={`text-base lg:text-xl text-white/90 font-medium transition-all duration-1200 delay-300 ${isVisible ? 'animate-fade-in-up' : ''}`}>\n            We're SB Designs, experienced in building travel and transport apps, games and more!\n          </p>\n          <Button\n            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"\n            data-testid="button-explore"\n            onClick={() => scrollToSection('#projects')}\n          >\n            Explore\n          </Button>\n        </div>\n        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">\n          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">\n            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>\n          </div>\n        </div>\n      </section>\n      {/* About Us Section */}\n      <section id="about" className="px-4 py-12">\n        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>\n          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('about') ? 'animate-slide-in-left' : ''}`} data-testid="heading-about">About Us</h2>\n          <p className={`text-white/90 text-base lg:text-lg leading-relaxed font-medium transition-all duration-800 delay-200 ${visibleSections.has('about') ? 'animate-slide-in-right' : ''}`}>\n            Founded in 2022, we are SB Designs, a small technology company from\n            London, United Kingdom. We specialise in app/website development, as\n            well as graphic design. Most of our projects are based on travel and\n            aviation, as well as user-friendly apps to try to help improve your\n            life.\n          </p>\n        </div>\n      </section>\n      {/* Projects Section */}\n      <section id="projects" className="px-4 py-12">\n        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>\n          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('projects') ? 'animate-slide-in-left' : ''}`} data-testid="heading-projects">Projects</h2>\n          <div className="grid grid-cols-1 gap-4">\n            {projectsData.map((project, index) => (\n              <Card\n                key={index}\n                className={`bg-slate-700/80 border-slate-600/60 overflow-hidden backdrop-blur-sm cursor-pointer hover:bg-slate-700/90 hover:border-slate-500/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${visibleSections.has('projects') ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}\n                style={{ animationDelay: `${index * 100}ms` }}\n                data-testid={`card-project-${index}`}\n                onClick={() => window.open(project.link, '_blank')}\n              >\n                <CardContent className="p-4">\n                  <div className="flex items-center gap-4">\n                    <img\n                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0 transition-transform duration-300 hover:scale-110"\n                      alt={project.title}\n                      src={project.image}\n                    />\n                    <div className="flex-1 min-w-0">\n                      <h3 className="font-bold text-base mb-1 text-white" data-testid={`text-title-${index}`}>\n                        {project.title}\n                      </h3>\n                      <p className="text-white/85 text-sm mb-2" data-testid={`text-description-${index}`}>\n                        {project.description}\n                      </p>\n                      {project.status && (\n                        <span\n                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${project.statusColor} animate-pulse`}\n                          data-testid={`status-${index}`}\n                        >\n                          {project.status}\n                        </span>\n                      )}\n                    </div>\n                  </div>\n                </CardContent>\n              </Card>\n            ))}\n          </div>\n        </div>\n      </section>\n      {/* Subsidiaries Section */}\n      <section id="subsidiaries" className="px-4 py-12">\n        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('subsidiaries') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>\n          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('subsidiaries') ? 'animate-slide-in-left' : ''}`} data-testid="heading-subsidiaries">Companies</h2>\n          <div className="grid grid-cols-1 gap-4">\n            {subsidiariesData.map((subsidiary, index) => (\n              <Card\n                key={index}\n                className={`bg-slate-700/80 border-slate-600/60 overflow-hidden backdrop-blur-sm cursor-pointer hover:bg-slate-700/90 hover:border-slate-500/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${visibleSections.has('subsidiaries') ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}\n                style={{ animationDelay: `${index * 150}ms` }}\n                data-testid={`card-subsidiary-${index}`}\n                onClick={() => window.open(subsidiary.link, '_blank')}\n              >\n                <CardContent className="p-4">\n                  <div className="flex items-center gap-4">\n                    <img\n                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0 transition-transform duration-300 hover:scale-110"\n                      alt={subsidiary.title}\n                      src={subsidiary.image}\n                    />\n                    <div className="flex-1 min-w-0">\n                      <h3 className="font-bold text-base mb-1 text-white" data-testid={`text-subsidiary-title-${index}`}>\n                        {subsidiary.title}\n                      </h3>\n                      <p className="text-white/85 text-sm" data-testid={`text-subsidiary-description-${index}`}>\n                        {subsidiary.description}\n                      </p>\n                    </div>\n                  </div>\n                </CardContent>\n              </Card>\n            ))}\n          </div>\n        </div>\n      </section>\n      {/* Wallpapers Section */}\n      <section id="wallpapers" className="px-4 py-12">\n        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('wallpapers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>\n          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('wallpapers') ? 'animate-slide-in-left' : ''}`} data-testid="heading-wallpapers">Wallpapers</h2>\n          <div className="grid grid-cols-1 gap-4">\n            {wallpapersData.map((wallpaper, index) => (\n              <Card\n                key={index}\n                className={`bg-slate-700/80 border-slate-600/60 overflow-hidden backdrop-blur-sm cursor-pointer hover:bg-slate-700/90 hover:border-slate-500/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${visibleSections.has('wallpapers') ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}\n                style={{ animationDelay: `${index * 150}ms` }}\n                data-testid={`card-wallpaper-${index}`}\n                onClick={() => window.open(wallpaper.link, '_blank')}\n              >\n                <CardContent className="p-4">\n                  <div className="flex items-center gap-4">\n                    <img\n                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0 transition-transform duration-300 hover:scale-110"\n                      alt={wallpaper.title}\n                      src={wallpaper.image}\n                    />\n                    <div className="flex-1 min-w-0">\n                      <h3 className="font-bold text-base mb-1 text-white" data-testid={`text-wallpaper-title-${index}`}>\n                        {wallpaper.title}\n                      </h3>\n                      <p className="text-white/85 text-sm" data-testid={`text-wallpaper-description-${index}`}>\n                        {wallpaper.description}\n                      </p>\n                    </div>\n                  </div>\n                </CardContent>\n              </Card>\n            ))}\n          </div>\n        </div>\n      </section>\n      {/* Contact Section */}\n      <section id="contact" className="px-4 py-12">\n        <div className={`max-w-sm lg:max-w-md mx-auto space-y-6 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>\n          <h2 className={`text-2xl lg:text-3xl font-bold text-white transition-all duration-800 ${visibleSections.has('contact') ? 'animate-slide-in-left' : ''}`} data-testid="heading-contact">More</h2>\n          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">\n            {contactData.map((contact, index) => (\n              <Card\n                key={index}\n                className={`bg-slate-700/80 border-slate-600/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer ${visibleSections.has('contact') ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}\n                style={{ animationDelay: `${index * 200}ms` }}\n                data-testid={`card-contact-${index}`}\n                onClick={() => window.open(contact.link, '_blank')}\n              >\n                <CardContent className="p-5 text-center">\n                  <h3 className="font-bold text-base mb-3 text-white" data-testid={`text-contact-title-${index}`}>\n                    {contact.title}\n                  </h3>\n                  <p className="text-white/85 text-sm" data-testid={`text-contact-info-${index}`}>\n                    {contact.info}\n                  </p>\n                </CardContent>\n              </Card>\n            ))}\n          </div>\n        </div>\n      </section>\n      {/* Footer */}\n      <footer className="px-4 py-12">\n        <div className="max-w-sm lg:max-w-md mx-auto text-center space-y-6">\n          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">\n            <img\n              className="w-5 h-8"\n              alt="SB Designs Logo"\n              src="/assets/icon2.png"\n            />\n            <span className="text-xl font-medium text-white">SB Designs</span>\n          </div>\n          <p className="text-white/80 text-sm animate-fade-in-up delay-200" data-testid="text-copyright">@gosbdev | © SB Designs {new Date().getFullYear()}</p>\n        </div>\n      </footer>\n    </div>\n  );\n};