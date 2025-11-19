import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

/** Inline logo so you don’t need an image file */
function Logo({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block" }}
    >
      <path
        d="M24 3.5 42 14v20L24 44.5 6 34V14L24 3.5Z"
        fill="url(#g)"
        stroke="#E2E8F0"
        strokeWidth="1"
      />
      <path
        d="M14 31V17h4l6 6 6-6h4v14h-4V23l-6 6-6-6v8h-4Z"
        fill="white"
      />
      <defs>
        <linearGradient id="g" x1="6" y1="3" x2="42" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  const mobileRef = useRef(null);
  const lastScrollY = useRef(0);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
    { href: "#resume", label: "Resume" },
  ];

  /* ---- Scroll handling: stick, hide-on-scroll-down, progress bar ---- */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;

      // stick state
      setStuck(current > 8);

      // scroll progress (0–100)
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (current / maxScroll) * 100 : 0;
      setProgress(pct);

      // auto-hide / show
      if (current <= 0) {
        setHidden(false);
        lastScrollY.current = 0;
        return;
      }

      const delta = current - lastScrollY.current;
      // scroll down & past some threshold => hide
      if (delta > 4 && current > 80) {
        setHidden(true);
      }
      // scroll up => show
      else if (delta < -4) {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Active section highlight ---- */
  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---- Close mobile on outside click ---- */
  useEffect(() => {
    if (!open) return;

    const onClick = e => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  /* ---- Close mobile on Escape key ---- */
  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* ---- Lock body scroll when mobile menu open ---- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const headerClass =
    "nav" +
    (stuck ? " is-stuck" : "") +
    (hidden ? " nav--hidden" : "");

  return (
    <header className={headerClass}>
      <div className="container nav-inner">
        {/* Brand */}
        <a href="#home" className="brand" aria-label="Mashrul.dev — Home">
          <span className="brand-logo">
            <Logo />
          </span>
          <span className="brand-text">
            Mashrul<span className="dot">.</span>dev
          </span>
          <span className="nav-badge" aria-hidden="true">
            Available
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Primary">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href ? "is-active" : ""}`}
              aria-current={active === l.href ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Hire Me
          </a>
        </nav>

        {/* Burger menu */}
        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Progress bar */}
      <div className="nav-progress-wrapper">
        <div
          className="nav-progress"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          ref={mobileRef}
          className="nav-mobile"
          aria-label="Mobile"
          role="dialog"
          aria-modal="true"
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
              aria-current={active === l.href ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
