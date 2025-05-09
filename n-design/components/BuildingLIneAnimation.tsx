"use client";
import { useEffect, useRef } from "react";

type BuildingLineAnimationProps = {
  trigger: boolean;
};

export default function BuildingLineAnimation({ trigger }: BuildingLineAnimationProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (trigger && pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;
      pathRef.current.classList.add("path-draw");
    }
  }, [trigger]);

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M 50 150 L 50 100 A 25 25 0 0 1 100 100 L 100 150 M 100 150 L 150 150 M 150 150 L 150 110 A 15 15 0 0 1 180 100 L 180 150"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}