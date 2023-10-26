import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Frontend = () => {
  return (
    <div>
      
      <Header/> 
      <Sidebar/> 
      <div className='content'>
      <Outlet/>
        </div>    
      
      <Footer/>
    </div>
  )
}

export default Frontend
