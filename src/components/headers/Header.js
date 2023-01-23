import React from 'react'
import peachIce from "../../assets/peach-ice.png";
import logo from "../../assets/logo-nobg.png";
import "../headers/header.css";


export const Header = () => {
    return (
        <section class="hero">
            <div class="hero-inner">
                
                <img src={logo} alt="bild" className='kings-logo'/>
                <h1 className='kings-text'>KINGS NORDIC</h1> 
                <h2>Sweden, </h2>

                Vi 
               
            </div>
        </section>
    )
}

