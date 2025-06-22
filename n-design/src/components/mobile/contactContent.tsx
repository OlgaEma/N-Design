import lang from "@/data/lang";
import ContactForm from "@/components/ContactForm";

export default function getContactContent(language: "en" | "cz") {
  const t = lang[language].contact;

  return {
    leftContent: (
      <div className="relative z-10 w-full px-4 flex flex-col items-center gap-20 text-white font-montserrat">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center fade-in-delayed">{t.heading}</h2>
        <div className="px-4 flex flex-col gap-4 text-center text-lg lg:text-sm xl:text-lg">
        <p>{t.email}</p>
        <p>{t.phone}</p>
        <p>{t.address}</p>
        <p>{t.name}</p>
        <p>{t.ico}</p>
        </div>
      </div>
    ),

    rightContentBlocks: [
      <div className="w-full flex justify-center items-center" key="form">
        <div className="w-full max-w-xl px-4">
          <ContactForm trigger={true} language={language} />
        </div>
      </div>,
    ],
  };
}