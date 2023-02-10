import React from "react";

import "../tastes/taste/taste.css";





export const OurTaste = () => {


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