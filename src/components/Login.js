import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const Navigate = useNavigate();
  return (
    <div className='h-96 flex items-center justify-center'>
      <button className='bg-blue-700 p-6 text-white font-bold text-7xl rounded ' onClick={()=>Navigate("/home")}>Login</button>
    </div>
  )
}
