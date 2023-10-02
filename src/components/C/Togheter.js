import { Contact } from "../contactForm/Contact";
import { Footer } from "../footer/Footer";
import { Partners } from "../Partners";
import "../C/togheter.css";
export const Togheter = () => {
  return (
    <div className="container-fluid all">
      <Contact />
      {/*  <Partners /> */}
      <Footer />
    </div>
  );
};
