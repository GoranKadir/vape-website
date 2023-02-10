import React from 'react'
import peachIce from "../../assets/peach-ice.png";
import logo from "../../assets/logo-nobg.png";
import "../headers/header.css";

import {useTranslation} from 'react-i18next'
import i18next from "i18next"


export const Header = () => {
    const { t } = useTranslation();

    return (

        <div id="hero" class="hero">
           
           <div className='hero-inner'>
           <img src={logo} alt="bild" className='kings-logo' />
           <h1 className='kings-text'>KINGS NORDIC</h1>
           <h3 className='kings-text'>{t('header-sub')}</h3>
           </div>
                
                
        </div>
        
    )
}

