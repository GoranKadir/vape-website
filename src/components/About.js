import React from "react";
import iceMango from "../assets/all-vape2.png";

export const About = () => {
  return (
    <div className="container mt-3" id="omoss">
      <div className="row">
        <div className="col-md-6 mt-3 img-hover-background">
          <div className="geeks">
            <img src={iceMango} alt="all vapes" className="all-vape-img" />
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <h1 className="text-center h1-title">Om oss</h1>

          <h1 className="text-center big-text">En kunglig premium engångsvape</h1>
          <p className="text-center">
            Kings Nordic kan användas helt utan förkunskaper då du endast öppnar
            paketet och börjar vejpa. Denna engångsvape klarar att köra upp till
            800 bloss och använder nikotinsalt som är lenare för halsen. Nordic
            Kings är kompakt och smidig, detta kit kommer i 15 olika
            smaker/färger. Dessutom har den här engångsvejpen
            inhaleringsaktivering som gör den mycket enkel att använda. Den
            kräver inte heller laddning eller fyllning så om du funderar på att
            byta från rökning till vaping är denna bekväma, lättanvända
            engångsvape kanske något för dig.
          </p>
          <p>
            <h1 className="text-center big-text">Mesh coil</h1>
            <p className="text-center">Våra vapes använder sig utav Mesh coil</p>
            En Mesh coil är en coil som inte är skapad utav tråd utan kommer i formen utav ett metall nät.
            Nätet är gjort utav metall och principen fungerar så att ju större yta som värms upp desto mer ånga kommer e-cigaretten att producera.
          </p>

          <div className="row">
            <div className="col-md-4 text-center">
              <p className="icon-text">800 bloss</p>
            </div>
            <div className="col-md-4 text-center ">
              <p className="icon-text">15 olika smaker</p>
            </div>
            <div className="col-md-4 text-center">
              <p className="icon-text">Enkel att använda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};