import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const About = (props) => {
  const param = useParams()
  return (
    <div>
      <h1>About pages</h1>
      <ul>
        <li><Link to="abouttc">Technical skills</Link></li>
        <li><Link to="/about/aboutme">About Me</Link></li>
        <li><Link to="aboutntc">Non-Technical Skills</Link></li>
        <li><Link to="aboutntc/123">Non-Technical Skills ID</Link></li>
      </ul>
      <h3>{param.id}</h3>
      <Outlet/>
    </div>
  )
}

export default About
