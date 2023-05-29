import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutStore from "../../components/aboutStore/AboutStore";
import InfoStore from "../../components/infoStore/InfoStore";
import Location from "../../components/location/Location";

function AboutStorePage() {
  return (
    <div>
      <Header />
      <InfoStore />
      <AboutStore />
      <Location />
      <Footer />
    </div>
  );
}

export default AboutStorePage;
