import React, { useRef } from 'react'
import './Navbar.css'

const Navbar = () => {
const menuRef = useRef();

const openMenu = () =>{
  menuRef.current.style.right="0";
}
const closeMenu = () =>{
  menuRef.current.style.right="-350px";
}
  

  return (
    <div className='navbar'>
        <h1>PRIYA</h1>
        <i class="fa-solid fa-bars nav-open" onClick={openMenu}></i>
        <ul ref={menuRef} className="nav-menu">
            <i class="fa-solid fa-xmark nav-close" onClick={closeMenu}></i>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <a href='#contact' className="nav-connect">Connet With Me
        </a>
    </div>
  )
}

export default Navbar
