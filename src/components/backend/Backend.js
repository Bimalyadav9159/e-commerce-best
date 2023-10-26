import React from 'react'
import Leftmenu from './Leftmenu'
import { Outlet } from 'react-router-dom'

const Backend = () => {
  return (
    <div>
      <h1>Backend</h1>
      <Leftmenu/>
      <Outlet/>
    </div>
  )
}

export default Backend
