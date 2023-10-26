import React from 'react'
import Usestate from '../components/frontend/Hooks/Usestate'
import Useeffect from '../components/frontend/Hooks/Useeffect'
import A from '../components/frontend/Hooks/context/A'
import Reducer from '../components/frontend/Hooks/Reducer'
import Refstate from '../components/frontend/Hooks/Refstate'
const Services = () => {
  return (
    <div>
      <h1>Service page</h1>
      <h1>Hooks </h1>
      <Usestate/>
      <Useeffect/>
      <A/>
      <Reducer/>
      <Refstate/>
    </div>
  )
}

export default Services
