import React from 'react';
import logo from "../assets/logo.png";
import allVape from "../assets/all-vape.png";
import allVape2 from "../assets/all-vape2.png";

export const OurTaste = () => {
    return (
        <div className='container'>

            <div className='row'>
                <div className="title_lines text-center mt-5">Våra smaker</div>
                <p className='about-us-p text-center'>
                    Kings Nordic finns i olika varianter av fruktsorter, mentol, godis eller tobak.  Välj din egna favorit bland 15 st olika smaker.
                </p>
                <div className='col-md-6 mt-3'>


                    <ul>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Lush Ice</span> – Smak av vattenmelon med cooling.</li>

                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Apple Ice</span> – En smak av grönt äpple med cooling.</li>

                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Strawberry Lychee</span> – Har en smak av tropisk litchifrukt tillsammans med jordgubbar.</li>

                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Blueberry Raspberry</span> – Är en bärmix med blåbär tillsammans med hallon.</li>

                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Ice Mango </span>– Exotisk smak av mango tillsammans med sval mentol-eftersmak.</li>

                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Cool Mint</span> – Svalkande mintvape med klassiskt kylig mint.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Ice Cola</span> – Uppfriskande smak av coladryck med kylning.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Strawberry Apple</span> – Ger dig en blandning av färska äpplen och jordgubbar.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Guava Ice</span> – Tropisk fruktsmak i form av Guava med kylning.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Blood Orange</span> – Fruktig smak i form av färsk blodapelsin.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Grape Paradise</span> – Levererar en smak av färska vindruvor.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Pure Tobacco</span> – Autentisk smak av cigaretter.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Cocktail</span> – Här har vi en fruktig Cocktal-dryck.</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Grapefruit Strawberry</span> – Smak av grapefruit och jordgubbar</li>
                        <li className='taste-li'><span className="dot"></span> <span className='taste-span'>Peach ICE</span> – Smak av söt persika med cooling.</li>
                    </ul>
                </div>
                <div className='col-md-6 mt-3 text-center'>
                    <div className="geeks">
                        <img src={allVape2} alt="all vapes" className='all-vape-img' />
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <div id="regularHeadingFirst" className="read-more-button text-center">
                                <a className="collapse-btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Specifikation & Ingredienser
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4'></div>
                    </div>




                    <div className="collapse mt-5" id="collapseExample">

                        <div className='row'>
                            <div className="title_lines text-center spec-ing">Specifikation & Ingredienser</div>
                            <div className='col-md-6 mt-3'>
                                <h1 className='under-rubrik text-center'>Nordic Kings Engångs E-Cigg specifikation</h1>
                                <div className='mt-3 text-center'>
                                    <p><span className='taste-span'>Nicotine:</span>20mg salt</p>
                                    <p><span className='taste-span'>Battery capacity:</span>550mAh</p>
                                    <p><span className='taste-span'>E-juice capacity:</span>2ml</p>
                                    <p><span className='taste-span'>Resistance:</span>1.8ohm</p>
                                    <p><span className='taste-span'>Voltage:</span>3.7V</p>
                                    <p><span className='taste-span'>Weight:</span>20g</p>
                                    <p><span className='taste-span'> E-juice mix:</span>50/50 PG/VG</p>
                                    <p><span className='taste-span'> Puffs:</span> Aprox 800</p>
                                </div>
                            </div>
                            <div className='col-md-6 mt-3'>
                                <h1 className='under-rubrik text-center'>Ingredients</h1>

                                <div className='mt-3 text-center'>
                                    <p>Vegetable</p>
                                    <p> glycerin</p>
                                    <p>propylene glycol</p>
                                    <p> nicotine</p>
                                    <p>benzoic acid</p>
                                    <p>flavourings</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}