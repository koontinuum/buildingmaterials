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
          <a>+79017029445</a>
          <a>+79160540090</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
