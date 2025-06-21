import lang from "@/data/lang";

export default function getAboutContent(language: "en" | "cz") {
  const t = lang[language].about;

  return {
    leftContent: (
      <div className="text-sm flex flex-col gap-4 text-center max-w-prose px-4 mx-auto">
        <h2 className="text-xl font-bold text-center mb-2">{t.heading}</h2>
        {t.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    ),

    natashaBlock: (
      <div className="flex flex-col items-center gap-6 text-center text-white">
        <img
          src="/Natasha.jpg"
          alt="Natasha"
          className="w-28 h-28 object-cover rounded-full shadow-md"
        />
        <p className="text-sm font-semibold leading-snug">
          {t.natasha.name}
          <br />
          {t.natasha.title}
        </p>
        <blockquote className="italic text-sm max-w-prose px-4 py-2 border-l-4 border-white rounded bg-white/10">
          {t.natasha.quote}
        </blockquote>
        <div className="text-sm flex flex-col gap-3 text-left max-w-prose px-4">
          {t.natasha.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    ),

    nedeljkoBlock: (
      <div className="flex flex-col items-center gap-6 text-center text-white">
        <img
          src="/Nedeljko.jpg"
          alt="Nedeljko"
          className="w-28 h-28 object-cover rounded-full shadow-md"
        />
        <p className="text-sm font-semibold leading-snug whitespace-pre-line">
          {t.nedeljko.name}
          <br />
          {t.nedeljko.title}
        </p>
        <blockquote className="italic text-xs max-w-prose px-4 py-2 border-l-4 border-white rounded bg-white/5">
          {t.nedeljko.quote}
        </blockquote>
        <div className="text-sm flex flex-col gap-3 text-left max-w-prose px-4">
          {t.nedeljko.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    ),

    logo: <img src="/ND_white_02@4x.png" alt="N-design" className="w-24 mx-auto" />,
  };
}