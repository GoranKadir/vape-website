import "./App.css";

import { Homepage } from "./components/homepages/Homepage";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cards } from "./components/cards/Cards";
import { ContactForm } from "./components/contactForm/ContactForm";
import { OurTaste } from "./components/tastes/OurTaste";
import { Contact } from "./components/contactForm/Contact";

const TRACKING_ID = "UA-180705802-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview("/");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="tastes" element={<Cards />} />
        <Route path="ourtastes" element={<OurTaste />} />

        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
