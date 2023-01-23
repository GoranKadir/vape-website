import React, { useEffect, useState } from "react";

import "../card/card.css";

export const Card = ({ imgUrl, title, descripton, cssStyle }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    import(`../../../assets/${imgUrl}.png`).then((im) => {
      setImg(im.default);
    });
  }, []);

  return (
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card geeks">
        <img src={img} className="card-img-top" alt="..." />
        <h5 className={cssStyle}>{title}</h5>
        <div className="card-body d-flex flex-column">
          <p className="card-text mb-4">{descripton}</p>
        </div>
      </div>
    </div>
  );
};