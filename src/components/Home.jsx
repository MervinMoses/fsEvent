import React from "react";
import { Link, NavLink } from "react-router-dom";
import { About } from "./About";
import { Gallery } from "./Gallery";
import { Service } from "./Service";
import { Happyclient } from "./Happyclient";
import { useEffect } from 'react'


export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src="/img/38.jpg"
              alt="img"
              style={{ height: "100vh" }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-1">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Creative & Innovative
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Decorate Your Destination
                </h1>
                <Link
                  to="/ConnectWithUs"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </Link>
                <Link
                  to="/Contact"
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact With Us
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/40.jpg" alt="img" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-1">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Creative & Innovative
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Decorate Your Destination
                </h1>
                <NavLink
                  to="/ConnectWithUs"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </NavLink>
                <NavLink
                  to="/Contact"
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact With Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <section className="fruit_section layout_padding">
        <div className="container mx-6">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h1 className="mb-0">We provide</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fruit_container">
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="box">
              <img src="/img/11.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Wedding</b>
                </h5>
                <Link to="/Wedding">Explore</Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="box">
              <img src="/img/10.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Birthday</b>
                </h5>
                <Link to="/Bday">Explore</Link>
              </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">

            <div className="box">
              <img src="/img/37.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Reception</b>
                </h5>
                <Link to="/Reception">Explore</Link>
              </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="box">
            <img src="/img/temple.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Temple Decoration
              </b>
                </h5>
                <Link to="/Temple">Explore</Link>
              </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="box">
              <img src="/img/8.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Haldi</b>
                </h5>
                <Link to="/Haldi">Explore</Link>
              </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="box">
            <img src="/img/mini.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Mini Party & Get2gether</b>              </h5>
                <Link to="/CarDecoration">Explore</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
        
      </section>
      </div>
      {/* 
<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" >
                <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                <h1 className="mb-0">We provide:</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        </div>
                        <figure>
                        <img src="/img/user.jpg" alt="" />     
                        <h4 className="mb-3">Wedding</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        </div>
                        <figure>    
                        <img src="/img/user.jpg" alt="" />     
                        <h4 className="mb-3">Birthday</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        </div>

                        <figure>
                        <img src="/img/user.jpg" alt="" />     
                        <h4 className="mb-3">Birthday</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <figure>
                        <img src="/img/user.jpg" alt="" />     
                    <h4 className="mb-3">orchestra</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                       </Link>
                       </figure>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <figure>
                        <img src="/img/user.jpg" alt="" />           
                         <h4 className="mb-3">Naming cermony</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 className="text-white mb-3">Call Us For Quote</h3>
                        <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 className="text-white mb-0">9874563210</h2>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

      <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center pb-1">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">

                    <center><h1 className="mt-2 mb-4" style={{ fontSize: '50px' }}>Who Are We</h1></center>
                    </div>
                    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.3s">

                    <p className="mb-4">Whether you’re a seasoned event organizer or putting together an event for the first time, a professional event planner goes a long way to making sure your event is the best it can be.Our mission is to bring your vision to life and create an event that reflects your personality,style,and goals. V3 Events is able to plan small and large-scale events down to the minute details, meticulously organizing every aspect to make sure that your special day or night runs without a hitch. 
Our trained and skilled event planners have the right expertise to make your event more spectacular with more than 15 years of full-time experience in the event management & Wedding Planning industry, we are serving our customers with the best possible services delivered at the best possible rates. We are a one stop hub for all your event & Wedding Planning related requirements. Starting from venue Selection hotels booking, hospitality, decor recommendation, catering, and celebrity management to entertainment options, we deal with everything which is required for making your event a memorable one. With years of experience in the industry, we have developed a deep understanding of what it takes to execute successful events, from corporate conferences and product launches to weddings and social gatherings. Our services include event planning, design and decor,vendor coordination,logistics management, and on-site coordination. Thank you for considering our event management services. We look forward to creating an unforgettable event with you!
</p>
                </div>
           </div>
        </div>
    </div>
     
            <div className="container mx-6">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
        <h1 className="mb-0">People Say About Us</h1>
        </div>
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.3s">

          <div class="about">
              <div class="row mt-6">

                <div class="col-md-14">
                  <div
                    id="myCarousel"
                    class="carousel slide about_Carousel "
                    data-ride="carousel"
                  >
                    <ol class="carousel-indicators">
                      <li
                        data-target="#myCarousel"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="container">
                          <div class="carousel-caption ">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="test_box">
                                 
                                  <h4></h4>
                                  <p>
                                  “I recently hired this FS Event management team for my wedding, and I cannot recommend them enough! From the very beginning, they  took the time to listen to my vision and understand what was important to me. I was able to relax and enjoy my special day knowing that everything was in capable hands. Thank you so much for making my wedding dreams a reality!” 
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="container">
                          <div class="carousel-caption">
                            <div class="row mt-4">
                              <div class="col-md-12">
                                <div class="test_box">
                                  
                                  <h4>Aman</h4>
                                  <p>
                                  “I organized a corporate conference for my company and reached out to the FS Event management team for their services. I was blown away by their professionalism, expertise, and attention to detail. They took care of every aspect of the event, from venue selection to vendor coordination, and even managed last-minute changes with ease. Their level of service is unparalleled, and they truly go above and beyond to ensure that every aspect of your event is expected seamlessly.” </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="container">
                          <div class="carousel-caption">
                            <div class="row mt-4">
                              <div class="col-md-12">
                                <div class="test_box">
                                 
                                  <h4>Anrica Neola</h4>
                                  <p>
                                  “I hired this FS Event management team to plan my daughter’s sweet 16 party, and I was blown away by their creativity and attention to detail. They took my daughter’s vision and turned it into a stunning reality, with beautiful decor, delicious food, and fun activities for all the guests. The party was a huge success, and my daughter and her friends are still talking about it! I couldn’t have asked for a better event management team to bring my daughter’s dream party to life. Thank you so much for making it a night to remember!”                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br>
                    </br>
                    <a
                      class="carousel-control-prev"
                      href="#myCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#myCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
};
