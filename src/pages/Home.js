import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Forms from '../components/frontend/Forms'
import Feedback from '../components/frontend/Feedback'
import { Link } from 'react-router-dom'

const Home = () => {
  const[ok, setOk]=useState(true)
const navigate =useNavigate()
  return (
    <div>
      <h1> Home page</h1>
      <Button done={()=>alert(ok?"every things is ok": "Not Ok")}>Click Me </Button>
      <Button done={()=> alert("Successfuly submited")}>Submit</Button>
      <button onClick={()=>navigate('/contact')} >Move to contact</button>
      <Link to="https://www.freecodecamp.org/news/how-to-use-urls-for-state-management-in-react/"><button>Course</button></Link>
      
       {/* Move to contact page clicking on button */}

       <button onClick={()=>navigate('/contact')} >Send data to contact</button>
       <Forms></Forms>
       <Feedback/>
    </div>
  )
}

export default Home
