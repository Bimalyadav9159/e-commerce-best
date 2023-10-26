import React, { useState } from 'react'

const Forms = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
    function handleFirstNameChange(e){
        setFirstName(e.target.value);
        setFullName(e.target.value +' '+ lastName)
    }
    function handleLastNameChange(e){
        setLastName(e.target.value);
        // setFullName(firstName + ' ' + e.target.value);
        setFullName(`${firstName} ${e.target.value}`);
    }
  return (
    <div>
      <h2>Let's check you in </h2>
      <label htmlFor="">
        First name:{''}
        <input 
        type="text" 
        value={firstName} 
        onChange={handleFirstNameChange}
        />
      </label>
      <label htmlFor="">
        Last name: {''}
        <input 
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  )
}

export default Forms

