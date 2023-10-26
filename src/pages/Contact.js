import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  // console.log(location,'location')
  return (
    <div>
      <h1>Contact page</h1>
      {/* <h3>{location.state.name}</h3> */}
      <h4>{location.pathname}</h4>
    </div>
  )
}

export default Contact
