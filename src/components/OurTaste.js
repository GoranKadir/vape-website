import React from "react";
import logo from "../assets/logo.png";
import allVape from "../assets/all-vape.png";
import allVape2 from "../assets/all-vape2.png";

export const OurTaste = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1 className="big-text text-center">15 smaker av högsta kunglig premium kvalité</h1>
          <div className="row">
            <div className="col-md-6 mt-3 text-center">

              <ul class="list-group">
                <li class="list-group-item">Blueberry Raspberry</li>
                <li class="list-group-item">Ice Mango</li>
                <li class="list-group-item">Grapefruit Strawberry</li>
                <li class="list-group-item">Peach Ice</li>
                <li class="list-group-item">Strawberry Apple</li>
                <li class="list-group-item">Apple Ice</li>
                <li class="list-group-item">Strawberry Lychee</li>
                <li class="list-group-item">Ice Cola</li>

              </ul>
            </div>
            <div className="col-md-6 mt-3 text-center">
              <ul class="list-group">
                <li class="list-group-item">Blood Orange</li>
                <li class="list-group-item">Grape Paradise</li>
                <li class="list-group-item">Guava Ice</li>
                <li class="list-group-item">Lush Ice</li>
                <li class="list-group-item">Pure Tobacco</li>
                <li class="list-group-item">Cool Mint</li>
                <li class="list-group-item">Cocktail</li>

              </ul>
            </div>
          </div>
        </div>


        <div className="col-md-6 mt-3 text-center">
          <div className="geeks">
            <img src={allVape} alt="all vapes" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};