import React, { useEffect } from "react";
import css from "./Catalog.module.css";
import { products } from "../../objects/product";
import useCatalog from "../../hooks/useCatalog";
import Preloader from "../preloader/Preloader";

function Catalog() {
  const { getCatalogs, catalogs, isLoading } = useCatalog();

  useEffect(() => {
    getCatalogs();
  }, [])
  if (isLoading) return <Preloader full />
  return (
    <div className={css.catalog}>
      <h2>Каталог строительных материалов</h2>
      <p>Цены от производителя с доставкой по Москве и Московской области</p>
      <div className={css.catalog__products}>
        {catalogs.map((item) => (
          <div className={css.product}>
            <img src={item.image} alt="" />
            <b>{item.title}</b>
            <a href="https://wa.me/79017029445?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BD%D0%B0%20%D1%81%D1%87%D0%B5%D1%82%20%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%BE%D0%B2.">
              Заказать
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
