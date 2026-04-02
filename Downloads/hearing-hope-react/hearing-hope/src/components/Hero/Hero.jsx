import React, { useState, useEffect } from "react";
import "./Hero.css";
import { HERO_SLIDES } from "../../data/constants";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <div
        className="hero__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="hero__slide"
            style={{ background: slide.gradient }}
          >
            <div className="hero__content">
              <h1 className="hero__title">{slide.title}</h1>
              <p className="hero__subtitle">{slide.subtitle}</p>
              <a href={slide.btnHref} className="btn-accent">
                <i className={slide.btnIcon}></i>
                {slide.btnText}
              </a>
            </div>
            <div className="hero__deco">
              <i className={slide.icon}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="hero__btn hero__btn--prev" onClick={prev} aria-label="Previous">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="hero__btn hero__btn--next" onClick={next} aria-label="Next">
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="hero__dots">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot ${idx === current ? "hero__dot--active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
