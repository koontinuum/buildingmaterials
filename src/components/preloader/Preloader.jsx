import React from "react";
import css from "./Preloader.module.css";

const Preloader = ({ full }) => {
  return (
    <div className={full ? css.wrapper : css.pad}>
      <div className={css.container}>
        <svg className={css.loader} viewBox="0 0 340 340">
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="160"
            stroke="#6AC4FF"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="135"
            stroke="#363A40"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="110"
            stroke="#6AC4FF"
          />
          <circle
            className={css.circle}
            cx="170"
            cy="170"
            r="85"
            stroke="#363A40"
          />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
