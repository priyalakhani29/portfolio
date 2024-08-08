import React from 'react'
import './About.css'
import girl from '../../assets/girl.svg'
import theme from '../../assets/theme.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={girl} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p> I am experienced Frontend Developer wth over in the field. Throughout my career, I have honed my expertise in crafting responsive, elegant, and frameworks.</p>
            <p>Throughout this portfolio, you'll find a collection of projects that highlight my technical abilities and creative approach. </p>
          </div>
          <div className="about-skills">

            <div className="aboutskill"><p>HTML & CSS</p><hr style={{ width: "40%" }} /></div>
            <div className="aboutskill"><p>React Js</p><hr style={{ width: "70%" }} /></div>
            <div className="aboutskill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
            <div className="aboutskill"><p>Next Js</p><hr style={{ width: "50%" }} /></div>

          </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achieve">
          <h1>10+</h1>
          <p>YEARS OS EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achieve">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achieve">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>
    </div>
  )
}

export default About
