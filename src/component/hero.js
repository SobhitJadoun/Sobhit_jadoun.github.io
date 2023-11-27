import React from 'react'
import pic from '../img/pic.png'
export default function hero() {
  return (
    <>
      <div className="conatiner-fluid hero">
        <div className="row">
            <div className="col-12 col-md-6 left">
                <h1 className="intro">I'm <span>Sobhit</span> Jadoun</h1>
                <p>Web Developer | UI/UX Designer</p>
            <div className="row social-button">
                <div className="col-4 col-sm-4 col-md-4 facebook i-icon">
                <a href="/"> <i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className="col-4 col-sm-4 col-md-4 linkdin i-icon">
               <a href="/"> <i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className="col-4 col-sm-4 col-md-4 instagram i-icon">
               <a href="/"> <i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            </div>
            <div className="col-12 col-md-6 mr-5">
                <img src={pic} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}
