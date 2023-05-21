import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Basket from "../../components/basket/Basket";
import Slide from "../../components/slide/Slide";

function BasketPage() {
  return (
    <div>
      <Header />
      <Basket />
      <Slide />
      <Footer />
    </div>
  );
}

export default BasketPage;
