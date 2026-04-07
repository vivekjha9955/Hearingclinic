import React from "react";
import "./Blogs.css";
import { BLOGS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const BlogCard = ({ icon, date, title, excerpt, href }) => (
  <div className="blog-card">
    <div className="blog-card__img">
      <i className={icon}></i>
    </div>
    <div className="blog-card__body">
      <div className="blog-card__date">
        <i className="fas fa-calendar-alt"></i> {date}
      </div>
      <h3 className="blog-card__title">{title}</h3>
      <p className="blog-card__excerpt">{excerpt}</p>
      <a href={href} className="read-more">
        Read More <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
);

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <SectionHeader
          tag="Latest Articles"
          title="Recent Blogs"
          subtitle="Stay updated with the latest hearing health insights, tips, and product guides from our experts."
        />
        <div className="blogs__grid">
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
