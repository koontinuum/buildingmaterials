import React from "react";
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
