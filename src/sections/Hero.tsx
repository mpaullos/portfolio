import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";

const techLogos = [
  { icon: <SiReact />, title: "React" },
  { icon: <SiNextdotjs />, title: "Next.js" },
  { icon: <SiTypescript />, title: "TypeScript" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32  inset-0 bg-size-[40px_40px] bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-white dark:bg-zinc-950">
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
                src="/foto.jpg"
                alt="Marcos Paulo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* LEFT SIDE (TEXTO) */}
          <div className="order-2 lg:order-1">
            <p className="text-lg font-medium text-black">I'm Marcos Paulo</p>

            <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              FullStack Developer
            </h1>

            <p className="mt-5">
              I like coffee and building web applications. I use Arch btw.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-6">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
            p-3
            bg-white
            border-4 border-black
            shadow-[4px_4px_0px_0px_black]
            transition-all duration-150
            hover:translate-x-1 hover:translate-y-1
            hover:shadow-none
          "
                >
                  <Icon className="w-6 h-6 text-black" />
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
                View Projects
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
                Contact Me
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
