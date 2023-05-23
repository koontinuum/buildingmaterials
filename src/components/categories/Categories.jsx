import React, { useEffect, useState } from "react";
import css from "./Categories.module.css";
import { categories } from "../../objects/categories";
import { Link, useNavigate } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import Preloader from "../preloader/Preloader";

function Categories() {
  const { getCategories, categories, isLoading } = useCategory();
  useEffect(() => {
    getCategories();
  }, [])

  if (isLoading) return <Preloader full />

  return (
    <div className={css.categories__wrapper}>
      <h1>Товары по категориям</h1>
      <div className={css.categories}>
        {categories.map((item) => (
          <Link to={`/product/${item.title}`}>
            <div className={css.category}>
              <img src={item.image} alt={item.title} />
              <strong>
                {item.title} ({item.productQuantity})
              </strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
