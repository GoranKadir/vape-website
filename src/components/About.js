import React, { useState } from "react";
import allTaste from "../assets/16-smaker.png";
import { useTranslation } from "react-i18next";
import { Modal, ModalContent } from "./Modal";

export const About = () => {
  const { t } = useTranslation();
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);

  return (
    <div className="container" id="omoss">
      <div className="row">
        <div className="col-md-6 img-hover-background">
          <Modal onOpen={showModal}>
            <div className="holder">
              <img
                src="https://i.postimg.cc/8cRphcfq/2x9.png"
                alt=""
                className="img-fluid"
                style={{}}
              />
            </div>
          </Modal>
          {isOpen && (
            <ModalContent onClose={() => setIsopen(false)}>
              <img
                src="https://i.postimg.cc/8cRphcfq/2x9.png"
                alt=""
                className="img-fluid"
              />
            </ModalContent>
          )}
        </div>

        <div className="col-md-6 mt-3">
          <h1 className="text-center h1-title">{t("about")}</h1>

          <h1 className="text-center big-text">{t("vape-heading")}</h1>
          <p className="text-center">{t("about-text")}</p>

          <h1 className="text-center big-text">{t("mesh-coil")}</h1>
          <p className="text-center fw-bold">{t("mesh-heading")}</p>
          <p className="text-center">{t("mesh-text")}</p>

          <div className="row">
            <div className="col-md-4 text-center">
              <p className="icon-text">{t("800-bloss")}</p>
            </div>
            <div className="col-md-4 text-center ">
              <p className="icon-text">{t("15-tastes")}</p>
            </div>
            <div className="col-md-4 text-center">
              <p className="icon-text">{t("simple-use")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
