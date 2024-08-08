import React from 'react'
import './Services.css'

const Services = (props) => {
  return (
  
      <div id='services' className='services'>
        
        <div className="services-container">
            <h3>{props.no}</h3>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
      
    </div>
    
  )
}

export default Services
