"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  const [triggerAboutAnimation, setTriggerAboutAnimation] = useState(false);
  const [triggerServicesAnimation, setTriggerServicesAnimation] =
    useState(false);

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

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (id === "about") setTriggerAboutAnimation(true);
    if (id === "services") setTriggerServicesAnimation(true);
    if (id === "architecture") {
      // setTriggerArchitectureAnimation(true); // create this state when needed
    }
    if (id === "web") {
      // setTriggerWebAnimation(true); // same here
    }
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col h-screen w-full items-center justify-center gap-[10vw]">
        <div className="relative w-[15vw]">
          <img
            src="/background.png"
            alt="Animated Logo"
            className="w-full relative z-10"
          />
          <div className="absolute top-0 left-0 h-full bg-white z-0 animate-growRight" />
        </div>

        <nav className="flex gap-[10vw] text-[1.2vw]">
          <a
            onClick={() => handleNavClick("about")}
            className="cursor-pointer hover:text-[1.4vw] transition-all duration-300"
          >
            About Us
          </a>
          <a
            onClick={() => handleNavClick("services")}
            className="cursor-pointer hover:text-[1.4vw] transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-[1.4vw] transition-all duration-300"
          >
            Contact
          </a>
        </nav>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutSectionRef}
        className="flex h-screen w-full"
      >
        {/* Left Side */}
        <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
          <h2 className="z-10 text-black text-3xl font-bold">About Us</h2>
          {triggerAboutAnimation && (
            <div className="absolute top-0 left-[15%] w-[70%] h-full bg-white animate-slideDown" />
          )}
        </div>

        {/* Right Side */}
        <div className="relative w-[70%] bg-white overflow-hidden flex items-center justify-center">
          {triggerAboutAnimation && (
            <div className="absolute bottom-0 left-0 w-full h-full bg-black animate-slideUpOverlay z-10" />
          )}
          <div className="z-0 text-black text-xl font-semibold">
            <p>This is the revealed content.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesSectionRef}
        className="flex h-screen w-full"
      >
        {/* Left Side */}
        <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
          <h2 className="z-10 text-black text-3xl font-bold">Services</h2>
          {triggerServicesAnimation && (
            <div className="absolute top-0 left-[15%] w-[70%] h-full bg-white animate-slideDown" />
          )}
        </div>

        {/* Right Side */}
        <div className="relative w-[70%] bg-white overflow-hidden flex items-center justify-center">
          {triggerServicesAnimation && (
            <div className="absolute bottom-0 left-0 w-full h-full bg-black animate-slideUpOverlay z-10" />
          )}

          {triggerServicesAnimation && (
            <div className="z-0 flex flex-col gap-10 text-black px-10 fade-in-delayed">
              {/* Architecture Card */}
              <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-2">🏛️</div>
                <h3 className="text-2xl font-bold mb-1">Architecture</h3>
                <p className="mb-3 text-gray-700">
                  We design modern, functional spaces tailored to your
                  lifestyle.
                </p>
                <button
                  onClick={() => handleNavClick("architecture")}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all"
                >
                  See More
                </button>
              </div>

              {/* Web Development Card */}
              <div className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-2">💻</div>
                <h3 className="text-2xl font-bold mb-1">Web Development</h3>
                <p className="mb-3 text-gray-700">
                  We create elegant and responsive websites that showcase your
                  brand.
                </p>
                <button
                  onClick={() => handleNavClick("web")}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all"
                >
                  See More
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <section id="architecture" className="flex h-screen w-full">
        {/* Left Side */}
        <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
          <h2 className="z-10 text-black text-3xl font-bold">Architecture</h2>
          <div className="absolute top-0 left-[15%] w-[70%] h-full bg-white animate-slideDown" />
        </div>

        {/* Right Side */}
        <div className="relative w-[70%] bg-white overflow-hidden flex items-center justify-center">
          <div className="absolute bottom-0 left-0 w-full h-full bg-black animate-slideUpOverlay z-10" />
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
        </div>
      </section>

      {/* Web Development Fullscreen Section */}
      <section id="web" className="flex h-screen w-full">
        {/* Left Side */}
        <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
          <h2 className="z-10 text-black text-3xl font-bold">
            Web Development
          </h2>
          <div className="absolute top-0 left-[15%] w-[70%] h-full bg-white animate-slideDown" />
        </div>

        {/* Right Side */}
        <div className="relative w-[70%] bg-white overflow-hidden flex items-center justify-center">
          <div className="absolute bottom-0 left-0 w-full h-full bg-black animate-slideUpOverlay z-10" />
          <div className="z-0 text-black px-8 py-6 max-w-3xl flex flex-col gap-6">
            <p className="text-xl font-semibold">
              We create fast, modern websites tailored to your brand and your
              users.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/web1.png"
                alt="Web Project 1"
                className="rounded shadow-md fade-in-delayed"
              />
              <img
                src="/web2.png"
                alt="Web Project 2"
                className="rounded shadow-md fade-in-delayed"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex h-screen w-full bg-black text-white"
      >
        {/* Left Side – Contact Info */}
        <div className="w-[30%] flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="mb-2">info@n-design.cz</p>
          <p className="mb-2">+420 123 456 789</p>
          <p>Prague, Czech Republic</p>
        </div>

        {/* Right Side – Consultation Form */}
        <div className="w-[70%] bg-white text-black flex items-center justify-center px-10">
          <form
            action="https://formspree.io/f/xwplaqak" 
            method="POST"
            className="w-full max-w-xl space-y-6"
          >
            <h2 className="text-2xl font-bold">Book a Free Consultation</h2>

            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
