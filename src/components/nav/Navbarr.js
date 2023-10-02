import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Languageoption from "../language/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ReactGA from "react-ga";
import "../nav/nav.css";
import logo from "../../assets/logo-nobg.png";
import topslider1 from "../../assets/1.png";
import topslider2 from "../../assets/2.png";
import topslider3 from "../../assets/ny3.png";
import topslider4 from "../../assets/4.png";
import topslider5 from "../../assets/ny5.png";
import { Link } from "react-router-dom";

export const Navbarr = () => {
  ReactGA.event("/");
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>
          <a href="/#hem">
            <img
              src={logo}
              alt=""
              className="logo-img"
              style={{ width: "6rem" }}
            />
          </a>
        </h3>
        <nav ref={navRef}>
          <a href="/#hem" onClick={showNavbar}>
            {t("home")}
          </a>

          <a href="/#omoss" onClick={showNavbar}>
            {t("about")}
          </a>
          <a href="/#smaker" onClick={showNavbar}>
            {t("tast")}
          </a>
          <a href="/#kontakt" onClick={showNavbar}>
            {t("contact")}
          </a>
          {/* <Link to="/"> {t("home")}</Link>
          <Link to="/about">{t("about")}</Link>
          <Link to="/tastes"> {t("tast")}</Link>
          <Link to="/ourtastes">UTFORSKA</Link>
          <Link to="/contact">{t("contact")}</Link> */}
          <Languageoption onChange={(e) => handleClick(e)} />
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={topslider1}
              class="d-block img-fluid fixed-height"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={topslider2}
              class="d-block img-fluid fixed-height"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={topslider3}
              class="d-block img-fluid fixed-height"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={topslider4}
              class="d-block img-fluid fixed-height"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={topslider5}
              class="d-block img-fluid fixed-height"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
