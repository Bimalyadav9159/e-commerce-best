import React, { useEffect, useState } from 'react'
import Usestate from './Usestate'

const Useeffect = () => {
    const [content, setContent] = useState('posts')
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    useEffect(()=>{
        console.log('componentDidMount')
    },[])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/'+content)
      .then(response => response.json())
      .then(json => setItems(json))
        console.log('componentDidUpdate')
        return ()=>{
            // cleaning
            console.log('Unmount')
        }
        
    },[content])
  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={()=>{setContent(count+1)}}>Click {count}</button>
      <button onClick={()=>{setContent('posts')}}>Posts</button>
      <button onClick={()=>{setContent('users')}}>Users</button>
      <button onClick={()=>{setContent('comment')}}>Comment</button>

      <h3>{content}</h3>
      <ul>
        {items && items.map(item=>{
          return  <li key={item.id}>{item.id}</li>
        })}
      </ul>
      
    </div>
  )
}

export default Useeffect
