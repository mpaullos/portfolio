import { Code2, Home, Folder, Mail, User } from "lucide-react";
import { useNavbarScroll } from "../hooks/useNavbarScroll";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projetos", href: "#projects", icon: Folder },
  { label: "Contato", href: "#contact", icon: Mail },
  { label: "About", href: "#about", icon: User },
];

export default function Navbar() {
  const progress = useNavbarScroll();
  const isScrolled = progress > 0.05;

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav
        className={`
          hidden md:block
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          transition-all duration-500
          ${
            isScrolled
              ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-lg border border-black/5 dark:border-white/10"
              : "bg-transparent shadow-none border-none"
          }
          rounded-full
        `}
        style={{
          width: isScrolled ? "900px" : "1000px",
        }}
      >
        <div className="grid grid-cols-3 items-center px-8 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
            <Code2 size={22} />
            <span className="text-sm font-medium">Marcos.dev</span>
          </div>

          {/* Menu central */}
          <ul className="flex justify-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    text-sm font-medium
                    text-zinc-700 dark:text-zinc-200
                    hover:text-indigo-500
                    transition-colors
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle */}
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ================= MOBILE HEADER ================= */}
      <header
        className="
          md:hidden
          fixed top-0 inset-x-0 z-50
          flex items-center justify-between
          px-4 py-3
          bg-white/80 dark:bg-zinc-900/80
          backdrop-blur-md
          border-b border-black/5 dark:border-white/10
        "
      >
        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
          <Code2 size={20} />
          <span className="text-sm font-medium">Marcos.dev</span>
        </div>

        <ThemeToggle />
      </header>

      {/* ================= MOBILE DOCK ================= */}
      <nav
        className="
          md:hidden
          fixed bottom-0 inset-x-0 z-50
          bg-white/90 dark:bg-zinc-900/90
          backdrop-blur-xl
          border-t border-black/5 dark:border-white/10
        "
      >
        <ul className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    flex flex-col items-center gap-1
                    text-xs
                    text-zinc-600 dark:text-zinc-300
                    hover:text-indigo-500 transition
                  "
                >
                  <Icon size={22} />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
