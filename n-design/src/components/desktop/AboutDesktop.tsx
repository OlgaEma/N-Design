'use client'

import { RefObject } from 'react'
import lang from "@/data/lang";

interface Props {
  language: 'en' | 'cz'
  trigger: boolean
  refProp: RefObject<HTMLDivElement | null>
}

export default function AboutDesktop({ language, trigger, refProp }: Props) {
  const content = lang[language].about

  return (
    <section
      id="about"
      ref={refProp}
      className="relative w-full h-screen overflow-hidden flex"
    >
      {/* LEFT CONTENT */}
      <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
        {trigger && (
          <div className="absolute top-0 left-0 w-[8%] h-full bg-white animate-slideDown z-0" />
        )}
        <div className="relative z-10 w-full h-full px-6 py-10 flex flex-col justify-around text-white font-montserrat gap-10">
          <h2
            className={`text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-center ${
              trigger ? 'fade-in-delayed' : 'opacity-0'
            }`}
            style={trigger ? { animationDelay: '0.5s' } : {}}
          >
            {content.heading}
          </h2>

          <div className="left-text px-5 pl-10 flex flex-col gap-10 text-center text-base max-w-prose text-lg lg:text-sm xl:text-lg">
            {content.paragraphs.map((text, i) => (
              <p
                key={i}
                className={trigger ? 'fade-in-delayed' : 'opacity-0'}
                style={{ animationDelay: `${1.1 + i * 0.3}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div
            className={`flex justify-center ${
              trigger ? 'fade-in-delayed' : 'opacity-0'
            }`}
            style={{ animationDelay: '2.1s' }}
          >
            <img
              src={content.logoSrc}
              alt="N-design logo"
              className="w-[30%]"
            />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-full h-full bg-black text-white font-montserrat overflow-hidden">
        {/* LINES */}
        {trigger && (
          <>
            <div className="absolute top-0 left-0 w-[2px] h-1/2 bg-white animate-lineDown z-10" />
            <div className="absolute bottom-0 left-0 w-[2px] h-1/2 bg-white animate-lineUp z-10" />
            <div className="absolute top-1/2 left-0 h-[2px] w-0 bg-white animate-horizontalSplit z-10" />
            <div className="absolute top-1/2 left-1/2 w-[2px] h-full bg-white animate-lineUpFromCenter origin-bottom z-10" />
            <div className="absolute top-1/2 left-1/2 w-[2px] h-full bg-white animate-lineDownFromCenter origin-top z-10" />
          </>
        )}

        {/* MAIN */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between px-10 py-10 overflow-y-auto">
          {/* Natasha */}
          <div className="h-1/2 px-5 flex flex-row justify-around gap-5 group">
            <div className="flex flex-col items-center gap-6">
              <img
                src={content.natasha.image}
                alt="Natasha"
                className={`rounded-full object-cover shadow-md shrink-0 ${
                  trigger ? 'fade-in-delayed' : 'opacity-0'
                }`}
                style={{
                  width: '15vw',
                  height: '15vw',
                  maxWidth: '180px',
                  maxHeight: '180px',
                  animationDelay: trigger ? '0.6s' : '0s',
                }}
              />
              <p
                className={`text-lg font-semibold md:text-base lg:text-lg ${
                  trigger ? 'fade-in-delayed' : 'opacity-0'
                }`}
                style={trigger ? { animationDelay: '0.9s' } : {}}
              >
                {content.natasha.title}
              </p>
              <blockquote
                className={`italic text-base 2xl:text-sm xl:text-xs lg:text-xs border rounded px-4 py-2 border-white text-center break-words max-w-[280px] w-full mx-auto ${
                  trigger ? 'fade-in-delayed' : 'opacity-0'
                }`}
                style={trigger ? { animationDelay: '0.9s' } : {}}
              >
                {content.natasha.quote}
              </blockquote>
            </div>

            <div
              className={`fade-in-delayed ${
                trigger ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-500`}
            >
              <div className="flex flex-col items-center px-15 gap-3 justify-center max-w-prose text-lg lg:text-sm xl:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
                {content.natasha.paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Nedeljko */}
          <div className="h-1/2 px-5 flex flex-row justify-around gap-10 group mt-10">
            <div className="group">
              <div
                className={`fade-in-delayed ${
                  trigger ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
              >
                <div className="flex flex-col items-center px-15 pt-10 gap-3 justify-center max-w-prose text-lg lg:text-sm xl:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
                  {content.nedeljko.paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-10 items-center gap-6">
              <img
                src={content.nedeljko.image}
                alt="Nedeljko"
                className={`rounded-full object-cover object-top shadow-md shrink-0 opacity-0 ${
                  trigger ? 'fade-in-delayed' : ''
                }`}
                style={{
                  width: '15vw',
                  height: '15vw',
                  maxWidth: '180px',
                  maxHeight: '180px',
                  animationDelay: trigger ? '0.9s' : '0s',
                }}
              />
              <p
                className={`text-lg font-semibold md:text-base lg:text-lg ${
                  trigger ? 'fade-in-delayed' : 'opacity-0'
                }`}
                style={trigger ? { animationDelay: '0.9s' } : {}}
              >
                {content.nedeljko.title}
              </p>
              <blockquote
                className={`italic text-base 2xl:text-sm xl:text-xs lg:text-xs border rounded px-4 py-2 border-white text-center break-words max-w-[280px] w-full mx-auto ${
                  trigger ? 'fade-in-delayed' : 'opacity-0'
                }`}
                style={trigger ? { animationDelay: '0.9s' } : {}}
              >
                {content.nedeljko.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}