import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Badge from './Badge';

const AchievementCarousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 15000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const prevIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;
  const current = items[index];

  return (
    <div className="achv-carousel-container">
      <div className="achv-slides">
        {/* Left preview - clickable */}
        <div className="achv-side achv-side-left" onClick={prev}>
          <img src={items[prevIndex].image} alt={items[prevIndex].title} />
          <div className="achv-overlay" />
        </div>

        {/* Center main image */}
        <div className="achv-center">
          <img src={current.image} alt={current.title} />
          {/* Overlay content inside the image */}
          <div className="achv-content">
            {current.badge && (
              <div className="achv-badge">
                <Badge type={current.badge} />
              </div>
            )}
            <div className="achv-content-header">
              <div className="achv-header-left">
                <h3 className="achv-title achv-title-onimage">{current.title}</h3>
                {current.description && (
                  <p className="achv-desc-onimage">{current.description}</p>
                )}
              </div>
              <div className="achv-meta">
                {current.date && (
                  <span className="achv-date achv-date-onimage">
                    {current.date}
                  </span>
                )}
                {current.place && (
                  <span className="achv-place achv-place-onimage">
                    {current.place}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            className="achv-arrow achv-arrow-left"
            onClick={prev}
            aria-label="Previous"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="achv-arrow achv-arrow-right"
            onClick={next}
            aria-label="Next"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Right preview - clickable */}
        <div className="achv-side achv-side-right" onClick={next}>
          <img src={items[nextIndex].image} alt={items[nextIndex].title} />
          <div className="achv-overlay" />
        </div>
      </div>

      {/* Dots below slides */}
      <div className="achv-dots">
        {items.map((_, i) => (
          <span
            key={i}
            className={`achv-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementCarousel;
