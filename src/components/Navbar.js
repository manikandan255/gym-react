import { useState } from "react"
import React from 'react'
import logo from "../images/logo.png"
import {Link} from 'react-scroll'
import logo1 from '../images/logo1.png'

const Navbar = () => {

    const [nav, setNav]= useState(false)

    const changeBackground =()=>{
        if(window.scrollY >= 50){
            setNav(true)
        }else{
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to="main" className="logo" smooth={true} duration={2000}>
            <img src={logo1} alt="logo-image" style={{opacity: "0.6"}}/>
            <img src={logo} alt="logo-image"/>
        </Link>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><Link to="main" smooth={true} duration={1000}>HOME</Link></li>
            <li><Link to="features" smooth={true} duration={1000}>FEATURES</Link></li>
            <li><Link to="presentaion" smooth={true} duration={1000}>OFFER</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>ABOUT</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>CONTACT</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar