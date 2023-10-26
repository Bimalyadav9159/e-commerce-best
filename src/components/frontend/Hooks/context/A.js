import React, { createContext } from 'react'
import B from './B'
const FirstName = createContext()
const LastName = createContext()
const Address = createContext()
const A = () => {
  return (
    <div>
        <h1>useContext</h1>
        <FirstName.Provider value='Bimal'>
            <LastName.Provider value='yadav'>
               <Address.Provider value='janakpur'>
               <B/>
               </Address.Provider>                 
                
                
            </LastName.Provider>
        
        </FirstName.Provider>
      
    </div>
  )
}


export default A
export {FirstName, LastName, Address}