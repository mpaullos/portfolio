import { Github, ExternalLink, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type ProjectsProps = {
  showAll?: boolean;
};

export default function Projects({ showAll = false }: ProjectsProps) {
  const { t } = useTranslation();
  const visibleProjects = showAll
    ? projects
    : projects.filter((project) => project.tags.includes("pinned")).slice(0, 3);
  return (
    <section
      id="projects"
      className="
        py-24 md:py-28
        border-b-4 border-black dark:border-white
         bg-[#8FB8FF] dark:bg-black
        text-black dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className={showAll ? "mb-16" : "mb-14"}>
          <h2
            className={`${
              showAll ? "text-5xl md:text-7xl" : "text-5xl"
            } text-center uppercase font-black mb-2 tracking-tight`}
          >
            {t("projects.title")}
          </h2>
          <p className="font-medium text-center max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </header>

        <div
          className={`grid gap-10 ${
            showAll ? "md:grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleProjects.map((project, index) => (
            <article
              key={`${project.id}-${index}`}
              className={`
                group relative p-6 md:p-8
                bg-white dark:bg-black
                border-4 border-black dark:border-white
                transition-all duration-150
                shadow-[6px_6px_0_#000]
                dark:shadow-[6px_6px_0_#fff]
                hover:translate-x-0.5
                hover:translate-y-0.5
                hover:shadow-[4px_4px_0_#000]
                dark:hover:shadow-[4px_4px_0_#fff]
                ${showAll ? "md:grid md:grid-cols-2 md:gap-8 md:items-center" : ""}
              `}
            >
              {/* Image */}
              <div
                className={`
                  overflow-hidden border-4 border-black dark:border-white
                  ${showAll ? "mb-6 md:mb-0" : "mb-6"}
                  ${
                    showAll && index % 2 === 0
                      ? "md:order-2"
                      : "md:order-1"
                  }
                `}
              >
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="
                    w-full aspect-video object-center
                    transition-transform duration-500 ease-out
                    group-hover:scale-105
                  "
                />
              </div>

              <div
                className={
                  showAll && index % 2 === 0 ? "md:order-1" : "md:order-2"
                }
              >
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
                  {t(project.highlightKey)}
                </span>

                {/* Title */}
                <h3
                  className={`${
                    showAll ? "text-2xl md:text-4xl" : "text-xl"
                  } font-black mb-2`}
                >
                  {t(project.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium mb-5">
                  {t(project.descriptionKey)}
                </p>

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
                  {project.tags.includes("private") ? (
                    <Button type="button" className="bg-[#60A4FA]" disabled>
                      <Lock />
                      {t("projects.private")}
                    </Button>
                  ) : (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#60A4FA]">
                        <Github />
                        {t("projects.code")}
                      </Button>
                    </a>
                  )}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#4BDD7F]">
                      <ExternalLink />
                      {t("projects.visit")}
                    </Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <Button asChild className="bg-[#FB64B5]">
              <Link to="/projects">
                {t("projects.seeMore")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
