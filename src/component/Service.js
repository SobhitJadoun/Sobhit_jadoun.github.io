import React from 'react'
import PDesign from '../img/analytics.png'
import Web from '../img/web-design.png'
import Visual from '../img/visual-communication.png'
import Strategy from '../img/analysis.png'
export default function Service() {
  return (
    <>
      <div className="container service mt-3">
        <div className="row icon">
            <div className="col-12 col-sm-6 col-md-6 ">
                <div className="row inner">
                    <div className="col-6 col-sm-6  first">
                    <img src={PDesign} alt=""/>
                    </div>
                    <div className="col-6 col-sm-6 content">
                    <h1>Product Design</h1>
                    <p>I create a Beutiful and user Friendly Product Design also create responsive Design</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 my-4">
                <div className="row inner">
                    <div className="col-6 col-sm-6  second">
                    <img src={Web} alt=""/>
                    </div>
                    <div className="col-6 col-sm-6 content">
                    <h1>Web Design</h1>
                    <p>Web designing is the process of designing a website in a way that is functional and offers a good user experience</p></div>
                </div>
            </div>
        </div>
        

        <div className="row icon my-5">
            <div className="col-12 col-sm-6 col-md-6 col-md-6 ">
                <div className="row inner">
                    <div className="col-6 col-sm-6 col-md-6  third">
                    <img src={Visual} alt=""/>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 content">
                    <h1>Visual Design</h1>
                    <p >Visual design focuses on the aesthetics of a site and its related materials.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 my-4">
                <div className="row inner">
                    <div className="col-6 col-sm-6  four">
                    <img src={Strategy} alt=""/>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 content">
                    <h1>Business Strategy</h1>
                    <p>the strategic initiatives a company pursues to create value for the organization and its stakeholders and gain a competitive advantage in the market</p>
                    </div>
                </div>
            </div>
            
        </div>
            
       
      </div>
    </>
  )
}
