
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
// import { Sample } from './components/Sample';
import Totop from './components/Totop';
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
           <Route path="/About" element={<About/>} />
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
