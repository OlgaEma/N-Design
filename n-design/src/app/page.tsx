"use client";

import { useEffect, useRef, useState } from "react";
import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import ServiceCard from "../../components/ServiceCard";


export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const [lastSection, setLastSection] = useState<string | null>(null);

  const [triggerAboutAnimation, setTriggerAboutAnimation] = useState(false);
  const [triggerServicesAnimation, setTriggerServicesAnimation] =
    useState(false);
  const [triggerArchitectureAnimation, setTriggerArchitectureAnimation] =
    useState(false);
  const [triggerWebAnimation, setTriggerWebAnimation] = useState(false);
  const [language, setLanguage] = useState<"en" | "cz">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "cz" : "en"));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "about") {
              requestAnimationFrame(() => setTriggerAboutAnimation(true));
            } else if (entry.target.id === "services") {
              requestAnimationFrame(() => setTriggerServicesAnimation(true));
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    if (servicesSectionRef.current)
      observer.observe(servicesSectionRef.current);

    // Fallback: Trigger if already in viewport on load
    if (aboutSectionRef.current) {
      const rect = aboutSectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setTriggerAboutAnimation(true);
      }
    }
    if (servicesSectionRef.current) {
      const rect = servicesSectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setTriggerServicesAnimation(true);
      }
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string, fromId?: string) => {
    if (fromId) setLastSection(fromId);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (id === "about") setTriggerAboutAnimation(true);
    if (id === "services") setTriggerServicesAnimation(true);
    if (id === "architecture") {
      setTriggerArchitectureAnimation(true); // create this state when needed
    }
    if (id === "web") {
      setTriggerWebAnimation(true); // same here
    }
  };

  return (
    <main className="relative bg-black text-[#FFFFF0]">
      <div
        onClick={toggleLanguage}
        className="absolute top-15 right-25 z-50 text-sm font-semibold tracking-wide cursor-pointer hover:scale-105 transition"
      >
        {language === "en" ? "CZ" : "EN"}
      </div>
      {/* Hero Section */}
      <section className="flex flex-col h-screen w-full items-center justify-center gap-[10vw]">
        <div className="relative w-[15vw] overflow-hidden">
          <div className="absolute top-2/5 left-1/2 w-10 h-10 bg-[#FFFFF0] rounded-full z-0 animate-expandCircleFadeIn origin-center transform -translate-x-1/2" />
          <img
            src="/background.png"
            alt="Animated Logo"
            className="w-full relative z-20"
          />
        </div>

        <nav className="flex gap-[10vw] text-[1.2vw] opacity-0 animate-fadeInNav">
          <span className="inline-block transition-transform duration-300 hover:scale-120">
            <a
              onClick={() => handleNavClick("about")}
              className="cursor-pointer"
            >
              About Us
            </a>
          </span>
          <span className="inline-block transition-transform duration-300 hover:scale-120">
            <a
              onClick={() => handleNavClick("services")}
              className="cursor-pointer"
            >
              Services
            </a>
          </span>
          <span className="inline-block transition-transform duration-300 hover:scale-120">
            <a
              onClick={() => handleNavClick("contact")}
              className="cursor-pointer"
            >
              Contact
            </a>
          </span>
        </nav>
      </section>

      {/* About Section */}
      <Section
        id="about"
        refProp={aboutSectionRef}
        leftContent={<h2 className="text-black text-3xl font-bold">About Us</h2>}
        trigger={triggerAboutAnimation}
        rightContent={
          <div className="z-0 text-black px-8 py-6 w-full h-full flex items-stretch gap-10">
            {/* Text */}
            <div className="w-1/3 flex items-center justify-center pr-16">
            <div className="text-2xl font-serif leading-relaxed flex flex-col gap-8">
              <p className={`${triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"}`} style={triggerAboutAnimation ? { animationDelay: "1.5s" } : {}}>
                N-design is a creative architecture studio based in Prague, specializing in elegant, sustainable, and modern spaces tailored to your lifestyle.
              </p>
              <p className={`${triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"}`} style={triggerAboutAnimation ? { animationDelay: "1.8s" } : {}}>
                Our mission is to harmonize function and beauty in every space we create.
              </p>
              <p className={`${triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"}`} style={triggerAboutAnimation ? { animationDelay: "2.1s" } : {}}>
                We believe design should reflect the personality of its user while meeting real-world needs.
              </p>
            </div>
          </div>
        
            {/* Divider */}
            <div className={triggerAboutAnimation ?"w-px bg-gray-400 self-stretch opacity-50 fade-in-delayed " : "opacity-0"} />
        
            {/* Images */}
            <div className="w-2/3 flex flex-col gap-8 justify-between items-stretch">
                {/* Top image – aligned left */}
                <div className="flex justify-start group fade-in-delayed" style={triggerAboutAnimation ? { animationDelay: "2.4s" } : {}}>
                  <div className="relative flex items-center gap-4">
                    <img
                      src="/Natasha.jpg"
                      alt="Natasha"
                      className="w-72 h-72 rounded-full object-cover shadow-md"
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                      <p className="text-xl font-bold">Natasha</p>
                      <p className="text-sm text-gray-600">Lead Architect</p>
                    </div>
                  </div>
                </div>

                {/* Bottom image – aligned right */}
                <div className="flex justify-end group fade-in-delayed" style={triggerAboutAnimation ? { animationDelay: "2.7s" } : {}}>
                  <div className="relative flex items-center gap-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
                      <p className="text-xl font-bold">Nedjo</p>
                      <p className="text-sm text-gray-600">Creative Developer</p>
                    </div>
                    <img
                      src="/Nedjo.jpg"
                      alt="Me"
                      className="w-72 h-72 rounded-full object-cover shadow-md"
                    />
                  </div>
                </div>
              </div>
          </div>
        }
      />

      {/* Services Section */}

      <Section
        id="services"
        refProp={servicesSectionRef}
        leftContent={<h2 className="text-black text-3xl font-bold">Services</h2>}
        trigger={triggerServicesAnimation}
        rightContent={
          <div className="z-0 flex flex-col gap-10 text-black px-10 fade-in-delayed">
            {/* Architecture Card */}
            <ServiceCard
              icon="🏛️"
              title="Architecture"
              description="We design modern, functional spaces tailored to your lifestyle."
              onClick={() => handleNavClick("architecture", "services")}
            />
    

            {/* Web Development Card */}
            <ServiceCard
              icon="💻"
              title="Web Development"
              description="We create elegant and responsive websites that showcase your brand."
              onClick={() => handleNavClick("web", "services")}
            />
          </div>
        }
      />

      <Section
        id="architecture"
        leftContent={<h2 className="text-black text-3xl font-bold">Architecture</h2>}
        trigger={triggerArchitectureAnimation}
        showBackButton={!!lastSection}
        onBack={() => handleNavClick(lastSection!)}
        rightContent={
          <div className="z-0 text-black px-8 py-6 max-w-3xl flex flex-col gap-6">
            <p className="text-xl font-semibold">
              We design elegant, modern, and sustainable spaces tailored to your
              needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/arch1.jpg"
                alt="Project 1"
                className="rounded shadow-md fade-in-delayed"
              />
              <img
                src="/arch2.jpg"
                alt="Project 2"
                className="rounded shadow-md fade-in-delayed"
              />
            </div>
          </div>
        }
      />
      <Section
        id="web"
        leftContent={<h2 className="text-black text-3xl font-bold">Web Development</h2>}
        trigger={triggerWebAnimation}
        showBackButton={!!lastSection}
        onBack={() => handleNavClick(lastSection!)}
        rightContent={
          <div className="z-0 text-black px-8 py-6 max-w-3xl flex flex-col gap-6">
            <p className="text-xl font-semibold">
              We design elegant, modern, and sustainable spaces tailored to your
              needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/arch1.jpg"
                alt="Project 1"
                className="rounded shadow-md fade-in-delayed"
              />
              <img
                src="/arch2.jpg"
                alt="Project 2"
                className="rounded shadow-md fade-in-delayed"
              />
            </div>
          </div>
        }
      />
      {/* Web Development Fullscreen Section */}
      <Section
        id="contact"
        leftContent={
          <div className="flex flex-col items-center justify-center px-6 text-center text-[#FFFFF0]">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="mb-2">info@n-design.cz</p>
            <p className="mb-2">+420 123 456 789</p>
            <p>Prague, Czech Republic</p>
          </div>
        }
        rightContent={
          <ContactForm/>
        }
      />
    </main>
  );
}
