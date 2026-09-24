import { Github, Linkedin, Mail } from "lucide-react";
import { SiSpotify } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-[#DDF3F7] px-0 pt-4 pb-20 text-black md:pb-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-black uppercase tracking-tight">
              Marcos Paulo
            </p>
            <p className="font-mono text-[11px] text-[#263238]">
              FullStack Developer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1.5 border-2 border-black bg-[#FF8A65] px-2 py-1.5 font-mono text-[11px] font-bold shadow-[3px_3px_0_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none [&::-webkit-details-marker]:hidden">
                <SiSpotify size={16} />
                Playlist
                <span className="transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-3 w-full border-2 border-black bg-black p-2 shadow-[4px_4px_0_#FF8A65] sm:absolute sm:right-0 sm:bottom-8 sm:mt-0 sm:w-[352px]">
                <iframe
                  title="Marcos Paulo's Spotify playlist"
                  src="https://open.spotify.com/embed/playlist/2eDPruVaqFBEBD1c3tKFUv?utm_source=generator&theme=0"
                  className="block h-40 min-w-0 max-w-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </details>

            <span className="h-4 w-px bg-black/20" />

            <div className="flex items-center gap-1.5">
              <a
                href="https://github.com/mpaullos"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="border-2 border-black bg-black p-1.5 text-[#DDF3F7] transition-transform hover:-translate-y-1"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/mpaullos/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="border-2 border-black bg-black p-1.5 text-[#DDF3F7] transition-transform hover:-translate-y-1"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:marcos.paullo32@gmail.com"
                aria-label="Email"
                className="border-2 border-black bg-black p-1.5 text-[#DDF3F7] transition-transform hover:-translate-y-1"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

      <p className="border-t border-black/25 pt-2 font-mono text-[10px] text-[#263238] sm:text-center">
          © {new Date().getFullYear()} Marcos Paulo{" "}
          <span className="text-[#E76F51]">·</span> React{" "}
          <span className="text-[#E76F51]">·</span> TypeScript{" "}
          <span className="text-[#E76F51]">·</span> Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
