import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div
      className="min-h-screen bg-white dark:bg-zinc-950
                    text-zinc-900 dark:text-zinc-100 transition-colors"
    >
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
