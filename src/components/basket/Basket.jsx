import React from "react";
import css from "./Basket.module.css";
import { basket } from "../../objects/basket";

function Basket() {
  return (
    <div className={css.basket__wrapper}>
      <h1>Корзина</h1>
      <div className={css.basket__products}>
        {basket.map((item) => (
          <div className={css.basket__product}>
            <img src={item.img} alt={item.title} />
            <strong>{item.title}</strong>
            <p>{item.descrip}</p>
            <b>{item.price} руб.</b>
          </div>
        ))}
      </div>
      <button>Оформить покупку</button>
    </div>
  );
}

export default Basket;
