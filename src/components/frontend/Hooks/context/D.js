import React, { useContext } from 'react'
import {FirstName, LastName}  from './A'

const D = () => {
    const firstname = useContext(FirstName)
    const lastname =useContext(LastName)
  return (
    <div>
      {firstname} {lastname}
    </div>
  )
}

export default D
