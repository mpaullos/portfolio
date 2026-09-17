import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Projects showAll />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen 
                    text-zinc-900 dark:text-zinc-100 transition-colors"
    >
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
