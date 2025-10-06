import "./IntroCards.css";

export default function IntroCards() {
  const cards = [
    {
      title: "Who I Am",
      desc: "Web developer focused on clean UI and reliable UX.",
      icon: "👨‍💻",
    },
    {
      title: "What I Do",
      desc: "React + MERN projects with attention to performance.",
      icon: "⚙️",
    },
    {
      title: "Where I'm Going",
      desc: "Learning cybersecurity to write safer software.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="section">
      <div className="container intro-grid">
        {cards.map((c) => (
          <a key={c.title} href="#about" className="intro-card" aria-label={c.title}>
            <div className="intro-icon">{c.icon}</div>
            <h3 className="intro-title">{c.title}</h3>
            <p className="intro-desc">{c.desc}</p>
            <span className="intro-cta">Learn more →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
