import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
      
       <li> <NavLink style={({isActive})=>{
        return{color:isActive?'red':''}
       }} to="/">Home</NavLink> </li> 
        <li><NavLink style={({isActive})=>{
        return{color:isActive?'red':''}
       }} to="about">About</NavLink> </li>
        <li><Link to="services">Services</Link></li>
        <li><Link to="contact"> Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
