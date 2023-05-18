import React from "react";
import css from "./InfoStore.module.css";
import { infoStore } from "../../objects/infoStore";

function InfoStore() {
  return (
    <div className={css.infoCards}>
      <h1>О нас</h1>
      <div className={css.info__store}>
        {infoStore.map((item) => (
          <div className={css.infoCard}>
            <div>
              <img src={item.img} alt="info-image" />
              <b className={css.descripMain}>{item.title}</b>
            </div>
            <b>{item.descrip1}</b>
            <b>{item.descrip2}</b>
            <b>{item.descrip3}</b>
            <b>{item.descrip4}</b>
            <b>{item.descrip5}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoStore;
