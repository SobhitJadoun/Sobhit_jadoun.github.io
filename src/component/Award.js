import React from 'react'
import Infosys from '../img/infosys.PNG';
import Node from '../img/node.PNG';
import ReactPic from '../img/react.PNG';
import Dev from '../img/Dev.PNG'
import Micro from '../img/Microsoft.PNG'
import Automation from '../img/Automation.PNG'
const Award = () => {
  return (
    <>
     <div className="container award ">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6  mb-4 ">
                <img className='img-fluid rounded' src={Infosys} alt="" />
                <h2 className='text-light text-center mt-1'>Certification Of Angular</h2>
                <h3 className='text-light text-center mt-1'>Provided By Infosys</h3>
            </div>
            <div className="col-12 col-sm-6 col-md-6  ">
                <img className='img-fluid rounded' src={Node} alt="" />
                <h2 className='text-light text-center mt-1'>Certification Of Node JS</h2>
                <h3 className='text-light text-center mt-1'>Provided By Infosys</h3>
            </div>
        </div>
        <div className="row ">
            <div className="col-12 col-sm-6 col-md-6 mb-4 ">
                <img className='img-fluid rounded' src={ReactPic} alt="" />
                <h2 className='text-light text-center mt-1'>Certification Of React JS</h2>
                <h3 className='text-light text-center mt-1'>Provided By Infosys</h3>
            </div>
            <div className="col-12 col-sm-6 col-md-6  ">
                <img className='img-fluid rounded' src={Dev} alt="" />
                <h2 className='text-light text-center mt-1'>Certification Of DevTown</h2>
                <h3 className='text-light text-center mt-1'>Provided By Devtown</h3>
            </div>
        </div>
        <div className="row ">
            <div className="col-12 col-sm-6 col-md-6 mb-4 ">
                <img className='img-fluid rounded' src={Micro} alt="" />
                <h2 className='text-light text-center mt-1'>Certification Of Hotstar</h2>
                <h3 className='text-light text-center mt-1'>Provided By Microsoft Learn</h3>
            </div>
            <div className="col-12 col-sm-6 col-md-6 auto ">
                <img className='img-fluid rounded' src={Automation} alt="" />
                <h2 className='text-light text-center mt-1'>Certification Of Automation</h2>
                <h3 className='text-light text-center mt-1'>Provided By Automation Anywhere</h3>
            </div>
        </div>
     </div>
    
    </>
  )
}

export default Award
