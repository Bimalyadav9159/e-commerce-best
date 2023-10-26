import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = ({logoutx}) => {
    const nagivate = useNavigate()
    function logout(){
        logoutx();
        nagivate('auths')
    }
  return (
    <div>
      <h1>Dashboard page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
