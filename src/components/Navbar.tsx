import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800
                       bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-semibold tracking-tight">
          Marcos<span className="text-indigo-500">.</span>
        </span>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
