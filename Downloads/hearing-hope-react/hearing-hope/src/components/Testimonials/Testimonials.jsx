import React from "react";
import "./Testimonials.css";
import { TESTIMONIALS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const StarRating = ({ rating }) => (
  <div className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? "stars--filled" : "stars--empty"}`}
      ></i>
    ))}
  </div>
);

const TestimonialCard = ({ avatar, name, text, rating }) => (
  <div className="testimonial-card">
    <div className="testimonial-card__quote">❝</div>
    <p className="testimonial-card__text">{text}</p>
    <div className="testimonial-card__author">
      <div className="testimonial-card__avatar">{avatar}</div>
      <div>
        <div className="testimonial-card__name">{name}</div>
        <StarRating rating={rating} />
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionHeader
          tag="Reviews"
          title="What Our Clients Say"
          subtitle="Real stories from patients whose lives have been transformed by our hearing care services."
        />
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
