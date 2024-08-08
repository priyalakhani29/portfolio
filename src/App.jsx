import React from 'react'
import '../src/index.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Title from './Components/Servicetitle/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

  return (
    <>
      
      <Navbar />
      <Hero />
      <About />
      <Title />
      <div className='service-box'>
        <Services
          no="01"
          name="Web design"
          desc="Web development is the process of building, programing..."
        />
        <Services
          no="02"
          name="Graphics"
          desc="Web development is the process of building, programing..."
        />
        <Services
          no="03"
          name="Social media"
          desc="Web development is the process of building, programing..."
        />
        <Services
          no="04"
          name="App design"
          desc="Web development is the process of building, programing..."
        />
        <Services
          no="05"
          name=" marketing"
          desc="Web development is the process of building, programing..."
        />
      </div>
      <Contact/>
      <Footer/>
      

    </>
  )
}

export default App
