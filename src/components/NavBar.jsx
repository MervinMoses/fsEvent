import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
    
    <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <NavLink to="/Home" className="navbar-brand p-0">
           <h1 style={{fontFamily:"Papyrus"}}>fsevents</h1>
        </NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>  
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                <NavLink to="/Gallery" className="nav-item nav-link">Gallery</NavLink>
                <NavLink to="/Testimonial" className="nav-item nav-link">Testimonial</NavLink>
                <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
            </div>
            <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"></button>
            <NavLink to="/ConnectWithUs" className="btn btn-primary me-md-2">Book an event</NavLink>
        </div>
    </nav>
</div> 

</>
 )
}
