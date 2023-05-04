import React from 'react'
import { Link } from 'react-router-dom'
import { Headers } from './Headers'
// import { Home } from './Home'
import { useEffect } from 'react'


export const Service = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
       <Headers title={"Our services"}/>
       <section className="fruit_section layout_padding">
    <div className="container mx-6">
         <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" >
               
                <h1 className="mb-0">We provide</h1>
            </div>
    
    </div>
    <div className="container-fluid">

      <div className="fruit_container">
      <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
        <div className="box">
          <img src="/img/11.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
            Wedding
              </b></h5>
            <Link to="/Wedding">
             Read More
            </Link>
          </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
        <div className="box">
          <img src="/img/10.jpg" alt=""/>
          <div className="link_box">
            <h5>
              <b>
              Birthday
              </b></h5>
            <Link to="/Bday">
             Read More
            </Link>
          </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">

        <div className="box">
          <img src="/img/37.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Reception
              </b></h5>
            <Link to="/Reception">
             Read More
            </Link>
          </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">

        <div className="box">
          <img src="/img/temple.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Temple Decoration
              </b></h5>
            <Link to="/Temple">
             Read More
            </Link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">

        <div className="box">
          <img src="/img/8.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
             Haldi  
             </b></h5>
            <Link to="/Haldi">
             Read More
            </Link>

</div>          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">

        <div className="box">
          <img src="/img/mini.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Mini Party & Get2gether
              </b></h5>
            <Link to="/CarDecoration">
             Read More
            </Link> 
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
    </>

  )
}
