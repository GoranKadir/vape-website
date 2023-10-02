import React, { useEffect, useState } from "react";

import "../card/card.css";
import { useTranslation } from 'react-i18next'

export const Card = ({ imgUrl, title, descripton, cssStyle, cssStyleDesc }) => {
  const { t } = useTranslation();
  // const [img, setImg] = useState();

  // useEffect(() => {
  //   import(`../../../assets/${imgUrl}.png`).then((im) => {
  //     setImg(im.default);
  //   });
  // }, []);

  return (
   
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card geeks">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <h5 className={cssStyle}>{title}</h5>
          <div className="card-body d-flex flex-column">
            <p className={cssStyleDesc}>{descripton}</p>
          </div>
        </div>
      </div>

    
   
  );
};