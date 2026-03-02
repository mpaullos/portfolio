import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="
        py-24
        bg-[#FFD36E]
        border-b-4 border-black
        text-black
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Terminal */}
          <div
            className="
    bg-[#282A36]
    border-4 border-black
    shadow-[8px_8px_0_#D9B95C]
    font-jetbrains
    text-zinc-200
  "
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1E1F29] border-b-4 border-black rounded-t-md">
              <span className="w-3 h-3 bg-red-500 border border-black"></span>
              <span className="w-3 h-3 bg-yellow-400 border border-black"></span>
              <span className="w-3 h-3 bg-green-500 border border-black"></span>
              <span className="ml-4 text-xs text-zinc-300 font-semibold">
                marcos@portfolio
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 space-y-5 text-sm leading-relaxed">
              {/* whoami */}
              <p>
                <span className="text-pink-400">marcos</span>
                <span className="text-zinc-400">@</span>
                <span className="text-cyan-400">portfolio</span>
                <span className="text-zinc-400">:</span>
                <span className="text-purple-400">~</span>
                <span className="ml-2 text-green-400">$</span>
                <span className="ml-2 text-yellow-300">whoami</span>
              </p>
              <p className="text-zinc-300">{t("about.whoami")}</p>

              {/* skills */}
              <p>
                <span className="text-pink-400">marcos</span>
                <span className="text-zinc-400">@</span>
                <span className="text-cyan-400">portfolio</span>
                <span className="text-zinc-400">:</span>
                <span className="text-purple-400">~</span>
                <span className="ml-2 text-green-400">$</span>
                <span className="ml-2 text-yellow-300">skills</span>
              </p>
              <p className="text-zinc-300">{t("about.skills")}</p>

              {/* echo */}
              <p>
                <span className="text-pink-400">marcos</span>
                <span className="text-zinc-400">@</span>
                <span className="text-cyan-400">portfolio</span>
                <span className="text-zinc-400">:</span>
                <span className="text-purple-400">~</span>
                <span className="ml-2 text-green-400">$</span>
                <span className="ml-2 text-yellow-300">echo</span>
                <span className="ml-2 text-orange-400">{t("about.echo")}</span>
                <span className="inline-block w-1 h-4 bg-green-400 ml-2 animate-[blink_1s_step-end_infinite]" />
              </p>
            </div>
          </div>

          {/* Minha Jornada */}
          <div>
            <h2 className="text-3xl font-black mb-6 tracking-tight border-b-4 border-pink-400 inline-block uppercase">
              {t("about.title")}
            </h2>

            <p className="font-medium mb-4">{t("about.description-1")}</p>

            <p className="font-medium mb-4">{t("about.description-2")}</p>

            <p className="font-medium">{t("about.description-3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
