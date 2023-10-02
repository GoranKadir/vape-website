import React from "react";

import { Card } from "./card/Card";
import "../cards/card/card.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const Cards = () => {
  const { t } = useTranslation();
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("KingsNordic.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "KingsNordic.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="container" id="smaker">
      <div className="text-center mt-5">
        <h1 className="big-text text-center">{t("15-kunglig")}</h1>
      </div>
      <p className="text-center">{t("15-kunglig-text")}</p>

      <div className="row">
        <Card
          imgUrl={"https://i.postimg.cc/J7SFq9tt/1-Lush-Ice-Vatten-Melon.png"}
          title={"LUCH ICE (VATTENMELON)"}
          descripton={t("lush-ice")}
          cssStyle={"card-title text-center lush"}
          cssStyleDesc={"card-text mb-4 lush"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/5y8SpKkF/2-Mango-Ice.png"}
          title={"MANGO ICE"}
          descripton={t("ice-mango")}
          cssStyle={"card-title text-center mango"}
          cssStyleDesc={"card-text mb-4 mango"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/PqqKh4NB/3-Grapefruit-Strawberry.png"}
          title={"GRAPEFRUIT STRAWBERRY"}
          descripton={t("smak-grape")}
          cssStyle={"card-title text-center grape-straw"}
          cssStyleDesc={"card-text mb-4 grape-straw"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/9M6BdH1h/4-Strawberry-Apple.png"}
          title={"STRAWBERRY APPLE"}
          descripton={t("strawberry-apple")}
          cssStyle={"card-title text-center straw-apple"}
          cssStyleDesc={"card-text mb-4 straw-apple"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/nVm2HMcc/5-Grape-Paradise.png"}
          title={"GRAPE PARADISE"}
          descripton={t("grape-paradise")}
          cssStyle={"card-title text-center grape-para"}
          cssStyleDesc={"card-text mb-4 grape-para"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/cL0XkZW1/6-Blood-Orange.png"}
          title={"BLOOD ORANGE"}
          descripton={t("blood-orange")}
          cssStyle={"card-title text-center blood-orange"}
          cssStyleDesc={"card-text mb-4 blood-orange"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/ZqDHqdd0/7-Peach-Ice.png"}
          title={"PEACH ICE"}
          descripton={t("peach-ice")}
          cssStyle={"card-title text-center peach-ice"}
          cssStyleDesc={"card-text mb-4 peach-ice"}
        />
        <Card
          imgUrl={"https://i.postimg.cc/J4WqtmG3/8-Strawberry-Lychee.png"}
          title={"STRAWBERRY LYCHEE"}
          descripton={t("strawberry-ly")}
          cssStyle={"card-title text-center strawberry-ly"}
          cssStyleDesc={"card-text mb-4 strawberry-ly"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/Mp5th4Z7/9-Blueberry-Raspberry.png"}
          title={"BLUEBERRY RASPBERRY"}
          descripton={t("blueberry-raspberry")}
          cssStyle={"card-title text-center blue-rasp"}
          cssStyleDesc={"card-text mb-4 blue-rasp"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/Fzb00d7y/10-Apple-Ice.png"}
          title={"APPLE ICE"}
          descripton={t("apple-ice")}
          cssStyle={"card-title text-center apple"}
          cssStyleDesc={"card-text mb-4 apple"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/prMD9YXV/11-Cool-Mint.png"}
          title={"COOL MINT"}
          descripton={t("cool-mint")}
          cssStyle={"card-title text-center mint"}
          cssStyleDesc={"card-text mb-4 mint"}
        />
        <Card
          imgUrl={"https://i.postimg.cc/nzD4cwxw/12-Guava-Ice.png"}
          title={"GUAVA ICE"}
          descripton={t("guava-ice")}
          cssStyle={"card-title text-center guava"}
          cssStyleDesc={"card-text mb-4 guava"}
        />
        <Card
          imgUrl={"https://i.postimg.cc/TPhjB34x/13-Cola-Ice.png"}
          title={"COLA ICE"}
          descripton={t("ice-cola")}
          cssStyle={"card-title text-center cola"}
          cssStyleDesc={"card-text mb-4 cola"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/rpbGT2Br/14-Cocktail.png"}
          title={"COCKTAIL"}
          descripton={t("cocktail")}
          cssStyle={"card-title text-center cocktail"}
          cssStyleDesc={"card-text mb-4 cocktail"}
        />

        <Card
          imgUrl={"https://i.postimg.cc/DwxdCX55/15-Pure-Tobacco.png"}
          title={"PURE TOBACCO"}
          descripton={t("pure-tobacco")}
          cssStyle={"card-title text-center tobacco"}
          cssStyleDesc={"card-text mb-4 tobacco"}
        />
        <Card
          imgUrl={"https://i.postimg.cc/DwxdCX55/15-Pure-Tobacco.png"}
          title={"PURE TOBACCO"}
          descripton={t("pure-tobacco")}
          cssStyle={"card-title text-center tobacco"}
          cssStyleDesc={"card-text mb-4 tobacco"}
        />
        <Card
          imgUrl={"https://i.postimg.cc/Wp0GBKXd/16-LOVE-66-1.png"}
          title={"LOLLO (LOVE 66)"}
          descripton={t("love-66")}
          cssStyle={"card-title text-center love66"}
          cssStyleDesc={"card-text mb-4 love66"}
        />
        <Card
          imgUrl={"https://i.postimg.cc/25QKT6vm/Brazil-Mint.png"}
          title={"BRAZIL MINT"}
          descripton={t("brazil-mint")}
          cssStyle={"card-title text-center brazil"}
          cssStyleDesc={"card-text mb-4 brazil"}
        />
        <Card
          imgUrl={"https://i.postimg.cc/pLXWF2W6/18-Cuban-Tobacco.png"}
          title={"CUBAN TOBACCO"}
          descripton={t("cuban-tobacco")}
          cssStyle={"card-title text-center cuban"}
          cssStyleDesc={"card-text mb-4 cuban"}
        />
      </div>

      {/*   <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card geeks">
            <img
              src="https://i.postimg.cc/Wp0GBKXd/16-LOVE-66-1.png"
              className="card-img-top"
              alt="..."
            />
            <h5 className="card-title text-center love66">LOLLO (LOVE 66)</h5>
            <div className="card-body d-flex flex-column">
              <p className="card-text mb-4 love66">{t("love-66")}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div> */}

      <h3 className="big-text text-center mt-3">{t("download-pdf")}</h3>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <button
            onClick={onButtonClick}
            type="button"
            className="btn btn-dark col-md-6"
          >
            {t("download")}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-filetype-pdf"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
              />
            </svg>
          </button>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div
            id="regularHeadingFirst"
            className="read-more-button text-center"
          >
            <a
              className="collapse-btn"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {t("spec")}
            </a>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="collapse mt-5" id="collapseExample">
        <div className="row">
          <div className="title_lines text-center spec-ing"></div>
          <div className="col-md-6 mt-3">
            <h1 className="big-text text-center">
              Nordic Kings Engångs E-Cigg specifikation
            </h1>
            <div className="mt-3 text-center">
              <p>
                <span className="taste-span">Nikotin: </span>20mg salt
              </p>
              <p>
                <span className="taste-span">Batterikapacitet: </span>550mAh
              </p>
              <p>
                <span className="taste-span">E-juice kapacitet: </span>2ml
              </p>
              <p>
                <span className="taste-span">Motstånd: </span>1.8ohm
              </p>
              <p>
                <span className="taste-span">Spänning: </span>3.7V
              </p>
              <p>
                <span className="taste-span">Vikt: </span>20g
              </p>
              <p>
                <span className="taste-span">E-juice mix: </span>50/50 PG/VG
              </p>
              <p>
                <span className="taste-span">Puffar: </span> Aprox 800
              </p>
              <p>
                <span className="taste-span">Mesh coil</span>
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <h1 className="big-text text-center">Ingredienser</h1>

            <div className="mt-3 text-center">
              <p>Vegetabilisk</p>
              <p>Glycerin</p>
              <p>Propylene glycol</p>
              <p>Nikotin</p>
              <p>Nensoesyra</p>
              <p>Smakämnen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
