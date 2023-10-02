import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../contactForm/contact.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState(undefined);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dyozuld",
        "template_jib2hn6",
        form.current,
        "MkebOPTi1qSaiDRG5"
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
  };

  return (
    <div className="container mt-3">
      <div class="container-form my-5" id="kontakt">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <div class="topic">{t("address")}</div>
              <div class="text-one">BOX 841</div>
              <div class="text-two">101 36 Stockholm-Sverige</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <div class="topic">{t("phone")}</div>
              <div class="text-one">+46 700 371 999</div>
            </div>
            <div class="email details">
              <FontAwesomeIcon icon={faEnvelope} />
              <div class="topic">Email</div>
              <div class="text-one">info@kingsnordic.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">{t("send-message")}</div>

            <form ref={form} onSubmit={sendEmail}>
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
              <div class="input-box">
                <input
                  type="text"
                  name="sender"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div class="input-box">
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div class="input-box message-box">
                <textarea class="" name="message" required></textarea>
              </div>
              <div class="button">
                <input type="submit" value={t("send")} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
