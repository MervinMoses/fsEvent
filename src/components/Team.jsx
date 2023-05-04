import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';


export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
    <div id="team-section" class="pad-sec">
      <div class="container">
        <div class="title-section animated out" data-animation="fadeInUp" data-delay="0">
          <div class="row">
          <center><div class="col-sm-8 col-sm-offset-2">
              <h2>Our awesome team</h2>
              
              <p>Our team is composed of experienced event professionals with a passion for creating unforgettable experiences. We pride ourselves on our attention to detail, creativity, and commitment to exceeding our client’s expectations.</p>
            </div></center>
          </div> 
        </div> 

        <div class="team-members">
            <center>
            <div class="col-sm-4">
            <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.3s">

              <div class="member-team animated out" data-animation="fadeInLeft" data-delay="0.6s">
                <img src="img/founder.jpg" alt=""/>
                <div class="magnifier">
                  <div class="magnifier-inner">
                    <h3>Dileep Handady</h3>
                    <p>Founder &amp; MD</p>
                    <p>We’ll etch your brand onto tangible objects: business cards, ads, stickers, brochures, you name it. You won’t see business cards, ads, stickers, brochures anything until we’re done drooling at the result.</p>
                    <ul class="social-icons">

                      <li><a data-rel="tooltip" data-toggle="tooltip" data-trigger="hover" data-placement="bottom" data-title="Facebook" href="#" data-original-title="" title=""><i class="fa fa-facebook"></i></a></li>

                      <li><NavLink data-rel="tooltip" data-toggle="tooltip" data-trigger="hover" data-placement="bottom" data-title="Twitter" to="https://instagram.com/fill_your_soul2?igshid=YmMyMTA2M2Y=" data-original-title="" title=""><i class="fa-brands fa-instagram"></i></NavLink></li>



                    </ul>
                  </div> 
                </div> 
                </div>
              </div> 
              
            </div> 

            </center>
          </div>
        </div>
    </div> 
  </section>
  )
}
