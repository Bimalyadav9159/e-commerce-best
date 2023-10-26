import React from 'react'
import { useNavigate } from 'react-router-dom';

const Auths = ({auths}) => {
    const navigate = useNavigate()
    function login(){
        auths();
        navigate('dashboard')
    }
  return (
    <div>
      <h1>This page is Auths write page</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Auths
