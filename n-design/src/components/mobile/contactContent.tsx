import lang from "@/data/lang";
import ContactForm from "@/components/ContactForm";

export default function getContactContent(language: "en" | "cz") {
  const t = lang[language].contact;

  return {
    leftContent: (
      <div className="text-center text-white font-montserrat flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{t.heading}</h2>
        <p>{t.email}</p>
        <p>{t.phone}</p>
        <p>{t.address}</p>
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