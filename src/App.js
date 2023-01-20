import './App.css'
import { About } from './components/About';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Partners } from './components/Partners';
import { OurTaste } from './components/OurTaste';
import { Cards } from './components/Cards';



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Partners />
      <About />
      <OurTaste />
    
      <Cards />

    </>
  )
}

export default App
