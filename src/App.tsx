import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div
      className="min-h-screen 
                    text-zinc-900 dark:text-zinc-100 transition-colors"
    >
      <main>
        <Navbar />
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
