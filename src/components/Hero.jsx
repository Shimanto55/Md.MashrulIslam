import "./Hero.css";

export default function Hero(){
  const bg = {
    backgroundImage: `
      linear-gradient(to bottom right, rgba(247,249,251,.85), rgba(247,249,251,.75)),
      url('/hero.jpg')
    `
  };
  return (
    <div className="hero" style={bg}>
      <div className="container hero-inner">
        <span className="kicker">Web Developer • MERN • Security-minded</span>
        <h1 className="h1">Hi, I’m <span className="accent">Md. Mashrul Islam</span></h1>
        <p className="subtitle">
          I build clean, accessible, and reliable web apps. Currently focused on React and MERN,
          while learning cybersecurity fundamentals to write safer software.
        </p>
        <div className="cta-row">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </div>
    </div>
  );
}
