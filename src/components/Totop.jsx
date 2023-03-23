import { useState,useEffect } from "react"
import React from 'react'


export default function Totop() {
   
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const gototop=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
        
  return (
    <>
    <wrapper>
    {showTopBtn && (
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button className="btn btn-primary me-md-2" onClick={gototop}><i class="fa fa-angle-up"></i></button>
    </div>
    )}
    </wrapper>
    </>
  )
}
