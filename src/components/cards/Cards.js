import React from "react";

import { Card } from "./card/Card";
import "../cards/card/card.css";

export const Cards = () => {
  return (
    <div className="container" id="services">
      <div className="text-center mt-5">
        <h1 className="h1-title text-center mt-5">Våra smaker</h1>
      </div>
      <p className="text-center">
        Kings Nordic finns i olika varianter av fruktsorter, mentol, godis eller
        tobak. Välj din egna favorit bland 15 st olika smaker.
      </p>

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
              Specifikation & Ingredienser
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
                <span className="taste-span">Nicotine: </span>20mg salt
              </p>
              <p>
                <span className="taste-span">Battery capacity: </span>550mAh
              </p>
              <p>
                <span className="taste-span">E-juice capacity: </span>2ml
              </p>
              <p>
                <span className="taste-span">Resistance: </span>1.8ohm
              </p>
              <p>
                <span className="taste-span">Voltage: </span>3.7V
              </p>
              <p>
                <span className="taste-span">Weight: </span>20g
              </p>
              <p>
                <span className="taste-span"> E-juice mix: </span>50/50 PG/VG
              </p>
              <p>
                <span className="taste-span"> Puffs: </span> Aprox 800
              </p>
              <p>
                <span className="taste-span"> Mesh coil</span>
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <h1 className="big-text text-center">Ingredients</h1>

            <div className="mt-3 text-center">
              <p>Vegetable</p>
              <p> glycerin</p>
              <p>propylene glycol</p>
              <p> nicotine</p>
              <p>benzoic acid</p>
              <p>flavourings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Card
          imgUrl={"grapefruit-strawberry"}
          title={"Grapefruit Strawberry"}
          descripton={
            "Smak av grapefruit och jordgubbar."
          }
          cssStyle={"card-title text-center grape-straw"}
        />
        <Card
          imgUrl={"peach-ice"}
          title={"Peach Ice"}
          descripton={"Smak av söt persika med cooling."}
          cssStyle={"card-title text-center peach-ice"}
        />
        <Card
          imgUrl={"strawberry-ly"}
          title={"Strawberry Lychee"}
          descripton={
            "Har en smak av tropisk litchifrukt tillsammans med jordgubbar."
          }
          cssStyle={"card-title text-center strawberry-ly"}
        />
        <Card
          imgUrl={"ice-mango"}
          title={"Ice Mango"}
          descripton={"Exotisk smak av mango tillsammans med sval mentol-eftersmak."}
          cssStyle={"card-title text-center mango"}
        />
        <Card
          imgUrl={"blood-orange"}
          title={"Blood Orange"}
          descripton={"Fruktig smak i form av färsk blodapelsin."}
          cssStyle={"card-title text-center blood-orange"}
        />
        <Card
          imgUrl={"grape-paradise"}
          title={"Grape Paradise"}
          descripton={"Levererar en smak av färska vindruvor."}
          cssStyle={"card-title text-center grape-para"}
        />
        <Card
          imgUrl={"blueberry-raspberry"}
          title={"Blueberry Raspberry"}
          descripton={"Är en bärmix med blåbär tillsammans med hallon."}
          cssStyle={"card-title text-center blue-rasp"}
        />

        <Card
          imgUrl={"lush-ice"}
          title={"Lush Ice"}
          descripton={"Smak av vattenmelon med cooling."}
          cssStyle={"card-title text-center lush"}
        />
        <Card
          imgUrl={"apple-ice"}
          title={"Apple Ice"}
          descripton={"En smak av grönt äpple med cooling."}
          cssStyle={"card-title text-center apple"}

        />



        <Card
          imgUrl={"cool-mint"}
          title={"Cool Mint"}
          descripton={"Svalkande mintvape med klassiskt kylig mint."}
          cssStyle={"card-title text-center mint"}
        />
        <Card
          imgUrl={"ice-cola"}
          title={"Ice Cola"}
          descripton={"Uppfriskande smak av coladryck med kylning."}
          cssStyle={"card-title text-center cola"}
        />
        <Card
          imgUrl={"strawberry-apple"}
          title={"Strawberry Apple"}
          descripton={"Ger dig en blandning av färska äpplen och jordgubbar."}
          cssStyle={"card-title text-center straw-apple"}
        />
        <Card
          imgUrl={"guava-ice"}
          title={"Guava Ice"}
          descripton={"Tropisk fruktsmak i form av Guava med kylning."}
          cssStyle={"card-title text-center guava"}
        />

        <Card
          imgUrl={"pure-tobacco"}
          title={"Pure Tobacco"}
          descripton={"Autentisk smak av cigaretter."}
          cssStyle={"card-title text-center tobacco"}
        />
        <Card
          imgUrl={"cocktail"}
          title={"Cocktail"}
          descripton={"Här har vi en fruktig Cocktail-dryck."}
          cssStyle={"card-title text-center cocktail"}
        />

      </div>

    </div>
  );
};