import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone-green.svg";
import { useSelector } from "react-redux";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const cartItems = useSelector(state => state.cart.productsBasket);

  const showNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={styles.header}>
      <a href="/#" className={styles.logo}>
        <img src={logo} alt="" />
      </a>
      <nav className={`${styles.nav} ${showNav ? styles.responsive_nav : ""}`}>
        <Link to="/" className={styles.navLink}>
          Главная
        </Link>
        <Link to="/categories" className={styles.navLink}>
          Товары по категориям
        </Link>
        <Link to="/basket" className={styles.navLink}>
          Корзина 
          <span> ({cartItems.length})</span>
        </Link>
        <a href="/#" className={styles.navLink}>
          О нас
        </a>
        <button
          className={`${styles.navBtn} ${showNav ? styles.visible : ""} ${styles.navCloseBtn
            }`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
        <div className={styles.contacts}>
          <img className={styles.phone} src={phone} alt="phone" />
          <div className={styles.numbers}>
            <a href="">+79017029445</a>
            <a href="">+79160540090</a>
          </div>
        </div>
      </nav>
      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
