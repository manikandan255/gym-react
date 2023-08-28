import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"

import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="aboutus">
                    <h4>Mail:</h4>
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "8px"}}/><a href="mailto:manikandan.k1207@gmail.com" >manikandan.k1207@gmail.com</a></h4>
                </div>
                <div className="mission">
                    <h4>Mission:</h4>
                    <h4>"Empowering Your Fitness Goals"</h4>
                </div>
                <div className="location">
                    <h4>Location:</h4>
                    <ul><li> <p> Poonamallee. &nbsp;</p>
                      <p> Chennai-56.</p></li></ul>
                </div>
            </div>
            <div className="right">
                <div className="contact">
                <h4>Mobile:</h4>
              <h4><FaPhone size={20} style={{color: "#fff", marginRight: "5px"}}/><a href="tel:+91 73585 01827" style={{color:"#fff"}}>+91 73585 01827</a></h4>
                </div>
              <div className="social">
                <h4>Connect with Us:</h4>
              <FaFacebook size={30} style={{color: "blue", marginRight: "1rem"}}/>
              <FaTwitter size={30} style={{color: " rgb(8, 200, 239)", marginRight: "1rem"}}/>
              <FaInstagram size={30} style={{color: "rgb(245, 13, 152)", marginRight: "1rem"}}/>
              <FaWhatsapp size={30} style={{color: "lightgreen", marginRight: "1rem"}}/>
              
              </div>
              <div className="copyright">
                <h4>Copyright: &nbsp; Mani Fitness &copy;{year.getFullYear()}</h4>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
