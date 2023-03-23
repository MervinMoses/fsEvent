import React from 'react'
import { Link } from 'react-router-dom'
import { Headers } from './Headers'
// import { Home } from './Home'

export const Service = (props) => {

  return (
    <>
       <Headers title={"Our service"}/>
       <section className="fruit_section layout_padding">
    <div className="container mx-6">
         <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" >
               
                <h1 className="mb-0">We provide:</h1>
            </div>
    
    </div>
    <div className="container-fluid">

      <div className="fruit_container">
        <div className="box">
          <img src="/img/11.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Wedding
              </b></h5>
            <Link to="">
             Read More
            </Link>
          </div>
        </div>
        <div className="box">
          <img src="/img/10.jpg" alt=""/>
          <div className="link_box">
            <h5>
              <b>
              Birthday
              </b></h5>
            <Link to="">
             Read More
            </Link>
          </div>
        </div>
        <div className="box">
          <img src="/img/37.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Reception
              </b></h5>
            <Link to="">
             Read More
            </Link>
          </div>
        </div>
        <div className="box">
          <img src="/img/18.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Orchestra
              </b></h5>
            <Link to="">
             Read More
            </Link>
          </div>
        </div>
        <div className="box">
          <img src="/img/8.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
             Haladi  
             </b></h5>
            <Link to="">
             Read More
            </Link>
          </div>
        </div>
        <div className="box">
          <img src="/img/team-1.jpg" alt=""/>
          <div className="link_box">
            <h5><b>
              Car Decoration
              </b></h5>
            <Link to="">
             Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>

  )
}
