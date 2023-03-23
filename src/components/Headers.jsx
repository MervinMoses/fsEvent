import React from 'react'


export const Headers = (props) => {
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
          src="/img/28.jpg"
          alt="img"
          style={{ height: "100vh" }}
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-1">
          
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
            {props.title}
            </h1>
       
           
          </div>
        </div>
      </div>
      
    </div>
    </div>

    
 </>
  )
}
