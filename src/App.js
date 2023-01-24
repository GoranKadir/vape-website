import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/headers/Header";
import { Navbar } from "./components/navbars/Navbar";
import { Partners } from "./components/Partners";
import { OurTaste } from "./components/tastes/OurTaste";
import { Cards } from "./components/cards/Cards.js";
import { ContactForm } from "./components/contactForm/ContactForm";
import { Benefit } from "./components/benefits/Benefit";

import peachIce from "../src/assets/peach-ice.png";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
   
      <Navbar />
      <Header />
      <Partners />
      <About />
     
      <OurTaste />
    

      <Cards />
      <ContactForm />
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            {/* <Benefit
                show={2}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src={peachIce} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                    <img src={peachIce} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                    <img src={peachIce} alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Benefit> */}
        </div>
        <Footer />
    </>
  );
}

export default App;