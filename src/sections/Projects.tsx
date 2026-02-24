import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-24
        border-b-4 border-black dark:border-white
         bg-[#8FB8FF] dark:bg-black
        text-black dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-14">
          <h2 className="text-5xl text-center uppercase font-black mb-2 tracking-tight">
            Projetos selecionados
          </h2>
          <p className="font-medium text-center">
            Alguns trabalhos que demonstram minha experiência com front-end,
            boas práticas e foco em resultado.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group relative p-6
                bg-white dark:bg-black
                border-4 border-black dark:border-white
                transition-all duration-150
                shadow-[6px_6px_0_#000]
                dark:shadow-[6px_6px_0_#fff]
                hover:translate-x-0.5
                hover:translate-y-0.5
                hover:shadow-[4px_4px_0_#000]
                dark:hover:shadow-[4px_4px_0_#fff]
              "
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  mb-5
                  border-4 border-black dark:border-white
                "
              />

              {/* Highlight */}
              <span
                className="
                  inline-block mb-4
                  text-xs font-black
                  bg-yellow-300
                  text-black
                  px-2 py-1
                  border-2 border-black
                "
              >
                {project.highlight}
              </span>

              {/* Title */}
              <h3 className="text-xl font-black mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-sm font-medium mb-5">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs font-bold
                      px-2 py-1
                      border-2 border-black dark:border-white
                      bg-white dark:bg-black
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 text-sm font-black">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#60A4FA]">
                    <Github />
                    Código
                  </Button>
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#4BDD7F]">
                    <ExternalLink />
                    Ver projeto
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
