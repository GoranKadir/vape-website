import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
export const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const { t } = useTranslation();
  return (
    <div class="container mt-5">
      <div className="row">
        <h1 className="text-center partners-text">{t("partners")}</h1>
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <a href="https://nikotinnorden.se/" target="_blank">
            {" "}
            <img
              src="https://nikotinnorden.se/wp-content/uploads/2023/02/cropped-nn-logo-100x100.png"
              alt="partners"
            />
          </a>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};
