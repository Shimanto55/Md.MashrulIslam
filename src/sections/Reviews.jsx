import { useEffect, useMemo, useState } from "react";
import "./Reviews.css";
import { REVIEWS } from "../data/reviews";

export default function Reviews() {
  const [pageIndex, setPageIndex] = useState(0);

  // group reviews into pages of 2
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < REVIEWS.length; i += 2) {
      out.push(REVIEWS.slice(i, i + 2));
    }
    return out;
  }, []);

  const pageCount = pages.length;

  // auto-advance pages (a bit faster now: 4s)
  useEffect(() => {
    if (pageCount <= 1) return;
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pageCount);
    }, 4000); // was 6500
    return () => clearInterval(interval);
  }, [pageCount]);

  const totalReviews = REVIEWS.length;
  const avgRating =
    REVIEWS.reduce((sum, r) => sum + (r.rating || 5), 0) / totalReviews;

  return (
    <section id="reviews" className="section section-reviews">
      <div className="container">
        <div className="reviews-head">
          <div>
            <h2 className="h2">Client Reviews</h2>
            <p className="reviews-sub">
              Real feedback from people I&apos;ve actually worked with.
            </p>
          </div>

          <div className="reviews-summary">
            <div className="reviews-summary-row">
              <span className="reviews-score">{avgRating.toFixed(1)}</span>
              <span className="reviews-summary-stars">★★★★★</span>
            </div>
            <div className="reviews-summary-text">
              Based on {totalReviews}+ projects & collaborations
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="reviews-slider">
          <div
            className="reviews-track"
            style={{ transform: `translateX(-${pageIndex * 100}%)` }}
          >
            {pages.map((page, idx) => (
              <div className="reviews-slide" key={idx}>
                {page.map((r, i) => {
                  const rating = r.rating || 5;
                  return (
                    <article
                      key={r.name + r.role}
                      className={`review-card ${
                        idx === 0 && i === 0 ? "is-featured" : ""
                      }`}
                    >
                      <div className="review-top">
                        <img
                          src={r.photo}
                          alt={r.name}
                          className="review-photo"
                        />
                        <div>
                          <div className="review-name">{r.name}</div>
                          <div className="review-role">{r.role}</div>
                          {r.project && (
                            <div className="review-project">{r.project}</div>
                          )}
                        </div>
                      </div>

                      <p className="review-text">“{r.text}”</p>

                      <div className="review-footer">
                        <div
                          className="review-stars"
                          aria-label={`${rating} out of 5 stars`}
                        >
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <span
                              key={starIdx}
                              className={`star ${
                                starIdx < rating ? "is-filled" : ""
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 && (
          <div className="reviews-dots" aria-label="Select review slide">
            {pages.map((_, i) => (
              <button
                key={i}
                className={`reviews-dot ${i === pageIndex ? "is-active" : ""}`}
                onClick={() => setPageIndex(i)}
                aria-pressed={i === pageIndex}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
