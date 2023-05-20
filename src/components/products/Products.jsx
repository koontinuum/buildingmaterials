import React from "react";
import css from "./Products.module.css";
import { categoriesProduct } from "../../objects/categoriesProduct";

function Products() {
  return (
    <div className={css.product__wrapper}>
      <div className={css.products}>
        {categoriesProduct.map((item) => (
          <div className={css.product}>
            <img src={item.img} alt={item.title} />
            <strong>{item.title}</strong>
            <b>{item.price} руб.</b>
            <button>В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
