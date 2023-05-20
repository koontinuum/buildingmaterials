import React from "react";
import css from "./Categories.module.css";
import { categories } from "../../objects/categories";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className={css.categories__wrapper}>
      <h1>Товары по категориям</h1>
      <div className={css.categories}>
        {categories.map((item) => (
          <Link to="/product">
            <div className={css.category}>
              <img src={item.img} alt={item.title} />
              <strong>
                {item.title} ({item.quantity})
              </strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
