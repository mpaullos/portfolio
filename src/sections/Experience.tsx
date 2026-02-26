import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        py-20
        bg-white dark:bg-zinc-950
        border-b-4 border-black dark:border-white
        text-black dark:text-white
        bg-size-[40px_40px]
        bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]
      "
    >
      <div className="max-w-350 mx-auto px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-5xl font-black tracking-tight">
            Experiência{" "}
            <span className="underline decoration-4 decoration-black dark:decoration-white">
              Profissional
            </span>
          </h2>
          <p className="mt-4 font-medium max-w-2xl mx-auto">
            Um resumo das experiências que contribuíram para minha evolução
            técnica e profissional.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative space-y-16">
          {/* Linha central */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-black dark:bg-white -translate-x-1/2"></div>

          {experience.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[48%]">
                <div
                  className="
                    bg-white dark:bg-zinc-900
                    border-4 border-black dark:border-white
                    shadow-[6px_6px_0_#FF9CE1]
                    hover:shadow-[10px_10px_0_#000]
                    hover:bg-[#FF9CE1]
                    dark:hover:bg-[#FF9CE1]
                    hover:-translate-y-1
                    transition-all duration-200
                    p-8
                  "
                >
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-black uppercase border-b-4 border-black dark:border-white inline-block mb-2">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-sm font-semibold">
                        {exp.role}
                      </p>
                    </div>

                    <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 font-mono text-xs font-bold whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mb-6 font-medium leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          text-xs font-bold uppercase
                          border-2 border-black dark:border-white
                          px-2 py-1
                          bg-[#85EEAB]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-8 h-8 bg-[#FF9CE1] border-4 border-black dark:border-white rounded-full z-10 transition-transform duration-200 hover:scale-110"></div>
              </div>

              <div className="w-full md:w-[48%] hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
