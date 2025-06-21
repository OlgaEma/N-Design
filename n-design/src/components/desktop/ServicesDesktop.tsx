"use client";

import { RefObject } from "react";
import lang from "@/data/lang";
import ServiceCard from "@/components/ServiceCard";

interface Props {
  language: "en" | "cz";
  trigger: boolean;
  refProp: RefObject<HTMLDivElement | null>;
  handleComingSoon: () => void;
  showComingSoon: boolean;
}

export default function ServicesDesktop({
  language,
  trigger,
  refProp,
  handleComingSoon,
  showComingSoon,
}: Props) {
  const t = lang[language].services;

  return (
    <section
      id="services"
      ref={refProp}
      className="relative w-full h-screen overflow-hidden flex"
    >
      {/* LEFT SIDE */}
      <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
        {trigger && (
          <div className="absolute top-0 left-0 w-[8%] h-full bg-white animate-slideDown z-0" />
        )}
        <div
          className="relative z-10 gap-40 w-full h-full py-20 flex flex-col justify-start
         text-white font-montserrat"
        >
          <h2
            className={`text-4xl font-bold text-center ${
              trigger ? "fade-in-delayed" : "opacity-0"
            }`}
            style={trigger ? { animationDelay: "0.5s" } : {}}
          >
            {t.heading}
          </h2>

          <div className="px-12 flex flex-col gap-24 text-center text-lg lg:text-sm xl:text-lg">
            {t.paragraphs.map((p, i) => (
              <p
                key={i}
                className={trigger ? "fade-in-delayed" : "opacity-0"}
                style={{ animationDelay: `${0.8 + i * 0.3}s` }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full h-full bg-black text-white font-montserrat overflow-hidden">
        {/* Lines */}
        {trigger && (
          <>
            <div className="absolute top-0 left-0 w-[2px] h-1/2 bg-white animate-lineDown z-10" />
            <div className="absolute bottom-0 left-0 w-[2px] h-1/2 bg-white animate-lineUp z-10" />

            <div className="absolute top-1/2 left-1/2 w-[2px] h-full bg-white animate-lineUpFromCenter origin-bottom z-10" />
            <div className="absolute top-1/2 left-1/2 w-[2px] h-full bg-white animate-lineDownFromCenter origin-top z-10" />
          </>
        )}

        <div className="absolute inset-0 z-20 flex flex-row px-10 py-10 overflow-y-auto">
          {/* Architecture */}
          <div className="w-1/2 flex flex-col items-center gap-10 lg:gap-16 px-6 text-center group">
            <div
              className={`w-full ${trigger ? "fade-in-delayed" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <ServiceCard
                title={t.architecture.title}
                description={t.architecture.description}
                onClick={() =>
                  document
                    .getElementById("architecture")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>

            <div
              className={`max-w-prose text-lg lg:text-sm xl:text-lg lg:gap-16 px-4 flex flex-col gap-6 ${
                trigger ? "fade-in-delayed" : "opacity-0"
              }`}
              style={{ animationDelay: "1.2s" }}
            >
              {t.architecture.blocks.map((section, i) => (
                <div className="flex flex-col gap-4" key={i}>
                  <h3>
                    <strong>{section.heading}</strong>
                  </h3>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>

            <img
              src="/picture1.png"
              alt="Architecture example"
              className={`w-[45%] rounded shadow-md ${
                trigger ? "fade-in-delayed" : "opacity-0"
              }`}
              style={{ animationDelay: "1.8s" }}
            />
          </div>

          {/* Web Development (Right Half) */}
          <div className="w-1/2 flex flex-col items-center gap-10 lg:gap-16 px-6 text-center group">
            <div
              className={`w-full ${trigger ? "fade-in-delayed" : "opacity-0"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <ServiceCard
                title={t.web.title}
                description={t.web.description}
                onClick={handleComingSoon}
              />
            </div>

            {showComingSoon && (
              <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-md shadow-lg text-sm font-semibold z-50">
                {t.web.comingSoon}
              </div>
            )}

            <img
              src="/picture4.png"
              alt="Web project"
              className={`w-[45%] rounded shadow-md ${
                trigger ? "fade-in-delayed" : "opacity-0"
              }`}
              style={{ animationDelay: "1.6s" }}
            />

            <div
              className={`max-w-prose text-lg lg:text-sm xl:text-lg lg:gap-16  flex flex-col gap-6 ${
                trigger ? "fade-in-delayed" : "opacity-0"
              }`}
              style={{ animationDelay: "1.4s" }}
            >
              {t.web.blocks.map((block, index) => (
                <div className="flex flex-col gap-6" key={index}>
                  <h3>
                    <strong>{block.heading}</strong>
                  </h3>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
