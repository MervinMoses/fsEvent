import React from 'react'
import { Link } from 'react-router-dom'
import { Headers } from './Headers'

export const Sample = (props) => {
    const namingCeremony=()=>{
        console.log("clicked")
    }
    const clickOrchestra=()=>{
        console.log("clicked")
    }
    const clickBirthday=()=>{
        console.log("clicked")
    }
    const clickReception=()=>{
        console.log("clicked")
    }
    const clickWedding=()=>{
        
    }
  return (
    <>

     <Headers title={"Our Services"}/>
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
                            <i className="bi bi-arrow-right" onClick={clickWedding}></i>
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
                        <h4 className="mb-3">reception</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <Link className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right" onClick={clickReception}></i>
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
                            <i className="bi bi-arrow-right" onClick={clickBirthday}></i>
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
                            <i className="bi bi-arrow-right" onClick={clickOrchestra}></i>
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
                            <i className="bi bi-arrow-right" onClick={namingCeremony}></i>
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
    </div>
    </>

  )
}
