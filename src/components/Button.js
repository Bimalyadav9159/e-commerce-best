import React from 'react'

const Button = ({children, done}) => {
  return (
    <div>
      <button onClick={done}>
        {children}
      </button>
    </div>
  )
}

export default Button
