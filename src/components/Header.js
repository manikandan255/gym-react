import React from 'react'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <div id='main'>
        <div className="name">
            <h2>STEP UP YOUR <span className='span'>FITNESS</span></h2>
            <h1> WITH <span>MANI</span> GYM</h1>
            <p className="details">Unleash Your Potential and Elevate Your Fitness Journey with Us.</p>
            <div className="header-btns">
                <Link to="contact" smooth={true} duration={1000} className='header-btn'>JOIN US
                  </Link>
            </div>
        </div>
    </div>
  )
}

export default Header