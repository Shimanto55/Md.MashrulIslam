import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);

  // ---- Typewriter for right-side title ----
  const fullCardTitle = "I help teams go from idea → working prototype.";
  const [typedTitle, setTypedTitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const speed = 45;        // ms per character
    const startDelay = 400;  // wait a bit before starting

    let timeoutId;

    const type = () => {
      if (i <= fullCardTitle.length) {
        setTypedTitle(fullCardTitle.slice(0, i));
        i += 1;
        timeoutId = setTimeout(type, speed);
      } else {
        setIsTyping(false);
      }
    };

    timeoutId = setTimeout(type, startDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  // ---- Particles background ----
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId;

    const isMobile = window.innerWidth < 768;
    const maxParticles = isMobile ? 40 : 80;
    const maxLineDistance = isMobile ? 120 : 160;

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        const speed = 0.2 + Math.random() * 0.5;
        const angle = Math.random() * Math.PI * 2;
        const baseR = 2 + Math.random() * 2.5;
        const phase = Math.random() * Math.PI * 2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r0: baseR,          // base radius
          phase,              // for pulsing
          variant: Math.random() < 0.5 ? 0 : 1, // 0 = cyan, 1 = violet
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const time = performance.now() * 0.002; // for pulse animation

      // Lines between nearby particles
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxLineDistance) continue;

          const t = 1 - dist / maxLineDistance;
          const alpha = 0.1 + t * 0.35;

          ctx.strokeStyle = `rgba(148,163,184,${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Particles (with smooth pulsing radius)
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const pulse = 0.75 + 0.35 * Math.sin(time + p.phase);
        const r = p.r0 * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);

        if (p.variant === 0) {
          ctx.fillStyle = "rgba(14,165,233,0.9)";
          ctx.shadowColor = "rgba(56,189,248,0.9)";
        } else {
          ctx.fillStyle = "rgba(139,92,246,0.9)";
          ctx.shadowColor = "rgba(167,139,250,0.9)";
        }
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      animationFrameId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    draw();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const subtitleText =
    "I design and build clean, accessible web applications with React and " +
    "modern JavaScript. I care about structure, performance, and " +
    "security-minded coding—so the things you ship feel fast, reliable, " +
    "and easy to maintain.";

  return (
    <div className="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Left: main text */}
        <div className="hero-main">
          <span className="kicker">
            Web Developer · MERN · Security-minded
          </span>

          {/* Heading with blur halo */}
          <h1 className="hero-title">
            <span
              className="hero-blur hero-blur--text"
              aria-hidden="true"
            >
              Hi, I’m <span className="accent">Md. Mashrul Islam</span>
            </span>
            <span>
              Hi, I’m <span className="accent">Md. Mashrul Islam</span>
            </span>
          </h1>

          {/* Subtitle with blur halo */}
          <p className="subtitle hero-subtitle">
            <span
              className="hero-blur hero-blur--text"
              aria-hidden="true"
            >
              {subtitleText}
            </span>
            <span>{subtitleText}</span>
          </p>

          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <ul className="hero-meta">
            <li>
              <span>📍</span> Based in Dhaka, Bangladesh
            </li>
            <li>
              <span>💻</span> MERN · React · REST APIs
            </li>
            <li>
              <span>🛡️</span> Learning cybersecurity fundamentals
            </li>
          </ul>
        </div>

        {/* Right: glass card */}
        <aside className="hero-aside" aria-label="Profile summary">
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-status-dot" aria-hidden="true" />
              <span className="hero-status-text">Available for remote work</span>
            </div>

            <div className="hero-card-body">
              <p
                className={`hero-card-title ${isTyping ? "typing" : ""}`}
                aria-label={fullCardTitle}
              >
                {typedTitle}
              </p>

              <ul className="hero-card-list">
                <li>Modern, responsive UI in React</li>
                <li>Clean, well-structured JavaScript code</li>
                <li>Basic security best practices in mind</li>
              </ul>

              <div className="hero-tags">
                <span>React</span>
                <span>MERN</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to About section"
      >
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">SCROLL</span>
      </a>
    </div>
  );
}
