import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound(); // show 404 if slug doesn't match

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      {project.render && (
        <img src={project.render} alt={project.title} className="mb-6 rounded shadow" />
      )}

      {project.plan && (
        <img src={project.plan} alt={`${project.title} Plan`} className="mb-6 rounded shadow" />
      )}

      <p className="text-lg">{project.description}</p>
    </div>
  );
}