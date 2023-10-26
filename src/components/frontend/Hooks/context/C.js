import React, { useContext } from 'react'
import D from './D'

    import { Address } from './A'
 

const C = () => {
    const addr = useContext(Address)
  return (
    <div>        
      <D/>    
     {addr}
    </div>
  )
}

export default C
