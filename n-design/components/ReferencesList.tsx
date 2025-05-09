"use client";
import { projects } from "@/data/projects";
import Link from "next/link";

type Props = {
  hoveredSlug: string | null;
  setHoveredSlug: (slug: string | null) => void;
  trigger: boolean;
};

export default function ReferencesList({ hoveredSlug, setHoveredSlug, trigger }: Props) {
  return (
    <div className="text-xl gap-10 flex flex-col px-6 text-center">
      {projects.map((project, index) => {
        const delay = (1 + index * 0.2 + Math.random() * 0.3).toFixed(3); // base + index + small randomness
        return (
            <Link
                key={project.slug}
                href={`/architecture/${project.slug}`}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className={`cursor-pointer transition duration-300 block ${
                    hoveredSlug === project.slug ? "text-pink-400 scale-105" : ""
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