import React, { useRef, useState,useEffect } from "react";
import { Headers } from "./Headers";
import emailjs from "@emailjs/browser";

export const ConnectWithUs = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();
  const [credentials, setCredentials] = useState(
    { 
    name:"",
    email: "",
    mobile:"",
    venue:"",
    tEvent:"",
    budget:"",
    eDate:"",
    nGuest:"",
    Comments:""
     }) 

  const handlesub = async (e) => {
      const { name,email,mobile,venue,tEvent,budget,eDate,nGuest,comments}=credentials
      const res = await fetch("http://localhost:2000/getQuote", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
              name,email,mobile,venue,tEvent,budget,eDate,nGuest,comments
            })
      });
      const data =await res.json()
  
      if(data.status===442||!data)  {
        window.alert("invalid argument")
        console.log("msg not sent")
      }

      if(credentials.name && credentials.email && credentials.tEvent&& credentials.budget&&credentials.venue&&credentials.eDate)
      {
    emailjs
      .sendForm(
        "service_zxa5my8",
        "template_exqfeon",
        form.current,
        "jplbPFxbmPoCavtkV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
       window.alert("Your message is successfully sent")
        console.log("msg sent")
        console.log(credentials)
      }
      else
      {
        window.alert("Please fill Your details")
        return

      }
      if (credentials.mobile !== "undefined") {

        var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
        if (!pattern.test(credentials.mobile)) {
            window.alert("Please enter only numbers")
        } else if (credentials.mobile.length !== 10) {

          window.alert("Please enter a valid phone number")
        }
    }
  }
  return (
    <>
      <Headers title={"Get a Quote"} />

      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <div class="formbold-form-title">
            <h2 class="">Get Quote</h2>
            <p>
              Please provide required details of the event for further contact
            </p>
          </div>
          <form onSubmit={handlesub} ref={form}>
            <div class="formbold-mb-3 border-0 bg-light px-4 py-3">
              <div>
                <label for="firstname" class="formbold-form-label">
                  <b>Full name</b>
                </label>
                <input
                  type="text"
                  name="name"
                  id="firstname"
                  class="formbold-form-input"
                  onChange={(e) => {
                  setCredentials((credentials) => ({
                    ...credentials,
                    name: e.target.value,
                  }));
                }}  
                />
              </div>
            </div>

            <div class="formbold-input-flex">
              <div class="formbold-mb-3 border-0 bg-light px-4 py-3">
                <label for="email" class="formbold-form-label">
                  {" "}
                  <b>Email</b>{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="formbold-form-input"
                  onChange={(e) => {
                    setCredentials((credentials) => ({
                      ...credentials,
                      email: e.target.value,
                    }));
                  }}
                />
              </div>

              <div class="formbold-mb-3 border-0 bg-light px-4 py-3">
                <label for="phone" class="formbold-form-label">
                  {" "}
                  <b>
                  Phone number{" "}
                  </b>                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  class="formbold-form-input"
                  onChange={(e) => {
                    setCredentials((credentials) => ({
                      ...credentials,
                      mobile: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>

            <div class="formbold-mb-3 border-0 bg-light px-4 py-3">
              <label for="address" class="formbold-form-label">
                <b>Venue</b>{" "}
              </label>
              <input
                type="text"
                name="venue"
                id="venue"
                class="formbold-form-input"
                onChange={(e) => {
                  setCredentials((credentials) => ({
                    ...credentials,
                    venue: e.target.value,
                  }));
                }}
              />
            </div>

            <div class="formbold-mb-3 border-0 bg-light px-4 py-3">
              <label for="address" class="formbold-form-label">
                <b>Event</b>{" "}
              </label>
              <select name="tEvent"  onChange={(e) => {
                    setCredentials((credentials) => ({
                      ...credentials,
                      tEvent: e.target.value,
                    }));
                  }}>
                <option value="math">Select Option</option>
                <option value="Reception">Reception</option>
                <option value="Wedding">Wedding</option>
                <option value="BirthDay Party">BirthDay Party</option>
                <option value="Car Decoration">Car Decoration</option>
                <option value="Haldi">Haldi</option>
                <option value="Temple Decoration">Temple Decoration</option>

              </select>
            </div>

            <div class="formbold-mb-3 border-0 bg-light px-4 py-3 ">
              <label for="address2" class="formbold-form-label">
                <b>Date of Event</b>
              </label>
              <input
                type="date"
                // value={values.birthdate} onChange={handleChange}
                name="eDate"
                onChange={(e) => {
                  setCredentials((credentials) => ({
                    ...credentials,
                    eDate: e.target.value,
                  }));
                }}
              />
            </div>

            <div class="formbold-input-flex ">
              <div class="formbold-mb-3 border-0 bg-light px-4 py-3">
                <label for="state" class="formbold-form-label">
                  {" "}
                  <b>Estimated Budget</b>{" "}
                </label>
                <input
                  type="number"
                  name="budget"
                  id="budget"
                  min="5000"
                  max="10000000"
                  step="20000"
                  onChange={(e) => {
                    setCredentials((credentials) => ({
                      ...credentials,
                      budget: e.target.value,
                    }));
                  }}
                />
              </div>
              <div class="formbold-mb-3 border-0 bg-light px-4 py-3">
                <label for="country" class="formbold-form-label">
                  {" "}
                  <b>Number of Guest</b>{" "}
                </label>
                <input
                  type="number"
                  name="nGuest"
                  id="guest"
                  min="50"
                  max="10000000"
                  step="50"
                  onChange={(e) => {
                    setCredentials((credentials) => ({
                      ...credentials,
                      nGuest: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>

            <div class="formbold-mb-3">
              <textarea
                name="comments"
                className="form-control border-0 bg-light px-4 py-3"
                rows="4"
                placeholder="comments"
                onChange={(e) => {
                  setCredentials((credentials) => ({
                    ...credentials,
                    comments: e.target.value,
                  }));
                }}
              ></textarea>
            </div>

            <button class="btn btn-primary w-100 py-3-btn" type="submit" onClick={handlesub}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
