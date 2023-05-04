
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gallery } from './components/Gallery';
import { Testimonial } from './components/Testimonial';
import { About } from './components/About';
import { Service } from './components/Service';
import { Nopage } from './components/Nopage';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ConnectWithUs } from './components/ConnectWithUs';
import { Wedding } from './components/Wedding';
// import { Sample } from './components/Sample';
import Totop from './components/Totop';
import { Temple } from './components/Temple';
import { Reception } from './components/Reception';
import { Haldi } from './components/Haldi';
import { Bday } from './components/Bday';
import { CarDecoration } from './components/CarDecoration';
import { Team } from './components/Team';
import axios from 'axios';


function App() {
  return (
    <>
    <BrowserRouter>
   <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        {/* <Route path="/Home" element={<Home/>}/>
          <Route index element={<Home />} /> */}
           <Route path="/Home" element={<Home/>} />
           <Route path="/About" element={<About/>} />
            <Route path="/Wedding" element={<Wedding/>} />
            <Route path="/Temple" element={<Temple/>} />
            <Route path="/Reception" element={<Reception/>} />
            <Route path="/Haldi" element={<Haldi/>} />
            <Route path="/Bday" element={<Bday/>} />
            <Route path="/CarDecoration" element={<CarDecoration/>} />

          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/ConnectWithUs" element={<ConnectWithUs/>}/>
          <Route path="/Testimonial" element={<Testimonial/>} />

          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<Nopage />} />
       
      </Routes>
      <Totop/>
      <Footer/>
    </BrowserRouter>   
    


</>

  );
}

export default App;
