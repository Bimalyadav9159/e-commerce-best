import React, { useState } from 'react'

const Feedback = () => {
    const [position, setPosition] = useState({
        x:0,
        y:0
    });
  return (
    <div onPointerMove={e=>{
        setPosition({ 
            x: e.clientX,
            y:e.clientY
        });
    }} >
        <div style={{
            position: 'absolute',
            background: 'red',
            borderRadius: '50%',
            transform: `transtate(${position.x}px, ${position.y}px)`,
            left: 200,
            top: 150,
            widows: 20,
            height: 20,
        }}>

        </div>
        
      feedbac
    </div>
  )
}

export default Feedback
