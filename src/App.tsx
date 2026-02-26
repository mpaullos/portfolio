import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

export default function App() {
  return (
    <div
      className="min-h-screen 
                    text-zinc-900 dark:text-zinc-100 transition-colors"
    >
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}
