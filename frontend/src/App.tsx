import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />

      <main className="w-full">
        <section id="home" className="w-full">
          <Hero />
        </section>

        <section id="about" className="w-full">
          <About />
        </section>

        <section id="skills" className="w-full">
          <Skills />
        </section>

        <section id="projects" className="w-full">
          <Projects />
        </section>

        <section id="experience" className="w-full">
          <Experience />
        </section>

        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;