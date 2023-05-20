import React from "react";
import css from "./Categories.module.css";
import { categories } from "../../objects/categories";

function Categories() {
  return (
    <div className={css.categories__wrapper}>
      <h1>Товары по категориям</h1>
      <div className={css.categories}>
        {categories.map((item) => (
          <div className={css.category}>
            <img src={item.img} alt={item.title} />
            <strong>
              {item.title} ({item.quantity})
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
