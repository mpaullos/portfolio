import { Github, Linkedin, Mail } from "lucide-react";
import { SiReact, SiVercel, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase">Conecte-se</h3>

            <div className="flex gap-6">
              <a
                href="https://github.com/mpaullos"
                target="_blank"
                className="
                  bg-white text-black
                  border-4 border-black
                  p-4
                  shadow-[6px_6px_0_#85EEAB]
                  hover:translate-x-1 hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                <Github size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/mpaullos/"
                target="_blank"
                className="
                  bg-white text-black
                  border-4 border-black
                  p-4
                  shadow-[6px_6px_0_#85EEAB]
                  hover:translate-x-1 hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                <Linkedin size={28} />
              </a>

              <a
                href="mailto:marcos.paullo32@gmail.com"
                className="
                  bg-white text-black
                  border-4 border-black
                  p-4
                  shadow-[6px_6px_0_#85EEAB]
                  hover:translate-x-1 hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Tech stack info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase">Stack</h3>

            <div className="bg-white text-black border-4 border-black p-6 shadow-[8px_8px_0_#60A4FA] space-y-3">
              <p className="font-mono text-sm">
                Built with <SiReact className="inline" size={16} /> React
              </p>
              <p className="font-mono text-sm">
                Styled with <SiTailwindcss className="inline" size={16} />{" "}
                TailwindCSS
              </p>
              <p className="font-mono text-sm">
                Deployed on <SiVercel className="inline" size={16} /> Vercel
              </p>
            </div>
          </div>

          {/* Spotify */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase">Random Playlist</h3>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0_#FF9CE1] p-4">
              <iframe
                style={{ borderRadius: "0px" }}
                src="https://open.spotify.com/embed/playlist/2eDPruVaqFBEBD1c3tKFUv?utm_source=generator&theme=0"
                className="w-full h-40"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t-2 border-white text-center lg:mb-0 mb-10">
          <p className="font-mono text-sm">
            © {new Date().getFullYear()} Marcos Paulo — Built with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
}
