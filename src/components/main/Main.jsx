import React from "react";
import css from "./Main.module.css";

function Main() {
  return (
    <div className={css.main}>
      <div>
        <h1>
          Качественные строительные материалы по <br /> доступным ценам - ваш
          ключ к успешному строительству!
        </h1>
        <p>Оставьте заявку прямо сейчас и получите скидку 20%!</p>
        <button>
          <a href="">Оставить заявку</a>
        </button>
      </div>
    </div>
  );
}

export default Main;
