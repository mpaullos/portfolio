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
        className="
          hidden md:block
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          bg-yellow-300
          border-4 border-black
          shadow-[8px_8px_0px_0px_black]
          transition-all duration-300
        "
        style={{
          width: isScrolled ? "850px" : "950px",
        }}
      >
        <div className="grid grid-cols-3 items-center px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 font-bold text-black">
            <Code2 size={24} strokeWidth={3} />
            <span className="text-lg">Marcos.dev</span>
          </div>

          {/* Menu central */}
          <ul className="flex justify-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    relative px-3 py-1
                    font-bold text-black
                    border-2 border-transparent
                    hover:border-black
                    hover:bg-pink-400
                    transition-all
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
          px-4 py-4
          bg-yellow-300
          border-b-4 border-black
        "
      >
        <div className="flex items-center gap-2 font-bold text-black">
          <Code2 size={22} strokeWidth={3} />
          Marcos.dev
        </div>

        <ThemeToggle />
      </header>

      {/* ================= MOBILE DOCK ================= */}
      <nav
        className="
          md:hidden
          fixed bottom-0 inset-x-0 z-50
          bg-pink-400
          border-t-4 border-black
        "
      >
        <ul className="flex justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    flex flex-col items-center gap-1
                    text-xs font-bold text-black
                    transition-transform
                    active:translate-y-1
                  "
                >
                  <Icon size={22} strokeWidth={3} />
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
