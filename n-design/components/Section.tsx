import React from "react";

type SectionProps = {
  id: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  trigger?: boolean;
  refProp?: React.RefObject<HTMLDivElement | null>;
  showBackButton?: boolean;
  onBack?: () => void;
  customLayout?: boolean; // <-- NEW
};
  
export default function Section({
  id,
  leftContent,
  rightContent,
  trigger,
  refProp,
  showBackButton,
  onBack,
  customLayout = false, // default to false
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

      {customLayout ? (
        // Use custom layout directly (e.g., handled entirely from Home)
        <>
          {leftContent}
          {rightContent}
        </>
      ) : (
        // DEFAULT layout (used by Services, Architecture, etc.)
        <>
          <div className="relative w-[30%] bg-black overflow-hidden flex items-center justify-center">
            {trigger && (
              <div className="absolute top-0 left-0 w-[8%] h-full bg-[#FFFFFF] animate-slideDown z-0" />
            )}
            <div className="relative z-10 w-full h-full px-6 py-10 flex flex-col justify-between text-[#FFFFFF]">
              {leftContent}
            </div>
          </div>

          <div className="relative w-[70%] bg-black overflow-hidden flex items-center justify-center">
            <div className="z-0">{rightContent}</div>
          </div>
        </>
      )}
    </section>
  );
}

  