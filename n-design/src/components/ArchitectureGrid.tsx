import Link from "next/link";
import { projects as projectsEn } from "@/data/projects.en";
import { projects as projectsCz}  from "@/data/projects.cz";
import { useMemo } from "react";

type Props = {
  hoveredSlug: string | null;
  trigger: boolean;
  language: "en" | "cz";
};
export default function ArchitectureGrid({ hoveredSlug, trigger, language }: Props) {
  const projects = useMemo(() => {
  return language === "cz" ? projectsCz : projectsEn;
}, [language]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <Link key={project.slug} href={`/architecture/${project.slug}?lang=${language}`}>
      <div
        className={`group cursor-pointer transform transition duration-500 ${
          hoveredSlug === project.slug ? "scale-105 " : ""
        } ${trigger ? "fade-in-delayed" : "opacity-0"}`}
        style={trigger ? { animationDelay: `${index * 0.2}s` } : {}}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="rounded shadow-md w-full h-auto "
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        
      </div>
    </Link>
  ))}
</div>
  );
}