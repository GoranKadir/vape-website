/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../contactForm/cont.css";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState(undefined);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rei51qj",
        "template_9yinyle",
        form.current,
        "aBIbI7_pz8sorvwI2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setStatus({ type: "success" });
        },
        (error) => {
          console.log(error.text);
          setStatus({ type: "error", error });
        }
      );
    e.target.reset();
  };
  return (
    <div className="container mt-3">
      <section id="kontakt">
        <div className="row steven-and-leah">
          <h1 class="section-header text-center">{t("contact")}</h1>
          <div className="col-md-4 formula"></div>
          <div class="col-md-4 text-center team-bx">
            <form
              id="contact-form"
              class="form-horizontal"
              role="form"
              ref={form}
              onSubmit={sendEmail}
            >
              {status?.type === "success" && (
                <div class="alert alert-success" role="alert">
                  Tack för ditt meddelande!
                </div>
              )}
              {status?.type === "error" && (
                <div class="alert alert-danger" role="alert">
                  Oj, något gick fel, ring oss gärna!
                </div>
              )}

              <input
                type="text"
                class="form-control"
                placeholder={t("name")}
                name="user_name"
                required
              />

              <input
                type="email"
                class="form-control"
                placeholder={t("email")}
                name="user_email"
                required
              />

              <textarea
                class="form-control"
                rows="10"
                placeholder={t("message")}
                name="message"
                required
              ></textarea>

              <button
                class="form-control"
                id="submit"
                type="submit"
                value="SEND"
              >
                {t("send")}
              </button>
            </form>
          </div>
          <div className="col-md-4 text-center team-bx" style={{}}>
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">Stockholm, Sverige</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text phone">+46 700 371 999</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">info@kingsnordic.com</span>
                </i>
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <hr className="hr-tag" />
          </div>
        </div>
      </section>
    </div>
  );
};
