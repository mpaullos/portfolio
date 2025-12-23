import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <div
      className="min-h-screen bg-white dark:bg-zinc-950
                    text-zinc-900 dark:text-zinc-100 transition-colors"
    >
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}
