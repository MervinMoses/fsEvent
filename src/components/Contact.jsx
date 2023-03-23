import React,{ useState } from 'react'
import { Headers } from './Headers'



export const Contact = () => {
  const [credentials, setCredentials] = useState(
    { 
    name:"",
    email: "",
    subject:"",
    message: ""
     }) 

     const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,subject,message}=credentials

    const res = await fetch("/connectrout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            name,email,subject,message
          })
    });
    const data =await res.json()

    if(data.status===442||!data)  {
      window.alert("invalid argument")
      console.log("msg not sent")
    }
    else{
      
      window.alert("Your message is successfully sent")
      console.log("msg sent")

      
    }

  }

  
  return (
    <>
    <Headers title="Contact us"/>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" >
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
        </div>
        <div className="row g-5 mb-5">
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
        <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                <form method='POST'>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control border-0 bg-light px-4" onChange={onChange} placeholder="Your Name" style={{height:"55px"}}/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control border-0 bg-light px-4" onChange={onChange} placeholder="Your Email" name="email" style={{height:"55px"}}/>
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control border-0 bg-light px-4" onChange={onChange} placeholder="Subject" style={{height:"55px"}}/>
                        </div>
                        <div className="col-12">
                            <textarea className="form-control border-0 bg-light px-4 py-3" rows="4" onChange={onChange} placeholder="Message"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit"onClick={handleSubmit}>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                <iframe className="position-relative rounded w-100 h-100"
                    title="place"src="https://goo.gl/maps/8Bw2nw67ipSq5hAZ7"
                    frameborder="0" s allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
            </div>
        </div>
        </div>
        </div>
        </div>  
</> 
 )
}
