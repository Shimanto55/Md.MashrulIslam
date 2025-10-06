import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import IntroCards from "./sections/IntroCards.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Reviews from "./sections/Reviews.jsx";
import Contact from "./sections/Contact.jsx";
import ScrollTop from "./components/ScrollTop.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="section" style={{paddingTop:0}}>
        <Hero />
      </section>

      <IntroCards />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />

      <footer className="section shadow-line" style={{paddingTop:24}}>
  <div className="container" style={{textAlign:"center", color:"var(--muted)"}}>
    <p>
      Designed & Built by <strong>Md. Mashrul Islam</strong> ✦{" "}
      <a href="https://github.com/shimanto55/Md.MashrulIslam" target="_blank" rel="noreferrer"
        style={{color:"var(--accent)", textDecoration:"none"}}>
        View Source
      </a>
    </p>
    <p style={{marginTop:6}}>
      © {new Date().getFullYear()} All rights reserved.
    </p>
  </div>
</footer>

      <ScrollTop />
    </>
  );
}
