import React, { useEffect } from 'react'


export default function Uselocalstorage(key, vlaue) {
  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(vlaue))
  },[vlaue])
}
