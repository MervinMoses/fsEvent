import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import { Headers } from "./Headers";
import { Team } from "./Team";



export const About = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <Headers title="About Us"/>
      
      <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center pb-1">


                    <center><h1 className="mt-2 mb-4" style={{ fontSize: '100px' }}>Who Are We</h1></center>
                    <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">

                    <p className="mb-4">Whether you’re a seasoned event organizer or putting together an event for the first time, a professional event planner goes a long way to making sure your event is the best it can be.Our mission is to bring your vision to life and create an event that reflects your personality,style,and goals. V3 Events is able to plan small and large-scale events down to the minute details, meticulously organizing every aspect to make sure that your special day or night runs without a hitch. 
Our trained and skilled event planners have the right expertise to make your event more spectacular with more than 15 years of full-time experience in the event management & Wedding Planning industry, we are serving our customers with the best possible services delivered at the best possible rates. We are a one stop hub for all your event & Wedding Planning related requirements. Starting from venue Selection hotels booking, hospitality, decor recommendation, catering, and celebrity management to entertainment options, we deal with everything which is required for making your event a memorable one. With years of experience in the industry, we have developed a deep understanding of what it takes to execute successful events, from corporate conferences and product launches to weddings and social gatherings. Our services include event planning, design and decor,vendor coordination,logistics management, and on-site coordination. Thank you for considering our event management services. We look forward to creating an unforgettable event with you!
</p>
    </div>
                </div>
           </div>
        </div>
    <div className="container-fluid pt-5 pb-2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 mb-5">
                    
                    <h1 className="mt-2 mb-3">"From vision to reality - 15 years of event mastery"</h1>

                    <h4 className="font-weight-normal text-muted mb-4">Experienced in managing events of all sizes for more than 15 years across the region."</h4>
                    <div className="list-inline mb-4">

                        <p className="font-weight-semi-bold mb-2"><i className="fa fa-angle-right text-primary mr-2"></i>Long-standing career in event management</p>
                        <p className="font-weight-semi-bold mb-2"><i className="fa fa-angle-right text-primary mr-2"></i>Masterful event management skills</p>
                        <p className="font-weight-semi-bold mb-2"><i className="fa fa-angle-right text-primary mr-2"></i>successful event management across a variety of industries</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-sm-6 pb-1">
                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                            <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.3s">

                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">15</h2>
                                <h5 className="font-weight-bold mb-4">Years Expereince</h5>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 pb-1">
                        <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.3s">

                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">50</h2>
                                <h5 className="font-weight-bold mb-4">SKilled Experts</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 pb-1">
                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                            <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.3s">
                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">35</h2><br/>
                                <h5 className="font-weight-bold mb-4">Happy Clients</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 pb-1">
                            <div className="d-flex flex-column align-items-center border px-4 mb-4">
                            <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.3s">

                                <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">82</h2>
                                <h5 className="font-weight-bold mb-4">Complete Projects</h5>
                            </div>
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
