import React from 'react'
import { Link } from 'react-scroll'

const Offer = () => {
  return (
    <div id='presentaion'>
        <div className="pr-heading">
            <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
            <p className='details'>Step into summer and sculpt your best self with our sizzling gym offer!</p>
            <div className="pr-btns">
            <Link to="contact" smooth={true} duration={1000} className='pr-btn'>JOIN NOW
                  </Link>
            </div>
        </div>
    </div>
  )
}

export default Offer