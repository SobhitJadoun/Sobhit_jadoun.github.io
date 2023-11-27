import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import Hero from './hero'
import About from './About'
import Skill from './skill'
import ServiceSec from './Service.js'
import Social from './Social'
import Talk from './Talk';
import Footer from './Footer';
import '../App.css';
import Award from './Award.js';
const App = () => {
  const [active , setActive] = useState("About");
  return (
    <>
  <Navbar/>
  <Hero/>
  <div className="container-fluid aboutSection">
    <h1>About Me</h1>
    
    <div className="aboutmenu navbar navbar-expand-lg">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="a link nav-link" to="/" onClick={() => setActive("About")}>About<span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="link nav-link" to="/" onClick={() => setActive("skill")}>Skill</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="link nav-link" to="/" onClick={() => setActive("Service")}>Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="link nav-link" to="/" onClick={() => setActive("Social")}>Social Media</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="link nav-link" to="/" onClick={() => setActive("Award")}>Award</NavLink>
      </li>
      
    </ul>
    </div>
   <hr/>
    </div>
  {active === "About" && <About/>}
  {active === "skill" && <Skill/>}
  {active === "Service" && <ServiceSec/>}
  {active === "Social" &&  <Social/>}
  {active === "Award" &&  <Award/>}
  <Talk/>
  <Footer/>
    </>
  )
}

export default App






