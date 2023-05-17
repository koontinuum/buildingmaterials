import React from "react";
import css from "./AboutStore.module.css";
import { storeBlocks } from "../../objects/product";

function AboutStore() {
  return (
    <div className={css.wrapper}>
      <h2>Преимущества нашего магазина</h2>
      <p>Причины, по которым выбирают нас</p>
      <div className={css.aboutStore}>
        {storeBlocks.map((item) => (
          <div className={css.block}>
            <img src={item.img} alt="block-image" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutStore;
