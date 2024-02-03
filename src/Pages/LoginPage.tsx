import React from 'react'
import './css/LoginPage.css'
import { GoogleLogin } from '@react-oauth/google'
export default function LoginPage() {
  return (
    <div className='login h-[1000px] w-[1304px]'>
      <GoogleLogin onSuccess={()=>{
        console.log("success")
      }}
      onError={()=>{
        console.log("error")
      }}></GoogleLogin>
      <button> Log out </button>
    </div> 
  )
}
