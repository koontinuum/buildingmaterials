import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Slide.module.css";
import click from "../../assets/different-images/click.svg";

import React, { useRef } from "react";
import Slider from "react-slick";
import { slideContents } from "../../objects/product";

function Slide() {
  const arrowRef = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <button
        className={css.nextClick}
        onClick={() => arrowRef.current.slickNext()}
      >
        <img src={click} alt="" />
      </button>
      <Slider ref={arrowRef} {...settings}>
        {slideContents.map((item) => (
          <div className={css.card}>
            <img src={item.img} alt="slide" />
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
      <button
        className={css.prevClick}
        onClick={() => arrowRef.current.slickPrev()}
      >
        <img src={click} alt="" />
      </button>
    </div>
  );
}

export default Slide;
