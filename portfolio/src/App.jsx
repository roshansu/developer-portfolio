import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-ink bg-noise min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
