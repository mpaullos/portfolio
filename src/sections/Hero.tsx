import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiRubyonrails,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiVite,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiPython,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { useTranslation } from "react-i18next";

const techLogos = [
  { icon: <SiReact />, title: "React" },
  { icon: <SiNextdotjs />, title: "Next.js" },
  { icon: <SiTypescript />, title: "TypeScript" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS" },
  { icon: <SiBootstrap />, title: "Bootstrap" },
  { icon: <SiJavascript />, title: "JavaScript" },
  { icon: <SiRubyonrails />, title: "Ruby on Rails" },
  { icon: <SiFigma />, title: "Figma" },
  { icon: <SiGit />, title: "Git" },
  { icon: <SiGithub />, title: "GitHub" },
  { icon: <SiPython />, title: "Python" },
  { icon: <SiDocker />, title: "Docker" },
  { icon: <SiLinux />, title: "Linux" },
  { icon: <SiVite />, title: "Vite" },
  { icon: <SiNodedotjs />, title: "Node.js" },
  { icon: <SiPostgresql />, title: "PostgreSQL" },
  { icon: <SiMongodb />, title: "MongoDB" },
  { icon: <SiHtml5 />, title: "HTML5" },
  { icon: <SiCss3 />, title: "CSS3" },
  { icon: <SiSpringboot />, title: "Spring Boot" },
];

const socialLinks = [
  {
    icon: <Github />,
    href: "https://github.com/mpaullos",
  },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/mpaullos/" },
  { icon: <Mail />, href: "mailto:marcos.paullo32@gmail.com" },
];

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="relative  flex flex-col justify-center pt-32  inset-0 bg-size-[40px_40px] bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* RIGHT SIDE (FOTO) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="
        w-[320px] h-100
        bg-white
        border-4 border-black
        shadow-[10px_10px_0px_0px_black]
        flex items-center justify-center
        text-black font-bold
      "
            >
              <img
                src="./profile/profile_01.jpg"
                alt="Marcos Paulo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* LEFT SIDE (TEXTO) */}
          <div className="order-2 lg:order-1">
            <p className="text-lg font-medium text-black dark:text-white">
              {t("hero.greeting")}
            </p>

            <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              {t("hero.role")}
            </h1>

            <p className="mt-5">{t("hero.description")}</p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="
            p-3
            bg-white
            border-4 border-black
            shadow-[4px_4px_0px_0px_black]
            transition-all duration-150
            hover:translate-x-1 hover:translate-y-1
            hover:shadow-none
          "
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-6">
              <Button
                className="
          bg-yellow-300
          border-4 border-black
          shadow-[6px_6px_0px_0px_black]
          font-bold text-black
          hover:translate-x-1 hover:translate-y-1
          hover:shadow-none
        "
              >
                <a href="#projects">{t("hero.projects")}</a>
              </Button>

              <Button
                className="
          bg-pink-400
          border-4 border-black
          shadow-[6px_6px_0px_0px_black]
          font-bold text-black
          hover:translate-x-1 hover:translate-y-1
          hover:shadow-none
        "
              >
                <a href="#contact">{t("hero.contact")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* STACKS BELOW HERO */}
      <div className="relative mt-10 left-1/2 -translate-x-1/2 w-full overflow-hidden">
        <Marquee items={techLogos} />
      </div>
    </section>
  );
}
