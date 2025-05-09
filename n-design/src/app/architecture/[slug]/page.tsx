import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  console.log("Slug from URL:", params.slug);
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      {/* Renders */}
      {project.renders?.length > 0 && (
        <div className="mb-6 space-y-4">
          {project.renders.map((src, index) => (
            <img
              key={`render-${index}`}
              src={src}
              alt={`${project.title} Render ${index + 1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      )}

      {/* Plans */}
      {project.plans?.length > 0 && (
        <div className="mb-6 space-y-4">
          {project.plans.map((src, index) => (
            <img
              key={`plan-${index}`}
              src={src}
              alt={`${project.title} Plan ${index + 1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      )}

      <p className="text-lg">{project.description}</p>
    </div>
  );
}