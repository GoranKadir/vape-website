import React from "react";

import { OurTaste } from "../tastes/OurTaste";
import { Cards } from "../cards/Cards.js";
import { ContactForm } from "../contactForm/ContactForm";
import { Contact } from "../contactForm/Contact";
import { Footer } from "../footer/Footer";
import { ScrollButton } from "../scrollButton/ScrollButton";

import { About } from "../About";
import { Partners } from "../Partners";
import { Navbarr } from "../nav/Navbarr";
import { Togheter } from "../C/Togheter";

export const Homepage = () => {
  return (
    <>
      <Navbarr />
      <About />
      <Cards />
      <OurTaste />
      <Togheter />
      <ScrollButton />
    </>
  );
};
