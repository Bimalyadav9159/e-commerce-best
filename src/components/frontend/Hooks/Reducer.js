import React, { useReducer } from 'react'
const initialstate ={count:0}
const reducer = (state, action)=>{
  switch(action.type){
    case 'Decrement':
      return {count:state.count-1}
    case 'Increment':
     return{count:state.count+1}
    case 'Multiple':
     return{count:state.count*2}
    case 'Reset':
      return {count:state.count*0}
    default: 
     return state
  }
 
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
      <h1>Usereducer</h1>
      <button onClick={()=>dispatch({type:'Decrement'})}>-</button>
      <h3>{state.count}</h3>
      <button onClick={()=>dispatch({type:'Increment'})}>+</button>
      <button onClick={()=>dispatch({type:'Multiple'})}>*</button>
      <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
    </div>
  )
}

export default Reducer
