import React, { useEffect } from "react";
import css from "./InfoStore.module.css";
import { infoStore } from "../../objects/infoStore";
import useAboutUs from "../../hooks/useAboutUs";

function InfoStore() {
  const { getAboutUs, aboutUs, isLoading } = useAboutUs();

  useEffect(() => {
    getAboutUs()
  }, [])

  return (
    <div className={css.infoCards}>
      <h1>О нас</h1>
      <div className={css.info__store}>
        {aboutUs.map((item) => (
          <div className={css.infoCard}>
            <div>
              <img src={item.image} alt="info-image" />
              <b className={css.descripMain}>{item.title}</b>
            </div>
            {
              item.facts.map((el) => (
                <b>— {el}</b>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoStore;
