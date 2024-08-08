import React from 'react'
import './Hero.css'
import girl from '../../assets/girl.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={girl} alt="" />
      <h2><span>I'm Priya Lakhani,</span> frontend developer</h2>
      <p>I am a frontend developer from IIHT institute. I can use my thorough knowledge of designing website.</p>
      <div className="hero-action">
        <a href="#contact" className="hero-connect">Connect with Me</a>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
