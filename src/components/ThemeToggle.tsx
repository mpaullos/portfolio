import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700
                 hover:bg-zinc-100 dark:hover:bg-zinc-800
                 transition-colors"
    >
      {dark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-800 dark:text-zinc-100" />
      )}
    </button>
  );
}
