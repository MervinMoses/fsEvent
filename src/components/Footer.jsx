import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
        <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
                <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                    <Link to="index.html" className="navbar-brand">
                        <h1 className="m-0 text-white">fsevents</h1>
                    </Link>
                   
                   
                </div>
            </div>
            <div className="col-lg-8 col-md-1">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-12 pt-5 mb-5">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="text-light mb-0">Get In Touch</h3>
                        </div>
                        <div className="d-flex mb-2">
                            <i className="bi bi-geo-alt text-primary me-2"></i>
                            <p className="mb-0">Brahmavar, Mangalore </p>
                        </div>
                        <div className="d-flex mb-2">
                            <i className="bi bi-envelope-open text-primary me-2"></i>
                            <p className="mb-0">fseventbvr@gmail.com</p>
                        </div>
                        <div className="d-flex mb-2">
                            <i className="bi bi-telephone text-primary me-2"></i>
                            <p className="mb-0">+91 9972992466 </p>
                        </div>
                        <div className="d-flex mt-4">
                            <NavLink className="btn btn-primary btn-square me-2" to="https://instagram.com/fill_your_soul2?igshid=YmMyMTA2M2Y="><i className="fa-brands fa-instagram"></i></NavLink>
                            <NavLink className="btn btn-primary btn-square me-2" to="/"><i className="fab fa-facebook-f fw-normal"></i></NavLink>
 
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 pt-0 pt-lg-5 mb-5">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="text-light mb-0">Quick Links</h3>
                        </div>
                        <div className="link-animated d-flex flex-column justify-content-start">
                            <Link className="text-light mb-2" to="/Home"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                            <Link className="text-light mb-2" to="/About"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                            <Link className="text-light mb-2" to="/Service"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                            <Link className="text-light" to="/Contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<div className="container-fluid text-white" style={{background:"#061429;"}}>
    <div className="container text-center">
        <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
               
            </div>
        </div>
    </div>
</div>
</>
  )
}
