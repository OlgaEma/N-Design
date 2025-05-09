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
    title: "Architectural design for two double story family houses, Horseshoe Bay, Texas, USA",
    thumbnail: "/projects/jim-bellevue/render1.jpg",
    renders: ["/projects/jim-bellevue/render1.jpg"],
    plans: [
      "/projects/jim-bellevue/house-plan1.jpg",
      "/projects/jim-bellevue/house-plan2.jpg",
    ],
    description: "A modern double-story residential project in Horseshoe Bay, Texas.",
  },
  {
    slug: "texas-multifamily-building",
    title: "Architectural design for residential multifamily building on the corner, Horseshoe Bay, Texas, USA",
    thumbnail: "/projects/jim-p2/render1.jpg",
    renders: ["/projects/jim-p2/render1.jpg"],
    plans: [
      "/projects/jim-p2/house-plan-floor1.jpg",
      "/projects/jim-p2/house-plan-floor2.jpg",
    ],
    description: "Multifamily residential design located on a prominent corner site in Texas.",
  },
  {
    slug: "berlin-house-addition",
    title: "Architectural design for house addition, Berlin, Germany",
    thumbnail: "/projects/berlin-p1/render-1.jpg",
    renders: [
      "/projects/berlin-p1/render-1.jpg",
      "/projects/berlin-p1/render-2.jpg",
      "/projects/berlin-p1/render-3.jpg",
      "/projects/berlin-p1/render-4.jpg",
    ],
    plans: ["/projects/berlin-p1/house-plan.jpg"],
    description: "A house addition designed for a property in the suburbs of Berlin.",
  },
  {
    slug: "australia-family-house",
    title: "Architectural design for single family house, Australia",
    thumbnail: "/projects/au-ex/render-1.jpg",
    renders: ["/projects/au-ex/render-1.jpg"],
    plans: ["/projects/au-ex/house-plan1.jpg"],
    description: "A contemporary family home in Australia.",
  },
  {
    slug: "palm-cove-lot-37",
    title: "Architectural design for single family house, Palm cove lot 37, Australia",
    thumbnail: "/projects/palm-cove-p2/render1.jpg",
    renders: ["/projects/palm-cove-p2/render1.jpg"],
    plans: ["/projects/palm-cove-p2/house-plan1.jpg"],
    description: "Modern villa located in Palm Cove, Lot 37, designed for luxury living.",
  },
  {
    slug: "palm-cove-lot-35",
    title: "Architectural design for single family house, Palm cove lot 35, Australia",
    thumbnail: "/projects/palm-cove-p1/render1.jpg",
    renders: ["/projects/palm-cove-p1/render1.jpg"],
    plans: ["/projects/palm-cove-p1/house-plan1.jpg"],
    description: "Elegant villa in Palm Cove, Lot 35, designed with comfort and functionality in mind.",
  },
];