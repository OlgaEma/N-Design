export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  renders: string[];
  plans: string[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "texas-family-houses",
    title: "Architektonický návrh dvoupatrových rodinných domů, Horseshoe Bay, Texas, USA",
    thumbnail: "/projects/jim-bellevue/render1.jpg",
    renders: ["/projects/jim-bellevue/render1.jpg"],
    plans: [
      "/projects/jim-bellevue/house-plan1.jpg",
      "/projects/jim-bellevue/house-plan2.jpg",
    ],
    description: "Moderní dvoupodlažní obytný projekt v Horseshoe Bay, Texas.",
  },
  {
    slug: "texas-multifamily-building",
    title: "Architektonický návrh obytné vícegenerační budovy na rohovém pozemku, Horseshoe Bay, Texas, USA",
    thumbnail: "/projects/jim-p2/render1.jpg",
    renders: ["/projects/jim-p2/render1.jpg"],
    plans: [
      "/projects/jim-p2/house-plan-floor1.jpg",
      "/projects/jim-p2/house-plan-floor2.jpg",
    ],
    description: "Návrh vícegenerační obytné budovy na výrazném rohovém pozemku v Texasu.",
  },
  {
    slug: "berlin-house-addition",
    title: "Architektonický návrh přístavby rodinného domu, Berlín, Německo",
    thumbnail: "/projects/berlin-p1/render-1.jpg",
    renders: [
      "/projects/berlin-p1/render-1.jpg",
      "/projects/berlin-p1/render-2.jpg",
      "/projects/berlin-p1/render-3.jpg",
      "/projects/berlin-p1/render-4.jpg",
    ],
    plans: ["/projects/berlin-p1/house-plan.jpg"],
    description: "Přístavba domu navržená pro nemovitost na předměstí Berlína.",
  },
  {
    slug: "australia-family-house",
    title: "Architektonický návrh rodinného domu, Austrálie",
    thumbnail: "/projects/au-ex/render-1.jpg",
    renders: ["/projects/au-ex/render-1.jpg"],
    plans: ["/projects/au-ex/house-plan1.jpg"],
    description: "Současný rodinný dům navržený v Austrálii.",
  },
  {
    slug: "palm-cove-lot-37",
    title: "Architektonický návrh rodinného domu, Palm Cove, parcela 37, Austrálie",
    thumbnail: "/projects/palm-cove-p2/render1.jpg",
    renders: ["/projects/palm-cove-p2/render1.jpg"],
    plans: ["/projects/palm-cove-p2/house-plan1.jpg"],
    description: "Moderní vila navržená pro luxusní bydlení v lokalitě Palm Cove, parcela 37.",
  },
  {
    slug: "palm-cove-lot-35",
    title: "Architektonický návrh rodinného domu, Palm Cove, parcela 35, Austrálie",
    thumbnail: "/projects/palm-cove-p1/render1.jpg",
    renders: ["/projects/palm-cove-p1/render1.jpg"],
    plans: ["/projects/palm-cove-p1/house-plan1.jpg"],
    description: "Elegantní vila v lokalitě Palm Cove, parcela 35, navržená pro pohodlí a funkčnost.",
  },
];