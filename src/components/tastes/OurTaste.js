import React from "react";
import logo from "../../assets/logo.png";
import allVape from "../../assets/all-vape.png";
import allVape2 from "../../assets/all-vape2.png";

import "../tastes/taste/taste.css";

import blueberryRasp from "../../assets/blueberry-raspberry.png";

import iceMango from "../../assets/ice-mango.png";
import grapeStraw from "../../assets/grapefruit-strawberry.png";
import peachIce from "../../assets/peach-ice.png";
import strawApple from "../../assets/strawberry-apple.png";
import appleIce from "../../assets/apple-ice.png";
import strawberryLy from "../../assets/strawberry-ly.png"
import iceCola from "../../assets/ice-cola.png"
import bloodOrange from "../../assets/blood-orange.png";
import coolMint from "../../assets/cool-mint.png";
import grapeParadise from "../../assets/grape-paradise.png";
import guavaIce from "../../assets/guava-ice.png";
import lushIce from "../../assets/lush-ice.png";
import pureTobacco from "../../assets/pure-tobacco.png";
import cocktail from "../../assets/cocktail.png";




export const OurTaste = () => {

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
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h1 className="big-text text-center">15 smaker av högsta kunglig premium kvalité</h1>
          <div className="row">
            <div className="col-md-6 mt-3 text-center">
              <ul class="list-group">
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#myModal">
                  Blueberry Raspberry
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#iceMango">
                  Ice Mango
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#grapeStraw">
                  Grapefruit Strawberry
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#peachIce">
                  Peach Ice
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#strawApple">
                  Strawberry Apple
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#appleIce">
                  Apple Ice
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#strawberryLy">
                  strawberry Lychee
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#iceCola">
                  Ice Cola
                </a></li>
              </ul>
            </div>

            <div className="col-md-6 mt-3 text-center">
              <ul class="list-group">
                <li class="list-group-item">
                  <a type="button" class="" data-bs-toggle="modal" data-bs-target="#bloodOrange">
                    Blood Orange
                  </a>
                </li>
                <li class="list-group-item"> <a type="button" class="" data-bs-toggle="modal" data-bs-target="#grapeParadise">
                  Grape Paradise
                </a>
                </li>
                <li class="list-group-item">
                  <a type="button" class="" data-bs-toggle="modal" data-bs-target="#guavaIce">
                    Guava Ice
                  </a>
                </li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#lushIce">
                  Lush Ice
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#pureTobacco">
                  Pure Tobacco
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#coolMint">
                  Cool Mint
                </a></li>
                <li class="list-group-item"><a type="button" class="" data-bs-toggle="modal" data-bs-target="#cocktail">
                  Cocktail
                </a></li>
              </ul>
            </div>
            <h3 className="big-text text-center mt-3">ladda ner våra smaker i PDF
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
              </svg></h3>
            <button onClick={onButtonClick} type="button" class="btn btn-dark">
              Ladda ner
            </button>
          </div>
        </div>

      </div>
      <div className="row"></div>



      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Blueberry Raspberry</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={blueberryRasp} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="iceMango">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Ice Mango</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={iceMango} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
      <div class="modal fade" id="grapeStraw">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Grapefruit Strawberry</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={grapeStraw} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="peachIce">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Peach Ice</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={peachIce} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="strawApple">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Strawberry Apple</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={strawApple} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="appleIce">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Apple Ice</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={appleIce} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="strawberryLy">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Strawberry Lychee</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={strawberryLy} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="iceCola">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Ice Cola</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={iceCola} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="bloodOrange">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Blood Orange</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={bloodOrange} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="grapeParadise">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Grape Paradise</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={grapeParadise} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="guavaIce">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Guava Ice</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={guavaIce} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="lushIce">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Lush Ice</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={lushIce} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="pureTobacco">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Pure Tobacco</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={pureTobacco} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="coolMint">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Cool Mint</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={coolMint} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="cocktail">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-center">Cocktail</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <img src={cocktail} alt="bild" className="img-fluid" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};