import holy from "../assets/projects/holy-summer.png";
import simon from "../assets/projects/simon-game.png";
import weather from "../assets/projects/weather-app.png";

export const projects = [
  {
    title: "Holy Summer",
    image: holy,
    highlight: "Layout moderno e responsivo",
    description:
      "Landing page focada em conversão, responsividade e boas práticas de UI.",
    techs: ["HTML", "CSS", "JavaScript"],
    live: "https://mpaullos.github.io/holy-summer/",
    repo: "https://github.com/mpaullos/holy-summer",
  },
  {
    title: "Simon Game",
    image: simon,
    highlight: "Lógica e interatividade",
    description:
      "Jogo interativo com controle de estado, eventos e feedback visual.",
    techs: ["JavaScript", "HTML", "CSS"],
    live: "https://simon-game-bice.vercel.app/",
    repo: "https://github.com/mpaullos/simon-game",
  },
  {
    title: "Weather App",
    image: weather,
    highlight: "Consumo de API",
    description:
      "Aplicação que consome API externa para dados climáticos em tempo real.",
    techs: ["Node.js", "Express", "API"],
    live: "https://glorious-elk-kit.cyclic.app/",
    repo: "https://github.com/mpaullos/WeatherProject",
  },
];
