import React from 'react'
import { Link } from 'react-router-dom'
import { Headers } from './Headers'
import { useEffect } from 'react'

export const Testimonial = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Headers title= {"Testimonial"}/>
    <div class="about">
    <div class="container">
       <div class="row">
          <div class="col-md-12">
             <div class="titlepage">
               <center> <h2>People Says About us</h2> </center>
             </div>
          </div>
       </div>
       <div class="row">
          <div class="col-md-12">
             <div id="myCarousel" class="carousel slide about_Carousel " data-ride="carousel">
                <ol class="carousel-indicators">
                   <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
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
                                     <h4>Arjun K</h4>
                                     <p> “I recently hired this FS Event management team for my wedding, and I cannot recommend them enough! From the very beginning, they  took the time to listen to my vision and understand what was important to me. I was able to relax and enjoy my special day knowing that everything was in capable hands. Thank you so much for making my wedding dreams a reality!” </p>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="carousel-item">
                      <div class="container">
                         <div class="carousel-caption">
                            <div class="row">
                               <div class="col-md-12">
                                  <div class="test_box">
                                     <h4>Aman</h4>
                                     <p> “I organized a corporate conference for my company and reached out to the FS Event management team for their services. I was blown away by their professionalism, expertise, and attention to detail. They took care of every aspect of the event, from venue selection to vendor coordination, and even managed last-minute changes with ease. Their level of service is unparalleled, and they truly go above and beyond to ensure that every aspect of your event is expected seamlessly.” </p>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="carousel-item">
                      <div class="container">
                         <div class="carousel-caption">
                            <div class="row">
                               <div class="col-md-12">
                                  <div class="test_box">
                                     <h4>Anrica Neola</h4>
                                     <p>“I hired this FS Event management team to plan my daughter’s sweet 16 party, and I was blown away by their creativity and attention to detail. They took my daughter’s vision and turned it into a stunning reality, with beautiful decor, delicious food, and fun activities for all the guests. The party was a huge success, and my daughter and her friends are still talking about it! I couldn’t have asked for a better event management team to bring my daughter’s dream party to life. Thank you so much for making it a night to remember!”                                  </p>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <br/>
                
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
             </div>
          </div>
       </div>
    </div>
 </div>
 </>  
 )
}
