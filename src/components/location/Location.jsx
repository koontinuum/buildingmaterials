import React from "react";
import css from "./Location.module.css";

function Location() {
  return (
    <div className={css.wrapper__location}>
      <h1>Наше местоположение на карте</h1>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A97d5356916c8f5a132a3a05ee6c00c3e767a8268383c23e7f0050e50c1c87277&amp;source=constructor"
        width="100%"
        height="450"
        frameborder="0"
      ></iframe>
      <b>МКАД, 41-й километр, 4c28! Павильон Ж-3/8 наше местоположение.</b>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Москва
        </a>
        <a
          href="https://yandex.ru/maps/213/moscow/house/mkad_41_y_kilometr_4s28/Z04Ycg9jSE0DQFtvfXpwdHliZg==/?l=stv%2Csta&ll=37.483184%2C55.615512&panorama%5Bdirection%5D=359.415593%2C1.926511&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=37.482733%2C55.615439&panorama%5Bspan%5D=68.750133%2C37.710401&utm_medium=mapframe&utm_source=maps&z=16.44"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          МКАД, 41-й километр, 4с28 — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?l=stv%2Csta&ll=37.483184%2C55.615512&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTkzNTE5NDY2EkPQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0JzQmtCQ0JQsIDQxLdC5INC60LjQu9C-0LzQtdGC0YAsIDTRgTI4IgoNx-4VQhVJdl5C&panorama%5Bdirection%5D=359.415593%2C1.926511&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=37.482733%2C55.615439&panorama%5Bspan%5D=68.750133%2C37.710401&z=16.44"
          width="100%"
          height="450"
          frameborder="1"
          allowfullscreen="true"
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
