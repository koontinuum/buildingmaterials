import React from "react";
import css from "./Main.module.css";

function Main() {
  return (
    <div className={css.main}>
      <div>
        <h1>
          Качественные строительные материалы по <br /> доступным ценам - в один
          клик,
          <br /> ваш ключ к успешному строительству!
        </h1>
        <p>Оставьте заявку прямо сейчас и получите скидку 20%!</p>
        <button>
          <a href="https://wa.me/79160540090?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B0%D1%85.%20%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE,%20%D1%83%20%D0%B2%D0%B0%D1%81%20%D0%B5%D1%81%D1%82%D1%8C%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%BA%D0%B8%D0%B4%D0%BA%D0%B8?%20%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D1%8E!">
            Оставить заявку
          </a>
        </button>
      </div>
    </div>
  );
}

export default Main;
