import React from "react";
import "../footer/footer.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div class="container">
      <hr className="hr-tag" />
      <footer class="py-3">
        <p class="text-center text-mutedd">© NORDIC ENERGY AB</p>
        <p className="text-center  text-mutedd">BOX 841</p>
        <p className="text-center  text-mutedd">101 36 Stockholm-Sverige</p>
        <p className="text-center text-mutedd">{t("phone")}: +46 700 371 999</p>
        <p className="text-center text-mutedd">Mail: info@kingsnordic.com</p>
      </footer>
    </div>
  );
};
