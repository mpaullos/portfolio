import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import GradientText from "../components/GradientText";
import LogoLoop from "../components/LogoLoop";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* Name */}
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              I'm Marcos Paulo
            </p>

            {/* Gradient Title */}
            <GradientText
              animationSpeed={5}
              className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
            >
              FullStack Developer
            </GradientText>

            {/* Social Icons */}
            <div className="mt-10 flex gap-6">
              <a
                href="https://github.com/mpaullos"
                target="_blank"
                aria-label="GitHub"
                className="p-3 rounded-full border border-zinc-300 dark:border-zinc-700
                           hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all
                           hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/mpaullos"
                target="_blank"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-zinc-300 dark:border-zinc-700
                           hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all
                           hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="mailto:seuemail@email.com"
                aria-label="Email"
                className="p-3 rounded-full border border-zinc-300 dark:border-zinc-700
                           hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all
                           hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-zinc-800 dark:text-zinc-200">
              I build reliable, scalable and user-focused digital experiences,
              turning ideas into clean and efficient products.
            </p>
          </div>
        </div>
      </div>

      {/* STACKS BELOW HERO */}
      <div className="mt-24 max-w-6xl mx-auto px-6 w-full">
        <div className="relative h-30 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={48}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </section>
  );
}
