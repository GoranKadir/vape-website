


import React from 'react'
import "../footer/footer.css"
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-nav">{t('home')}</a></li>
                    <li class="nav-item"><a href="#services" class="nav-link px-2 text-nav">{t('tast')}</a></li>
                    <li class="nav-item"><a href="#omoss" class="nav-link px-2 text-nav">{t('about')}</a></li>
                </ul>
                <p class="text-center text-mutedd">© NORDIC ENERGY AB</p>
                <p className='text-center  text-mutedd'>BOX 841</p>
                <p className='text-center  text-mutedd'>101 36 Stockholm-Sverige</p>
                <p className='text-center text-mutedd'>{t('phone')}: +46 700371999</p>
                <p className='text-center text-mutedd'>Mail: info@kingsnordic.com</p>
            </footer>
        </div>
    )
}



