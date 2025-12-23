export default function Hero() {
  return (
    <section className="relative pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <span
            className="inline-block mb-6 px-4 py-1 text-sm rounded-full
                           bg-indigo-50 text-indigo-600
                           dark:bg-indigo-500/10 dark:text-indigo-400"
          >
            Front-end Developer
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Construo interfaces
            <span className="block text-indigo-600 dark:text-indigo-400">
              modernas, acessíveis
            </span>
            e focadas em produto
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Desenvolvedor front-end com foco em React, performance e experiência
            do usuário. Busco oportunidades para criar produtos sólidos e bem
            projetados.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white
                         hover:bg-indigo-700 transition-colors"
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-zinc-300
                         dark:border-zinc-700
                         hover:bg-zinc-100 dark:hover:bg-zinc-800
                         transition-colors"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
