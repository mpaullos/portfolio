import { Code2, Home, Folder, Mail, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "#home", icon: Home },
    { label: t("nav.about"), href: "#about", icon: User },
    { label: t("nav.projects"), href: "#projects", icon: Folder },
    { label: t("nav.experience"), href: "#experience", icon: Code2 },
    { label: t("nav.contact"), href: "#contact", icon: Mail },
  ];
  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav
        className="
          hidden md:block
          fixed top-0 left-0 w-full z-50
          backdrop-blur-md
          bg-white/10
          dark:bg-[#121212]/40
          border-b-3 border-black dark:border-white
          transition-all duration-300
        "
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 font-bold text-black dark:text-white">
            <Code2 size={24} strokeWidth={3} />
            <span className="text-lg tracking-wide">Marcos.dev</span>
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-8 uppercase">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    relative font-semibold
                    text-black dark:text-white
                    transition-colors duration-200
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-0
                    after:bg-black dark:after:bg-white
                    after:transition-all after:duration-300
                    hover:after:w-full
                    hover:text-[#FB64B5]
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* ================= MOBILE HEADER ================= */}
      <header
        className="
          md:hidden
          fixed top-0 inset-x-0 z-50
          backdrop-blur-md
          bg-white/10
          dark:bg-[#121212]/40
          border-b-3 border-black dark:border-white
          px-4 py-4 flex items-center justify-between
        "
      >
        <div className="flex items-center gap-2 font-bold text-black dark:text-white">
          <Code2 size={22} strokeWidth={3} />
          Marcos.dev
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </header>

      {/* ================= MOBILE DOCK ================= */}
      <nav
        className="
          md:hidden
          fixed bottom-0 inset-x-0 z-50
          backdrop-blur-md
          bg-white/10
          dark:bg-[#121212]/60
          border-t border-black/20 dark:border-white/20
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
                    text-xs font-semibold
                    text-black dark:text-white
                    transition-transform
                    active:translate-y-1
                  "
                >
                  <Icon size={22} strokeWidth={2.5} />
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
