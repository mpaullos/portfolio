import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div
      className="min-h-screen bg-white dark:bg-zinc-950
                    text-zinc-900 dark:text-zinc-100 transition-colors"
    >
      <Navbar />

      {/* Espaço temporário */}
      <main className="pt-24 flex justify-center">
        <h1 className="text-4xl font-bold">Portfolio em construção 🚀</h1>
      </main>
    </div>
  );
}
