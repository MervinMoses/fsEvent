import React,{ useRef, useState,useEffect} from 'react'
import { Headers } from './Headers'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form =useRef();
  const [credentials, setCredentials] = useState(
    { 
    name:"",
    email: "",
    subject:"",
    message: ""
     }) 



  const handleSubmit = async (e) => {

    const {name,email,subject,message}=credentials
    const res = await fetch("http://localhost:2000/connectrout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            name,email,subject,message
          }),
    });

    const data =await res.json()
      console.log(data.status);
    if(data.status===442||!data)  {
      window.alert("invalid argument")
      console.log("msg not sent")
    }
    console.log(credentials);
    if(credentials.name && credentials.email)
    {
      e.preventDefault();
        emailjs.sendForm('service_zxa5my8', 'template_56q6axr', form.current, 'jplbPFxbmPoCavtkV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      window.alert("Your message is successfully sent")
      console.log("msg sent")
      console.log(credentials)
      
    }
     else
      {
        window.alert("Please fill Your details")

      }

   }


  return (
    <>
    <Headers title="Contact Us"/>
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
              <p className="m-0">Brahmavar,Mangalore</p>
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
              <p className="m-0">fseventbvr@gmail.com</p>
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
              <p className="m-0">+91 9972992466</p>
            </div>
          </div>
        </div>
      </div>

        <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                <form ref={form} onSubmit={handleSubmit} >
                    <div className="row g-3"> 
                        <div className="col-md-6">
                            <input type="text" className="form-control border-0 bg-light px-4" 
                             onChange={(e) => {
                    setCredentials((credentials) => ({
                      ...credentials,
                      name: e.target.value,
                    }));
                  }} placeholder="Your Name"name="user_name" style={{height:"55px"}}/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control border-0 bg-light px-4"  
                            onChange={(e) => {
                              setCredentials((credentials) => ({
                      ...credentials,
                      email: e.target.value,
                    }));
                  }} placeholder="Your Email" name="user_email" style={{height:"55px"}}/>
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control border-0 bg-light px-4"  
                            onChange={(e) => {
                              setCredentials((credentials) => ({
                      ...credentials,
                      subject: e.target.value,
                    }));
                  }} placeholder="Subject" name="subject" style={{height:"55px"}}/>
                        </div>
                        <div className="col-12">
                            <textarea className="form-control border-0 bg-light px-4 py-3" rows="4"  
                            onChange={(e) => {
                              setCredentials((events) => ({
                      ...credentials,
                      message: e.target.value,
                    }));
                  }} name="message" placeholder="Message"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit" >Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
      <iframe
        className="position-relative rounded w-100 h-100"
        title="place"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1492.0416322855658!2d74.72811491503772!3d13.443394741015352!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680166938733!5m2!1sen!2sin" 
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
        </div>
        </div>
        </div>
        </div>  
</> 
 )
}
