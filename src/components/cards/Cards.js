import React from "react";

import { Card } from "./card/Card";
import "../cards/card/card.css";
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

export const Cards = () => {
  const { t } = useTranslation();
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('KingsNordic.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'KingsNordic.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className="container" id="services">
      <div className="text-center mt-5">
        <h1 className="big-text text-center">{t('15-kunglig')}</h1>
      </div>
      <p className="text-center">
       {t('15-kunglig-text')}
      </p>

      
      

      <div className="row">
        <Card
          imgUrl={"grapefruit-strawberry"}
          title={"GRAPEFRUIT STRAWBERRY"}
          descripton={
            t('smak-grape')

          }
          cssStyle={"card-title text-center grape-straw"}
          cssStyleDesc={"card-text mb-4 grape-straw"}
        />
        <Card
          imgUrl={"peach-ice"}
          title={"PEACH ICE"}
          descripton={t('peach-ice')}
          cssStyle={"card-title text-center peach-ice"}
          cssStyleDesc={"card-text mb-4 peach-ice"}
        />
        <Card
          imgUrl={"strawberry-ly"}
          title={"STRAWBERRY LYCHEE"}
          descripton={
            t('strawberry-ly')
          }
          cssStyle={"card-title text-center strawberry-ly"}
          cssStyleDesc={"card-text mb-4 strawberry-ly"}

        />
        <Card
          imgUrl={"ice-mango"}
          title={"ICE MANGO"}
          descripton={"Exotisk smak av mango tillsammans med sval mentol-eftersmak."}
          cssStyle={"card-title text-center mango"}
          cssStyleDesc={"card-text mb-4 mango"}
        />
        <Card
          imgUrl={"blood-orange"}
          title={"BLOOD ORANGE"}
          descripton={"Fruktig smak i form av färsk blodapelsin."}
          cssStyle={"card-title text-center blood-orange"}
          cssStyleDesc={"card-text mb-4 blood-orange"}

        />
        <Card
          imgUrl={"grape-paradise"}
          title={"GRAPE PARADISE"}
          descripton={"Levererar en smak av färska vindruvor."}
          cssStyle={"card-title text-center grape-para"}
          cssStyleDesc={"card-text mb-4 grape-para"}
        />
        <Card
          imgUrl={"blueberry-raspberry"}
          title={"BLUEBERRY RASPBERRY"}
          descripton={"Är en bärmix med blåbär tillsammans med hallon."}
          cssStyle={"card-title text-center blue-rasp"}
          cssStyleDesc={"card-text mb-4 blue-rasp"}
        />

        <Card
          imgUrl={"lush-ice"}
          title={"LUCH ICE"}
          descripton={"Smak av vattenmelon med cooling."}
          cssStyle={"card-title text-center lush"}
          cssStyleDesc={"card-text mb-4 lush"}
        />
        <Card
          imgUrl={"apple-ice"}
          title={"APPLE ICE"}
          descripton={"En smak av grönt äpple med cooling."}
          cssStyle={"card-title text-center apple"}
          cssStyleDesc={"card-text mb-4 apple"}

        />



        <Card
          imgUrl={"cool-mint"}
          title={"COOL MINT"}
          descripton={"Svalkande mintvape med klassiskt kylig mint."}
          cssStyle={"card-title text-center mint"}
          cssStyleDesc={"card-text mb-4 mint"}
        />
        <Card
          imgUrl={"ice-cola"}
          title={"ICE COLA"}
          descripton={"Uppfriskande smak av coladryck med kylning."}
          cssStyle={"card-title text-center cola"}
          cssStyleDesc={"card-text mb-4 cola"}
        />
        <Card
          imgUrl={"strawberry-apple"}
          title={"STRAWBERRY APPLE"}
          descripton={"Ger dig en blandning av färska äpplen och jordgubbar."}
          cssStyle={"card-title text-center straw-apple"}
          cssStyleDesc={"card-text mb-4 straw-apple"}
        />
        <Card
          imgUrl={"guava-ice"}
          title={"GUAVA ICE"}
          descripton={"Tropisk fruktsmak i form av Guava med kylning."}
          cssStyle={"card-title text-center guava"}
          cssStyleDesc={"card-text mb-4 guava"}
        />

        <Card
          imgUrl={"pure-tobacco"}
          title={"PURE TOBACCO"}
          descripton={"Autentisk smak av cigaretter."}
          cssStyle={"card-title text-center tobacco"}
          cssStyleDesc={"card-text mb-4 tobacco"}
        />
        <Card
          imgUrl={"cocktail"}
          title={"COCKTAIL"}
          descripton={"Här har vi en fruktig Cocktail-dryck."}
          cssStyle={"card-title text-center cocktail"}
          cssStyleDesc={"card-text mb-4 cocktail"}
        />

      </div>

      <h3 className="big-text text-center mt-3">{t('download-pdf')}
      </h3>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <button onClick={onButtonClick} type="button" className="btn btn-dark col-md-6">
           {t('download')}  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
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
              {t('spec')}
            </a>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="collapse mt-5" id="collapseExample">
        <div className="row">
          <div className="title_lines text-center spec-ing">

          </div>
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