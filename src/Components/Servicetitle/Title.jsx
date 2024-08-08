import React from 'react'
import '../Services/Services.css'
import theme from '../../assets/theme.svg' 

const Title = () => {
  return (
    <div className='service'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="" />
      </div>
    </div>
  )
}

export default Title
