export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  render: string;
  plan: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "modern-villa-with-the-swimming-pool",
    title: "Modern Villa with the Swimming Pool",
    thumbnail: "/projects/au-ex/render1.jpg",
    render: "/projects/au-ex/render1.jpg",
    plan: "/projects/au-ex/house-plan1.jpg",
    description: "A luxurious villa in Australia with a swimming pool.",
  },
  {
    slug: "modern-house-in-the-suburb-of-berlin",
    title: "Modern House in the Suburb of Berlin",
    thumbnail: "/projects/berlin-p1/render1.jpg",
    render: "/projects/berlin-p1/render2.jpg",
    plan: "/projects/berlin-p1/house-plan.jpg",
    description: "A modern house located in the suburbs of Berlin.",
  },
  {
    slug: "modern-house-in-australia-1",
    title: "Modern House in Australia",
    thumbnail: "",
    render: "",
    plan: "",
    description: "A modern house in Australia.",
  },
  {
    slug: "modern-house-in-australia-2",
    title: "Modern House in Australia",
    thumbnail: "",
    render: "",
    plan: "",
    description: "A modern house in Australia.",
  },
  {
    slug: "modern-villa-in-australia",
    title: "Modern Villa in Australia",
    thumbnail: "/projects/palm-cove-p1/render1.jpg",
    render: "/projects/palm-cove-p1/house-render1.jpg",
    plan: "/projects/palm-cove-p1/house-plan1.jpg",
    description: "A luxurious villa located in Palm Cove, Australia.",
  },
  {
    slug: "modern-villa-in-australia-2",
    title: "Modern Villa in Australia",
    thumbnail: "/projects/palm-cove-p2/render1.jpg",
    render: "/projects/palm-cove-p2/house-render1.jpg",
    plan: "/projects/palm-cove-p2/house-plan1.jpg",
    description: "Another luxurious villa located in Palm Cove, Australia.",
  }
];