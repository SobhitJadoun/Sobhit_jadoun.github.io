import React from 'react'
import about from '../img/about.c07f3d2b.png'
export default function About() {
  return (
    <>
      <div className="container-fluid about">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 left">
            <img src={about} alt="" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 right">
                <h1>I create products not just art</h1>
                <p>Hello everyone, I am Sobhit Jadoun a web developer who loves to create and beautify websites. I love making new websites which are easy to use and can be accessed by anyone. I love to have my clients happy with the site’s performance, which they are able to see on their personal devices. Apart from this, I have also worked in several renowned companies from around the world. I hope I get the opportunity to work in your esteemed organization. That’s all from my side. </p>
                <button type='btn' name='Lets talk' className='btn-main mx-5'>Lets Talk</button>
   
            </div>
        </div>
      </div>
    </>
  )
}
