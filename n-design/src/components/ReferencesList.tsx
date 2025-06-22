"use client";
import { projects as projectsEn} from "@/data/projects.en";
import {projects as projectsCz} from "@/data/projects.cz"
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  language: "en" | "cz";
  hoveredSlug: string | null;
  setHoveredSlug: (slug: string | null) => void;
  trigger: boolean;
};


export default function ReferencesList({ hoveredSlug, setHoveredSlug, trigger, language }: Props) {
  const projects = useMemo(() => {
  return language === "cz" ? projectsCz : projectsEn;
}, [language]);
  return (
    <div className="text-xl gap-12 flex flex-col px-4 text-center text-lg lg:text-sm xl:text-lg">
      {projects.map((project, index) => {
        const delay = (1 + index * 0.2 + Math.random() * 0.3).toFixed(3); // base + index + small randomness
        return (
            <Link
                key={project.slug}
                href={`/architecture/${project.slug}?lang=${language}`}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className={`cursor-pointer transition duration-300 block ${
                    hoveredSlug === project.slug ? "text-gray-400 scale-105" : ""
                } ${trigger ? "fade-in-delayed" : "opacity-0"}`}
                style={trigger ? { animationDelay: `${delay}s` } : {}}
                >
                {project.title}
                </Link>
        );
      })}
    </div>
  );
}