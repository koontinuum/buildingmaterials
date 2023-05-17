import React from "react";
import css from "./Catalog.module.css";
import { products } from "../../objects/product";

function Catalog() {
  return (
    <div className={css.catalog}>
      <h2>Каталог строительных материалов</h2>
      <p>Цены от производителя с доставкой по Москве и Московской области</p>
      <div className={css.catalog__products}>
        {products.map((item) => (
          <div className={css.product}>
            <img src={item.img} alt="" />
            <b>{item.title}</b>
            <a href="">Заказать</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
