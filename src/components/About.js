import React from 'react'
import aboutimage from '../images/about.png'
const About = () => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="image" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>More than a gym, <q>MANI GYM</q> cultivates a mindset of strength and confidence, fueling your path to success. Empowering Your Fitness Journey - Discover 24-Hour Excellence in our Top-Rated, Unisex Gym. Your Goals, Our Guidance...</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default About