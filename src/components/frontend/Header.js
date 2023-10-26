import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <div className='navbar'>
      <Link to='/'><h1>Header</h1></Link>
      <Navbar/>
      {/* <ul className='nav-item'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="services">Services</Link></li>
        <li><Link to="aboutme">AboutMe</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul> */}
    </div>
  )
}

export default Header
