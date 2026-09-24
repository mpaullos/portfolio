export type Experience = {
  id: string;
  companyKey: string;
  roleKey: string;
  period: string;
  descriptionKey: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    id: "impactodo",
    companyKey: "experience.items.impactodo.company",
    roleKey: "experience.items.impactodo.role",
    period: "2025",
    descriptionKey: "experience.items.impactodo.description",
    stack: [
      "NextJs",
      "NodeJS",
      "TypeScript",
      "Postgres",
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Tailwind",
      "Liquid",
    ],
  },
  {
    id: "cisorise",
    companyKey: "experience.items.cisorise.company",
    roleKey: "experience.items.cisorise.role",
    period: "2024",
    descriptionKey: "experience.items.cisorise.description",
    stack: [
      "HTML",
      "CSS",
      "javaScript",
      "Liquid",
      "Bootstrap",
      "Ruby on Rails",
    ],
  },
];
