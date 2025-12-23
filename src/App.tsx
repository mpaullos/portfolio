import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Navbar />

      <main className="pt-16">
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Home</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
