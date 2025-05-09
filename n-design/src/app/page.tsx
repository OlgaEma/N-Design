"use client";

import { useEffect, useRef, useState } from "react";
import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import ServiceCard from "../../components/ServiceCard";
import ArchitectureGrid from "../../components/ArchitectureGrid";
import { useInView } from "react-intersection-observer"; //we do not use this it was for svg animation 
import ReferencesList from "../../components/ReferencesList";
import BuildingLineAnimation from "../../components/BuildingLIneAnimation";

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const architectureSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const [lastSection, setLastSection] = useState<string | null>(null);

  const [triggerAboutAnimation, setTriggerAboutAnimation] = useState(false);
  const [triggerServicesAnimation, setTriggerServicesAnimation] =
    useState(false);
  const [triggerArchitectureAnimation, setTriggerArchitectureAnimation] =
    useState(false);
  const [triggerWebAnimation, setTriggerWebAnimation] = useState(false);
  const [triggerContactAnimation, setTriggerContactAnimation] = useState(false);
  const [language, setLanguage] = useState<"en" | "cz">("en");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

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
            } else if (entry.target.id === "architecture") {
              requestAnimationFrame(() =>
                setTriggerArchitectureAnimation(true)
              );
            } else if (entry.target.id === "contact") {
              requestAnimationFrame(() => setTriggerContactAnimation(true));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Lower threshold to trigger animation earlier
      }
    );

    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    if (servicesSectionRef.current)
      observer.observe(servicesSectionRef.current);
    if (architectureSectionRef.current)
      observer.observe(architectureSectionRef.current);
    if (contactSectionRef.current) observer.observe(contactSectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string, fromId?: string) => {
    if (fromId) setLastSection(fromId);

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      // Delay animation trigger slightly to allow smooth scroll to happen first
      setTimeout(() => {
        if (id === "about") setTriggerAboutAnimation(true);
        if (id === "services") setTriggerServicesAnimation(true);
        if (id === "architecture") setTriggerArchitectureAnimation(true);
        if (id === "web") setTriggerWebAnimation(true);
      }, 300); // 300ms is usually good enough
    }
  };

  return (
    <main className="relative bg-black text-[#FFFFFF] font-montserrat">
      <div
        onClick={toggleLanguage}
        className="absolute top-15 right-25 z-50 text-sm font-semibold tracking-wide cursor-pointer hover:scale-105 transition"
      >
        {language === "en" ? "CZ" : "EN"}
      </div>
      {/* Hero Section */}
      <section className="flex flex-col h-screen w-full items-center justify-center gap-[10vw]">
        <div className="relative w-[15vw] overflow-hidden">
          <div className="absolute top-2/5 left-1/2 w-10 h-10 bg-[#FFFFFF] rounded-full z-0 animate-expandCircleFadeIn origin-center transform -translate-x-1/2" />
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
      {triggerAboutAnimation && (
        <div className="w-full h-[2px] bg-white animate-horizontalSplit" />
      )}
      {/* About Section */}
      <Section
        id="about"
        refProp={aboutSectionRef}
        customLayout={true}
        leftContent={
          <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
            {/* Fat left white line */}
            {triggerAboutAnimation && (
              <div className="absolute top-0 left-0 w-[8%] h-full bg-[#FFFFFF] animate-slideDown z-0" />
            )}

            {/* Content area */}
            <div className="relative z-10 w-full h-full px-6 py-10 flex flex-col justify-around text-[#FFFFFF] font-montserrat">
              {/* Heading */}
              <h2
                className={`text-4xl font-bold text-center ${
                  triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
                }`}
                style={triggerAboutAnimation ? { animationDelay: "0.5s" } : {}}
              >
                About Us
              </h2>

              {/* Paragraphs */}
              <div className="px-15 flex flex-col gap-20 text-center text-xl">
                <p
                  className={
                    triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
                  }
                  style={{ animationDelay: "1.1s" }}
                >
                  N Design is a creative studio based in Prague, specialized in
                  designing elegant, sustainable, and modern architectural and
                  digital spaces, tailored to your needs and desires.
                </p>

                <p
                  className={
                    triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
                  }
                  style={{ animationDelay: "1.1s" }}
                >
                  Our mission is to harmonize function and beauty in every space
                  we create.
                </p>
                <p
                  className={
                    triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
                  }
                  style={{ animationDelay: "1.4s" }}
                >
                  We believe design should reflect the personality of its user
                  while meeting real needs.
                </p>
                <p
                  className={
                    triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
                  }
                  style={{ animationDelay: "1.7s" }}
                >
                  We are a team of architects and web developers who believe
                  that every space, physical or digital, should inspire, serve,
                  and reflect its purpose. With attention to detail and a
                  personal approach, we bring your vision to life.
                </p>
              </div>

              {/* Logo */}
              <div
                className={`flex justify-center ${
                  triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
                }`}
                style={{ animationDelay: "2.1s" }}
              >
                <img
                  src="/ND_white_02@4x.png"
                  alt="N-design logo"
                  className="w-[25%]"
                />
              </div>
              <div className="flex justify-center items-center w-full h-[200px] mt-10">
  {triggerAboutAnimation ? (
    <BuildingLineAnimation trigger={triggerAboutAnimation} />
  ) : null}
</div>
            </div>
          </div>
        }
        trigger={triggerAboutAnimation}
        rightContent={
          <div className="relative w-full h-full bg-black text-white font-montserrat overflow-hidden">
            {/* Vertical white lines moving toward center */}
            {triggerAboutAnimation && (
              <>
                <div className="absolute top-0 left-0 w-[2px] h-1/2 bg-white animate-lineDown z-10" />
                <div className="absolute bottom-0 left-0 w-[2px] h-1/2 bg-white animate-lineUp z-10" />
              </>
            )}

            {/* Horizontal white line expanding right from center */}
            {triggerAboutAnimation && (
              <div className="absolute top-1/2 left-0 h-[2px] w-0 bg-white animate-horizontalSplit z-10" />
            )}

            {/* Main Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between px-10 py-10 overflow-y-auto">
              {/* Natasha (Top Half) */}
              <div className="h-1/2 px-5 flex flex-row justify-around gap-10  group">
                <div className="flex flex-col pt-12 items-center gap-6">
                  <img
                    src="/Natasha.jpg"
                    alt="Natasha"
                    className={`w-60 h-60 rounded-full object-cover shadow-md shrink-0 ${
                      triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
                    }`}
                    style={
                      triggerAboutAnimation ? { animationDelay: "0.6s" } : {}
                    }
                  />
                  <p className={`text-lg font-semibold ${
      triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
    }`}
    style={
      triggerAboutAnimation ? { animationDelay: "0.9s" } : {}
    }>
                    Spec. MA Arch
                    <br />
                    Co-owner & Lead Architect
                  </p>

                  <blockquote className={`italic text-sm border rounded px-2 border-white pr-4 max-w-prose ${
      triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
    }`}
    style={
      triggerAboutAnimation ? { animationDelay: "0.9s"} : {}
    }>
                    “My job is my passion. I love a good challenge, but I feel
                    most at designing residential spaces, houses, and buildings,
                    from the initial concept all the way to detailed design.
                    From the very beginning, my projects take shape as 3D
                    models, as function and form are equally important to me..
                    My mission is simple: to make every next project my best one
                    yet.”
                  </blockquote>
                </div>

                <div
                  className={`flex flex-col px-15 gap-3 justify-center max-w-prose text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4`}
                >
                  <p>
                    With over 16 years of experience across a wide range of
                    projects, from urban development and regeneration to
                    architectural and interior design, she brings a project from
                    the first concept to the final design.
                  </p>
                  <p>
                    She has led teams of designers, architects, and engineers
                    throughout the design phase and has successfully managed
                    construction teams all the way to project handover. Her
                    expertise also includes preparing high-quality marketing
                    materials tailored to each project’s unique vision.
                  </p>
                  <p>
                    She holds a Master’s degree in Architecture, with a thesis
                    focused on the urban redevelopment of a former industrial
                    zone on an island in Varna, Bulgaria, including the
                    architectural design of a remarkable mixed-use complex,
                    combining a hotel, offices, a conference center, and a
                    shopping mall, situated at the island’s peak. She has
                    academic specialization in urban renewal, and is a Licensed
                    architect with the Serbian Chamber of Engineers (license no.
                    300M12313).
                  </p>
                </div>
              </div>

              {/* Nedeljko (Bottom Half) */}
              <div className="h-1/2 px-5 flex flex-row-reverse justify-around gap-10 group">
  <div className="flex flex-col pt-12 items-center gap-6 pt-16">
    <img
      src="/Nedjo.jpg"
      alt="Nedeljko"
      className={`w-60 h-60 rounded-full object-cover shadow-md shrink-0 ${
        triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
      }`}
      style={
        triggerAboutAnimation ? { animationDelay: "0.9s" } : {}
      }
    />

    <p className={`text-lg font-semibold ${
      triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
    }`}
    style={
      triggerAboutAnimation ? { animationDelay: "0.9s" } : {}
    }
    >
      IT Engineer
      <br />
      Co-owner & Lead Developer
    </p>

    <blockquote className={`italic text-sm border rounded px-2 border-white pr-4 max-w-prose ${
      triggerAboutAnimation ? "fade-in-delayed" : "opacity-0"
    }`}
    style={
      triggerAboutAnimation ? { animationDelay: "0.9s"} : {}
    }
    >
      “I believe great digital experiences start with clear,
      functional code. I enjoy building clean, modern websites
      that follow current trends, but never at the cost of
      usability, speed, or simplicity. I love a good challenge and
      always strive to find smart, efficient solutions for every
      project.”
    </blockquote>
  </div>

  <div
    className={`flex flex-col px-15 gap-3 justify-center max-w-prose text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4`}
  >
    <p>
      With a strong background in web development and a passion
      for clean, functional code design, he is responsible for
      bringing websites and web applications to life, from concept
      to final product, in close collaboration with the design
      team. Precise, detail-oriented, and highly organized, he
      focuses on transforming ideas into smooth, user-friendly
      digital experiences.
    </p>
    <p>
      He has led teams of designers and developers, ensuring each
      project meets both technical and aesthetic expectations. He
      is also responsible for maintaining and updating websites,
      ensuring long-term functionality, security, and performance.
    </p>
    <p>
      He holds a Bachelor’s Degree in Computer and Information
      Sciences and Support Services, and is certified in web
      development technologies.
    </p>
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
        customLayout={true}
        leftContent={
          <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
            {/* Fat left white line */}
            {triggerServicesAnimation && (
              <div className="absolute top-0 left-0 w-[8%] h-full bg-[#FFFFFF] animate-slideDown z-0" />
            )}

            {/* Content area */}
            <div className="relative z-10 gap-16 w-full h-full px-15 py-10 flex flex-col justify-around text-[#FFFFFF] font-montserrat">
              <h2
                className={`text-4xl font-bold text-center ${
                  triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                }`}
                style={
                  triggerServicesAnimation ? { animationDelay: "0.5s" } : {}
                }
              >
                Services
              </h2>

              <div className="px-24 flex flex-col gap-24 text-center text-xl">
                <p
                  className={
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }
                  style={{ animationDelay: "0.8s" }}
                >
                  At N Design, we believe every project is a chance to blend
                  creativity with function, whether in the physical or digital
                  realm. We offer comprehensive services tailored to bring your
                  vision to life, whether we’re designing modern, functional
                  spaces or creating elegant, responsive websites that showcase
                  your brand
                </p>
                <p
                  className={
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }
                  style={{ animationDelay: "1.1s" }}
                >
                  We work with clients around the world — whether fully online
                  or through in-person meetings, depending on the project’s
                  scope and needs. Wherever you are, we’re ready to bring your
                  vision to life. Get in touch to discuss the best approach for
                  your project.
                </p>
              </div>

              <div
                className={`flex justify-center ${
                  triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                }`}
                style={{ animationDelay: "2.1s" }}
              ></div>
            </div>
          </div>
        }
        trigger={triggerServicesAnimation}
        rightContent={
          <div className="relative w-full h-full bg-black text-white font-montserrat overflow-hidden">
            {/* Tiny vertical line on far left edge */}
            {triggerServicesAnimation && (
              <>
                <div className="absolute top-0 left-0 w-[2px] h-1/2 bg-white animate-lineDown z-10" />
                <div className="absolute bottom-0 left-0 w-[2px] h-1/2 bg-white animate-lineUp z-10" />
              </>
            )}
            {triggerAboutAnimation && (
              <div className="absolute top left-0 h-[2px] w-0 bg-white animate-horizontalSplit z-10" />
            )}

            {/* Center vertical lines from middle */}
            {triggerServicesAnimation && (
              <>
                {/* Line Up (from center to top) */}
                <div className="absolute top-1/2 left-1/2 w-[2px] h-full bg-white animate-lineUpFromCenter origin-bottom z-10" />

                {/* Line Down (from center to bottom) */}
                <div className="absolute top-1/2 left-1/2 w-[2px] h-full bg-white animate-lineDownFromCenter origin-top z-10" />
              </>
            )}

            {/* Main Content in horizontal layout */}
            <div className="absolute inset-0 z-20 flex flex-row px-10 py-10 overflow-y-auto">
              {/* Architecture (Left Half) */}
              <div className="w-1/2 flex flex-col items-center gap-8 px-6 text-center group">
                <div
                  className={`w-full ${
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "0.4s" }}
                >
                  <ServiceCard
                    title="Architecture"
                    description="We design modern, functional spaces tailored to your lifestyle."
                    onClick={() => handleNavClick("architecture", "services")}
                  />
                </div>

                <div
                  className={`max-w-prose text-xl flex flex-col gap-6 ${
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1.2s" }}
                >
                  <h3>
                    <strong>From Concept to Completion</strong>
                  </h3>
                  <p>
                    We guide your project through every stage, from initial
                    sketches and 3D models to detailed design documentation.
                    Whether it's an architectural or interior design project, we
                    ensure smooth execution from vision to reality.
                  </p>
                  <p>
                    We also manage and lead construction teams, particularly for
                    interior design projects, and prepare high-quality marketing
                    materials, including visualizations and presentation
                    renderings.
                  </p>

                  <h3>
                    <strong>Sustainable & Modern Design</strong>
                  </h3>
                  <p>
                    Our work is grounded in a belief that sustainability and
                    elegance can coexist. We design modern, functional spaces
                    that reflect your needs while respecting the environment.
                  </p>

                  <h3>
                    <strong>Urban Design & Redevelopment</strong>
                  </h3>
                  <p>
                    We bring fresh, thoughtful solutions to urban development
                    projects—from residential zones and offices to public
                    spaces—combining practicality with creativity to enhance
                    everyday life.
                  </p>
                </div>

                <img
                  src="/picture1.png"
                  alt="Architecture example"
                  className={`w-[45%] rounded shadow-md ${
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1.8s" }}
                />
              </div>

              {/* Web Development (Right Half) */}
              <div className="w-1/2 flex flex-col items-center gap-10 px-6 text-center group">
                <div
                  className={`w-full ${
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <ServiceCard
                    title="Web Development"
                    description="We create elegant, responsive websites that showcase your brand."
                    onClick={() => handleNavClick("web", "services")}
                  />
                </div>

                <img
                  src="/picture4.png"
                  alt="Web project"
                  className={`w-[45%] rounded shadow-md ${
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1.6s" }}
                />

                <div
                  className={`max-w-prose text-xl px-4 flex flex-col gap-6 ${
                    triggerServicesAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1.4s" }}
                >
                  <h3>
                    <strong>End-to-End Solutions</strong>
                  </h3>
                  <p>
                    We create user-friendly websites and web applications — from
                    the first concept to the final product. Working closely with
                    our design team, we handle everything from wireframing and
                    development to testing, deployment, and maintenance.
                  </p>

                  <h3>
                    <strong>Clean & Modern Code</strong>
                  </h3>
                  <p>
                    Our digital experiences are built on clean, functional code
                    and guided by modern design principles. Each site is
                    responsive, secure, and intuitive — delivering both
                    performance and style across all devices.
                  </p>

                  <h3>
                    <strong>Ongoing Support</strong>
                  </h3>
                  <p>
                    We don’t stop at launch. We continue to maintain and update
                    your online presence, keeping it aligned with the latest
                    technologies and design trends to ensure your digital space
                    evolves with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <Section
        id="architecture"
        customLayout={true}
        refProp={architectureSectionRef}
        leftContent={
          <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
            {/* Fat left white line */}
            {triggerArchitectureAnimation && (
              <div className="absolute top-0 left-0 w-[8%] h-full bg-[#FFFFFF] animate-slideDown z-0" />
            )}

            {/* Content area */}
            <div className="relative z-10 gap-2 w-full h-full px-5 py-10 flex flex-col justify-around text-[#FFFFFF] font-montserrat">
              <h2
                className={`text-4xl font-bold text-center ${
                  triggerArchitectureAnimation ? "fade-in-delayed" : "opacity-0"
                }`}
                style={
                  triggerArchitectureAnimation ? { animationDelay: "0.5s" } : {}
                }
              >
                Architecture
              </h2>

              <div className="px-10 flex flex-col gap-14 text-center pb-10">
                <h3
                  className={`text-3xl ${
                    triggerArchitectureAnimation
                      ? "fade-in-delayed"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: "0.8s" }}
                >
                  <strong> References: </strong>
                </h3>
                <ReferencesList
                  hoveredSlug={hoveredSlug}
                  setHoveredSlug={setHoveredSlug}
                  trigger={triggerArchitectureAnimation}
                />
              </div>

              <div
                className={`flex justify-center ${
                  triggerArchitectureAnimation ? "fade-in-delayed" : "opacity-0"
                }`}
                style={{ animationDelay: "2.1s" }}
              ></div>
            </div>
          </div>
        }
        trigger={triggerArchitectureAnimation}
        rightContent={
          <div className="relative w-full h-full bg-black text-white font-montserrat overflow-hidden ">
            {/* Tiny vertical lines */}
            {triggerArchitectureAnimation && (
              <>
                <div className="absolute top-0 left-0 w-[2px] h-1/2 bg-white animate-lineDown z-10" />
                <div className="absolute bottom-0 left-0 w-[2px] h-1/2 bg-white animate-lineUp z-10" />
              </>
            )}
            {triggerArchitectureAnimation && (
              <div className="absolute top left-0 h-[2px] w-0 bg-white animate-horizontalSplit z-10" />
            )}

            {/* Main content container */}
            <div className="absolute inset-0 z-20 px-10 py-10 overflow-y-auto flex items-center justify-center">
              {triggerArchitectureAnimation && (
                <ArchitectureGrid
                  hoveredSlug={hoveredSlug}
                  trigger={triggerArchitectureAnimation}
                />
              )}
            </div>
          </div>
        }
      />
      <Section
        id="contact"
        customLayout={true}
        refProp={contactSectionRef}
        trigger={triggerContactAnimation}
        leftContent={
          <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
            {/* Fat left white line */}
            {triggerContactAnimation && (
              <div className="absolute top-0 left-0 w-[8%] h-full bg-[#FFFFFF] animate-slideDown z-0" />
            )}

            <div className="relative z-10 gap-6 w-full h-full px-5 py-15 flex flex-col justify-between text-[#FFFFFF] font-montserrat">
              <h2
                className={`text-4xl font-bold text-center ${
                  triggerContactAnimation ? "fade-in-delayed" : "opacity-0"
                }`}
                style={
                  triggerContactAnimation ? { animationDelay: "0.5s" } : {}
                }
              >
                Contact
              </h2>

              <div className="px-10 flex flex-col gap-6 text-center text-xl">
                <p
                  className={`${
                    triggerContactAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "0.8s" }}
                >
                  Email: info@n-design.cz
                </p>
                <p
                  className={`${
                    triggerContactAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1s" }}
                >
                  Phone: +420 123 456 789
                </p>
                <p
                  className={`${
                    triggerContactAnimation ? "fade-in-delayed" : "opacity-0"
                  }`}
                  style={{ animationDelay: "1.2s" }}
                >
                  Prague, Czech Republic
                </p>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="relative w-full bg-black text-white font-montserrat overflow-hidden">
            {/* Tiny vertical lines */}
            {triggerContactAnimation && (
              <>
                <div className="absolute top-0 left-0 w-[2px] h-1/2 bg-white animate-lineDown z-20" />
                <div className="absolute bottom-0 left-0 w-[2px] h-1/2 bg-white animate-lineUp z-20" />
              </>
            )}
            {triggerContactAnimation && (
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-white animate-horizontalSplit z-20" />
            )}

            {/* Main content container */}
            <div className="absolute inset-0 z-20 flex items-center justify-center p-10">
              <ContactForm trigger={triggerContactAnimation} />
            </div>
          </div>
        }
      />
    </main>
  );
}
