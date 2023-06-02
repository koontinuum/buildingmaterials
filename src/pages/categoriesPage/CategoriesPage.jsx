import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Slide from "../../components/slide/Slide";
import Footer from "../../components/footer/Footer";
import Categories from "../../components/categories/Categories";

function CategoriesPage() {
  return (
    <div>
      <Helmet>
        <title>Строительные материалы</title>
        <meta
          name="description"
          content="Сухие смеси, стеновые материалы, автоматы, Пены, Клеи, Герметики.
          Лакокрасоные материалы, гидроизоляция, теплоизоляция."
        />
      </Helmet>
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default CategoriesPage;
