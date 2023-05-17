import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Slide.module.css";

import React from "react";
import Slider from "react-slick";
import { slideContents } from "../../objects/product";

function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={css.slide__wrapper}>
      <h1>Материалы высшего качества</h1>
      <Slider {...settings}>
        {slideContents.map((item) => (
          <div className={css.card}>
            <img src={item.img} alt="slide" />
            <p>{item.description}</p>
            <a href="">Оформить заказ</a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
