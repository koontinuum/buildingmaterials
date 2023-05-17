import React from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone-green.svg";

function Header() {
  return (
    <div className={css.header}>
      <div className={css.header__content}>
        <img className={css.logo} src={logo} alt="logo" />
        <h2>
          Качество и надежность <br /> это наша главная цель!
        </h2>
      </div>
      <div className={css.header__contacts}>
        <img src={phone} alt="phone" />
        <div>
          <a href="https://wa.me/79017029445?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D1%8E%D1%82%20%D0%B2%D0%B0%D1%88%D0%B8%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B.%20%D0%9C%D0%BE%D0%B6%D0%B5%D1%82%D0%B5%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8,%20%D1%86%D0%B5%D0%BD%D0%B0%D1%85%20%D0%B8%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%D1%85%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8?%20%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE%20%D0%B7%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D0%B5!">
            +79017029445
          </a>
          <a href="https://wa.me/79160540090?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D1%8E%D1%82%20%D0%B2%D0%B0%D1%88%D0%B8%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B.%20%D0%9C%D0%BE%D0%B6%D0%B5%D1%82%D0%B5%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8,%20%D1%86%D0%B5%D0%BD%D0%B0%D1%85%20%D0%B8%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%D1%85%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8?%20%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE%20%D0%B7%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D0%B5!">
            +79160540090
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
