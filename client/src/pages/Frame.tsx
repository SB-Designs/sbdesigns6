import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "Companies", href: "#companies" },
  { label: "Wallpapers", href: "#wallpapers" },
];

const projectsData = [
  { title: "AeroMix", description: "Portable in-flight entertainment.", image: "/assets/aeromix.png", status: "IN DEVELOPMENT", statusColor: "bg-orange-500", link: "https://aeromix.pages.dev" },
  { title: "Chelmsford Bus Simulator", description: "Drive a bus in a to-scale replica of Chelmsford, Essex.", image: "/assets/cbs.png", status: "IN DEVELOPMENT", statusColor: "bg-orange-500", link: "https://chelmsford.pages.dev" },
  { title: "Duneb Browser", description: "The most private browser. Ever.", image: "/assets/duneb.png", status: "IN DEVELOPMENT", statusColor: "bg-orange-500", link: "https://duneb.netlify.app" },
  { title: "Echoes of a Dying World", description: "An all new video game. (by HeadQR)", image: "/assets/headqr.png", status: "IN DEVELOPMENT", statusColor: "bg-orange-500", link: "https://github.com/headqr" },
  { title: "SB Photos", description: "Aviation and wildlife photography.", image: "/assets/sbphotos.png", status: null, statusColor: null, link: "https://sbphotos.pages.dev" },
  { title: "ticketnow", description: "A bus ticketing system.", image: "/assets/ticketnow.png", status: "IN DEVELOPMENT", statusColor: "bg-orange-500", link: "https://github.com/point2pointuk" },
  { title: "ThrustByte", description: "An aviation and tech blog.", image: "/assets/thrustbyte.png", status: null, statusColor: null, link: "https://thrustbyte.pages.dev" },
  { title: "Trackle", description: "The UK railway station game.", image: "/assets/trackle.png", status: "BETA PROGRAMME", statusColor: "bg-green-500", link: "https://trackle.pages.dev" },
  { title: "Wallpaper Collection", description: "Desktop and mobile wallpapers with our branding.", image: "/assets/wallpaper.png", status: null, statusColor: null, link: "https://sbdev.zone.id/wallpapers" },
  { title: "Zenity", description: "A wellbeing and mental health app. (by Zenity Team)", image: "/assets/zenity.png", status: "IN DEVELOPMENT", statusColor: "bg-orange-500", link: "https://github.com/zenitydevs" },
];

const companiesData = [
  { title: "Point 2 Point", description: "Joint venture with TurquoiseTNT.", image: "/assets/point2point.png", link: "https://point2point.is-a.dev" },
  { title: "HeadQR", description: "Developer of HeadQR.", image: "/assets/headqr.png", link: "https://headqr.pages.dev" },
  { title: "Lev868 Studios", description: "Developer and partner of Lev868 Studios.", image: "/assets/lev868.png", link: "http://lev868.dynv6.net" },
  { title: "TurquoiseTNT", description: "Partner of TurquoiseTNT.", image: "/assets/tnt.png", link: "https://turquoisetnt.one" },
  { title: "Zenity", description: "Developer of Zenity.", image: "/assets/zenity.png", link: "https://github.com/ZenityDevs" },
];

const wallpapersData = [
  { title: "SB Designs Wallpaper Pack", description: "Desktop and mobile wallpapers.", image: "/assets/wallpaper.png", link: "https://sbdev.zone.id/wallpapers" },
];

const contactData = [
  { title: "Email", info: "hello@sbdesigns.is-a.dev", link: "mailto:hello@sbdesigns.is-a.dev" },
  { title: "Whatsapp", info: "+447484828585", link: "https://wa.me/+447484828585" },
  { title: "Status", info: "See which services are up (or sadly down).", link: "https://status.sbdesigns.is-a.dev" },
  { title: "Become a Beta Tester", info: "Help test our new apps, games, and more!", link: "https://sbdev.zone.id/tester" },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export const Frame = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisibleSections(prev => new Set([...prev, entry.target.id]));
      });
    }, { threshold: 0.1 });
    document.querySelectorAll("section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white font-['Kumbh_Sans'] overflow-x-hidden">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="flex items-center justify-between max-w-sm lg:max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <span>SB Designs</span>
          <div className="flex gap-1">
            {navigationItems.map(item => <Button key={item.href} onClick={() => scrollToSection(item.href)}>{item.label}</Button>)}
          </div>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="px-4 py-12">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 gap-4">
          {projectsData.map((p, i) => <Card key={i} onClick={() => window.open(p.link, "_blank")}><CardContent>{p.title}</CardContent></Card>)}
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="px-4 py-12">
        <h2>Companies</h2>
        <div className="grid grid-cols-1 gap-4">
          {companiesData.map((c, i) => <Card key={i} onClick={() => window.open(c.link, "_blank")}><CardContent>{c.title}</CardContent></Card>)}
        </div>
      </section>

      {/* Wallpapers */}
      <section id="wallpapers" className="px-4 py-12">
        <h2>Wallpapers</h2>
        <div className="grid grid-cols-1 gap-4">
          {wallpapersData.map((w, i) => <Card key={i} onClick={() => window.open(w.link, "_blank")}><CardContent>{w.title}</CardContent></Card>)}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-12">
        <h2>More</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {contactData.map((c, i) => (
            <Card key={i} onClick={() => window.open(c.link, "_blank")}>
              <CardContent className="text-center">
                <h3>{c.title}</h3>
                <p>{c.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 text-center">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img className="w-5 h-8" alt="SB Designs Logo" src="/assets/icon2.png" />
            <span className="text-xl font-medium">SB Designs</span>
          </div>
          <p>@gosbdev | © SB Designs {new Date().getFullYear()}</p>
        </div>
      </footer>

    </div>
  );
};
