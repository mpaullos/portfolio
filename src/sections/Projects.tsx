import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-14">
          <h2 className="text-3xl font-bold mb-2">Projetos selecionados</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
            Alguns trabalhos que demonstram minha experiência com front-end,
            boas práticas e foco em resultado.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group relative p-6 rounded-2xl
                border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  mb-5 rounded-xl 
                  border border-zinc-200 dark:border-zinc-800
                  group-hover:scale-[1.02]
                  transition-transform duration-300
                "
              />
              {/* Highlight */}
              <span
                className="
                  inline-block mb-3 text-xs font-medium
                  text-indigo-600 dark:text-indigo-400
                "
              >
                {project.highlight}
              </span>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs px-2 py-1 rounded-md
                      bg-zinc-100 dark:bg-zinc-800
                      text-zinc-700 dark:text-zinc-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href={project.live}
                  target="_blank"
                  className="
                    text-indigo-600 dark:text-indigo-400
                    hover:underline
                  "
                >
                  Ver projeto
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  className="
                    text-zinc-600 dark:text-zinc-400
                    hover:underline
                  "
                >
                  Código
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
