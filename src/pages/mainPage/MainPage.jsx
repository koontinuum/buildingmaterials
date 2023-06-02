import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Categories from "../../components/categories/Categories";
import Catalog from "../../components/catalog/Catalog";
import AboutStore from "../../components/aboutStore/AboutStore";
import Slide from "../../components/slide/Slide";
import InfoStore from "../../components/infoStore/InfoStore";
import Location from "../../components/location/Location";
import Footer from "../../components/footer/Footer";

function MainPage() {
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
      <Main />
      <Categories />
      <Slide />
      <Catalog />
      <AboutStore />
      <InfoStore />
      <Location />
      <Footer />
    </div>
  );
}

export default MainPage;
