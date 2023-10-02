import React from "react";

import "../tastes/taste/taste.css";

export const OurTaste = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h1 className="big-text text-center">
            Utforska våra premiumvapes som finns i 16 olika smaker!
          </h1>
          <div className="row">
            <div className="col-md-6 mt-3 text-center">
              <ul className="list-group">
                <a
                  type="button"
                  className="lushIce"
                  data-bs-toggle="modal"
                  data-bs-target="#lushIce"
                >
                  <li className="list-group-item">Lush Ice (Vattenmelon)</li>
                </a>

                <a
                  type="button"
                  className="mango"
                  data-bs-toggle="modal"
                  data-bs-target="#iceMango"
                >
                  <li className="list-group-item">Mango ICE</li>
                </a>

                <a
                  type="button"
                  className="grape-straw"
                  data-bs-toggle="modal"
                  data-bs-target="#grapeStraw"
                >
                  <li className="list-group-item">Grapefruit Strawberry</li>
                </a>

                <a
                  type="button"
                  className="strawApple"
                  data-bs-toggle="modal"
                  data-bs-target="#strawApple"
                >
                  <li className="list-group-item">Strawberry Apple</li>
                </a>

                <a
                  type="button"
                  className="grapeParadise"
                  data-bs-toggle="modal"
                  data-bs-target="#grapeParadise"
                >
                  <li className="list-group-item">Grape Paradise</li>
                </a>

                <a
                  type="button"
                  className="bloodOrange"
                  data-bs-toggle="modal"
                  data-bs-target="#bloodOrange"
                >
                  <li className="list-group-item">Blood Orange</li>
                </a>

                <a
                  type="button"
                  className="peach-ice"
                  data-bs-toggle="modal"
                  data-bs-target="#peachIce"
                >
                  <li className="list-group-item">Peach Ice</li>
                </a>

                <a
                  type="button"
                  className="strawberryLy"
                  data-bs-toggle="modal"
                  data-bs-target="#strawberryLy"
                >
                  <li className="list-group-item">Strawberry Lychee</li>
                </a>
                <a
                  type="button"
                  className="cuban"
                  data-bs-toggle="modal"
                  data-bs-target="#cuban"
                >
                  <li className="list-group-item">Cuban Tobacco</li>
                </a>
              </ul>
            </div>

            <div className="col-md-6 mt-3 text-center">
              <ul className="list-group">
                <a
                  type="button"
                  className="blueRasp"
                  data-bs-toggle="modal"
                  data-bs-target="#blueBerryRasp"
                >
                  <li className="list-group-item">Blueberry Raspberry</li>
                </a>

                <a
                  type="button"
                  className="appleIce"
                  data-bs-toggle="modal"
                  data-bs-target="#appleIce"
                >
                  <li className="list-group-item">Apple Ice</li>
                </a>

                <a
                  type="button"
                  className="coolMint"
                  data-bs-toggle="modal"
                  data-bs-target="#coolMint"
                >
                  <li className="list-group-item">Cool Mint</li>
                </a>
                <a
                  type="button"
                  className="guavaIce"
                  data-bs-toggle="modal"
                  data-bs-target="#guavaIce"
                >
                  <li className="list-group-item">Guava Ice</li>
                </a>

                <a
                  type="button"
                  className="iceCola"
                  data-bs-toggle="modal"
                  data-bs-target="#iceCola"
                >
                  <li className="list-group-item">Cola ICE</li>
                </a>

                <a
                  type="button"
                  className="cocktail"
                  data-bs-toggle="modal"
                  data-bs-target="#cocktail"
                >
                  <li className="list-group-item">Cocktail</li>
                </a>

                <a
                  type="button"
                  className="pureTobacco"
                  data-bs-toggle="modal"
                  data-bs-target="#pureTobacco"
                >
                  <li className="list-group-item">Pure Tobacco</li>
                </a>
                <a
                  type="button"
                  className="lollo"
                  data-bs-toggle="modal"
                  data-bs-target="#lollo"
                >
                  <li className="list-group-item">Lollo (Love 66)</li>
                </a>
                <a
                  type="button"
                  className="brazil"
                  data-bs-toggle="modal"
                  data-bs-target="#brazil"
                >
                  <li className="list-group-item">Brazil mint</li>
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/B6jjq8TS/09.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="iceMango">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Mango Ice</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/Cx4BJpMg/02.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="grapeStraw">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Grapefruit Strawberry</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/YqKvHCh7/03.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="peachIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Peach Ice</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/wBTtG43s/07.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="strawApple">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Strawberry Apple</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/xCBcq05K/04.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="appleIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Apple Ice</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/jSRCD3Hk/10.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="strawberryLy">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Strawberry Lychee</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/2yv3ZP9g/08.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="iceCola">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Cola ice</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/g0T0BYff/13.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="bloodOrange">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Blood Orange</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/jjgW06J3/06.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="grapeParadise">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Grape Paradise</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/ZYyW2dYj/05.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="guavaIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Guava Ice</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/Gp22QBSF/12.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="lushIce">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">
                Lush Ice (Vattenmelon)
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/QdDKpd3m/01.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="pureTobacco">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Pure Tobacco</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/T183ft20/15.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="coolMint">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Cool Mint</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/WbGhbckk/11.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="cocktail">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Cocktail</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/Z5jnpPjY/14.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="lollo">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Lollo (Love 66)</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/zBHGssN3/16.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="brazil">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Brazil Mint</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/NMbPqzpz/17.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="cuban">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Cuban Tobacco</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/3N5r4mNX/18-CUBAN-TOBACCO.png"
                alt="bild"
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
