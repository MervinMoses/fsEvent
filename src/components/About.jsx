import React from "react";
import { Link } from "react-router-dom";
import { Headers } from "./Headers";
import { Team } from "./Team";

export const About = (props) => {
  return (
    <>
      <Headers title="About Us"/>
      <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center pb-1">
                <div className="col-lg-5">
                    <img className="img-thumbnail p-3" src="/img/3.jpg" alt=""/>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0">
                    <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Who We Are</small>
                    <h1 className="mt-2 mb-4">Most Effective Creative Service Provider For Companies</h1>
                    <p className="mb-4">Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.</p>
                    <a to="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Read More</a>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: "120px"}}>
                        <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Our Office</h5>
                            <p className="m-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: "120px"}}>
                        <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Email Us</h5>
                            <p className="m-0">info@example.com</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: "120px"}}>
                        <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Call Us</h5>
                            <p className="m-0">+012 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid pt-5 pb-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Why Choose Us</small>
                    <h1 className="mt-2 mb-3">25 Years Expereince</h1>
                    <h4 className="font-weight-normal text-muted mb-4">Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam, est erat lorem</h4>
                    <div className="list-inline mb-4">
                        <p className="font-weight-semi-bold mb-2"><i className="fa fa-angle-right text-primary mr-2"></i>Lorem ut kasd dolores elitr</p>
                        <p className="font-weight-semi-bold mb-2"><i className="fa fa-angle-right text-primary mr-2"></i>Jsto dolor lorem ipsum</p>
                        <p className="font-weight-semi-bold mb-2"><i className="fa fa-angle-right text-primary mr-2"></i>Diama ipsum est dolor</p>
                    </div>
                    <Link to="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Learn More</Link>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-sm-6 pb-1">
                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">25</h2>
                                <h5 className="font-weight-bold mb-4">Years Expereince</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 pb-1">
                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">225</h2>
                                <h5 className="font-weight-bold mb-4">SKilled Experts</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 pb-1">
                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">1050</h2>
                                <h5 className="font-weight-bold mb-4">Happy Clients</h5>
                            </div>
                        </div>
                        <div className="col-sm-6 pb-1">
                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">2500</h2>
                                <h5 className="font-weight-bold mb-4">Complete Projects</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Team/>
    </div>
    
    </>
  );
};
