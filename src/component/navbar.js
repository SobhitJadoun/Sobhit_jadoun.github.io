import React from 'react'

export default function navbar() {
  return (
    <>
<nav className="navbar nav navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Sobhit <span> Jadoun </span></a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="nav-menu collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-5 mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Service</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Contact</a>
        </li>
        
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Blog</a>
        </li>
      </ul>
    <button type='btn' name='Lets talk' className='btn-main mx-5'>Lets Talk</button>
    </div>
  </div>
</nav>
    </>
  )
}
