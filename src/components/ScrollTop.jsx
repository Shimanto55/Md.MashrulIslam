import { useEffect, useState } from "react";
import "./ScrollTop.css";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <button className="scroll-top" onClick={scrollToTop} aria-label="Back to top">
      ↑
    </button>
  );
}
