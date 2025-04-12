import React from 'react'
import '../stylesheets/Navbar.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='main-navbar'>
      <div className="logo">
        <img src={logo} alt="" />
        <a href="/"><div>Draft</div></a>
      </div>
      
      <div className="links">
        <NavLink to="/" className={({isActive})=> isActive ? "active":""}>
            Home
        </NavLink>
        <NavLink to="/notes" className={({isActive})=> isActive ? "active":""}>
            All Notes
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
