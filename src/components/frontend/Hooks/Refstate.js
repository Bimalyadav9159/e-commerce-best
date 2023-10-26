import React, { useRef } from 'react'

const Refstate = () => {
    const inputRef = useRef()
    function handleRef(){
       console.log('inputRef, handleRef')
        inputRef.current.focus()
        // inputRef.current.vlaue="adfd"
        inputRef.current.style.color="red"
    }

  return (
    <div>
      <h1>UseRef</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleRef}>Click Here</button>
    </div>
  )
}

export default Refstate
