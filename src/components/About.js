import React from "react";
import iceMango from "../assets/all-vape2.png";
import Languageoption from '../components/language-dropdown.js'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

export const About = () => {
  const { t } = useTranslation();
  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
}
  return (
    <div className="container mt-3" id="omoss">
      <div className="row">
        <div className="col-md-6 mt-3 img-hover-background">
          <div className="geeks">
            <img src={iceMango} alt="all vapes" className="all-vape-img" />
          </div>
        </div>

        <div className="col-md-6 mt-3">
       
          <h1 className="text-center h1-title">{t('about')}</h1>

          <h1 className="text-center big-text">{t('vape-heading')}</h1>
          <p className="text-center">
            {t('about-text')}
            
          </p>
          
            <h1 className="text-center big-text">{t('mesh-coil')}</h1>
            <p className="text-center fw-bold">{t('mesh-heading')}</p>
            <p className="text-center">
            {t('mesh-text')}
          </p>

          <div className="row">
            <div className="col-md-4 text-center">
              <p className="icon-text">{t('800-bloss')}</p>
            </div>
            <div className="col-md-4 text-center ">
              <p className="icon-text">{t('15-tastes')}</p>
            </div>
            <div className="col-md-4 text-center">
              <p className="icon-text">{t('simple-use')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};