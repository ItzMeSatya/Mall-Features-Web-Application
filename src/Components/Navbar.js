import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav class="navbar">
      <div className="logo">
        <img className='vnr' src="https://convergence2k21.netlify.app/images/VNRVJIET%20Logo.png" alt="" />
        <h2>FOOGLY</h2>
      </div>
      <div className="links">
        <ul>
          <a href='/'><li>Home    </li></a>
          <li>|     About Us</li>
          <li>|     Contact</li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar