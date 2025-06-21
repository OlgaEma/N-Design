import lang from "@/data/lang";
import ServiceCard from "@/components/ServiceCard";
import { Language } from "@/data/lang";

export default function getServicesContent(language: Language, handleNavClick?: (id: string, fromId?: string) => void) {
  const t = lang[language].services;

  const leftContent = (
    <div className="text-sm flex flex-col gap-4 text-center max-w-prose px-4 mx-auto">
      <h2 className="text-xl font-bold text-center mb-2">{t.heading}</h2>
      {t.paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );

  const architectureBlock = (
    <div className="flex flex-col items-center gap-8 px-6 text-center group" key="architecture">
      <ServiceCard
        title={t.architecture.title}
        description={t.architecture.description}
        onClick={() => handleNavClick?.("architecture", "services")}
      />

      <div className="text-sm flex flex-col gap-3 text-left max-w-prose px-4">
        {t.architecture.blocks.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h3><strong>{group.heading}</strong></h3>
            <p>{group.text}</p>
          </div>
        ))}
      </div>

      <img src="/picture1.png" alt="Architecture example" className="w-[45%] rounded shadow-md" />
    </div>
  );

  const webBlock = (
    <div className="flex flex-col items-center gap-8 px-6 text-center group" key="web">
      <ServiceCard
        title={t.web.title}
        description={t.web.description}
        onClick={() => handleNavClick?.("web", "services")}
      />

      <div className="text-sm flex flex-col gap-3 text-left max-w-prose px-4">
        {t.web.blocks.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h3><strong>{group.heading}</strong></h3>
            <p>{group.text}</p>
          </div>
        ))}
      </div>

      <img src="/picture4.png" alt="Web project" className="w-[45%] rounded shadow-md" />
    </div>
  );

  return {
    leftContent,
    rightContentBlocks: [architectureBlock, webBlock],
  };
}