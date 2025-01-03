import React from 'react'


export default function Navbar() {
  return (
    <>
  <nav id="navbar-example" className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <a className="navbar-brand brand" href="#">START REACT</a>
    <button className="navbar-toggler text-white mybars" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span> Menu</span> <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  my-menu ms-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
          <a className="nav-link active" href="#">Portfolio</a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
  
      </ul>
     
    </div>
  </div>
</nav>

    </>
  )
}
