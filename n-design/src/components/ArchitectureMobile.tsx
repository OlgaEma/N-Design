import Link from "next/link";
import { projects as projectsEn} from "@/data/projects.en";
import { projects as projectsCz} from "@/data/projects.cz"
import { useMemo } from "react";

type Props = {
  handleNavClick: (id: string, fromId?: string) => void;
  language: "en" | "cz";
};

export default function ArchitectureMobile({ handleNavClick, language }: Props) {
  const projects = useMemo(() => {
  return language === "cz" ? projectsCz : projectsEn;
}, [language]);
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center gap-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-center">Architecture</h2>

      {projects.map((project, index) => (
        <Link href={`/architecture/${project.slug}?lang=${language}`} key={project.slug} className="w-full max-w-md">
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full rounded shadow-md transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center rounded">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
            <h3 className="text-lg font-semibold text-center">{project.title}</h3>
          </div>
        </Link>
      ))}
      
    </div>
  );
}