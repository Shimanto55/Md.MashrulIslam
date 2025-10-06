import { useState, useEffect } from "react";
import "./Reviews.css";
import { REVIEWS } from "../data/reviews";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  // simple auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2 className="h2">Client Reviews</h2>
        <p className="reviews-sub">
          A few words from people I’ve worked with.
        </p>

        <div className="reviews-carousel">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className={`review-card ${i === index ? "is-active" : ""}`}
            >
              <div className="review-text">“{r.text}”</div>
              <div className="review-person">
                <img src={r.photo} alt={r.name} className="review-photo" />
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="review-dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
