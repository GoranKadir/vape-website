import React from "react";

import "../tastes/taste/taste.css";





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
              <ul className="list-group">

                <a type="button" className="blueRasp" data-bs-toggle="modal" data-bs-target="#blueBerryRasp">
                  <li className="list-group-item">
                    Blueberry Raspberry
                  </li>
                </a>

                <a type="button" className="mango" data-bs-toggle="modal" data-bs-target="#iceMango">
                  <li className="list-group-item">
                    Ice Mango
                  </li>
                </a>

                <a type="button" className="grape-straw" data-bs-toggle="modal" data-bs-target="#grapeStraw">
                  <li className="list-group-item">
                    Grapefruit Strawberry
                  </li>
                </a>

                <a type="button" className="peach-ice" data-bs-toggle="modal" data-bs-target="#peachIce">
                  <li className="list-group-item">
                    Peach Ice
                  </li>
                </a>

                <a type="button" className="bloodOrange" data-bs-toggle="modal" data-bs-target="#bloodOrange">
                  <li className="list-group-item">

                    Blood Orange

                  </li>
                </a>

                <a type="button" className="appleIce" data-bs-toggle="modal" data-bs-target="#appleIce">
                  <li className="list-group-item">
                    Apple Ice
                  </li>
                </a>

                <a type="button" className="strawberryLy" data-bs-toggle="modal" data-bs-target="#strawberryLy">
                  <li className="list-group-item">
                    strawberry Lychee
                  </li>
                </a>
                <a type="button" className="iceCola" data-bs-toggle="modal" data-bs-target="#iceCola">
                  <li className="list-group-item">
                    Ice Cola
                  </li>
                </a>
              </ul>
            </div>

            <div className="col-md-6 mt-3 text-center">
              <ul className="list-group">

                <a type="button" className="strawApple" data-bs-toggle="modal" data-bs-target="#strawApple">
                  <li className="list-group-item">
                    Strawberry Apple
                  </li>
                </a>

                <a type="button" className="grapeParadise" data-bs-toggle="modal" data-bs-target="#grapeParadise">
                  <li className="list-group-item">

                    Grape Paradise

                  </li>
                </a>
                <a type="button" className="guavaIce" data-bs-toggle="modal" data-bs-target="#guavaIce">
                  <li className="list-group-item">
                    Guava Ice
                  </li>
                </a>

                <a type="button" className="lushIce" data-bs-toggle="modal" data-bs-target="#lushIce">
                  <li className="list-group-item">

                    Lush Ice

                  </li>
                </a>

                <a type="button" className="pureTobacco" data-bs-toggle="modal" data-bs-target="#pureTobacco">
                  <li className="list-group-item">
                    Pure Tobacco
                  </li>
                </a>

                <a type="button" className="coolMint" data-bs-toggle="modal" data-bs-target="#coolMint">
                  <li className="list-group-item">

                    Cool Mint

                  </li>
                </a>
                <a type="button" className="cocktail" data-bs-toggle="modal" data-bs-target="#cocktail">
                  <li className="list-group-item">
                    Cocktail
                  </li>
                </a>
              </ul>

            </div>
            <h3 className="big-text text-center mt-3">ladda ner våra smaker i PDF
            </h3>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center">
                <button onClick={onButtonClick} type="button" className="btn btn-dark col-md-6">
                  Ladda ner  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                  </svg>
                </button>
              </div>
              <div className="col-md-2"></div>
            </div>

          </div>
        </div>

      </div>
      <div className="row"></div>



      <div className="modal fade" id="blueBerryRasp">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Blueberry Raspberry</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/DfgDB1y3/Blue-Raspberry.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="iceMango">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Ice Mango</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/nh6wCkTB/Ice-Mango.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>
      <div className="modal fade" id="grapeStraw">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Grapefruit Strawberry</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/764sNZFL/Grapefruit-Strawberry.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="peachIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Peach Ice</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/x8T6WFTD/Peach-Ice.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="strawApple">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Strawberry Apple</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/zD0tn50J/Strawberry-Apple.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="appleIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Apple Ice</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/9MT2D0GF/Apple-Ice.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="strawberryLy">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Strawberry Lychee</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/7YhB9cWS/Strawberry-Lychee.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="iceCola">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Ice Cola</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/k5KY8bhZ/Ice-Cola.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="bloodOrange">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Blood Orange</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/3NKq3x1q/Blood-Orange.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="grapeParadise">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Grape Paradise</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/TY3sShpL/Grape-Paradise.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="guavaIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Guava Ice</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/W1DHNKms/Guava-Ice.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="lushIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Lush Ice</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/ZRLfshmx/Lush-Ice.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="pureTobacco">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Pure Tobacco</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/vTq0MLc1/Pure-Tobacco.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="coolMint">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Cool Mint</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/3JfqH7vL/Cool-Mint.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="cocktail">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Cocktail</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src="https://i.postimg.cc/wM0GMYbj/Cocktail.png" alt="bild" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};