import React from "react";
import { Link } from "react-router-dom";
import { About } from "./About";
import { Gallery } from "./Gallery";
import { Service } from "./Service";
import { Happyclient } from "./Happyclient";

export const Home = () => {
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
                  to="quote.html"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </Link>
                <Link
                  to=""
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact With Us
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/1.jpg" alt="img" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-1">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Creative & Innovative
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Decorate Your Destination
                </h1>
                <Link
                  to="quote.html"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </Link>
                <Link
                  to=""
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact With Us
                </Link>
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
      <section className="fruit_section layout_padding">
        <div className="container mx-6">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h1 className="mb-0">We provide:</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fruit_container">
            <div className="box">
              <img src="/img/11.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Wedding</b>
                </h5>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className="box">
              <img src="/img/10.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Birthday</b>
                </h5>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className="box">
              <img src="/img/37.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Reception</b>
                </h5>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className="box">
              <img src="/img/18.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Orchestra</b>
                </h5>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className="box">
              <img src="/img/8.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Haladi</b>
                </h5>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className="box">
              <img src="/img/team-1.jpg" alt="" />
              <div className="link_box">
                <h5>
                  <b>Car Decoration</b>
                </h5>
                <Link to="">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      <div className="container mx-6">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
          <h1 className="mb-0">About us:</h1>
        </div>
      </div>
      <div className="row align-items-center pb-1">
        <div className="col-lg-5">
          <img className="img-thumbnail p-3" src="/img/3.jpg" alt="" />
        </div>
        <div className="col-lg-7 mt-5 mt-lg-0">
          <small className="bg-primary text-white text-uppercase font-weight-bold px-1">
            Who We Are
          </small>
          <h1 className="mt-2 mb-4">
            Most Effective Creative Service Provider For Companies
          </h1>
          <p className="mb-4">
            Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor
            vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit
            dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum.
            Labore diam et nonumy amet dolores. Volup sit labore dolores erat,
            magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est
            dolores lorem sed ipsum kasd no amet ipsum.
          </p>
          <Link
            to="/About"
            className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div
            className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
            style={{ height: "120px" }}
          >
            <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
            <div className="d-flex flex-column">
              <h5 className="font-weight-bold">Our Office</h5>
              <p className="m-0">123 Street, New York, USA</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
            style={{ height: "120px" }}
          >
            <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
            <div className="d-flex flex-column">
              <h5 className="font-weight-bold">Email Us</h5>
              <p className="m-0">info@example.com</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
            style={{ height: "120px" }}
          >
            <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
            <div className="d-flex flex-column">
              <h5 className="font-weight-bold">Call Us</h5>
              <p className="m-0">+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container mx-6">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
        <h1 className="mb-0">People Say About Us</h1>
        </div>
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
                                  <i>
                                    <img src="img/testimonial-3.jpg" alt="#" />
                                  </i>
                                  <h4>jhone Du</h4>
                                  <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters,It is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when looking at its
                                    layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                    distribution of letters,It is a long
                                    established fact that a reader will be
                                    distracted by the readable content of a page
                                    when looking at its layout. The point of
                                    using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
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
                                  <i>
                                    <img src="img/testimonial-2.jpg" alt="#" />
                                  </i>
                                  <h4>jhone Du</h4>
                                  <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters,It is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when looking at its
                                    layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                    distribution of letters,It is a long
                                    established fact that a reader will be
                                    distracted by the readable content of a page
                                    when looking at its layout. The point of
                                    using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
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
                                  <i>
                                    <img src="img/testimonial-1.jpg" alt="#" />
                                  </i>
                                  <h4>jhone Du</h4>
                                  <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters,It is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when looking at its
                                    layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal
                                    distribution of letters,It is a long
                                    established fact that a reader will be
                                    distracted by the readable content of a page
                                    when looking at its layout. The point of
                                    using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
        
        
      
    </>
  );
};
