import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logo2dark-bg.png";
import whatsApp from "../../assets/whh_whatsapp.svg";
import telegram from "../../assets/logos_telegram.svg";

function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.footer__about}>
        <img src={logo} alt="logo" />
        <b>Все права защищены © 2023</b>
      </div>
      <div className={css.footer__contacts}>
        <h2>Мы на связи</h2>
        <a href="">+79017029445</a>
        <a href="">+79160540090</a>
        <div>
          <a href="">
            <img src={whatsApp} alt="whatsApp" />
          </a>
          <a href="">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
