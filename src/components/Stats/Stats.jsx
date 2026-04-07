import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";
import { STATS } from "../../data/constants";

const useCountUp = (target, duration = 1800, triggered) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);

  return count;
};

const StatItem = ({ icon, target, suffix, label, triggered }) => {
  const count = useCountUp(target, 1800, triggered);
  return (
    <div className="stat-item">
      <div className="stat-item__icon">
        <i className={icon}></i>
      </div>
      <div className="stat-item__num">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-item__label">{label}</div>
    </div>
  );
};

const Stats = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {STATS.map((stat) => (
            <StatItem key={stat.id} {...stat} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
