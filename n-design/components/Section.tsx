import React from "react";

type SectionProps = {
  id: string;
  leftContent: React.ReactNode; // <- updated
  rightContent: React.ReactNode;
  trigger?: boolean;
  refProp?: React.RefObject<HTMLDivElement | null>;
  showBackButton?: boolean;
  onBack?: () => void;
};
  
  export default function Section({
    id,
    leftContent,
    rightContent,
    trigger,
    refProp,
    showBackButton,
    onBack,
  }: SectionProps) {
    return (
      <section id={id} ref={refProp} className="relative flex h-screen w-full">
        {showBackButton && onBack && (
          <button
            onClick={onBack}
            className="absolute top-6 left-6 z-20 bg-[#FFFFF0] text-black p-2 rounded-full shadow hover:scale-105 transition"
          >
            ⬅
          </button>
        )}
  
        {/* Left Side */}
        <div className="relative w-[30%] bg-black flex items-center justify-center overflow-hidden">
            <div className="z-10">{leftContent}</div>
            {trigger && (
                <div className="absolute top-0 left-[15%] w-[70%] h-full bg-[#FFFFF0] animate-slideDown" />
            )}
        </div>
            
        {/* Right Side */}
        <div className="relative w-[70%] bg-[#FFFFF0] overflow-hidden flex items-center justify-center">
          {trigger && (
            <div className="absolute bottom-0 left-0 w-full h-full bg-black animate-slideUpOverlay z-10" />
          )}
          <div className="z-0">{rightContent}</div>
        </div>
      </section>
    );
  }

  