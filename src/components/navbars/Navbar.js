import React, { useState } from 'react';
import '../navbars/navbar.scss';
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo-nobg.png";
import goldLogo from "../../assets/gold-logo.png";
import Languageoption from '../../components/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"



export const Navbar = () => {

    const { t } = useTranslation();
    const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }

    const [open, setOpen] = useState(false);

    const isOpen = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    //lets start animation
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    }

    return (
        <div className="container-size">

            <header>
            <Languageoption onChange={(e)=> handleClick(e)}/>
                <div className="menu" onClick={isOpen}>
                    <i className="fa fa-bars" style={{ fontSize: 48 }}></i>
                </div>

            </header>

            <AnimatePresence>
                {

                    open && (

                        <motion.div className="menu_container"
                            variants={item}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "100vh", opacity: 1 }}
                            transition={{ duration: .5 }}
                            exit="exit"
                        >
                            <div className="btn_close" onClick={closeMenu}>X</div>

                            <motion.div className='img-logo'
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .7 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: 1
                                    }
                                }}
                            >
                                <img src={goldLogo} alt="image" className='logo-img' />
                            </motion.div>
                            <motion.a href="#hem"
                                onClick={closeMenu}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .8 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: 1
                                    }
                                }}

                            >{t('home')}</motion.a>

                            <motion.a href="#services"
                                onClick={closeMenu}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .7 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .8
                                    }
                                }}
                            >{t('tast')}
                            </motion.a>

                            <motion.a href="#omoss"
                                onClick={closeMenu}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .6 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .6
                                    }
                                }}
                            >{t('about')}</motion.a>

                            <motion.a href="#kontakt"
                                onClick={closeMenu}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .4 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .2
                                    }
                                }}
                            >{t('contact')}</motion.a>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <div className="content_wrapper" id="hem">
                <img src={logo} alt="bild" className='kings-logo' />

                <h1 className='kings-text'>KINGS NORDIC</h1>
                <h3 className='kings-text'>{t('header-sub')}</h3>
            </div>
        </div>
    );
}