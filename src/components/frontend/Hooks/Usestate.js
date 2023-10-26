import React, { useState } from 'react'

const Usestate = () => {
    // const [count, setCount]= useState(0)
    // const [name, setName]= useState('Increment')
    const [state, setState] = useState({count:0, name:'Increment'}) //ex of object
    const count = state.count
    const name = state.name
    
    function increment(){
        // setCount(prevcount=>prevcount+1)
        setState(prevState=>{
            return{...prevState,name:'Increment',  count: prevState.count+1}
        })
    }
    function decrement(){
        // setCount(prevcount=> prevcount-1)
        setState(prevState=>{
            return{...prevState, name:'Decrement',count: prevState.count-1}
        })
    }
  return (
    <div>
     <h3>Usestate </h3>
     <br />
     {name} <br />
     <button onClick={increment}>+</button>
    <h3>{count}</h3>
     <button onClick={decrement}>-</button>

    </div>
  )
}

export default Usestate
