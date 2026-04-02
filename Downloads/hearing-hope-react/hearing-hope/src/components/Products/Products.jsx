import React from "react";
import "./Products.css";
import { PRODUCTS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const ProductCard = ({ icon, title, description, href }) => (
  <div className="product-card">
    <div className="product-card__img">
      <i className={icon}></i>
    </div>
    <div className="product-card__body">
      <h4 className="product-card__title">{title}</h4>
      <p className="product-card__desc">{description}</p>
      <a href={href} className="know-more">
        Know More <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
);

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <SectionHeader
          tag="Products"
          title="Our Hearing Aid Products"
          subtitle="Explore our curated selection of premium Signia hearing aids, designed for every level of hearing loss."
        />
        <div className="products__grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
