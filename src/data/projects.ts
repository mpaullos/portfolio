import mpos from "../assets/projects/mpos-portfolio.png";
import holy from "../assets/projects/holy-summer.png";
import simon from "../assets/projects/simon-game.png";
import weather from "../assets/projects/weather-app.png";

export type Project = {
  id: string;
  titleKey: string;
  image: string;
  highlightKey: string;
  descriptionKey: string;
  techs: string[];
  live: string;
  repo?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "mpos-portfolio",
    titleKey: "projects.items.mposPortfolio.title",
    image: mpos,
    highlightKey: "projects.items.mposPortfolio.highlight",
    descriptionKey: "projects.items.mposPortfolio.description",
    techs: ["TypeScript", "Tailwind CSS", "React", "Vite"],
    live: "https://mpos-portfolio.vercel.app/",
    repo: "#",
    tags: ["pinned", "private"],
  },
  {
    id: "holy-summer",
    titleKey: "projects.items.holySummer.title",
    image: holy,
    highlightKey: "projects.items.holySummer.highlight",
    descriptionKey: "projects.items.holySummer.description",
    techs: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://mpaullos.github.io/holy-summer/",
    repo: "https://github.com/mpaullos/holy-summer",
    tags: ["pinned"],
  },
  {
    id: "weather-app",
    titleKey: "projects.items.weatherApp.title",
    image: weather,
    highlightKey: "projects.items.weatherApp.highlight",
    descriptionKey: "projects.items.weatherApp.description",
    techs: ["Node.js", "Express", "API"],
    live: "https://weather-project-snowy-nine.vercel.app/",
    repo: "https://github.com/mpaullos/WeatherProject",
    tags: ["pinned"],
  },
  {
    id: "simon-game",
    titleKey: "projects.items.simonGame.title",
    image: simon,
    highlightKey: "projects.items.simonGame.highlight",
    descriptionKey: "projects.items.simonGame.description",
    techs: ["JavaScript", "HTML", "CSS"],
    live: "https://simon-game-bice.vercel.app/",
    repo: "https://github.com/mpaullos/simon-game",
    tags: ["pinned"],
  },
];
